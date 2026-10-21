import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendLeadFallbackToMattermost, type FallbackLeadPayload } from '../../../lib/lead-fallback-mattermost';

const SOURCE = 'contact-page-consultation';
const MAX_BODY_BYTES = 32_768;
const WINDOW_MS = 15 * 60_000;
const CHALLENGE_TTL_MS = 30 * 60_000;
const MAX_ATTEMPTS = 5;
const MAX_CHALLENGE_ISSUES = 20;
const MAX_CHALLENGES = 1_000;
const challenges = new Map<string, { client: string; expires: number }>();
const challengeByClient = new Map<string, string>();
const challengeIssues = new Map<string, number[]>();
const attempts = new Map<string, number[]>();
const personalDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);
const phoneCountries = new Set(['+1', '+44', '+61', '+63', 'other']);
const companySizes = new Set(['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+']);
const positionCounts = new Set(['1', '2 to 3', '4 to 10', '11+', 'Not sure yet']);
const referralSources = new Set(['Google', 'LinkedIn', 'Referral', 'Podcast', 'Other']);
const clean = (value: FormDataEntryValue | null, limit: number) => typeof value === 'string' ? value.trim().slice(0, limit) : '';
const clientIp = (request: Request) => request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
const clientKey = (request: Request) => `${clientIp(request)}|${(request.headers.get('user-agent') || 'unknown').slice(0, 160)}`;

function deleteChallenge(token: string) {
  const value = challenges.get(token);
  challenges.delete(token);
  if (value && challengeByClient.get(value.client) === token) challengeByClient.delete(value.client);
}
function prune(now: number) {
  for (const [token, value] of challenges) if (value.expires <= now) deleteChallenge(token);
  for (const [ip, values] of challengeIssues) {
    const current = values.filter((time) => now - time < WINDOW_MS);
    if (current.length) challengeIssues.set(ip, current); else challengeIssues.delete(ip);
  }
  for (const [ip, values] of attempts) {
    const current = values.filter((time) => now - time < WINDOW_MS);
    if (current.length) attempts.set(ip, current); else attempts.delete(ip);
  }
}
function allowWindowed(map: Map<string, number[]>, key: string, now: number, limit: number) {
  const current = (map.get(key) || []).filter((time) => now - time < WINDOW_MS);
  if (current.length >= limit) return false;
  current.push(now); map.set(key, current); return true;
}
function allowAttempt(ip: string, now: number) { return allowWindowed(attempts, ip, now, MAX_ATTEMPTS); }
function allowChallengeIssue(ip: string, now: number) { return allowWindowed(challengeIssues, ip, now, MAX_CHALLENGE_ISSUES); }

async function boundedFormData(request: Request) {
  const declared = Number(request.headers.get('content-length') || '0');
  if (declared > MAX_BODY_BYTES) throw new Error('body_too_large');
  if (!request.body) throw new Error('missing_body');
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) { await reader.cancel(); throw new Error('body_too_large'); }
    chunks.push(value);
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new Request(request.url, { method: 'POST', headers: { 'content-type': request.headers.get('content-type') || '' }, body }).formData();
}

