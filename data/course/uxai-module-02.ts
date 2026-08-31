import { CourseModule, ModuleQuiz, ModuleExercise } from '@/types/course';

const exercise02: ModuleExercise = {
  content: {
    it: {
      title: 'Redesign di disclosure e controllo',
      description: 'Prendi una feature AI reale o ipotetica e ridisegna trasparenza, opt-in e override umano — come se dovessi presentarla al team domani.',
      duration: '45–60 min',
      materials: [
        'Figma, FigJam, carta o qualsiasi tool di sketching',
        'Screenshot di un\'app con feature AI (chatbot, raccomandazioni, generazione contenuti)',
        'Template: schermata attuale + schermata proposta',
      ],
      steps: [
        'Scegli una feature AI: un chatbot, suggerimenti personalizzati, riassunto automatico, filtro "intelligente". Può essere del tuo prodotto o di un\'app che usi (es. e-commerce, banca, salute).',
        'Documenta lo stato attuale: l\'utente sa che c\'è AI? Può disattivarla? C\'è un percorso umano? Annota ogni gap con uno screenshot annotato.',
        'Ridisegna tre momenti chiave: (1) Disclosure al primo uso — cosa dice, dove appare, tono; (2) Opt-in/opt-out — toggle granulare, linguaggio chiaro; (3) Override umano — pulsante visibile, tempi di risposta indicati, conferma ricezione.',
        'Aggiungi uno stato di errore: cosa vede l\'utente quando l\'AI sbaglia o allucina? Include possibilità di segnalare e correggere.',
        'Scrivi 3 bullet per presentare il redesign al PM: problema attuale, soluzione proposta, impatto su fiducia/compliance.',
      ],
      output: 'Before/after sketch (anche low-fi) con disclosure, controllo, override ed error state — più 3 bullet per stakeholder.',
      debrief: 'Quale elemento del redesign è stato più difficile? Cosa sacrifica il team se implementa tutto? Quale singolo miglioramento chiederesti come quick win?',
    },
    en: {
      title: 'Disclosure and control redesign',
      description: 'Take a real or hypothetical AI feature and redesign transparency, opt-in and human override — as if you had to present it to the team tomorrow.',
      duration: '45–60 min',
      materials: [
        'Figma, FigJam, paper or any sketching tool',
        'Screenshot of an app with AI features (chatbot, recommendations, content generation)',
        'Template: current screen + proposed screen',
      ],
      steps: [
        'Choose an AI feature: a chatbot, personalised suggestions, automatic summary, "smart" filter. It can be from your product or an app you use (e.g. e-commerce, bank, healthcare).',
        'Document the current state: does the user know there is AI? Can they disable it? Is there a human path? Note every gap with an annotated screenshot.',
        'Redesign three key moments: (1) Disclosure on first use — what it says, where it appears, tone; (2) Opt-in/opt-out — granular toggle, clear language; (3) Human override — visible button, indicated response times, receipt confirmation.',
        'Add an error state: what does the user see when AI gets it wrong or hallucinates? Include ability to report and correct.',
        'Write 3 bullets to present the redesign to the PM: current problem, proposed solution, impact on trust/compliance.',
      ],
      output: 'Before/after sketch (even low-fi) with disclosure, control, override and error state — plus 3 bullets for stakeholders.',
      debrief: 'Which redesign element was hardest? What does the team sacrifice if it implements everything? Which single improvement would you ask for as a quick win?',
    },
  },
};

