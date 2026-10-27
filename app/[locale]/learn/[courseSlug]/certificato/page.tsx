'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Download,
  Linkedin,
  Link2,
  CheckCircle2,
  Trophy,
  Copy,
  Check,
} from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { CertificatePreview } from '@/components/learn/CertificatePreview';
import { useI18n } from '@/lib/i18n';
import { getCourse } from '@/data/course';
import { useCourseProgress } from '@/lib/courseProgress';
import { isCourseComplete } from '@/lib/courseCompletion';
import {
  CertificatePayload,
  getStoredCertificate,
  saveStoredCertificate,
  requestCertificate,
  buildCertificateVerifyUrl,
  buildLinkedInShareUrl,
} from '@/lib/certificate';
import { generateCertificatePdf } from '@/lib/generateCertificatePdf';

export default function CertificatoPage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const { completedLessons, isQuizPassed } = useCourseProgress();
  const courseSlug = params.courseSlug as string;
  const course = getCourse(courseSlug);

  const [nameInput, setNameInput] = useState('');
  const [certificate, setCertificate] = useState<CertificatePayload | null>(null);
  const [copied, setCopied] = useState(false);
  const [issuing, setIssuing] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const restored = useRef(false);
  const legacyCertificate = useRef<CertificatePayload | null>(null);

  const complete = useMemo(() => {
    if (!course) return false;
    return isCourseComplete(course, completedLessons, isQuizPassed);
  }, [course, completedLessons, isQuizPassed]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!course || !complete || !mounted || restored.current) return;

    const stored = getStoredCertificate(courseSlug);
    if (!stored) return;

    restored.current = true;
    setNameInput(stored.recipientName);

    if (stored.registered) {
      setCertificate(stored);
      return;
    }

    // Certificates issued before the registry existed live only in this browser.
    // Register them server-side keeping the original id, so the link already
    // shared (and the credential id) stay valid.
    legacyCertificate.current = stored;
    setRegistering(true);

    void (async () => {
      try {
        const registered = await requestCertificate({
          courseSlug,
          recipientName: stored.recipientName,
          legacy: stored,
        });
        saveStoredCertificate(registered);
        setCertificate(registered);
      } catch {
        // the legacy certificate stays available for a manual retry
      } finally {
        setRegistering(false);
      }
    })();
  }, [course, complete, courseSlug, mounted]);

  if (!course || course.status === 'coming-soon') {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('learn.notFound')}</h1>
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">{t('learn.backToAcademy')}</Link>
        </div>
      </DotBoard>
    );
  }

  const courseContent = course.content[locale as 'it' | 'en'] || course.content.it;

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

  const handleGenerate = async () => {
    const name = nameInput.trim();
    if (!name || issuing) return;

    setIssuing(true);
    setError(null);

    try {
      const issued = await requestCertificate({
        courseSlug,
        recipientName: name,
        legacy: legacyCertificate.current,
      });
      saveStoredCertificate(issued);
      setCertificate(issued);
      setNameInput(name);
    } catch {
      setError(t('learn.certificate.issueError'));
    } finally {
      setIssuing(false);
    }
  };

  const handleDownload = async () => {
    if (!certificate) return;
    await generateCertificatePdf(certificate, locale as 'it' | 'en');
  };

  const verifyUrl = certificate
    ? buildCertificateVerifyUrl(certificate.id, 'registered', locale as 'it' | 'en')
    : '';

  const linkedInText =
    locale === 'it'
      ? `Ho completato il corso "${courseContent.title}" su Relatronica Academy — percorsi gratuiti su design speculativo, civic tech e tecnologie responsabili.`
      : `I completed the course "${courseContent.title}" on Relatronica Academy — free learning paths on speculative design, civic tech and responsible technologies.`;

  const handleLinkedInShare = () => {
    if (!verifyUrl) return;
    window.open(buildLinkedInShareUrl(verifyUrl, linkedInText), '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    if (!verifyUrl) return;
    try {
      await navigator.clipboard.writeText(verifyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!mounted) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6" />
      </DotBoard>
    );
  }

  if (!complete) {
    return (
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t('learn.certificate.notReadyTitle')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('learn.certificate.notReadyDescription')}
            </p>
            <Link
              href={`/learn/${courseSlug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('learn.backToCourse')}
            </Link>
          </div>
        </div>
      </DotBoard>
    );
  }

  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <Link
            href={`/learn/${courseSlug}`}
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('learn.backToCourse')}
          </Link>

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 mb-4">
              <Trophy className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {t('learn.certificate.pageTitle')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              {t('learn.certificate.pageDescription')}
            </p>
          </div>

          {registering ? (
            <div className="mb-6 rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/30 px-5 py-4 text-sm text-emerald-800 dark:text-emerald-300">
              {t('learn.certificate.registering')}
            </div>
          ) : null}

          {!certificate ? (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 mb-10 shadow-sm">
              <label htmlFor="cert-name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {t('learn.certificate.nameLabel')}
              </label>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {t('learn.certificate.nameHint')}
              </p>
              <input
                id="cert-name"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') void handleGenerate();
                }}
                placeholder={t('learn.certificate.namePlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 mb-6"
                maxLength={80}
              />
              {error ? (
                <p className="text-sm text-red-600 dark:text-red-400 mb-4" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                onClick={() => void handleGenerate()}
                disabled={!nameInput.trim() || issuing || registering}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                {issuing ? t('learn.certificate.issuing') : t('learn.certificate.generate')}
              </button>
            </div>
          ) : (
            <>
              <CertificatePreview payload={certificate} locale={locale as 'it' | 'en'} labels={labels} />

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-10">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-gray-100 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  {t('learn.certificate.downloadPdf')}
                </button>
                <button
                  onClick={handleLinkedInShare}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  {t('learn.certificate.shareLinkedIn')}
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Link2 className="w-4 h-4" />}
                  {copied ? t('learn.certificate.linkCopied') : t('learn.certificate.copyLink')}
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 mt-6 max-w-md mx-auto leading-relaxed">
                {t('learn.certificate.verifyNote')}
              </p>
            </>
          )}
        </div>
      </div>
    </DotBoard>
  );
}
