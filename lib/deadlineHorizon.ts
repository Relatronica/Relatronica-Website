import { format } from 'date-fns';
import { it, enUS } from 'date-fns/locale';
import type { Deadline, DeadlineNature, DeadlinePrecision } from '@/types/deadline';

export function getHorizonStart(deadline: Pick<Deadline, 'date'>): Date {
  return new Date(deadline.date);
}

export function getHorizonEnd(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>
): Date {
  if (deadline.horizonEnd) return new Date(deadline.horizonEnd);
  const start = getHorizonStart(deadline);
  const precision: DeadlinePrecision = deadline.precision ?? 'day';
  if (precision === 'year') {
    return new Date(start.getFullYear(), 11, 31);
  }
  return start;
}

export function getHorizonMidpoint(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>
): Date {
  const start = getHorizonStart(deadline).getTime();
  const end = getHorizonEnd(deadline).getTime();
  return new Date(start + (end - start) / 2);
}

export function isDeadlinePast(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision' | 'recurring'>
): boolean {
  if (deadline.recurring === 'annual') return false;
  return getHorizonEnd(deadline) < new Date();
}

export function deadlineTouchesYear(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>,
  year: number
): boolean {
  const startYear = getHorizonStart(deadline).getFullYear();
  const endYear = getHorizonEnd(deadline).getFullYear();
  return year >= startYear && year <= endYear;
}

export function getYearsTouched(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>
): number[] {
  const startYear = getHorizonStart(deadline).getFullYear();
  const endYear = getHorizonEnd(deadline).getFullYear();
  const years: number[] = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
}

export function horizonsOverlapRange(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>,
  rangeStart: Date,
  rangeEnd: Date
): boolean {
  const start = getHorizonStart(deadline);
  const end = getHorizonEnd(deadline);
  return start <= rangeEnd && end >= rangeStart;
}

export function formatDeadlineHorizon(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>,
  locale: string = 'it'
): string {
  const dateLocale = locale === 'en' ? enUS : it;
  const precision: DeadlinePrecision = deadline.precision
    ?? (deadline.horizonEnd ? 'window' : 'day');
  const start = getHorizonStart(deadline);

  if (precision === 'day') {
    return format(start, 'd MMMM yyyy', { locale: dateLocale });
  }

  if (precision === 'year') {
    return String(start.getFullYear());
  }

  const end = getHorizonEnd(deadline);
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  if (startYear === endYear) return String(startYear);
  return `${startYear}–${endYear}`;
}

export function formatDeadlineHorizonShort(
  deadline: Pick<Deadline, 'date' | 'horizonEnd' | 'precision'>,
  locale: string = 'it'
): string {
  const dateLocale = locale === 'en' ? enUS : it;
  const precision: DeadlinePrecision = deadline.precision
    ?? (deadline.horizonEnd ? 'window' : 'day');
  const start = getHorizonStart(deadline);

  if (precision === 'day') {
    return format(start, 'dd MMM yyyy', { locale: dateLocale });
  }

  if (precision === 'year') {
    return String(start.getFullYear());
  }

  const end = getHorizonEnd(deadline);
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  if (startYear === endYear) return String(startYear);
  return `${startYear}–${endYear}`;
}

export function natureLabelKey(nature: DeadlineNature): string {
  switch (nature) {
    case 'policy-milestone':
      return 'deadlines.card.natureLabels.policyMilestone';
    case 'scientific-projection':
      return 'deadlines.card.natureLabels.scientificProjection';
    case 'speculative-scenario':
      return 'deadlines.card.natureLabels.speculativeScenario';
  }
}
