'use client';

import { Link } from '@/i18n/navigation';
import { DotBoard } from '@/components/DotBoard';
import { CertificatePreview } from '@/components/learn/CertificatePreview';
import { useI18n } from '@/lib/i18n';
import type { CertificatePayload } from '@/lib/certificate';

export type CertificateVerifyState = 'registered' | 'legacy' | 'invalid';

interface VerifyContentProps {
  state: CertificateVerifyState;
  payload: CertificatePayload | null;
}

export function VerifyContent({ state, payload }: VerifyContentProps) {
  const { t, locale } = useI18n();

  const labels = {
    badge: t('learn.certificate.badge'),
    title: t('learn.certificate.title'),
    subtitle: t('learn.certificate.subtitle'),
    awardedTo: t('learn.certificate.awardedTo'),
    forCompleting: t('learn.certificate.forCompleting'),
    date: t('learn.certificate.date'),
    id: t('learn.certificate.id'),
    footer: t('learn.certificate.footer'),
  };

  if (state === 'invalid' || !payload) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {t('learn.certificate.verifyInvalid')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          {t('learn.certificate.verifyInvalidDescription')}
        </p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {t('learn.backToAcademy')}
        </Link>
      </div>
    );
  }

  const registered = state === 'registered';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            registered
              ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
              : 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400'
          }`}
        >
          {t(registered ? 'learn.certificate.verifyBadge' : 'learn.certificate.verifyUnregisteredBadge')}
        </span>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {t('learn.certificate.verifyTitle')}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t(
            registered
              ? 'learn.certificate.verifyDescription'
              : 'learn.certificate.verifyUnregisteredDescription'
          )}
        </p>
      </div>

      <CertificatePreview payload={payload} locale={locale as 'it' | 'en'} labels={labels} />

      <div className="text-center mt-8">
        <Link
          href={`/learn/${payload.courseSlug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-gray-100 transition-all"
        >
          {t('learn.certificate.viewCourse')}
        </Link>
      </div>
    </div>
  );
}

export function VerifyPageShell({ children }: { children: React.ReactNode }) {
  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">{children}</div>
    </DotBoard>
  );
}
