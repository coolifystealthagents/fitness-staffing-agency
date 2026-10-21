import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
] as const;

const secondaryNav = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' }
] as const;

export function Header() {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <Image src="/logo.svg" alt="" width={38} height={38} priority />
        <span>{site.name}</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">{primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <a className="powered-by" href="https://stealthagents.com/" rel="noopener noreferrer" aria-label="Powered by StealthAgents, visit StealthAgents">
        <span>Powered by</span><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={105} height={35} />
      </a>
    </header>
  </>;
}

export function Footer() {
  return <footer>
    <div className="footer-brand">
      <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
      <p>Specialist remote staffing support for fitness operations, with clear scope and accountable handoffs.</p>
      <a className="footer-powered" href="https://stealthagents.com/" rel="noopener noreferrer"><span>Powered by StealthAgents</span><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={120} height={40} /></a>
    </div>
    <div className="footer-links" aria-label="Footer navigation">
      <div><strong>Start here</strong>{primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><strong>Explore</strong>{secondaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {site.name}. Administrative staffing information only.</p>
  </footer>;
}
