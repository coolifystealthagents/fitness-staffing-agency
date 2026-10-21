import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Prepare for your consultation', robots: { index: false, follow: false } };
export default function NextPage() {
  return <main id="main-content" tabIndex={-1}><section className="not-found"><div><p className="eyebrow">Consultation preparation</p><h1>Here is how to prepare for your conversation.</h1><p>Bring one recurring workflow that needs a clearer owner, output, or review point. We will use it to make the conversation practical.</p><Link className="button primary" href="/blog">Read practical guides</Link></div></section></main>;
}
