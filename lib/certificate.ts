export interface CertificatePayload {
  id: string;
  courseSlug: string;
  courseTitleIt: string;
  courseTitleEn: string;
  recipientName: string;
  completedAt: string;
}

const CERT_STORAGE_KEY = 'relatronica-certificates';

export function generateCertificateId(courseSlug: string): string {
  const year = new Date().getFullYear();
  const prefix = courseSlug
    .replace(/[^a-z0-9]/gi, '')
    .slice(0, 4)
    .toUpperCase()
    .padEnd(4, 'X');
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `REL-${year}-${prefix}-${rand}`;
}

export function encodeCertificatePayload(payload: CertificatePayload): string {
  const json = JSON.stringify(payload);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeCertificatePayload(encoded: string): CertificatePayload | null {
  try {
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) base64 += '=';
    const json = decodeURIComponent(escape(atob(base64)));
    const parsed = JSON.parse(json) as CertificatePayload;
    if (!parsed.id || !parsed.courseSlug || !parsed.recipientName) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getStoredCertificate(courseSlug: string): CertificatePayload | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(CERT_STORAGE_KEY);
    if (!stored) return null;
    const all = JSON.parse(stored) as Record<string, CertificatePayload>;
    return all[courseSlug] ?? null;
  } catch {
    return null;
  }
}

export function saveStoredCertificate(payload: CertificatePayload): void {
  if (typeof window === 'undefined') return;
  try {
    const stored = localStorage.getItem(CERT_STORAGE_KEY);
    const all: Record<string, CertificatePayload> = stored ? JSON.parse(stored) : {};
    all[payload.courseSlug] = payload;
    localStorage.setItem(CERT_STORAGE_KEY, JSON.stringify(all));
  } catch {
    // ignore
  }
}

export function buildVerifyUrl(
  payload: CertificatePayload,
  siteUrl: string,
  locale: 'it' | 'en' = 'it'
): string {
  const encoded = encodeCertificatePayload(payload);
  const params = new URLSearchParams({ d: encoded });
  if (locale !== 'it') params.set('locale', locale);
  return `${siteUrl}/learn/certificato/verifica?${params.toString()}`;
}

export function buildLinkedInShareUrl(shareUrl: string, _text?: string): string {
  const params = new URLSearchParams({ url: shareUrl });
  // LinkedIn reads title/description/image from OG tags on shareUrl
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
}

export function formatCertificateDate(isoDate: string, locale: 'it' | 'en'): string {
  return new Date(isoDate).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
