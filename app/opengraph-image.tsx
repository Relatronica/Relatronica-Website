import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Relatronica — Design Speculativo, Civic Tech e Knowledge Mapping';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export default async function Image() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  let logoSrc: string | null = null;
  try {
    const logoResponse = await fetch(new URL('/logo.png', siteUrl).toString());
    if (logoResponse.ok) {
      const logoBuffer = await logoResponse.arrayBuffer();
      logoSrc = `data:image/png;base64,${arrayBufferToBase64(logoBuffer)}`;
    }
  } catch {
    // logo optional
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 45%, #0f766e 100%)',
          padding: 64,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              width={72}
              height={72}
              alt=""
              style={{ borderRadius: 16, background: '#fff' }}
            />
          ) : null}
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              fontWeight: 700,
              color: '#f8fafc',
              letterSpacing: '-0.02em',
            }}
          >
            Relatronica
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 920 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            Design speculativo, civic tech e knowledge mapping
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              color: '#cbd5e1',
              lineHeight: 1.4,
            }}
          >
            Immaginiamo futuri possibili e creiamo strumenti per le comunità
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#94a3b8',
            fontSize: 22,
          }}
        >
          <span>Nati al CERN · 2024</span>
          <span>relatronica.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
