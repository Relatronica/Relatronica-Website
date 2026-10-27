import { decodeCertificatePayload } from '@/lib/certificate';
import { getRegisteredCertificate } from '@/lib/certificateStore';
import { type CertificateLinkMode } from '@/lib/certificateOg';
import { renderCertificateOgImage } from '@/lib/certificateOgImage';

export const runtime = 'edge';

function parseOgToken(token: string): { token: string; locale: 'it' | 'en' } | null {
  if (token.endsWith('-en.png')) {
    return { token: token.slice(0, -'-en.png'.length), locale: 'en' };
  }
  if (token.endsWith('.png')) {
    return { token: token.slice(0, -'.png'.length), locale: 'it' };
  }
  return null;
}

export async function GET(_request: Request, { params }: { params: { token: string } }) {
  const parsed = parseOgToken(params.token);
  if (!parsed) {
    return new Response('Not found', { status: 404 });
  }

  const { token, locale } = parsed;

  const registered = await getRegisteredCertificate(token);
  const mode: CertificateLinkMode = registered ? 'registered' : 'legacy';
  const payload = registered ?? decodeCertificatePayload(token);

  if (!payload) {
    return new Response('Invalid certificate', { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const image = await renderCertificateOgImage(payload, token, locale, siteUrl, mode);

  image.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  image.headers.set('Content-Disposition', 'inline; filename="relatronica-certificate.png"');

  return image;
}
