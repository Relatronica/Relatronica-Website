import { CourseModule, ModuleQuiz, ModuleExercise } from '@/types/course';

const exercise03: ModuleExercise = {
  content: {
    it: {
      title: 'Audit di inclusione su un flusso UX',
      description: 'Attraversa un flusso di prodotto come farebbe un utente marginalizzato e documenta ogni punto di esclusione o frizione ingiusta.',
      duration: '40–50 min',
      materials: [
        'Un flusso da auditare (onboarding, verifica ID, checkout, candidatura, prenotazione sanitaria)',
        'Persona estremi: utente anziano, non madrelingua, con disabilità visiva/motoria, basso reddito, neurodivergente',
        'Checklist WCAG base (contrasto, label, keyboard) e domande di equità',
      ],
      steps: [
        'Scegli un flusso di 5–8 step. Può essere del tuo prodotto o di un servizio pubblico/privato che conosci.',
        'Attraversa il flusso quattro volte, assumendo ogni volta una persona diversa dalla lista materiali. Per ogni passaggio annota: cosa funziona, cosa blocca, cosa confonde, cosa esclude.',
        'Segna i punti dove l\'AI (o l\'automazione) amplifica l\'esclusione: riconoscimento facciale fallito, copy generico incomprensibile, raccomandazioni che escludono, nessun fallback umano.',
        'Per i 3 problemi più gravi, proponi un fix concreto: messaggio alternativo, percorso manuale, linguaggio plain, metrica da monitorare.',
        'Opzionale: condividi con qualcuno che rientra in una delle persona e chiedi feedback — la validazione reale batte ogni assunzione.',
      ],
      output: 'Tabella audit con 4 persona, almeno 3 problemi critici documentati e fix proposti per ciascuno.',
      debrief: 'Quale persona ha avuto più frizione? Quale fix è implementabile subito senza coinvolgere engineering? Cosa chiederesti al team data/ML?',
    },
    en: {
      title: 'Inclusion audit of a UX flow',
      description: 'Walk through a product flow as a marginalised user would and document every point of exclusion or unfair friction.',
      duration: '40–50 min',
      materials: [
        'A flow to audit (onboarding, ID verification, checkout, job application, healthcare booking)',
        'Edge personas: elderly user, non-native speaker, visually/motor impaired, low income, neurodivergent',
        'Basic WCAG checklist (contrast, labels, keyboard) and equity questions',
      ],
      steps: [
        'Choose a 5–8 step flow. It can be from your product or a public/private service you know.',
        'Walk through the flow four times, each time assuming a different person from the materials list. For each step note: what works, what blocks, what confuses, what excludes.',
        'Mark points where AI (or automation) amplifies exclusion: failed face recognition, incomprehensible generic copy, excluding recommendations, no human fallback.',
        'For the 3 most serious problems, propose a concrete fix: alternative message, manual path, plain language, metric to monitor.',
        'Optional: share with someone who fits one of the personas and ask for feedback — real validation beats any assumption.',
      ],
      output: 'Audit table with 4 personas, at least 3 critical problems documented and proposed fixes for each.',
      debrief: 'Which persona had the most friction? Which fix is implementable immediately without engineering? What would you ask the data/ML team?',
    },
  },
};

