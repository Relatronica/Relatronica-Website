'use client';

import { useState } from 'react';
import { FilterState, Theme, Probability } from '@/types/deadline';
import { X, Filter, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const allThemes: Theme[] = [
  'clima',
  'tecnologia',
  'demografia',
  'geopolitica',
  'economia',
  'società',
  'scienza',
  'ambiente',
  'energia',
  'salute',
];

const allProbabilities: Probability[] = ['low', 'medium', 'high', 'very-high'];

const probabilityLabels: Record<Probability, string> = {
  low: 'Bassa',
  medium: 'Media',
  high: 'Alta',
  'very-high': 'Molto Alta',
};

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function FilterPanel({ filters, onFilterChange, isOpen, onToggle }: FilterPanelProps) {
  const toggleTheme = (theme: Theme) => {
    const newThemes = filters.themes.includes(theme)
      ? filters.themes.filter(t => t !== theme)
      : [...filters.themes, theme];
    onFilterChange({ ...filters, themes: newThemes });
  };

  const toggleProbability = (probability: Probability) => {
    const newProbabilities = filters.probabilities.includes(probability)
      ? filters.probabilities.filter(p => p !== probability)
      : [...filters.probabilities, probability];
    onFilterChange({ ...filters, probabilities: newProbabilities });
  };

  const clearFilters = () => {
    onFilterChange({ themes: [], probabilities: [] });
  };

  const hasActiveFilters = filters.themes.length > 0 || filters.probabilities.length > 0;
  const activeFiltersCount = filters.themes.length + filters.probabilities.length;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="apple-card dark:apple-card-dark rounded-full p-4 hover:scale-105 transition-transform relative"
      >
        <Filter className="w-6 h-6 text-black dark:text-white" />
        {activeFiltersCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 max-h-[70vh] overflow-y-auto apple-card dark:apple-card-dark rounded-2xl p-6 transition-all duration-300 ease-out">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl -m-6 p-6 pb-4 border-b border-black/5 dark:border-white/10">
            <h2 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtri
            </h2>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  <X className="w-3 h-3" />
                  Pulisci
                </button>
              )}
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <ChevronUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Temi
              </h3>
              <div className="flex flex-wrap gap-2">
                {allThemes.map(theme => (
                  <button
                    key={theme}
                    onClick={() => toggleTheme(theme)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                      filters.themes.includes(theme)
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                    )}
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Probabilità
              </h3>
              <div className="flex flex-wrap gap-2">
                {allProbabilities.map(probability => (
                  <button
                    key={probability}
                    onClick={() => toggleProbability(probability)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-medium transition-all border',
                      filters.probabilities.includes(probability)
                        ? getProbabilityButtonStyle(probability, true)
                        : getProbabilityButtonStyle(probability, false)
                    )}
                  >
                    {probabilityLabels[probability]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getProbabilityButtonStyle(probability: Probability, active: boolean): string {
  if (active) {
    switch (probability) {
      case 'low':
        return 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white';
      case 'medium':
        return 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white';
      case 'high':
        return 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white';
      case 'very-high':
        return 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white';
    }
  } else {
    return 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800';
  }
}

