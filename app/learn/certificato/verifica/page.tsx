import type { Metadata } from 'next';
import { Suspense } from 'react';
import { decodeCertificatePayload } from '@/lib/certificate';
import { getCertificateOgMetadata, parseCertificateLocale } from '@/lib/certificateOg';
import { VerifyContent, VerifyLoadingFallback, VerifyPageShell } from './VerifyContent';

export const dynamic = 'force-dynamic';

type PageProps = {
  searchParams: { d?: string; locale?: string };
};

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const encoded = searchParams.d;
  const locale = parseCertificateLocale(searchParams.locale);
  const payload = encoded ? decodeCertificatePayload(encoded) : null;

  if (!payload || !encoded) {
    return {
      title: 'Attestato | Relatronica Academy',
      description: 'Verifica un attestato Relatronica Academy.',
      openGraph: {
        title: 'Attestato | Relatronica Academy',
        description: 'Verifica un attestato Relatronica Academy.',
        type: 'website',
      },
    };
  }

  const { title, ogTitle, description, verifyUrl, ogImageUrl, courseTitle } = getCertificateOgMetadata(
    payload,
    encoded,
    locale
  );

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: verifyUrl,
      type: 'website',
      siteName: 'Relatronica Academy',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${payload.recipientName} — ${courseTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: verifyUrl,
    },
  };
}

export default function VerifyCertificatoPage() {
  return (
    <VerifyPageShell>
      <Suspense fallback={<VerifyLoadingFallback />}>
        <VerifyContent />
      </Suspense>
    </VerifyPageShell>
  );
}
