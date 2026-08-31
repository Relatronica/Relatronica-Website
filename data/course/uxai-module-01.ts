import { CourseModule, ModuleQuiz, ModuleExercise } from '@/types/course';

const exercise01: ModuleExercise = {
  content: {
    it: {
      title: 'Mappa etica del tuo flusso di design',
      description: 'Identifica dove l\'IA entra nel tuo lavoro quotidiano, chi ne beneficia o ne rischia, e documenta le decisioni che prenderesti diversamente.',
      duration: '30–45 min',
      materials: [
        'Foglio o documento condiviso (Notion, FigJam, carta)',
        'Elenco dei tool che usi regolarmente (Figma, ChatGPT, analytics, ecc.)',
        'Un progetto reale o recente su cui riflettere',
      ],
      steps: [
        'Dividi una pagina in tre colonne: Creatività | Ricerca | Prodotto live. Elenca ogni tool o feature AI che usi (o che il team usa) in ciascuna colonna.',
        'Per ogni voce, rispondi a tre domande: Chi beneficia? Chi potrebbe essere escluso o danneggiato? La decisione è reversibile per l\'utente finale?',
        'Segna con rosso le voci dove non sai rispondere con certezza — sono i tuoi gap di conoscenza da colmare con il team.',
        'Scegli la voce più rischiosa e scrivi una proposta alternativa: cosa faresti se non potessi usare AI in quel punto? (regola esplicita, revisione umana, opt-in, ecc.)',
        'Condividi la mappa con almeno un collega (designer, PM o researcher) e chiedi: "Cosa mi sto dimenticando?".',
      ],
      output: 'Una mappa visiva del tuo flusso AI con almeno 3 voci annotate per rischio/beneficio, 1 proposta alternativa concreta e note dal feedback del collega.',
      debrief: 'Cosa ti ha sorpreso di più? C\'è un\'area dove usi AI per abitudine più che per valore? Quale voce porteresti in una sprint review o 1:1 con il PM?',
    },
    en: {
      title: 'Ethical map of your design workflow',
      description: 'Identify where AI enters your daily work, who benefits or is at risk, and document decisions you would make differently.',
      duration: '30–45 min',
      materials: [
        'Sheet or shared document (Notion, FigJam, paper)',
        'List of tools you regularly use (Figma, ChatGPT, analytics, etc.)',
        'A real or recent project to reflect on',
      ],
      steps: [
        'Split a page into three columns: Creativity | Research | Live product. List every AI tool or feature you use (or the team uses) in each column.',
        'For each item, answer three questions: Who benefits? Who might be excluded or harmed? Is the decision reversible for the end user?',
        'Mark in red items where you cannot answer with certainty — these are knowledge gaps to fill with the team.',
        'Choose the riskiest item and write an alternative proposal: what would you do if you could not use AI at that point? (explicit rule, human review, opt-in, etc.)',
        'Share the map with at least one colleague (designer, PM or researcher) and ask: "What am I forgetting?".',
      ],
      output: 'A visual map of your AI workflow with at least 3 items annotated for risk/benefit, 1 concrete alternative proposal and notes from colleague feedback.',
      debrief: 'What surprised you most? Is there an area where you use AI out of habit more than value? Which item would you bring to a sprint review or 1:1 with the PM?',
    },
  },
};

