import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="page-hero legal-hero"><div><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p>Last updated October 21, 2026</p></div></header>
    <section className="content-wrap"><div className="prose">
      <h2>Information we collect</h2><p>When you request a consultation, we collect the information you choose to submit: your name, business email, optional phone number, company name, optional company website, company size, anticipated positions, referral source, and free-text request. Please do not submit credentials, payment information, health information, or member records.</p><p>We also process limited technical information needed to operate and protect the site, such as the page requested, browser user agent, IP-derived request controls, and basic usage or performance events. Browser conversion analytics receive a fixed consultation-request marker and do not receive the contact-form fields.</p>
      <h2>How we use information</h2><p>We use submitted information to answer your request, coordinate a consultation, design an appropriate staffing conversation, prevent abuse, maintain service reliability, and improve the site. We do not use contact-form fields for browser advertising profiles.</p>
      <h2>Service providers and delivery</h2><p>Consultation requests are sent to our configured lead-management service. If that service is unavailable, the same request may be delivered to an access-controlled Mattermost operations channel so an authorized team member can respond. Booking is provided through OnceHub when you choose a consultation time. These providers process information for the stated operational purpose under their respective safeguards and terms.</p>
      <h2>Retention and access</h2><p>We retain consultation and operational records only as long as needed to respond, maintain business records, resolve delivery or security issues, and meet applicable obligations. Access is limited to authorized personnel and service providers who need the information for those purposes. Retention periods may differ when a legal, security, or dispute requirement applies.</p>
      <h2>Your choices</h2><p>You may choose not to submit the form. You can ask about access, correction, or deletion of information associated with your request, subject to applicable recordkeeping requirements. You can also open the secure booking page directly instead of using its embedded view.</p>
      <h2>Contact</h2><p>Privacy questions and data requests can be sent to hello@{site.domain}. Include enough information for us to identify the request, but do not send passwords, health information, payment data, or member records by email.</p>
    </div></section>
  </main>;
}
