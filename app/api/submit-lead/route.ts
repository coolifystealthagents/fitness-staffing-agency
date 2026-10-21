import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost, type FallbackLeadPayload } from '../../../lib/lead-fallback-mattermost';

const personalDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);
const companySizes = new Set(['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+']);
const positionCounts = new Set(['1', '2 to 3', '4 to 10', '11+', 'Not sure yet']);
const referralSources = new Set(['Google', 'LinkedIn', 'Referral', 'Podcast', 'Other']);
const clean = (value: FormDataEntryValue | null, limit: number) => typeof value === 'string' ? value.trim().slice(0, limit) : '';

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 400 });
  }
  if (form.get('website_url')) return NextResponse.json({ ok: true });
  if (form.get('source') !== 'contact-page-consultation') {
    return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 400 });
  }

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
  const emailDomain = email.split('@')[1];

  if (!firstName || !lastName || !company || !message || !/^\S+@\S+\.\S+$/.test(email) || !companySizes.has(companySize) || !positionCounts.has(positions) || !referralSources.has(referral)) {
    return NextResponse.json({ ok: false, message: 'Please complete every required field.' }, { status: 400 });
  }
  if (!emailDomain || personalDomains.has(emailDomain)) {
    return NextResponse.json({ ok: false, message: 'Please use your business email address.' }, { status: 400 });
  }
  if (companyWebsite) {
    try {
      const url = new URL(companyWebsite);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('invalid protocol');
    } catch {
      return NextResponse.json({ ok: false, message: 'Please enter a valid company website.' }, { status: 400 });
    }
  }

  const payload = {
    source: 'contact-page-consultation', first_name: firstName, last_name: lastName, email,
    phone_country: phoneCountry, phone, company, company_website: companyWebsite,
    company_size: companySize, positions_to_fill: positions, referral_source: referral, message,
  };
  const fallbackLead: FallbackLeadPayload = {
    name: `${firstName} ${lastName}`, email, phone: [phoneCountry, phone].filter(Boolean).join(' '),
    business: company, message, companySize, positions, referral,
    pageUrl: clean(form.get('_page_url'), 500) || request.headers.get('referer') || '',
    userAgent: request.headers.get('user-agent') || '',
  };

  let delivered = false;
  const endpoint = process.env.ACR_LEAD_ENDPOINT;
  if (endpoint) {
    try {
      const forwarded = await fetch(endpoint, {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000), cache: 'no-store',
      });
      delivered = forwarded.ok;
    } catch {
      delivered = false;
    }
  }
  if (!delivered) delivered = await sendLeadFallbackToMattermost(fallbackLead);
  if (!delivered) return NextResponse.json({ ok: false, error: 'delivery_unavailable', message: 'We could not send your request. Please try again.' }, { status: 503 });
  return NextResponse.json({ ok: true });
}
