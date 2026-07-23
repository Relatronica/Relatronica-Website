import { Deadline } from '@/types/deadline';

export const deadlines: Deadline[] = [
  {
    id: '1',
    title: 'Prima estate artica quasi senza ghiaccio',
    description:
      'Il ghiaccio marino artico in settembre potrebbe scendere sotto 1 milione di km² (praticamente ice-free). Non è un tipping point irreversibile classico: può ripetersi con frequenza crescente a seconda delle emissioni.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 70,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'threshold',
    sources: ['IPCC AR6', 'Nature Reviews Earth & Environment 2023', 'Nature Communications 2023'],
    triggers: ['5', '18', '30', '35'],
    relatedEvents: ['32'],
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
    title: 'AGI / IA a livello umano',
    description:
      'Probabilità intorno al 50% che sistemi di IA raggiungano capacità paragonabili a quelle umane su un ampio spettro di compiti cognitivi. Le stime degli esperti e dei mercati predittivi si sono spostate verso il 2030–2035 rispetto alle timeline più lunghe degli anni precedenti.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'medium',
    probabilityValue: 50,
    themes: ['tecnologia', 'scienza', 'società'],
    impact: 'global',
    category: 'transformation',
    sources: ['Metaculus 2026', 'AI Impacts / ESPAI surveys', '80,000 Hours AGI timeline review'],
    triggers: ['7'],
    relatedEvents: ['15', '33'],
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
    description:
      'Secondo le World Population Prospects 2024 delle Nazioni Unite, la popolazione mondiale dovrebbe raggiungere un picco di circa 10,3 miliardi intorno alla metà degli anni 2080, prima di iniziare a declinare gradualmente.',
    date: new Date(2084, 0, 1),
    precision: 'year',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 80,
    themes: ['demografia', 'società'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN World Population Prospects 2024']
  },
  {
    id: '4',
    title: 'Transizione avanzata alle energie rinnovabili',
    description:
      'Possibile completamento di una transizione energetica globale in cui le rinnovabili dominano il mix elettrico e i fossili entrano in declino strutturale della domanda. Gli outlook IEA indicano progressi rapidi ma ancora insufficienti per Net Zero 2050 senza accelerazioni politiche.',
    date: new Date(2045, 0, 1),
    horizonEnd: new Date(2055, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 55,
    themes: ['energia', 'ambiente', 'clima'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA World Energy Outlook', 'IRENA'],
    relatedEvents: ['17', '19', '27', '36'],
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
    description:
      'Rischio di collasso funzionale di un ecosistema marino critico (barriera corallina, foreste di kelp o sistemi costieri chiave), con effetti a cascata su pesca, turismo e biodiversità.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2040, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 70,
    themes: ['ambiente', 'clima'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPCC AR6', 'IPBES', 'Nature'],
    triggeredBy: ['1', '32'],
    triggers: ['9', '28'],
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
    description:
      'Possibile crisi idrica globale con miliardi di persone che vivono in aree con scarsità d\'acqua grave o cronica, aggravata da siccità, agricoltura intensiva e stress climatico.',
    date: new Date(2035, 0, 1),
    horizonEnd: new Date(2045, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 55,
    themes: ['ambiente', 'società', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['UN Water', 'World Resources Institute Aqueduct'],
    relatedEvents: ['23', '30']
  },
  {
    id: '7',
    title: 'Raggiungimento della singolarità tecnologica',
    description:
      'Scenario speculativo in cui il progresso tecnologico (guidato da IA ricorsivamente migliorata) diventa così rapido da risultare difficilmente comprensibile o governabile per le istituzioni umane.',
    date: new Date(2045, 0, 1),
    horizonEnd: new Date(2060, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'low',
    probabilityValue: 25,
    themes: ['tecnologia', 'scienza'],
    impact: 'global',
    category: 'transformation',
    sources: ['Ray Kurzweil', 'AI Futures Project'],
    triggeredBy: ['2']
  },
  {
    id: '8',
    title: 'Riorganizzazione geopolitica globale',
    description:
      'Possibile riorganizzazione significativa degli equilibri geopolitici mondiali, con nuovi blocchi di potere, rivalità tecnologiche e ridefinizione di alleanze e istituzioni internazionali.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2040, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'medium',
    probabilityValue: 60,
    themes: ['geopolitica', 'economia'],
    impact: 'global',
    category: 'transformation',
    sources: ['ECFR', 'Brookings', 'Chatham House'],
    triggeredBy: ['30']
  },
  {
    id: '9',
    title: 'Perdita grave di biodiversità globale',
    description:
      'Rischio di accelerazione della sesta estinzione di massa, con perdita sostanziale (fino a circa il 30–50% in scenari di inazione) di specie e di funzionalità degli ecosistemi se non verranno rafforzate le misure di conservazione.',
    date: new Date(2040, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 70,
    themes: ['ambiente', 'clima'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPBES', 'WWF Living Planet Report', 'Science'],
    triggeredBy: ['5', '1', '34'],
    relatedEvents: ['28'],
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
    description:
      'Possibile crisi sistemica del debito sovrano e privato che potrebbe destabilizzare l\'economia mondiale, soprattutto in contesti di tassi elevati, shock climatici e frammentazione geopolitica.',
    date: new Date(2028, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'medium',
    probabilityValue: 45,
    themes: ['economia', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['IMF Global Debt Monitor', 'World Bank']
  },
  {
    id: '11',
    title: 'Earth Overshoot Day 2026',
    description:
      'Giorno in cui l\'umanità ha consumato tutte le risorse che la Terra può rigenerare in un anno. Nel 2026 cade il 30 luglio. È un indicatore annuale: la data si sposta ogni anno in base a impronta ecologica e biocapacità.',
    date: new Date(2026, 6, 30),
    precision: 'day',
    nature: 'scientific-projection',
    recurring: 'annual',
    probability: 'very-high',
    probabilityValue: 95,
    themes: ['ambiente', 'clima', 'società'],
    impact: 'global',
    category: 'milestone',
    sources: ['Global Footprint Network 2026']
  },
  {
    id: '12',
    title: 'Raggiungimento della Longevity Escape Velocity',
    description:
      'Secondo scenari di longevità radicale (es. Ray Kurzweil), raggiungeremo la capacità di guadagnare più di un anno di aspettativa di vita per ogni anno vissuto, grazie a medicina, biotech e IA. Resta altamente speculativo.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'medium',
    probabilityValue: 40,
    themes: ['scienza', 'salute', 'tecnologia'],
    impact: 'global',
    category: 'transformation',
    sources: ['Ray Kurzweil', 'Singularity University']
  },
  {
    id: '13',
    title: 'Fit for 55: −55% emissioni UE',
    description:
      'Obiettivo vincolante dell\'Unione Europea di ridurre le emissioni nette di gas serra di almeno il 55% rispetto al 1990 entro il 2030 (non la neutralità climatica, prevista al 2050). Implementato dal pacchetto Fit for 55.',
    date: new Date(2030, 11, 31),
    precision: 'year',
    nature: 'policy-milestone',
    probability: 'medium',
    probabilityValue: 50,
    themes: ['clima', 'energia', 'ambiente'],
    impact: 'regional',
    category: 'milestone',
    sources: ['European Climate Law', 'Fit for 55', 'EU Commission'],
    triggers: ['31'],
    relatedEvents: ['17']
  },
  {
    id: '14',
    title: 'Prima missione umana su Marte',
    description:
      'Possibile lancio o arrivo della prima missione umana su Marte, segnando l\'inizio dell\'espansione umana oltre la Terra. Timeline dipendenti da NASA, ESA, SpaceX e vincoli tecnici/finanziari.',
    date: new Date(2033, 0, 1),
    horizonEnd: new Date(2040, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'medium',
    probabilityValue: 55,
    themes: ['scienza', 'tecnologia'],
    impact: 'global',
    category: 'milestone',
    sources: ['NASA Artemis/Moon to Mars', 'SpaceX', 'ESA']
  },
  {
    id: '15',
    title: 'Vantaggio quantistico per problemi pratici',
    description:
      'I computer quantistici potrebbero dimostrare vantaggi utili su problemi pratici (crittografia, materiali, ottimizzazione, farmaceutica) oltre i benchmark di laboratorio.',
    date: new Date(2028, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 50,
    themes: ['tecnologia', 'scienza'],
    impact: 'global',
    category: 'transformation',
    sources: ['IBM Quantum', 'Google Quantum AI', 'Nature Quantum reviews'],
    relatedEvents: ['2']
  },
  {
    id: '17',
    title: 'Obiettivo Net Zero globale 2050',
    description:
      'Obiettivo politico globale per raggiungere emissioni nette zero di gas serra entro metà secolo, necessario (ma sempre più difficile) per limitare il riscaldamento vicino a 1,5°C. Traiettorie IEA/IPCC richiedono accelerazioni marcate.',
    date: new Date(2050, 11, 31),
    precision: 'year',
    nature: 'policy-milestone',
    probability: 'medium',
    probabilityValue: 40,
    themes: ['clima', 'energia', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['IPCC AR6', 'IEA Net Zero Roadmap', 'UNFCCC'],
    relatedEvents: ['4', '13', '31', '32'],
    triggeredBy: ['31']
  },
  {
    id: '18',
    title: 'Collasso o tipping dell\'AMOC',
    description:
      'Rischio di rallentamento critico o collasso della Circolazione Meridionale Atlantica (AMOC), con potenziali cambiamenti climatici drastici in Europa e Nord Atlantico. Stime e modelli divergono: alcuni studi osservazionali suggeriscono metà secolo; altri giudicano un collasso completo entro il XXI secolo improbabile.',
    date: new Date(2037, 0, 1),
    horizonEnd: new Date(2060, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'low',
    probabilityValue: 35,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['Ditlevsen & Ditlevsen Nature Comms 2023', 'IPCC AR6', 'Nature 2025 AMOC study'],
    triggeredBy: ['1', '32'],
    triggers: ['30'],
    relatedEvents: ['5', '35']
  },
  {
    id: '19',
    title: 'Declino strutturale dell\'era del petrolio',
    description:
      'Possibile fine del petrolio come pilastro dominante del sistema energetico globale, con picco della domanda seguito da declino strutturale. Distinto dal picco di produzione “peak oil” classico.',
    date: new Date(2035, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 60,
    themes: ['energia', 'economia', 'ambiente'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA World Energy Outlook', 'BP Energy Outlook'],
    relatedEvents: ['36', '4', '27']
  },
  {
    id: '20',
    title: 'Urbanizzazione globale al 70%',
    description:
      'Circa il 70% della popolazione mondiale vivrà in aree urbane, con conseguenze significative per infrastrutture, risorse, salute e disuguaglianze.',
    date: new Date(2050, 0, 1),
    precision: 'year',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 85,
    themes: ['demografia', 'società', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Habitat', 'UN World Urbanization Prospects']
  },
  {
    id: '22',
    title: 'Scomparsa dei ghiacciai alpini',
    description:
      'I ghiacciai delle Alpi potrebbero ridursi drasticamente o scomparire quasi completamente a quote medie, con impatti sull\'approvvigionamento idrico, turismo e rischio idrogeologico in Europa.',
    date: new Date(2045, 0, 1),
    horizonEnd: new Date(2060, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 75,
    themes: ['clima', 'ambiente'],
    impact: 'regional',
    category: 'tipping-point',
    sources: ['European Geosciences Union', 'Nature Climate Change'],
    relatedEvents: ['6']
  },
  {
    id: '23',
    title: 'Crisi alimentare globale',
    description:
      'Possibile crisi alimentare globale o regionale severa dovuta a cambiamenti climatici, scarsità d\'acqua, shock geopolitici e pressione demografica.',
    date: new Date(2035, 0, 1),
    horizonEnd: new Date(2045, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 55,
    themes: ['società', 'ambiente', 'economia'],
    impact: 'global',
    category: 'threshold',
    sources: ['FAO', 'World Food Programme', 'IPCC AR6'],
    relatedEvents: ['6', '30']
  },
  {
    id: '24',
    title: 'Fusione nucleare commerciale',
    description:
      'Possibile raggiungimento della fusione nucleare commercialmente sostenibile, con impianti in grado di fornire energia netta in modo economico. ITER e startup private puntano a dimostrazioni, ma la scala commerciale resta incerta.',
    date: new Date(2035, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'speculative-scenario',
    probability: 'low',
    probabilityValue: 35,
    themes: ['energia', 'scienza', 'tecnologia'],
    impact: 'global',
    category: 'transformation',
    sources: ['ITER', 'MIT Plasma Science', 'IEA'],
    relatedEvents: ['4']
  },
  {
    id: '26',
    title: 'Invecchiamento globale della popolazione',
    description:
      'Per la prima volta nella storia, a livello globale gli over-65 supereranno i bambini sotto i 5 anni, con profonde implicazioni su welfare, lavoro, sanità e crescita economica.',
    date: new Date(2030, 0, 1),
    precision: 'year',
    nature: 'scientific-projection',
    probability: 'very-high',
    probabilityValue: 90,
    themes: ['demografia', 'società', 'economia'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Population Division', 'World Health Organization']
  },
  {
    id: '27',
    title: 'Fine dell\'era del carbone come fonte primaria',
    description:
      'Possibile uscita strutturale del carbone dal ruolo di fonte energetica primaria nei principali mercati, con phase-out accelerato in OECD e picchi di domanda in Asia. La traiettoria resta eterogenea per paese.',
    date: new Date(2030, 0, 1),
    horizonEnd: new Date(2040, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 55,
    themes: ['energia', 'ambiente', 'clima'],
    impact: 'global',
    category: 'transformation',
    sources: ['IEA Coal reports', 'IEA World Energy Outlook'],
    relatedEvents: ['4', '19', '36']
  },
  {
    id: '28',
    title: 'Collasso della pesca globale',
    description:
      'Rischio di collasso di stock ittici globali chiave se non verranno rafforzate pratiche di pesca sostenibile, aree marine protette e governance internazionale.',
    date: new Date(2040, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 50,
    themes: ['ambiente', 'società', 'economia'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['FAO Fisheries', 'Marine Stewardship Council', 'IPBES'],
    triggeredBy: ['5'],
    relatedEvents: ['9']
  },
  {
    id: '29',
    title: 'Scadenza degli SDG 2030',
    description:
      'Scadenza formale per il raggiungimento degli Obiettivi di Sviluppo Sostenibile delle Nazioni Unite. Molti target risultano già fuori traiettoria; l\'orizzonte resta comunque un momento di bilancio politico globale.',
    date: new Date(2030, 11, 31),
    precision: 'year',
    nature: 'policy-milestone',
    probability: 'low',
    probabilityValue: 25,
    themes: ['società', 'economia', 'ambiente'],
    impact: 'global',
    category: 'milestone',
    sources: ['UN Sustainable Development Goals Report']
  },
  {
    id: '30',
    title: 'Crisi dei rifugiati climatici',
    description:
      'Possibile crisi migratoria su larga scala con decine o centinaia di milioni di persone spostate da eventi estremi, innalzamento del mare, aridificazione e perdita di mezzi di sussistenza.',
    date: new Date(2035, 0, 1),
    horizonEnd: new Date(2050, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 70,
    themes: ['clima', 'società', 'geopolitica'],
    impact: 'global',
    category: 'threshold',
    sources: ['UNHCR', 'Internal Displacement Monitoring Centre', 'IPCC AR6'],
    triggeredBy: ['1', '18', '6', '32', '35'],
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
  },
  {
    id: '31',
    title: 'Target clima UE 2040 (−90%)',
    description:
      'Obiettivo intermedio vincolante dell\'UE di ridurre le emissioni nette di gas serra del 90% rispetto al 1990 entro il 2040, lungo il percorso verso la neutralità climatica al 2050 (European Climate Law aggiornata).',
    date: new Date(2040, 11, 31),
    precision: 'year',
    nature: 'policy-milestone',
    probability: 'medium',
    probabilityValue: 45,
    themes: ['clima', 'energia', 'geopolitica'],
    impact: 'regional',
    category: 'milestone',
    sources: ['European Climate Law (Reg. 2026/667)', 'EU Commission'],
    triggeredBy: ['13'],
    triggers: ['17'],
    relatedEvents: ['4']
  },
  {
    id: '32',
    title: 'Superamento 1,5°C (media pluriennale)',
    description:
      'Possibile conferma che il riscaldamento globale medio ha superato in modo sostenuto la soglia di 1,5°C rispetto all\'era preindustriale (media pluriennale, non singolo anno record). Implica un carbon budget residuo quasi azzerato.',
    date: new Date(2026, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'high',
    probabilityValue: 75,
    themes: ['clima', 'ambiente', 'società'],
    impact: 'global',
    category: 'threshold',
    sources: ['IPCC AR6', 'WMO', 'Global Carbon Project'],
    triggers: ['1', '18', '30', '34', '35'],
    relatedEvents: ['17']
  },
  {
    id: '33',
    title: 'Governance IA operativa (AI Act UE)',
    description:
      'Entrata in vigore operativa degli obblighi principali dell\'AI Act europeo per sistemi ad alto rischio e modelli di uso generale, con enforcement, obblighi di trasparenza e governance del rischio IA nel mercato UE.',
    date: new Date(2026, 0, 1),
    horizonEnd: new Date(2028, 11, 31),
    precision: 'window',
    nature: 'policy-milestone',
    probability: 'high',
    probabilityValue: 80,
    themes: ['tecnologia', 'geopolitica', 'società'],
    impact: 'regional',
    category: 'milestone',
    sources: ['EU AI Act', 'European Commission'],
    relatedEvents: ['2']
  },
  {
    id: '34',
    title: 'Rischio tipping Amazzonia / dieback',
    description:
      'Rischio che parti della foresta amazzonica oltrepassino soglie di dieback (transizione verso savana o ecosistema degradato), con rilasci di carbonio e perdita di biodiversità a scala continentale.',
    date: new Date(2040, 0, 1),
    horizonEnd: new Date(2070, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 50,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPCC AR6', 'Nature / Science Amazon tipping studies', 'IPBES'],
    triggeredBy: ['32'],
    triggers: ['9', '30'],
    relatedEvents: ['1']
  },
  {
    id: '35',
    title: 'Instabilità West Antarctic Ice Sheet',
    description:
      'Rischio di destabilizzazione irreversibile di settori della West Antarctic Ice Sheet (WAIS), con contributo plurimetro al livello del mare su scale di tempo lunghe. L\'innesco può avvenire in questo secolo anche se gli effetti pieni si dispiegano dopo.',
    date: new Date(2050, 0, 1),
    horizonEnd: new Date(2100, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 45,
    themes: ['clima', 'ambiente'],
    impact: 'global',
    category: 'tipping-point',
    sources: ['IPCC AR6', 'Nature Geoscience WAIS studies'],
    triggeredBy: ['1', '32'],
    triggers: ['30'],
    relatedEvents: ['18']
  },
  {
    id: '36',
    title: 'Picco della domanda mondiale di petrolio',
    description:
      'Secondo scenari IEA, la domanda globale di petrolio potrebbe raggiungere un picco e poi stabilizzarsi o declinare tra fine anni 2020 e metà anni 2030, spinta da elettrificazione dei trasporti, efficienza e policy climatiche.',
    date: new Date(2028, 0, 1),
    horizonEnd: new Date(2035, 11, 31),
    precision: 'window',
    nature: 'scientific-projection',
    probability: 'medium',
    probabilityValue: 60,
    themes: ['energia', 'economia', 'clima'],
    impact: 'global',
    category: 'milestone',
    sources: ['IEA World Energy Outlook', 'IEA Oil 2024/2025'],
    relatedEvents: ['19', '4', '27']
  }
];
