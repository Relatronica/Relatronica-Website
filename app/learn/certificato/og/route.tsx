import { NextRequest, NextResponse } from 'next/server';
import { parseCertificateLocale } from '@/lib/certificateOg';

/** Legacy query-based OG URL — redirects to static .png path for LinkedIn compatibility. */
export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const encoded = url.searchParams.get('d');
  if (!encoded) {
    return new Response('Missing certificate data', { status: 400 });
  }

  const locale = parseCertificateLocale(url.searchParams.get('locale'));
  const suffix = locale === 'en' ? '-en.png' : '.png';
  return NextResponse.redirect(new URL(`/learn/certificato/og/${encoded}${suffix}`, url.origin), 308);
}
