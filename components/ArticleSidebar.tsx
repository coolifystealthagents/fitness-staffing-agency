'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleSidebar({ items, kind, related }: { items: TocItem[]; kind: 'Blog' | 'Research'; related: { href: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return <aside className="article-sidebar" aria-label={`${kind} article sidebar`}>
    <div className="sidebar-scroll">
      <p className="eyebrow">In this {kind.toLowerCase()}</p>
      <nav className="toc toc-list" aria-label="Table of contents">
        {items.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
      </nav>
      <section className="sidebar-module" aria-labelledby="related-heading">
        <h3 id="related-heading">Related reading</h3>
        <ul className="related-list">{related.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
      </section>
      <section className="sidebar-module sidebar-cta" aria-labelledby="sidebar-cta-heading">
        <h3 id="sidebar-cta-heading">Turn the reading into a scoped role.</h3>
        <p>Bring one recurring fitness workflow and its current owner.</p>
        <Link className="button primary compact" href="/contact-us">Plan a consultation</Link>
      </section>
    </div>
  </aside>;
}
