'use client';

import { useState } from 'react';
import { VisionaryView } from '@/components/VisionaryView';
import { DotBoard } from '@/components/DotBoard';
import { FilterState } from '@/types/deadline';

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    themes: [],
    probabilities: [],
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <DotBoard>
      {/* Main Workspace */}
      <main className="pt-6 pb-20 px-6">
        <div className="max-w-[1920px] mx-auto">
          <VisionaryView filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </main>
    </DotBoard>
  );
}

