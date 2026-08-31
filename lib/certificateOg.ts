import type { CertificatePayload } from './certificate';
import { formatCertificateDate } from './certificate';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

export type CertificateLocale = 'it' | 'en';

const OG_LABELS: Record<
  CertificateLocale,
  {
    badge: string;
    title: string;
    subtitle: string;
    awardedTo: string;
    forCompleting: string;
    date: string;
    id: string;
    shareTitle: (name: string, course: string) => string;
    shareDescription: string;
  }
> = {
  it: {
    badge: 'Relatronica Academy',
    title: 'Attestato di completamento',
    subtitle: 'Percorso formativo aperto e gratuito',
    awardedTo: 'Conferito a',
    forCompleting: 'Per il completamento del corso',
    date: 'Data',
    id: 'ID attestato',
    shareTitle: (name, course) => `${name} ha completato ${course}`,
    shareDescription:
      'Attestato Relatronica Academy · Percorso formativo gratuito su design speculativo, civic tech e tecnologie responsabili.',
  },
  en: {
    badge: 'Relatronica Academy',
    title: 'Certificate of completion',
    subtitle: 'Free and open learning path',
    awardedTo: 'Awarded to',
    forCompleting: 'For completing the course',
    date: 'Date',
    id: 'Certificate ID',
    shareTitle: (name, course) => `${name} completed ${course}`,
    shareDescription:
      'Relatronica Academy certificate · Free learning path on speculative design, civic tech and responsible technologies.',
  },
};

export function parseCertificateLocale(value?: string | null): CertificateLocale {
  return value === 'en' ? 'en' : 'it';
}

export function buildCertificateOgImageUrl(encoded: string, locale: CertificateLocale = 'it'): string {
  // Static-looking path (no query string) — LinkedIn handles this more reliably
  const suffix = locale === 'en' ? '-en.png' : '.png';
  return `${siteUrl}/learn/certificato/og/${encoded}${suffix}`;
}

export function buildCertificateVerifyUrl(
  encoded: string,
  locale: CertificateLocale = 'it',
  cacheBust?: string
): string {
  const params = new URLSearchParams({ d: encoded });
  if (locale !== 'it') params.set('locale', locale);
  if (cacheBust) params.set('v', cacheBust);
  return `${siteUrl}/learn/certificato/verifica?${params.toString()}`;
}

export function getCertificateOgMetadata(
  payload: CertificatePayload,
  encoded: string,
  locale: CertificateLocale = 'it'
) {
  const labels = OG_LABELS[locale];
  const courseTitle = locale === 'it' ? payload.courseTitleIt : payload.courseTitleEn;
  const verifyUrl = buildCertificateVerifyUrl(encoded, locale);
  const ogImageUrl = buildCertificateOgImageUrl(encoded, locale);

  return {
    courseTitle,
    labels,
    verifyUrl,
    ogImageUrl,
    title: `${payload.recipientName} — ${courseTitle} | Relatronica Academy`,
    ogTitle: labels.shareTitle(payload.recipientName, courseTitle),
    description: labels.shareDescription,
    dateStr: formatCertificateDate(payload.completedAt, locale),
  };
}

export { OG_LABELS };
