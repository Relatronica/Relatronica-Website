/**
 * Keyword mapping for connecting Observatory articles to NextHuman deadlines.
 * Each deadline ID maps to an array of keywords (EN + IT) that, when found
 * in an article's title or excerpt, indicate relevance to that future scenario.
 */
export const DEADLINE_KEYWORDS: Record<string, string[]> = {
  '1': [
    'arctic', 'artico', 'ghiaccio', 'ice cap', 'ice sheet', 'sea ice',
    'permafrost', 'polar', 'tipping point', 'punto di non ritorno',
  ],
  '2': [
    'AGI', 'artificial general intelligence', 'intelligenza artificiale generale',
    'superintelligence', 'superintelligenza', 'AI safety', 'sicurezza IA',
    'alignment', 'frontier model',
  ],
  '3': [
    'population peak', 'picco demografico', 'population decline', 'fertility rate',
    'tasso di natalità', 'birth rate', 'depopulation',
  ],
  '4': [
    'renewable energy', 'energie rinnovabili', 'energy transition', 'transizione energetica',
    'solar power', 'wind power', 'eolico', 'fotovoltaico', 'green energy',
  ],
  '5': [
    'coral reef', 'barriera corallina', 'marine ecosystem', 'ecosistema marino',
    'ocean acidification', 'acidificazione', 'kelp', 'ocean warming',
  ],
  '6': [
    'water crisis', 'crisi idrica', 'water scarcity', 'scarsità', 'drought',
    'siccità', 'freshwater', 'acqua dolce', 'desertification', 'desertificazione',
  ],
  '7': [
    'singularity', 'singolarità', 'technological singularity', 'superintelligent',
    'recursive self-improvement',
  ],
  '8': [
    'geopolitical shift', 'geopolitica', 'world order', 'ordine mondiale',
    'multipolar', 'global power', 'BRICS', 'new world order',
  ],
  '9': [
    'mass extinction', 'estinzione di massa', 'species loss', 'biodiversity loss',
    'sixth extinction', 'sesta estinzione',
  ],
  '10': [
    'global debt', 'debito globale', 'debt crisis', 'crisi del debito',
    'sovereign debt', 'financial crisis', 'crisi finanziaria', 'systemic risk',
  ],
  '11': [
    'overshoot day', 'earth overshoot', 'ecological footprint', 'impronta ecologica',
    'resource depletion', 'biocapacity',
  ],
  '12': [
    'longevity', 'longevità', 'life extension', 'anti-aging', 'aging reversal',
    'escape velocity', 'lifespan', 'aspettativa di vita', 'rejuvenation',
  ],
  '13': [
    'net zero', 'carbon neutral', 'neutralità climatica', 'green deal',
    'european green deal', 'EU climate', 'fit for 55',
  ],
  '14': [
    'mars mission', 'missione marte', 'mars colony', 'SpaceX', 'Starship',
    'mars landing', 'interplanetary', 'human spaceflight',
  ],
  '15': [
    'quantum computing', 'computer quantistico', 'quantum supremacy', 'qubit',
    'quantum advantage', 'quantum processor',
  ],
  '16': [
    'demographic crisis', 'crisi demografica', 'population collapse',
    'collasso demografico', 'underpopulation',
  ],
  '17': [
    'net zero 2050', 'paris agreement', 'accordo di parigi', 'climate target',
    'obiettivo climatico', '1.5 degrees', '1.5 gradi', 'carbon budget',
  ],
  '18': [
    'gulf stream', 'corrente del golfo', 'AMOC', 'thermohaline',
    'atlantic circulation', 'circolazione atlantica',
  ],
  '19': [
    'peak oil', 'fine petrolio', 'post-oil', 'fossil fuel', 'combustibili fossili',
    'oil era', 'petrolio', 'oil demand',
  ],
  '20': [
    'urbanization', 'urbanizzazione', 'megacity', 'megacittà', 'smart city',
    'città intelligente', 'urban sprawl',
  ],
  '21': [
    'artificial intelligence', 'intelligenza artificiale', 'machine learning',
    'deep learning', 'LLM', 'large language model', 'GPT', 'neural network',
    'AI regulation', 'regolamentazione IA', 'AI act', 'foundation model',
  ],
  '22': [
    'alpine glacier', 'ghiacciai alpini', 'glacier retreat', 'ritiro ghiacciai',
    'glacier melt', 'alpi', 'alps',
  ],
  '23': [
    'food crisis', 'crisi alimentare', 'food security', 'sicurezza alimentare',
    'hunger', 'fame nel mondo', 'crop failure', 'agricoltura',
  ],
  '24': [
    'nuclear fusion', 'fusione nucleare', 'ITER', 'tokamak', 'fusion energy',
    'energia da fusione', 'fusion reactor',
  ],
  '25': [
    'biodiversity', 'biodiversità', 'species extinction', 'estinzione specie',
    'wildlife', 'conservation', 'IPBES', 'living planet',
  ],
  '26': [
    'aging population', 'invecchiamento', 'elderly', 'over 65', 'pension crisis',
    'crisi pensioni', 'demographic aging', 'silver economy',
  ],
  '27': [
    'coal phase', 'fine carbone', 'coal exit', 'end of coal', 'coal plant',
    'centrale a carbone', 'coal transition',
  ],
  '28': [
    'overfishing', 'sovrapesca', 'fish stock', 'stock ittico', 'fishery collapse',
    'pesca sostenibile', 'ocean fishing',
  ],
  '29': [
    'SDG', 'sustainable development goals', 'obiettivi sviluppo sostenibile',
    'Agenda 2030', 'UN goals', 'millennium goals',
  ],
  '30': [
    'climate refugee', 'rifugiati climatici', 'climate migration', 'migrazione climatica',
    'climate displacement', 'sea level rise', 'innalzamento mare', 'climate migrant',
  ],
};

/**
 * Bridge between Observatory themes and NextHuman deadline themes.
 * Used as a secondary signal to boost matches when themes are related.
 */
export const THEME_BRIDGE: Record<string, string[]> = {
  'ai': ['tecnologia', 'scienza'],
  'ethics': ['società', 'tecnologia'],
  'policy': ['geopolitica', 'economia', 'società'],
  'digital-sovereignty': ['tecnologia', 'società', 'geopolitica'],
  'civic-tech': ['società', 'tecnologia'],
};
