'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const personalDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);

export function LeadForm({ source = 'contact-page-consultation' }: { source?: 'contact-page-consultation' }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [challenge, setChallenge] = useState('');
  async function refreshChallenge() {
    setChallenge('');
    const response = await fetch('/api/submit-lead', { cache: 'no-store' });
    if (!response.ok) throw new Error('challenge_unavailable');
    const data = await response.json();
    if (!data.token) throw new Error('challenge_unavailable');
    setChallenge(data.token);
  }
  useEffect(() => { refreshChallenge().catch(() => setError('The form is temporarily unavailable. Please refresh the page.')); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set('_challenge', challenge);
    const domain = String(data.get('email') || '').trim().toLowerCase().split('@')[1];
    if (!domain || personalDomains.has(domain)) {
      setError('Please use your business email address.');
      setBusy(false);
      return;
    }
    try {
      const response = await fetch('/api/submit-lead', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setError(result.message || 'Please check your details and try again.');
        await refreshChallenge().catch(() => setError('The form is temporarily unavailable. Please refresh the page.'));
        setBusy(false);
        return;
      }
      window.acrTracker?.trackLead({ source, fields: { conversion: 'consultation-request' } });
      router.push('/thank-you');
    } catch {
      setError('We could not send your request. Please try again.');
      await refreshChallenge().catch(() => setError('The form is temporarily unavailable. Please refresh the page.'));
      setBusy(false);
    }
  }

  return <form className="lead-form" onSubmit={submit}>
    <label>First Name <span aria-hidden="true">*</span><input name="first_name" autoComplete="given-name" maxLength={80} required /></label>
    <label>Last Name <span aria-hidden="true">*</span><input name="last_name" autoComplete="family-name" maxLength={80} required /></label>
    <label className="form-wide">Business Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
    <p className="form-help form-wide">Use your company email. Personal email providers are not accepted.</p>
    <label>Country code<select name="phone_country" defaultValue="+1" aria-label="Phone country code"><option value="+1">US/CA +1</option><option value="+44">UK +44</option><option value="+61">AU +61</option><option value="+63">PH +63</option><option value="other">Other</option></select></label>
    <label>Phone Number<input name="phone" type="tel" autoComplete="tel-national" inputMode="tel" maxLength={32} /></label>
    <label className="form-wide">Company Name <span aria-hidden="true">*</span><input name="company" autoComplete="organization" maxLength={160} required /></label>
    <label className="form-wide">Website / URL<input name="company_website" type="url" autoComplete="url" maxLength={300} placeholder="https://" /></label>
    <label className="form-wide">Company Size <span aria-hidden="true">*</span><select name="company_size" defaultValue="" required><option value="" disabled>Select company size</option><option>1 to 10</option><option>11 to 50</option><option>51 to 200</option><option>201 to 500</option><option>501+</option></select></label>
    <label className="form-wide">How Many Positions to Fill <span aria-hidden="true">*</span><select name="positions_to_fill" defaultValue="" required><option value="" disabled>Select positions</option><option>1</option><option>2 to 3</option><option>4 to 10</option><option>11+</option><option>Not sure yet</option></select></label>
    <label className="form-wide">How Did You Hear About Us? <span aria-hidden="true">*</span><select name="referral_source" defaultValue="" required><option value="" disabled>Select a source</option><option>Google</option><option>LinkedIn</option><option>Referral</option><option>Podcast</option><option>Other</option></select></label>
    <label className="form-wide">What Would You Like Help With? <span aria-hidden="true">*</span><textarea name="message" maxLength={2000} required placeholder="Describe recurring tasks, current owners, and support you need." /></label>
    <input type="hidden" name="source" value={source} />
    <label className="honeypot" aria-hidden="true">Website<input name="website_url" tabIndex={-1} autoComplete="off" /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button primary form-wide" type="submit" disabled={busy || !challenge}>{busy ? 'Sending request' : challenge ? 'Book a Free Consultation' : 'Preparing secure form'}</button>
  </form>;
}
