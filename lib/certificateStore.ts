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

/** Course prefix baked into the certificate id, e.g. `fondamenti` → `FOND`. */
export function certificateIdPrefix(courseSlug: string): string {
  return courseSlug
    .replace(/[^a-z0-9]/gi, '')
    .slice(0, 4)
    .toUpperCase()
    .padEnd(4, 'X');
}

/**
 * Matches both id shapes: the current one (12 hex chars) and the legacy one
 * issued in the browser before the registry existed (6 base36 chars).
 */
export function isCertificateIdFormat(id: string): boolean {
  return /^REL-\d{4}-[A-Z0-9]{4}-[A-Z0-9]{6,12}$/.test(id);
}

export function generateCertificateId(courseSlug: string): string {
  return `REL-${new Date().getFullYear()}-${certificateIdPrefix(courseSlug)}-${randomToken()}`;
}

export type InsertCertificateResult =
  | { status: 'created'; certificate: CertificatePayload }
  | { status: 'conflict' }
  | { status: 'failed' };

async function insertRow(row: CertificateRow): Promise<InsertCertificateResult> {
  if (!isCertificateStoreConfigured()) return { status: 'failed' };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
    method: 'POST',
    headers: { ...requestHeaders(), Prefer: 'return=representation' },
    body: JSON.stringify(row),
    cache: 'no-store',
  });

  // unique index on certificate_id — the id is already taken
  if (response.status === 409) return { status: 'conflict' };
  if (!response.ok) return { status: 'failed' };

  const created = (await response.json()) as CertificateRow[];
  return created.length > 0
    ? { status: 'created', certificate: rowToPayload(created[0]) }
    : { status: 'failed' };
}

export async function createCertificate(input: {
  courseSlug: string;
  courseTitleIt: string;
  courseTitleEn: string;
  recipientName: string;
}): Promise<CertificatePayload | null> {
  const result = await insertRow({
    certificate_id: generateCertificateId(input.courseSlug),
    course_slug: input.courseSlug,
    course_title_it: input.courseTitleIt,
    course_title_en: input.courseTitleEn,
    recipient_name: input.recipientName,
    completed_at: new Date().toISOString(),
  });

  return result.status === 'created' ? result.certificate : null;
}

/**
 * Registers a certificate that was issued in the browser before the registry
 * existed, keeping its original id and completion date so links already shared
 * (and the credential id stored elsewhere) stay valid.
 */
export async function importCertificate(input: {
  certificateId: string;
  courseSlug: string;
  courseTitleIt: string;
  courseTitleEn: string;
  recipientName: string;
  completedAt: string;
}): Promise<InsertCertificateResult> {
  return insertRow({
    certificate_id: input.certificateId,
    course_slug: input.courseSlug,
    course_title_it: input.courseTitleIt,
    course_title_en: input.courseTitleEn,
    recipient_name: input.recipientName,
    completed_at: input.completedAt,
  });
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
