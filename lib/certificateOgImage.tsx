import { ImageResponse } from 'next/og';
import type { CertificatePayload } from './certificate';
import { getCertificateOgMetadata, type CertificateLocale } from './certificateOg';

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

export async function renderCertificateOgImage(
  payload: CertificatePayload,
  encoded: string,
  locale: CertificateLocale,
  siteUrl: string
): Promise<ImageResponse> {
  const { labels, courseTitle, dateStr } = getCertificateOgMetadata(payload, encoded, locale);

  let logoSrc: string | null = null;
  try {
    const logoResponse = await fetch(new URL('/logo.png', siteUrl).toString());
    if (logoResponse.ok) {
      const logoBuffer = await logoResponse.arrayBuffer();
      logoSrc = `data:image/png;base64,${arrayBufferToBase64(logoBuffer)}`;
    }
  } catch {
    // optional logo
  }

  const recipientName = truncate(payload.recipientName, 48);
  const courseTitleDisplay = truncate(courseTitle, 72);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #ecfdf5 100%)',
          padding: 40,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid rgba(74, 124, 89, 0.45)',
            borderRadius: 24,
            position: 'relative',
            padding: '36px 48px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 12,
              border: '1px solid rgba(74, 124, 89, 0.25)',
              borderRadius: 16,
            }}
          />

          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} alt="" width={56} height={60} style={{ objectFit: 'contain', marginBottom: 16 }} />
          ) : null}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#4a7c59',
              color: 'white',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              padding: '8px 24px',
              borderRadius: 999,
              marginBottom: 20,
            }}
          >
            {labels.badge}
          </div>

          <div style={{ fontSize: 44, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
            {labels.title}
          </div>
          <div style={{ fontSize: 20, color: '#64748b', marginBottom: 24 }}>{labels.subtitle}</div>

          <div style={{ width: 120, height: 2, background: 'rgba(74, 124, 89, 0.5)', marginBottom: 24 }} />

          <div style={{ fontSize: 20, color: '#64748b', marginBottom: 8 }}>{labels.awardedTo}</div>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#0f172a', marginBottom: 20, textAlign: 'center' }}>
            {recipientName}
          </div>

          <div style={{ fontSize: 20, color: '#64748b', marginBottom: 8 }}>{labels.forCompleting}</div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#4a7c59',
              marginBottom: 24,
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            {courseTitleDisplay}
          </div>

          <div style={{ display: 'flex', gap: 48, fontSize: 18, color: '#64748b' }}>
            <span>
              {labels.date}: <strong style={{ color: '#334155' }}>{dateStr}</strong>
            </span>
            <span>
              {labels.id}: <strong style={{ color: '#334155', fontFamily: 'monospace' }}>{payload.id}</strong>
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
