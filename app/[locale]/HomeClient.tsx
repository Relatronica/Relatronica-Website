'use client';

import { DotBoard } from '@/components/DotBoard';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesBento } from '@/components/home/FeaturesBento';
import { ProjectsBento } from '@/components/home/ProjectsBento';
import { ResourceHub } from '@/components/home/ResourceHub';
import { ManifestoQuoteSection } from '@/components/home/ManifestoQuoteSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export function HomeClient() {
  // WebSite JSON-LD vive in app/layout.tsx (SSR) — evita duplicati
  return (
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
  );
}
