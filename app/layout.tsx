import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';
import { Header, Footer } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';
import './v3.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Fitness operations support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: { type: 'website', siteName: site.name, images: [{ url: '/hero.png', width: 1672, height: 941, alt: site.heroAlt }] },
  twitter: { card: 'summary_large_image', images: ['/hero.png'] }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: `https://${site.domain}`,
  logo: `https://${site.domain}/icon.png`,
  parentOrganization: { '@type': 'Organization', name: 'StealthAgents', url: 'https://stealthagents.com/' }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') || undefined;
  return <html lang="en" data-design={site.design}>
    <body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}>
      <Header />
      {children}
      <Footer />
      <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script nonce={nonce} id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script>
      <Script nonce={nonce} src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
    </body>
  </html>;
}
