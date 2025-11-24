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

export interface Deadline {
  id: string;
  title: string;
  description: string;
  date: Date;
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

