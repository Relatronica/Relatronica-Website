'use client';

import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useI18n } from '@/lib/i18n';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesBento } from '@/components/home/FeaturesBento';
import { ProjectsBento } from '@/components/home/ProjectsBento';
import { ResourceHub } from '@/components/home/ResourceHub';
import { ManifestoQuoteSection } from '@/components/home/ManifestoQuoteSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export function HomeClient() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Relatronica",
    "description": t('home.tagline', {
      action1: t('home.action1'),
      action2: t('home.action2'),
      action3: t('home.action3')
    }),
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Relatronica",
      "url": siteUrl
    }
  };

  return (
    <>
      <StructuredData data={homePageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <HeroSection />
            <FeaturesBento />
            <ProjectsBento />
            <ResourceHub />
            <ManifestoQuoteSection />
            <FinalCTASection />
          </div>
        </div>
      </DotBoard>
    </>
  );
}
