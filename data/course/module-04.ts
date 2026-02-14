import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz04: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Knowledge Mapping',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 04: visualizzazione dei dati, grafi di conoscenza e storytelling visivo.',
    },
    en: {
      title: 'Quiz — Knowledge Mapping',
      description: 'Test your understanding of Module 04 key concepts: data visualisation, knowledge graphs and visual storytelling.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q04-01',
      content: {
        it: {
          question: 'Cosa dimostrò la mappa del colera di John Snow nel 1854?',
          options: [
            'Che le visualizzazioni sono decorazione estetica dei dati',
            'Che rendere visibili i dati rivela verità che i numeri da soli nascondono',
            'Che le mappe sono utili solo per la navigazione',
            'Che il colera si diffondeva per via aerea',
          ],
          explanation: 'La mappa di John Snow mostrò che i casi di colera si concentravano intorno a una pompa d\'acqua, dimostrando il potere della visualizzazione per rivelare pattern nascosti.',
        },
        en: {
          question: 'What did John Snow\'s cholera map demonstrate in 1854?',
          options: [
            'That visualisations are aesthetic decoration of data',
            'That making data visible reveals truths that numbers alone conceal',
            'That maps are only useful for navigation',
            'That cholera spread through the air',
          ],
          explanation: 'John Snow\'s map showed cholera cases clustering around a water pump, demonstrating the power of visualisation to reveal hidden patterns.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q04-02',
      content: {
        it: {
          question: 'Cos\'è il "chartjunk" secondo Edward Tufte?',
          options: [
            'Grafici creati con software obsoleto',
            'Decorazioni grafiche che oscurano i dati invece di illuminarli',
            'Dati falsi inseriti nei grafici per manipolare il pubblico',
            'Grafici troppo semplici che non comunicano abbastanza',
          ],
          explanation: 'Edward Tufte definisce "chartjunk" le decorazioni grafiche inutili che oscurano i dati e riducono la chiarezza della visualizzazione.',
        },
        en: {
          question: 'What is "chartjunk" according to Edward Tufte?',
          options: [
            'Charts created with obsolete software',
            'Graphic decorations that obscure data rather than illuminate it',
            'False data inserted in charts to manipulate the audience',
            'Charts that are too simple to communicate enough',
          ],
          explanation: 'Edward Tufte defines "chartjunk" as unnecessary graphic decorations that obscure data and reduce the clarity of visualisation.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q04-03',
      content: {
        it: {
          question: 'Cos\'è un knowledge graph?',
          options: [
            'Un grafico a barre che mostra la crescita della conoscenza nel tempo',
            'Un software per prendere appunti durante le lezioni',
            'Una struttura di nodi ed archi che collega informazioni e permette di navigare connessioni',
            'Un algoritmo che classifica i risultati di ricerca',
          ],
          explanation: 'Un knowledge graph è una struttura dove ogni nodo è un\'entità e ogni arco è una relazione, permettendo non solo di trovare informazioni ma di navigare le connessioni tra esse.',
        },
        en: {
          question: 'What is a knowledge graph?',
          options: [
            'A bar chart showing the growth of knowledge over time',
            'Software for taking notes during lectures',
            'A structure of nodes and edges connecting information and allowing navigation of connections',
            'An algorithm that ranks search results',
          ],
          explanation: 'A knowledge graph is a structure where each node is an entity and each edge is a relationship, allowing not just finding information but navigating the connections between them.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q04-04',
      content: {
        it: {
          question: 'Perché il "network thinking" è importante nel mondo contemporaneo?',
          options: [
            'Perché il networking professionale è essenziale per la carriera',
            'Perché i social network sono la principale fonte di informazione',
            'Perché i problemi contemporanei sono interconnessi in modi che il pensiero lineare non cattura',
            'Perché internet funziona come una rete di computer',
          ],
          explanation: 'Problemi come cambiamento climatico, disuguaglianza e AI sono interconnessi. Il network thinking aiuta a vedere le connessioni e comprendere la complessità.',
        },
        en: {
          question: 'Why is "network thinking" important in the contemporary world?',
          options: [
            'Because professional networking is essential for career growth',
            'Because social networks are the main source of information',
            'Because contemporary problems are interconnected in ways that linear thinking cannot capture',
            'Because the internet works as a network of computers',
          ],
          explanation: 'Problems like climate change, inequality and AI are interconnected. Network thinking helps see the connections and understand complexity.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q04-05',
      content: {
        it: {
          question: 'Qual è la differenza tra "raccontare una storia con i dati" e la "visualizzazione interattiva"?',
          options: [
            'Non c\'è differenza, sono la stessa cosa',
            'Lo storytelling è per giornalisti, la visualizzazione per scienziati',
            'Lo storytelling guida il lettore in una narrativa, la visualizzazione interattiva permette di costruire la propria comprensione',
            'La visualizzazione interattiva è sempre migliore dello storytelling',
          ],
          explanation: 'Lo storytelling con i dati costruisce una narrativa guidata. La visualizzazione interattiva è empowerment cognitivo: l\'utente esplora e costruisce la propria comprensione.',
        },
        en: {
          question: 'What is the difference between "telling a story with data" and "interactive visualisation"?',
          options: [
            'There is no difference, they are the same thing',
            'Storytelling is for journalists, visualisation for scientists',
            'Storytelling guides the reader through a narrative, interactive visualisation allows building one\'s own understanding',
            'Interactive visualisation is always better than storytelling',
          ],
          explanation: 'Data storytelling builds a guided narrative. Interactive visualisation is cognitive empowerment: the user explores and builds their own understanding.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const module04: CourseModule = {
  slug: 'knowledge-mapping',
  number: '04',
  color: 'orange',
  iconName: 'Network',
  content: {
    it: {
      title: 'Knowledge Mapping',
      description: 'L\'arte di rendere visibile l\'invisibile: dalla visualizzazione dei dati ai grafi di conoscenza, dalla complessità alla comprensione.',
    },
    en: {
      title: 'Knowledge Mapping',
      description: 'The art of making the invisible visible: from data visualisation to knowledge graphs, from complexity to understanding.',
    },
  },
  quiz: quiz04,
  lessons: [
    {
      slug: 'visualizzare-la-complessita',
      readingTime: 7,
      content: {
        it: {
          title: 'Visualizzare la complessità',
          description: 'Perché una buona visualizzazione vale più di mille numeri — e quando una cattiva può fare danni.',
          body: [
            'Nel 1854, il dottor John Snow fece qualcosa di rivoluzionario: prese una mappa di Londra e segnò con un punto ogni caso di colera nel quartiere di Soho. Il pattern che emerse fu inequivocabile: i casi si concentravano intorno a una specifica pompa d\'acqua in Broad Street. Quella mappa — una delle prime visualizzazioni di dati della storia — salvò vite e dimostrò un principio che vale ancora oggi: rendere visibili i dati rivela verità che i numeri da soli nascondono.',
            'La visualizzazione dei dati non è decorazione. Non è prendere una tabella Excel e trasformarla in un grafico colorato. È un processo di traduzione: prendere informazioni complesse e renderle comprensibili attraverso il linguaggio visivo. Il cervello umano elabora le immagini 60.000 volte più velocemente del testo — la visualizzazione sfrutta questa capacità innata per comunicare complessità.',
            'Ma la visualizzazione può anche ingannare. Un asse Y che non parte da zero può esagerare una tendenza. Una scala di colori mal scelta può nascondere i pattern importanti. Una mappa che usa cerchi proporzionali alla popolazione può far sembrare insignificante ciò che non lo è. Edward Tufte, il padre della visualizzazione moderna, ha scritto intere pagine su quello che chiama "chartjunk" — decorazioni grafiche che oscurano i dati invece di illuminarli.',
            'I principi di una buona visualizzazione sono sorprendentemente semplici: mostrare i dati con onestà, ridurre il rumore visivo, guidare l\'attenzione verso ciò che conta, fornire contesto sufficiente per l\'interpretazione. Ma applicarli richiede sia competenza tecnica che sensibilità etica — perché ogni scelta di visualizzazione è una scelta editoriale.',
            'In Relatronica, la visualizzazione è al cuore di ciò che facciamo. NextHuman non è un database di eventi futuri: è una visualizzazione interattiva che rende navigabile la complessità degli scenari futuri. Ogni scelta di colore, posizione e interazione è progettata per aiutare la comprensione, non per impressionare.',
          ],
          keyTakeaways: [
            'La visualizzazione dei dati rivela verità che i numeri da soli nascondono',
            'Non è decorazione: è traduzione di complessità in linguaggio visivo',
            'Può anche ingannare: assi manipolati, scale fuorvianti e "chartjunk"',
            'I principi sono: onestà, riduzione del rumore, guida dell\'attenzione e contesto',
          ],
          reflection: 'La prossima volta che vedi un grafico sui social media o su un giornale, fermati e chiediti: l\'asse parte da zero? Qual è la fonte? Cosa non mi sta mostrando?',
        },
        en: {
          title: 'Visualising complexity',
          description: 'Why a good visualisation is worth a thousand numbers — and when a bad one can cause harm.',
          body: [
            'In 1854, Dr John Snow did something revolutionary: he took a map of London and marked with a dot every cholera case in the Soho district. The pattern that emerged was unequivocal: cases clustered around a specific water pump on Broad Street. That map — one of the first data visualisations in history — saved lives and demonstrated a principle that still holds: making data visible reveals truths that numbers alone conceal.',
            'Data visualisation is not decoration. It is not taking an Excel table and turning it into a colourful chart. It is a process of translation: taking complex information and making it understandable through visual language. The human brain processes images 60,000 times faster than text — visualisation harnesses this innate ability to communicate complexity.',
            'But visualisation can also deceive. A Y-axis that doesn\'t start at zero can exaggerate a trend. A poorly chosen colour scale can hide important patterns. A map using circles proportional to population can make something appear insignificant when it isn\'t. Edward Tufte, the father of modern visualisation, wrote entire chapters on what he calls "chartjunk" — graphic decorations that obscure data rather than illuminate it.',
            'The principles of good visualisation are surprisingly simple: show data honestly, reduce visual noise, guide attention to what matters, provide sufficient context for interpretation. But applying them requires both technical competence and ethical sensitivity — because every visualisation choice is an editorial choice.',
            'At Relatronica, visualisation is at the heart of what we do. NextHuman is not a database of future events: it is an interactive visualisation that makes the complexity of future scenarios navigable. Every choice of colour, position and interaction is designed to aid understanding, not to impress.',
          ],
          keyTakeaways: [
            'Data visualisation reveals truths that numbers alone conceal',
            'It is not decoration: it is translating complexity into visual language',
            'It can also deceive: manipulated axes, misleading scales and "chartjunk"',
            'The principles are: honesty, noise reduction, attention guidance and context',
          ],
          reflection: 'Next time you see a chart on social media or in a newspaper, stop and ask: does the axis start at zero? What\'s the source? What isn\'t it showing me?',
        },
      },
      resources: [
        { title: 'Edward Tufte — The Visual Display of Quantitative Information', url: 'https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/', type: 'book' },
        { title: 'Seeing Data — University of Sheffield', url: 'https://seeingdata.org/', type: 'article' },
        { title: 'Observable — Data Visualization Platform', url: 'https://observablehq.com/', type: 'tool' },
      ],
    },
    {
      slug: 'grafi-mappe-connessioni',
      readingTime: 8,
      content: {
        it: {
          title: 'Grafi, mappe e connessioni',
          description: 'Pensare in rete: dai knowledge graph alle mappe concettuali, gli strumenti per visualizzare le relazioni.',
          body: [
            'Nel 1736, il matematico Leonhard Euler risolse il famoso problema dei ponti di Königsberg dimostrando che non era possibile attraversare tutti e sette i ponti della città senza passare due volte sullo stesso. Per farlo, inventò la teoria dei grafi — una delle basi della matematica moderna. Un grafo è semplicemente un insieme di nodi (punti) collegati da archi (linee). Ma questa struttura semplice può rappresentare quasi tutto: reti sociali, catene alimentari, circuiti elettrici, e — come vedremo — connessioni tra idee ed eventi.',
            'I knowledge graph (grafi di conoscenza) applicano questa struttura all\'informazione. Google ne usa uno per collegare fatti tra loro: quando cerchi "Leonardo da Vinci", il pannello che appare a destra non viene da una pagina web — viene da un grafo che collega Leonardo a Firenze, alla Gioconda, al Rinascimento, all\'ingegneria. Ogni nodo è un\'entità, ogni arco è una relazione. Questa struttura permette non solo di trovare informazioni, ma di navigare connessioni.',
            'Le mappe concettuali, sviluppate negli anni \'70 da Joseph Novak alla Cornell University, sono una versione più accessibile dello stesso principio. Una mappa concettuale mostra concetti come nodi e li collega con frasi che descrivono la relazione ("il clima influenza l\'agricoltura", "l\'agricoltura dipende dall\'acqua"). La forza delle mappe concettuali è che rendono esplicite le connessioni che nella nostra mente restano implicite.',
            'Il pensiero in rete — o "network thinking" — è una competenza sempre più importante nel mondo contemporaneo. I problemi che affrontiamo (cambiamento climatico, disuguaglianza, migrazioni, intelligenza artificiale) non sono isolati: sono interconnessi in modi che il pensiero lineare non riesce a catturare. Vedere le connessioni è il primo passo per comprendere la complessità e agire in modo efficace.',
            'In NextHuman, questo principio è fondamentale. Ogni evento futuro è collegato ad altri: una crisi energetica può accelerare la transizione verde, che può influenzare l\'occupazione, che può cambiare i flussi migratori. Mappare queste connessioni non è un esercizio accademico — è lo strumento per capire che il futuro non è un elenco di eventi isolati, ma un sistema di relazioni.',
          ],
          keyTakeaways: [
            'La teoria dei grafi rappresenta relazioni come nodi e archi — una struttura semplice ma potentissima',
            'I knowledge graph collegano informazioni e permettono di navigare connessioni, non solo trovare dati',
            'Le mappe concettuali rendono esplicite le connessioni che nella mente restano implicite',
            'Il network thinking è essenziale per comprendere problemi interconnessi come clima, AI e disuguaglianza',
          ],
          reflection: 'Prendi un tema che ti interessa e prova a creare una mappa concettuale con 5-7 concetti collegati. Scoprirai connessioni che non avevi considerato.',
        },
        en: {
          title: 'Graphs, maps and connections',
          description: 'Thinking in networks: from knowledge graphs to concept maps, tools for visualising relationships.',
          body: [
            'In 1736, mathematician Leonhard Euler solved the famous Königsberg bridge problem by proving it was impossible to cross all seven of the city\'s bridges without crossing the same one twice. To do so, he invented graph theory — one of the foundations of modern mathematics. A graph is simply a set of nodes (points) connected by edges (lines). But this simple structure can represent almost anything: social networks, food chains, electrical circuits, and — as we shall see — connections between ideas and events.',
            'Knowledge graphs apply this structure to information. Google uses one to connect facts: when you search for "Leonardo da Vinci", the panel that appears on the right doesn\'t come from a web page — it comes from a graph connecting Leonardo to Florence, the Mona Lisa, the Renaissance, engineering. Each node is an entity, each edge a relationship. This structure allows not just finding information, but navigating connections.',
            'Concept maps, developed in the 1970s by Joseph Novak at Cornell University, are a more accessible version of the same principle. A concept map shows concepts as nodes and connects them with phrases describing the relationship ("climate influences agriculture", "agriculture depends on water"). The power of concept maps is that they make explicit the connections that remain implicit in our minds.',
            'Network thinking is an increasingly important skill in the contemporary world. The problems we face (climate change, inequality, migration, artificial intelligence) are not isolated: they are interconnected in ways that linear thinking cannot capture. Seeing connections is the first step towards understanding complexity and acting effectively.',
            'In NextHuman, this principle is fundamental. Every future event is connected to others: an energy crisis can accelerate the green transition, which can influence employment, which can change migration flows. Mapping these connections is not an academic exercise — it is the tool for understanding that the future is not a list of isolated events, but a system of relationships.',
          ],
          keyTakeaways: [
            'Graph theory represents relationships as nodes and edges — a simple but powerful structure',
            'Knowledge graphs connect information and allow navigating connections, not just finding data',
            'Concept maps make explicit the connections that remain implicit in the mind',
            'Network thinking is essential for understanding interconnected problems like climate, AI and inequality',
          ],
          reflection: 'Take a topic that interests you and try creating a concept map with 5-7 connected concepts. You\'ll discover connections you hadn\'t considered.',
        },
      },
      resources: [
        { title: 'Google Knowledge Graph', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/', type: 'article' },
        { title: 'Joseph Novak — Learning, Creating, and Using Knowledge', url: 'https://www.springer.com/gp/book/9780415662857', type: 'book' },
        { title: 'Kumu — Relationship Mapping Platform', url: 'https://kumu.io/', type: 'tool' },
      ],
    },
    {
      slug: 'dalla-visualizzazione-alla-comprensione',
      readingTime: 7,
      content: {
        it: {
          title: 'Dalla visualizzazione alla comprensione',
          description: 'Storytelling con i dati, visualizzazione interattiva e la democratizzazione della comprensione.',
          body: [
            'Nel 2014, il New York Times pubblicò "Snow Fall" — un reportage multimediale sulla valanga di Tunnel Creek che integrava testo, video, grafici interattivi e visualizzazioni 3D. Non era solo giornalismo: era una dimostrazione di come la visualizzazione interattiva possa trasformare dati e informazioni in comprensione profonda. Il lettore non leggeva passivamente: esplorava, navigava, costruiva la propria comprensione.',
            'Lo storytelling con i dati è l\'arte di trasformare numeri e fatti in narrazioni che le persone possono comprendere, ricordare e su cui possono agire. Hans Rosling, lo statistico svedese famoso per le sue TED Talk con i grafici animati, era un maestro in questo: prendeva dati sulla povertà globale e li trasformava in storie avvincenti che sfidavano i pregiudizi e cambiavano le percezioni.',
            'Ma c\'è una differenza cruciale tra raccontare una storia e permettere alle persone di esplorare i dati autonomamente. La visualizzazione interattiva — dove l\'utente può filtrare, zoomare, selezionare e confrontare — è una forma di empowerment cognitivo. Invece di accettare la narrativa di qualcun altro, costruisci la tua comprensione. Questo è particolarmente importante quando si tratta di temi controversi o politicamente carichi.',
            'La sfida della democratizzazione della comprensione è rendere questi strumenti accessibili a tutti, non solo a data scientist e giornalisti. Piattaforme come Flourish, Datawrapper e Tableau Public hanno abbassato le barriere tecniche. Ma la vera sfida resta culturale: insegnare alle persone a leggere le visualizzazioni con spirito critico, a chiedersi cosa mostrano e cosa nascondono, a distinguere una rappresentazione onesta da una manipolazione.',
            'NextHuman è il nostro contributo a questa sfida. Non è uno strumento per data scientist: è una mappa interattiva del futuro pensata per chiunque. Ogni scelta di design — i colori delle probabilità, il layout a colonne, i filtri per tema — è progettata per rendere la complessità degli scenari futuri non solo visibile, ma navigabile e comprensibile da tutti.',
          ],
          keyTakeaways: [
            'Lo storytelling con i dati trasforma numeri in narrazioni comprensibili e memorabili',
            'La visualizzazione interattiva è empowerment cognitivo: costruisci la tua comprensione',
            'La democratizzazione della comprensione richiede strumenti accessibili e alfabetizzazione visiva',
            'La vera sfida è culturale: insegnare a leggere le visualizzazioni con spirito critico',
          ],
          reflection: 'Pensa a un tema su cui hai cambiato idea grazie a un grafico, una mappa o una visualizzazione. Cosa l\'ha resa così efficace? Il formato? I dati? Il contesto?',
        },
        en: {
          title: 'From visualisation to understanding',
          description: 'Storytelling with data, interactive visualisation and the democratisation of understanding.',
          body: [
            'In 2014, the New York Times published "Snow Fall" — a multimedia report on the Tunnel Creek avalanche that integrated text, video, interactive charts and 3D visualisations. It was not just journalism: it was a demonstration of how interactive visualisation can transform data and information into deep understanding. The reader did not passively read: they explored, navigated, built their own understanding.',
            'Data storytelling is the art of transforming numbers and facts into narratives that people can understand, remember and act upon. Hans Rosling, the Swedish statistician famous for his TED Talks with animated charts, was a master of this: he took data on global poverty and turned it into compelling stories that challenged prejudices and changed perceptions.',
            'But there is a crucial difference between telling a story and allowing people to explore data autonomously. Interactive visualisation — where users can filter, zoom, select and compare — is a form of cognitive empowerment. Instead of accepting someone else\'s narrative, you build your own understanding. This is particularly important when dealing with controversial or politically charged topics.',
            'The challenge of democratising understanding is making these tools accessible to everyone, not just data scientists and journalists. Platforms like Flourish, Datawrapper and Tableau Public have lowered technical barriers. But the real challenge remains cultural: teaching people to read visualisations critically, to ask what they show and what they hide, to distinguish honest representation from manipulation.',
            'NextHuman is our contribution to this challenge. It is not a tool for data scientists: it is an interactive map of the future designed for everyone. Every design choice — probability colours, column layout, theme filters — is crafted to make the complexity of future scenarios not just visible, but navigable and understandable by all.',
          ],
          keyTakeaways: [
            'Data storytelling transforms numbers into understandable and memorable narratives',
            'Interactive visualisation is cognitive empowerment: you build your own understanding',
            'Democratising understanding requires accessible tools and visual literacy',
            'The real challenge is cultural: teaching people to read visualisations critically',
          ],
          reflection: 'Think of a topic on which you changed your mind thanks to a chart, a map or a visualisation. What made it so effective? The format? The data? The context?',
        },
      },
      resources: [
        { title: 'Hans Rosling — Gapminder', url: 'https://www.gapminder.org/', type: 'tool' },
        { title: 'Flourish — Data Visualization Platform', url: 'https://flourish.studio/', type: 'tool' },
        { title: 'Alberto Cairo — How Charts Lie', url: 'https://www.albertocairo.com/', type: 'book' },
      ],
    },
  ],
};
