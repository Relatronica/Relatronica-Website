import { NextResponse } from 'next/server';
import { getCourse } from '@/data/course';
import {
  certificateIdPrefix,
  createCertificate,
  importCertificate,
  isCertificateIdFormat,
  isCertificateStoreConfigured,
} from '@/lib/certificateStore';

export const dynamic = 'force-dynamic';

const LEGACY_EPOCH = Date.parse('2020-01-01T00:00:00Z');

function normalizeCompletedAt(value: unknown): string {
  const fallback = new Date().toISOString();
  if (typeof value !== 'string') return fallback;

  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return fallback;
  if (parsed > Date.now()) return fallback;
  if (parsed < LEGACY_EPOCH) return fallback;

  return new Date(parsed).toISOString();
}

/**
 * Reads the optional `legacy` block sent by clients that hold a certificate
 * issued before the registry existed. Returns null whenever the payload is not
 * a usable import, in which case the caller falls back to a brand new id.
 */
function resolveLegacyImport(
  legacy: unknown,
  courseSlug: string
): { id: string; completedAt: string } | null {
  if (!legacy || typeof legacy !== 'object') return null;

  const { id, completedAt } = legacy as { id?: unknown; completedAt?: unknown };
  if (typeof id !== 'string') return null;

  const normalized = id.trim().toUpperCase();
  if (!isCertificateIdFormat(normalized)) return null;

  // the id encodes the course it was issued for, so a mismatch is not importable
  if (normalized.split('-')[2] !== certificateIdPrefix(courseSlug)) return null;

  return { id: normalized, completedAt: normalizeCompletedAt(completedAt) };
}

export async function POST(request: Request) {
  if (!isCertificateStoreConfigured()) {
    return NextResponse.json({ error: 'certificate_store_not_configured' }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const { courseSlug, recipientName, legacy } = (body ?? {}) as {
    courseSlug?: unknown;
    recipientName?: unknown;
    legacy?: unknown;
  };

  if (typeof courseSlug !== 'string' || typeof recipientName !== 'string') {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const name = recipientName.trim().slice(0, 80);
  if (name.length < 2) {
    return NextResponse.json({ error: 'invalid_recipient_name' }, { status: 400 });
  }

  const course = getCourse(courseSlug);
  if (!course || course.status === 'coming-soon') {
    return NextResponse.json({ error: 'unknown_course' }, { status: 404 });
  }

  const courseTitles = {
    courseSlug: course.slug,
    courseTitleIt: course.content.it.title,
    courseTitleEn: course.content.en.title,
    recipientName: name,
  };

  const imported = resolveLegacyImport(legacy, course.slug);
  if (imported) {
    const result = await importCertificate({
      certificateId: imported.id,
      ...courseTitles,
      completedAt: imported.completedAt,
    });

    if (result.status === 'created') {
      return NextResponse.json(result.certificate, { status: 201 });
    }

    if (result.status === 'failed') {
      return NextResponse.json({ error: 'certificate_creation_failed' }, { status: 502 });
    }

    // id already taken by another record: fall through and issue a fresh one
  }

  const certificate = await createCertificate(courseTitles);

  if (!certificate) {
    return NextResponse.json({ error: 'certificate_creation_failed' }, { status: 502 });
  }

  return NextResponse.json(certificate, { status: 201 });
}
