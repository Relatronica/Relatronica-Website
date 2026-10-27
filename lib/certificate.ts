export interface CertificatePayload {
  id: string;
  courseSlug: string;
  courseTitleIt: string;
  courseTitleEn: string;
  recipientName: string;
  completedAt: string;
  /** True when the certificate is stored in the server-side registry. */
  registered?: boolean;
}

const CERT_STORAGE_KEY = 'relatronica-certificates';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

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

/**
 * Asks the server to issue (or register) the certificate for a course.
 * Passing `legacy` imports a certificate issued before the registry existed,
 * keeping its original id and completion date.
 */
export async function requestCertificate(input: {
  courseSlug: string;
  recipientName: string;
  legacy?: Pick<CertificatePayload, 'id' | 'completedAt'> | null;
}): Promise<CertificatePayload> {
  const response = await fetch('/api/certificate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      courseSlug: input.courseSlug,
      recipientName: input.recipientName,
      ...(input.legacy
        ? { legacy: { id: input.legacy.id, completedAt: input.legacy.completedAt } }
        : {}),
    }),
  });

  if (!response.ok) throw new Error('certificate_request_failed');

  return (await response.json()) as CertificatePayload;
}

/**
 * Builds the public verification link.
 * `registered` links point at the server-side registry by certificate id,
 * `legacy` links carry the old self-contained base64 payload.
 */
export function buildCertificateVerifyUrl(
  token: string,
  mode: 'registered' | 'legacy' = 'registered',
  locale: 'it' | 'en' = 'it',
  options?: { cacheBust?: string }
): string {
  const params = new URLSearchParams(mode === 'registered' ? { id: token } : { d: token });
  if (locale !== 'it') params.set('locale', locale);
  if (options?.cacheBust) params.set('v', options.cacheBust);
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
