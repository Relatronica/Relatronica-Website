import { decodeCertificatePayload } from '@/lib/certificate';
import { parseCertificateLocale } from '@/lib/certificateOg';
import { renderCertificateOgImage } from '@/lib/certificateOgImage';

export const runtime = 'edge';

function parseOgToken(token: string): { encoded: string; locale: 'it' | 'en' } | null {
  if (token.endsWith('-en.png')) {
    return { encoded: token.slice(0, -'-en.png'.length), locale: 'en' };
  }
  if (token.endsWith('.png')) {
    return { encoded: token.slice(0, -'.png'.length), locale: 'it' };
  }
  return null;
}

export async function GET(_request: Request, { params }: { params: { token: string } }) {
  const parsed = parseOgToken(params.token);
  if (!parsed) {
    return new Response('Not found', { status: 404 });
  }

  const { encoded, locale } = parsed;
  const payload = decodeCertificatePayload(encoded);
  if (!payload) {
    return new Response('Invalid certificate', { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const image = await renderCertificateOgImage(payload, encoded, locale, siteUrl);

  image.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  image.headers.set('Content-Disposition', 'inline; filename="relatronica-certificate.png"');

  return image;
}
