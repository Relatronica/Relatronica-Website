import { decodeCertificatePayload } from '@/lib/certificate';
import { parseCertificateLocale } from '@/lib/certificateOg';
import { renderCertificateOgImage } from '@/lib/certificateOgImage';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const encoded = searchParams.get('d');
  const locale = parseCertificateLocale(searchParams.get('locale'));

  if (!encoded) {
    return new Response('Missing certificate data', { status: 400 });
  }

  const payload = decodeCertificatePayload(encoded);
  if (!payload) {
    return new Response('Invalid certificate', { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  return renderCertificateOgImage(payload, encoded, locale, siteUrl);
}