const quiz03: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Bias, inclusione e accessibilità',
      description: 'Verifica la tua comprensione del Modulo 03: bias nei flussi UX, accessibilità con contenuti AI, ricerca utente etica.',
    },
    en: {
      title: 'Quiz — Bias, inclusion and accessibility',
      description: 'Test your understanding of Module 03: bias in UX flows, accessibility with AI content, ethical user research.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'uxai-q03-01',
      content: {
        it: {
          question: 'Come può un flusso di onboarding "AI-driven" escludere utenti?',
          options: [
            'Usando colori troppo vivaci',
            'Richiedendo dati o comportamenti che non tutti possono fornire (es. biometria, smartphone recente, fluent language)',
            'Avendo troppi passaggi',
            'Usando font sans-serif',
          ],
          explanation: 'Onboarding che assume device, abilità, lingua o dati biometrici esclude chi non li ha. L\'IA che "ottimizza" il flusso su utenti maggioritari amplifica l\'esclusione se non testata su diversità reale.',
        },
        en: {
          question: 'How can an "AI-driven" onboarding flow exclude users?',
          options: [
            'By using colours that are too bright',
            'By requiring data or behaviours not everyone can provide (e.g. biometrics, recent smartphone, fluent language)',
            'By having too many steps',
            'By using sans-serif fonts',
          ],
          explanation: 'Onboarding that assumes devices, abilities, language or biometric data excludes those who lack them. AI that "optimises" the flow for majority users amplifies exclusion if not tested on real diversity.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q03-02',
      content: {
        it: {
          question: 'Perché i contenuti generati da AI possono creare problemi di accessibilità?',
          options: [
            'Perché l\'IA non può generare testo',
            'Perché possono mancare alt text, struttura semantica, contrasto e linguaggio inclusivo — se non validati',
            'Perché l\'IA genera solo immagini',
            'Perché WCAG vieta l\'uso dell\'IA',
          ],
          explanation: 'L\'IA genera output velocemente ma non garantisce accessibilità: alt text generici, heading errati, contrasto insufficiente, linguaggio complesso. Serve revisione umana e test con tecnologie assistive.',
        },
        en: {
          question: 'Why can AI-generated content create accessibility problems?',
          options: [
            'Because AI cannot generate text',
            'Because alt text, semantic structure, contrast and inclusive language may be missing — if not validated',
            'Because AI only generates images',
            'Because WCAG prohibits AI use',
          ],
          explanation: 'AI generates output quickly but does not guarantee accessibility: generic alt text, wrong headings, insufficient contrast, complex language. Human review and testing with assistive technologies are needed.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q03-03',
      content: {
        it: {
          question: 'Cosa distingue la ricerca sintetica etica da quella problematica?',
          options: [
            'La ricerca sintetica etica è sempre gratuita',
            'Viene etichettata chiaramente, non sostituisce persone reali e serve per esplorare ipotesi da validare',
            'Usa solo modelli open source',
            'Non richiede consenso',
          ],
          explanation: 'La ricerca sintetica può aiutare in fase esplorativa, ma va dichiarata, non presentata come verità, e seguita da validazione con utenti reali — specialmente per gruppi marginalizzati che i modelli sottorappresentano.',
        },
        en: {
          question: 'What distinguishes ethical synthetic research from problematic research?',
          options: [
            'Ethical synthetic research is always free',
            'It is clearly labelled, does not replace real people and serves to explore hypotheses to validate',
            'It only uses open source models',
            'It does not require consent',
          ],
          explanation: 'Synthetic research can help in exploration, but must be declared, not presented as truth, and followed by validation with real users — especially for marginalised groups that models underrepresent.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q03-04',
      content: {
        it: {
          question: 'Cosa significa "participatory design" nel contesto di prodotti AI?',
          options: [
            'Coinvolgere solo il team di design nelle decisioni',
            'Coinvolgere comunità e utenti impattati nelle scelte su dati, funzionalità e limiti del sistema',
            'Usare l\'IA per generare workshop',
            'Eliminare i test con utenti per risparmiare tempo',
          ],
          explanation: 'I gruppi più colpiti da bias algoritmico sono spesso assenti dalle stanze dove si decide. Participatory design e co-design con comunità impattate portano prospettive che nessun dataset cattura.',
        },
        en: {
          question: 'What does "participatory design" mean in the context of AI products?',
          options: [
            'Involving only the design team in decisions',
            'Involving communities and affected users in choices about data, features and system limits',
            'Using AI to generate workshops',
            'Eliminating user testing to save time',
          ],
          explanation: 'Groups most affected by algorithmic bias are often absent from rooms where decisions are made. Participatory design and co-design with affected communities bring perspectives no dataset captures.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q03-05',
      content: {
        it: {
          question: 'Quale pratica aiuta a ridurre l\'omologazione estetica da tool AI generativi?',
          options: [
            'Usare sempre lo stesso prompt per coerenza',
            'Variare fonti, vincoli e revisione critica; mantenere criteri di brand e accessibilità indipendenti dall\'output AI',
            'Eliminare il design system',
            'Accettare il primo output generato per velocità',
          ],
          explanation: 'I tool generativi tendono verso estetiche medie. Designer consapevoli impongono vincoli, revisione umana e diversità deliberata — evitando che ogni prodotto assomigli allo stesso "AI slop".',
        },
        en: {
          question: 'Which practice helps reduce aesthetic homogenisation from generative AI tools?',
          options: [
            'Always using the same prompt for consistency',
            'Varying sources, constraints and critical review; maintaining brand and accessibility criteria independent of AI output',
            'Eliminating the design system',
            'Accepting the first generated output for speed',
          ],
          explanation: 'Generative tools tend towards average aesthetics. Conscious designers impose constraints, human review and deliberate diversity — avoiding every product looking like the same "AI slop".',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const uxaiModule03: CourseModule = {
  slug: 'bias-inclusione-accessibilita',
  number: '03',
  color: 'purple',
  iconName: 'Users',
  content: {
    it: {
      title: 'Bias, inclusione e accessibilità',
      description: 'Come i flussi UX, i contenuti generati e le pratiche di ricerca possono escludere — e come il designer può contrastarlo.',
    },
    en: {
      title: 'Bias, inclusion and accessibility',
      description: 'How UX flows, generated content and research practices can exclude — and how the designer can counter it.',
    },
  },
  quiz: quiz03,
  exercise: exercise03,
  lessons: [
    {
      slug: 'bias-nei-flussi-ux',
      readingTime: 8,
      content: {
        it: {
          title: 'Bias nei flussi UX e nelle raccomandazioni',
          description: 'Filtri, ranking, onboarding "ottimizzato" — dove l\'interfaccia amplifica disuguaglianze algoritmiche.',
          body: [
            'Il bias algoritmico non resta nel backend: emerge nell\'interfaccia. Un sistema di raccomandazione che favorisce certi gruppi si vede in cosa appare in homepage. Un modello di rischio che discrimina si traduce in messaggi, limiti e opzioni diverse per utenti diversi — spesso senza spiegazione.',
            'I filtri "intelligenti" in hiring, dating, credito o sanità possono escludere in modo opaco. Il designer che progetta questi flussi — cosa mostrare, come formulare un rifiuto, se offrire ricorso — determina se l\'esclusione è visibile e contestabile o silenziosa.',
            'L\'onboarding ottimizzato da AI può sembrare un miglioramento UX: meno passaggi, personalizzazione, completion rate più alto. Ma se ottimizza su utenti maggioritari (giovani, urbani, tech-savvy), chi devia dal profilo "medio" trova ostacoli invisibili — form che non capiscono il suo contesto, richieste di dati impossibili, linguaggio esclusivo.',
            'Le interfacce di riconoscimento — volto, voce, documenti — hanno tassi di errore diversi per etnia, genere, età, accenti. Progettare fallback umani, messaggi di errore non colpevolizzanti e percorsi alternativi non è optional: è inclusività di base.',
            'Il designer può chiedere dati di equità per segmento: tassi di completamento onboarding per età/disabilità/lingua, errori di riconoscimento per demografia, distribuzione di raccomandazioni. Senza metriche, il bias resta invisibile finché non esplode in uno scandalo mediatico.',
            'Case study: i filtri Snapchat che alteravano tratti afro-americani ("blackface filters"), o i sistemi di selezione CV che penalizzavano candidati donne. In entrambi i casi, l\'interfaccia ha reso normale una discriminazione algoritmica. Il designer avrebbe potuto — doveva — segnalare e redesignare.',
          ],
          keyTakeaways: [
            'Il bias algoritmico si manifesta in ciò che l\'interfaccia mostra, nasconde o nega',
            'Onboarding "ottimizzato" può escludere chi devia dal profilo maggioritario',
            'Interfacce di riconoscimento richiedono fallback e percorsi alternativi inclusivi',
            'Chiedere metriche di equità per segmento è parte del ruolo del designer',
          ],
          reflection: 'Pensa a un flusso di registrazione o verifica identità. Chi potrebbe fallire? Cosa vedrebbe? Come miglioreresti messaggi e alternative?',
        },
        en: {
          title: 'Bias in UX flows and recommendations',
          description: 'Filters, ranking, "optimised" onboarding — where the interface amplifies algorithmic inequalities.',
          body: [
            'Algorithmic bias does not stay in the backend: it emerges in the interface. A recommendation system that favours certain groups is visible in what appears on the homepage. A risk model that discriminates translates into different messages, limits and options for different users — often without explanation.',
            '"Smart" filters in hiring, dating, credit or healthcare can exclude opaquely. The designer who creates these flows — what to show, how to phrase a rejection, whether to offer appeal — determines whether exclusion is visible and contestable or silent.',
            'AI-optimised onboarding can seem like a UX improvement: fewer steps, personalisation, higher completion rate. But if it optimises for majority users (young, urban, tech-savvy), those who deviate from the "average" profile hit invisible obstacles — forms that do not understand their context, impossible data requests, exclusive language.',
            'Recognition interfaces — face, voice, documents — have different error rates by ethnicity, gender, age, accent. Designing human fallback, non-blaming error messages and alternative paths is not optional: it is baseline inclusivity.',
            'The designer can ask for equity metrics by segment: onboarding completion rates by age/disability/language, recognition errors by demographics, recommendation distribution. Without metrics, bias stays invisible until it explodes in a media scandal.',
            'Case study: Snapchat filters that altered African-American features ("blackface filters"), or CV screening systems that penalised women candidates. In both cases, the interface normalised algorithmic discrimination. The designer could — should — have flagged and redesigned.',
          ],
          keyTakeaways: [
            'Algorithmic bias manifests in what the interface shows, hides or denies',
            '"Optimised" onboarding can exclude those who deviate from the majority profile',
            'Recognition interfaces require fallback and inclusive alternative paths',
            'Asking for equity metrics by segment is part of the designer\'s role',
          ],
          reflection: 'Think of a registration or identity verification flow. Who might fail? What would they see? How would you improve messages and alternatives?',
        },
      },
      resources: [
        { title: 'Gender Shades — Joy Buolamwini', url: 'https://www.media.mit.edu/projects/gender-shades/overview/', type: 'article' },
        { title: 'ProPublica — Machine Bias', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing', type: 'article' },
        { title: 'Inclusive Design Principles', url: 'https://inclusivedesignprinciples.org/', type: 'article' },
      ],
    },
    {
      slug: 'accessibilita-e-contenuti-generati',
      readingTime: 7,
      content: {
        it: {
          title: 'Accessibilità quando l\'IA genera contenuti',
          description: 'Alt text, struttura semantica, contrasto e linguaggio — perché "generato" non significa "accessibile".',
          body: [
            'L\'IA generativa promette velocità: copy, immagini, alt text, traduzioni in secondi. Ma velocità senza validazione può produrre interfacce tecnicamente inaccessibili o esperienzialmente esclusive — anche rispettando superficialmente le checklist.',
            'L\'alt text generato automaticamente è spesso generico ("immagine di una persona") o sbagliato. Per screen reader users, questo è peggio di nessun alt text — dà falsa sicurezza. Ogni immagine significativa merita revisione umana o, al minimo, possibilità per l\'autore di correggere.',
            'La struttura semantica (heading hierarchy, landmark, label) viene spesso ignorata quando l\'AI genera intere pagine. Un wall of text senza H2/H3, bottoni senza label, form senza associazione label-input — problemi classici amplificati dalla velocità di generazione.',
            'Il contrasto e la leggibilità: palette "suggerite" dall\'AI possono fallire WCAG. Font decorativi generati per hero section possono essere illeggibili. Il design system esiste proprio per evitare che ogni generazione riparta da zero ignorando standard.',
            'Il linguaggio inclusivo e plain language non è automatico. Modelli addestrati su web generico producono copy gendered, idiomi esclusivi, complessità inutile. Per servizi pubblici, sanità, welfare — dove l\'accessibilità cognitiva è critica — la revisione umana è obbligatoria.',
            'Workflow consigliato: AI genera bozza → designer/reviewer verifica accessibilità (automated tools + test manuale) → test con utenti disabili o esperti a11y → publish. Saltare i passaggi centrali per "velocity" è debito etico che si paga in esclusione.',
          ],
          keyTakeaways: [
            'Output AI non garantisce accessibilità — serve validazione umana',
            'Alt text generico o errato danneggia più di alt text assente',
            'Struttura semantica e contrasto vanno verificati, non assunti',
            'Plain language e linguaggio inclusivo richiedono revisione, non solo generazione',
          ],
          reflection: 'Genera (o immagina) una landing con AI. Quali cinque check di accessibilità faresti prima di pubblicarla?',
        },
        en: {
          title: 'Accessibility when AI generates content',
          description: 'Alt text, semantic structure, contrast and language — why "generated" does not mean "accessible".',
          body: [
            'Generative AI promises speed: copy, images, alt text, translations in seconds. But speed without validation can produce technically inaccessible or experientially exclusive interfaces — even while superficially ticking checklists.',
            'Automatically generated alt text is often generic ("image of a person") or wrong. For screen reader users, this is worse than no alt text — it gives false confidence. Every meaningful image deserves human review or, at minimum, the ability for the author to correct it.',
            'Semantic structure (heading hierarchy, landmarks, labels) is often ignored when AI generates entire pages. A wall of text without H2/H3, buttons without labels, forms without label-input association — classic problems amplified by generation speed.',
            'Contrast and readability: AI-"suggested" palettes can fail WCAG. Decorative fonts generated for hero sections can be illegible. The design system exists precisely to prevent each generation starting from scratch ignoring standards.',
            'Inclusive language and plain language are not automatic. Models trained on generic web produce gendered copy, exclusive idioms, unnecessary complexity. For public services, healthcare, welfare — where cognitive accessibility is critical — human review is mandatory.',
            'Recommended workflow: AI generates draft → designer/reviewer verifies accessibility (automated tools + manual test) → test with disabled users or a11y experts → publish. Skipping central steps for "velocity" is ethical debt paid in exclusion.',
          ],
          keyTakeaways: [
            'AI output does not guarantee accessibility — human validation is needed',
            'Generic or wrong alt text harms more than missing alt text',
            'Semantic structure and contrast must be verified, not assumed',
            'Plain and inclusive language require review, not just generation',
          ],
          reflection: 'Generate (or imagine) a landing page with AI. What five accessibility checks would you run before publishing?',
        },
      },
      resources: [
        { title: 'W3C WAI — AI and accessibility', url: 'https://www.w3.org/WAI/', type: 'article' },
        { title: 'WebAIM — Contrast checker', url: 'https://webaim.org/resources/contrastchecker/', type: 'tool' },
        { title: 'GOV.UK — Content design guidance', url: 'https://www.gov.uk/guidance/content-design', type: 'article' },
      ],
    },
    {
      slug: 'ricerca-utente-etica-con-l-ia',
      readingTime: 8,
      content: {
        it: {
          title: 'Ricerca utente etica con l\'IA',
          description: 'Sintesi, persona sintetici, analisi automatica — linee guida per usare l\'IA senza tradire chi studi.',
          body: [
            'La ricerca UX con l\'IA può risparmiare tempo: trascrizione automatica, sintesi di interviste, tagging di feedback, clustering di pain point. Ma introduce rischi etici che molti team ignorano: consenso, rappresentatività, confidenzialità e verità dei dati presentati.',
            'Regola base: i dati delle persone reali — interviste, recording, survey — non vanno caricati in tool AI senza consenso esplicito e policy chiara su cosa succede ai dati (addestramento, storage, condivisione). Molti tool SaaS usano input utente per migliorare modelli. Informare i partecipanti alla ricerca è obbligatorio.',
            'I persona e le user journey generate da LLM non sono ricerca — sono fiction plausibile. Utili per warm-up creativo o esplorazione iniziale, pericolosissimi se presentati in stakeholder meeting come "i nostri utenti". Etichettali sempre: "Ipotesi da validare", non "Insight da ricerca".',
            'Gli "utenti sintetici" — agenti AI che simulano comportamento utente — sono dibattuti. Possono stress-testare ipotesi, ma replicano bias del modello e non catturano contesto culturale, emozione, vincoli materiali. Non sostituiscono nemmeno 5 interviste con persone reali del target.',
            'La sintesi automatica di interviste può omologare voci diverse, perdere sfumature, enfatizzare ciò che il modello considera "normale". Il researcher deve leggere le trascrizioni originali, specialmente per gruppi sottorappresentati i cui pattern il modello potrebbe sminuire.',
            'Participatory e co-design restano gold standard per prodotti AI che impattano comunità vulnerabili. Coinvolgere rappresentanti di chi sarà classificato, escluso o sorvegliato dal sistema non è buona coscienza — produce insight che nessun dataset cattura e previene danni pre-lancio.',
          ],
          keyTakeaways: [
            'Dati di ricerca reali richiedono consenso esplicito prima dell\'uso in tool AI',
            'Persona e insight generati vanno etichettati come ipotesi, non come verità',
            'Utenti sintetici non sostituiscono interviste con persone reali',
            'Co-design con comunità impattate previene danni e arricchisce il prodotto',
          ],
          reflection: 'Se il tuo team volesse usare ChatGPT per sintetizzare 20 interviste, quali regole proporresti? Cosa diresti ai partecipanti alla ricerca?',
        },
        en: {
          title: 'Ethical user research with AI',
          description: 'Synthesis, synthetic personas, automatic analysis — guidelines for using AI without betraying those you study.',
          body: [
            'UX research with AI can save time: automatic transcription, interview synthesis, feedback tagging, pain point clustering. But it introduces ethical risks many teams ignore: consent, representativeness, confidentiality and truthfulness of data presented.',
            'Basic rule: real people\'s data — interviews, recordings, surveys — must not be uploaded to AI tools without explicit consent and clear policy on what happens to data (training, storage, sharing). Many SaaS tools use user input to improve models. Informing research participants is mandatory.',
            'Personas and user journeys generated by LLMs are not research — they are plausible fiction. Useful for creative warm-up or initial exploration, dangerous if presented in stakeholder meetings as "our users". Always label them: "Hypothesis to validate", not "Research insight".',
            '"Synthetic users" — AI agents simulating user behaviour — are debated. They can stress-test hypotheses, but replicate model bias and do not capture cultural context, emotion, material constraints. They do not replace even 5 interviews with real people from the target group.',
            'Automatic interview synthesis can homogenise diverse voices, lose nuance, emphasise what the model considers "normal". The researcher must read original transcripts, especially for underrepresented groups whose patterns the model might downplay.',
            'Participatory and co-design remain the gold standard for AI products affecting vulnerable communities. Involving representatives of those who will be classified, excluded or surveilled by the system is not feel-good — it produces insights no dataset captures and prevents pre-launch harm.',
          ],
          keyTakeaways: [
            'Real research data requires explicit consent before use in AI tools',
            'Generated personas and insights must be labelled as hypotheses, not truth',
            'Synthetic users do not replace interviews with real people',
            'Co-design with affected communities prevents harm and enriches the product',
          ],
          reflection: 'If your team wanted to use ChatGPT to synthesise 20 interviews, what rules would you propose? What would you tell research participants?',
        },
      },
      resources: [
        { title: 'NNG — AI for UX Research: ethics', url: 'https://www.nngroup.com/articles/ai-ux-research/', type: 'article' },
        { title: 'IDEO — AI + Design Research', url: 'https://www.ideo.com/', type: 'article' },
        { title: 'Data & Society — Research ethics', url: 'https://datasociety.net/', type: 'article' },
      ],
    },
  ],
};
