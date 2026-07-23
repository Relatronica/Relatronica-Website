import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz05: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Facilitare il laboratorio',
      description: 'Verifica la tua comprensione del Modulo 05: progettazione del workshop, esercizi pratici e casi studio di design fiction.',
    },
    en: {
      title: 'Quiz — Facilitating the lab',
      description: 'Test your understanding of Module 05: workshop design, practical exercises and design fiction case studies.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q05-01',
      content: {
        it: {
          question: 'Qual è il primo passo consigliato per progettare un Design Fiction Lab?',
          options: [
            'Scegliere subito gli artefatti da produrre',
            'Definire obiettivi, pubblico e domanda guida prima della struttura operativa',
            'Prenotare una sala grande e invitare il maggior numero possibile di partecipanti',
            'Acquistare materiali costosi per rendere l\'esperienza più professionale',
          ],
          explanation: 'Un laboratorio efficace parte da una domanda chiara e da obiettivi condivisi: cosa vogliamo esplorare, con chi e per quale decisione o conversazione. La struttura (durata, esercizi, output) deriva da lì — non il contrario.',
        },
        en: {
          question: 'What is the recommended first step when designing a Design Fiction Lab?',
          options: [
            'Immediately choose the artefacts to produce',
            'Define goals, audience and guiding question before the operational structure',
            'Book a large room and invite as many participants as possible',
            'Buy expensive materials to make the experience more professional',
          ],
          explanation: 'An effective lab starts from a clear question and shared goals: what we want to explore, with whom and for what decision or conversation. Structure (duration, exercises, outputs) follows from that — not the other way around.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q05-02',
      content: {
        it: {
          question: 'Cosa significa "signal scanning" in un workshop di design fiction?',
          options: [
            'Cercare segnali deboli nel presente — trend, tensioni, contraddizioni — che possono evolvere in futuri plausibili',
            'Scansionare documenti cartacei con uno scanner per creare un archivio digitale',
            'Monitorare i social media in tempo reale durante il workshop',
            'Analizzare solo dati statistici ufficiali senza contesto qualitativo',
          ],
          explanation: 'Il signal scanning è un esercizio di osservazione del presente: raccogliere segnali deboli (notizie, comportamenti, tecnologie emergenti, tensioni sociali) e usarli come materia prima per costruire scenari futuri credibili.',
        },
        en: {
          question: 'What does "signal scanning" mean in a design fiction workshop?',
          options: [
            'Looking for weak signals in the present — trends, tensions, contradictions — that may evolve into plausible futures',
            'Scanning paper documents with a scanner to create a digital archive',
            'Monitoring social media in real time during the workshop',
            'Analysing only official statistical data without qualitative context',
          ],
          explanation: 'Signal scanning is an exercise in observing the present: gathering weak signals (news, behaviours, emerging technologies, social tensions) and using them as raw material to build credible future scenarios.',
        },
      },
      correctAnswer: 0,
    },
    {
      id: 'df-q05-03',
      content: {
        it: {
          question: 'Qual è lo scopo di un "artefact brief" in un laboratorio pratico?',
          options: [
            'Scrivere un breve rapporto accademico da pubblicare dopo il workshop',
            'Definire in modo concreto un oggetto, servizio o documento del futuro: contesto, utente, valori e tensioni',
            'Creare un elenco di materiali da acquistare per il prototipo fisico',
            'Redigere un contratto legale tra i partecipanti',
          ],
          explanation: 'L\'artefact brief traduce uno scenario in un compito progettuale: chi usa l\'artefatto, in quale mondo esiste, quale problema risolve o quale tensione rivela. È il ponte tra immaginazione e produzione di un oggetto diegetico.',
        },
        en: {
          question: 'What is the purpose of an "artefact brief" in a hands-on lab?',
          options: [
            'Writing a short academic report to publish after the workshop',
            'Concretely defining a future object, service or document: context, user, values and tensions',
            'Creating a shopping list of materials for a physical prototype',
            'Drafting a legal contract between participants',
          ],
          explanation: 'The artefact brief translates a scenario into a design task: who uses the artefact, in which world it exists, what problem it solves or what tension it reveals. It is the bridge between imagination and producing a diegetic object.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q05-04',
      content: {
        it: {
          question: 'Cosa distingue l\'installazione "Mitigation of Shock" di Superflux?',
          options: [
            'È una fantascienza pura senza legame con il presente',
            'Trasforma uno scenario climatico plausibile in un appartamento esperibile, rendendo il futuro tangibile e discutibile',
            'È un catalogo digitale di prodotti immaginari senza componente spaziale',
            'È un esercizio di role-play testuale senza oggetti fisici',
          ],
          explanation: 'Mitigation of Shock di Superflux (2015) è un appartamento londinese adattato a una crisi climatica plausibile: mobili rialzati, coltivazione domestica, luce artificiale. Non descrive il futuro — lo fa abitare, provocando riflessione attraverso l\'esperienza.',
        },
        en: {
          question: 'What distinguishes Superflux\'s "Mitigation of Shock" installation?',
          options: [
            'It is pure science fiction with no connection to the present',
            'It turns a plausible climate scenario into a livable flat, making the future tangible and debatable',
            'It is a digital catalogue of imaginary products with no spatial component',
            'It is a text-based role-play exercise with no physical objects',
          ],
          explanation: 'Superflux\'s Mitigation of Shock (2015) is a London flat adapted to a plausible climate crisis: raised furniture, domestic cultivation, artificial light. It does not describe the future — it makes you inhabit it, provoking reflection through experience.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q05-05',
      content: {
        it: {
          question: 'Perché il role-play è utile in un Design Fiction Lab?',
          options: [
            'Per intrattenere i partecipanti quando finiscono le idee',
            'Per far vivere agli partecipanti il mondo del futuro immaginato, attivando empatia e conversazioni più profonde',
            'Per sostituire completamente la creazione di artefatti materiali',
            'Per simulare un processo di vendita commerciale',
          ],
          explanation: 'Il role-play — come negli Experiential Futures di Stuart Candy — permette di "abitare" uno scenario: assumere ruoli, prendere decisioni, incontrare tensioni. Quando il futuro lo vivi, le conversazioni diventano più concrete e le implicazioni più visibili.',
        },
        en: {
          question: 'Why is role-play useful in a Design Fiction Lab?',
          options: [
            'To entertain participants when they run out of ideas',
            'To let participants live in the imagined future world, activating empathy and deeper conversations',
            'To completely replace the creation of material artefacts',
            'To simulate a commercial sales process',
          ],
          explanation: 'Role-play — as in Stuart Candy\'s Experiential Futures — lets you "inhabit" a scenario: take on roles, make decisions, encounter tensions. When you experience the future, conversations become more concrete and implications more visible.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule05: CourseModule = {
  slug: 'facilitare-il-laboratorio',
  number: '05',
  color: 'indigo',
  iconName: 'Users',
  content: {
    it: {
      title: 'Facilitare il laboratorio',
      description: 'Come progettare e condurre un workshop di Design Fiction Lab: struttura, esercizi guidati, toolkit e casi studio per facilitatori.',
    },
    en: {
      title: 'Facilitating the lab',
      description: 'How to design and run a Design Fiction Lab workshop: structure, guided exercises, toolkit and case studies for facilitators.',
    },
  },
  quiz: quiz05,
  lessons: [
    {
      slug: 'progettare-un-design-fiction-lab',
      readingTime: 8,
      content: {
        it: {
          title: 'Progettare un Design Fiction Lab',
          description: 'Struttura, durata, partecipanti e obiettivi: come costruire un workshop che produce conversazioni utili, non solo artefatti.',
          body: [
            'Un Design Fiction Lab non è una lezione frontale né una sessione di brainstorming libero. È un laboratorio strutturato in cui le persone esplorano futuri plausibili attraverso artefatti, scenari ed esperienze condivise. La facilitazione fa la differenza tra un workshop che genera insight e uno che produce post-it dimenticati.',
            'Il punto di partenza è sempre una domanda guida: non "immaginiamo il futuro" in astratto, ma "come potrebbe cambiare la cura della salute se l\'AI diventasse obbligatoria?" o "cosa succede a una città costiera quando le alluvioni diventano routine?". La domanda definisce il tema, il tono e il tipo di output atteso.',
            'La durata influisce profondamente su cosa è realistico ottenere. Un lab di mezza giornata (3–4 ore) può coprire signal scanning, world-building leggero e un artefact brief con bozze rapide. Un lab di una giornata intera permette di produrre cataloghi, prototipi diegetici o scenari role-play. Un percorso di più sessioni consente di passare dall\'esplorazione all\'azione concreta — utile in contesti istituzionali o comunitari.',
            'I partecipanti contano quanto la struttura. Un lab con cittadini, policy maker e designer produce conversazioni diverse da uno solo accademico. Cerca mix di prospettive ma evita gruppi troppo grandi: 8–15 persone è l\'ideale per discussioni profonde; oltre, serve dividere in sottogruppi con facilitatori dedicati. Chi partecipa deve sentirsi autorizzato a immaginare — non solo a valutare idee altrui.',
            'Ogni lab ha bisogno di un arco narrativo chiaro: apertura (perché siamo qui, cosa faremo), esplorazione (esercizi guidati), convergenza (sintesi e riflessione), chiusura (prossimi passi). L\'apertura stabilisce il contratto: qui si fanno domande scomode, si rispettano le prospettive altrui, si esce con qualcosa di concreto da portare avanti.',
            'Infine, definisci cosa successo significa: un catalogo condiviso? Tre prototipi diegetici? Un documento di policy? Obiettivi vaghi producono output vaghi. Un buon Design Fiction Lab termina con artefatti che continuano a "parlare" dopo la sessione — e con partecipanti che sanno cosa fare con ciò che hanno imparato.',
          ],
          keyTakeaways: [
            'Parti da una domanda guida specifica, non da un generico "futuro"',
            'Adatta durata e struttura agli obiettivi: mezza giornata per esplorazione, più sessioni per azione',
            '8–15 partecipanti con prospettive miste è l\'ideale per conversazioni profonde',
            'Definisci in anticipo gli output attesi e l\'arco narrativo del workshop',
          ],
          reflection: 'Immagina di facilitare un lab nel tuo contesto (lavoro, comunità, scuola). Quale domanda guida useresti? Chi inviteresti? Cosa vorresti che i partecipanti portassero a casa?',
        },
        en: {
          title: 'Designing a Design Fiction Lab',
          description: 'Structure, duration, participants and goals: how to build a workshop that produces useful conversations, not just artefacts.',
          body: [
            'A Design Fiction Lab is neither a lecture nor a free brainstorming session. It is a structured lab where people explore plausible futures through artefacts, scenarios and shared experiences. Facilitation makes the difference between a workshop that generates insight and one that produces forgotten post-its.',
            'The starting point is always a guiding question: not "let\'s imagine the future" in the abstract, but "how might healthcare change if AI became mandatory?" or "what happens to a coastal city when flooding becomes routine?". The question defines the theme, tone and type of output expected.',
            'Duration profoundly affects what is realistic to achieve. A half-day lab (3–4 hours) can cover signal scanning, light world-building and an artefact brief with quick drafts. A full-day lab allows producing catalogues, diegetic prototypes or role-play scenarios. A multi-session path enables moving from exploration to concrete action — useful in institutional or community contexts.',
            'Participants matter as much as structure. A lab with citizens, policymakers and designers produces different conversations from an academic-only one. Seek mixed perspectives but avoid groups that are too large: 8–15 people is ideal for deep discussion; beyond that, split into subgroups with dedicated facilitators. Participants must feel authorised to imagine — not just to evaluate others\' ideas.',
            'Every lab needs a clear narrative arc: opening (why we are here, what we will do), exploration (guided exercises), convergence (synthesis and reflection), closing (next steps). The opening establishes the contract: here we ask uncomfortable questions, respect others\' perspectives, leave with something concrete to carry forward.',
            'Finally, define what success means: a shared catalogue? Three diegetic prototypes? A policy document? Vague goals produce vague outputs. A good Design Fiction Lab ends with artefacts that keep "speaking" after the session — and with participants who know what to do with what they have learned.',
          ],
          keyTakeaways: [
            'Start from a specific guiding question, not a generic "future"',
            'Adapt duration and structure to goals: half-day for exploration, multiple sessions for action',
            '8–15 participants with mixed perspectives is ideal for deep conversations',
            'Define expected outputs and the workshop narrative arc in advance',
          ],
          reflection: 'Imagine facilitating a lab in your context (work, community, school). What guiding question would you use? Who would you invite? What would you want participants to take home?',
        },
      },
      resources: [
        { title: 'Near Future Laboratory — Design Fiction', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
        { title: 'Stuart Candy — The Futures School', url: 'https://futuryst.com/', type: 'article' },
        { title: 'IDEO — Design Kit: Facilitation', url: 'https://designkit.org/methods', type: 'article' },
      ],
    },
    {
      slug: 'esercizi-guidati-e-toolkit',
      readingTime: 9,
      content: {
        it: {
          title: 'Esercizi guidati e toolkit',
          description: 'Signal scanning, artefact brief, catalogue page e role-play: quattro esercizi pratici per animare un laboratorio di design fiction.',
          body: [
            'Un toolkit efficace non è una lista di tecniche da accumulare — è una sequenza di esercizi che si costruiscono l\'uno sull\'altro. Ogni esercizio ha un obiettivo preciso e un output tangibile. Ecco quattro pilastri che usiamo spesso nei laboratori Relatronica.',
            'Signal scanning: distribuisci ai partecipanti articoli, headline, foto, dati o osservazioni dal presente. Chiedi di individuare "segnali deboli" — fenomeni marginali oggi che potrebbero diventare dominanti domani. Un esempio: la crescente normalizzazione del lavoro da remoto, le restrizioni sull\'acqua in città siccitose, l\'uso di AI per moderare i contenuti. Raggruppa i segnali per tema e chiedi: "Se questo trend accelerasse, quale mondo plausibile emergerebbe?".',
            'Artefact brief: una volta scelto uno scenario, traducilo in un compito progettuale. Il brief risponde a: chi usa l\'artefatto? In quale anno o contesto esiste? Quale problema risolve o quale tensione rivela? Quale valore o norma del mondo futuro incarna? Esempio: "Manuale d\'uso del Passaporto Climatico, 2038 — documento che ogni cittadino deve presentare per viaggiare, con punteggio basato sull\'impronta carbonica". Il brief guida la produzione senza limitare la creatività.',
            'Catalogue page: ispirato al Design Fiction Product Catalogue di Julian Bleecker (Near Future Laboratory), chiedi ai gruppi di creare una pagina di catalogo — come IKEA, ma per un prodotto del futuro. Include nome, descrizione, prezzo (se pertinente), immagine o schizzo, e una frase che rivela il mondo in cui esiste. Sfogliare un catalogo del 2045 rende il futuro familiare e discutibile: "Lo compreresti? Lo vorresti? Chi ne resterebbe escluso?".',
            'Role-play: trasforma lo scenario in una scena breve. I partecipanti assumono ruoli (cittadino, funzionario, imprenditore, attivista) e agiscono in un momento di tensione del futuro immaginato. Stuart Candy chiama questo "experiential futures": il futuro non si presenta, si vive. Dopo 10–15 minuti di role-play, debrief: cosa è emerso? Quali assunzioni sono state messe in discussione? Cosa sorprende?',
            'Materiali minimi, massimo impatto: carta, penne, post-it, stampa di template (brief, catalogo, scheda segnale). Tempo per ogni esercizio: 20–45 minuti a seconda della profondità. La facilitazione consiste nel tenere il ritmo, fare domande provocatorie e impedire che il gruppo resti nell\'astrazione.',
            'Combina gli esercizi in sequenza: signal scanning → world-building leggero → artefact brief → catalogue page o role-play. L\'output finale può essere esposto, condiviso online o usato come input per decisioni reali — il lab non finisce quando finisce la sessione.',
          ],
          keyTakeaways: [
            'Signal scanning raccoglie segnali deboli dal presente come materia prima per scenari',
            'L\'artefact brief traduce uno scenario in un compito progettuale concreto',
            'La catalogue page rende il futuro tangibile e familiare, come un prodotto acquistabile',
            'Il role-play attiva empatia e conversazioni profonde attraverso l\'esperienza diretta',
          ],
          reflection: 'Scegli un tema che ti interessa (clima, lavoro, salute, città). Prova a scrivere un artefact brief in cinque righe. Poi immagina come sarebbe la pagina di catalogo di quell\'oggetto.',
        },
        en: {
          title: 'Guided exercises and toolkit',
          description: 'Signal scanning, artefact brief, catalogue page and role-play: four practical exercises to animate a design fiction lab.',
          body: [
            'An effective toolkit is not a list of techniques to accumulate — it is a sequence of exercises that build on each other. Each exercise has a precise goal and a tangible output. Here are four pillars we often use in Relatronica labs.',
            'Signal scanning: give participants articles, headlines, photos, data or observations from the present. Ask them to identify "weak signals" — marginal phenomena today that could become dominant tomorrow. An example: the growing normalisation of remote work, water restrictions in drought-stricken cities, the use of AI to moderate content. Group signals by theme and ask: "If this trend accelerated, what plausible world would emerge?".',
            'Artefact brief: once a scenario is chosen, translate it into a design task. The brief answers: who uses the artefact? In which year or context does it exist? What problem does it solve or what tension does it reveal? What value or norm of the future world does it embody? Example: "User manual for the Climate Passport, 2038 — document every citizen must present to travel, with a score based on carbon footprint". The brief guides production without limiting creativity.',
            'Catalogue page: inspired by Julian Bleecker\'s Design Fiction Product Catalogue (Near Future Laboratory), ask groups to create a catalogue page — like IKEA\'s, but for a future product. Include name, description, price (if relevant), image or sketch, and a sentence that reveals the world it exists in. Browsing a 2045 catalogue makes the future familiar and debatable: "Would you buy it? Would you want it? Who would be excluded?".',
            'Role-play: turn the scenario into a short scene. Participants take roles (citizen, official, entrepreneur, activist) and act in a moment of tension from the imagined future. Stuart Candy calls this "experiential futures": the future is not presented, it is lived. After 10–15 minutes of role-play, debrief: what emerged? What assumptions were challenged? What surprised you?',
            'Minimal materials, maximum impact: paper, pens, post-its, printed templates (brief, catalogue, signal card). Time per exercise: 20–45 minutes depending on depth. Facilitation means keeping pace, asking provocative questions and preventing the group from staying in abstraction.',
            'Combine exercises in sequence: signal scanning → light world-building → artefact brief → catalogue page or role-play. The final output can be exhibited, shared online or used as input for real decisions — the lab does not end when the session ends.',
          ],
          keyTakeaways: [
            'Signal scanning gathers weak signals from the present as raw material for scenarios',
            'The artefact brief translates a scenario into a concrete design task',
            'The catalogue page makes the future tangible and familiar, like a purchasable product',
            'Role-play activates empathy and deep conversations through direct experience',
          ],
          reflection: 'Choose a theme that interests you (climate, work, health, city). Try writing an artefact brief in five lines. Then imagine what the catalogue page for that object would look like.',
        },
      },
      resources: [
        { title: 'Julian Bleecker — Design Fiction Product Catalogue', url: 'https://dfrlab.org/', type: 'tool' },
        { title: 'Stuart Candy — Experiential Futures', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
        { title: 'Near Future Laboratory — Workshop Methods', url: 'https://nearfuturelaboratory.com/', type: 'article' },
      ],
    },
    {
      slug: 'casi-studio-pratiche',
      readingTime: 8,
      content: {
        it: {
          title: 'Casi studio e pratiche',
          description: 'Near Future Laboratory, Superflux, Dunne & Raby e Stuart Candy: quattro riferimenti per imparare da chi ha trasformato la design fiction in pratica.',
          body: [
            'Imparare a facilitare un lab significa anche studiare chi ha fatto questo lavoro prima di noi. Quattro pratiche — molto diverse tra loro — offrono modelli concreti per strutturare workshop, creare artefatti e generare conversazioni pubbliche.',
            'Near Future Laboratory (Julian Bleecker): pioniere del termine "design fiction", Bleecker ha sviluppato strumenti accessibili come il Design Fiction Product Catalogue e il TBD Catalog. La sua pratica dimostra che non servono budget enormi: un catalogo stampato, un manuale d\'istruzioni fittizio, un articolo di giornale dal futuro possono essere sufficienti. Il Near Future Laboratory pubblica metodi aperti e incoraggia la sperimentazione — un modello per chi vuole iniziare con poco.',
            'Superflux — Mitigation of Shock (2015): lo studio indiano-britannico Superflux ha creato un\'installazione iconica: un appartamento londinese adattato a una crisi climatica plausibile. Mobili rialzati per le inondazioni, piante coltivate sui muri, lampade UV al posto della luce naturale. Non era fantascienza: era un futuro credibile reso abitabile. I visitatori uscivano turbati — e pronti a discutere. Mitigation of Shock mostra come il design fiction possa essere spaziale, emotivo e politicamente efficace.',
            'Dunne & Raby: Anthony Dunne e Fiona Raby al Royal College of Art hanno definito lo Speculative Design con opere come "Foragers" (utensili per una società post-scarsità alimentare) e "Technological Dream Series". Il loro approccio privilegia oggetti che mettono in discussione assunzioni — non soluzioni. Per un lab, il loro lavoro insegna a progettare artefatti che provocano domande piuttosto che risposte, e a usare estetica e materialità per rendere visibili tensioni etiche.',
            'Stuart Candy — Experiential Futures: ricercatore e facilitatore, Candy ha sviluppato metodi per "abitare" i futuri: giochi di ruolo, installazioni immersive, scenari performativi. Il suo framework distingue tra futuri presentati (report, slide) e futuri esperiti (role-play, ambienti). Per chi facilita lab, Candy offre strumenti concreti: come strutturare un debrief, come bilanciare provocazione e sicurezza emotiva, come collegare l\'esperienza all\'azione.',
            'Cosa hanno in comune? Tutti e quattro credono che il futuro non sia qualcosa da prevedere ma da esplorare — e che l\'esplorazione richieda artefatti, non solo parole. Studiare questi casi aiuta a calibrare le aspettative del tuo lab: non devi replicare Mitigation of Shock, ma puoi imparare da come Superflux ha reso tangibile un scenario complesso.',
            'Usa questi riferimenti come ispirazione, non come vincoli. Un lab in una biblioteca civica avrà risorse diverse da uno in un museo o in un\'agenzia governativa. L\'importante è mantenere la qualità della conversazione: futuri plausibili, domande aperte, spazio per la voce di chi partecipa.',
          ],
          keyTakeaways: [
            'Near Future Laboratory dimostra che design fiction accessibile richiede pochi materiali e molta immaginazione',
            'Mitigation of Shock di Superflux rende uno scenario climatico abitabile ed emotivamente potente',
            'Dunne & Raby insegnano a progettare artefatti che provocano domande, non risposte',
            'Stuart Candy offre metodi per futuri esperiti: role-play, installazioni, debrief strutturati',
          ],
          reflection: 'Quale di questi quattro casi studio ti ispira di più per un lab nel tuo contesto? Cosa potresti adattare — e cosa no — alle risorse e al pubblico che hai?',
        },
        en: {
          title: 'Case studies and practices',
          description: 'Near Future Laboratory, Superflux, Dunne & Raby and Stuart Candy: four references for learning from those who turned design fiction into practice.',
          body: [
            'Learning to facilitate a lab also means studying those who did this work before us. Four practices — very different from each other — offer concrete models for structuring workshops, creating artefacts and generating public conversations.',
            'Near Future Laboratory (Julian Bleecker): pioneer of the term "design fiction", Bleecker developed accessible tools like the Design Fiction Product Catalogue and the TBD Catalog. His practice shows that huge budgets are not needed: a printed catalogue, a fictional instruction manual, a newspaper article from the future can be enough. Near Future Laboratory publishes open methods and encourages experimentation — a model for those who want to start with little.',
            'Superflux — Mitigation of Shock (2015): the Indian-British studio Superflux created an iconic installation: a London flat adapted to a plausible climate crisis. Furniture raised for flooding, plants grown on walls, UV lamps instead of natural light. It was not science fiction: it was a credible future made habitable. Visitors left disturbed — and ready to discuss. Mitigation of Shock shows how design fiction can be spatial, emotional and politically effective.',
            'Dunne & Raby: Anthony Dunne and Fiona Raby at the Royal College of Art defined Speculative Design with works like "Foragers" (utensils for a post-scarcity food society) and "Technological Dream Series". Their approach favours objects that challenge assumptions — not solutions. For a lab, their work teaches designing artefacts that provoke questions rather than answers, and using aesthetics and materiality to make ethical tensions visible.',
            'Stuart Candy — Experiential Futures: researcher and facilitator, Candy developed methods for "inhabiting" futures: role-playing games, immersive installations, performative scenarios. His framework distinguishes between presented futures (reports, slides) and experienced futures (role-play, environments). For those facilitating labs, Candy offers concrete tools: how to structure a debrief, how to balance provocation and emotional safety, how to connect experience to action.',
            'What do they have in common? All four believe the future is not something to predict but to explore — and that exploration requires artefacts, not just words. Studying these cases helps calibrate your lab\'s expectations: you need not replicate Mitigation of Shock, but you can learn from how Superflux made a complex scenario tangible.',
            'Use these references as inspiration, not constraints. A lab in a civic library will have different resources from one in a museum or government agency. What matters is maintaining conversation quality: plausible futures, open questions, space for participants\' voices.',
          ],
          keyTakeaways: [
            'Near Future Laboratory shows that accessible design fiction needs few materials and much imagination',
            'Superflux\'s Mitigation of Shock makes a climate scenario habitable and emotionally powerful',
            'Dunne & Raby teach designing artefacts that provoke questions, not answers',
            'Stuart Candy offers methods for experienced futures: role-play, installations, structured debriefs',
          ],
          reflection: 'Which of these four case studies inspires you most for a lab in your context? What could you adapt — and what not — to the resources and audience you have?',
        },
      },
      resources: [
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
        { title: 'Dunne & Raby — Speculative Everything', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
        { title: 'Stuart Candy — The Situational Futures Toolkit', url: 'https://futuryst.com/situational-futures-toolkit/', type: 'tool' },
      ],
    },
  ],
};
