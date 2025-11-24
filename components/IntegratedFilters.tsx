'use client';

import { FilterState, Theme, Probability } from '@/types/deadline';
import { X } from 'lucide-react';
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

interface IntegratedFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function IntegratedFilters({ filters, onFilterChange }: IntegratedFiltersProps) {
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

  return (
    <div className="apple-card rounded-2xl p-4">
      <div className="flex items-start gap-6">
        {/* Themes Section */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-gray-600">Temi</label>
            {filters.themes.length > 0 && (
              <button
                onClick={() => onFilterChange({ ...filters, themes: [] })}
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allThemes.map(theme => (
              <button
                key={theme}
                onClick={() => toggleTheme(theme)}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-medium transition-all',
                  filters.themes.includes(theme)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-full bg-gray-200" />

        {/* Probabilities Section */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-gray-600">Probabilità</label>
            {filters.probabilities.length > 0 && (
              <button
                onClick={() => onFilterChange({ ...filters, probabilities: [] })}
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allProbabilities.map(probability => (
              <button
                key={probability}
                onClick={() => toggleProbability(probability)}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-xs font-medium transition-all',
                  filters.probabilities.includes(probability)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {probabilityLabels[probability]}
              </button>
            ))}
          </div>
        </div>

        {/* Clear All */}
        {hasActiveFilters && (
          <>
            <div className="w-px h-full bg-gray-200" />
            <div className="flex items-center">
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Pulisci tutto
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

