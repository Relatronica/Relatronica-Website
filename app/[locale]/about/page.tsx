'use client';

import { useEffect, useRef, useState } from 'react';
import {
  type LucideIcon,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Globe,
  HandHeart,
  Heart,
  Info,
  Instagram,
  Lightbulb,
  Linkedin,
  Moon,
  Pizza,
  Sparkles,
  Sun,
  Target,
  Users,
} from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
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

const CHAPTERS: { key: string; icon: LucideIcon; bg: string; text: string }[] = [
  { key: 'mission', icon: Target, bg: 'nordic-sage-bg', text: 'nordic-sage-text' },
  { key: 'origins', icon: Globe, bg: 'nordic-terracotta-bg', text: 'nordic-terracotta-text' },
  { key: 'pillars', icon: Sparkles, bg: 'nordic-moss-bg', text: 'nordic-moss-text' },
  { key: 'approach', icon: Lightbulb, bg: 'nordic-slate-bg', text: 'nordic-slate-text' },
  { key: 'values', icon: Heart, bg: 'nordic-sage-bg', text: 'nordic-sage-text' },
  { key: 'nexthuman', icon: Moon, bg: 'nordic-terracotta-bg', text: 'nordic-terracotta-text' },
  { key: 'collaborate', icon: Users, bg: 'nordic-moss-bg', text: 'nordic-moss-text' },
  { key: 'support', icon: HandHeart, bg: 'nordic-slate-bg', text: 'nordic-slate-text' },
];

const PILLARS: { key: string; icon: LucideIcon; bg: string; text: string }[] = [
  { key: 'speculativeDesign', icon: Sparkles, bg: 'nordic-moss-bg', text: 'nordic-moss-text' },
  { key: 'civicTech', icon: Users, bg: 'nordic-sage-bg', text: 'nordic-sage-text' },
  { key: 'knowledgeMapping', icon: Globe, bg: 'nordic-terracotta-bg', text: 'nordic-terracotta-text' },
];

