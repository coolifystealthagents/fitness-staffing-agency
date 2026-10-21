import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';
export const metadata: Metadata = { title: { absolute: 'Fitness Staffing Agency' }, alternates: { canonical: '/' }, openGraph: { images: [{ url: '/team-bacolod.jpg', width: 953, height: 540, alt: 'Stealth Agents operations team' }] } };
export default function Page() { return <HomePage />; }
