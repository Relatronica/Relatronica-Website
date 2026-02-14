import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz06: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Mettere in pratica',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 06: segnali deboli, costruzione di scenari e attivismo tecnologico.',
    },
    en: {
      title: 'Quiz — Putting it into practice',
      description: 'Test your understanding of Module 06 key concepts: weak signals, scenario building and technology activism.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q06-01',
      content: {
        it: {
          question: 'Cos\'è l\'"horizon scanning"?',
          options: [
            'Una tecnica di fotografia paesaggistica',
            'La pratica sistematica di cercare segnali di cambiamento emergente monitorando fonti diverse',
            'Un algoritmo di intelligenza artificiale per prevedere il futuro',
            'Un metodo di meditazione per la mindfulness',
          ],
          explanation: 'L\'horizon scanning è la pratica sistematica di monitorare fonti diverse per identificare cambiamenti emergenti che potrebbero avere impatti significativi nel futuro.',
        },
        en: {
          question: 'What is "horizon scanning"?',
          options: [
            'A landscape photography technique',
            'The systematic practice of searching for signals of emerging change by monitoring diverse sources',
            'An AI algorithm for predicting the future',
            'A meditation method for mindfulness',
          ],
          explanation: 'Horizon scanning is the systematic practice of monitoring diverse sources to identify emerging changes that could have significant impacts in the future.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q06-02',
      content: {
        it: {
          question: 'Cos\'è un "segnale debole"?',
          options: [
            'Un segnale Wi-Fi con poca potenza',
            'Un evento o trend oggi marginale che potrebbe diventare dominante in futuro',
            'Un\'informazione falsa che circola su internet',
            'Un dato statistico con basso livello di confidenza',
          ],
          explanation: 'I segnali deboli sono eventi, innovazioni o tendenze che oggi sembrano marginali ma che potrebbero diventare dominanti, come Bitcoin nel 2008 o il movimento "degrowth".',
        },
        en: {
          question: 'What is a "weak signal"?',
          options: [
            'A Wi-Fi signal with low power',
            'An event or trend that seems marginal today but could become dominant in the future',
            'False information circulating on the internet',
            'A statistical datum with low confidence level',
          ],
          explanation: 'Weak signals are events, innovations or trends that seem marginal today but could become dominant, like Bitcoin in 2008 or the "degrowth" movement.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q06-03',
      content: {
        it: {
          question: 'Quali sono i sei passi per costruire uno scenario futuro?',
          options: [
            'Ricerca, interviste, analisi, sintesi, presentazione, pubblicazione',
            'Orizzonte + dominio, driver, incertezze critiche, matrice 2x2, narrazione, implicazioni',
            'Brainstorming, votazione, selezione, sviluppo, test, lancio',
            'Problema, ipotesi, esperimento, risultati, conclusioni, divulgazione',
          ],
          explanation: 'I sei passi sono: scegliere orizzonte e dominio, identificare i driver, selezionare due incertezze critiche, costruire la matrice 2x2, sviluppare le narrazioni e identificare le implicazioni.',
        },
        en: {
          question: 'What are the six steps to building a future scenario?',
          options: [
            'Research, interviews, analysis, synthesis, presentation, publication',
            'Horizon + domain, drivers, critical uncertainties, 2x2 matrix, narrative, implications',
            'Brainstorming, voting, selection, development, testing, launch',
            'Problem, hypothesis, experiment, results, conclusions, dissemination',
          ],
          explanation: 'The six steps are: choose horizon and domain, identify drivers, select two critical uncertainties, build the 2x2 matrix, develop narratives and identify implications.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q06-04',
      content: {
        it: {
          question: 'Come si manifesta l\'attivismo tecnologico?',
          options: [
            'Solo con manifestazioni di piazza contro le aziende tech',
            'Progettando alternative, costruendo strumenti e rendendo accessibile la conoscenza',
            'Boicottando completamente ogni tecnologia',
            'Scrivendo recensioni negative sugli app store',
          ],
          explanation: 'L\'attivismo tecnologico si fa progettando alternative (Signal vs WhatsApp), costruendo strumenti aperti e rendendo accessibile la conoscenza, non solo protestando.',
        },
        en: {
          question: 'How does technology activism manifest itself?',
          options: [
            'Only through street protests against tech companies',
            'By designing alternatives, building tools and making knowledge accessible',
            'By completely boycotting all technology',
            'By writing negative reviews on app stores',
          ],
          explanation: 'Technology activism means designing alternatives (Signal vs WhatsApp), building open tools and making knowledge accessible, not just protesting.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q06-05',
      content: {
        it: {
          question: 'Quali sono le cinque azioni concrete proposte per passare da osservatore ad attivista?',
          options: [
            'Leggere, studiare, ricercare, scrivere, pubblicare',
            'Usare strumenti etici, partecipare alla vita civica, leggere criticamente la tecnologia, sostenere organizzazioni, creare',
            'Protestare, boicottare, denunciare, organizzare, votare',
            'Programmare, hackare, crittografare, decentralizzare, automatizzare',
          ],
          explanation: 'Le cinque azioni sono: usare e promuovere strumenti etici, partecipare alla vita civica digitale, leggere criticamente la tecnologia, sostenere organizzazioni per i diritti digitali, e creare (blog, visualizzazioni, strumenti).',
        },
        en: {
          question: 'What are the five concrete actions proposed for moving from observer to activist?',
          options: [
            'Read, study, research, write, publish',
            'Use ethical tools, participate in civic life, read technology critically, support organisations, create',
            'Protest, boycott, denounce, organise, vote',
            'Code, hack, encrypt, decentralise, automate',
          ],
          explanation: 'The five actions are: use and promote ethical tools, participate in digital civic life, read technology critically, support digital rights organisations, and create (blogs, visualisations, tools).',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const module06: CourseModule = {
  slug: 'mettere-in-pratica',
  number: '06',
  color: 'indigo',
  iconName: 'Rocket',
  content: {
    it: {
      title: 'Mettere in pratica',
      description: 'Dalla teoria all\'azione: leggere i segnali del futuro, costruire scenari e diventare attivisti consapevoli della tecnologia.',
    },
    en: {
      title: 'Putting it into practice',
      description: 'From theory to action: reading signals of the future, building scenarios and becoming conscious technology activists.',
    },
  },
  quiz: quiz06,
  lessons: [
    {
      slug: 'leggere-i-segnali',
      readingTime: 7,
      content: {
        it: {
          title: 'Leggere i segnali del futuro',
          description: 'Horizon scanning, segnali deboli e trend: come allenare l\'occhio a vedere ciò che sta emergendo.',
          body: [
            'Nel 2007, Steve Jobs presentò l\'iPhone e il mondo cambiò. Ma per chi prestava attenzione, i segnali c\'erano già da anni: gli smartphone giapponesi, il successo dell\'iPod, la crescita del mobile internet, il fallimento dei PDA. Il futuro non arriva mai senza preavviso — ma i segnali sono spesso deboli, nascosti nel rumore del presente.',
            'L\'horizon scanning è la pratica sistematica di cercare questi segnali. Usata da governi (l\'UK Government Office for Science la pratica dagli anni \'90), aziende e think tank, consiste nel monitorare fonti diverse — pubblicazioni scientifiche, brevetti, startup, movimenti culturali, policy — per identificare cambiamenti emergenti che potrebbero avere impatti significativi.',
            'I segnali deboli sono eventi, innovazioni o tendenze che oggi sembrano marginali ma che potrebbero diventare dominanti. Quando nel 2008 Satoshi Nakamoto pubblicò il paper su Bitcoin, era un segnale debole. Quando i primi attivisti climatici iniziarono a parlare di "degrowth", era un segnale debole. La capacità di riconoscere i segnali deboli — e distinguerli dal rumore — è una delle competenze più preziose per pensare il futuro.',
            'Come allenare questa competenza? Primo: diversifica le fonti. Se leggi solo notizie mainstream, vedrai solo ciò che è già evidente. Leggi riviste scientifiche, segui startup in settori che non conosci, esplora culture diverse dalla tua. Secondo: cerca le anomalie. Il futuro non si nasconde nei trend lineari ma nelle discontinuità — gli eventi che non rientrano nei pattern esistenti. Terzo: connetti i puntini. Un segnale debole diventa forte quando si incrocia con altri segnali da domini diversi.',
            'L\'Osservatorio di Relatronica è progettato esattamente per questo: aggregare fonti diverse su etica, AI, policy e tecnologia sostenibile in un unico spazio, facilitando l\'horizon scanning per chiunque. Non devi essere un analista di futures — devi essere curioso e sistematico.',
          ],
          keyTakeaways: [
            'Il futuro non arriva senza preavviso: i segnali ci sono, ma sono spesso deboli e nascosti nel rumore',
            'L\'horizon scanning è la pratica sistematica di cercare segnali di cambiamento emergente',
            'Per allenare l\'occhio: diversifica le fonti, cerca le anomalie, connetti i puntini',
            'I segnali deboli diventano forti quando si incrociano con altri segnali da domini diversi',
          ],
          reflection: 'Identifica tre "segnali deboli" che hai notato nell\'ultimo anno — innovazioni, movimenti culturali o cambiamenti che sembrano marginali ma potrebbero diventare importanti. Perché li consideri segnali?',
        },
        en: {
          title: 'Reading signals of the future',
          description: 'Horizon scanning, weak signals and trends: how to train your eye to see what is emerging.',
          body: [
            'In 2007, Steve Jobs presented the iPhone and the world changed. But for those paying attention, the signals had been there for years: Japanese smartphones, the iPod\'s success, the growth of mobile internet, the failure of PDAs. The future never arrives without warning — but the signals are often weak, hidden in the noise of the present.',
            'Horizon scanning is the systematic practice of searching for these signals. Used by governments (the UK Government Office for Science has practised it since the 1990s), companies and think tanks, it consists of monitoring diverse sources — scientific publications, patents, startups, cultural movements, policy — to identify emerging changes that could have significant impacts.',
            'Weak signals are events, innovations or trends that seem marginal today but could become dominant. When Satoshi Nakamoto published the Bitcoin paper in 2008, it was a weak signal. When the first climate activists began talking about "degrowth", it was a weak signal. The ability to recognise weak signals — and distinguish them from noise — is one of the most valuable skills for thinking about the future.',
            'How to train this skill? First: diversify your sources. If you only read mainstream news, you\'ll only see what is already evident. Read scientific journals, follow startups in sectors you don\'t know, explore cultures different from your own. Second: look for anomalies. The future hides not in linear trends but in discontinuities — events that don\'t fit existing patterns. Third: connect the dots. A weak signal becomes strong when it intersects with other signals from different domains.',
            'Relatronica\'s Observatory is designed exactly for this: aggregating diverse sources on ethics, AI, policy and sustainable technology in a single space, facilitating horizon scanning for everyone. You don\'t need to be a futures analyst — you need to be curious and systematic.',
          ],
          keyTakeaways: [
            'The future never arrives without warning: signals are there, but often weak and hidden in noise',
            'Horizon scanning is the systematic practice of searching for signals of emerging change',
            'To train your eye: diversify sources, look for anomalies, connect the dots',
            'Weak signals become strong when they intersect with other signals from different domains',
          ],
          reflection: 'Identify three "weak signals" you\'ve noticed in the past year — innovations, cultural movements or changes that seem marginal but could become important. Why do you consider them signals?',
        },
      },
      resources: [
        { title: 'UK Government Office for Science — Horizon Scanning', url: 'https://www.gov.uk/government/groups/horizon-scanning-programme-team', type: 'article' },
        { title: 'Institute for the Future (IFTF)', url: 'https://www.iftf.org/', type: 'tool' },
        { title: 'Nesta — Signals of Change', url: 'https://www.nesta.org.uk/', type: 'article' },
      ],
    },
    {
      slug: 'costruire-il-proprio-scenario',
      readingTime: 9,
      content: {
        it: {
          title: 'Costruire il proprio scenario',
          description: 'Guida pratica passo-passo per costruire uno scenario futuro: dalla scelta dei driver alla narrazione.',
          body: [
            'Hai letto di futures studies, speculative design e segnali deboli. Ora è il momento di mettere le mani in pasta. In questa lezione costruirai il tuo primo scenario futuro — un esercizio che puoi fare da solo, in gruppo, o con la tua comunità. Non servono competenze speciali: solo curiosità, un foglio e una penna (o uno schermo).',
            'Passo 1: Scegli il tuo orizzonte temporale e il tuo dominio. Quanto lontano vuoi guardare? 5 anni? 10? 30? Più è lontano, più è incerto — e più è interessante. Scegli anche l\'ambito: la tua città, il tuo settore lavorativo, il sistema educativo, la sanità, l\'energia. Essere specifici aiuta: "il futuro del lavoro in Italia nel 2040" è meglio di "il futuro dell\'umanità".',
            'Passo 2: Identifica i driver di cambiamento. Cosa sta plasmando il futuro del tuo dominio? Cerca fattori in quattro categorie: Tecnologici (AI, automazione, biotech), Economici (disuguaglianza, nuovi modelli di business), Sociali (demografia, valori, movimenti culturali), Politici (regolamentazione, geopolitica, governance). Elencane almeno 8-10.',
            'Passo 3: Seleziona due incertezze critiche. Tra i driver che hai identificato, scegline due che sono sia importanti sia incerti — ovvero, potrebbero andare in direzioni molto diverse. Esempio: "regolamentazione dell\'AI" (forte vs debole) e "coesione sociale" (alta vs bassa). Questi diventeranno gli assi della tua matrice 2x2.',
            'Passo 4: Costruisci la matrice e nomina i quattro scenari. I quattro quadranti della matrice sono i tuoi quattro scenari. Dai a ciascuno un nome evocativo — non "Scenario A", ma qualcosa come "L\'Alveare Digitale" o "Il Giardino Resiliente". Il nome deve catturare l\'essenza del mondo che descrive.',
            'Passo 5: Sviluppa la narrazione. Per ogni scenario, scrivi una breve storia: com\'è la vita quotidiana in quel mondo? Chi ha potere? Quali sono i problemi? Quali le opportunità? Non cercare di essere esaustivo: cerca di essere vivido. Un buon dettaglio concreto ("la mattina controlli il tuo punteggio di carbonio prima di prendere il bus") vale più di dieci generalizzazioni.',
            'Passo 6: Identifica le implicazioni. Per ogni scenario, chiediti: se questo futuro si realizzasse, cosa dovrei fare oggi per prepararmi? Quali decisioni devo prendere adesso? Quali capacità devo sviluppare? Questo è il momento in cui lo scenario diventa strumento d\'azione. Puoi anche usare NextHuman come punto di partenza: esplora gli eventi, le connessioni, e costruisci il tuo scenario intorno a ciò che scopri.',
          ],
          keyTakeaways: [
            'Costruire uno scenario richiede curiosità e metodo, non competenze speciali',
            'I sei passi: orizzonte + dominio, driver, incertezze critiche, matrice 2x2, narrazione, implicazioni',
            'Nomi evocativi e dettagli concreti rendono gli scenari vividi e utili',
            'Il valore reale è nelle implicazioni: cosa devo fare oggi se questo futuro si realizza?',
          ],
          reflection: 'Segui i sei passi e costruisci il tuo primo scenario. Non deve essere perfetto — deve essere tuo. Condividilo con qualcuno e discutetene insieme.',
        },
        en: {
          title: 'Building your own scenario',
          description: 'A practical step-by-step guide to building a future scenario: from choosing drivers to narration.',
          body: [
            'You\'ve read about futures studies, speculative design and weak signals. Now it\'s time to get hands-on. In this lesson, you will build your first future scenario — an exercise you can do alone, in a group, or with your community. No special skills required: just curiosity, a sheet of paper and a pen (or a screen).',
            'Step 1: Choose your time horizon and domain. How far ahead do you want to look? 5 years? 10? 30? The further, the more uncertain — and the more interesting. Also choose your scope: your city, your industry, the education system, healthcare, energy. Being specific helps: "the future of work in Italy in 2040" is better than "the future of humanity".',
            'Step 2: Identify drivers of change. What is shaping the future of your domain? Look for factors in four categories: Technological (AI, automation, biotech), Economic (inequality, new business models), Social (demographics, values, cultural movements), Political (regulation, geopolitics, governance). List at least 8-10.',
            'Step 3: Select two critical uncertainties. Among the drivers you\'ve identified, choose two that are both important and uncertain — meaning they could go in very different directions. Example: "AI regulation" (strong vs weak) and "social cohesion" (high vs low). These become the axes of your 2x2 matrix.',
            'Step 4: Build the matrix and name the four scenarios. The four quadrants of the matrix are your four scenarios. Give each one an evocative name — not "Scenario A", but something like "The Digital Hive" or "The Resilient Garden". The name should capture the essence of the world it describes.',
            'Step 5: Develop the narrative. For each scenario, write a short story: what is daily life like in that world? Who has power? What are the problems? What are the opportunities? Don\'t try to be exhaustive: try to be vivid. One good concrete detail ("in the morning you check your carbon score before catching the bus") is worth more than ten generalisations.',
            'Step 6: Identify implications. For each scenario, ask yourself: if this future materialised, what should I do today to prepare? What decisions do I need to make now? What capabilities do I need to develop? This is the moment when the scenario becomes a tool for action. You can also use NextHuman as a starting point: explore the events, the connections, and build your scenario around what you discover.',
          ],
          keyTakeaways: [
            'Building a scenario requires curiosity and method, not special skills',
            'The six steps: horizon + domain, drivers, critical uncertainties, 2x2 matrix, narrative, implications',
            'Evocative names and concrete details make scenarios vivid and useful',
            'The real value lies in implications: what should I do today if this future materialises?',
          ],
          reflection: 'Follow the six steps and build your first scenario. It doesn\'t need to be perfect — it needs to be yours. Share it with someone and discuss it together.',
        },
      },
      resources: [
        { title: 'Shell — Scenario Planning Toolkit', url: 'https://www.shell.com/energy-and-innovation/the-energy-future/scenarios.html', type: 'tool' },
        { title: 'Adam Kahane — Transformative Scenario Planning', url: 'https://reospartners.com/publications/transformative-scenario-planning/', type: 'book' },
        { title: 'Relatronica NextHuman', url: 'https://relatronica.com/nexthuman', type: 'tool' },
      ],
    },
    {
      slug: 'da-osservatore-ad-attivista',
      readingTime: 7,
      content: {
        it: {
          title: 'Da osservatore ad attivista',
          description: 'Come trasformare la conoscenza in azione: attivismo tecnologico, organizzazione comunitaria e i tuoi prossimi passi.',
          body: [
            'Se sei arrivato fin qui, hai attraversato un percorso che va dai futures studies allo speculative design, dalla civic tech al knowledge mapping, dai bias algoritmici alla sovranità digitale. Hai strumenti concettuali che la maggior parte delle persone non ha. E questo crea una responsabilità: sapere non basta — bisogna agire.',
            'L\'attivismo tecnologico non assomiglia all\'attivismo tradizionale. Non si fa (solo) in piazza — si fa progettando alternative, costruendo strumenti, rendendo accessibile la conoscenza. Quando un\'organizzazione sceglie Signal invece di WhatsApp, è attivismo. Quando un giornalista usa strumenti di visualizzazione dati per raccontare la corruzione, è attivismo. Quando una comunità adotta Decidim per il budgeting partecipativo, è attivismo.',
            'Ma l\'attivismo più potente è quello collettivo. Le organizzazioni che stanno cambiando il panorama tecnologico — Electronic Frontier Foundation, AlgorithmWatch, Access Now, La Quadrature du Net — non sono composte da eroi solitari. Sono comunità di persone con competenze diverse che si organizzano intorno a obiettivi condivisi. L\'organizzazione comunitaria è lo strumento che trasforma le buone intenzioni in cambiamento reale.',
            'Cosa puoi fare concretamente? Primo: usa gli strumenti che rispettano i tuoi diritti e promuovili nel tuo circolo. Secondo: partecipa alla vita civica digitale della tua comunità — se non esiste, creala. Terzo: impara a leggere criticamente la tecnologia e insegna ad altri a farlo. Quarto: sostieni le organizzazioni che lottano per diritti digitali e tecnologie responsabili. Quinto: crea. Un blog, una visualizzazione, un workshop, uno strumento. Il mondo ha bisogno di più creatori consapevoli e meno consumatori passivi.',
            'Relatronica esiste per questo: non siamo un\'azienda che vende prodotti — siamo un collettivo che costruisce strumenti per chi vuole immaginare e costruire futuri migliori. Questo corso è un primo passo. Il prossimo lo fai tu.',
          ],
          keyTakeaways: [
            'Sapere non basta: la conoscenza crea la responsabilità di agire',
            'L\'attivismo tecnologico si fa progettando alternative e costruendo strumenti, non solo protestando',
            'L\'attivismo più potente è collettivo: organizzazione comunitaria intorno a obiettivi condivisi',
            'Cinque azioni concrete: usa strumenti etici, partecipa, leggi criticamente, sostieni organizzazioni, crea',
          ],
          reflection: 'Qual è la prima azione concreta che farai dopo aver completato questo corso? Non domani, non "quando avrò tempo" — questa settimana. Scrivila e impegnati a realizzarla.',
        },
        en: {
          title: 'From observer to activist',
          description: 'How to transform knowledge into action: technology activism, community organising and your next steps.',
          body: [
            'If you\'ve made it this far, you\'ve journeyed from futures studies to speculative design, from civic tech to knowledge mapping, from algorithmic bias to digital sovereignty. You have conceptual tools that most people don\'t. And this creates a responsibility: knowing is not enough — you must act.',
            'Technology activism doesn\'t look like traditional activism. It doesn\'t happen (only) in the streets — it happens by designing alternatives, building tools, making knowledge accessible. When an organisation chooses Signal instead of WhatsApp, it is activism. When a journalist uses data visualisation tools to expose corruption, it is activism. When a community adopts Decidim for participatory budgeting, it is activism.',
            'But the most powerful activism is collective. The organisations changing the technology landscape — Electronic Frontier Foundation, AlgorithmWatch, Access Now, La Quadrature du Net — are not made up of lone heroes. They are communities of people with diverse skills organising around shared goals. Community organising is the tool that transforms good intentions into real change.',
            'What can you concretely do? First: use tools that respect your rights and promote them in your circle. Second: participate in the digital civic life of your community — if it doesn\'t exist, create it. Third: learn to read technology critically and teach others to do the same. Fourth: support organisations fighting for digital rights and responsible technologies. Fifth: create. A blog, a visualisation, a workshop, a tool. The world needs more conscious creators and fewer passive consumers.',
            'Relatronica exists for this: we are not a company selling products — we are a collective building tools for those who want to imagine and build better futures. This course is a first step. The next one is yours.',
          ],
          keyTakeaways: [
            'Knowing is not enough: knowledge creates the responsibility to act',
            'Technology activism means designing alternatives and building tools, not just protesting',
            'The most powerful activism is collective: community organising around shared goals',
            'Five concrete actions: use ethical tools, participate, read critically, support organisations, create',
          ],
          reflection: 'What is the first concrete action you will take after completing this course? Not tomorrow, not "when I have time" — this week. Write it down and commit to doing it.',
        },
      },
      resources: [
        { title: 'Electronic Frontier Foundation — Take Action', url: 'https://www.eff.org/action', type: 'tool' },
        { title: 'Access Now', url: 'https://www.accessnow.org/', type: 'article' },
        { title: 'La Quadrature du Net', url: 'https://www.laquadrature.net/en/', type: 'article' },
      ],
    },
  ],
};
