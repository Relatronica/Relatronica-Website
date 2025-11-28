'use client';

import { useState } from 'react';
import { VisionaryView } from '@/components/VisionaryView';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { NextHumanModal } from '@/components/NextHumanModal';
import { FilterState } from '@/types/deadline';

export function NextHumanClient() {
  const [filters, setFilters] = useState<FilterState>({
    themes: [],
    probabilities: [],
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const nextHumanPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NextHuman - Calendario delle Scadenze per l'Umanità",
    "description": "Una piattaforma interattiva che visualizza le scadenze probabilistiche che attendono l'umanità, combinando knowledge mapping, scenari speculativi e visualizzazioni temporali.",
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
      <NextHumanModal />
      <DotBoard>
      {/* Main Workspace */}
      <main className="pt-6 pb-20 px-6">
        <div className="max-w-[1920px] mx-auto">
          <VisionaryView filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </main>
    </DotBoard>
    </>
  );
}

