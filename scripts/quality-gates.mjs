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
const contact = read('app/contact-us/page.tsx');
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
check(/review-marquee/.test(contact), 'Contact must include the automatic review marquee.');
check(/team-bacolod\.jpg/.test(contact) && /Official team, Bacolod/.test(contact), 'Contact must include the official team photo and plate.');
check(!/go\.oncehub\.com/.test(contact), 'OnceHub must not be embedded on Contact Us.');
check(/go\.oncehub\.com\/StealthAgentsTeam/.test(read('app/thank-you/page.tsx')), 'Thank-you must contain the StealthAgentsTeam scheduler.');
check(/thanks-whats-next/.test(read('app/thank-you/page.tsx')), 'Thank-you must configure or explain the booking completion route.');
check(/service\.heroImage/.test(servicePage), 'Every service page must render its own hero image.');
for (const heading of ['Who this support is for','What enters the workflow','What the work produces','Quality controls','Decision boundaries','Common starting scenarios','Frequently asked questions','Related services']) check(servicePage.includes(heading), `Service template missing: ${heading}.`);
check(/ArticleSidebar/.test(blogPage) && /ArticleSidebar/.test(researchPage), 'Blog and research pages must share a complete article sidebar.');
check(/ArticleImage/.test(blogPage) && /ArticleImage/.test(researchPage), 'Every article route must render a hero image or specific fallback.');
check(!/0\{index\+1\}/.test(contact), 'Decorative zero-padded contact steps must be removed.');
check(!/service-number/.test(read('components/Marketing.tsx')), 'Decorative numbered service labels must be removed.');
check(!site.includes('Top 1 percent selectivity'), 'Unsupported selectivity claim must be removed.');
check(!read('lib/october-12/blogPosts.ts').includes('/services/live-chat-support'), 'Published article service links must resolve.');
check(/Content-Security-Policy/.test(config) && /Strict-Transport-Security/.test(config) && /Permissions-Policy/.test(config), 'Required security headers must be configured.');
check(/icons:/.test(layout) || /icon\.png/.test(layout), 'Root metadata must expose the favicon.');

const visibleSources = ['app', 'components', 'lib'].flatMap((dir) => {
  const walk = (p) => fs.readdirSync(p, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(p, entry.name);
    return entry.isDirectory() ? walk(target) : /\.(tsx?|mdx?)$/.test(entry.name) ? [target] : [];
  });
  return walk(path.join(root, dir));
});
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
