'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useI18n } from '@/lib/i18n';

const PRINCIPLE_ACCENTS = [
  { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  { bg: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  { bg: 'bg-orange-600', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  { bg: 'bg-rose-600', light: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
  { bg: 'bg-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  { bg: 'bg-teal-600', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  { bg: 'bg-amber-600', light: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  { bg: 'bg-violet-600', light: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
];

export default function ManifestoPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const principles = Array.from({ length: 9 }, (_, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: t(`manifesto.principles.p${i + 1}.title`),
    body: t(`manifesto.principles.p${i + 1}.body`),
    accent: PRINCIPLE_ACCENTS[i],
  }));

  const manifestoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Manifesto - Relatronica",
    "description": t('manifesto.opening'),
    "url": `${siteUrl}/manifesto`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Relatronica",
      "url": siteUrl,
    },
    "about": {
      "@type": "Thing",
      "name": "Relatronica Manifesto",
      "description": "Principles and beliefs guiding Relatronica's work in speculative design, civic tech and knowledge mapping.",
    },
  };

  return (
    <>
      <StructuredData data={manifestoSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Hero */}
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-8">
                {t('manifesto.badge')}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                {t('manifesto.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {t('manifesto.opening')}
              </p>
            </div>

            {/* Preamble */}
            <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 md:p-12 shadow-sm mb-16">
              <p className="text-slate-700 text-lg leading-relaxed">
                {t('manifesto.preamble')}
              </p>
            </section>

            {/* Principles */}
            <div className="space-y-6 mb-20">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className={`rounded-2xl border ${principle.accent.border} bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${principle.accent.light} flex items-center justify-center`}>
                      <span className={`text-lg md:text-xl font-bold ${principle.accent.text}`}>
                        {principle.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                        {principle.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed text-[15px]">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Closing */}
            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 shadow-lg mb-12">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center font-medium">
                {t('manifesto.closing')}
              </p>
            </section>

            {/* Signature */}
            <div className="text-center mb-16">
              <p className="text-slate-500 text-sm">
                {t('manifesto.signature')}
              </p>
            </div>

            {/* CTA */}
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/nexthuman"
                className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{t('manifesto.cta.explore.title')}</h3>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('manifesto.cta.explore.description')}
                </p>
              </Link>

              <Link
                href="/about"
                className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{t('manifesto.cta.about.title')}</h3>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('manifesto.cta.about.description')}
                </p>
              </Link>
            </div>

          </div>
        </div>
      </DotBoard>
    </>
  );
}
