import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz02: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Bias e giustizia algoritmica',
      description: 'Verifica la tua comprensione del Modulo 02: origini del bias algoritmico, casi studio e strategie di mitigazione.',
    },
    en: {
      title: 'Quiz — Bias and algorithmic justice',
      description: 'Test your understanding of Module 02: origins of algorithmic bias, case studies and mitigation strategies.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q02-01',
      content: {
        it: {
          question: 'Da dove nasce principalmente il bias algoritmico?',
          options: [
            'Da errori nel codice sorgente degli algoritmi',
            'Da dati di addestramento che riflettono disuguaglianze storiche e sociali',
            'Dalla malvagità intenzionale dei programmatori',
            'Dal fatto che i computer non sono abbastanza potenti',
          ],
          explanation: 'Il bias algoritmico nasce principalmente dai dati di addestramento che riflettono le disuguaglianze storiche della società. L\'algoritmo non "crea" discriminazione, ma la codifica e la amplifica a partire dai dati.',
        },
        en: {
          question: 'Where does algorithmic bias mainly originate from?',
          options: [
            'From errors in the source code of algorithms',
            'From training data that reflects historical and social inequalities',
            'From the intentional malice of programmers',
            'From computers not being powerful enough',
          ],
          explanation: 'Algorithmic bias mainly originates from training data that reflects historical societal inequalities. The algorithm does not "create" discrimination, but encodes and amplifies it from the data.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q02-02',
      content: {
        it: {
          question: 'Cos\'è il sistema COMPAS, usato come caso studio nel bias algoritmico?',
          options: [
            'Un sistema di navigazione satellitare per tribunali',
            'Un software che prevede la probabilità di recidiva dei detenuti, criticato per bias razziale',
            'Un algoritmo che assegna le sentenze automaticamente',
            'Un database di precedenti giuridici usato dai giudici',
          ],
          explanation: 'COMPAS è un software usato nei tribunali USA per stimare il rischio di recidiva. L\'inchiesta di ProPublica nel 2016 ha rivelato che il sistema assegnava sistematicamente punteggi di rischio più alti alle persone nere rispetto alle bianche, anche a parità di condizioni.',
        },
        en: {
          question: 'What is the COMPAS system, used as a case study in algorithmic bias?',
          options: [
            'A satellite navigation system for courts',
            'Software that predicts prisoner recidivism probability, criticised for racial bias',
            'An algorithm that assigns sentences automatically',
            'A legal precedent database used by judges',
          ],
          explanation: 'COMPAS is software used in US courts to estimate recidivism risk. ProPublica\'s 2016 investigation revealed that the system systematically assigned higher risk scores to Black people than to white people, even under comparable conditions.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q02-03',
      content: {
        it: {
          question: 'Perché eliminare il bias algoritmico è particolarmente difficile?',
          options: [
            'Perché i programmatori non si impegnano abbastanza',
            'Perché diverse definizioni di "equità" possono essere matematicamente incompatibili tra loro',
            'Perché il bias esiste solo nei sistemi vecchi, non in quelli nuovi',
            'Perché richiede computer quantistici',
          ],
          explanation: 'I ricercatori Chouldechova e Kleinberg hanno dimostrato che diverse definizioni matematiche di equità (es. parità di falsi positivi vs. calibrazione uguale) possono essere logicamente incompatibili. Non esiste un\'unica soluzione tecnica: le scelte su "quale equità" sono sempre politiche.',
        },
        en: {
          question: 'Why is eliminating algorithmic bias particularly difficult?',
          options: [
            'Because programmers don\'t try hard enough',
            'Because different definitions of "fairness" can be mathematically incompatible with each other',
            'Because bias only exists in old systems, not new ones',
            'Because it requires quantum computers',
          ],
          explanation: 'Researchers Chouldechova and Kleinberg demonstrated that different mathematical definitions of fairness (e.g. equal false positive rates vs. equal calibration) can be logically incompatible. There is no single technical solution: choices about "which fairness" are always political.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q02-04',
      content: {
        it: {
          question: 'Cosa si intende per "audit algoritmico"?',
          options: [
            'Controllare che il codice non abbia bug',
            'Un\'analisi sistematica per verificare se un sistema algoritmico produce risultati discriminatori',
            'Un aggiornamento software periodico',
            'La registrazione di tutti gli input e output di un sistema',
          ],
          explanation: 'Un audit algoritmico è un\'analisi indipendente che esamina sistematicamente gli output di un sistema per verificare se produce risultati discriminatori verso determinati gruppi. È uno degli strumenti principali per la responsabilizzazione delle aziende che usano AI.',
        },
        en: {
          question: 'What is an "algorithmic audit"?',
          options: [
            'Checking that the code has no bugs',
            'A systematic analysis to verify whether an algorithmic system produces discriminatory results',
            'A periodic software update',
            'Recording all inputs and outputs of a system',
          ],
          explanation: 'An algorithmic audit is an independent analysis that systematically examines a system\'s outputs to verify whether it produces discriminatory results towards certain groups. It is one of the main tools for holding companies that use AI accountable.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q02-05',
      content: {
        it: {
          question: 'Quale approccio è più efficace per affrontare il bias algoritmico?',
          options: [
            'Affidarsi esclusivamente a soluzioni tecniche (dataset più grandi, algoritmi migliori)',
            'Vietare completamente l\'uso dell\'AI in tutti i contesti sensibili',
            'Combinare audit tecnici, diversità nei team, trasparenza e coinvolgimento delle comunità colpite',
            'Lasciare che il mercato si auto-regoli',
          ],
          explanation: 'Il bias algoritmico è un problema socio-tecnico che richiede soluzioni socio-tecniche. Le sole correzioni tecniche non bastano se i team mancano di diversità, i processi non sono trasparenti e le comunità colpite non hanno voce nel design dei sistemi.',
        },
        en: {
          question: 'Which approach is most effective in addressing algorithmic bias?',
          options: [
            'Relying exclusively on technical solutions (larger datasets, better algorithms)',
            'Completely banning AI use in all sensitive contexts',
            'Combining technical audits, team diversity, transparency and involvement of affected communities',
            'Letting the market self-regulate',
          ],
          explanation: 'Algorithmic bias is a socio-technical problem that requires socio-technical solutions. Technical fixes alone are insufficient if teams lack diversity, processes are not transparent and affected communities have no voice in system design.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const aiModule02: CourseModule = {
  slug: 'bias-giustizia-algoritmica',
  number: '02',
  color: 'red',
  iconName: 'Scale',
  content: {
    it: {
      title: 'Bias e giustizia algoritmica',
      description: 'Da dove nasce il bias algoritmico, come si manifesta nella giustizia, nel lavoro e nella sanità, e come possiamo mitigarlo.',
    },
    en: {
      title: 'Bias and algorithmic justice',
      description: 'Where algorithmic bias comes from, how it manifests in justice, work and healthcare, and how we can mitigate it.',
    },
  },
  quiz: quiz02,
  lessons: [
    {
      slug: 'origini-del-bias-algoritmico',
      readingTime: 8,
      content: {
        it: {
          title: 'Da dove nasce il bias algoritmico',
          description: 'Il bias non è un errore tecnico ma un riflesso delle disuguaglianze sociali codificate nei dati.',
          body: [
            'Nel 2015, Google Photos etichettò la foto di due persone nere come "gorilla". Non era un errore isolato, né il risultato di programmatori razzisti: era la conseguenza prevedibile di un sistema di riconoscimento immagini addestrato su un dataset che sotto-rappresentava le persone nere. Il sistema aveva "imparato" che certi pattern di pixel corrispondevano a "gorilla" perché nei dati di addestramento quei pattern non erano sufficientemente associati a "persona".',
            'Questo incidente — uno dei tanti — illustra una verità fondamentale: il bias algoritmico non nasce nel codice, nasce nei dati. E i dati sono il prodotto della società che li genera. Se una società discrimina sulla base della razza, del genere o della classe sociale, i dati che produce rifletteranno quelle discriminazioni. Un algoritmo addestrato su quei dati non farà che codificare e amplificare le stesse disuguaglianze.',
            'Ma il bias nei dati non è l\'unica fonte. Safiya Umoja Noble, nel suo libro "Algorithms of Oppression", documenta come le scelte di design — come classifichiamo le informazioni, quali metriche ottimizziamo, come definiamo il "successo" — incorporano valori e priorità che non sono mai neutri. Se un sistema di selezione del personale è ottimizzato per trovare candidati "simili" ai dipendenti attuali, e l\'azienda è prevalentemente bianca e maschile, il sistema perpetuerà quella composizione. La discriminazione non è un bug: è il sistema che funziona esattamente come progettato.',
            'Ci sono almeno tre livelli di bias che dobbiamo riconoscere. Il bias storico: i dati riflettono discriminazioni passate (es. la storia creditizia riflette decenni di discriminazione nell\'accesso al credito per le minoranze). Il bias di rappresentazione: alcuni gruppi sono sotto- o sovra-rappresentati nei dataset. Il bias di misurazione: le variabili che misuriamo non catturano la realtà in modo equo (es. usare il codice postale come proxy per il "rischio", sapendo che i codici postali correlano con la razza a causa della segregazione residenziale).',
            'Riconoscere queste fonti di bias è essenziale perché ci protegge da una falsa soluzione: credere che basti "raccogliere più dati" o "migliorare l\'algoritmo" per eliminare la discriminazione. Il problema non è solo tecnico — è sociale, storico, politico. E richiede soluzioni che operino su tutti questi livelli.',
          ],
          keyTakeaways: [
            'Il bias algoritmico nasce dai dati, non dal codice: i dati riflettono le disuguaglianze della società',
            'Le scelte di design (metriche, classificazioni, definizioni di successo) incorporano valori non neutri',
            'Esistono almeno tre livelli di bias: storico, di rappresentazione e di misurazione',
            'Non basta "migliorare i dati" — il problema richiede soluzioni socio-tecniche',
          ],
          reflection: 'Pensa a una decisione importante della tua vita che potrebbe essere influenzata da un algoritmo (credito, assicurazione, assunzione). Quali dati storici potrebbe usare quel sistema? Quei dati riflettono il tuo potenziale reale o le circostanze storiche del tuo gruppo sociale?',
        },
        en: {
          title: 'Where algorithmic bias comes from',
          description: 'Bias is not a technical error but a reflection of social inequalities encoded in data.',
          body: [
            'In 2015, Google Photos labelled a photo of two Black people as "gorillas". It was not an isolated error, nor the result of racist programmers: it was the predictable consequence of an image recognition system trained on a dataset that under-represented Black people. The system had "learned" that certain pixel patterns corresponded to "gorilla" because in the training data those patterns were not sufficiently associated with "person".',
            'This incident — one of many — illustrates a fundamental truth: algorithmic bias does not originate in the code, it originates in the data. And data is the product of the society that generates it. If a society discriminates on the basis of race, gender or social class, the data it produces will reflect those discriminations. An algorithm trained on that data will only encode and amplify the same inequalities.',
            'But bias in data is not the only source. Safiya Umoja Noble, in her book "Algorithms of Oppression", documents how design choices — how we classify information, which metrics we optimise, how we define "success" — incorporate values and priorities that are never neutral. If a hiring system is optimised to find candidates "similar" to current employees, and the company is predominantly white and male, the system will perpetuate that composition. Discrimination is not a bug: it is the system working exactly as designed.',
            'There are at least three levels of bias we must recognise. Historical bias: data reflects past discrimination (e.g. credit history reflects decades of discrimination in credit access for minorities). Representation bias: some groups are under- or over-represented in datasets. Measurement bias: the variables we measure do not capture reality fairly (e.g. using postcode as a proxy for "risk", knowing that postcodes correlate with race due to residential segregation).',
            'Recognising these sources of bias is essential because it protects us from a false solution: believing that "collecting more data" or "improving the algorithm" is enough to eliminate discrimination. The problem is not only technical — it is social, historical, political. And it requires solutions that operate on all these levels.',
          ],
          keyTakeaways: [
            'Algorithmic bias originates from data, not code: data reflects society\'s inequalities',
            'Design choices (metrics, classifications, definitions of success) incorporate non-neutral values',
            'There are at least three levels of bias: historical, representational and measurement',
            '"Improving the data" is not enough — the problem requires socio-technical solutions',
          ],
          reflection: 'Think about an important decision in your life that could be influenced by an algorithm (credit, insurance, hiring). What historical data might that system use? Does that data reflect your real potential or the historical circumstances of your social group?',
        },
      },
      resources: [
        { title: 'Safiya Umoja Noble — Algorithms of Oppression', url: 'https://nyupress.org/9781479837243/algorithms-of-oppression/', type: 'book' },
        { title: 'ProPublica — Machine Bias', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing', type: 'article' },
        { title: 'AI Fairness 360 — IBM', url: 'https://aif360.mybluemix.net/', type: 'tool' },
      ],
    },
    {
      slug: 'casi-studio-giustizia-lavoro-sanita',
      readingTime: 9,
      content: {
        it: {
          title: 'Casi studio: giustizia, lavoro, sanità',
          description: 'Tre ambiti dove il bias algoritmico ha conseguenze concrete sulla vita delle persone.',
          body: [
            'Il bias algoritmico non è un concetto astratto: ha conseguenze concrete e misurabili sulla vita delle persone. In questo capitolo esaminiamo tre ambiti dove l\'impatto è particolarmente grave: il sistema giudiziario, il mercato del lavoro e il sistema sanitario.',
            'Giustizia: il caso COMPAS. Negli Stati Uniti, molti tribunali usano software di "risk assessment" per aiutare i giudici a decidere sulla cauzione, la libertà condizionale e la severità delle pene. COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) è il più noto. Nel 2016, un\'inchiesta di ProPublica rivelò che COMPAS assegnava alle persone nere un rischio di recidiva quasi doppio rispetto alle persone bianche, anche quando le loro storie criminali erano comparabili. La società che produceva COMPAS, Northpointe, contestò l\'analisi, sostenendo che il sistema era "calibrato" correttamente. Avevano ragione entrambi — perché, come i matematici hanno poi dimostrato, diverse definizioni di "equità" possono essere simultaneamente incompatibili. La domanda "è equo?" non ha una risposta tecnica: è una scelta politica su quale tipo di equità privilegiare.',
            'Lavoro: il caso Amazon. Nel 2018, Reuters rivelò che Amazon aveva sviluppato un sistema di AI per la selezione dei curricula che penalizzava sistematicamente le donne. Il motivo era semplice: il sistema era stato addestrato sui curricula dei dipendenti degli ultimi 10 anni, un periodo in cui Amazon — come gran parte del settore tech — era prevalentemente maschile. Il modello aveva "imparato" che i curricula con parole come "women\'s" (es. "captain of women\'s chess club") erano negativamente correlati con l\'assunzione. Amazon cancellò il progetto, ma il caso illustra un principio generale: un sistema addestrato sul passato tenderà a replicare il passato.',
            'Sanità: l\'algoritmo Optum. Nel 2019, uno studio pubblicato su Science rivelò che un algoritmo usato da ospedali americani per allocare risorse sanitarie discriminava sistematicamente i pazienti neri. L\'algoritmo usava i costi sanitari come proxy della gravità delle condizioni mediche. Ma, a causa di disuguaglianze strutturali nell\'accesso alle cure, le persone nere tendevano a spendere meno per la sanità — non perché fossero più sane, ma perché avevano meno accesso. Il risultato: a parità di condizioni di salute, l\'algoritmo assegnava meno risorse ai pazienti neri. Un bias di misurazione con conseguenze potenzialmente letali.',
            'Questi casi non sono eccezioni: sono la regola. Ogni volta che un sistema algoritmico viene utilizzato per prendere decisioni che riguardano persone — e specialmente quando queste decisioni coinvolgono gruppi storicamente marginalizzati — il rischio di discriminazione è reale e sistemico. La soluzione non è smettere di usare la tecnologia, ma governarla con consapevolezza, trasparenza e responsabilità.',
          ],
          keyTakeaways: [
            'COMPAS: il software di risk assessment mostra che "equità" ha definizioni incompatibili tra loro',
            'Amazon: un sistema addestrato sul passato replica e perpetua le discriminazioni passate',
            'Optum: usare proxy inadeguati (costi come indicatore di salute) produce discriminazione letale',
            'Il bias algoritmico non è un\'eccezione ma un rischio sistemico di ogni sistema decisionale automatizzato',
          ],
          reflection: 'Se fossi il direttore di un ospedale e ti venisse proposto un algoritmo per l\'allocazione delle risorse, quali domande faresti prima di adottarlo? Come verificheresti che non discrimini?',
        },
        en: {
          title: 'Case studies: justice, hiring, healthcare',
          description: 'Three domains where algorithmic bias has concrete consequences on people\'s lives.',
          body: [
            'Algorithmic bias is not an abstract concept: it has concrete, measurable consequences on people\'s lives. In this lesson we examine three domains where the impact is particularly severe: the justice system, the labour market and the healthcare system.',
            'Justice: the COMPAS case. In the United States, many courts use "risk assessment" software to help judges decide on bail, parole and sentence severity. COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) is the most well-known. In 2016, a ProPublica investigation revealed that COMPAS assigned Black people nearly twice the recidivism risk of white people, even when their criminal histories were comparable. The company that produced COMPAS, Northpointe, contested the analysis, arguing that the system was "calibrated" correctly. Both were right — because, as mathematicians later demonstrated, different definitions of "fairness" can be simultaneously incompatible. The question "is it fair?" has no technical answer: it is a political choice about which type of fairness to prioritise.',
            'Hiring: the Amazon case. In 2018, Reuters revealed that Amazon had developed an AI system for CV screening that systematically penalised women. The reason was simple: the system had been trained on CVs from employees over the past 10 years, a period during which Amazon — like most of the tech sector — was predominantly male. The model had "learned" that CVs with words like "women\'s" (e.g. "captain of women\'s chess club") were negatively correlated with hiring. Amazon scrapped the project, but the case illustrates a general principle: a system trained on the past will tend to replicate the past.',
            'Healthcare: the Optum algorithm. In 2019, a study published in Science revealed that an algorithm used by American hospitals to allocate healthcare resources systematically discriminated against Black patients. The algorithm used healthcare costs as a proxy for the severity of medical conditions. But, due to structural inequalities in access to care, Black people tended to spend less on healthcare — not because they were healthier, but because they had less access. The result: given equal health conditions, the algorithm allocated fewer resources to Black patients. A measurement bias with potentially lethal consequences.',
            'These cases are not exceptions: they are the rule. Every time an algorithmic system is used to make decisions about people — and especially when these decisions involve historically marginalised groups — the risk of discrimination is real and systemic. The solution is not to stop using technology, but to govern it with awareness, transparency and accountability.',
          ],
          keyTakeaways: [
            'COMPAS: risk assessment software shows that "fairness" has mutually incompatible definitions',
            'Amazon: a system trained on the past replicates and perpetuates past discrimination',
            'Optum: using inadequate proxies (costs as health indicator) produces lethal discrimination',
            'Algorithmic bias is not an exception but a systemic risk of every automated decision-making system',
          ],
          reflection: 'If you were a hospital director and were offered an algorithm for resource allocation, what questions would you ask before adopting it? How would you verify that it does not discriminate?',
        },
      },
      resources: [
        { title: 'ProPublica — Machine Bias Investigation', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing', type: 'article' },
        { title: 'Dissecting racial bias in an algorithm — Science', url: 'https://www.science.org/doi/10.1126/science.aax2342', type: 'article' },
        { title: 'Amazon scraps secret AI recruiting tool — Reuters', url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G', type: 'article' },
      ],
    },
    {
      slug: 'misurare-mitigare-bias',
      readingTime: 8,
      content: {
        it: {
          title: 'Misurare e mitigare il bias',
          description: 'Strumenti tecnici e approcci sociali per affrontare il bias algoritmico: audit, fairness metrics e design partecipativo.',
          body: [
            'Sappiamo che il bias algoritmico è un problema serio. Ma cosa possiamo fare concretamente per affrontarlo? La risposta è che non esiste una soluzione magica, ma esistono approcci che, combinati, possono ridurre significativamente il rischio. Si dividono in tre categorie: interventi sui dati, interventi sull\'algoritmo e interventi sul processo.',
            'Gli interventi sui dati mirano a correggere le distorsioni nel dataset di addestramento. Questo può significare bilanciare la rappresentazione dei diversi gruppi, rimuovere variabili che fungono da proxy per caratteristiche protette (come la razza o il genere), o applicare tecniche di "data augmentation" che generano dati sintetici per i gruppi sotto-rappresentati. Questi interventi sono necessari ma non sufficienti: i dati sono sempre un riflesso imperfetto della realtà.',
            'Gli interventi sull\'algoritmo includono le cosiddette "fairness constraints" — vincoli matematici che impongono al modello di produrre risultati equi secondo una definizione specifica. Esistono decine di metriche di equità: demographic parity (proporzioni uguali per ogni gruppo), equalized odds (stesso tasso di errori per ogni gruppo), calibration (stessa accuratezza delle previsioni per ogni gruppo). Come abbiamo visto, queste definizioni possono essere incompatibili. Scegliere quale applicare è una decisione etica, non tecnica.',
            'Ma gli interventi più importanti sono quelli sul processo. L\'audit algoritmico — un\'analisi sistematica e indipendente degli output di un sistema — è lo strumento fondamentale per identificare e documentare il bias. Organizzazioni come l\'Algorithmic Justice League, fondata da Joy Buolamwini al MIT, hanno dimostrato attraverso audit che i sistemi di riconoscimento facciale di Amazon, Microsoft e IBM avevano tassi di errore fino al 34,7% per le donne dalla pelle scura, contro meno dell\'1% per gli uomini dalla pelle chiara.',
            'Il design partecipativo è un altro approccio fondamentale: coinvolgere le comunità colpite nella progettazione dei sistemi che le riguardano. Non come "utenti test" alla fine del processo, ma come co-progettisti dall\'inizio. Chi vive le conseguenze della discriminazione algoritmica ha una conoscenza che nessun ingegnere, per quanto brillante, possiede.',
            'Infine, la trasparenza e la responsabilità. Le aziende che sviluppano e implementano sistemi di AI dovrebbero pubblicare "model cards" e "datasheets" che documentano come il modello è stato costruito, su quali dati, per quale scopo, con quali limitazioni note. E dovrebbero essere legalmente responsabili quando i loro sistemi causano danni. Senza conseguenze, non c\'è incentivo al cambiamento.',
          ],
          keyTakeaways: [
            'Non esiste una soluzione magica: servono interventi combinati su dati, algoritmo e processo',
            'Le metriche di fairness sono molteplici e spesso incompatibili — scegliere è una decisione etica',
            'L\'audit algoritmico indipendente è lo strumento chiave per documentare il bias',
            'Il design partecipativo e la trasparenza sono fondamentali quanto le soluzioni tecniche',
          ],
          reflection: 'Immagina di dover progettare un sistema di AI per assegnare borse di studio. Quale definizione di "equità" sceglieresti? Pari opportunità (uguali probabilità di accesso)? Pari risultati (uguale distribuzione tra gruppi)? Compensazione storica (priorità ai gruppi svantaggiati)? Chi dovrebbe prendere questa decisione?',
        },
        en: {
          title: 'Measuring and mitigating bias',
          description: 'Technical tools and social approaches to address algorithmic bias: audits, fairness metrics and participatory design.',
          body: [
            'We know that algorithmic bias is a serious problem. But what can we concretely do to address it? The answer is that there is no magic solution, but there are approaches that, when combined, can significantly reduce the risk. They fall into three categories: interventions on data, interventions on the algorithm and interventions on the process.',
            'Interventions on data aim to correct distortions in the training dataset. This may mean balancing the representation of different groups, removing variables that act as proxies for protected characteristics (such as race or gender), or applying "data augmentation" techniques that generate synthetic data for under-represented groups. These interventions are necessary but not sufficient: data is always an imperfect reflection of reality.',
            'Interventions on the algorithm include so-called "fairness constraints" — mathematical constraints that require the model to produce fair results according to a specific definition. There are dozens of fairness metrics: demographic parity (equal proportions for each group), equalised odds (same error rate for each group), calibration (same prediction accuracy for each group). As we have seen, these definitions can be incompatible. Choosing which to apply is an ethical, not technical, decision.',
            'But the most important interventions are on the process. The algorithmic audit — a systematic and independent analysis of a system\'s outputs — is the fundamental tool for identifying and documenting bias. Organisations like the Algorithmic Justice League, founded by Joy Buolamwini at MIT, have demonstrated through audits that Amazon, Microsoft and IBM\'s facial recognition systems had error rates of up to 34.7% for dark-skinned women, compared to less than 1% for light-skinned men.',
            'Participatory design is another fundamental approach: involving affected communities in the design of systems that concern them. Not as "test users" at the end of the process, but as co-designers from the start. Those who experience the consequences of algorithmic discrimination possess knowledge that no engineer, however brilliant, has.',
            'Finally, transparency and accountability. Companies that develop and deploy AI systems should publish "model cards" and "datasheets" documenting how the model was built, on what data, for what purpose, with what known limitations. And they should be legally liable when their systems cause harm. Without consequences, there is no incentive for change.',
          ],
          keyTakeaways: [
            'There is no magic solution: combined interventions on data, algorithm and process are needed',
            'Fairness metrics are multiple and often incompatible — choosing is an ethical decision',
            'Independent algorithmic auditing is the key tool for documenting bias',
            'Participatory design and transparency are as fundamental as technical solutions',
          ],
          reflection: 'Imagine having to design an AI system to award scholarships. Which definition of "fairness" would you choose? Equal opportunity (equal access probability)? Equal outcomes (equal distribution among groups)? Historical compensation (priority to disadvantaged groups)? Who should make this decision?',
        },
      },
      resources: [
        { title: 'Algorithmic Justice League — Joy Buolamwini', url: 'https://www.ajl.org/', type: 'tool' },
        { title: 'Fairness and Machine Learning — Barocas, Hardt, Narayanan', url: 'https://fairmlbook.org/', type: 'book' },
        { title: 'Model Cards for Model Reporting — Google', url: 'https://arxiv.org/abs/1810.03993', type: 'article' },
      ],
    },
  ],
};
