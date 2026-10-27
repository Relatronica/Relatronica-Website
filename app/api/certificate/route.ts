import { NextResponse } from 'next/server';
import { getCourse } from '@/data/course';
import { createCertificate, isCertificateStoreConfigured } from '@/lib/certificateStore';

export const dynamic = 'force-dynamic';

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

  const { courseSlug, recipientName } = (body ?? {}) as {
    courseSlug?: unknown;
    recipientName?: unknown;
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

  const certificate = await createCertificate({
    courseSlug: course.slug,
    courseTitleIt: course.content.it.title,
    courseTitleEn: course.content.en.title,
    recipientName: name,
  });

  if (!certificate) {
    return NextResponse.json({ error: 'certificate_creation_failed' }, { status: 502 });
  }

  return NextResponse.json(certificate, { status: 201 });
}