export default function AboutPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const [isRailOpen, setIsRailOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(CHAPTERS[0].key);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const key = visible[0]?.target.getAttribute('data-chapter-key');
        if (key) setActiveKey(key);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    CHAPTERS.forEach((chapter) => {
      const el = sectionRefs.current[chapter.key];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (key: string) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About - Relatronica',
    description:
      'Relatronica è uno studio di progettazione nato in Svizzera nel 2024 da un team di designer e ricercatori che si sono incontrati al CERN.',
    url: `${siteUrl}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Relatronica',
      description:
        'Uniamo speculative design, civic tech e knowledge mapping per rendere le decisioni pubbliche più comprensibili e partecipate.',
      foundingDate: '2024',
      foundingLocation: {
        '@type': 'Place',
        name: 'CERN, Geneva',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Geneva',
          addressCountry: 'CH',
        },
      },
      areaServed: [
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Italy' },
        { '@type': 'AdministrativeArea', name: 'European Union' },
      ],
      sameAs: [
        'https://www.instagram.com/relatronica',
        'https://www.linkedin.com/company/relatronica/',
      ],
      knowsAbout: [
        'Speculative Design',
        'Civic Tech',
        'Knowledge Mapping',
        'Data Visualization',
        'Future Scenarios',
        'Responsible Technology',
      ],
    },
  };

  const railContent = (
    <div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2.5 block">
        {t('about.chapters')}
      </span>
      <ul className="space-y-1">
        {CHAPTERS.map((chapter) => {
          const Icon = chapter.icon;
          const isActive = activeKey === chapter.key;
          return (
            <li key={chapter.key}>
              <button
                type="button"
                onClick={() => scrollToChapter(chapter.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                  isActive
                    ? `${chapter.bg} ${chapter.text} font-semibold`
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-[18px] h-[18px] shrink-0" strokeWidth={1.75} />
                <span className="truncate">{t(`about.nav.${chapter.key}`)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const renderChapter = (key: string) => {
    switch (key) {
      case 'mission':
        return (
          <div className="bento-card p-8 md:p-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              {t('about.mission.description', {
                speculativeDesign: t('about.mission.speculativeDesign'),
                civicTech: t('about.mission.civicTech'),
                knowledgeMapping: t('about.mission.knowledgeMapping'),
              })
                .split(/(\{speculativeDesign\}|\{civicTech\}|\{knowledgeMapping\})/)
                .map((part, i) => {
                  if (part === '{speculativeDesign}')
                    return (
                      <InfoTooltip
                        key={i}
                        term={t('about.mission.speculativeDesign')}
                        definition={t('about.mission.speculativeDesignTooltip')}
                        ariaLabel={`${t('about.mission.speculativeDesign')} definition`}
                      />
                    );
                  if (part === '{civicTech}')
                    return (
                      <InfoTooltip
                        key={i}
                        term={t('about.mission.civicTech')}
                        definition={t('about.mission.civicTechTooltip')}
                        ariaLabel={`${t('about.mission.civicTech')} definition`}
                      />
                    );
                  if (part === '{knowledgeMapping}')
                    return (
                      <InfoTooltip
                        key={i}
                        term={t('about.mission.knowledgeMapping')}
                        definition={t('about.mission.knowledgeMappingTooltip')}
                        ariaLabel={`${t('about.mission.knowledgeMapping')} definition`}
                      />
                    );
                  return <span key={i}>{part}</span>;
                })}
            </p>
          </div>
        );

      case 'origins':
        return (
          <div className="bento-card p-8 md:p-10 space-y-4">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] text-pretty">
              {t('about.origins.paragraph1')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] text-pretty">
              {t('about.origins.paragraph2')}
            </p>
          </div>
        );

      case 'pillars':
        return (
          <StaggerChildren className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" staggerDelay={0.08}>
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.key} className="h-full">
                  <div className="bento-card bento-card-hover p-6 h-full">
                    <span className={`inline-flex p-3 rounded-xl mb-5 ${pillar.bg} ${pillar.text}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white tracking-tight">
                      {t(`about.pillars.${pillar.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
                      {t(`about.pillars.${pillar.key}.description`)}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        );

      case 'approach':
        return (
          <div className="bento-card p-8 md:p-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] mb-5 text-pretty">
              {t('about.approach.intro')}
            </p>
            <ul className="space-y-3">
              {['research', 'design', 'technology'].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="nordic-slate-text font-bold mt-0.5">•</span>
                  <span>{t(`about.approach.points.${point}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'values':
        return (
          <div className="bento-card p-8 md:p-10">
            <ul className="space-y-4">
              {['accessibility', 'participation', 'critical', 'responsibility', 'openness'].map((value) => (
                <li key={value} className="flex items-start gap-2.5 text-sm">
                  <span className="nordic-sage-text font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {t(`about.values.${value}.title`)}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {' — '}
                      {t(`about.values.${value}.description`)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'nexthuman':
        return (
          <div className="bento-card p-8 md:p-10 space-y-4">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] text-pretty">
              {t('about.nexthuman.paragraph1')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] text-pretty">
              {t('about.nexthuman.paragraph2')}
            </p>
          </div>
        );

      case 'collaborate':
        return (
          <div className="bento-card p-8 md:p-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] mb-6 max-w-2xl text-pretty">
              {t('about.collaborate.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {['collaborative', 'research', 'workshops', 'consulting'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-[13px] text-slate-600 dark:text-slate-300"
                >
                  {t(`about.collaborate.tags.${tag}`)}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/relatronica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium text-sm"
                aria-label={t('about.collaborate.instagram')}
              >
                <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/relatronica/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium text-sm"
                aria-label={t('about.collaborate.linkedin')}
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="bento-card p-8 md:p-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] mb-7 max-w-2xl text-pretty">
              {t('about.support.description')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-7">
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <Pizza className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t('about.support.pizza.title')}
                  </p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {t('about.support.pizza.description')}
                </p>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t('about.support.membership.title')}
                  </p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {t('about.support.membership.description')}
                </p>
              </div>
            </div>
            <a
              href="https://buymeacoffee.com/relatronica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transition-all duration-200 font-medium text-sm"
              aria-label={t('about.support.cta')}
            >
              <span>{t('about.support.cta')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-14 max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] nordic-terracotta-text">
                {t('about.eyebrow')}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mt-3 mb-5 text-slate-900 dark:text-white tracking-tight">
                {t('about.title')}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
                {t('about.tagline')}
              </p>
            </FadeIn>

            {/* Mobile: indice capitoli collassabile */}
            <div className="lg:hidden mb-8">
              <button
                type="button"
                onClick={() => setIsRailOpen((prev) => !prev)}
                aria-expanded={isRailOpen}
                className="flex w-full items-center justify-between px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {t('about.chapters')}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isRailOpen ? 'rotate-180' : ''}`} />
              </button>
              {isRailOpen && <div className="mt-4">{railContent}</div>}
            </div>

            <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
              {/* Desktop: indice capitoli sticky */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">{railContent}</div>
              </aside>

              {/* Capitoli */}
              <div className="space-y-16">
                {CHAPTERS.map((chapter) => {
                  const Icon = chapter.icon;
                  return (
                    <section
                      key={chapter.key}
                      ref={(el) => {
                        sectionRefs.current[chapter.key] = el;
                      }}
                      data-chapter-key={chapter.key}
                      className="scroll-mt-32"
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <span className={`inline-flex p-2.5 rounded-xl ${chapter.bg} ${chapter.text}`}>
                          <Icon className="w-5 h-5" strokeWidth={1.75} />
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {t(`about.${chapter.key}.title`)}
                        </h2>
                      </div>
                      {renderChapter(chapter.key)}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
