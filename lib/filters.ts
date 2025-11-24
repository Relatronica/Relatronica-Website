import { Deadline, FilterState } from '@/types/deadline';

/**
 * Filtra i deadline in base ai filtri selezionati (temi, probabilità e anno/dateRange)
 */
export function filterDeadlines(deadlines: Deadline[], filters: FilterState): Deadline[] {
  return deadlines.filter(deadline => {
    // Filtra per temi
    if (filters.themes.length > 0) {
      const hasMatchingTheme = deadline.themes.some(theme => 
        filters.themes.includes(theme)
      );
      if (!hasMatchingTheme) return false;
    }

    // Filtra per probabilità
    if (filters.probabilities.length > 0) {
      if (!filters.probabilities.includes(deadline.probability)) return false;
    }

    // Filtra per dateRange (anno)
    if (filters.dateRange) {
      const deadlineDate = deadline.date;
      if (deadlineDate < filters.dateRange.start || deadlineDate > filters.dateRange.end) {
        return false;
      }
    }

    return true;
  });
}

