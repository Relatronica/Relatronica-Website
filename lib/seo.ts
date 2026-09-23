import type { Locale } from '@/i18n';
import { defaultLocale } from '@/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

/** Absolute site origin without trailing slash */
export function getSiteUrl(): string {
  return siteUrl.replace(/\/$/, '');
}

/** Public path for a locale (`as-needed`: IT unprefixed, EN under `/en`) */
export function localizedPath(locale: Locale, path: string = '/'): string {
  const normalized =
    !path || path === '/'
      ? '/'
      : path.startsWith('/')
        ? path
        : `/${path}`;

  if (locale === defaultLocale) {
    return normalized;
  }

  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}

/** Absolute URL for canonical / OG */
export function absoluteUrl(locale: Locale, path: string = '/'): string {
  const localPath = localizedPath(locale, path);
  return `${getSiteUrl()}${localPath === '/' ? '' : localPath}`;
}

/** hreflang map for Metadata.alternates.languages */
export function languageAlternates(path: string = '/'): Record<string, string> {
  return {
    'it-IT': localizedPath('it', path),
    en: localizedPath('en', path),
    'x-default': localizedPath('it', path),
  };
}
