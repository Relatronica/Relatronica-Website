import type { Metadata } from 'next';
import ObservatoryClient from './ObservatoryClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export const metadata: Metadata = {
  title: 'Pulse',
  description: 'Notizie in tempo reale collegate agli scenari futuri di NextHuman. Il battito del futuro, oggi. Scopri come le notizie di oggi plasmano il domani.',
  keywords: [
    'pulse',
    'osservatorio',
    'scenari futuri',
    'intelligenza artificiale',
    'etica tecnologica',
    'sovranità digitale',
    'civic tech',
    'knowledge mapping',
    'NextHuman',
    'future scenarios',
  ],
  openGraph: {
    title: 'Pulse | Relatronica',
    description: 'Notizie in tempo reale collegate agli scenari futuri di NextHuman. Il battito del futuro, oggi.',
    url: `${siteUrl}/observatory`,
    type: 'website',
  },
  alternates: {
    canonical: `${siteUrl}/observatory`,
  },
};

export default function ObservatoryPage() {
  return <ObservatoryClient />;
}
