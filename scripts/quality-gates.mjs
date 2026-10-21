import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const fail = [];
const check = (condition, message) => { if (!condition) fail.push(message); };

const chrome = read('components/SiteChrome.tsx');
const layout = read('app/layout.tsx');
const config = read('next.config.mjs');
const proxy = read('proxy.ts');
const contact = read('app/contact-us/page.tsx');
const reviewMarquee = read('components/ReviewMarquee.tsx');
const leadForm = read('components/LeadForm.tsx');
const leadRoute = read('app/api/submit-lead/route.ts');
const content = read('lib/content.ts');
const servicePage = read('app/services/[slug]/page.tsx');
const blogPage = read('app/blog/[slug]/page.tsx');
const researchPage = read('app/research/[slug]/page.tsx');
const site = read('lib/site.ts');
const reviews = exists('lib/reviews.ts') ? read('lib/reviews.ts') : '';
const css = read('app/globals.css') + read('app/v3.css') + (exists('app/contact-us/contact.css') ? read('app/contact-us/contact.css') : '');
const mainTemplates = [
  'components/Marketing.tsx',
  'app/about/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/contact-us/page.tsx',
  'app/privacy/page.tsx',
  'app/research/page.tsx',
  'app/research/[slug]/page.tsx',
  'app/services/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/terms/page.tsx',
  'app/thank-you/page.tsx',
  'app/thanks-whats-next/page.tsx'
];

