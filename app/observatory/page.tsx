import type { Metadata } from 'next';
import ObservatoryClient from './ObservatoryClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export const metadata: Metadata = {
  title: 'Osservatorio',
  description: 'Un hub di conoscenza auto-aggiornante che aggrega le fonti più autorevoli su etica, IA, policy, sovranità digitale e civic tech. Resta informato sulle tematiche che plasmano il futuro.',
  keywords: [
    'osservatorio',
    'etica tecnologica',
    'intelligenza artificiale',
    'sovranità digitale',
    'policy digitale',
    'civic tech',
    'diritti digitali',
    'AI ethics',
    'digital rights',
  ],
  openGraph: {
    title: 'Osservatorio | Relatronica',
    description: 'Un hub di conoscenza auto-aggiornante su etica, IA, policy, sovranità digitale e civic tech.',
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
