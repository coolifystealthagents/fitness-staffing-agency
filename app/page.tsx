import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';
export const metadata: Metadata = { title: 'Fitness Staffing Agency', alternates: { canonical: '/' }, openGraph: { images: ['/heroes/editorial/home.svg'] } };
export default function Page() { return <HomePage />; }
