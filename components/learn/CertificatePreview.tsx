'use client';

import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { CertificatePayload, formatCertificateDate } from '@/lib/certificate';

interface CertificatePreviewProps {
  payload: CertificatePayload;
  locale: 'it' | 'en';
  labels: {
    badge: string;
    title: string;
    subtitle: string;
    awardedTo: string;
    forCompleting: string;
    date: string;
    id: string;
    footer: string;
  };
}

export function CertificatePreview({ payload, locale, labels }: CertificatePreviewProps) {
  const courseTitle = locale === 'it' ? payload.courseTitleIt : payload.courseTitleEn;
  const dateStr = formatCertificateDate(payload.completedAt, locale);

  return (
    <div
      id="certificate-preview"
      className="relative w-full aspect-[1.414/1] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-800/30"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #ecfdf5 100%)' }}
    >
      <div className="absolute inset-3 md:inset-4 rounded-xl border-2 border-emerald-700/40 pointer-events-none" />
      <div className="absolute inset-5 md:inset-6 rounded-lg border border-emerald-600/20 pointer-events-none" />

      <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 py-10 md:py-14 text-center">
        <Image
          src="/logo.png"
          alt="Relatronica"
          width={48}
          height={52}
          className="object-contain mb-4"
          priority
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider mb-6">
          <GraduationCap className="w-3.5 h-3.5" />
          {labels.badge}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{labels.title}</h2>
        <p className="text-sm text-slate-500 mb-6">{labels.subtitle}</p>

        <div className="w-24 h-px bg-emerald-400/60 mb-6" />

        <p className="text-sm text-slate-500 mb-2">{labels.awardedTo}</p>
        <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{payload.recipientName}</p>

        <p className="text-sm text-slate-500 mb-2">{labels.forCompleting}</p>
        <p className="text-lg md:text-xl font-bold text-emerald-800 mb-8 max-w-md leading-snug">{courseTitle}</p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-500">
          <span>{labels.date}: <strong className="text-slate-700">{dateStr}</strong></span>
          <span>{labels.id}: <strong className="text-slate-700 font-mono">{payload.id}</strong></span>
        </div>

        <p className="absolute bottom-4 md:bottom-6 left-0 right-0 text-[10px] md:text-xs text-slate-400 px-6">
          {labels.footer}
        </p>
      </div>
    </div>
  );
}
