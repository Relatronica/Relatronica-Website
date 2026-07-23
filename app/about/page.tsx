'use client';

import { Sparkles, Users, Network, Lightbulb, Target, Globe, Info, Shield, Heart, Zap, BookOpen, Code2, Instagram, Linkedin, HandHeart, ExternalLink } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface InfoTooltipProps {
  term: string;
  definition: string;
  ariaLabel?: string;
}

function InfoTooltip({ term, definition, ariaLabel }: InfoTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="inline-flex items-center relative">
      <strong className="font-semibold text-slate-900 dark:text-white">{term}</strong>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="ml-1.5 inline-flex items-center justify-center cursor-help"
        aria-label={ariaLabel}
      >
        <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
        {isHovered && (
          <div className="absolute left-0 bottom-full mb-2 z-50 w-72 p-4 rounded-lg bg-slate-900 dark:bg-slate-700 text-white text-xs leading-relaxed shadow-2xl pointer-events-none animate-in fade-in duration-200">
            {definition}
            <div className="absolute -bottom-1 left-5 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45" />
          </div>
        )}
      </span>
    </span>
  );
}

export default function AboutPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About - Relatronica",
    "description": "Relatronica è uno studio di progettazione nato in Svizzera nel 2024 da un team di designer e ricercatori che si sono incontrati al CERN.",
    "url": `${siteUrl}/about`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Relatronica",
      "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli.",
      "sameAs": [
        "https://www.instagram.com/relatronica",
        "https://www.linkedin.com/company/relatronica/"
      ],
      "knowsAbout": [
        "Speculative Design", "Civic Tech", "Knowledge Mapping",
        "Data Visualization", "Future Scenarios", "Responsible Technology"
      ]
    }
  };

  const cardBase = "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm";
  const iconBoxBase = "p-3 rounded-xl flex-shrink-0";
  const headingBase = "text-2xl font-bold mb-3 text-slate-900 dark:text-white";
  const textBase = "text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]";

  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h1 className="text-6xl font-bold mb-6 text-slate-900 dark:text-white">{t('about.title')}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('about.tagline')}
            </p>
          </FadeIn>

          <div className="space-y-6">
            {/* Bento Grid Row 1: Mission & Origins */}
            <div className="grid md:grid-cols-2 gap-5">
              <FadeIn className="h-full">
                <section className="bento-card bento-card-hover p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl nordic-sage-bg nordic-sage-text">
                        <Target className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider nordic-sage-text">
                        Scopo & Visione
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('about.mission.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {t('about.mission.description', {
                        speculativeDesign: t('about.mission.speculativeDesign'),
                        civicTech: t('about.mission.civicTech'),
                        knowledgeMapping: t('about.mission.knowledgeMapping')
                      }).split(/(\{speculativeDesign\}|\{civicTech\}|\{knowledgeMapping\})/).map((part, i) => {
                        if (part === '{speculativeDesign}') return <InfoTooltip key={i} term={t('about.mission.speculativeDesign')} definition={t('about.mission.speculativeDesignTooltip')} ariaLabel={`${t('about.mission.speculativeDesign')} definition`} />;
                        if (part === '{civicTech}') return <InfoTooltip key={i} term={t('about.mission.civicTech')} definition={t('about.mission.civicTechTooltip')} ariaLabel={`${t('about.mission.civicTech')} definition`} />;
                        if (part === '{knowledgeMapping}') return <InfoTooltip key={i} term={t('about.mission.knowledgeMapping')} definition={t('about.mission.knowledgeMappingTooltip')} ariaLabel={`${t('about.mission.knowledgeMapping')} definition`} />;
                        return <span key={i}>{part}</span>;
                      })}
                    </p>
                  </div>
                </section>
              </FadeIn>

              <FadeIn className="h-full">
                <section className="bento-card bento-card-hover p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl nordic-terracotta-bg nordic-terracotta-text">
                        <Globe className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider nordic-terracotta-text">
                        Svizzera & CERN
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('about.origins.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">{t('about.origins.paragraph1')}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t('about.origins.paragraph2')}</p>
                  </div>
                </section>
              </FadeIn>
            </div>

            {/* Bento Grid Row 2: Pillars */}
            <StaggerChildren className="grid md:grid-cols-3 gap-5" staggerDelay={0.08}>
              {[
                { icon: Sparkles, colorClass: 'nordic-moss-bg nordic-moss-text', key: 'speculativeDesign' },
                { icon: Users, colorClass: 'nordic-sage-bg nordic-sage-text', key: 'civicTech' },
                { icon: Network, colorClass: 'nordic-terracotta-bg nordic-terracotta-text', key: 'knowledgeMapping' },
              ].map(({ icon: Icon, colorClass, key }) => (
                <StaggerItem key={key}>
                  <div className="bento-card bento-card-hover p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className={`p-3 rounded-xl w-fit mb-5 ${colorClass}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{t(`about.pillars.${key}.title`)}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t(`about.pillars.${key}.description`)}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Bento Grid Row 3: Approach & Values */}
            <div className="grid md:grid-cols-2 gap-5">
              <FadeIn className="h-full">
                <section className="bento-card bento-card-hover p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl nordic-slate-bg nordic-slate-text">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('about.approach.title')}</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{t('about.approach.intro')}</p>
                  <ul className="space-y-2.5 text-slate-700 dark:text-slate-300 text-sm">
                    {['critical', 'accessible', 'participation', 'ethics'].map(point => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="nordic-slate-text font-bold">•</span>
                        <span>{t(`about.approach.points.${point}`)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeIn>

              <FadeIn className="h-full">
                <section className="bento-card bento-card-hover p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl nordic-sage-bg nordic-sage-text">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('about.values.title')}</h2>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                    {['accessibility', 'participation', 'critical', 'responsibility', 'openness'].map(val => (
                      <li key={val} className="flex items-start gap-2.5">
                        <span className="nordic-sage-text font-bold">•</span>
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white">{t(`about.values.${val}.title`)}</span>
                          <span className="text-slate-600 dark:text-slate-400"> - {t(`about.values.${val}.description`)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeIn>
            </div>
          </div>


          <FadeIn>
            <section className={`${cardBase} p-10`}>
              <div className="flex items-start gap-5">
                <div className={`${iconBoxBase} bg-rose-50 dark:bg-rose-950/50`}>
                  <Globe className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <h2 className={headingBase}>{t('about.nexthuman.title')}</h2>
                  <p className={`${textBase} mb-4`}>{t('about.nexthuman.paragraph1')}</p>
                  <p className={textBase}>{t('about.nexthuman.paragraph2')}</p>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-10 shadow-sm">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('about.collaborate.title')}</h2>
                <p className={`${textBase} mb-6`}>{t('about.collaborate.description')}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                  {['collaborative', 'research', 'workshops', 'consulting'].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {t(`about.collaborate.tags.${tag}`)}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a href="https://www.instagram.com/relatronica" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-200 font-medium text-sm"
                    aria-label={t('about.collaborate.instagram')}>
                    <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/company/relatronica/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-200 font-medium text-sm"
                    aria-label={t('about.collaborate.linkedin')}>
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-10 shadow-sm">
              <div className="text-center max-w-2xl mx-auto">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-white/10 w-fit mx-auto mb-5">
                  <HandHeart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('about.support.title')}</h2>
                <p className={`${textBase} mb-3`}>{t('about.support.description')}</p>
                <p className={`${textBase} mb-8`}>{t('about.support.impact')}</p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {['observer', 'explorer', 'architect'].map(tier => (
                    <div key={tier} className="p-4 rounded-xl bg-white/70 dark:bg-white/10 border border-slate-200/60 dark:border-white/10">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{t(`about.support.tiers.${tier}.name`)}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">{t(`about.support.tiers.${tier}.description`)}</p>
                    </div>
                  ))}
                </div>
                <a href="https://buymeacoffee.com/relatronica" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transition-all duration-200 font-medium text-sm"
                  aria-label={t('about.support.cta')}>
                  <span>{t('about.support.cta')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </DotBoard>
    </>
  );
}

