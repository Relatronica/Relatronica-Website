'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useI18n } from '@/lib/i18n';

const PRINCIPLE_ACCENTS = [
  { bg: 'bg-blue-600', light: 'bg-blue-50 dark:bg-blue-950/50', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-900' },
  { bg: 'bg-purple-600', light: 'bg-purple-50 dark:bg-purple-950/50', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-900' },
  { bg: 'bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950/50', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-900' },
  { bg: 'bg-orange-600', light: 'bg-orange-50 dark:bg-orange-950/50', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-900' },
  { bg: 'bg-rose-600', light: 'bg-rose-50 dark:bg-rose-950/50', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-900' },
  { bg: 'bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950/50', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-900' },
  { bg: 'bg-teal-600', light: 'bg-teal-50 dark:bg-teal-950/50', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-900' },
  { bg: 'bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950/50', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-900' },
  { bg: 'bg-violet-600', light: 'bg-violet-50 dark:bg-violet-950/50', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-900' },
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
    "isPartOf": { "@type": "WebSite", "name": "Relatronica", "url": siteUrl },
    "about": {
      "@type": "Thing",
      "name": "Relatronica Manifesto",
      "description": "Principles and beliefs guiding Relatronica's work.",
    },
  };

  const cardBase = "rounded-2xl border bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm";

  return (
    <>
      <StructuredData data={manifestoSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">

            <FadeIn className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold tracking-wider uppercase mb-8">
                {t('manifesto.badge')}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-8">
                {t('manifesto.title')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                {t('manifesto.opening')}
              </p>
            </FadeIn>

            <FadeIn>
              <section className={`${cardBase} border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-16`}>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {t('manifesto.preamble')}
                </p>
              </section>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20" staggerDelay={0.06}>
              {principles.map((principle, idx) => {
                const isFeatured = idx === 0 || idx === 4 || idx === 8;
                return (
                  <StaggerItem key={principle.number} className={isFeatured ? 'md:col-span-2' : 'md:col-span-1'}>
                    <article className="bento-card bento-card-hover h-full p-8 md:p-10 flex flex-col justify-between">
                      <div className="flex items-start gap-5 mb-6">
                        <div className="shrink-0 w-12 h-12 rounded-2xl nordic-sage-bg nordic-sage-text flex items-center justify-center border border-emerald-900/10 dark:border-emerald-100/10">
                          <span className="text-lg font-bold">
                            {principle.number}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                            {principle.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                        {principle.body}
                      </p>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            <FadeIn>
              <section className="bento-card p-8 md:p-12 mb-12 border-emerald-900/20 dark:border-emerald-100/20">
                <p className="text-slate-900 dark:text-white text-lg md:text-xl leading-relaxed text-center font-medium">
                  {t('manifesto.closing')}
                </p>
              </section>
            </FadeIn>

            <FadeIn className="text-center mb-16">
              <p className="text-slate-500 dark:text-slate-500 text-sm">
                {t('manifesto.signature')}
              </p>
            </FadeIn>

            <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {[
                { href: '/nexthuman', key: 'explore' },
                { href: '/about', key: 'about' },
              ].map(({ href, key }) => (
                <StaggerItem key={key}>
                  <Link
                    href={href}
                    className="group block bento-card bento-card-hover p-8"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t(`manifesto.cta.${key}.title`)}</h3>
                      <ArrowRight className="w-5 h-5 nordic-sage-text group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`manifesto.cta.${key}.description`)}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>


          </div>
        </div>
      </DotBoard>
    </>
  );
}
