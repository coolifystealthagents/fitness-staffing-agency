import type { Metadata } from 'next';

const bookingUrl = 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1';
export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero conversion-hero"><div><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn one recurring workflow into a clear support brief.</p></div><img src="/heroes/editorial/contact-us.svg" alt="Abstract editorial illustration for consultation planning" width="1600" height="900" /></header>
    <section className="content-wrap booking-step">
      <div><p className="eyebrow">Consultation calendar</p><h2>Choose your conversation time.</h2><p>Use the secure OnceHub scheduler below. If the embedded scheduler is unavailable, open the same booking page directly.</p></div>
      <p className="booking-help"><a className="button secondary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open the secure booking page</a></p>
      <iframe className="booking-frame" title="Book your consultation with the StealthAgents team" src={bookingUrl} loading="eager" />
    </section>
  </main>;
}
