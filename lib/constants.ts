/**
 * Etichette in italiano per i temi
 */
export const THEME_LABELS: Record<string, string> = {
  clima: 'Clima & Pianeta',
  ambiente: 'Ecosistemi',
  tecnologia: 'Tecnologia & IA',
  energia: 'Energia e Rinnovo',
  società: 'Società',
  demografia: 'Popolazioni',
  scienza: 'Ricerca e Space',
  economia: 'Economia Globale',
  salute: 'Salute & Longevità',
  geopolitica: 'Geo-dinamiche',
};

/**
 * Configurazione delle colonne del board
 */
export const BOARD_COLUMNS = [
  {
    id: 'climate',
    title: 'Climate & Environment',
    description: 'Punti di non ritorno climatici e crisi ambientali globali.',
    themes: ['clima', 'ambiente'] as const,
    accent: '#0ea5e9',
  },
  {
    id: 'energy',
    title: 'Energy & Resources',
    description: 'Transizione energetica e gestione delle risorse naturali.',
    themes: ['energia'] as const,
    accent: '#10b981',
  },
  {
    id: 'technology',
    title: 'Technology & Science',
    description: 'IA, ricerca scientifica e innovazioni tecnologiche disruptive.',
    themes: ['tecnologia', 'scienza'] as const,
    accent: '#6366f1',
  },
  {
    id: 'society',
    title: 'Society & Demographics',
    description: 'Trasformazioni sociali, demografiche e aspetti della salute.',
    themes: ['società', 'demografia', 'salute'] as const,
    accent: '#ec4899',
  },
  {
    id: 'governance',
    title: 'Economy & Geopolitics',
    description: 'Economia globale, geopolitica e governance del cambiamento.',
    themes: ['economia', 'geopolitica'] as const,
    accent: '#f97316',
  },
] as const;

/**
 * Modalità del board
 */
export const BOARD_MODES = [
  { id: 'strategia', label: 'Strategia', description: 'Vista sintetica' },
  { id: 'cluster', label: 'Cluster', description: 'Temi correlati' },
  { id: 'timeline', label: 'Timeline', description: 'Sequenza temporale' },
] as const;

export type WhiteboardMode = (typeof BOARD_MODES)[number]['id'];

/**
 * Layout per modalità del board
 */
export const BOARD_LAYOUT: Record<WhiteboardMode, { columns: number; spacingX: number; spacingY: number }> = {
  strategia: { columns: 4, spacingX: 260, spacingY: 210 },
  cluster: { columns: 3, spacingX: 320, spacingY: 230 },
  timeline: { columns: 5, spacingX: 220, spacingY: 170 },
};