check(/Home[\s\S]*Services[\s\S]*Contact Us/.test(chrome), 'Header source must expose Home, Services, and Contact Us in that order.');
check((chrome.match(/Powered by StealthAgents/g) || []).length >= 2, 'Header and footer must each say Powered by StealthAgents.');
check(/position:\s*sticky/.test(css), 'Site header must be sticky.');
check(!/TimedLeadModal/.test(layout), 'Automatic lead modal must be removed from the root layout.');
check(/href="#main-content"/.test(chrome) && mainTemplates.every((file) => /<main[^>]*id="main-content"[^>]*tabIndex=\{-1\}/.test(read(file))) && !/id="main-content"/.test(layout), 'The skip link must target the focusable primary main landmark on every public template.');
check(exists('public/icon.png') || exists('app/icon.png'), 'A favicon based on the subsidiary mark must exist.');
check(exists('public/stealth-agents-logo-black.png'), 'Official StealthAgents logo must be local.');
check(exists('public/team-bacolod.jpg'), 'Official Bacolod team photo must be local.');
check((reviews.match(/body:/g) || []).length >= 10, 'At least 10 approved review records must exist.');
check(/sourceUrl:\s*['"]https:\/\/stealthagents\.com\/?['"]/.test(reviews), 'Reviews must retain first-party source provenance.');
check(/StealthAgents reviews/.test(contact), 'Contact must visibly label the collection as StealthAgents reviews.');
check(/ReviewMarquee/.test(contact) && /review-marquee/.test(reviewMarquee) && /Pause reviews/.test(reviewMarquee), 'Contact reviews must provide an explicit pause control.');
check(!/★★★★★|5 out of 5/.test(contact + reviewMarquee), 'Review cards must not display an unverified star rating.');
check(/team-bacolod\.jpg/.test(contact) && /Official team, Bacolod/.test(contact), 'Contact must include the official team photo and plate.');
check(!/go\.oncehub\.com/.test(contact), 'OnceHub must not be embedded on Contact Us.');
check(/go\.oncehub\.com\/StealthAgentsTeam/.test(read('app/thank-you/page.tsx')), 'Thank-you must contain the StealthAgentsTeam scheduler.');
check((read('app/thank-you/page.tsx').match(/bookingUrl/g) || []).length >= 3 && /Open the secure booking page/.test(read('app/thank-you/page.tsx')), 'Thank-you must provide a direct same-destination scheduler fallback.');
check(/service\.heroImage/.test(servicePage), 'Every service page must render its own hero image.');
for (const heading of ['Who this support is for','What enters the workflow','What the work produces','Quality controls','Decision boundaries','Common starting scenarios','Frequently asked questions','Related services']) check(servicePage.includes(heading), `Service template missing: ${heading}.`);
check(/ArticleSidebar/.test(blogPage) && /ArticleSidebar/.test(researchPage), 'Blog and research pages must share a complete article sidebar.');
check(/ArticleImage/.test(blogPage) && /ArticleImage/.test(researchPage), 'Every article route must render a hero image or specific fallback.');
check(!/0\{index\+1\}/.test(contact), 'Decorative zero-padded contact steps must be removed.');
check(!/service-number/.test(read('components/Marketing.tsx')), 'Decorative numbered service labels must be removed.');
check(!site.includes('Top 1 percent selectivity'), 'Unsupported selectivity claim must be removed.');
check(!read('lib/october-12/blogPosts.ts').includes('/services/live-chat-support'), 'Published article service links must resolve.');
check(/Content-Security-Policy/.test(proxy) && /nonce-/.test(proxy) && /strict-dynamic/.test(proxy) && !/script-src[^\n]*unsafe-inline/.test(proxy) && /Strict-Transport-Security/.test(config) && /Permissions-Policy/.test(config), 'Nonce CSP and required security headers must be configured.');
check(/conversion:\s*'consultation-request'/.test(leadForm) && !/trackLead\(\{[\s\S]{0,400}(email|phone|name|business|message):/.test(leadForm), 'Browser lead analytics must contain only a fixed non-identifying conversion marker.');
check(/const SOURCE = 'contact-page-consultation'/.test(leadRoute) && /form\.get\('source'\) !== SOURCE/.test(leadRoute) && /delivery_unavailable/.test(leadRoute) && /status:\s*503/.test(leadRoute), 'Lead API must enforce the server-owned form schema and fail when no durable delivery succeeds.');
check(/const publicHost = \(request\.headers\.get\('x-forwarded-host'\) \|\| request\.headers\.get\('host'\)/.test(leadRoute) && /new URL\(origin\)\.host !== publicHost/.test(leadRoute), 'Browser form origin validation must use the proxy-forwarded public host rather than the standalone server internal URL.');
check(/MAX_BODY_BYTES/.test(leadRoute) && /getReader\(\)/.test(leadRoute) && /body_too_large/.test(leadRoute) && /\? 413 : 400/.test(leadRoute), 'Lead API must reject oversized bodies while streaming, before multipart parsing.');
check(/MAX_CHALLENGES/.test(leadRoute) && /MAX_CHALLENGE_ISSUES/.test(leadRoute) && /challengeByClient/.test(leadRoute) && /while \(challenges\.size >= MAX_CHALLENGES\)/.test(leadRoute) && /MAX_ATTEMPTS/.test(leadRoute) && /status: 429/.test(leadRoute), 'Lead API must cap challenge storage, retain one active challenge per client, and throttle challenge and submission requests.');
check((leadForm.match(/refreshChallenge\(\)/g) || []).length >= 3, 'The form must obtain a fresh one-use challenge after every unsuccessful submission.');
check(/phoneCountries = new Set/.test(leadRoute) && /phoneCountries\.has\(phoneCountry\)/.test(leadRoute), 'The API must enforce the controlled phone-country enum.');
const fallbackSource = read('lib/lead-fallback-mattermost.ts');
const angleRemoval = fallbackSource.indexOf(".replace(/[<>]/g, '')");
const mentionRemoval = fallbackSource.indexOf(".replace(/(^|[^A-Za-z0-9@_])@(?=[A-Za-z0-9._-])/g");
const mentionProbe = (value) => value.replace(/[<>]/g, '').replace(/(^|[^A-Za-z0-9@_])@(?=[A-Za-z0-9._-])/g, '$1@\u200b');
check(angleRemoval >= 0 && mentionRemoval > angleRemoval && mentionProbe('<@all>') === '@\u200ball' && mentionProbe('<@channel>') === '@\u200bchannel' && mentionProbe('hello,@channel') === 'hello,@\u200bchannel' && mentionProbe('hello.@here') === 'hello.@\u200bhere' && mentionProbe('hello-@user') === 'hello-@\u200buser' && mentionProbe('hello-@channel') === 'hello-@\u200bchannel' && mentionProbe('-<@all>') === '-@\u200ball' && mentionProbe('person@example.com') === 'person@example.com', 'Mattermost fallback must remove angle brackets before neutralizing every token-boundary mention without changing email addresses.');
check(!/missing:\s*\[/.test(proxy), 'Security proxy must not exempt prefetch requests from nonce CSP.');
check(/Mattermost/.test(read('app/privacy/page.tsx')) && /OnceHub/.test(read('app/privacy/page.tsx')) && /retention/i.test(read('app/privacy/page.tsx')), 'Privacy notice must disclose lead processors and retention criteria.');
check(!/"title":\s*"[^"]*(study|audit|report)"/i.test(content), 'Visible legacy research titles must not imply an executed study, audit, or report.');
check(!/The sequence is consistent even when/.test(read('lib/october-12/blogPosts.ts')), 'Detailed Blog posts must not reuse the rejected body template.');
check(/This page proposes a method; it does not report an executed study/.test(read('lib/october-12/researchPosts.ts')) && /Proposed review method/.test(researchPage), 'Proposed research protocols must explicitly disclaim unexecuted study results.');
check(/const relatedResearch: Record/.test(researchPage) && (researchPage.match(/-study': \[/g) || []).length === 5, 'Detailed research protocols must use explicit topic-affinity related reading.');
check(/icons:/.test(layout) || /icon\.png/.test(layout), 'Root metadata must expose the favicon.');

const visibleSources = ['app', 'components', 'lib'].flatMap((dir) => {
  const walk = (p) => fs.readdirSync(p, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(p, entry.name);
    return entry.isDirectory() ? walk(target) : /\.(tsx?|mdx?)$/.test(entry.name) ? [target] : [];
  });
  return walk(path.join(root, dir));
});
for (const obsolete of ['https://www.acefitness.org/resources/everyone/tools-and-calculators/verify-certification/', 'https://www.ftc.gov/business-guidance/privacy-security/protecting-personal-information', 'https://www.ftc.gov/business-guidance/privacy-security/data-security', 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', 'https://www.ftc.gov/legal-library/browse/statutes/can-spam-act', 'sp800-53-controls/release-search']) check(!visibleSources.some((file) => fs.readFileSync(file, 'utf8').includes(obsolete)), `Obsolete external citation remains: ${obsolete}.`);
check(content.includes('https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0') && content.includes('https://search.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'), 'Content must use the browser-verified live FTC publication URLs.');
for (const file of visibleSources) {
  const value = fs.readFileSync(file, 'utf8');
  check(!/[—–]/.test(value), `${path.relative(root, file)} contains a forbidden dash character.`);
}

if (fail.length) {
  console.error(`QUALITY GATES FAILED (${fail.length})`);
  for (const message of fail) console.error(`- ${message}`);
  process.exit(1);
}
console.log('QUALITY GATES PASSED');
