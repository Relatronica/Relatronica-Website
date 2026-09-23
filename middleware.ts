import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip API, Next internals, static files, and certificate OG image pipeline
  matcher: [
    '/((?!api|_next|_vercel|learn/certificato/og|.*\\..*).*)',
  ],
};
