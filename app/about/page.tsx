'use client';

import { Sparkles, Users, Network, Lightbulb, Target, Globe, Info, Shield, Heart, Zap, BookOpen, Code2, Instagram, Linkedin, HandHeart, ExternalLink } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
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
      <strong className="font-semibold text-slate-900">{term}</strong>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="ml-1.5 inline-flex items-center justify-center cursor-help"
        aria-label={ariaLabel}
      >
        <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors" />
        {isHovered && (
          <div className="absolute left-0 bottom-full mb-2 z-50 w-72 p-4 rounded-lg bg-slate-900 text-white text-xs leading-relaxed shadow-2xl pointer-events-none animate-in fade-in duration-200">
            {definition}
            <div className="absolute -bottom-1 left-5 w-2 h-2 bg-slate-900 rotate-45" />
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
    "description": "Relatronica è uno studio di progettazione nato in Svizzera nel 2024 da un team di designer e ricercatori che si sono incontrati al CERN. Unisce speculative design, civic tech e knowledge mapping per esplorare scenari futuri e potenziare la partecipazione civica.",
    "url": `${siteUrl}/about`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Relatronica",
      "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli, ispirandoci allo spirito collaborativo del CERN e alle origini del World Wide Web. Attivismo per tecnologie responsabili e partecipazione civica.",
      "sameAs": [
        "https://www.instagram.com/relatronica",
        "https://www.linkedin.com/company/relatronica/"
      ],
      "knowsAbout": [
        "Speculative Design",
        "Civic Tech",
        "Knowledge Mapping",
        "Data Visualization",
        "Future Scenarios",
        "Responsible Technology",
        "Technology Activism",
        "Ethical Design"
      ]
    }
  };

  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-6xl font-bold mb-6 text-slate-900">{t('about.title')}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('about.tagline')}
            </p>
          </div>

        <div className="space-y-10">
          {/* Mission Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-blue-50 flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.mission.title')}</h2>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  {t('about.mission.description', {
                    speculativeDesign: t('about.mission.speculativeDesign'),
                    civicTech: t('about.mission.civicTech'),
                    knowledgeMapping: t('about.mission.knowledgeMapping')
                  }).split(/(\{speculativeDesign\}|\{civicTech\}|\{knowledgeMapping\})/).map((part, i) => {
                    if (part === '{speculativeDesign}') {
                      return <InfoTooltip key={i} term={t('about.mission.speculativeDesign')} definition={t('about.mission.speculativeDesignTooltip')} ariaLabel={`${t('about.mission.speculativeDesign')} definition`} />;
                    }
                    if (part === '{civicTech}') {
                      return <InfoTooltip key={i} term={t('about.mission.civicTech')} definition={t('about.mission.civicTechTooltip')} ariaLabel={`${t('about.mission.civicTech')} definition`} />;
                    }
                    if (part === '{knowledgeMapping}') {
                      return <InfoTooltip key={i} term={t('about.mission.knowledgeMapping')} definition={t('about.mission.knowledgeMappingTooltip')} ariaLabel={`${t('about.mission.knowledgeMapping')} definition`} />;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </p>
              </div>
            </div>
          </section>

          {/* Origins & Web Heritage Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-sky-50 flex-shrink-0">
                <Globe className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.origins.title')}</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  {t('about.origins.paragraph1')}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  {t('about.origins.paragraph2')}
                </p>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  {t('about.origins.paragraph3')}
                </p>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-purple-50 w-fit mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">{t('about.pillars.speculativeDesign.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.pillars.speculativeDesign.description')}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-green-50 w-fit mb-4">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">{t('about.pillars.civicTech.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.pillars.civicTech.description')}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-orange-50 w-fit mb-4">
                <Network className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">{t('about.pillars.knowledgeMapping.title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.pillars.knowledgeMapping.description')}
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-indigo-50 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.approach.title')}</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  {t('about.approach.intro')}
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">{t('about.approach.points.critical')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">{t('about.approach.points.accessible')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">{t('about.approach.points.participation')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">{t('about.approach.points.ethics')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Activism Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-emerald-50 flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.activism.title')}</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  {t('about.activism.intro')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-500" />
                      {t('about.activism.ethics.title')}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('about.activism.ethics.description')}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      {t('about.activism.transparency.title')}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('about.activism.transparency.description')}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      {t('about.activism.education.title')}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('about.activism.education.description')}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-500" />
                      {t('about.activism.sustainability.title')}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('about.activism.sustainability.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-violet-50 flex-shrink-0">
                <Heart className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.values.title')}</h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
                  {t('about.values.intro')}
                </p>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">{t('about.values.accessibility.title')}</span>
                      <span className="text-[15px]"> - {t('about.values.accessibility.description')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">{t('about.values.participation.title')}</span>
                      <span className="text-[15px]"> - {t('about.values.participation.description')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">{t('about.values.critical.title')}</span>
                      <span className="text-[15px]"> - {t('about.values.critical.description')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">{t('about.values.responsibility.title')}</span>
                      <span className="text-[15px]"> - {t('about.values.responsibility.description')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">{t('about.values.openness.title')}</span>
                      <span className="text-[15px]"> - {t('about.values.openness.description')}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* NextHuman Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-rose-50 flex-shrink-0">
                <Globe className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">{t('about.nexthuman.title')}</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  {t('about.nexthuman.paragraph1')}
                </p>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  {t('about.nexthuman.paragraph2')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact/Engagement Section */}
          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{t('about.collaborate.title')}</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
                {t('about.collaborate.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  {t('about.collaborate.tags.collaborative')}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  {t('about.collaborate.tags.research')}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  {t('about.collaborate.tags.workshops')}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  {t('about.collaborate.tags.consulting')}
                </span>
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.instagram.com/relatronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                  aria-label={t('about.collaborate.instagram')}
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/relatronica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                  aria-label={t('about.collaborate.linkedin')}
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <div className="p-3 rounded-xl bg-white/60 w-fit mx-auto mb-5">
                <HandHeart className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{t('about.support.title')}</h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-[15px]">
                {t('about.support.description')}
              </p>
              <p className="text-slate-700 leading-relaxed mb-8 text-[15px]">
                {t('about.support.impact')}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/70 border border-slate-200/60">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{t('about.support.tiers.observer.name')}</p>
                  <p className="text-slate-500 text-xs">{t('about.support.tiers.observer.description')}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/70 border border-slate-200/60">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{t('about.support.tiers.explorer.name')}</p>
                  <p className="text-slate-500 text-xs">{t('about.support.tiers.explorer.description')}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/70 border border-slate-200/60">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{t('about.support.tiers.architect.name')}</p>
                  <p className="text-slate-500 text-xs">{t('about.support.tiers.architect.description')}</p>
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
          </section>
        </div>
        </div>
      </div>
    </DotBoard>
    </>
  );
}

