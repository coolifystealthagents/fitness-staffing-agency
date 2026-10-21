/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://*.oncehub.com; style-src 'self' 'unsafe-inline' https://*.oncehub.com; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://acrtracking.stealthagents.us https://*.oncehub.com; frame-src https://go.oncehub.com https://*.oncehub.com; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' }
];

const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
  async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; }
};
export default nextConfig;
