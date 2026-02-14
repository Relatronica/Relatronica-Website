import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz05: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Tecnologie Responsabili',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 05: bias algoritmici, privacy, sorveglianza e design per il benessere.',
    },
    en: {
      title: 'Quiz — Responsible Technologies',
      description: 'Test your understanding of Module 05 key concepts: algorithmic bias, privacy, surveillance and design for well-being.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q05-01',
      content: {
        it: {
          question: 'Quali sono le tre fonti principali dei bias algoritmici?',
          options: [
            'Hardware difettoso, bug nel codice e mancanza di test',
            'Dati di addestramento distorti, scelta delle variabili e funzione obiettivo',
            'Incompetenza dei programmatori, fretta e mancanza di budget',
            'Interferenze elettromagnetiche, errori di rete e limiti computazionali',
          ],
          explanation: 'I bias algoritmici nascono da: dati di addestramento che riflettono disuguaglianze storiche, scelte politiche mascherate da tecniche nella selezione delle variabili, e funzioni obiettivo che privilegiano efficienza su equità.',
        },
        en: {
          question: 'What are the three main sources of algorithmic bias?',
          options: [
            'Faulty hardware, code bugs and lack of testing',
            'Distorted training data, variable choices and objective function',
            'Programmer incompetence, rush and lack of budget',
            'Electromagnetic interference, network errors and computational limits',
          ],
          explanation: 'Algorithmic biases arise from: training data reflecting historical inequalities, political choices disguised as technical ones in variable selection, and objective functions prioritising efficiency over equity.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q05-02',
      content: {
        it: {
          question: 'Cos\'è il "capitalismo della sorveglianza" secondo Shoshana Zuboff?',
          options: [
            'Un sistema in cui i governi usano la tecnologia per sorvegliare i cittadini',
            'Un modello economico in cui le piattaforme tech vendono previsioni sul comportamento umano estratte dalla sorveglianza delle nostre attività',
            'Un mercato dove si vendono telecamere di sicurezza',
            'La tendenza dei social media a mostrare pubblicità personalizzata',
          ],
          explanation: 'Zuboff descrive il capitalismo della sorveglianza come un modello dove le piattaforme trasformano i dati comportamentali in "futures comportamentali" da vendere sul mercato delle previsioni.',
        },
        en: {
          question: 'What is "surveillance capitalism" according to Shoshana Zuboff?',
          options: [
            'A system where governments use technology to surveil citizens',
            'An economic model where tech platforms sell predictions about human behaviour extracted from surveillance of our activities',
            'A market where security cameras are sold',
            'The tendency of social media to show personalised advertising',
          ],
          explanation: 'Zuboff describes surveillance capitalism as a model where platforms transform behavioural data into "behavioural futures" to sell on the predictions market.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q05-03',
      content: {
        it: {
          question: 'Cosa significa "privacy by design"?',
          options: [
            'Aggiungere un\'informativa sulla privacy dopo aver completato il prodotto',
            'Progettare sistemi che raccolgono il minimo di dati necessario e li proteggono fin dall\'inizio',
            'Usare un bel design per il banner dei cookie',
            'Nascondere le impostazioni della privacy in menu complessi',
          ],
          explanation: 'La privacy by design è un principio architetturale: i sistemi devono essere progettati fin dall\'inizio per la protezione dei dati, non come aggiunta successiva.',
        },
        en: {
          question: 'What does "privacy by design" mean?',
          options: [
            'Adding a privacy notice after completing the product',
            'Designing systems that collect minimum necessary data and protect it from the start',
            'Using nice design for the cookie banner',
            'Hiding privacy settings in complex menus',
          ],
          explanation: 'Privacy by design is an architectural principle: systems must be designed from the start for data protection, not as an afterthought.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q05-04',
      content: {
        it: {
          question: 'Cosa sono i "dark pattern"?',
          options: [
            'Temi scuri nelle interfacce utente per risparmiare batteria',
            'Bug di design che rendono le app difficili da usare',
            'Interfacce progettate intenzionalmente per manipolare le decisioni degli utenti',
            'Errori di accessibilità nei siti web',
          ],
          explanation: 'I dark pattern sono interfacce progettate per manipolare: il bottone "accetta" grande e colorato, le sottoscrizioni impossibili da cancellare, i timer che creano urgenza falsa.',
        },
        en: {
          question: 'What are "dark patterns"?',
          options: [
            'Dark themes in user interfaces to save battery',
            'Design bugs that make apps difficult to use',
            'Interfaces intentionally designed to manipulate user decisions',
            'Accessibility errors in websites',
          ],
          explanation: 'Dark patterns are interfaces designed to manipulate: the large colourful "accept" button, subscriptions impossible to cancel, countdown timers creating false urgency.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q05-05',
      content: {
        it: {
          question: 'Cos\'è la "sovranità digitale"?',
          options: [
            'Il diritto di un paese di censurare internet',
            'La capacità di una comunità o nazione di controllare la propria infrastruttura digitale',
            'Il dominio delle aziende tech sullo spazio digitale',
            'La proprietà intellettuale dei software',
          ],
          explanation: 'La sovranità digitale va oltre la privacy individuale: è la capacità di gestire i propri dati con strumenti che si controllano, su server che si possiedono, con regole scelte democraticamente.',
        },
        en: {
          question: 'What is "digital sovereignty"?',
          options: [
            'A country\'s right to censor the internet',
            'The ability of a community or nation to control its own digital infrastructure',
            'The dominance of tech companies over digital space',
            'The intellectual property of software',
          ],
          explanation: 'Digital sovereignty goes beyond individual privacy: it is the ability to manage one\'s data with controlled tools, on owned servers, under democratically chosen rules.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const module05: CourseModule = {
  slug: 'tecnologie-responsabili',
  number: '05',
  color: 'rose',
  iconName: 'Shield',
  content: {
    it: {
      title: 'Tecnologie Responsabili',
      description: 'Bias algoritmici, sorveglianza, privacy e sovranità digitale: capire i rischi della tecnologia per progettarne una migliore.',
    },
    en: {
      title: 'Responsible Technologies',
      description: 'Algorithmic bias, surveillance, privacy and digital sovereignty: understanding technology\'s risks to design a better one.',
    },
  },
  quiz: quiz05,
  lessons: [
    {
      slug: 'bias-algoritmici',
      readingTime: 8,
      content: {
        it: {
          title: 'Bias algoritmici e decisioni automatizzate',
          description: 'Quando gli algoritmi discriminano: casi reali, cause strutturali e cosa possiamo fare.',
          body: [
            'Nel 2018, Amazon scoprì che il suo sistema di recruiting basato su intelligenza artificiale penalizzava sistematicamente i curriculum delle donne. L\'algoritmo era stato addestrato su dieci anni di assunzioni — in un\'azienda dominata da uomini. Aveva "imparato" che essere donna era un fattore negativo. Amazon abbandonò il sistema, ma il caso rivelò un problema strutturale: i bias algoritmici non sono errori, sono specchi delle disuguaglianze della società che li produce.',
            'COMPAS, un algoritmo usato nei tribunali americani per valutare il rischio di recidiva dei detenuti, è forse il caso più noto. Un\'inchiesta di ProPublica nel 2016 dimostrò che il sistema sovrastimava sistematicamente il rischio per i detenuti afroamericani e lo sottostimava per i bianchi. Le decisioni sulla libertà delle persone venivano prese da un algoritmo che nessuno poteva ispezionare, costruito da un\'azienda privata, con criteri opachi.',
            'I bias algoritmici hanno tre fonti principali. La prima sono i dati di addestramento: se i dati riflettono disuguaglianze storiche (e quasi sempre lo fanno), l\'algoritmo le perpetuerà. La seconda è la scelta delle variabili: decidere cosa misurare e cosa ignorare è una scelta politica mascherata da tecnica. La terza è la funzione obiettivo: ottimizzare per l\'efficienza produce risultati diversi dall\'ottimizzare per l\'equità.',
            'Il problema è aggravato dall\'opacità. Molti algoritmi decisionali sono "black box": producono output senza spiegare come ci arrivano. Quando un algoritmo nega un mutuo, rifiuta un curriculum o determina la pena di un detenuto, la persona coinvolta ha il diritto di sapere perché. Il GDPR europeo prevede il "diritto alla spiegazione", ma la sua applicazione resta vaga.',
            'Cosa possiamo fare? Audit algoritmici indipendenti, trasparenza nei dataset di addestramento, diversità nei team di sviluppo, e soprattutto: decidere consapevolmente quando un algoritmo è appropriato e quando non lo è. Non tutto deve essere automatizzato. Alcune decisioni — quelle che riguardano la libertà, la salute, l\'educazione — richiedono giudizio umano, contesto e compassione che nessun algoritmo può replicare.',
          ],
          keyTakeaways: [
            'I bias algoritmici sono specchi delle disuguaglianze sociali, non errori tecnici',
            'Le tre fonti: dati di addestramento distorti, scelte di variabili politiche, funzioni obiettivo non neutre',
            'L\'opacità degli algoritmi "black box" viola il diritto alla spiegazione',
            'Servono audit indipendenti, trasparenza e il coraggio di non automatizzare tutto',
          ],
          reflection: 'Pensa a una decisione che ti ha riguardato presa (probabilmente) da un algoritmo: un feed social, un risultato di ricerca, un prezzo personalizzato. Come ti senti a non sapere perché?',
        },
        en: {
          title: 'Algorithmic bias and automated decisions',
          description: 'When algorithms discriminate: real cases, structural causes and what we can do.',
          body: [
            'In 2018, Amazon discovered that its AI-based recruiting system systematically penalised women\'s CVs. The algorithm had been trained on ten years of hiring data — in a male-dominated company. It had "learned" that being a woman was a negative factor. Amazon abandoned the system, but the case revealed a structural problem: algorithmic biases are not errors, they are mirrors of the inequalities in the society that produces them.',
            'COMPAS, an algorithm used in American courts to assess prisoners\' recidivism risk, is perhaps the most well-known case. A ProPublica investigation in 2016 showed that the system systematically overestimated risk for African-American prisoners and underestimated it for white ones. Decisions about people\'s freedom were being made by an algorithm that no one could inspect, built by a private company, with opaque criteria.',
            'Algorithmic biases have three main sources. First is training data: if the data reflects historical inequalities (and it almost always does), the algorithm will perpetuate them. Second is the choice of variables: deciding what to measure and what to ignore is a political choice disguised as technical. Third is the objective function: optimising for efficiency produces different results from optimising for equity.',
            'The problem is compounded by opacity. Many decision-making algorithms are "black boxes": they produce outputs without explaining how they arrive at them. When an algorithm denies a mortgage, rejects a CV or determines a prisoner\'s sentence, the person involved has the right to know why. The European GDPR provides for a "right to explanation", but its enforcement remains vague.',
            'What can we do? Independent algorithmic audits, transparency in training datasets, diversity in development teams, and above all: consciously deciding when an algorithm is appropriate and when it is not. Not everything needs to be automated. Some decisions — those concerning freedom, health, education — require human judgement, context and compassion that no algorithm can replicate.',
          ],
          keyTakeaways: [
            'Algorithmic biases are mirrors of social inequalities, not technical errors',
            'Three sources: distorted training data, political variable choices, non-neutral objective functions',
            'The opacity of "black box" algorithms violates the right to explanation',
            'We need independent audits, transparency and the courage not to automate everything',
          ],
          reflection: 'Think of a decision affecting you that was (probably) made by an algorithm: a social feed, a search result, a personalised price. How do you feel about not knowing why?',
        },
      },
      resources: [
        { title: 'Cathy O\'Neil — Weapons of Math Destruction', url: 'https://weaponsofmathdestructionbook.com/', type: 'book' },
        { title: 'ProPublica — Machine Bias', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing', type: 'article' },
        { title: 'AI Now Institute', url: 'https://ainowinstitute.org/', type: 'tool' },
      ],
    },
    {
      slug: 'privacy-e-sovranita-digitale',
      readingTime: 8,
      content: {
        it: {
          title: 'Privacy by design e sovranità digitale',
          description: 'Dal capitalismo della sorveglianza alla sovranità digitale: riprendere il controllo dei propri dati.',
          body: [
            'Nel 2019, Shoshana Zuboff pubblicò "Il capitalismo della sorveglianza" — un libro che diede un nome a ciò che milioni di persone percepivano senza riuscire ad articolarlo. La tesi: le grandi piattaforme tecnologiche non vendono pubblicità. Vendono previsioni sul comportamento umano, estratte dalla sorveglianza costante delle nostre attività digitali. I nostri click, le nostre ricerche, i nostri messaggi, i nostri movimenti — tutto diventa materia prima per un mercato di "futures comportamentali".',
            'La privacy non è "non ho nulla da nascondere". È il diritto di decidere quali informazioni condividere, con chi, e per quale scopo. È il fondamento della libertà di pensiero: se sai di essere osservato, cambi comportamento — è l\'effetto panottico descritto da Michel Foucault. La sorveglianza costante non ha bisogno di punire: basta che la possibilità della punizione esista per modificare il comportamento.',
            'La "privacy by design" è un approccio ingegneristico sviluppato da Ann Cavoukian negli anni \'90. L\'idea è che la protezione dei dati non debba essere un\'aggiunta successiva, ma un principio architetturale: i sistemi devono essere progettati fin dall\'inizio per raccogliere il minimo di dati necessario, per proteggerli con crittografia, per dare all\'utente il controllo. Non è un\'opzione: è un modo di pensare il software.',
            'La sovranità digitale va oltre la privacy individuale. È la capacità di una comunità, una nazione o un\'organizzazione di controllare la propria infrastruttura digitale. Quando una scuola usa Google Workspace, quando un ospedale archivia dati su AWS, quando un governo comunica via WhatsApp — chi ha realmente il controllo? La sovranità digitale chiede: possiamo gestire i nostri dati con strumenti che controlliamo, su server che possediamo, con regole che abbiamo scelto?',
            'In Europa, iniziative come Gaia-X, NextCloud, e il Data Governance Act cercano di costruire un\'alternativa alla dipendenza dai giganti tech americani e cinesi. In Italia, il Piano Triennale per l\'Informatica nella PA spinge verso il cloud pubblico. Sono primi passi, ma la direzione è chiara: la sovranità digitale non è nazionalismo tecnologico — è autodeterminazione.',
          ],
          keyTakeaways: [
            'Il capitalismo della sorveglianza trasforma i dati comportamentali in prodotti predittivi',
            'La privacy è il fondamento della libertà di pensiero, non "non ho nulla da nascondere"',
            'La privacy by design è un principio architetturale: protezione dei dati fin dalla progettazione',
            'La sovranità digitale è il controllo comunitario sull\'infrastruttura digitale',
          ],
          reflection: 'Quanti servizi digitali usi che sono di proprietà di aziende il cui modello di business è vendere dati? Esistono alternative? Cosa ti impedisce di usarle?',
        },
        en: {
          title: 'Privacy by design and digital sovereignty',
          description: 'From surveillance capitalism to digital sovereignty: taking back control of our data.',
          body: [
            'In 2019, Shoshana Zuboff published "The Age of Surveillance Capitalism" — a book that gave a name to what millions of people sensed without being able to articulate. The thesis: big tech platforms don\'t sell advertising. They sell predictions about human behaviour, extracted from constant surveillance of our digital activities. Our clicks, searches, messages, movements — everything becomes raw material for a market of "behavioural futures".',
            'Privacy is not "I have nothing to hide". It is the right to decide what information to share, with whom, and for what purpose. It is the foundation of freedom of thought: if you know you are being watched, you change your behaviour — this is the panoptic effect described by Michel Foucault. Constant surveillance doesn\'t need to punish: it is enough that the possibility of punishment exists to modify behaviour.',
            '"Privacy by design" is an engineering approach developed by Ann Cavoukian in the 1990s. The idea is that data protection should not be an afterthought, but an architectural principle: systems must be designed from the start to collect the minimum data necessary, protect it with encryption, and give users control. It is not an option: it is a way of thinking about software.',
            'Digital sovereignty goes beyond individual privacy. It is the ability of a community, nation or organisation to control its own digital infrastructure. When a school uses Google Workspace, when a hospital stores data on AWS, when a government communicates via WhatsApp — who really has control? Digital sovereignty asks: can we manage our data with tools we control, on servers we own, under rules we have chosen?',
            'In Europe, initiatives like Gaia-X, NextCloud, and the Data Governance Act seek to build an alternative to dependence on American and Chinese tech giants. In Italy, the Three-Year Plan for IT in Public Administration pushes towards public cloud. These are first steps, but the direction is clear: digital sovereignty is not technological nationalism — it is self-determination.',
          ],
          keyTakeaways: [
            'Surveillance capitalism transforms behavioural data into predictive products',
            'Privacy is the foundation of freedom of thought, not "I have nothing to hide"',
            'Privacy by design is an architectural principle: data protection from the ground up',
            'Digital sovereignty is community control over digital infrastructure',
          ],
          reflection: 'How many digital services do you use that are owned by companies whose business model is selling data? Do alternatives exist? What stops you from using them?',
        },
      },
      resources: [
        { title: 'Shoshana Zuboff — The Age of Surveillance Capitalism', url: 'https://shoshanazuboff.com/book/about/', type: 'book' },
        { title: 'Electronic Frontier Foundation', url: 'https://www.eff.org/', type: 'tool' },
        { title: 'European Digital Rights (EDRi)', url: 'https://edri.org/', type: 'article' },
      ],
    },
    {
      slug: 'progettare-per-il-benessere',
      readingTime: 7,
      content: {
        it: {
          title: 'Progettare per il benessere collettivo',
          description: 'Economia dell\'attenzione, dark pattern e tecnologia umana: progettare per le persone, non contro di loro.',
          body: [
            'Nel 2013, l\'ex designer di Google Tristan Harris scrisse un memo interno intitolato "A Call to Minimize Distraction & Respect Users\' Attention" — un documento di 141 pagine che accusava la sua stessa azienda di progettare prodotti intenzionalmente addictivi. Il memo fu l\'inizio del movimento per la "humane technology" e portò Harris a fondare il Center for Humane Technology nel 2018.',
            'L\'economia dell\'attenzione è il modello economico che domina il web: i servizi sono gratuiti perché il prodotto siamo noi — o meglio, la nostra attenzione. Ogni notifica, ogni scroll infinito, ogni autoplay è progettato per massimizzare il tempo che passiamo sulla piattaforma. Non è un effetto collaterale: è il business model. E i costi — ansia, dipendenza, frammentazione dell\'attenzione, polarizzazione — li paghiamo noi.',
            'I dark pattern sono la manifestazione più visibile di questo approccio. Sono interfacce progettate per manipolare: il bottone "accetta tutti i cookie" grande e colorato accanto a un "gestisci le preferenze" piccolo e grigio. La sottoscrizione facile da attivare e impossibile da cancellare. Il timer del countdown che crea urgenza falsa. Il designer norvegese Harry Brignull ha catalogato decine di questi pattern — e l\'UE ha iniziato a regolamentarli con il Digital Services Act.',
            'Ma la critica non basta. Serve una visione alternativa. La "humane technology" propone di progettare tecnologia che rispetta il tempo, l\'attenzione e il benessere delle persone. Non è utopia: è business sense. Strumenti come Notion, Obsidian, Signal dimostrano che è possibile creare prodotti di successo senza manipolazione. Il modello alternativo esiste — ciò che manca è la pressione dei consumatori e dei regolatori per renderlo la norma.',
            'In Relatronica, ogni scelta di design è guidata da questo principio. NextHuman non ha notifiche push, non ha scroll infinito, non ha metriche di engagement. Ha informazioni strutturate, navigazione intuitiva e il rispetto del tempo di chi lo usa. Non vendiamo attenzione — la catalizzamo verso ciò che conta.',
          ],
          keyTakeaways: [
            'L\'economia dell\'attenzione monetizza il nostro tempo: i servizi "gratuiti" costano in attenzione e benessere',
            'I dark pattern sono interfacce progettate per manipolare le decisioni degli utenti',
            'La humane technology propone design che rispetta tempo, attenzione e benessere',
            'Il modello alternativo esiste (Signal, Notion, Obsidian) — serve pressione per renderlo la norma',
          ],
          reflection: 'Per una settimana, conta le notifiche che ricevi al giorno. Quante ti sono realmente utili? Quante sono progettate per riportarti sulla piattaforma?',
        },
        en: {
          title: 'Designing for collective well-being',
          description: 'Attention economy, dark patterns and humane technology: designing for people, not against them.',
          body: [
            'In 2013, former Google designer Tristan Harris wrote an internal memo titled "A Call to Minimize Distraction & Respect Users\' Attention" — a 141-page document accusing his own company of intentionally designing addictive products. The memo was the beginning of the "humane technology" movement and led Harris to found the Center for Humane Technology in 2018.',
            'The attention economy is the economic model dominating the web: services are free because the product is us — or rather, our attention. Every notification, every infinite scroll, every autoplay is designed to maximise the time we spend on the platform. It is not a side effect: it is the business model. And the costs — anxiety, addiction, attention fragmentation, polarisation — are paid by us.',
            'Dark patterns are the most visible manifestation of this approach. They are interfaces designed to manipulate: the "accept all cookies" button, large and colourful, beside a "manage preferences" link, small and grey. The subscription easy to activate and impossible to cancel. The countdown timer creating false urgency. Norwegian designer Harry Brignull has catalogued dozens of these patterns — and the EU has begun regulating them through the Digital Services Act.',
            'But criticism is not enough. An alternative vision is needed. "Humane technology" proposes designing technology that respects people\'s time, attention and well-being. It is not utopia: it is good business sense. Tools like Notion, Obsidian, Signal demonstrate that it is possible to create successful products without manipulation. The alternative model exists — what is missing is pressure from consumers and regulators to make it the norm.',
            'At Relatronica, every design choice is guided by this principle. NextHuman has no push notifications, no infinite scroll, no engagement metrics. It has structured information, intuitive navigation and respect for users\' time. We don\'t sell attention — we channel it towards what matters.',
          ],
          keyTakeaways: [
            'The attention economy monetises our time: "free" services cost us attention and well-being',
            'Dark patterns are interfaces designed to manipulate user decisions',
            'Humane technology proposes design that respects time, attention and well-being',
            'The alternative model exists (Signal, Notion, Obsidian) — pressure is needed to make it the norm',
          ],
          reflection: 'For one week, count the notifications you receive per day. How many are genuinely useful? How many are designed to pull you back to the platform?',
        },
      },
      resources: [
        { title: 'Center for Humane Technology', url: 'https://www.humanetech.com/', type: 'tool' },
        { title: 'Harry Brignull — Deceptive Patterns', url: 'https://www.deceptive.design/', type: 'article' },
        { title: 'The Social Dilemma (Documentary)', url: 'https://www.thesocialdilemma.com/', type: 'video' },
      ],
    },
  ],
};
