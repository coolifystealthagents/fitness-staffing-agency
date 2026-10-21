export type Service = {
  slug: string;
  name: string;
  short: string;
  heroImage: string;
  heroAlt: string;
  audience: string;
  problem: string;
  tasks: string[];
  inputs: string[];
  deliverables: string[];
  workflow: { title: string; copy: string }[];
  controls: string[];
  boundaries: string[];
  scenarios: { title: string; copy: string }[];
  faq: { q: string; a: string }[];
};
export type BlogPost = { slug: string; title: string; description: string; category: string; publishedAt: string; readTime: string; image?: string; sections: { heading: string; paragraphs: string[] }[]; faq: { q: string; a: string }[]; internalService: string; internalSibling: string; source: { label: string; url: string } };
export type ResearchPost = { slug: string; title: string; summary: string; cluster: string; publishedAt: string; image?: string; finding: string; methodology?: string[]; findings?: string[]; sources: { label: string; publisher?: string; url: string; checkedAt?: string }[] };
export type SiteConfig = {
  name: string; domain: string; siteId: string; niche: string; audience: string; design: string;
  eyebrow: string; hero: string; heroAccent: string; heroBody: string; manifesto: string;
  primary: string; secondary: string; accent: string; canvas: string; ink: string;
  displayFont: string; bodyFont: string; heroImage: string; heroAlt: string;
  services: Service[]; categories: string[]; principles: string[]; sources: { label: string; url: string }[];
};
