-- Extend the existing "Certificate" table so issued course certificates
-- can be registered server-side and verified against a trusted source.

alter table public."Certificate"
  add column if not exists certificate_id text,
  add column if not exists course_slug text,
  add column if not exists course_title_it text,
  add column if not exists course_title_en text,
  add column if not exists recipient_name text,
  add column if not exists completed_at timestamptz not null default now();

alter table public."Certificate"
  alter column certificate_id set not null,
  alter column course_slug set not null,
  alter column course_title_it set not null,
  alter column course_title_en set not null,
  alter column recipient_name set not null;

create unique index if not exists certificate_certificate_id_key
  on public."Certificate" (certificate_id);

create index if not exists certificate_course_slug_idx
  on public."Certificate" (course_slug);

-- Row Level Security stays enabled with no policies attached on purpose:
-- anonymous clients get no access, only the service role (server-side) can
-- insert and read certificate records.
