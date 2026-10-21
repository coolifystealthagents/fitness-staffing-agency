import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar, type TocItem } from '@/components/ArticleSidebar';
import { ArticleImage } from '@/components/EditorialMedia';
import { JsonLd } from '@/components/JsonLd';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const idFor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const post = blogBySlug(slug);
  return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.description, images: [{ url: post.image && !post.image.endsWith('.svg') ? post.image : '/team-bacolod.jpg', width: post.image && !post.image.endsWith('.svg') ? 1200 : 953, height: post.image && !post.image.endsWith('.svg') ? 630 : 540, alt: post.title }] } } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = blogBySlug(slug); if (!post) notFound();
  const related = blogPosts.filter((p) => p.slug !== post.slug).sort((a, b) => Number(b.category === post.category) + Number(b.internalService === post.internalService) - Number(a.category === post.category) - Number(a.internalService === post.internalService)).slice(0, 3);
  const toc: TocItem[] = [...post.sections.map((section) => ({ id: idFor(section.heading), label: section.heading })), { id: 'references', label: 'Reference and related guide' }, { id: 'common-questions', label: 'Common questions' }, { id: 'next-step', label: 'Next step' }];
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, datePublished: post.publishedAt, author: { '@type': 'Organization', name: `${site.name} Editorial Team` }, publisher: { '@type': 'Organization', name: site.name }, mainEntityOfPage: `https://${site.domain}/blog/${post.slug}` };
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero article-header"><div><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.category}</span></nav><h1>{post.title}</h1><p>{post.description}</p><p className="meta">{site.name} Editorial Team · Published {post.publishedAt} · {post.readTime}</p></div><ArticleImage src={post.image} slug={post.slug} title={post.title} /></header>
    <section className="content-wrap article-layout">
      <article className="prose article-prose article-main">{post.sections.map((section, index) => <section key={section.heading} id={idFor(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 2 && <p>Use the <Link href={post.internalService}>specialist service role</Link> as a starting point for defining scope and evidence.</p>}</section>)}
        <section id="references"><h2>Reference and related guide</h2><p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance to review before turning this article into policy.</p><p>Continue with <Link href={post.internalSibling}>a related operating guide</Link>.</p></section>
        <section id="common-questions"><h2>Common questions answered</h2>{post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section>
        <section id="next-step"><h2>Ready to create a clearer support role?</h2><p>Bring the workflow that consumes the most attention. We will help you shape the role, handoff, review points, and decision boundaries.</p><Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></section>
      </article>
      <ArticleSidebar items={toc} kind="Blog" related={related.map((item) => ({ href: `/blog/${item.slug}`, label: item.title }))} />
    </section>
    <JsonLd data={schema} />
  </main>;
}
