import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz02: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Speculative Design',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 02: origini, metodi e il potere della provocazione nel design speculativo.',
    },
    en: {
      title: 'Quiz — Speculative Design',
      description: 'Test your understanding of Module 02 key concepts: origins, methods and the power of provocation in speculative design.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q02-01',
      content: {
        it: {
          question: 'Chi sono considerati i fondatori dello Speculative Design?',
          options: [
            'Julian Bleecker e Stuart Candy',
            'Anthony Dunne e Fiona Raby',
            'Edward Tufte e Hans Rosling',
            'Peter Schwartz e Joseph Voros',
          ],
          explanation: 'Anthony Dunne e Fiona Raby del Royal College of Art pubblicarono "Design Noir" nel 1999, dando vita allo Speculative Design.',
        },
        en: {
          question: 'Who are considered the founders of Speculative Design?',
          options: [
            'Julian Bleecker and Stuart Candy',
            'Anthony Dunne and Fiona Raby',
            'Edward Tufte and Hans Rosling',
            'Peter Schwartz and Joseph Voros',
          ],
          explanation: 'Anthony Dunne and Fiona Raby at the Royal College of Art published "Design Noir" in 1999, giving birth to Speculative Design.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q02-02',
      content: {
        it: {
          question: 'Cos\'è un "prototipo diegetico"?',
          options: [
            'Un prototipo funzionante di un prodotto commerciale',
            'Un modello 3D stampato con tecnologie avanzate',
            'Un oggetto progettato come se appartenesse a un mondo futuro, credibile ma non funzionante',
            'Un disegno tecnico di un\'invenzione brevettata',
          ],
          explanation: 'Un prototipo diegetico è un oggetto che sembra provenire da un futuro plausibile. Non deve funzionare: deve essere credibile abbastanza da provocare una conversazione.',
        },
        en: {
          question: 'What is a "diegetic prototype"?',
          options: [
            'A working prototype of a commercial product',
            'A 3D model printed with advanced technologies',
            'An object designed as if it belonged to a future world, credible but not functional',
            'A technical drawing of a patented invention',
          ],
          explanation: 'A diegetic prototype is an object that seems to come from a plausible future. It doesn\'t need to work: it needs to be credible enough to provoke conversation.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q02-03',
      content: {
        it: {
          question: 'Qual è la differenza tra design "affermativo" e design "critico"?',
          options: [
            'Il design affermativo è più costoso del design critico',
            'Il design affermativo migliora l\'esistente, il design critico mette in discussione le assunzioni',
            'Il design critico funziona solo in ambito accademico',
            'Non c\'è differenza, sono la stessa cosa',
          ],
          explanation: 'Il design affermativo accetta il mondo così com\'è e lo migliora incrementalmente. Il design critico si chiede: "E se il mondo fosse diverso?".',
        },
        en: {
          question: 'What is the difference between "affirmative" and "critical" design?',
          options: [
            'Affirmative design is more expensive than critical design',
            'Affirmative design improves the existing, critical design challenges assumptions',
            'Critical design only works in academic settings',
            'There is no difference, they are the same thing',
          ],
          explanation: 'Affirmative design accepts the world as it is and improves it incrementally. Critical design asks: "What if the world were different?".',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q02-04',
      content: {
        it: {
          question: 'Cosa distingue la provocazione "produttiva" da quella "sterile" nello speculative design?',
          options: [
            'La provocazione produttiva è più scioccante',
            'La provocazione sterile è più artistica',
            'La provocazione produttiva apre possibilità di azione, quella sterile chiude nell\'angoscia',
            'Non c\'è differenza, ogni provocazione è utile',
          ],
          explanation: 'La provocazione produttiva apre spazi di immaginazione e azione ("questo futuro lo vogliamo? Se no, cosa facciamo?"), mentre quella sterile lascia solo angoscia senza via d\'uscita.',
        },
        en: {
          question: 'What distinguishes "productive" from "sterile" provocation in speculative design?',
          options: [
            'Productive provocation is more shocking',
            'Sterile provocation is more artistic',
            'Productive provocation opens possibilities for action, sterile provocation closes into anxiety',
            'There is no difference, every provocation is useful',
          ],
          explanation: 'Productive provocation opens spaces for imagination and action ("do we want this future? If not, what do we do?"), while sterile provocation only leaves anxiety without an exit.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q02-05',
      content: {
        it: {
          question: 'Cosa rappresenta il framework PPPP?',
          options: [
            'Quattro fasi di un progetto di design: Pianificare, Progettare, Produrre, Pubblicare',
            'Quattro tipi di futuri: Probabili, Plausibili, Possibili e Preferibili',
            'Quattro principi etici del design: Privacy, Partecipazione, Protezione, Progressione',
            'Quattro metodi di ricerca: Primaria, Partecipata, Pratica, Pubblicata',
          ],
          explanation: 'Il framework PPPP di Dunne & Raby distingue futuri Probabili, Plausibili, Possibili e Preferibili. Lo speculative design opera negli ultimi tre spazi.',
        },
        en: {
          question: 'What does the PPPP framework represent?',
          options: [
            'Four phases of a design project: Plan, Prototype, Produce, Publish',
            'Four types of futures: Probable, Plausible, Possible and Preferable',
            'Four ethical principles of design: Privacy, Participation, Protection, Progression',
            'Four research methods: Primary, Participatory, Practical, Published',
          ],
          explanation: 'Dunne & Raby\'s PPPP framework distinguishes Probable, Plausible, Possible and Preferable futures. Speculative design operates in the last three spaces.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const module02: CourseModule = {
  slug: 'speculative-design',
  number: '02',
  color: 'purple',
  iconName: 'Sparkles',
  content: {
    it: {
      title: 'Speculative Design',
      description: 'Quando il design smette di risolvere problemi e inizia a fare domande. Origini, metodi e il potere della provocazione progettuale.',
    },
    en: {
      title: 'Speculative Design',
      description: 'When design stops solving problems and starts asking questions. Origins, methods and the power of design provocation.',
    },
  },
  quiz: quiz02,
  lessons: [
    {
      slug: 'origini-e-fondamenti',
      readingTime: 8,
      content: {
        it: {
          title: 'Origini e fondamenti',
          description: 'Da Dunne & Raby al design critico: come il design ha imparato a immaginare mondi possibili.',
          body: [
            'Nel 1999, Anthony Dunne e Fiona Raby, due designer del Royal College of Art di Londra, pubblicarono "Design Noir" — un libro che proponeva un\'idea radicale: il design non deve solo risolvere problemi. Può anche creare artefatti che provocano riflessioni, aprono dibattiti e mettono in discussione lo status quo. Era la nascita di quello che oggi chiamiamo Speculative Design.',
            'L\'intuizione di Dunne e Raby partiva da un\'osservazione semplice: il design tradizionale è "affermativo" — accetta il mondo così com\'è e cerca di migliorarlo incrementalmente. Un nuovo smartphone, una sedia più ergonomica, un\'app più intuitiva. Ma che succede se il design inizia a chiedersi: "E se il mondo fosse diverso? E se la tecnologia funzionasse in un altro modo? E se le nostre priorità fossero altre?".',
            'Il loro framework PPPP (Probable, Plausible, Possible, Preferable) è diventato uno strumento fondamentale. I futuri probabili sono quelli verso cui stiamo andando se non cambia nulla. I plausibili sono quelli che potrebbero accadere con alcuni cambiamenti. I possibili richiedono trasformazioni radicali. I preferibili sono quelli per cui vale la pena lottare. Lo speculative design opera in questi ultimi tre spazi — i territori dell\'immaginazione produttiva.',
            'Ma lo speculative design non è fantascienza. Non si tratta di immaginare mondi impossibili per il piacere dell\'esercizio. Si tratta di creare artefatti — oggetti, servizi, esperienze — che sembrano provenire da un futuro plausibile e che, nel loro essere familiari-ma-diversi, costringono chi li incontra a riflettere su assunzioni che dava per scontate.',
            'Negli anni, questo approccio è stato adottato da musei (il MoMA, il V&A), università (MIT Media Lab, Copenhagen Institute of Interaction Design), governi (il Government Office for Science del Regno Unito) e organizzazioni internazionali (UNDP, UNESCO). Non è più un esperimento accademico: è uno strumento riconosciuto per navigare la complessità del presente.',
          ],
          keyTakeaways: [
            'Lo speculative design è nato alla fine degli anni \'90 con Dunne & Raby al Royal College of Art',
            'Differenza tra design "affermativo" (migliora l\'esistente) e "critico" (mette in discussione)',
            'Il framework PPPP aiuta a esplorare futuri probabili, plausibili, possibili e preferibili',
            'Non è fantascienza: sono artefatti plausibili che provocano riflessione',
          ],
          reflection: 'Pensa a un oggetto che usi ogni giorno (il telefono, la macchina, la carta d\'identità). Come sarebbe in un mondo con valori diversi dai nostri? Progettalo mentalmente.',
        },
        en: {
          title: 'Origins and foundations',
          description: 'From Dunne & Raby to critical design: how design learned to imagine possible worlds.',
          body: [
            'In 1999, Anthony Dunne and Fiona Raby, two designers at the Royal College of Art in London, published "Design Noir" — a book proposing a radical idea: design need not only solve problems. It can also create artefacts that provoke reflection, open debates and challenge the status quo. It was the birth of what we now call Speculative Design.',
            'Dunne and Raby\'s insight started from a simple observation: traditional design is "affirmative" — it accepts the world as it is and seeks to improve it incrementally. A new smartphone, a more ergonomic chair, a more intuitive app. But what happens if design starts asking: "What if the world were different? What if technology worked another way? What if our priorities were different?".',
            'Their PPPP framework (Probable, Plausible, Possible, Preferable) became a foundational tool. Probable futures are those we are heading towards if nothing changes. Plausible ones could happen with some changes. Possible ones require radical transformations. Preferable ones are those worth fighting for. Speculative design operates in these last three spaces — the territories of productive imagination.',
            'But speculative design is not science fiction. It is not about imagining impossible worlds for the sake of the exercise. It is about creating artefacts — objects, services, experiences — that seem to come from a plausible future and that, in being familiar-yet-different, force those who encounter them to reflect on assumptions they took for granted.',
            'Over the years, this approach has been adopted by museums (MoMA, V&A), universities (MIT Media Lab, Copenhagen Institute of Interaction Design), governments (UK Government Office for Science) and international organisations (UNDP, UNESCO). It is no longer an academic experiment: it is a recognised tool for navigating the complexity of the present.',
          ],
          keyTakeaways: [
            'Speculative design was born in the late 1990s with Dunne & Raby at the Royal College of Art',
            'Difference between "affirmative" design (improves the existing) and "critical" design (challenges it)',
            'The PPPP framework helps explore probable, plausible, possible and preferable futures',
            'It is not science fiction: these are plausible artefacts that provoke reflection',
          ],
          reflection: 'Think of an object you use every day (your phone, your car, your ID card). What would it look like in a world with different values? Design it in your mind.',
        },
      },
      resources: [
        { title: 'Dunne & Raby — Speculative Everything', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
        { title: 'MoMA — Design and the Elastic Mind', url: 'https://www.moma.org/calendar/exhibitions/58', type: 'article' },
        { title: 'Near Future Laboratory — Design Fiction', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
      ],
    },
    {
      slug: 'metodi-e-strumenti',
      readingTime: 8,
      content: {
        it: {
          title: 'Metodi e strumenti',
          description: 'Design fiction, prototipi diegetici e world-building: il toolkit pratico del designer speculativo.',
          body: [
            'Lo speculative design non è solo teoria — è una pratica con metodi specifici. Il più noto è il Design Fiction: la creazione di artefatti che raccontano una storia su un futuro possibile senza bisogno di una narrativa esplicita. Un manuale d\'istruzioni per un prodotto che non esiste. Un articolo di giornale dal 2040. Una pubblicità per un servizio del futuro. Questi oggetti "parlano" del futuro mostrandolo, non descrivendolo.',
            'Julian Bleecker del Near Future Laboratory ha coniato il termine e sviluppato uno degli strumenti più pratici: il "Design Fiction Product Catalogue". L\'idea è creare un catalogo di prodotti — come quelli di IKEA — ma per oggetti del futuro. Sfogliare un catalogo del 2045 è un\'esperienza immersiva che rende il futuro tangibile e discutibile.',
            'Un altro strumento potente è il prototipo diegetico — un termine preso dal cinema. In un film, un oggetto è "diegetico" quando appartiene al mondo della storia (la spada laser di Star Wars esiste nel mondo del film, non nel nostro). Un prototipo diegetico è un oggetto progettato come se appartenesse a un mondo futuro. Non deve funzionare: deve essere credibile abbastanza da provocare una conversazione.',
            'Il world-building è il processo di costruzione del mondo in cui questi artefatti esistono. Non basta progettare un oggetto del futuro: bisogna capire la società che lo ha prodotto. Quali leggi esistono? Quali valori dominano? Chi ha potere e chi no? Il world-building rigoroso è ciò che distingue uno scenario speculativo convincente da una fantasia superficiale.',
            'Stuart Candy, ricercatore alla Carnegie Mellon University, ha sviluppato il concetto di "Experiential Futures" — futuri esperibili. Invece di presentare scenari come report o presentazioni, Candy propone di farli vivere alle persone: installazioni immersive, giochi di ruolo, performance. Quando il futuro lo vivi, la riflessione è infinitamente più profonda.',
            'Questi metodi sono accessibili a chiunque: non servono budget enormi o competenze tecniche avanzate. Un workshop di design fiction si può fare con carta, penna e immaginazione. Ciò che serve è il coraggio di fare domande scomode.',
          ],
          keyTakeaways: [
            'Il Design Fiction crea artefatti che mostrano il futuro senza descriverlo esplicitamente',
            'I prototipi diegetici sono oggetti credibili da un mondo futuro, progettati per provocare conversazione',
            'Il world-building costruisce il contesto sociale, politico e culturale di uno scenario',
            'Gli Experiential Futures rendono gli scenari tangibili attraverso esperienze immersive',
          ],
          reflection: 'Scegli un trend tecnologico attuale (AI generativa, realtà aumentata, biotecnologie). Immagina un oggetto quotidiano del 2040 che incorpora quel trend. Descrivilo come se fosse in un catalogo.',
        },
        en: {
          title: 'Methods and tools',
          description: 'Design fiction, diegetic prototypes and world-building: the speculative designer\'s practical toolkit.',
          body: [
            'Speculative design is not just theory — it is a practice with specific methods. The most well-known is Design Fiction: the creation of artefacts that tell a story about a possible future without needing an explicit narrative. An instruction manual for a product that doesn\'t exist. A newspaper article from 2040. An advert for a future service. These objects "speak" about the future by showing it, not describing it.',
            'Julian Bleecker of the Near Future Laboratory coined the term and developed one of the most practical tools: the "Design Fiction Product Catalogue". The idea is to create a product catalogue — like IKEA\'s — but for future objects. Browsing a 2045 catalogue is an immersive experience that makes the future tangible and debatable.',
            'Another powerful tool is the diegetic prototype — a term borrowed from cinema. In a film, an object is "diegetic" when it belongs to the world of the story (Star Wars\' lightsaber exists in the film\'s world, not ours). A diegetic prototype is an object designed as if it belonged to a future world. It doesn\'t need to work: it needs to be credible enough to provoke a conversation.',
            'World-building is the process of constructing the world in which these artefacts exist. It\'s not enough to design a future object: you need to understand the society that produced it. What laws exist? What values dominate? Who holds power and who doesn\'t? Rigorous world-building is what distinguishes a convincing speculative scenario from a superficial fantasy.',
            'Stuart Candy, a researcher at Carnegie Mellon University, developed the concept of "Experiential Futures" — futures you can experience. Instead of presenting scenarios as reports or presentations, Candy proposes making people live them: immersive installations, role-playing games, performances. When you experience the future, the reflection is infinitely deeper.',
            'These methods are accessible to anyone: you don\'t need huge budgets or advanced technical skills. A design fiction workshop can be done with paper, pen and imagination. What you need is the courage to ask uncomfortable questions.',
          ],
          keyTakeaways: [
            'Design Fiction creates artefacts that show the future without explicitly describing it',
            'Diegetic prototypes are credible objects from a future world, designed to provoke conversation',
            'World-building constructs the social, political and cultural context of a scenario',
            'Experiential Futures make scenarios tangible through immersive experiences',
          ],
          reflection: 'Choose a current technology trend (generative AI, augmented reality, biotechnology). Imagine an everyday object from 2040 that incorporates that trend. Describe it as if it were in a catalogue.',
        },
      },
      resources: [
        { title: 'Julian Bleecker — Design Fiction: A Short Essay on Design, Science, Fact and Fiction', url: 'https://dfrlab.org/', type: 'article' },
        { title: 'Stuart Candy — Experiential Futures', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
        { title: 'Superflux — Design Studio', url: 'https://superflux.in/', type: 'tool' },
      ],
    },
    {
      slug: 'provocazione-come-strumento',
      readingTime: 7,
      content: {
        it: {
          title: 'La provocazione come strumento',
          description: 'Perché il buon design speculativo deve disturbare, non rassicurare — e i limiti etici della provocazione.',
          body: [
            'Nel 2015, lo studio di design Superflux creò un\'installazione chiamata "Mitigation of Shock": un appartamento londinese del futuro prossimo, adattato alla crisi climatica. I mobili erano rialzati per le inondazioni, le piante crescevano sui muri per il cibo, lampade UV sostituivano la luce naturale. Non era un\'opera d\'arte: era un appartamento credibile, inquietante nella sua plausibilità. I visitatori uscivano turbati — e questo era esattamente il punto.',
            'La provocazione è lo strumento centrale dello speculative design, e spesso è la sua caratteristica più fraintesa. Provocare non significa scioccare per il gusto di farlo. Significa creare un cortocircuito cognitivo: mostrare qualcosa di sufficientemente familiare da sembrare reale, ma sufficientemente diverso da costringere a ripensare le proprie assunzioni. Il filosofo Jacques Rancière la chiamerebbe "redistribuzione del sensibile" — cambiare ciò che è visibile e pensabile.',
            'La differenza tra provocazione produttiva e provocazione sterile sta nella direzione. Black Mirror provoca, ma spesso lascia solo angoscia — il messaggio implicito è "la tecnologia è terribile e non possiamo farci nulla". Lo speculative design costruttivo provoca ma apre possibilità: "questo è un futuro possibile — lo vogliamo? Se no, cosa facciamo per evitarlo?".',
            'Ci sono anche limiti etici importanti. Quando progetti scenari su guerra, carestia o oppressione, chi li presenta conta. Non è la stessa cosa se uno scenario sulla carestia climatica viene presentato in un museo d\'arte di Manhattan o in una comunità che vive già l\'insicurezza alimentare. La provocazione deve essere contestualizzata, rispettosa e consapevole dei rapporti di potere.',
            'Noi di Relatronica crediamo nella provocazione costruttiva: scenari che disturbano il comfort dell\'inevitabilità, ma che aprono spazi di immaginazione e azione. Non progettiamo distopie per il piacere della paura — progettiamo alternative per il coraggio della speranza.',
          ],
          keyTakeaways: [
            'La provocazione nello speculative design crea un cortocircuito cognitivo che costringe a ripensare le assunzioni',
            'La differenza tra provocazione produttiva e sterile sta nella direzione: chiudere nell\'angoscia o aprire possibilità',
            'I limiti etici richiedono attenzione al contesto, ai rapporti di potere e all\'impatto su chi vive già le crisi',
            'La provocazione costruttiva apre spazi di immaginazione e azione, non chiude nella paura',
          ],
          reflection: 'Pensa a uno scenario futuro che ti spaventa. Invece di restare nell\'angoscia, chiediti: "Cosa dovrebbe cambiare oggi per evitarlo?" e "Chi sta già lavorando in quella direzione?".',
        },
        en: {
          title: 'Provocation as a tool',
          description: 'Why good speculative design must disturb, not reassure — and the ethical limits of provocation.',
          body: [
            'In 2015, design studio Superflux created an installation called "Mitigation of Shock": a near-future London flat adapted to the climate crisis. Furniture was raised for flooding, plants grew on walls for food, UV lamps replaced natural light. It was not a work of art: it was a credible flat, unsettling in its plausibility. Visitors left disturbed — and that was exactly the point.',
            'Provocation is the central tool of speculative design, and often its most misunderstood characteristic. To provoke does not mean to shock for its own sake. It means creating a cognitive short-circuit: showing something familiar enough to seem real, yet different enough to force a rethinking of assumptions. Philosopher Jacques Rancière would call it a "redistribution of the sensible" — changing what is visible and thinkable.',
            'The difference between productive and sterile provocation lies in direction. Black Mirror provokes, but often leaves only anxiety — the implicit message is "technology is terrible and we can\'t do anything about it". Constructive speculative design provokes but opens possibilities: "this is a possible future — do we want it? If not, what do we do to avoid it?".',
            'There are also important ethical limits. When you design scenarios about war, famine or oppression, who presents them matters. It is not the same if a scenario about climate famine is presented in a Manhattan art museum or in a community already experiencing food insecurity. Provocation must be contextualised, respectful and aware of power dynamics.',
            'At Relatronica, we believe in constructive provocation: scenarios that disturb the comfort of inevitability, but that open spaces for imagination and action. We do not design dystopias for the pleasure of fear — we design alternatives for the courage of hope.',
          ],
          keyTakeaways: [
            'Provocation in speculative design creates a cognitive short-circuit that forces rethinking assumptions',
            'The difference between productive and sterile provocation lies in direction: closing into anxiety or opening possibilities',
            'Ethical limits require attention to context, power dynamics, and impact on those already living the crises',
            'Constructive provocation opens spaces for imagination and action, not closing into fear',
          ],
          reflection: 'Think of a future scenario that scares you. Instead of staying in the anxiety, ask yourself: "What would need to change today to avoid it?" and "Who is already working in that direction?".',
        },
      },
      resources: [
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
        { title: 'Dunne & Raby — Critical Design FAQ', url: 'http://dunneandraby.co.uk/content/bydandr/13/0', type: 'article' },
        { title: 'Jacques Rancière — The Politics of Aesthetics', url: 'https://www.bloomsbury.com/uk/politics-of-aesthetics-9781780935355/', type: 'book' },
      ],
    },
  ],
};
