import { Deadline } from '@/types/deadline';

export type ScenarioType = 'optimistic' | 'realistic' | 'pessimistic';

export interface EnhancedDeadline extends Deadline {
  adjustedProbability: number;
  probabilityChange?: number;
}

/**
 * Calcola la probabilità aggiustata in base allo scenario
 */
export function adjustProbabilityForScenario(
  baseProbability: number,
  scenario: ScenarioType
): number {
  switch (scenario) {
    case 'optimistic':
      return Math.max(0, baseProbability - 20);
    case 'pessimistic':
      return Math.min(100, baseProbability + 20);
    case 'realistic':
    default:
      return baseProbability;
  }
}

/**
 * Applica lo scenario ai deadline e calcola le probabilità aggiustate
 */
export function applyScenarioToDeadlines(
  deadlines: Deadline[],
  scenario: ScenarioType,
  customProbabilities?: Record<string, number>
): EnhancedDeadline[] {
  return deadlines.map(deadline => {
    let adjustedProbability = adjustProbabilityForScenario(
      deadline.probabilityValue,
      scenario
    );

    // Applica modifiche custom se presenti
    if (customProbabilities && customProbabilities[deadline.id] !== undefined) {
      adjustedProbability = customProbabilities[deadline.id];
    }

    return {
      ...deadline,
      adjustedProbability,
      probabilityChange: adjustedProbability - deadline.probabilityValue,
    };
  });
}