const quiz02: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Etica dell\'interfaccia',
      description: 'Verifica la tua comprensione del Modulo 02: trasparenza, consenso e controllo, dark patterns potenziati dall\'IA.',
    },
    en: {
      title: 'Quiz — Interface ethics',
      description: 'Test your understanding of Module 02: transparency, consent and control, AI-powered dark patterns.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'uxai-q02-01',
      content: {
        it: {
          question: 'Perché la trasparenza ("disclosure") è importante nelle interfacce AI?',
          options: [
            'Perché la legge richiede sempre di mostrare il codice sorgente',
            'Perché gli utenti devono capire quando un output è generato o influenzato da AI per valutarlo criticamente',
            'Perché rende l\'interfaccia più bella',
            'Perché riduce i costi di sviluppo',
          ],
          explanation: 'Senza sapere che un contenuto è AI-generated o che una raccomandazione è algoritmica, l\'utente non può calibrare la propria fiducia, verificare le fonti o esercitare scelta consapevole.',
        },
        en: {
          question: 'Why is transparency ("disclosure") important in AI interfaces?',
          options: [
            'Because the law always requires showing source code',
            'Because users need to understand when output is generated or influenced by AI to evaluate it critically',
            'Because it makes the interface more beautiful',
            'Because it reduces development costs',
          ],
          explanation: 'Without knowing that content is AI-generated or that a recommendation is algorithmic, the user cannot calibrate their trust, verify sources or exercise informed choice.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q02-02',
      content: {
        it: {
          question: 'Quale pattern di design supporta meglio l\'autonomia dell\'utente?',
          options: [
            'Personalizzazione opaca che modifica prezzi senza spiegazione',
            'Opt-in esplicito per funzionalità AI con spiegazione chiara di cosa fa e quali dati usa',
            'Default attivo per tutte le feature AI, con opt-out nascosto nelle impostazioni avanzate',
            'Rimozione di tutti i controlli per semplificare l\'interfaccia',
          ],
          explanation: 'Opt-in esplicito, linguaggio chiaro e controllo granulare rispettano l\'autonomia. Default attivi e opt-out nascosti sono tecniche manipolatorie, amplificate quando l\'IA rende la personalizzazione invisibile.',
        },
        en: {
          question: 'Which design pattern best supports user autonomy?',
          options: [
            'Opaque personalisation that changes prices without explanation',
            'Explicit opt-in for AI features with clear explanation of what it does and what data it uses',
            'Active default for all AI features, with opt-out hidden in advanced settings',
            'Removing all controls to simplify the interface',
          ],
          explanation: 'Explicit opt-in, clear language and granular control respect autonomy. Active defaults and hidden opt-outs are manipulative techniques, amplified when AI makes personalisation invisible.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q02-03',
      content: {
        it: {
          question: 'Cos\'è un "dark pattern" potenziato dall\'IA?',
          options: [
            'Un tema scuro per ridurre l\'affaticamento visivo',
            'Un pattern manipolatorio reso più efficace da personalizzazione algoritmica che sfrutta vulnerabilità individuali',
            'Un errore di contrasto WCAG',
            'Un algoritmo che funziona solo di notte',
          ],
          explanation: 'L\'IA può rendere i dark patterns più insidiosi: urgency personalizzata, prezzi dinamici opachi, nudging calibrato su profili psicografici. Il designer deve riconoscere e rifiutare questi pattern.',
        },
        en: {
          question: 'What is an AI-powered "dark pattern"?',
          options: [
            'A dark theme to reduce eye strain',
            'A manipulative pattern made more effective by algorithmic personalisation that exploits individual vulnerabilities',
            'A WCAG contrast error',
            'An algorithm that only works at night',
          ],
          explanation: 'AI can make dark patterns more insidious: personalised urgency, opaque dynamic pricing, nudging calibrated on psychographic profiles. The designer must recognise and refuse these patterns.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q02-04',
      content: {
        it: {
          question: 'Cosa significa progettare per "explainability" in UX?',
          options: [
            'Mostrare sempre la formula matematica del modello',
            'Comunicare in linguaggio umano perché un sistema ha prodotto un certo risultato o suggerimento',
            'Eliminare ogni automatismo dall\'interfaccia',
            'Chiedere all\'utente di leggere la privacy policy completa',
          ],
          explanation: 'Explainability in UX non è trasparenza tecnica — è comunicazione comprensibile: "Ti suggeriamo X perché hai indicato Y", con possibilità di correggere o disattivare. L\'obiettivo è fiducia calibrata, non fiducia cieca.',
        },
        en: {
          question: 'What does designing for "explainability" mean in UX?',
          options: [
            'Always showing the model\'s mathematical formula',
            'Communicating in human language why a system produced a certain result or suggestion',
            'Removing all automation from the interface',
            'Asking the user to read the full privacy policy',
          ],
          explanation: 'Explainability in UX is not technical transparency — it is understandable communication: "We suggest X because you indicated Y", with the ability to correct or disable. The goal is calibrated trust, not blind trust.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q02-05',
      content: {
        it: {
          question: 'Quale principio guida il design di un override umano efficace?',
          options: [
            'Renderlo difficile da trovare per non disturbare l\'automazione',
            'Renderlo visibile, accessibile e con tempi di risposta prevedibili',
            'Limitarlo ai soli utenti premium',
            'Sostituirlo con un chatbot che simula un operatore',
          ],
          explanation: 'Un override umano che richiede 15 click, tempi di attesa imprevedibili o è disponibile solo per alcuni utenti non è un vero ricorso — è una simulazione di controllo.',
        },
        en: {
          question: 'Which principle guides the design of an effective human override?',
          options: [
            'Make it hard to find so as not to disturb automation',
            'Make it visible, accessible and with predictable response times',
            'Limit it to premium users only',
            'Replace it with a chatbot that simulates an operator',
          ],
          explanation: 'A human override that requires 15 clicks, unpredictable wait times or is only available to some users is not real recourse — it is a simulation of control.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const uxaiModule02: CourseModule = {
  slug: 'etica-dell-interfaccia',
  number: '02',
  color: 'rose',
  iconName: 'Eye',
  content: {
    it: {
      title: 'Etica dell\'interfaccia',
      description: 'Trasparenza algoritmica, consenso informato, controllo utente e dark patterns potenziati dall\'IA — le scelte UX che plasmano fiducia e autonomia.',
    },
    en: {
      title: 'Interface ethics',
      description: 'Algorithmic transparency, informed consent, user control and AI-powered dark patterns — the UX choices that shape trust and autonomy.',
    },
  },
  quiz: quiz02,
  exercise: exercise02,
  lessons: [
    {
      slug: 'trasparenza-e-disclosure',
      readingTime: 8,
      content: {
        it: {
          title: 'Trasparenza e disclosure',
          description: 'Quando e come dire all\'utente che c\'è AI dietro — senza spaventarlo né ingannarlo.',
          body: [
            'La prima regola etica per un\'interfaccia AI è onestà: l\'utente deve sapere quando interagisce con un sistema automatizzato, quando un contenuto è generato e quando una scelta è influenzata da un algoritmo. Non è pedanteria legale — è rispetto per l\'autonomia decisionale.',
            'La disclosure efficace è contestuale, non burocratica. Un badge generico "AI" in footer non basta. Meglio: "Questo riassunto è generato automaticamente — verifica le fonti", "Il prezzo mostrato è personalizzato in base al tuo profilo", "Stai parlando con un assistente AI, non un operatore umano".',
            'Il tono conta. Disclosure paurose ("Attenzione: intelligenza artificiale!") creano ansia inutile. Disclosure assenti o nascoste creano fiducia incalibrata — l\'utente tratta un output AI come verità umana o esperto. Il designer cerca equilibrio: chiarezza senza allarmismo.',
            'La trasparenza include anche i limiti. Chatbot sanitari, legali o finanziari devono comunicare cosa non possono fare: "Non sono un medico", "Non sostituisco una consulenza legale". I limiti ben progettati riducono danni da over-reliance — quando l\'utente si affida eccessivamente a un sistema inadeguato.',
            'Casi come il chatbot di Air Canada (2024), che ha inventato una policy sui biglietti e la compagnia ha tentato di non riconoscerla, mostrano cosa succede quando disclosure e limiti sono assenti. L\'interfaccia ha dato autorità a un output allucinato. Progettare per il worst case non è pessimismo — è due diligence.',
            'Checklist pratica: ogni feature AI nel tuo prodotto dovrebbe rispondere a — L\'utente sa che c\'è AI? Sa cosa fa? Sa cosa non fa? Può disattivarla? Può segnalare errori? Se una risposta manca, c\'è un gap di design da colmare.',
          ],
          keyTakeaways: [
            'La disclosure deve essere contestuale e in linguaggio umano',
            'Comunicare i limiti dell\'AI riduce over-reliance e danni',
            'Badge generici "AI-powered" spesso non bastano — servono spiegazioni specifiche',
            'Progettare per il worst case (allucinazioni, errori) è responsabilità UX',
          ],
          reflection: 'Apri un\'app che usi con feature AI. Trovi disclosure chiare? Cosa aggiungeresti — e dove nel flusso?',
        },
        en: {
          title: 'Transparency and disclosure',
          description: 'When and how to tell the user there is AI behind the feature — without scaring or deceiving them.',
          body: [
            'The first ethical rule for an AI interface is honesty: the user must know when they interact with an automated system, when content is generated and when a choice is influenced by an algorithm. It is not legal pedantry — it is respect for decision-making autonomy.',
            'Effective disclosure is contextual, not bureaucratic. A generic "AI" badge in the footer is not enough. Better: "This summary is automatically generated — verify the sources", "The price shown is personalised based on your profile", "You are talking to an AI assistant, not a human operator".',
            'Tone matters. Fearful disclosure ("Warning: artificial intelligence!") creates unnecessary anxiety. Absent or hidden disclosure creates miscalibrated trust — the user treats AI output as human or expert truth. The designer seeks balance: clarity without alarmism.',
            'Transparency also includes limits. Healthcare, legal or financial chatbots must communicate what they cannot do: "I am not a doctor", "I do not replace legal advice". Well-designed limits reduce harm from over-reliance — when the user depends excessively on an inadequate system.',
            'Cases like Air Canada\'s chatbot (2024), which invented a ticket policy and the airline tried not to honour it, show what happens when disclosure and limits are absent. The interface gave authority to a hallucinated output. Designing for the worst case is not pessimism — it is due diligence.',
            'Practical checklist: every AI feature in your product should answer — Does the user know there is AI? Do they know what it does? What it does not do? Can they disable it? Can they report errors? If an answer is missing, there is a design gap to fill.',
          ],
          keyTakeaways: [
            'Disclosure must be contextual and in human language',
            'Communicating AI limits reduces over-reliance and harm',
            'Generic "AI-powered" badges are often insufficient — specific explanations are needed',
            'Designing for the worst case (hallucinations, errors) is a UX responsibility',
          ],
          reflection: 'Open an app you use with AI features. Do you find clear disclosure? What would you add — and where in the flow?',
        },
      },
      resources: [
        { title: 'IF — Pattern: Algorithmic transparency', url: 'https://projects.if.design/', type: 'tool' },
        { title: 'EU AI Act — Transparency obligations', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai', type: 'article' },
        { title: 'deceptive.design — Dark patterns database', url: 'https://www.deceptive.design/', type: 'tool' },
      ],
    },
    {
      slug: 'consenso-controllo-e-override',
      readingTime: 8,
      content: {
        it: {
          title: 'Consenso, controllo e override umano',
          description: 'Opt-in, granularità, diritto di correggere — progettare autonomia reale, non simulata.',
          body: [
            'Il consenso informato nel design digitale è già un campo complesso (GDPR, cookie banner, privacy policy illeggibili). Con l\'IA diventa ancora più critico: i dati raccolti alimentano modelli, le inferenze creano profili che l\'utente non ha esplicitamente fornito, e le decisioni automatizzate possono escludere senza spiegazione.',
            'Opt-in vs opt-out non è un dettaglio. Attivare AI features by default — raccomandazioni invasive, analisi comportamentale, generazione automatica di contenuti — e nascondere l\'opt-out nelle impostazioni è un dark pattern classico, reso più potente dalla complessità algoritmica che l\'utente non vede.',
            'Il controllo granulare significa che l\'utente può scegliere cosa attivare: "Usa AI per riassumere, non per personalizzare prezzi", "Analizza i miei click ma non i miei messaggi". Aggregare tutto in un toggle "AI on/off" è comodo per il team prodotto, ma riduce la vera scelta.',
            'L\'override umano va progettato come first-class citizen: pulsante visibile "Parla con un operatore", "Contesta questa decisione", "Correggi il risultato". Tempi di risposta definiti. Conferma che la richiesta è stata ricevuta. Nessun labirinto di FAQ che simula supporto.',
            'Il diritto di correzione è centrale: se un sistema AI classifica, raccomanda o genera qualcosa di sbagliato, l\'utente deve poter segnalarlo e vedere l\'effetto. Feedback che scompare in un buco nero distrugge fiducia e impedisce miglioramento del modello.',
            'Per designer in contesti B2B (dashboard admin, tool interni), le stesse regole valgono per operatori umani che usano AI assistiva: devono capire cosa fa il sistema, poterlo disattivare e non essere penalizzati per aver ignorato un suggerimento algoritmico sbagliato.',
          ],
          keyTakeaways: [
            'Opt-in esplicito e controllo granulare rispettano l\'autonomia',
            'Override umano deve essere visibile, accessibile e con tempi prevedibili',
            'Feedback e correzione devono avere un percorso chiaro — non un buco nero',
            'Operatori umani che usano AI assistiva meritano le stesse tutele degli utenti finali',
          ],
          reflection: 'Disegna ( anche mentalmente) un flusso di opt-in per una feature AI nel tuo prodotto. Quante scelte granulari offriresti? Dove metteresti l\'override umano?',
        },
        en: {
          title: 'Consent, control and human override',
          description: 'Opt-in, granularity, the right to correct — designing real autonomy, not simulated.',
          body: [
            'Informed consent in digital design is already a complex field (GDPR, cookie banners, unreadable privacy policies). With AI it becomes even more critical: collected data feeds models, inferences create profiles the user did not explicitly provide, and automated decisions can exclude without explanation.',
            'Opt-in vs opt-out is not a detail. Enabling AI features by default — invasive recommendations, behavioural analysis, automatic content generation — and hiding opt-out in settings is a classic dark pattern, made more powerful by algorithmic complexity the user cannot see.',
            'Granular control means the user can choose what to enable: "Use AI to summarise, not to personalise prices", "Analyse my clicks but not my messages". Aggregating everything in one "AI on/off" toggle is convenient for the product team, but reduces real choice.',
            'Human override must be designed as a first-class citizen: visible button "Talk to an operator", "Challenge this decision", "Correct the result". Defined response times. Confirmation that the request was received. No FAQ labyrinth that simulates support.',
            'The right to correction is central: if an AI system misclassifies, misrecommends or misgenerates, the user must be able to report it and see the effect. Feedback that vanishes into a black hole destroys trust and prevents model improvement.',
            'For designers in B2B contexts (admin dashboards, internal tools), the same rules apply to human operators using assistive AI: they must understand what the system does, be able to disable it and not be penalised for ignoring a wrong algorithmic suggestion.',
          ],
          keyTakeaways: [
            'Explicit opt-in and granular control respect autonomy',
            'Human override must be visible, accessible and with predictable timing',
            'Feedback and correction need a clear path — not a black hole',
            'Human operators using assistive AI deserve the same protections as end users',
          ],
          reflection: 'Design (even mentally) an opt-in flow for an AI feature in your product. How many granular choices would you offer? Where would you place human override?',
        },
      },
      resources: [
        { title: 'GDPR — Automated decision-making (Art. 22)', url: 'https://gdpr-info.eu/art-22-gdpr/', type: 'article' },
        { title: 'Google PAIR — Control and feedback patterns', url: 'https://pair.withgoogle.com/chapter/user-needs/', type: 'article' },
        { title: 'Consent Lab — Research on digital consent', url: 'https://consentlab.org/', type: 'article' },
      ],
    },
    {
      slug: 'dark-patterns-potenziati-dall-ia',
      readingTime: 7,
      content: {
        it: {
          title: 'Dark patterns potenziati dall\'IA',
          description: 'Personalizzazione manipolatoria, urgency artificiale e nudging algoritmico — riconoscerli e rifiutarli.',
          body: [
            'I dark patterns sono scelte di design che inducono l\'utente a fare qualcosa che non avrebbe fatto con informazioni complete e scelte libere: difficile cancellazione account, pre-selezione costi nascosti, fake urgency, confirmshaming. Con l\'IA, questi pattern diventano più personalizzati — e quindi più invisibili.',
            'La personalizzazione manipolatoria sfrutta dati comportamentali per calibrare pressione: "Solo 2 posti rimasti" mostrato solo agli utenti ansiosi, sconti mostrati a chi è più propenso a comprare subito, prezzi dinamici opachi che maximizzano willingness-to-pay. Il designer che implementa questi flussi partecipa a pratiche sleali.',
            'L\'urgency artificiale generata da AI — notifiche "personalizzate" che simulano scarsità o FOMO — erode fiducia a lungo termine per metriche a breve. Chiediti: questa urgency è verificabile? L\'utente può controllarla? O è fabbricata dall\'algoritmo?',
            'Il nudging algoritmico in salute, finanza o informazione può orientare scelte ad alto impatto senza che l\'utente se ne accorga. "Ti suggeriamo questo piano" su base opaca non è assistenza — è persuasione. La linea tra help e manipulation passa attraverso trasparenza e reversibilità.',
            'Come designer puoi rifiutare: documenta il pattern come rischioso, proponi alternative (countdown verificabili, prezzi fissi, raccomandazioni spiegabili), cita regolamentazioni (Digital Services Act, Unfair Commercial Practices). A volte basta mostrare uno scenario utente negativo in un test per far cambiare idea al PM.',
            'La comunità deceptive.design e le linee guida FTC/EU stanno convergendo verso sanzioni per dark patterns. L\'IA li rende più efficaci — ma non li rende più accettabili. Anzi, aumenta la responsabilità di chi li progetta.',
          ],
          keyTakeaways: [
            'L\'IA rende i dark patterns più personalizzati e quindi più insidiosi',
            'Urgency, prezzi dinamici opachi e nudging non trasparente sono segnali di allarme',
            'Documentare rischi e proporre alternative è un atto di design etico',
            'Regolamentazioni come DSA stanno stringendo su pratiche manipolatorie',
          ],
          reflection: 'Pensa a un e-commerce o app di viaggi che usi. Quali elementi di urgency o personalizzazione ti sembrano manipolatori? Come li redesigneresti?',
        },
        en: {
          title: 'AI-powered dark patterns',
          description: 'Manipulative personalisation, artificial urgency and algorithmic nudging — recognising and refusing them.',
          body: [
            'Dark patterns are design choices that lead users to do something they would not do with complete information and free choice: difficult account deletion, hidden pre-selected costs, fake urgency, confirmshaming. With AI, these patterns become more personalised — and therefore more invisible.',
            'Manipulative personalisation exploits behavioural data to calibrate pressure: "Only 2 seats left" shown only to anxious users, discounts shown to those more likely to buy immediately, opaque dynamic pricing that maximises willingness-to-pay. The designer who implements these flows participates in unfair practices.',
            'AI-generated artificial urgency — "personalised" notifications that simulate scarcity or FOMO — erodes long-term trust for short-term metrics. Ask yourself: is this urgency verifiable? Can the user control it? Or is it manufactured by the algorithm?',
            'Algorithmic nudging in health, finance or information can steer high-impact choices without the user noticing. "We suggest this plan" on an opaque basis is not assistance — it is persuasion. The line between help and manipulation runs through transparency and reversibility.',
            'As a designer you can refuse: document the pattern as risky, propose alternatives (verifiable countdowns, fixed prices, explainable recommendations), cite regulations (Digital Services Act, Unfair Commercial Practices). Sometimes showing a negative user scenario in a test is enough to change the PM\'s mind.',
            'The deceptive.design community and FTC/EU guidelines are converging towards sanctions for dark patterns. AI makes them more effective — but not more acceptable. On the contrary, it increases the responsibility of those who design them.',
          ],
          keyTakeaways: [
            'AI makes dark patterns more personalised and therefore more insidious',
            'Urgency, opaque dynamic pricing and non-transparent nudging are warning signs',
            'Documenting risks and proposing alternatives is an act of ethical design',
            'Regulations like the DSA are tightening on manipulative practices',
          ],
          reflection: 'Think of an e-commerce or travel app you use. Which urgency or personalisation elements seem manipulative to you? How would you redesign them?',
        },
      },
      resources: [
        { title: 'deceptive.design — Hall of shame', url: 'https://www.deceptive.design/hall-of-shame', type: 'tool' },
        { title: 'EU Digital Services Act — Dark patterns', url: 'https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package', type: 'article' },
        { title: 'Nudge (Thaler & Sunstein) — Critiques and ethics', url: 'https://en.wikipedia.org/wiki/Nudge_theory', type: 'book' },
      ],
    },
  ],
};
