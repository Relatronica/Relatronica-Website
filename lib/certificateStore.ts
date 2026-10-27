import type { CertificatePayload } from './certificate';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TABLE = 'Certificate';

interface CertificateRow {
  certificate_id: string;
  course_slug: string;
  course_title_it: string;
  course_title_en: string;
  recipient_name: string;
  completed_at: string;
}

export function isCertificateStoreConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

function requestHeaders(): Record<string, string> {
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY as string,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };
}

function rowToPayload(row: CertificateRow): CertificatePayload {
  return {
    id: row.certificate_id,
    courseSlug: row.course_slug,
    courseTitleIt: row.course_title_it,
    courseTitleEn: row.course_title_en,
    recipientName: row.recipient_name,
    completedAt: row.completed_at,
    registered: true,
  };
}

function randomToken(bytes = 6): string {
  const buffer = new Uint8Array(bytes);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

export function generateCertificateId(courseSlug: string): string {
  const year = new Date().getFullYear();
  const prefix = courseSlug
    .replace(/[^a-z0-9]/gi, '')
    .slice(0, 4)
    .toUpperCase()
    .padEnd(4, 'X');
  return `REL-${year}-${prefix}-${randomToken()}`;
}

export async function createCertificate(input: {
  courseSlug: string;
  courseTitleIt: string;
  courseTitleEn: string;
  recipientName: string;
}): Promise<CertificatePayload | null> {
  if (!isCertificateStoreConfigured()) return null;

  const row: CertificateRow = {
    certificate_id: generateCertificateId(input.courseSlug),
    course_slug: input.courseSlug,
    course_title_it: input.courseTitleIt,
    course_title_en: input.courseTitleEn,
    recipient_name: input.recipientName,
    completed_at: new Date().toISOString(),
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
    method: 'POST',
    headers: { ...requestHeaders(), Prefer: 'return=representation' },
    body: JSON.stringify(row),
    cache: 'no-store',
  });

  if (!response.ok) return null;

  const created = (await response.json()) as CertificateRow[];
  return created.length > 0 ? rowToPayload(created[0]) : null;
}

export async function getRegisteredCertificate(id: string): Promise<CertificatePayload | null> {
  if (!isCertificateStoreConfigured() || !id) return null;

  const query = new URLSearchParams({
    certificate_id: `eq.${id}`,
    select: '*',
    limit: '1',
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?${query.toString()}`, {
    headers: requestHeaders(),
    cache: 'no-store',
  });

  if (!response.ok) return null;

  const rows = (await response.json()) as CertificateRow[];
  return rows.length > 0 ? rowToPayload(rows[0]) : null;
}
