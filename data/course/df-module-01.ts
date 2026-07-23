import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz01: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Cos\'è la Design Fiction',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 01: dalla distinzione con lo speculative design alla diegesi e al laboratorio come metodo pratico.',
    },
    en: {
      title: 'Quiz — What is Design Fiction',
      description: 'Test your understanding of Module 01 key concepts: from the distinction with speculative design to diegesis and the lab as a practical method.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q01-01',
      content: {
        it: {
          question: 'Chi ha coniato il termine "Design Fiction" e lo ha sviluppato come pratica concreta?',
          options: [
            'Anthony Dunne e Fiona Raby',
            'Julian Bleecker',
            'Stuart Candy',
            'Joseph Voros',
          ],
          explanation: 'Julian Bleecker del Near Future Laboratory ha coniato il termine "Design Fiction" nel 2009, sviluppandolo come pratica orientata alla creazione di artefatti che rendono tangibili futuri plausibili.',
        },
        en: {
          question: 'Who coined the term "Design Fiction" and developed it as a concrete practice?',
          options: [
            'Anthony Dunne and Fiona Raby',
            'Julian Bleecker',
            'Stuart Candy',
            'Joseph Voros',
          ],
          explanation: 'Julian Bleecker of the Near Future Laboratory coined the term "Design Fiction" in 2009, developing it as a practice focused on creating artefacts that make plausible futures tangible.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q01-02',
      content: {
        it: {
          question: 'Qual è la differenza principale tra speculative design e design fiction?',
          options: [
            'Lo speculative design usa solo oggetti fisici, la design fiction solo video',
            'Lo speculative design è teoria critica e provocazione; la design fiction è pratica orientata alla creazione di artefatti narrativi',
            'Non c\'è differenza, sono sinonimi',
            'La design fiction è più antica dello speculative design',
          ],
          explanation: 'Dunne & Raby hanno sviluppato lo speculative design come approccio critico e provocatorio. Bleecker ha tratto da lì una pratica più concreta — la design fiction — focalizzata sulla produzione di artefatti che raccontano mondi possibili.',
        },
        en: {
          question: 'What is the main difference between speculative design and design fiction?',
          options: [
            'Speculative design uses only physical objects, design fiction only video',
            'Speculative design is critical theory and provocation; design fiction is a practice focused on creating narrative artefacts',
            'There is no difference, they are synonyms',
            'Design fiction is older than speculative design',
          ],
          explanation: 'Dunne & Raby developed speculative design as a critical and provocative approach. Bleecker drew from it a more concrete practice — design fiction — focused on producing artefacts that tell possible worlds.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q01-03',
      content: {
        it: {
          question: 'Cosa significa "diegesi" nel contesto della design fiction?',
          options: [
            'La descrizione scritta dettagliata di un futuro distopico',
            'Il mondo narrativo implicito in cui un artefatto sembra esistere, senza bisogno di spiegarlo a parole',
            'Un tipo di prototipo funzionante testato in laboratorio',
            'Un framework per prevedere trend tecnologici',
          ],
          explanation: 'La diegesi — termine preso dal cinema — è il mondo della storia che un artefatto evoca. Un manuale d\'istruzioni del 2040 non descrive il futuro: lo mostra attraverso dettagli, linguaggio e design.',
        },
        en: {
          question: 'What does "diegesis" mean in the context of design fiction?',
          options: [
            'A detailed written description of a dystopian future',
            'The implicit narrative world in which an artefact seems to exist, without needing to explain it in words',
            'A type of working prototype tested in a laboratory',
            'A framework for predicting technology trends',
          ],
          explanation: 'Diegesis — a term borrowed from cinema — is the story world that an artefact evokes. A 2040 instruction manual does not describe the future: it shows it through details, language and design.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q01-04',
      content: {
        it: {
          question: 'Perché la parola "fiction" è centrale nella design fiction?',
          options: [
            'Perché si tratta di inventare storie di fantascienza senza vincoli',
            'Perché gli artefatti sono credibili ma non reali — e questa distanza permette di esplorare possibilità senza il peso dell\'inevitabilità',
            'Perché i risultati non devono mai essere condivisi fuori dal laboratorio',
            'Perché solo i narratori professionisti possono praticarla',
          ],
          explanation: 'La "fiction" non significa falsità gratuita: significa che stiamo costruendo mondi possibili, non previsioni. Questa distanza ci libera per immaginare alternative e discuterle senza credere che siano già scritte.',
        },
        en: {
          question: 'Why is the word "fiction" central to design fiction?',
          options: [
            'Because it is about inventing science fiction stories without constraints',
            'Because artefacts are credible but not real — and this distance allows exploring possibilities without the weight of inevitability',
            'Because results must never be shared outside the lab',
            'Because only professional storytellers can practice it',
          ],
          explanation: '"Fiction" does not mean gratuitous falsehood: it means we are building possible worlds, not forecasts. This distance frees us to imagine alternatives and discuss them without believing they are already written.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q01-05',
      content: {
        it: {
          question: 'Perché il formato laboratorio è centrale nella design fiction?',
          options: [
            'Perché serve equipaggiamento scientifico costoso',
            'Perché la creazione di artefatti richiede iterazione rapida, collaborazione e "pensare facendo"',
            'Perché solo le università possono organizzare workshop',
            'Perché i risultati devono essere brevettati',
          ],
          explanation: 'Il laboratorio — workshop, prototipazione rapida, iterazione — è il metodo naturale della design fiction. Non si tratta di scrivere report sul futuro, ma di costruire oggetti che lo rendono discutibile, insieme.',
        },
        en: {
          question: 'Why is the lab format central to design fiction?',
          options: [
            'Because expensive scientific equipment is required',
            'Because creating artefacts requires rapid iteration, collaboration and "thinking by making"',
            'Because only universities can organise workshops',
            'Because results must be patented',
          ],
          explanation: 'The lab — workshop, rapid prototyping, iteration — is design fiction\'s natural method. It is not about writing reports about the future, but about building objects that make it debatable, together.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule01: CourseModule = {
  slug: 'cose-la-design-fiction',
  number: '01',
  color: 'orange',
  iconName: 'Sparkles',
  content: {
    it: {
      title: 'Cos\'è la Design Fiction',
      description: 'Introduzione alla design fiction come metodo pratico per creare artefatti che rendono tangibili e discutibili futuri possibili.',
    },
    en: {
      title: 'What is Design Fiction',
      description: 'An introduction to design fiction as a practical method for creating artefacts that make possible futures tangible and debatable.',
    },
  },
  quiz: quiz01,
  lessons: [
    {
      slug: 'dallo-speculative-design-alla-design-fiction',
      readingTime: 8,
      content: {
        it: {
          title: 'Dallo speculative design alla design fiction',
          description: 'La distinzione tra Dunne & Raby e Bleecker, e perché la parola "fiction" cambia il modo in cui immaginiamo il futuro.',
          body: [
            'Se hai seguito il Modulo 02 del percorso Fondamenti, conosci già lo speculative design: l\'approccio di Anthony Dunne e Fiona Raby che usa il design per fare domande scomode sul mondo possibile. La design fiction condivide quelle radici, ma prende una strada diversa — più pratica, più orientata alla produzione di artefatti concreti.',
            'Julian Bleecker, ricercatore e designer del Near Future Laboratory, ha coniato il termine "Design Fiction" nel 2009. La sua intuizione era semplice ma potente: invece di presentare scenari futuri come report o presentazioni PowerPoint, perché non creare oggetti che sembrano provenire da quei futuri? Un manuale d\'istruzioni per un prodotto che non esiste. Un articolo di giornale dal 2040. Una pubblicità per un servizio del futuro.',
            'La distinzione con Dunne & Raby non è una rivalità — è una complementarità. Lo speculative design di Dunne & Raby è critico e provocatorio: chiede "e se il mondo fosse diverso?" e usa oggetti per mettere in discussione assunzioni profonde. La design fiction di Bleecker è più operativa: chiede "come sarebbe questo futuro, concretamente?" e produce artefatti che lo rendono visibile e discutibile.',
            'La parola "fiction" è la chiave di volta. Non significa inventare storie false o fantascientifiche senza vincoli. Significa che stiamo costruendo mondi possibili — plausibili, coerenti, credibili — ma non reali. Questa distanza è liberatoria: ci permette di esplorare alternative senza il peso dell\'inevitabilità. Quando guardiamo un oggetto del futuro, sappiamo che non è ancora accaduto — e possiamo chiederci se lo vogliamo.',
            'Bleecker ha sviluppato strumenti concreti per questa pratica. Il più noto è il "Design Fiction Product Catalogue": un catalogo di prodotti — come quelli di IKEA — ma per oggetti del futuro. Sfogliare un catalogo del 2045 è un\'esperienza immersiva che rende il futuro tangibile in modo che un report non potrebbe mai fare.',
            'Noi di Relatronica usiamo la design fiction come ponte tra la teoria dello speculative design e l\'azione civica concreta. Non basta sapere che i futuri sono plasmabili — bisogna saperli rendere visibili, discutibili e, soprattutto, condivisibili con chi non ha mai sentito parlare di futures studies.',
          ],
          keyTakeaways: [
            'La design fiction nasce dallo speculative design ma si concentra sulla produzione di artefatti concreti',
            'Julian Bleecker del Near Future Laboratory ha coniato il termine nel 2009',
            'La "fiction" indica mondi possibili e plausibili, non fantascienza libera',
            'Gli artefatti rendono il futuro discutibile senza il peso dell\'inevitabilità',
          ],
          reflection: 'Pensa a un futuro che ti preoccupa (crisi climatica, sorveglianza digitale, disuguaglianza). Come lo descriveresti oggi — come report o come oggetto quotidiano che qualcuno userebbe in quel mondo?',
        },
        en: {
          title: 'From speculative design to design fiction',
          description: 'The distinction between Dunne & Raby and Bleecker, and why the word "fiction" changes how we imagine the future.',
          body: [
            'If you followed Module 02 of the Foundations path, you already know speculative design: Anthony Dunne and Fiona Raby\'s approach that uses design to ask uncomfortable questions about the possible world. Design fiction shares those roots, but takes a different path — more practical, more focused on producing concrete artefacts.',
            'Julian Bleecker, researcher and designer at the Near Future Laboratory, coined the term "Design Fiction" in 2009. His insight was simple but powerful: instead of presenting future scenarios as reports or PowerPoint presentations, why not create objects that seem to come from those futures? An instruction manual for a product that doesn\'t exist. A newspaper article from 2040. An advert for a future service.',
            'The distinction with Dunne & Raby is not a rivalry — it is a complementarity. Dunne & Raby\'s speculative design is critical and provocative: it asks "what if the world were different?" and uses objects to challenge deep assumptions. Bleecker\'s design fiction is more operational: it asks "what would this future look like, concretely?" and produces artefacts that make it visible and debatable.',
            'The word "fiction" is the keystone. It does not mean inventing false or unconstrained science fiction stories. It means we are building possible worlds — plausible, coherent, credible — but not real. This distance is liberating: it allows us to explore alternatives without the weight of inevitability. When we look at a future object, we know it has not happened yet — and we can ask ourselves whether we want it.',
            'Bleecker developed concrete tools for this practice. The best known is the "Design Fiction Product Catalogue": a product catalogue — like IKEA\'s — but for future objects. Browsing a 2045 catalogue is an immersive experience that makes the future tangible in a way a report never could.',
            'At Relatronica, we use design fiction as a bridge between speculative design theory and concrete civic action. It is not enough to know that futures are shapeable — we need to know how to make them visible, debatable and, above all, shareable with those who have never heard of futures studies.',
          ],
          keyTakeaways: [
            'Design fiction stems from speculative design but focuses on producing concrete artefacts',
            'Julian Bleecker of the Near Future Laboratory coined the term in 2009',
            '"Fiction" indicates possible and plausible worlds, not free-form science fiction',
            'Artefacts make the future debatable without the weight of inevitability',
          ],
          reflection: 'Think of a future that concerns you (climate crisis, digital surveillance, inequality). How would you describe it today — as a report or as an everyday object someone would use in that world?',
        },
      },
      resources: [
        { title: 'Julian Bleecker — Design Fiction: A Short Essay on Design, Science, Fact and Fiction', url: 'https://nearfuturelaboratory.com/2009/03/17/design-fiction-a-short-essay-on-design-science-fact-and-fiction/', type: 'article' },
        { title: 'Dunne & Raby — Speculative Everything', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
        { title: 'Near Future Laboratory', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
      ],
    },
    {
      slug: 'diegesi-raccontare-mondi',
      readingTime: 8,
      content: {
        it: {
          title: 'Diegesi: raccontare mondi senza narrarli',
          description: 'Il concetto cinematografico di diegesi applicato alla design fiction: show, don\'t tell.',
          body: [
            'Nel cinema, un oggetto è "diegetico" quando appartiene al mondo della storia. La spada laser di Star Wars esiste nel mondo del film — non nel nostro. Il poster sul muro del protagonista, la bottiglia sul tavolo, il telefono che usa: tutti elementi diegetici che costruiscono il mondo senza bisogno di spiegazioni.',
            'Julian Bleecker ha adattato questo concetto alla design fiction con il termine "prototipo diegetico": un oggetto progettato come se appartenesse a un mondo futuro. Non deve funzionare — deve essere credibile abbastanza da provocare una conversazione. Un badge di identità per cittadini "classe B". Un manuale per un dispositivo di monitoraggio ambientale domestico. Una ricevuta di un servizio di consegna droni.',
            'Il principio fondamentale è "show, don\'t tell" — mostra, non raccontare. Un report sul futuro della sorveglianza descrive tendenze, statistiche, scenari. Un badge diegetico mostra il futuro: il design, i colori, le informazioni richieste, il linguaggio usato. Chi lo guarda capisce immediatamente che tipo di mondo lo ha prodotto — senza leggere una parola di analisi.',
            'La diegesi funziona attraverso i dettagli. Un manuale d\'istruzioni del 2040 non dice "nel futuro la privacy non esiste più" — mostra un capitolo su come registrare i propri dati biometrici per accedere ai servizi pubblici. Un catalogo prodotti non dice "l\'economia circolare ha vinto" — mostra oggetti riparabili, modulari, con etichette sulla provenienza dei materiali.',
            'Questo approccio ha un vantaggio enorme in contesti civici e partecipativi. Quando presenti uno scenario come report, le persone diventano critici del documento — trovano errori, contestano le premesse, si annoiano. Quando presenti un artefatto diegetico, le persone diventano abitanti del mondo: "Io userei questo?", "Chi ha accesso a questo servizio?", "Cosa succede se perdo il badge?".',
            'Costruire diegesi richiede rigore. Ogni dettaglio dell\'artefatto — tipografia, colori, linguaggio, materiali — deve essere coerente con il mondo che stai immaginando. Un errore di coerenza rompe l\'immersione e riduce l\'artefatto a curiosità invece che a strumento di riflessione.',
          ],
          keyTakeaways: [
            'La diegesi è il mondo narrativo implicito che un artefatto evoca',
            'I prototipi diegetici mostrano il futuro senza descriverlo esplicitamente',
            'Il principio "show, don\'t tell" rende gli scenari più accessibili e discutibili',
            'Ogni dettaglio dell\'artefatto deve essere coerente con il mondo immaginato',
          ],
          reflection: 'Scegli un servizio pubblico che usi (sanità, trasporti, scuola). Immagina come sarebbe la "ricevuta" o il "badge" di quel servizio in un futuro dove la priorità è l\'equità. Cosa mostrerebbe, senza spiegarlo a parole?',
        },
        en: {
          title: 'Diegesis: telling worlds without narrating them',
          description: 'The cinematic concept of diegesis applied to design fiction: show, don\'t tell.',
          body: [
            'In cinema, an object is "diegetic" when it belongs to the world of the story. Star Wars\' lightsaber exists in the film\'s world — not ours. The poster on the protagonist\'s wall, the bottle on the table, the phone they use: all diegetic elements that build the world without needing explanations.',
            'Julian Bleecker adapted this concept to design fiction with the term "diegetic prototype": an object designed as if it belonged to a future world. It does not need to work — it needs to be credible enough to provoke a conversation. An ID badge for "Class B" citizens. A manual for a home environmental monitoring device. A receipt from a drone delivery service.',
            'The fundamental principle is "show, don\'t tell". A report on the future of surveillance describes trends, statistics, scenarios. A diegetic badge shows the future: the design, the colours, the information required, the language used. Whoever looks at it immediately understands what kind of world produced it — without reading a word of analysis.',
            'Diegesis works through details. A 2040 instruction manual does not say "in the future privacy no longer exists" — it shows a chapter on how to register your biometric data to access public services. A product catalogue does not say "the circular economy has won" — it shows repairable, modular objects with labels on material provenance.',
            'This approach has an enormous advantage in civic and participatory contexts. When you present a scenario as a report, people become critics of the document — they find errors, challenge the premises, get bored. When you present a diegetic artefact, people become inhabitants of the world: "Would I use this?", "Who has access to this service?", "What happens if I lose the badge?".',
            'Building diegesis requires rigour. Every detail of the artefact — typography, colours, language, materials — must be coherent with the world you are imagining. An incoherence breaks immersion and reduces the artefact to a curiosity instead of a tool for reflection.',
          ],
          keyTakeaways: [
            'Diegesis is the implicit narrative world that an artefact evokes',
            'Diegetic prototypes show the future without explicitly describing it',
            'The "show, don\'t tell" principle makes scenarios more accessible and debatable',
            'Every detail of the artefact must be coherent with the imagined world',
          ],
          reflection: 'Choose a public service you use (healthcare, transport, school). Imagine what the "receipt" or "badge" for that service would look like in a future where equity is the priority. What would it show, without explaining it in words?',
        },
      },
      resources: [
        { title: 'David Kirby — The Future is Now: Diegetic Prototypes', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0016718511000426', type: 'article' },
        { title: 'Near Future Laboratory — Design Fiction Make Tools', url: 'https://nearfuturelaboratory.com/design-fiction/', type: 'tool' },
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
      ],
    },
    {
      slug: 'laboratorio-come-metodo',
      readingTime: 7,
      content: {
        it: {
          title: 'Il laboratorio come metodo',
          description: 'Perché il formato workshop, l\'iterazione e il "pensare facendo" sono il cuore della design fiction.',
          body: [
            'La design fiction non è un esercizio solitario da scrivania. È una pratica di laboratorio — nel senso più ampio del termine: uno spazio dove si sperimenta, si sbaglia, si itera e si impara facendo. Questo corso si chiama "Design Fiction Lab" per una ragione precisa: il metodo è il laboratorio.',
            'Il formato workshop ha una logica profonda. Quando un gruppo di persone diverse — cittadini, designer, policy maker, attivisti — si riunisce per costruire artefatti del futuro, succede qualcosa che un report non può produrre: conflitto produttivo. Le visioni del futuro si scontrano, si arricchiscono, si correggono. Un pensionato e uno studente immagineranno mondi diversi — e il confronto renderà lo scenario più ricco e più realistico.',
            'L\'iterazione è altrettanto centrale. Il primo artefatto che produci sarà probabilmente superficiale — un oggetto "futuristico" generico che non dice molto. La seconda versione migliorerà la coerenza diegetica. La terza aggiungerà dettagli che aprono nuove domande. Questo processo — prototipare, testare, rifare — è identico al design thinking, ma applicato a mondi possibili invece che a prodotti.',
            'Il "pensare facendo" (thinking through making) è il principio che distingue la design fiction dalla futurologia tradizionale. Non puoi capire veramente un mondo futuro finché non provi a costruire qualcosa che vi appartiene. Quando disegni un badge di identità per il tuo scenario, scopri domande che non avevi considerato: chi lo rilascia? Cosa succede se lo perdi? Chi non può ottenerlo?',
            'Il laboratorio è anche democraticamente accessibile. Non servono budget enormi o competenze tecniche avanzate. Un workshop di design fiction si può fare con carta, penna, stampante e immaginazione. Ciò che serve è tempo, spazio e la disponibilità a fare domande scomode — risorse che molte comunità hanno già.',
            'Nei prossimi moduli metteremo questo metodo in pratica: costruiremo scenari, li renderemo diegetici e li confronteremo. Ma la premessa resta: la design fiction è qualcosa che si fa, non qualcosa che si legge.',
          ],
          keyTakeaways: [
            'La design fiction è una pratica di laboratorio: sperimentare, sbagliare, iterare',
            'Il workshop produce conflitto produttivo tra visioni diverse del futuro',
            'L\'iterazione trasforma artefatti superficiali in scenari coerenti e ricchi',
            'Il "pensare facendo" rivela domande che la scrittura da sola non produce',
          ],
          reflection: 'Pensa a un gruppo con cui potresti fare un mini-laboratorio di design fiction (colleghi, amici, comunità locale). Quale futuro concreto esplorereste insieme? Quale artefatto costruireste per renderlo discutibile?',
        },
        en: {
          title: 'The lab as method',
          description: 'Why the workshop format, iteration and "thinking by making" are the heart of design fiction.',
          body: [
            'Design fiction is not a solitary desk exercise. It is a lab practice — in the broadest sense: a space where you experiment, make mistakes, iterate and learn by doing. This course is called "Design Fiction Lab" for a precise reason: the method is the lab.',
            'The workshop format has a deep logic. When a diverse group — citizens, designers, policy makers, activists — gathers to build future artefacts, something happens that a report cannot produce: productive conflict. Visions of the future collide, enrich each other, get corrected. A retiree and a student will imagine different worlds — and the confrontation will make the scenario richer and more realistic.',
            'Iteration is equally central. The first artefact you produce will probably be superficial — a generic "futuristic" object that does not say much. The second version will improve diegetic coherence. The third will add details that open new questions. This process — prototype, test, redo — is identical to design thinking, but applied to possible worlds instead of products.',
            '"Thinking through making" is the principle that distinguishes design fiction from traditional futurology. You cannot truly understand a future world until you try to build something that belongs to it. When you design an ID badge for your scenario, you discover questions you had not considered: who issues it? What happens if you lose it? Who cannot obtain it?',
            'The lab is also democratically accessible. You do not need huge budgets or advanced technical skills. A design fiction workshop can be done with paper, pen, printer and imagination. What you need is time, space and the willingness to ask uncomfortable questions — resources many communities already have.',
            'In the following modules we will put this method into practice: we will build scenarios, make them diegetic and compare them. But the premise remains: design fiction is something you do, not something you read.',
          ],
          keyTakeaways: [
            'Design fiction is a lab practice: experiment, fail, iterate',
            'The workshop produces productive conflict between different visions of the future',
            'Iteration transforms superficial artefacts into coherent, rich scenarios',
            '"Thinking by making" reveals questions that writing alone does not produce',
          ],
          reflection: 'Think of a group with whom you could run a mini design fiction lab (colleagues, friends, local community). What concrete future would you explore together? What artefact would you build to make it debatable?',
        },
      },
      resources: [
        { title: 'Stuart Candy — The Futures of Everyday Life (Experiential Futures)', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
        { title: 'Near Future Laboratory — Workshop Templates', url: 'https://nearfuturelaboratory.com/workshop/', type: 'tool' },
        { title: 'Superflux — Design Studio', url: 'https://superflux.in/', type: 'tool' },
      ],
    },
  ],
};
