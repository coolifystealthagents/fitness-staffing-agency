import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };
export default function ThankYouPage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero conversion-hero"><div><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn one recurring workflow into a clear support brief.</p></div><img src="/heroes/editorial/contact-us.svg" alt="Fitness operations consultation planning illustration" width="1600" height="900" /></header>
    <section className="content-wrap booking-step" data-booking-completion="/thanks-whats-next">
      <div><p className="eyebrow">Consultation calendar</p><h2>Choose your conversation time.</h2><p>The secure OnceHub scheduler is the second step in this journey. After a successful booking, the configured completion destination is <code>/thanks-whats-next</code>.</p></div>
      <iframe className="booking-frame" title="Book your consultation with the StealthAgents team" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="eager" />
      <p className="booking-help">Already completed your booking? <Link href="/thanks-whats-next">See what happens next</Link>.</p>
    </section>
  </main>;
}
