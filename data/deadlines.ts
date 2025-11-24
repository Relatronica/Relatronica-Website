import { Deadline } from '@/types/deadline';

export const deadlines: Deadline[] = [
  {
    id: '1',
    title: 'Punto di non ritorno per il ghiaccio artico',
    description: 'Il ghiaccio marino artico potrebbe raggiungere un punto di non ritorno, con conseguenze irreversibili per il clima globale.',
    date: new Date(2030, 5, 15),
    probability: 'high',
    probabilityValue: 75,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPCC 2023', 'Nature Climate Change'],
    triggers: ['5', '18', '30'],
    actions: [
      {
        title: 'Ridurre emissioni personali',
        description: 'Adotta uno stile di vita a basse emissioni',
        type: 'individual',
        links: [
          { label: 'Calcolatore impronta carbonica', url: 'https://www.carbonfootprint.com/calculator.aspx' }
        ]
      },
      {
        title: 'Supportare politiche climatiche',
        description: 'Vota e sostieni politici che promuovono azioni per il clima',
        type: 'collective',
        links: [
          { label: 'Climate Action Network', url: 'https://climatenetwork.org' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'AGI (Artificial General Intelligence) raggiunta',
    description: 'Possibile raggiungimento dell\'intelligenza artificiale generale, con capacità cognitive paragonabili o superiori a quelle umane.',
    date: new Date(2045, 2, 1),
    probability: 'medium',
    probabilityValue: 50,
    themes: ['tecnologia', 'scienza', 'società'],
    impact: 'global',
    category: 'transformation',
    sources: ['OpenAI Research', 'DeepMind'],
    triggers: ['7', '21'],
    relatedEvents: ['15'],
    actions: [
      {
        title: 'Educarsi sull\'IA',
        description: 'Comprendi le implicazioni dell\'IA per la società',
        type: 'individual',
        links: [
          { label: 'Future of Humanity Institute', url: 'https://www.fhi.ox.ac.uk' }
        ]
      },
      {
        title: 'Promuovere governance dell\'IA',
        description: 'Supporta regolamentazioni etiche per l\'IA',
        type: 'policy',
        links: [
          { label: 'Partnership on AI', url: 'https://partnershiponai.org' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Popolazione mondiale raggiunge il picco',
    description: 'La popolazione mondiale potrebbe raggiungere il picco massimo prima di iniziare a declinare.',
    date: new Date(2080, 0, 1),
    probability: 'high',
    probabilityValue: 80,
    themes: ['demografia', 'società'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Population Division']
  },
  {
    id: '4',
    title: 'Transizione completa alle energie rinnovabili',
    description: 'Possibile completamento della transizione energetica globale verso fonti rinnovabili.',
    date: new Date(2050, 11, 31),
    probability: 'medium',
    probabilityValue: 60,
    themes: ['energia', 'ambiente', 'clima'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA', 'IRENA'],
    relatedEvents: ['17', '19', '27'],
    actions: [
      {
        title: 'Passa a energia rinnovabile',
        description: 'Scegli un fornitore di energia rinnovabile',
        type: 'individual',
        links: []
      },
      {
        title: 'Investi in rinnovabili',
        description: 'Supporta progetti di energia pulita',
        type: 'collective',
        links: []
      }
    ]
  },
  {
    id: '5',
    title: 'Collasso di un ecosistema marino principale',
    description: 'Rischio di collasso di un ecosistema marino critico (es. barriera corallina, foreste di kelp).',
    date: new Date(2035, 7, 20),
    probability: 'high',
    probabilityValue: 70,
    themes: ['ambiente', 'clima'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPCC', 'Nature'],
    triggeredBy: ['1'],
    triggers: ['9', '25'],
    actions: [
      {
        title: 'Proteggere gli oceani',
        description: 'Supporta organizzazioni per la conservazione marina',
        type: 'collective',
        links: [
          { label: 'Ocean Conservancy', url: 'https://oceanconservancy.org' }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Crisi idrica globale',
    description: 'Possibile crisi idrica globale con oltre 4 miliardi di persone che vivono in aree con grave scarsità d\'acqua.',
    date: new Date(2040, 3, 15),
    probability: 'medium',
    probabilityValue: 55,
    themes: ['ambiente', 'società', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['UN Water', 'World Resources Institute']
  },
  {
    id: '7',
    title: 'Raggiungimento della singolarità tecnologica',
    description: 'Momento in cui il progresso tecnologico diventa così rapido da essere incomprensibile per gli esseri umani.',
    date: new Date(2045, 5, 1),
    probability: 'low',
    probabilityValue: 30,
    themes: ['tecnologia', 'scienza'],
    impact: 'global',
    category: 'transformation',
    sources: ['Ray Kurzweil', 'Future of Humanity Institute']
  },
  {
    id: '8',
    title: 'Riorganizzazione geopolitica globale',
    description: 'Possibile riorganizzazione significativa degli equilibri geopolitici mondiali.',
    date: new Date(2035, 0, 1),
    probability: 'medium',
    probabilityValue: 65,
    themes: ['geopolitica', 'economia'],
    impact: 'global',
    category: 'transformation',
    sources: ['Various think tanks']
  },
  {
    id: '9',
    title: 'Estinzione di massa delle specie',
    description: 'Rischio di accelerazione dell\'estinzione di massa delle specie, con perdita del 30-50% delle specie attuali.',
    date: new Date(2050, 0, 1),
    probability: 'high',
    probabilityValue: 70,
    themes: ['ambiente', 'clima'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPBES', 'Science'],
    triggeredBy: ['5', '1'],
    actions: [
      {
        title: 'Supporta la conservazione',
        description: 'Contribuisci a organizzazioni per la protezione della biodiversità',
        type: 'collective',
        links: [
          { label: 'WWF', url: 'https://www.wwf.it' }
        ]
      }
    ]
  },
  {
    id: '10',
    title: 'Crisi del debito globale',
    description: 'Possibile crisi sistemica del debito globale che potrebbe destabilizzare l\'economia mondiale.',
    date: new Date(2030, 8, 1),
    probability: 'medium',
    probabilityValue: 50,
    themes: ['economia', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['IMF', 'World Bank']
  },
  {
    id: '11',
    title: 'Earth Overshoot Day 2025',
    description: 'Giorno in cui l\'umanità ha consumato tutte le risorse che la Terra può rigenerare in un anno. Questa data arriva sempre prima ogni anno.',
    date: new Date(2025, 6, 24),
    probability: 'very-high',
    probabilityValue: 95,
    themes: ['ambiente', 'clima', 'società'],
    impact: 'global',
    category: 'milestone',
    sources: ['Global Footprint Network']
  },
  {
    id: '12',
    title: 'Raggiungimento della Longevity Escape Velocity',
    description: 'Secondo Ray Kurzweil, raggiungeremo la capacità di guadagnare più di un anno di aspettativa di vita per ogni anno vissuto, grazie ai progressi in medicina e IA.',
    date: new Date(2032, 0, 1),
    probability: 'medium',
    probabilityValue: 45,
    themes: ['scienza', 'salute', 'tecnologia'],
    impact: 'global',
    category: 'transformation',
    sources: ['Ray Kurzweil', 'Singularity University']
  },
  {
    id: '13',
    title: 'Obiettivo Net Zero 2030 (UE)',
    description: 'L\'Unione Europea punta a raggiungere la neutralità climatica entro il 2030, riducendo le emissioni del 55% rispetto ai livelli del 1990.',
    date: new Date(2030, 11, 31),
    probability: 'medium',
    probabilityValue: 40,
    themes: ['clima', 'energia', 'ambiente'],
    impact: 'regional',
    category: 'milestone',
    sources: ['European Green Deal', 'EU Commission']
  },
  {
    id: '14',
    title: 'Prima missione umana su Marte',
    description: 'Possibile lancio della prima missione umana su Marte, segnando l\'inizio dell\'espansione dell\'umanità oltre la Terra.',
    date: new Date(2035, 5, 1),
    probability: 'medium',
    probabilityValue: 60,
    themes: ['scienza', 'tecnologia'],
    impact: 'global',
    category: 'milestone',
    sources: ['NASA', 'SpaceX', 'ESA']
  },
  {
    id: '15',
    title: 'Quantum Supremacy per problemi pratici',
    description: 'I computer quantistici potrebbero risolvere problemi pratici impossibili per i computer classici, rivoluzionando crittografia, farmaceutica e finanza.',
    date: new Date(2030, 2, 15),
    probability: 'medium',
    probabilityValue: 55,
    themes: ['tecnologia', 'scienza'],
    impact: 'global',
    category: 'transformation',
    sources: ['IBM Quantum', 'Google Quantum AI']
  },
  {
    id: '16',
    title: 'Crisi demografica potenziale',
    description: 'Secondo alcuni modelli, potrebbe verificarsi una crisi demografica globale se dovesse verificarsi una crisi ecologica che influenzi le risorse disponibili.',
    date: new Date(2026, 10, 13),
    probability: 'low',
    probabilityValue: 25,
    themes: ['demografia', 'società', 'ambiente'],
    impact: 'global',
    category: 'threshold',
    sources: ['Heinz von Foerster models', 'Demographic research']
  },
  {
    id: '17',
    title: 'Obiettivo Net Zero globale 2050',
    description: 'Obiettivo globale per raggiungere emissioni nette zero di gas serra, cruciale per limitare il riscaldamento globale a 1.5°C.',
    date: new Date(2050, 11, 31),
    probability: 'medium',
    probabilityValue: 50,
    themes: ['clima', 'energia', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['IPCC', 'UNFCCC', 'Accordo di Parigi']
  },
  {
    id: '18',
    title: 'Collasso della Corrente del Golfo',
    description: 'Rischio di rallentamento o collasso della Corrente del Golfo, che potrebbe causare cambiamenti climatici drastici in Europa e Nord America.',
    date: new Date(2040, 0, 1),
    probability: 'low',
    probabilityValue: 35,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['Nature', 'IPCC', 'Oceanographic studies'],
    triggeredBy: ['1'],
    triggers: ['30'],
    relatedEvents: ['5']
  },
  {
    id: '19',
    title: 'Fine dell\'era del petrolio',
    description: 'Possibile fine dell\'era del petrolio come principale fonte energetica, con transizione completa a energie alternative.',
    date: new Date(2045, 5, 1),
    probability: 'medium',
    probabilityValue: 65,
    themes: ['energia', 'economia', 'ambiente'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA', 'BP Energy Outlook']
  },
  {
    id: '20',
    title: 'Urbanizzazione globale al 70%',
    description: 'Il 70% della popolazione mondiale vivrà in aree urbane, con conseguenze significative per infrastrutture, risorse e società.',
    date: new Date(2050, 0, 1),
    probability: 'high',
    probabilityValue: 85,
    themes: ['demografia', 'società', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Habitat', 'World Bank']
  },
  {
    id: '21',
    title: 'Raggiungimento dell\'IA a livello umano',
    description: 'Secondo sondaggi tra esperti, probabilità del 50% che l\'IA raggiunga capacità paragonabili a quelle umane in questo periodo.',
    date: new Date(2045, 0, 1),
    probability: 'medium',
    probabilityValue: 50,
    themes: ['tecnologia', 'scienza', 'società'],
    impact: 'global',
    category: 'transformation',
    sources: ['AI Research surveys', 'arXiv studies']
  },
  {
    id: '22',
    title: 'Scomparsa dei ghiacciai alpini',
    description: 'I ghiacciai delle Alpi potrebbero scomparire completamente, con impatti devastanti sull\'approvvigionamento idrico europeo.',
    date: new Date(2050, 7, 1),
    probability: 'high',
    probabilityValue: 80,
    themes: ['clima', 'ambiente'],
    impact: 'regional',
    category: 'tipping-point',
    sources: ['European Geosciences Union', 'Nature Climate Change']
  },
  {
    id: '23',
    title: 'Crisi alimentare globale',
    description: 'Possibile crisi alimentare globale dovuta a cambiamenti climatici, scarsità d\'acqua e crescita demografica.',
    date: new Date(2040, 2, 1),
    probability: 'medium',
    probabilityValue: 55,
    themes: ['società', 'ambiente', 'economia'],
    impact: 'global',
    category: 'threshold',
    sources: ['FAO', 'World Food Programme']
  },
  {
    id: '24',
    title: 'Fusione nucleare commerciale',
    description: 'Possibile raggiungimento della fusione nucleare commercialmente sostenibile, fornendo energia pulita e illimitata.',
    date: new Date(2040, 11, 31),
    probability: 'low',
    probabilityValue: 40,
    themes: ['energia', 'scienza', 'tecnologia'],
    impact: 'global',
    category: 'transformation',
    sources: ['ITER', 'MIT Plasma Science']
  },
  {
    id: '25',
    title: 'Riduzione del 50% della biodiversità',
    description: 'Rischio di perdita del 50% delle specie attuali se non verranno prese misure drastiche per la conservazione.',
    date: new Date(2050, 0, 1),
    probability: 'high',
    probabilityValue: 70,
    themes: ['ambiente', 'clima'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPBES', 'WWF Living Planet Report']
  },
  {
    id: '26',
    title: 'Invecchiamento globale della popolazione',
    description: 'Per la prima volta nella storia, gli over-65 supereranno i bambini sotto i 5 anni, con profonde implicazioni sociali ed economiche.',
    date: new Date(2030, 0, 1),
    probability: 'very-high',
    probabilityValue: 90,
    themes: ['demografia', 'società', 'economia'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Population Division', 'World Health Organization']
  },
  {
    id: '27',
    title: 'Fine dell\'era del carbone',
    description: 'Possibile fine dell\'uso del carbone come fonte energetica principale, segnando una svolta storica nella transizione energetica.',
    date: new Date(2035, 11, 31),
    probability: 'medium',
    probabilityValue: 60,
    themes: ['energia', 'ambiente', 'clima'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA', 'Coal Transition']
  },
  {
    id: '28',
    title: 'Collasso della pesca globale',
    description: 'Rischio di collasso degli stock ittici globali se non verranno implementate pratiche di pesca sostenibili.',
    date: new Date(2045, 5, 1),
    probability: 'medium',
    probabilityValue: 50,
    themes: ['ambiente', 'società', 'economia'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['FAO Fisheries', 'Marine Stewardship Council']
  },
  {
    id: '29',
    title: 'Raggiungimento degli SDG 2030',
    description: 'Scadenza per il raggiungimento degli Obiettivi di Sviluppo Sostenibile delle Nazioni Unite, inclusi povertà zero, istruzione di qualità e azione per il clima.',
    date: new Date(2030, 11, 31),
    probability: 'low',
    probabilityValue: 30,
    themes: ['società', 'economia', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Sustainable Development Goals']
  },
  {
    id: '30',
    title: 'Crisi dei rifugiati climatici',
    description: 'Possibile crisi globale con centinaia di milioni di rifugiati climatici costretti a migrare a causa di eventi estremi e innalzamento del mare.',
    date: new Date(2040, 0, 1),
    probability: 'high',
    probabilityValue: 75,
    themes: ['clima', 'società', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['UNHCR', 'Internal Displacement Monitoring Centre'],
    triggeredBy: ['1', '18', '6'],
    triggers: ['8'],
    actions: [
      {
        title: 'Supporta organizzazioni per rifugiati',
        description: 'Contribuisci a organizzazioni che aiutano i rifugiati climatici',
        type: 'collective',
        links: [
          { label: 'UNHCR', url: 'https://www.unhcr.org' }
        ]
      },
      {
        title: 'Promuovi politiche di accoglienza',
        description: 'Sostieni politiche che affrontano la migrazione climatica',
        type: 'policy',
        links: []
      }
    ]
  }
];