export async function GET(request: Request) {
  const now = Date.now(); prune(now);
  const ip = clientIp(request);
  const client = clientKey(request);
  if (!allowChallengeIssue(ip, now)) return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429, headers: { 'retry-after': '900', 'cache-control': 'no-store' } });
  const prior = challengeByClient.get(client);
  if (prior) deleteChallenge(prior);
  while (challenges.size >= MAX_CHALLENGES) {
    const oldest = challenges.keys().next().value as string | undefined;
    if (!oldest) break;
    deleteChallenge(oldest);
  }
  const token = randomUUID();
  challenges.set(token, { client, expires: now + CHALLENGE_TTL_MS });
  challengeByClient.set(client, token);
  return NextResponse.json({ token }, { headers: { 'cache-control': 'no-store' } });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const publicHost = (request.headers.get('x-forwarded-host') || request.headers.get('host') || new URL(request.url).host).split(',')[0].trim();
  try {
    if (origin && new URL(origin).host !== publicHost) return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 403 });
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 403 });
  }
  let form: FormData;
  try { form = await boundedFormData(request); }
  catch (error) { return NextResponse.json({ ok: false, message: error instanceof Error && error.message === 'body_too_large' ? 'Submission is too large.' : 'Invalid form submission.' }, { status: error instanceof Error && error.message === 'body_too_large' ? 413 : 400 }); }
  if (form.get('website_url')) return NextResponse.json({ ok: true });
  if (form.get('source') !== SOURCE) return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 400 });

  const now = Date.now(); prune(now);
  const ip = clientIp(request);
  const client = clientKey(request);
  const challenge = clean(form.get('_challenge'), 80);
  const issued = challenges.get(challenge);
  if (!issued || issued.client !== client || issued.expires <= now) return NextResponse.json({ ok: false, message: 'Please refresh the page and try again.' }, { status: 403 });
  deleteChallenge(challenge);
  if (!allowAttempt(ip, now)) return NextResponse.json({ ok: false, message: 'Too many requests. Please try again later.' }, { status: 429, headers: { 'retry-after': '900' } });

  const firstName = clean(form.get('first_name'), 80);
  const lastName = clean(form.get('last_name'), 80);
  const email = clean(form.get('email'), 254).toLowerCase();
  const phoneCountry = clean(form.get('phone_country'), 12);
  const phone = clean(form.get('phone'), 32);
  const company = clean(form.get('company'), 160);
  const companyWebsite = clean(form.get('company_website'), 300);
  const companySize = clean(form.get('company_size'), 40);
  const positions = clean(form.get('positions_to_fill'), 40);
  const referral = clean(form.get('referral_source'), 40);
  const message = clean(form.get('message'), 2_000);
  const parts = email.split('@');
  const emailDomain = parts.length === 2 ? parts[1] : '';
  if (!firstName || !lastName || !company || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phoneCountries.has(phoneCountry) || !companySizes.has(companySize) || !positionCounts.has(positions) || !referralSources.has(referral)) return NextResponse.json({ ok: false, message: 'Please complete every required field.' }, { status: 400 });
  if (!emailDomain || personalDomains.has(emailDomain)) return NextResponse.json({ ok: false, message: 'Please use your business email address.' }, { status: 400 });
  if (companyWebsite) {
    try { const url = new URL(companyWebsite); if (!['http:', 'https:'].includes(url.protocol)) throw new Error('invalid protocol'); }
    catch { return NextResponse.json({ ok: false, message: 'Please enter a valid company website.' }, { status: 400 }); }
  }

  const payload = { source: SOURCE, first_name: firstName, last_name: lastName, email, phone_country: phoneCountry, phone, company, company_website: companyWebsite, company_size: companySize, positions_to_fill: positions, referral_source: referral, message };
  const fallbackLead: FallbackLeadPayload = { name: `${firstName} ${lastName}`, email, phone: [phoneCountry, phone].filter(Boolean).join(' '), business: company, message, companySize, positions, referral, pageUrl: clean(form.get('_page_url'), 500) || request.headers.get('referer') || '', userAgent: request.headers.get('user-agent') || '' };
  let delivered = false;
  const endpoint = process.env.ACR_LEAD_ENDPOINT;
  if (endpoint) {
    try { const forwarded = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(10_000), cache: 'no-store' }); delivered = forwarded.ok; }
    catch { delivered = false; }
  }
  if (!delivered) delivered = await sendLeadFallbackToMattermost(fallbackLead);
  if (!delivered) return NextResponse.json({ ok: false, error: 'delivery_unavailable', message: 'We could not send your request. Please try again.' }, { status: 503 });
  return NextResponse.json({ ok: true });
}
