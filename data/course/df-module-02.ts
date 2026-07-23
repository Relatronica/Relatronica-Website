import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz02: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Costruire scenari',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 02: segnali deboli, world-building rigoroso e tensioni tra personaggi e punti di vista.',
    },
    en: {
      title: 'Quiz — Building scenarios',
      description: 'Test your understanding of Module 02 key concepts: weak signals, rigorous world-building and tensions between characters and points of view.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q02-01',
      content: {
        it: {
          question: 'Qual è la differenza tra un "trend" e un "segnale debole"?',
          options: [
            'Non c\'è differenza, sono sinonimi',
            'Un trend è già visibile e diffuso; un segnale debole è un indizio precocce di un possibile cambiamento futuro',
            'I segnali deboli sono sempre tecnologici, i trend sono sociali',
            'I trend sono più affidabili dei segnali deboli',
          ],
          explanation: 'Un trend (es. l\'adozione dello smartphone) è già consolidato e misurabile. Un segnale debole (es. un piccolo movimento di riparazione elettronica) è un indizio che qualcosa potrebbe cambiare — ma non è ancora certo.',
        },
        en: {
          question: 'What is the difference between a "trend" and a "weak signal"?',
          options: [
            'There is no difference, they are synonyms',
            'A trend is already visible and widespread; a weak signal is an early indication of a possible future change',
            'Weak signals are always technological, trends are social',
            'Trends are more reliable than weak signals',
          ],
          explanation: 'A trend (e.g. smartphone adoption) is already established and measurable. A weak signal (e.g. a small electronics repair movement) is a hint that something might change — but it is not yet certain.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q02-02',
      content: {
        it: {
          question: 'Cosa significa il framework STEEP nello scanning dei futuri?',
          options: [
            'Un metodo per valutare la qualità degli artefatti diegetici',
            'Una checklist per analizzare driver di cambiamento in cinque dimensioni: Social, Technological, Economic, Environmental, Political',
            'Un algoritmo per prevedere trend tecnologici',
            'Un tipo di prototipo diegetico usato nel cinema',
          ],
          explanation: 'STEEP (Social, Technological, Economic, Environmental, Political) è un framework classico dello horizon scanning che aiuta a mappare sistematicamente i driver di cambiamento in un contesto dato.',
        },
        en: {
          question: 'What does the STEEP framework mean in futures scanning?',
          options: [
            'A method for evaluating the quality of diegetic artefacts',
            'A checklist for analysing drivers of change across five dimensions: Social, Technological, Economic, Environmental, Political',
            'An algorithm for predicting technology trends',
            'A type of diegetic prototype used in cinema',
          ],
          explanation: 'STEEP (Social, Technological, Economic, Environmental, Political) is a classic horizon scanning framework that helps systematically map drivers of change in a given context.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q02-03',
      content: {
        it: {
          question: 'Perché il world-building rigoroso è essenziale per uno scenario speculativo convincente?',
          options: [
            'Perché rende lo scenario più lungo e dettagliato',
            'Perché definisce leggi, valori, potere e infrastrutture che rendono coerenti gli artefatti diegetici',
            'Perché serve a prevedere con precisione il futuro',
            'Perché sostituisce la necessità di creare artefatti fisici',
          ],
          explanation: 'Senza un mondo coerente — chi ha potere, quali leggi esistono, quali valori dominano — gli artefatti restano superficiali. Il world-building dà profondità e credibilità allo scenario.',
        },
        en: {
          question: 'Why is rigorous world-building essential for a convincing speculative scenario?',
          options: [
            'Because it makes the scenario longer and more detailed',
            'Because it defines laws, values, power and infrastructure that make diegetic artefacts coherent',
            'Because it serves to predict the future with precision',
            'Because it replaces the need to create physical artefacts',
          ],
          explanation: 'Without a coherent world — who holds power, what laws exist, what values dominate — artefacts remain superficial. World-building gives depth and credibility to the scenario.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q02-04',
      content: {
        it: {
          question: 'Cosa rappresenta il "cono dei futuri" di Voros?',
          options: [
            'Uno strumento per misurare la qualità degli artefatti diegetici',
            'Una mappa che distingue futuri possibili, plausibili, probabili e preferibili — con il presente come punto di partenza',
            'Un metodo per brevettare invenzioni del futuro',
            'Un tipo di workshop di design fiction',
          ],
          explanation: 'Il cono dei futuri (Futures Cone) di Joseph Voros visualizza come dal presente si aprono diversi tipi di futuri: quelli possibili (ampio), plausibili, probabili (stretto) e preferibili.',
        },
        en: {
          question: 'What does Voros\' "futures cone" represent?',
          options: [
            'A tool for measuring the quality of diegetic artefacts',
            'A map distinguishing possible, plausible, probable and preferable futures — with the present as starting point',
            'A method for patenting future inventions',
            'A type of design fiction workshop',
          ],
          explanation: 'Joseph Voros\' Futures Cone visualises how different types of futures open from the present: possible (broad), plausible, probable (narrow) and preferable.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q02-05',
      content: {
        it: {
          question: 'Perché è importante chiedersi "chi prospera e chi soffre" in uno scenario?',
          options: [
            'Per rendere lo scenario più drammatico e cinematografico',
            'Per evitare scenari "neutrali" che nascondono scelte di potere e distribuzione di risorse',
            'Perché solo i personaggi principali contano nella design fiction',
            'Perché i policy maker richiedono sempre un protagonista',
          ],
          explanation: 'Ogni scenario futuro fa scelte implicitamente su chi beneficia e chi paga il costo. Ignorare le tensioni tra punti di vista produce scenari tecnicamente coerenti ma politicamente vuoti.',
        },
        en: {
          question: 'Why is it important to ask "who thrives and who suffers" in a scenario?',
          options: [
            'To make the scenario more dramatic and cinematic',
            'To avoid "neutral" scenarios that hide choices about power and resource distribution',
            'Because only main characters matter in design fiction',
            'Because policy makers always require a protagonist',
          ],
          explanation: 'Every future scenario implicitly makes choices about who benefits and who pays the cost. Ignoring tensions between points of view produces technically coherent but politically empty scenarios.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule02: CourseModule = {
  slug: 'costruire-scenari',
  number: '02',
  color: 'blue',
  iconName: 'Compass',
  content: {
    it: {
      title: 'Costruire scenari',
      description: 'Dai segnali deboli al world-building rigoroso: come trasformare indizi del presente in mondi futuri credibili e discutibili.',
    },
    en: {
      title: 'Building scenarios',
      description: 'From weak signals to rigorous world-building: how to transform present-day hints into credible and debatable future worlds.',
    },
  },
  quiz: quiz02,
  lessons: [
    {
      slug: 'segnali-deboli-e-driver',
      readingTime: 8,
      content: {
        it: {
          title: 'Segnali deboli e driver di cambiamento',
          description: 'Horizon scanning, framework STEEP e la differenza tra trend consolidati e indizi precoci del futuro.',
          body: [
            'Prima di costruire un mondo futuro, bisogna osservare il presente con attenzione. Non il presente che i media raccontano — quello che emerge guardando ai margini, alle eccezioni, ai piccoli movimenti che oggi sembrano irrilevanti ma domani potrebbero diventare centrali. Questi indizi si chiamano "segnali deboli" (weak signals).',
            'Un segnale debole non è una previsione — è un\'anomalia, un\'eccezione, un comportamento emergente che potrebbe indicare una direzione di cambiamento. Nel 2005, pochi osservavano i primi social network come segnali deboli di una trasformazione della comunicazione. Nel 2010, pochi notavano i primi esperimenti di machine learning come segnali deboli di un\'AI accessibile a tutti. Oggi, cosa stiamo ignorando?',
            'Il framework STEEP aiuta a organizzare lo scanning in cinque dimensioni: Social (demografia, cultura, movimenti), Technological (innovazioni, infrastrutture), Economic (modelli di business, disuguaglianze), Environmental (clima, risorse, biodiversità) e Political (governance, regolamentazione, conflitti). Non serve coprire tutto — serve guardare sistematicamente, non casualmente.',
            'La distinzione tra trend e segnali deboli è cruciale. Un trend è già visibile e misurabile: l\'elettrificazione dei trasporti, l\'invecchiamento della popolazione, la crescente sorveglianza digitale. Un segnale debole è ancora fragile: un piccolo movimento di riparazione elettronica, una comunità che sperimenta monete locali, un tribunale che riconosce diritti a un fiume. I trend dicono dove siamo; i segnali deboli suggeriscono dove potremmo andare.',
            'L\'Institute for the Future (IFTF) e altri think tank usano lo horizon scanning per alimentare scenari partecipativi. Il metodo non è predittivo — non cerca di indovinare il futuro. È esplorativo: mappa le forze in gioco per costruire scenari plausibili, non probabili. Il cono dei futuri di Joseph Voros visualizza questa distinzione: dal presente si aprono futuri possibili (ampi), plausibili, probabili (stretti) e preferibili.',
            'In un laboratorio di design fiction, lo scanning è la fase di ricerca che precede la creazione. Si raccolgono segnali, si discutono i driver, si identificano le tensioni — e solo dopo si inizia a costruire il mondo. Saltare questa fase produce artefatti "futuristici" generici, privi di radici nel presente e quindi privi di potere critico.',
          ],
          keyTakeaways: [
            'I segnali deboli sono indizi precoci di possibili cambiamenti, non previsioni',
            'STEEP organizza lo scanning in dimensioni Social, Technological, Economic, Environmental, Political',
            'I trend dicono dove siamo; i segnali deboli suggeriscono dove potremmo andare',
            'Lo scanning esplorativo precede e alimenta la costruzione degli scenari',
          ],
          reflection: 'Nelle ultime settimane, quale notizia o comportamento hai notato che ti è sembrato strano, marginale o "troppo presto"? Potrebbe essere un segnale debole. Descrivilo e chiediti: se diventasse centrale, che mondo produrrebbe?',
        },
        en: {
          title: 'Weak signals and drivers of change',
          description: 'Horizon scanning, the STEEP framework and the difference between established trends and early hints of the future.',
          body: [
            'Before building a future world, you need to observe the present carefully. Not the present that media portray — the one that emerges by looking at margins, exceptions, small movements that today seem irrelevant but tomorrow might become central. These hints are called "weak signals".',
            'A weak signal is not a forecast — it is an anomaly, an exception, an emerging behaviour that might indicate a direction of change. In 2005, few observed early social networks as weak signals of a communication transformation. In 2010, few noticed early machine learning experiments as weak signals of AI accessible to everyone. Today, what are we ignoring?',
            'The STEEP framework helps organise scanning across five dimensions: Social (demographics, culture, movements), Technological (innovations, infrastructure), Economic (business models, inequalities), Environmental (climate, resources, biodiversity) and Political (governance, regulation, conflicts). You do not need to cover everything — you need to look systematically, not randomly.',
            'The distinction between trends and weak signals is crucial. A trend is already visible and measurable: transport electrification, population ageing, growing digital surveillance. A weak signal is still fragile: a small electronics repair movement, a community experimenting with local currencies, a court recognising a river\'s rights. Trends tell us where we are; weak signals suggest where we might go.',
            'The Institute for the Future (IFTF) and other think tanks use horizon scanning to feed participatory scenarios. The method is not predictive — it does not try to guess the future. It is exploratory: it maps the forces at play to build plausible, not probable, futures. Joseph Voros\' futures cone visualises this distinction: from the present open possible (broad), plausible, probable (narrow) and preferable futures.',
            'In a design fiction lab, scanning is the research phase that precedes creation. Signals are collected, drivers discussed, tensions identified — and only then does world-building begin. Skipping this phase produces generic "futuristic" artefacts, without roots in the present and therefore without critical power.',
          ],
          keyTakeaways: [
            'Weak signals are early hints of possible changes, not forecasts',
            'STEEP organises scanning across Social, Technological, Economic, Environmental, Political dimensions',
            'Trends tell us where we are; weak signals suggest where we might go',
            'Exploratory scanning precedes and feeds scenario building',
          ],
          reflection: 'In recent weeks, what news or behaviour have you noticed that seemed strange, marginal or "too early"? It might be a weak signal. Describe it and ask yourself: if it became central, what world would it produce?',
        },
      },
      resources: [
        { title: 'Institute for the Future — IFTF', url: 'https://www.iftf.org/', type: 'tool' },
        { title: 'Joseph Voros — The Futures Cone', url: 'https://thevoroscope.com/2013/02/24/the-futures-cone-use-and-history/', type: 'article' },
        { title: 'UNESCO — Futures Literacy', url: 'https://www.unesco.org/en/futures-literacy', type: 'article' },
      ],
    },
    {
      slug: 'world-building-rigoroso',
      readingTime: 9,
      content: {
        it: {
          title: 'World-building rigoroso',
          description: 'Leggi, valori, potere e infrastrutture: come costruire un mondo futuro coerente e credibile.',
          body: [
            'Un artefatto diegetico convincente non nasce dal nulla — nasce da un mondo. Il world-building è il processo di costruire quel mondo: le sue regole, i suoi valori, le sue tensioni, la sua logica interna. Senza world-building, un oggetto del futuro è solo un gadget "futuristico". Con world-building, diventa una finestra su un mondo possibile.',
            'Il world-building rigoroso parte da quattro domande fondamentali. Chi ha potere in questo mondo? Quali leggi e istituzioni esistono? Quali valori dominano la cultura? Come funziona l\'infrastruttura materiale — energia, trasporti, comunicazioni, cibo? Ogni risposta apre implicazioni che devono essere coerenti tra loro.',
            'Prendiamo un esempio concreto. Immagini un futuro dove la crisi climatica ha reso obbligatoria la riparazione di ogni oggetto elettronico. Chi ha potere? Probabilmente cooperative di riparatori, enti pubblici che certificano le competenze, grandi aziende che devono fornire pezzi di ricambio. Quali leggi? Obbligo di riparabilità, divieto di obsolescenza programmata, tasse sui rifiuti elettronici. Quali valori? Sostenibilità, autonomia, comunità. Infrastruttura? Laboratori di riparazione diffusi, reti di scambio componenti, energia decentralizzata.',
            'La coerenza interna è la regola d\'oro. Se in questo mondo domina il valore della comunità, un badge di identità centralizzato e sorvegliato non ha senso — a meno che non sia precisamente il punto di tensione dello scenario. Se l\'energia è decentralizzata, un servizio che richiede data center enormi deve essere spiegato o rimosso. Ogni incoerenza rompe la credibilità.',
            'Stuart Candy parla di "scenario logic" — la logica interna che rende uno scenario non solo plausibile ma abitabile. Quando costruisci un mondo, chiediti: una persona reale potrebbe viverci? Cosa mangerebbe, come si muoverebbe, cosa le preoccuperebbe? Se non riesci a rispondere, il mondo è ancora troppo sottile.',
            'Il world-building non serve a prevedere il futuro — serve a esplorare possibilità con rigore. Un mondo ben costruito rende gli artefatti diegetici più potenti e le discussioni più profonde. È la differenza tra "ecco un oggetto strano" e "ecco come potrebbe essere la nostra vita".',
          ],
          keyTakeaways: [
            'Il world-building costruisce le regole, i valori e la logica del mondo futuro',
            'Quattro domande chiave: potere, leggi, valori, infrastruttura',
            'La coerenza interna è essenziale — ogni dettaglio deve rispettare la logica del mondo',
            'Un mondo ben costruito rende gli artefatti diegetici più potenti e credibili',
          ],
          reflection: 'Scegli un driver di cambiamento che ti interessa (es. AI nel lavoro, crisi climatica, invecchiamento). Rispondi alle quattro domande per un mondo tra 15 anni. Poi chiediti: quale oggetto quotidiano esisterebbe in quel mondo?',
        },
        en: {
          title: 'Rigorous world-building',
          description: 'Laws, values, power and infrastructure: how to build a coherent and credible future world.',
          body: [
            'A convincing diegetic artefact does not come from nowhere — it comes from a world. World-building is the process of constructing that world: its rules, values, tensions, internal logic. Without world-building, a future object is just a "futuristic" gadget. With world-building, it becomes a window onto a possible world.',
            'Rigorous world-building starts from four fundamental questions. Who holds power in this world? What laws and institutions exist? What values dominate the culture? How does material infrastructure work — energy, transport, communications, food? Each answer opens implications that must be coherent with each other.',
            'Let us take a concrete example. Imagine a future where the climate crisis has made repairing every electronic object mandatory. Who holds power? Probably repair cooperatives, public bodies certifying skills, large companies required to supply spare parts. What laws? Mandatory repairability, ban on planned obsolescence, taxes on electronic waste. What values? Sustainability, autonomy, community. Infrastructure? Widespread repair labs, component exchange networks, decentralised energy.',
            'Internal coherence is the golden rule. If community value dominates in this world, a centralised and surveilled ID badge makes no sense — unless that is precisely the scenario\'s tension point. If energy is decentralised, a service requiring enormous data centres must be explained or removed. Every incoherence breaks credibility.',
            'Stuart Candy speaks of "scenario logic" — the internal logic that makes a scenario not just plausible but inhabitable. When you build a world, ask yourself: could a real person live in it? What would they eat, how would they move, what would worry them? If you cannot answer, the world is still too thin.',
            'World-building is not about predicting the future — it is about exploring possibilities with rigour. A well-built world makes diegetic artefacts more powerful and discussions deeper. It is the difference between "here is a strange object" and "here is what our life could be like".',
          ],
          keyTakeaways: [
            'World-building constructs the rules, values and logic of the future world',
            'Four key questions: power, laws, values, infrastructure',
            'Internal coherence is essential — every detail must respect the world\'s logic',
            'A well-built world makes diegetic artefacts more powerful and credible',
          ],
          reflection: 'Choose a driver of change that interests you (e.g. AI at work, climate crisis, ageing). Answer the four questions for a world 15 years from now. Then ask yourself: what everyday object would exist in that world?',
        },
      },
      resources: [
        { title: 'Stuart Candy — Scenario Logic and Experiential Futures', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
        { title: 'Superflux — Invocation for Hope', url: 'https://superflux.in/index.php/work/invocation-for-hope/', type: 'article' },
        { title: 'Dunne & Raby — Speculative Everything (World-building chapter)', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
      ],
    },
    {
      slug: 'tensioni-personaggi-punti-di-vista',
      readingTime: 8,
      content: {
        it: {
          title: 'Tensioni, personaggi e punti di vista',
          description: 'Chi prospera e chi soffre nello scenario: perché ogni futuro ha vincitori, perdenti e zone grigie.',
          body: [
            'Uno scenario futuro non è neutrale. Ogni mondo che immagini fa scelte — esplicite o implicite — su chi beneficia e chi paga il costo. Un futuro di mobilità elettrica condivisa favorisce chi vive in città ben servite e penalizza chi abita zone rurali senza infrastrutture. Un futuro di AI medicale potenzia chi ha dati sanitari completi e esclude chi non ha mai avuto accesso al sistema. Ignorare queste tensioni produce scenari tecnicamente coerenti ma politicamente vuoti.',
            'I "personaggi" nello scenario non devono essere eroi o villain di un romanzo — sono punti di vista. Una pensionata che vive sola in periferia. Un riparatore di elettronica in un mercato locale. Un policy maker che deve decidere su un\'innovazione controversa. Un adolescente che naviga regolamenti che non ha contribuito a scrivere. Ogni personaggio vede il mondo in modo diverso — e il tuo scenario deve reggere da tutte queste prospettive.',
            'Chiedersi "chi prospera e chi soffre" è il test etico dello scenario. Non significa che ogni scenario debba essere distopico — significa che deve essere onesto. Se immagini un futuro dove la tecnologia risolve un problema, chiediti: per chi? A che costo? Chi resta indietro? Le risposte rendono lo scenario più credibile e più utile per il dibattito pubblico.',
            'Le tensioni tra punti di vista sono anche la fonte più ricca di artefatti diegetici. Un badge di identità che funziona perfettamente per un cittadino "classe A" ma che un migrante non può ottenere. Un manuale di riparazione scritto in linguaggio tecnico che esclude chi non ha studiato. Una pubblicità per un servizio di cura domiciliare che mostra famiglie nucleari ma non famiglie monoparentali. Ogni artefatto può incorporare una tensione — e renderla visibile.',
            'Superflux, lo studio di design londinese, eccelle in questo approccio. "Mitigation of Shock" non mostra un futuro generico post-clima: mostra un appartamento specifico, vissuto da persone specifiche, con soluzioni adattate a vincoli reali. "Invocation for Hope" non propone utopia astratta: mostra ecosistemi concreti dove umani e non-umani coesistono — con conflitti e compromessi inclusi.',
            'Noi di Relatronica crediamo che gli scenari partecipativi debbano includere voci diverse fin dall\'inizio — non come "consultazione" a posteriori, ma come co-costruzione. Un laboratorio di design fiction con pensionati, studenti, lavoratori e migranti produrrà scenari più ricchi, più critici e più utili di uno fatto solo da esperti di futures studies.',
          ],
          keyTakeaways: [
            'Ogni scenario fa scelte su chi beneficia e chi paga il costo',
            'I personaggi sono punti di vista — il mondo deve reggere da prospettive diverse',
            'Chiedersi "chi prospera e chi soffre" è il test etico dello scenario',
            'Le tensioni tra punti di vista sono fonte ricca di artefatti diegetici',
          ],
          reflection: 'Ripensa allo scenario che hai iniziato a costruire. Identifica tre "personaggi" (punti di vista) diversi. Per ciascuno: cosa funziona bene in questo futuro? Cosa non funziona? Quale artefatto diegetico incorporerebbe la loro esperienza?',
        },
        en: {
          title: 'Tensions, characters and points of view',
          description: 'Who thrives and who suffers in the scenario: why every future has winners, losers and grey areas.',
          body: [
            'A future scenario is not neutral. Every world you imagine makes choices — explicit or implicit — about who benefits and who pays the cost. A future of shared electric mobility favours those who live in well-served cities and penalises those in rural areas without infrastructure. A future of medical AI empowers those with complete health data and excludes those who never had access to the system. Ignoring these tensions produces technically coherent but politically empty scenarios.',
            'Scenario "characters" need not be novel heroes or villains — they are points of view. A retiree living alone in the suburbs. An electronics repairer in a local market. A policy maker deciding on a controversial innovation. A teenager navigating regulations they did not help write. Each character sees the world differently — and your scenario must hold up from all these perspectives.',
            'Asking "who thrives and who suffers" is the ethical test of a scenario. It does not mean every scenario must be dystopian — it means it must be honest. If you imagine a future where technology solves a problem, ask yourself: for whom? At what cost? Who is left behind? The answers make the scenario more credible and more useful for public debate.',
            'Tensions between points of view are also the richest source of diegetic artefacts. An ID badge that works perfectly for a "Class A" citizen but that a migrant cannot obtain. A repair manual written in technical language that excludes those without formal education. An advert for a home care service showing nuclear families but not single-parent families. Every artefact can incorporate a tension — and make it visible.',
            'Superflux, the London design studio, excels at this approach. "Mitigation of Shock" does not show a generic post-climate future: it shows a specific flat, lived by specific people, with solutions adapted to real constraints. "Invocation for Hope" does not propose abstract utopia: it shows concrete ecosystems where humans and non-humans coexist — with conflicts and compromises included.',
            'At Relatronica, we believe participatory scenarios must include diverse voices from the start — not as after-the-fact "consultation", but as co-construction. A design fiction lab with retirees, students, workers and migrants will produce richer, more critical and more useful scenarios than one run only by futures studies experts.',
          ],
          keyTakeaways: [
            'Every scenario makes choices about who benefits and who pays the cost',
            'Characters are points of view — the world must hold up from different perspectives',
            'Asking "who thrives and who suffers" is the ethical test of a scenario',
            'Tensions between points of view are a rich source of diegetic artefacts',
          ],
          reflection: 'Revisit the scenario you started building. Identify three different "characters" (points of view). For each: what works well in this future? What does not work? What diegetic artefact would incorporate their experience?',
        },
      },
      resources: [
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
        { title: 'Superflux — Invocation for Hope', url: 'https://superflux.in/index.php/work/invocation-for-hope/', type: 'article' },
        { title: 'Institute for the Future — Participatory Futures', url: 'https://www.iftf.org/', type: 'tool' },
      ],
    },
  ],
};
