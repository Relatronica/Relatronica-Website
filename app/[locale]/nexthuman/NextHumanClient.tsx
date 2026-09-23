'use client';

import { useEffect, useState } from 'react';
import { VisionaryView } from '@/components/VisionaryView';
import { DotBoard } from '@/components/DotBoard';
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

  return (
    <>
      <NextHumanIntroPanel open={introOpen} onOpenChange={setIntroOpen} />
      <DotBoard>
        <main className="pt-6 pb-20 px-6">
          <h1 className="sr-only">
            {t('nexthuman.title')} — {t('nexthuman.subtitle')}
          </h1>
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
