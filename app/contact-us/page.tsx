import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
import { stealthAgentsReviews } from '@/lib/reviews';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Fitness Staffing Consultation',
  description: 'Map a fitness operations support role around clear workflows, decision boundaries, and accountable handoffs.',
  alternates: { canonical: '/contact-us' },
  openGraph: { title: 'Contact Fitness Staffing Agency', description: 'Plan a focused remote support role for your fitness operations.', images: ['/heroes/editorial/contact-us.svg'] }
};

const steps = [
  ['Workflow discovery', 'Map the recurring queue, source records, owners, exceptions, and completion standard.'],
  ['Role design', 'Define focused support, system access, communication rules, and decision boundaries.'],
  ['Candidate matching', 'Review remote professionals whose working strengths fit the approved role.'],
  ['Controlled launch', 'Begin with one documented workflow, sampled quality, and a named review owner.']
];
const faqs = [
  ['What work can remote fitness staff support?', 'Staff can maintain approved schedules, member questions, lead follow up, trainer records, membership records, and back-office queues within a documented scope.'],
  ['Can remote staff coach members or give health advice?', 'No. Exercise programming, coaching, health or nutrition advice, injury assessment, emergency response, safeguarding, and other professional judgments stay with qualified personnel.'],
  ['Can staff handle membership and billing requests?', 'They can document requests and apply properly approved changes. Pricing, refunds, disputes, contract interpretation, and payment decisions stay with authorized owners.'],
  ['What should we bring to the consultation?', 'Bring one recurring workflow, its current volume, systems, source records, owners, and examples that do not contain sensitive member, payment, health, or credential data.']
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Fitness staffing consultation.' };
  return <main id="main-content" tabIndex={-1} className="contact-page">
    <section className="contact-first-fold">
      <div className="contact-intro">
        <p className="eyebrow">Contact Us</p>
        <h1>Put the right work in the right hands.</h1>
        <p>Bring one recurring fitness workflow. We will help define the support role, the handoff, and the decisions that stay with your team.</p>
        <div className="scope-chips" aria-label="Consultation topics"><span>Schedules</span><span>Members</span><span>Leads</span><span>Trainer records</span></div>
        <div className="reviews-heading"><strong>StealthAgents reviews</strong><a href="https://stealthagents.com/" rel="noopener noreferrer">Verified first-party source</a></div>
        <div className="review-window" aria-label={`${stealthAgentsReviews.length} StealthAgents reviews`}>
          <div className="review-marquee">{[...stealthAgentsReviews, ...stealthAgentsReviews].map((review, index) => <figure className="review-card" key={`${review.reviewer}-${index}`} aria-hidden={index >= stealthAgentsReviews.length || undefined}>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>{review.body}</blockquote><figcaption><strong>{review.reviewer}</strong><span>{review.detail}</span></figcaption>
          </figure>)}</div>
        </div>
      </div>
      <div className="contact-form-card"><div><p className="eyebrow">Free consultation</p><h2>Tell us what needs support.</h2><p>Do not include credentials, health information, payment data, or member records.</p></div><LeadForm source="contact-page-consultation" /></div>
    </section>

    <section className="contact-section credibility"><div className="contact-container credibility-grid">
      <div className="credibility-image"><Image src="/team-bacolod.jpg" alt="Official StealthAgents team collaborating in Bacolod" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
      <div><p className="eyebrow">The operating team behind the support</p><h2>Powered by StealthAgents.</h2><p>StealthAgents manages the broader remote staffing system behind Fitness Staffing Agency. Its role includes candidate matching, onboarding support, and the operating structure used to keep remote work scoped and reviewable.</p><p>Fitness Staffing Agency remains focused on the workflows gym owners, studio operators, and fitness program leaders need to coordinate.</p><div className="official-team-plate"><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} /><strong>Official team, Bacolod</strong></div></div>
    </div></section>

    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>What happens after you reach out</h2><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote staff can maintain approved schedules and records, answer routine questions from approved guidance, coordinate follow up, prepare membership updates, organize documents, and flag exceptions. They do not coach, prescribe exercise or nutrition, assess injuries, provide health advice, certify trainers, handle emergencies, make safeguarding decisions, approve refunds, change contracts, or override safety and access controls.</p><p>Your qualified trainers, onsite managers, health and safety leads, safeguarding personnel, finance, legal, privacy, security, compliance, and executive owners retain responsibility for instruction, member safety, emergencies, credentials, pricing, payments, contracts, sensitive data, and final decisions.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Common starting points</p><h2>Choose a workflow with a clear source and owner.</h2><div className="path-grid">{site.services.slice(0, 4).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><h3>{service.name}</h3><p>{service.short}</p></Link>)}</div><Link className="text-link all-services" href="/services">View all services</Link></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Fitness staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
