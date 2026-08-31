import { NextRequest, NextResponse } from 'next/server';

/** Legacy path kept for cached LinkedIn previews — redirects to public OG route. */
export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const target = new URL('/learn/certificato/og', url.origin);
  url.searchParams.forEach((value, key) => {
    target.searchParams.set(key, value);
  });
  return NextResponse.redirect(target, 308);
}
