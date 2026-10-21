import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar, type TocItem } from '@/components/ArticleSidebar';
import { ArticleImage } from '@/components/EditorialMedia';
import { JsonLd } from '@/components/JsonLd';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const relatedResearch: Record<string, string[]> = {
  'fitness-credential-verification-reproducibility-study': ['trainer-records-handoff-reliability-brief-4', 'trainer-records-review-consistency-report-10', 'trainer-records-workflow-boundary-review-16'],
  'group-class-substitute-readiness-study': ['class-schedule-support-workflow-boundary-review-1', 'class-schedule-support-source-quality-audit-7', 'class-schedule-support-handoff-reliability-brief-19'],
  'fitness-schedule-credential-drift-study': ['class-schedule-support-source-quality-audit-7', 'trainer-records-review-consistency-report-10', 'class-schedule-support-exception-pattern-study-13'],
  'fitness-incident-record-completeness-study': ['member-support-source-quality-audit-2', 'member-support-exception-pattern-study-8', 'fitness-back-office-source-quality-audit-12'],
  'fitness-staff-access-revocation-study': ['trainer-records-workflow-boundary-review-16', 'fitness-back-office-workflow-boundary-review-6', 'fitness-back-office-exception-pattern-study-18'],
};

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const post = researchBySlug(slug);
  return post ? { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.summary, images: [{ url: '/team-bacolod.jpg', width: 953, height: 540, alt: 'Stealth Agents operations team' }] } } : {};
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = researchBySlug(slug); if (!post) notFound();
  const preferred = relatedResearch[post.slug] || [];
  const related = researchPosts.filter((p) => p.slug !== post.slug).sort((a, b) => {
    const aIndex = preferred.indexOf(a.slug); const bIndex = preferred.indexOf(b.slug);
    if (aIndex >= 0 || bIndex >= 0) return aIndex < 0 ? 1 : bIndex < 0 ? -1 : aIndex - bIndex;
    return Number(b.cluster === post.cluster) - Number(a.cluster === post.cluster);
  }).slice(0, 3);
  const isDetailed = Boolean(post.methodology?.length);
  const toc: TocItem[] = isDetailed ? [
    { id: 'key-finding', label: 'Protocol premise' }, { id: 'methodology', label: 'Proposed review method' }, { id: 'findings', label: 'Operational considerations' }, { id: 'sources', label: 'Sources' }
  ] : [
    { id: 'key-finding', label: 'Planning premise' }, { id: 'scope', label: 'What this brief examines' }, { id: 'interpretation', label: 'Practical interpretation' }, { id: 'sources', label: 'Sources' }
  ];
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.summary, datePublished: post.publishedAt, author: { '@type': 'Organization', name: `${site.name} Editorial Team` }, publisher: { '@type': 'Organization', name: site.name }, mainEntityOfPage: `https://${site.domain}/research/${post.slug}` };
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero article-header"><div><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/research">Research</Link><span>/</span><span>{post.cluster}</span></nav><h1>{post.title}</h1><p>{post.summary}</p><p className="meta">{site.name} Editorial Team · Published {post.publishedAt}</p></div><ArticleImage src={post.image} slug={post.slug} title={post.title} /></header>
    <section className="content-wrap article-layout">
      <article className="prose article-prose article-main">
        <section id="key-finding"><h2>{isDetailed ? 'Protocol premise' : 'Planning premise'}</h2><p className="research-finding">{post.finding}</p></section>
        {isDetailed ? <><section id="methodology"><h2>Proposed review method</h2>{post.methodology?.map((item, index) => <p key={index}>{item}</p>)}</section><section id="findings"><h2>Operational considerations and limitations</h2>{post.findings?.map((item, index) => <p key={index}>{item}</p>)}</section></> : <><section id="scope"><h2>What this brief examines</h2><p>This brief connects public guidance with the operating questions leaders face when they divide work across an in-house team and remote support. It does not report an original experiment or replace professional advice. It offers a structured interpretation for role design and review.</p><p>The source list below should be read directly before a team turns any observation into a policy, credential rule, safety process, or member-facing statement.</p></section><section id="interpretation"><h2>Practical interpretation</h2><p>A useful support role is defined by the boundary between repeatable preparation and accountable judgment. Remote staff can maintain source-linked records and exception queues. Qualified owners retain decisions about safety, credentials, health, access, contracts, payments, and professional practice.</p><p>Teams should test the proposed workflow against their actual systems, jurisdiction, policies, and oversight capacity before implementation.</p></section></>}
        <section className="sources" id="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a>{source.publisher && <> - {source.publisher}</>}</li>)}</ol></section>
        <Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow</Link>
      </article>
      <ArticleSidebar items={toc} kind="Research" related={related.map((item) => ({ href: `/research/${item.slug}`, label: item.title }))} />
    </section>
    <JsonLd data={schema} />
  </main>;
}
