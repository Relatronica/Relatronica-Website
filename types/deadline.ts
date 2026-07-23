export type Theme = 
  | 'clima'
  | 'tecnologia'
  | 'demografia'
  | 'geopolitica'
  | 'economia'
  | 'società'
  | 'scienza'
  | 'ambiente'
  | 'energia'
  | 'salute';

export type Probability = 'low' | 'medium' | 'high' | 'very-high';

export type DeadlinePrecision = 'day' | 'year' | 'window';

export type DeadlineNature =
  | 'policy-milestone'
  | 'scientific-projection'
  | 'speculative-scenario';

export interface Deadline {
  id: string;
  title: string;
  description: string;
  /** Anchor date: exact day, or start of a year/window */
  date: Date;
  /** End of temporal window when precision is 'window' */
  horizonEnd?: Date;
  precision?: DeadlinePrecision;
  nature?: DeadlineNature;
  /** Recurring annual markers (e.g. Earth Overshoot Day) */
  recurring?: 'annual';
  probability: Probability;
  probabilityValue: number; // 0-100
  themes: Theme[];
  sources?: string[];
  impact?: 'local' | 'regional' | 'global';
  category?: 'milestone' | 'threshold' | 'tipping-point' | 'transformation';
  relatedEvents?: string[]; // IDs of related deadlines
  triggers?: string[]; // IDs of events this one triggers
  triggeredBy?: string[]; // IDs of events that trigger this one
  actions?: Action[];
}

export interface Action {
  title: string;
  description: string;
  type: 'individual' | 'collective' | 'policy' | 'research';
  links?: {
    label: string;
    url: string;
  }[];
}

export interface FilterState {
  themes: Theme[];
  probabilities: Probability[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}
