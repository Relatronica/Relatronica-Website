import { Deadline, FilterState } from '@/types/deadline';
import { horizonsOverlapRange } from '@/lib/deadlineHorizon';

/**
 * Filtra i deadline in base ai filtri selezionati (temi, probabilità e anno/dateRange)
 */
export function filterDeadlines(deadlines: Deadline[], filters: FilterState): Deadline[] {
  return deadlines.filter(deadline => {
    if (filters.themes.length > 0) {
      const hasMatchingTheme = deadline.themes.some(theme =>
        filters.themes.includes(theme)
      );
      if (!hasMatchingTheme) return false;
    }

    if (filters.probabilities.length > 0) {
      if (!filters.probabilities.includes(deadline.probability)) return false;
    }

    if (filters.dateRange) {
      if (!horizonsOverlapRange(deadline, filters.dateRange.start, filters.dateRange.end)) {
        return false;
      }
    }

    return true;
  });
}