const quiz01: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — L\'IA nel processo di design',
      description: 'Verifica la tua comprensione del Modulo 01: dove l\'IA entra nel lavoro del designer, hype e responsabilità, quando usarla e quando evitarla.',
    },
    en: {
      title: 'Quiz — AI in the design process',
      description: 'Test your understanding of Module 01: where AI enters design work, hype and responsibility, when to use it and when to avoid it.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'uxai-q01-01',
      content: {
        it: {
          question: 'Quale affermazione descrive meglio il ruolo etico del designer nell\'era dell\'IA?',
          options: [
            'Il designer è responsabile solo dell\'estetica; le decisioni etiche spettano agli ingegneri',
            'Il designer influenza come le persone percepiscono e interagiscono con sistemi AI — e condivide la responsabilità delle scelte di prodotto',
            'L\'IA rende obsolete le considerazioni etiche perché le decisioni sono automatiche',
            'Solo i team legali devono valutare l\'etica dei prodotti AI',
          ],
          explanation: 'Il designer non è un semplice esecutore visivo. Progetta flussi, copy, feedback e affordance che plasmano come le persone capiscono (o fraintendono) un sistema AI. Queste scelte hanno implicazioni etiche concrete.',
        },
        en: {
          question: 'Which statement best describes the designer\'s ethical role in the AI era?',
          options: [
            'The designer is only responsible for aesthetics; ethical decisions belong to engineers',
            'The designer influences how people perceive and interact with AI systems — and shares responsibility for product choices',
            'AI makes ethical considerations obsolete because decisions are automatic',
            'Only legal teams should evaluate the ethics of AI products',
          ],
          explanation: 'The designer is not a mere visual executor. They design flows, copy, feedback and affordances that shape how people understand (or misunderstand) an AI system. These choices have concrete ethical implications.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q01-02',
      content: {
        it: {
          question: 'Cos\'è l\'"AI washing" nel contesto del design di prodotto?',
          options: [
            'Pulire i dataset prima dell\'addestramento dei modelli',
            'Etichettare un prodotto come "AI-powered" senza funzionalità AI significative, per marketing',
            'Usare l\'IA per testare l\'accessibilità delle interfacce',
            'Documentare i limiti di un modello machine learning',
          ],
          explanation: 'L\'AI washing è l\'equivalente del greenwashing: badge, copy e UI che suggeriscono intelligenza artificiale avanzata quando il prodotto usa regole semplici, automazioni basiche o AI marginale. Il designer può rifiutare o correggere queste comunicazioni fuorvianti.',
        },
        en: {
          question: 'What is "AI washing" in product design context?',
          options: [
            'Cleaning datasets before model training',
            'Labelling a product as "AI-powered" without meaningful AI features, for marketing',
            'Using AI to test interface accessibility',
            'Documenting the limits of a machine learning model',
          ],
          explanation: 'AI washing is the equivalent of greenwashing: badges, copy and UI that suggest advanced artificial intelligence when the product uses simple rules, basic automation or marginal AI. The designer can refuse or correct these misleading communications.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q01-03',
      content: {
        it: {
          question: 'Quale uso dell\'IA generativa nel processo di design è generalmente considerato più problematico dal punto di vista etico?',
          options: [
            'Generare varianti di copy per A/B test con revisione umana',
            'Sintetizzare note da interviste reali con consenso dei partecipanti',
            'Presentare persona o insight di ricerca generati dall\'IA come se fossero dati reali',
            'Usare l\'IA per tradurre documenti di ricerca',
          ],
          explanation: 'Presentare output AI come ricerca utente autentica è fuorviante verso stakeholder e team, e può portare a decisioni di prodotto basate su dati inventati. La ricerca sintetica può essere utile come esplorazione, ma va sempre etichettata e validata.',
        },
        en: {
          question: 'Which use of generative AI in the design process is generally considered most ethically problematic?',
          options: [
            'Generating copy variants for A/B testing with human review',
            'Synthesising notes from real interviews with participant consent',
            'Presenting AI-generated personas or research insights as if they were real data',
            'Using AI to translate research documents',
          ],
          explanation: 'Presenting AI output as authentic user research is misleading to stakeholders and teams, and can lead to product decisions based on invented data. Synthetic research can be useful for exploration, but must always be labelled and validated.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'uxai-q01-04',
      content: {
        it: {
          question: 'Quando ha senso evitare l\'IA in un flusso di design?',
          options: [
            'Mai — l\'IA è sempre più efficiente',
            'Quando la decisione ha impatto su diritti fondamentali e richiede giudizio umano contestualizzato',
            'Solo quando il budget del progetto è basso',
            'Quando il team non ha designer senior',
          ],
          explanation: 'Alcuni contesti — salute, giustizia, welfare, credito — richiedono giudizio umano, spiegabilità e possibilità di ricorso. In questi casi, automatizzare o "AI-wash" un flusso decisionale può causare danni reali. Dire no è una competenza professionale.',
        },
        en: {
          question: 'When does it make sense to avoid AI in a design flow?',
          options: [
            'Never — AI is always more efficient',
            'When the decision affects fundamental rights and requires contextualised human judgement',
            'Only when the project budget is low',
            'When the team has no senior designers',
          ],
          explanation: 'Some contexts — healthcare, justice, welfare, credit — require human judgement, explainability and the possibility of appeal. In these cases, automating or "AI-washing" a decision flow can cause real harm. Saying no is a professional skill.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q01-05',
      content: {
        it: {
          question: 'Cosa significa applicare il principio "human-in-the-loop" nel design UX?',
          options: [
            'L\'utente non deve mai vedere che c\'è AI dietro',
            'Progettare punti di controllo umano dove le decisioni ad alto impatto possono essere riviste o contestate',
            'Eliminare tutti i passaggi manuali dal flusso',
            'Affidare all\'IA la scelta dei colori del design system',
          ],
          explanation: 'Human-in-the-loop non è solo un requisito tecnico: è una scelta di design. Significa prevedere override, escalation, revisione e possibilità di ricorso — specialmente quando l\'output AI influenza vite reali.',
        },
        en: {
          question: 'What does applying the "human-in-the-loop" principle mean in UX design?',
          options: [
            'The user should never see that AI is behind the feature',
            'Designing human checkpoints where high-impact decisions can be reviewed or challenged',
            'Removing all manual steps from the flow',
            'Leaving colour choices in the design system to AI',
          ],
          explanation: 'Human-in-the-loop is not just a technical requirement: it is a design choice. It means providing override, escalation, review and appeal — especially when AI output affects real lives.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const uxaiModule01: CourseModule = {
  slug: 'ia-nel-processo-di-design',
  number: '01',
  color: 'indigo',
  iconName: 'Palette',
  content: {
    it: {
      title: 'L\'IA nel processo di design oggi',
      description: 'Dove l\'intelligenza artificiale entra nel lavoro quotidiano di UX e product design — e perché la responsabilità etica non spetta solo agli ingegneri.',
    },
    en: {
      title: 'AI in the design process today',
      description: 'Where artificial intelligence enters the daily work of UX and product design — and why ethical responsibility does not belong to engineers alone.',
    },
  },
  quiz: quiz01,
  exercise: exercise01,
  lessons: [
    {
      slug: 'dove-lia-entra-nel-lavoro-del-designer',
      readingTime: 8,
      content: {
        it: {
          title: 'Dove l\'IA entra nel lavoro del designer',
          description: 'Dai tool generativi alla personalizzazione in produzione: mappa delle aree in cui l\'IA tocca il design — e di quelle che non dovrebbe.',
          body: [
            'Se lavori come UX designer, product designer o design researcher, l\'IA non è più un tema "per il team data". È già nel tuo Figma, nel tuo flusso di copy, nella dashboard analytics che consulti ogni giorno. La domanda non è se l\'incontrerai, ma se saprai riconoscere dove influenza le decisioni che prendi.',
            'Nel processo creativo, l\'IA generativa viene usata per wireframe, moodboard, varianti di layout, microcopy e naming. Tool come Figma AI, Galileo, Uizard o plugin su Midjourney accelerano l\'esplorazione. Ma accelerare non significa neutralità: ogni output porta con sé bias estetici, omologazione visiva e questioni di copyright sui dati di addestramento.',
            'Nella ricerca, compaiono sintesi automatiche di interviste, analisi sentiment, clustering di feedback e "utenti sintetici" generati da LLM. Possono aiutare a esplorare ipotesi, ma non sostituiscono la voce delle persone reali — e presentarli come ricerca autentica è eticamente problematico.',
            'In produzione, il designer progetta interfacce per raccomandazioni, chatbot, assistenti virtuali, onboarding personalizzato e filtri "intelligenti". Qui l\'IA non è un tool del designer: è il prodotto stesso. Ogni scelta di UI — cosa mostrare, cosa nascondere, come spiegare un risultato — modella il rapporto tra utente e algoritmo.',
            'C\'è infine la dimensione organizzativa: pressione del management per aggiungere "AI features", badge "Powered by AI" per fundraising o marketing, sprint dedicati a integrare modelli senza tempo per valutare rischi. Il designer è spesso il primo a vedere come queste decisioni si traducono in esperienze concrete — e quindi ha voce in capitolo.',
            'Mappare dove l\'IA entra nel tuo lavoro è il primo passo per agire responsabilmente. Non serve diventare data scientist: serve sapere quali decisioni sono tue, quali sono del team prodotto, e quali richiedono coinvolgimento di legal, policy o comunità impattate.',
          ],
          keyTakeaways: [
            'L\'IA è presente in creatività, ricerca e prodotti live — non solo in backend',
            'Tool generativi accelerano ma introducono bias, omologazione e questioni di copyright',
            'La ricerca sintetica può esplorare ipotesi, ma non sostituisce persone reali',
            'Il designer ha visibilità precoce su come le scelte AI diventano esperienze',
          ],
          reflection: 'Elenca tre punti del tuo flusso di lavoro attuale in cui usi o potresti usare l\'IA. Per ciascuno: chi beneficia, chi potrebbe essere escluso o danneggiato?',
        },
        en: {
          title: 'Where AI enters the designer\'s work',
          description: 'From generative tools to in-product personalisation: a map of where AI touches design — and where it should not.',
          body: [
            'If you work as a UX designer, product designer or design researcher, AI is no longer a topic "for the data team". It is already in your Figma, your copy workflow, the analytics dashboard you check every day. The question is not whether you will encounter it, but whether you can recognise where it influences the decisions you make.',
            'In the creative process, generative AI is used for wireframes, moodboards, layout variants, microcopy and naming. Tools like Figma AI, Galileo, Uizard or Midjourney plugins speed up exploration. But speed does not mean neutrality: every output carries aesthetic bias, visual homogenisation and copyright questions about training data.',
            'In research, automatic interview synthesis, sentiment analysis, feedback clustering and LLM-generated "synthetic users" appear. They can help explore hypotheses, but do not replace the voices of real people — and presenting them as authentic research is ethically problematic.',
            'In production, the designer creates interfaces for recommendations, chatbots, virtual assistants, personalised onboarding and "smart" filters. Here AI is not a designer tool: it is the product itself. Every UI choice — what to show, what to hide, how to explain a result — shapes the relationship between user and algorithm.',
            'There is also the organisational dimension: management pressure to add "AI features", "Powered by AI" badges for fundraising or marketing, sprints to integrate models without time to assess risks. The designer is often the first to see how these decisions translate into concrete experiences — and therefore has a say.',
            'Mapping where AI enters your work is the first step to acting responsibly. You do not need to become a data scientist: you need to know which decisions are yours, which belong to the product team, and which require involvement from legal, policy or affected communities.',
          ],
          keyTakeaways: [
            'AI is present in creativity, research and live products — not just in the backend',
            'Generative tools speed up work but introduce bias, homogenisation and copyright issues',
            'Synthetic research can explore hypotheses but does not replace real people',
            'The designer has early visibility on how AI choices become experiences',
          ],
          reflection: 'List three points in your current workflow where you use or might use AI. For each: who benefits, who might be excluded or harmed?',
        },
      },
      resources: [
        { title: 'Nielsen Norman Group — AI in UX Research', url: 'https://www.nngroup.com/articles/ai-ux-research/', type: 'article' },
        { title: 'Figma — AI features and guidelines', url: 'https://www.figma.com/ai/', type: 'tool' },
        { title: 'Montreal AI Ethics Institute — Design resources', url: 'https://montrealethics.ai/', type: 'article' },
      ],
    },
    {
      slug: 'hype-pressione-e-responsabilita',
      readingTime: 7,
      content: {
        it: {
          title: 'Hype, pressione e responsabilità professionale',
          description: 'AI washing, FOMO tecnologica e il ruolo del designer nel frenare o orientare scelte affrettate.',
          body: [
            'Nel 2024-2026 ogni roadmap sembra richiedere "qualcosa con l\'IA". Investitori, board e competitor spingono per feature visibili — chatbot, raccomandazioni, generazione automatica. Il designer si trova spesso a progettare interfacce per funzionalità la cui utilità o sicurezza non è stata valutata.',
            'L\'AI washing è il rischio più immediato: etichettare come "intelligente" ciò che è una regola if-then, un autocomplete migliorato o un\'integrazione API di facciata. Dal punto di vista UX, questo erode la fiducia: l\'utente si aspetta capacità che il prodotto non ha, e quando delude, la colpa ricade sull\'esperienza — non sul marketing.',
            'La FOMO tecnologica spinge team a saltare fasi fondamentali: test con utenti reali, valutazione di edge case, analisi di chi resta escluso. "Shippare l\'AI" diventa obiettivo in sé. Il designer può contrporre domande concrete: quale problema risolve? Cosa succede quando sbaglia? Chi può contestare l\'output?',
            'La responsabilità professionale del designer va oltre la delivery. Codici deontologici come quello del World Design Organization sottolineano che il design deve servire il benessere delle persone e della società. Integrare AI senza valutarne l\'impatto non è neutralità — è una scelta.',
            'Non si tratta di opporsi a ogni innovazione. Si tratta di chiedere evidenze, proporre alternative (incluso il non-uso dell\'IA), documentare trade-off e portare in sala riunioni esempi concreti di fallimenti — filtri razzisti, chatbot che danno consigli medici pericolosi, onboarding che esclude utenti neurodivergenti.',
            'Essere "il guastafesta etico" è faticoso. Ma il designer che conosce implicazioni di bias, trasparenza e consenso ha leva negoziale: può tradurre rischi astratti in scenari UX concreti che product manager e stakeholder capiscono — e a volte temono.',
          ],
          keyTakeaways: [
            'La pressione per feature AI può saltare valutazioni di utilità e sicurezza',
            'L\'AI washing erode la fiducia e crea aspettative false negli utenti',
            'Il designer ha responsabilità professionale verso benessere e società',
            'Tradurre rischi etici in scenari UX concreti è una leva negoziale efficace',
          ],
          reflection: 'Hai mai lavorato su una feature "AI" di cui dubitavi l\'utilità? Cosa avresti potuto dire o mostrare al team per rallentare o cambiare direzione?',
        },
        en: {
          title: 'Hype, pressure and professional responsibility',
          description: 'AI washing, tech FOMO and the designer\'s role in slowing down or steering hasty choices.',
          body: [
            'In 2024-2026 every roadmap seems to require "something with AI". Investors, boards and competitors push for visible features — chatbots, recommendations, automatic generation. The designer often finds themselves designing interfaces for functionality whose utility or safety has not been assessed.',
            'AI washing is the most immediate risk: labelling as "intelligent" what is an if-then rule, improved autocomplete or a cosmetic API integration. From a UX perspective, this erodes trust: the user expects capabilities the product does not have, and when disappointed, blame falls on the experience — not marketing.',
            'Tech FOMO pushes teams to skip fundamental steps: testing with real users, edge case evaluation, analysis of who gets excluded. "Shipping AI" becomes an end in itself. The designer can counter with concrete questions: what problem does it solve? What happens when it gets it wrong? Who can challenge the output?',
            'The designer\'s professional responsibility goes beyond delivery. Codes of ethics such as the World Design Organization\'s emphasise that design must serve the wellbeing of people and society. Integrating AI without assessing its impact is not neutrality — it is a choice.',
            'It is not about opposing every innovation. It is about asking for evidence, proposing alternatives (including not using AI), documenting trade-offs and bringing concrete failure examples into meetings — racist filters, chatbots giving dangerous medical advice, onboarding that excludes neurodivergent users.',
            'Being "the ethical spoilsport" is exhausting. But the designer who understands implications of bias, transparency and consent has negotiating leverage: they can translate abstract risks into concrete UX scenarios that product managers and stakeholders understand — and sometimes fear.',
          ],
          keyTakeaways: [
            'Pressure for AI features can skip utility and safety assessments',
            'AI washing erodes trust and creates false expectations in users',
            'The designer has professional responsibility towards wellbeing and society',
            'Translating ethical risks into concrete UX scenarios is effective leverage',
          ],
          reflection: 'Have you ever worked on an "AI" feature whose utility you doubted? What could you have said or shown the team to slow down or change direction?',
        },
      },
      resources: [
        { title: 'WDO — Code of Professional Ethics', url: 'https://wdo.org/about/code-of-ethics/', type: 'article' },
        { title: 'AI Snake Oil — Blog on AI hype', url: 'https://www.aisnakeoil.com/', type: 'article' },
        { title: 'Harvard Business Review — The AI Hype Cycle', url: 'https://hbr.org/topic/subject/ai-and-machine-learning', type: 'article' },
      ],
    },
    {
      slug: 'quando-usare-e-quando-evitare',
      readingTime: 8,
      content: {
        it: {
          title: 'Quando usare l\'IA — e quando evitarla',
          description: 'Un framework pratico per decidere se l\'IA aggiunge valore — o introduce rischi sproporzionati.',
          body: [
            'Non ogni problema guadagna dall\'IA. A volte una regola esplicita, un flusso guidato o un operatore umano è più giusto, più chiaro e più economico. Il designer dovrebbe partecipare attivamente a questa valutazione, non aspettare che le scelte tecniche siano già chiuse.',
            'Usa l\'IA quando aggiunge valore misurabile e i rischi sono gestibili: personalizzazione non manipolatoria, assistenza che riduce carico cognitivo, sintesi di grandi volumi di feedback con revisione umana, accessibilità (es. descrizioni automatiche con controllo qualità). In questi casi, progetta trasparenza e controllo utente fin dall\'inizio.',
            'Evita o rifiuta l\'IA quando la decisione impatta diritti fondamentali senza possibilità di ricorso umano: salute, giustizia, welfare, credito, immigrazione. Evitala quando non hai dati rappresentativi o non puoi spiegare l\'output agli utenti. Evitala quando l\'unico motivo è "perché lo fa la concorrenza".',
            'Il concetto di "human-in-the-loop" va progettato, non aggiunto a posteriori. Significa: punti di escalation visibili, possibilità di correggere un output AI, tempi di risposta umana definiti, fallback quando il modello fallisce. Un chatbot che non ammette mai di sbagliare e non offre contatto umano è un problema di design, non solo di tecnologia.',
            'Chiediti sempre: cosa succede al worst case? Se il modello discrimina, allucina o viene usato in modo imprevisto, l\'interfaccia lo rende visibile? L\'utente può segnalarlo? Il team ha un percorso per disattivare la feature rapidamente?',
            'Dire no all\'IA può essere la proposta di design più matura. Presentala come alternativa: "Possiamo risolvere lo stesso problema con un flusso trasparente a step, che testiamo in due settimane e che non richiede compliance AI Act". Spesso il team accetta — e l\'utente ne esce vincitore.',
          ],
          keyTakeaways: [
            'L\'IA non è sempre la soluzione giusta — regole esplicite e umani spesso bastano',
            'Evita AI ad alto impatto su diritti senza ricorso umano e spiegabilità',
            'Human-in-the-loop va progettato nell\'interfaccia, non aggiunto dopo',
            'Dire no con un\'alternativa concreta è una proposta di design matura',
          ],
          reflection: 'Pensa a un prodotto che usi regolarmente. In quale funzione "AI" preferiresti un umano o una regola semplice? Come cambierebbe l\'interfaccia?',
        },
        en: {
          title: 'When to use AI — and when to avoid it',
          description: 'A practical framework for deciding whether AI adds value — or introduces disproportionate risks.',
          body: [
            'Not every problem benefits from AI. Sometimes an explicit rule, a guided flow or a human operator is fairer, clearer and cheaper. The designer should actively participate in this assessment, not wait until technical choices are already settled.',
            'Use AI when it adds measurable value and risks are manageable: non-manipulative personalisation, assistance that reduces cognitive load, synthesis of large feedback volumes with human review, accessibility (e.g. automatic descriptions with quality control). In these cases, design transparency and user control from the start.',
            'Avoid or reject AI when the decision affects fundamental rights without possibility of human appeal: healthcare, justice, welfare, credit, immigration. Avoid it when you lack representative data or cannot explain the output to users. Avoid it when the only reason is "because competitors do it".',
            'The concept of "human-in-the-loop" must be designed, not bolted on afterwards. It means: visible escalation points, ability to correct AI output, defined human response times, fallback when the model fails. A chatbot that never admits mistakes and offers no human contact is a design problem, not just a technology one.',
            'Always ask: what happens in the worst case? If the model discriminates, hallucinates or is used unexpectedly, does the interface make it visible? Can the user report it? Does the team have a path to disable the feature quickly?',
            'Saying no to AI can be the most mature design proposal. Present it as an alternative: "We can solve the same problem with a transparent step-by-step flow, test it in two weeks, and it does not require AI Act compliance". Often the team accepts — and the user wins.',
          ],
          keyTakeaways: [
            'AI is not always the right solution — explicit rules and humans often suffice',
            'Avoid high-impact AI on rights without human appeal and explainability',
            'Human-in-the-loop must be designed into the interface, not added later',
            'Saying no with a concrete alternative is a mature design proposal',
          ],
          reflection: 'Think of a product you use regularly. In which "AI" feature would you prefer a human or a simple rule? How would the interface change?',
        },
      },
      resources: [
        { title: 'Google PAIR — People + AI Guidebook', url: 'https://pair.withgoogle.com/guidebook/', type: 'book' },
        { title: 'Microsoft — Responsible AI resources', url: 'https://www.microsoft.com/en-us/ai/responsible-ai', type: 'article' },
        { title: 'IF Foundation — AI and design patterns', url: 'https://projects.if.design/', type: 'tool' },
      ],
    },
  ],
};
