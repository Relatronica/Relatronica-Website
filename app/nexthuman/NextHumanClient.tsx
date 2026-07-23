'use client';

import { useEffect, useState } from 'react';
import { VisionaryView } from '@/components/VisionaryView';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { NextHumanIntroPanel } from '@/components/NextHumanIntroPanel';
import { FilterState } from '@/types/deadline';
import { useI18n } from '@/lib/i18n';

export function NextHumanClient() {
  const { t } = useI18n();
  const [filters, setFilters] = useState<FilterState>({
    themes: [],
    probabilities: [],
  });
  const [introOpen, setIntroOpen] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem('nexthuman-welcome-seen');
      if (!hasSeen) {
        const timer = setTimeout(() => setIntroOpen(true), 400);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const nextHumanPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${t('nexthuman.title')} - ${t('nexthuman.subtitle')}`,
    "description": t('projects.nexthuman.description'),
    "url": `${siteUrl}/nexthuman`,
    "applicationCategory": "DataVisualization",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "creator": {
      "@type": "Organization",
      "name": "Relatronica",
      "url": siteUrl
    }
  };

  return (
    <>
      <StructuredData data={nextHumanPageSchema} />
      <NextHumanIntroPanel open={introOpen} onOpenChange={setIntroOpen} />
      <DotBoard>
        <main className="pt-6 pb-20 px-6">
          <div className="max-w-[1920px] mx-auto">
            <VisionaryView
              filters={filters}
              onFilterChange={handleFilterChange}
              introOpen={introOpen}
              onOpenIntro={() => setIntroOpen(true)}
            />
          </div>
        </main>
      </DotBoard>
    </>
  );
}
