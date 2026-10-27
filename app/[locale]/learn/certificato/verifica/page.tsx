import type { Metadata } from 'next';
import { cache } from 'react';
import type { CertificatePayload } from '@/lib/certificate';
import { decodeCertificatePayload } from '@/lib/certificate';
import { getRegisteredCertificate } from '@/lib/certificateStore';
import {
  getCertificateOgMetadata,
  parseCertificateLocale,
  type CertificateLinkMode,
} from '@/lib/certificateOg';
import { VerifyContent, VerifyPageShell, type CertificateVerifyState } from './VerifyContent';

export const dynamic = 'force-dynamic';

interface ResolvedCertificate {
  state: CertificateVerifyState;
  payload: CertificatePayload | null;
  token: string;
  mode: CertificateLinkMode;
}

const resolveCertificate = cache(async (id?: string, d?: string): Promise<ResolvedCertificate> => {
  if (id) {
    const payload = await getRegisteredCertificate(id);
    return { state: payload ? 'registered' : 'invalid', payload, token: id, mode: 'registered' };
  }

  if (d) {
    const payload = decodeCertificatePayload(d);
    return { state: payload ? 'legacy' : 'invalid', payload, token: d, mode: 'legacy' };
  }

  return { state: 'invalid', payload: null, token: '', mode: 'registered' };
});

type PageProps = {
  searchParams: { d?: string; id?: string; locale?: string };
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = parseCertificateLocale(searchParams.locale);
  const { payload, token, mode } = await resolveCertificate(searchParams.id, searchParams.d);

  if (!payload) {
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
    token,
    locale,
    mode
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
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          type: 'image/png',
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

export default async function VerifyCertificatoPage({ searchParams }: PageProps) {
  const { state, payload } = await resolveCertificate(searchParams.id, searchParams.d);

  return (
    <VerifyPageShell>
      <VerifyContent state={state} payload={payload} />
    </VerifyPageShell>
  );
}
