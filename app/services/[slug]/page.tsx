import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeroImage } from '@/components/EditorialMedia';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.short, images: [{ url: '/team-bacolod.jpg', width: 953, height: 540, alt: 'Stealth Agents operations team' }] }
  } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = site.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.short,
    provider: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` },
    areaServed: 'Remote', url: `https://${site.domain}/services/${service.slug}`
  };
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero service-hero">
      <div><p className="eyebrow">Fitness operations support</p><h1>{service.name}</h1><p>{service.short}</p><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this workflow</Link></div>
      <PageHeroImage src={service.heroImage} alt={service.heroAlt} />
    </header>
    <nav className="service-nav" aria-label="Page sections"><a href="#fit">Who it is for</a><a href="#scope">Scope</a><a href="#workflow">Workflow</a><a href="#controls">Controls</a><a href="#faq">FAQs</a></nav>
    <section id="fit" className="content-wrap service-section two-column"><div><p className="eyebrow">Who this support is for</p><h2>A focused role for recurring operational load.</h2></div><div><p>{service.audience}</p><p>{service.problem}</p></div></section>
    <section id="scope" className="service-band"><div className="content-wrap"><div className="section-heading"><p className="eyebrow">A bounded operating scope</p><h2>What enters the workflow</h2></div><div className="service-columns"><article><h3>Inputs required</h3><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Work performed</h3><ul>{service.tasks.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>What the work produces</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section id="workflow" className="content-wrap service-section"><p className="eyebrow">From request to reviewable completion</p><h2>A workflow built around evidence, not memory.</h2><div className="workflow-line">{service.workflow.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>
    <section id="controls" className="service-band dark"><div className="content-wrap service-section"><div className="two-column"><div><p className="eyebrow">Quality controls</p><h2>Make good work visible.</h2><ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Decision boundaries</p><h2>Keep accountable judgment with your team.</h2><ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>
    <section className="content-wrap service-section"><p className="eyebrow">Common starting scenarios</p><h2>Begin where the handoff is easiest to define.</h2><div className="scenario-list">{service.scenarios.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
    <section id="faq" className="content-wrap service-section faq"><p className="eyebrow">Frequently asked questions</p><h2>Questions to settle before access is granted.</h2>{service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
    <section className="content-wrap service-section"><p className="eyebrow">Related services</p><h2>Build the surrounding operating system.</h2><div className="related-services">{related.map((item) => <Link key={item.slug} href={`/services/${item.slug}`}><h3>{item.name}</h3><p>{item.short}</p></Link>)}</div></section>
    <section className="closing"><p className="eyebrow">Choose one controlled workflow</p><h2>Turn a recurring queue into a role your team can review.</h2><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation</Link></section>
    <JsonLd data={schema} />
  </main>;
}
