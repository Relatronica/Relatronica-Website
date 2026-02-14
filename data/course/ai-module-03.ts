import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz03: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Sorveglianza e potere',
      description: 'Verifica la tua comprensione del Modulo 03: AI e sorveglianza di massa, riconoscimento facciale e strumenti di resistenza.',
    },
    en: {
      title: 'Quiz — Surveillance and power',
      description: 'Test your understanding of Module 03: AI and mass surveillance, facial recognition and tools of resistance.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q03-01',
      content: {
        it: {
          question: 'Cosa distingue la sorveglianza basata su AI dalla sorveglianza tradizionale?',
          options: [
            'La sorveglianza AI è meno invasiva perché automatizzata',
            'La sorveglianza AI permette il monitoraggio di massa a costi ridotti e può analizzare pattern comportamentali su intere popolazioni',
            'La sorveglianza tradizionale è più efficace di quella AI',
            'Non c\'è alcuna differenza significativa',
          ],
          explanation: 'La sorveglianza AI trasforma radicalmente la scala: non servono più migliaia di agenti per monitorare milioni di persone. Un singolo sistema può analizzare comportamenti, relazioni e spostamenti di un\'intera popolazione in tempo reale, a costi marginali vicini allo zero.',
        },
        en: {
          question: 'What distinguishes AI-based surveillance from traditional surveillance?',
          options: [
            'AI surveillance is less invasive because it is automated',
            'AI surveillance enables mass monitoring at reduced costs and can analyse behavioural patterns across entire populations',
            'Traditional surveillance is more effective than AI surveillance',
            'There is no significant difference',
          ],
          explanation: 'AI surveillance radically transforms the scale: thousands of agents are no longer needed to monitor millions of people. A single system can analyse behaviour, relationships and movements of an entire population in real time, at near-zero marginal cost.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q03-02',
      content: {
        it: {
          question: 'Perché il riconoscimento facciale è considerato particolarmente problematico?',
          options: [
            'Perché è troppo costoso da implementare',
            'Perché può essere usato per identificare e tracciare persone senza il loro consenso e ha tassi di errore diseguali per gruppi diversi',
            'Perché funziona solo in condizioni di luce perfetta',
            'Perché è già stato vietato in tutto il mondo',
          ],
          explanation: 'Il riconoscimento facciale combina due problemi: la possibilità di identificazione e tracciamento senza consenso (minaccia alla privacy e alla libertà di assemblea) e tassi di errore significativamente più alti per donne e persone con pelle scura (rischio di ingiustizie).',
        },
        en: {
          question: 'Why is facial recognition considered particularly problematic?',
          options: [
            'Because it is too expensive to implement',
            'Because it can be used to identify and track people without their consent and has unequal error rates for different groups',
            'Because it only works in perfect lighting conditions',
            'Because it has already been banned worldwide',
          ],
          explanation: 'Facial recognition combines two problems: the possibility of identification and tracking without consent (threat to privacy and freedom of assembly) and significantly higher error rates for women and dark-skinned people (risk of injustice).',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q03-03',
      content: {
        it: {
          question: 'Cos\'è il "social credit system" cinese?',
          options: [
            'Un social network governativo simile a Facebook',
            'Un sistema di credito bancario per i poveri',
            'Un sistema che assegna punteggi ai cittadini basandosi sul loro comportamento, con premi e punizioni',
            'Un programma educativo digitale',
          ],
          explanation: 'Il sistema di credito sociale cinese assegna punteggi ai cittadini basandosi su comportamenti come il pagamento dei debiti, il rispetto del codice della strada, le amicizie, gli acquisti. Punteggi bassi possono impedire di prendere treni, ottenere prestiti o iscrivere i figli a certe scuole.',
        },
        en: {
          question: 'What is the Chinese "social credit system"?',
          options: [
            'A government social network similar to Facebook',
            'A banking credit system for the poor',
            'A system that assigns scores to citizens based on their behaviour, with rewards and punishments',
            'A digital educational programme',
          ],
          explanation: 'The Chinese social credit system assigns scores to citizens based on behaviours such as debt payment, traffic code compliance, friendships, purchases. Low scores can prevent people from taking trains, obtaining loans or enrolling their children in certain schools.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'ai-q03-04',
      content: {
        it: {
          question: 'Quale affermazione sulla sorveglianza nelle democrazie occidentali è più accurata?',
          options: [
            'La sorveglianza di massa esiste solo in paesi autoritari come la Cina',
            'Le democrazie occidentali usano sistemi di sorveglianza AI su larga scala, spesso con scarsa supervisione democratica',
            'Nelle democrazie la privacy è completamente protetta dalla legge',
            'La sorveglianza occidentale riguarda solo i criminali',
          ],
          explanation: 'Come rivelato da Snowden e da numerose inchieste, le democrazie occidentali operano vasti programmi di sorveglianza di massa. Clearview AI ha creato un database di miliardi di volti senza consenso, usato da forze di polizia in tutto il mondo. La differenza con i regimi autoritari è di grado, non di natura.',
        },
        en: {
          question: 'Which statement about surveillance in Western democracies is most accurate?',
          options: [
            'Mass surveillance only exists in authoritarian countries like China',
            'Western democracies use large-scale AI surveillance systems, often with poor democratic oversight',
            'In democracies privacy is completely protected by law',
            'Western surveillance only targets criminals',
          ],
          explanation: 'As revealed by Snowden and numerous investigations, Western democracies operate vast mass surveillance programmes. Clearview AI built a database of billions of faces without consent, used by police forces worldwide. The difference with authoritarian regimes is one of degree, not nature.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q03-05',
      content: {
        it: {
          question: 'Quale strumento è più efficace per contrastare la sorveglianza di massa?',
          options: [
            'Usare solo la crittografia end-to-end',
            'Smettere completamente di usare internet',
            'Una combinazione di strumenti tecnici (crittografia, VPN), azione legale e mobilitazione collettiva per leggi protettive',
            'Affidarsi alla buona volontà delle aziende tech',
          ],
          explanation: 'La resistenza alla sorveglianza richiede un approccio multi-livello: strumenti tecnici per la protezione individuale, azione legale per sfidare pratiche illegittime, mobilitazione collettiva per ottenere leggi più protettive. Nessuno di questi approcci è sufficiente da solo.',
        },
        en: {
          question: 'Which tool is most effective in countering mass surveillance?',
          options: [
            'Only using end-to-end encryption',
            'Completely stopping internet use',
            'A combination of technical tools (encryption, VPN), legal action and collective mobilisation for protective laws',
            'Relying on tech companies\' goodwill',
          ],
          explanation: 'Resistance to surveillance requires a multi-level approach: technical tools for individual protection, legal action to challenge illegitimate practices, collective mobilisation for more protective laws. None of these approaches is sufficient alone.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const aiModule03: CourseModule = {
  slug: 'sorveglianza-e-potere',
  number: '03',
  color: 'slate',
  iconName: 'Eye',
  content: {
    it: {
      title: 'Sorveglianza e potere',
      description: 'Come l\'AI abilita la sorveglianza di massa, il riconoscimento facciale come arma politica e gli strumenti di resistenza.',
    },
    en: {
      title: 'Surveillance and power',
      description: 'How AI enables mass surveillance, facial recognition as a political weapon, and tools of resistance.',
    },
  },
  quiz: quiz03,
  lessons: [
    {
      slug: 'ai-e-sorveglianza-di-massa',
      readingTime: 9,
      content: {
        it: {
          title: 'AI e sorveglianza di massa',
          description: 'Dal Panopticon digitale al credito sociale: come l\'AI ha trasformato la sorveglianza da eccezione a norma.',
          body: [
            'Nel 1791, il filosofo Jeremy Bentham progettò il Panopticon: una prigione circolare dove un singolo guardiano poteva osservare tutti i detenuti senza che questi sapessero se erano guardati in quel momento. L\'idea era che la semplice possibilità di essere osservati avrebbe indotto i detenuti all\'auto-disciplina. Due secoli dopo, Michel Foucault usò il Panopticon come metafora delle società disciplinari moderne. Oggi, con l\'intelligenza artificiale, siamo andati oltre: non ci limitiamo a guardare, possiamo analizzare, prevedere e classificare il comportamento di intere popolazioni in tempo reale.',
            'La sorveglianza tradizionale aveva un limite intrinseco: il costo. Ogni persona sorvegliata richiedeva risorse — agenti, apparecchiature, tempo. La Stasi, il servizio segreto della Germania Est, impiegava un informatore ogni 6,5 cittadini e non era comunque in grado di monitorare tutti. L\'AI ha rimosso questo vincolo. Un singolo sistema di telecamere con riconoscimento facciale può identificare migliaia di persone al minuto. Un algoritmo di analisi del traffico dati può monitorare le comunicazioni di milioni di utenti simultaneamente. Il costo marginale della sorveglianza è crollato verso lo zero.',
            'Il caso più estremo è il sistema di credito sociale cinese, che combina riconoscimento facciale, analisi dei dati finanziari, monitoraggio dei social media e tracking GPS per assegnare un "punteggio" ai cittadini. Un punteggio basso — causato da ritardi nei pagamenti, attraversamento col rosso, frequentazione di persone con punteggi bassi — può impedire l\'acquisto di biglietti aerei, l\'iscrizione dei figli a certe scuole, l\'accesso al credito. È il Panopticon di Bentham realizzato su scala nazionale.',
            'Ma sarebbe un errore pensare che la sorveglianza di massa sia un problema solo cinese. Le rivelazioni di Edward Snowden nel 2013 hanno dimostrato che la NSA americana raccoglieva massivamente metadati telefonici e intercettava comunicazioni internet a livello globale. In Europa, la polizia predittiva (PredPol, HunchLab) usa dati storici sui crimini per "prevedere" dove avverranno reati futuri — con il risultato prevedibile di concentrare la sorveglianza nei quartieri poveri e nelle comunità di colore. In Italia, il sistema SARI (Sistema Automatico di Riconoscimento Immagini) è stato usato dalle forze dell\'ordine senza una base legale chiara.',
            'La sorveglianza di massa non è solo una questione di privacy. È una questione di potere. Chi può sorvegliare chi? Chi controlla i dati raccolti? Chi decide come vengono usati? Quando la sorveglianza è asimmetrica — i governi e le corporation ci guardano, ma noi non possiamo guardare loro — il rapporto di potere è fondamentalmente squilibrato. La privacy non è il diritto di "non avere nulla da nascondere". È il diritto di esistere senza essere costantemente giudicati, classificati e manipolati.',
          ],
          keyTakeaways: [
            'L\'AI ha rimosso il limite di costo della sorveglianza, permettendo il monitoraggio di massa',
            'Il credito sociale cinese è l\'esempio estremo, ma la sorveglianza AI è globale',
            'Le democrazie occidentali usano sorveglianza AI su larga scala, spesso con scarsa trasparenza',
            'La sorveglianza asimmetrica è una questione di potere, non solo di privacy',
          ],
          reflection: 'Conta quante telecamere incontri nel tuo percorso quotidiano (casa-lavoro, spesa, tempo libero). Sai chi gestisce quelle telecamere? Dove vanno i dati? Per quanto tempo vengono conservati? La tua risposta ti sorprende?',
        },
        en: {
          title: 'AI and mass surveillance',
          description: 'From the digital Panopticon to social credit: how AI has transformed surveillance from exception to norm.',
          body: [
            'In 1791, philosopher Jeremy Bentham designed the Panopticon: a circular prison where a single guard could observe all inmates without them knowing whether they were being watched at any given moment. The idea was that the mere possibility of being observed would induce self-discipline. Two centuries later, Michel Foucault used the Panopticon as a metaphor for modern disciplinary societies. Today, with artificial intelligence, we have gone further: we don\'t just watch, we can analyse, predict and classify the behaviour of entire populations in real time.',
            'Traditional surveillance had an inherent limitation: cost. Each person under surveillance required resources — agents, equipment, time. The Stasi, East Germany\'s secret service, employed one informant for every 6.5 citizens and still could not monitor everyone. AI has removed this constraint. A single camera system with facial recognition can identify thousands of people per minute. A data traffic analysis algorithm can monitor the communications of millions of users simultaneously. The marginal cost of surveillance has collapsed towards zero.',
            'The most extreme case is the Chinese social credit system, which combines facial recognition, financial data analysis, social media monitoring and GPS tracking to assign a "score" to citizens. A low score — caused by late payments, jaywalking, associating with people who have low scores — can prevent buying plane tickets, enrolling children in certain schools, accessing credit. It is Bentham\'s Panopticon realised on a national scale.',
            'But it would be a mistake to think mass surveillance is only a Chinese problem. Edward Snowden\'s 2013 revelations demonstrated that the American NSA was massively collecting phone metadata and intercepting internet communications globally. In Europe, predictive policing (PredPol, HunchLab) uses historical crime data to "predict" where future crimes will occur — with the predictable result of concentrating surveillance in poor neighbourhoods and communities of colour. In Italy, the SARI system (Automatic Image Recognition System) was used by law enforcement without a clear legal basis.',
            'Mass surveillance is not just a privacy issue. It is a question of power. Who can surveil whom? Who controls the collected data? Who decides how it is used? When surveillance is asymmetric — governments and corporations watch us, but we cannot watch them — the power relationship is fundamentally unbalanced. Privacy is not the right to "have nothing to hide". It is the right to exist without being constantly judged, classified and manipulated.',
          ],
          keyTakeaways: [
            'AI has removed the cost barrier of surveillance, enabling mass monitoring',
            'Chinese social credit is the extreme example, but AI surveillance is global',
            'Western democracies use large-scale AI surveillance, often with poor transparency',
            'Asymmetric surveillance is a question of power, not just privacy',
          ],
          reflection: 'Count how many cameras you encounter on your daily route (home-work, shopping, leisure). Do you know who manages those cameras? Where does the data go? How long is it kept? Does your answer surprise you?',
        },
      },
      resources: [
        { title: 'Shoshana Zuboff — The Age of Surveillance Capitalism', url: 'https://shoshanazuboff.com/book/about/', type: 'book' },
        { title: 'Edward Snowden — Permanent Record', url: 'https://us.macmillan.com/books/9781250237231/permanentrecord', type: 'book' },
        { title: 'China\'s Social Credit System — Wired', url: 'https://www.wired.co.uk/article/china-social-credit-system-explained', type: 'article' },
      ],
    },
    {
      slug: 'riconoscimento-facciale-controllo-biometrico',
      readingTime: 8,
      content: {
        it: {
          title: 'Riconoscimento facciale e controllo biometrico',
          description: 'La biometria come strumento di controllo: dal riconoscimento facciale alla polizia predittiva, i rischi per le libertà civili.',
          body: [
            'Nel gennaio 2020, il New York Times rivelò l\'esistenza di Clearview AI, una startup che aveva costruito un database di oltre 3 miliardi di foto di volti — raccolte da Facebook, Instagram, YouTube e altri siti — e le aveva rese disponibili alle forze di polizia per il riconoscimento facciale. Nessuna delle persone fotografate aveva dato il consenso. La società non aveva alcun obbligo legale di informarle. Il database era stato venduto a centinaia di agenzie di polizia negli Stati Uniti e in altri paesi.',
            'Il riconoscimento facciale è forse la tecnologia di sorveglianza più invasiva mai creata, perché trasforma qualcosa che non possiamo nascondere — il nostro volto — in un identificatore universale. A differenza di un documento d\'identità, che possiamo decidere di non mostrare, o di un telefono, che possiamo lasciare a casa, il nostro volto è sempre con noi. Una telecamera con riconoscimento facciale in una piazza può identificare ogni persona che vi transita, creando un registro dettagliato di chi era dove e quando.',
            'Il problema è amplificato dall\'inaccuratezza differenziale di questi sistemi. Lo studio "Gender Shades" di Joy Buolamwini e Timnit Gebru ha dimostrato che i sistemi di riconoscimento facciale di Amazon, Microsoft e IBM avevano tassi di errore del 34,7% per le donne dalla pelle scura, contro lo 0,8% per gli uomini dalla pelle chiara. In un contesto di polizia, questo significa che le persone nere hanno una probabilità enormemente maggiore di essere erroneamente identificate come sospetti.',
            'Le conseguenze reali sono già visibili. Nel 2020, Robert Williams, un uomo nero di Detroit, fu arrestato sulla base di un\'identificazione errata del riconoscimento facciale. Fu trattenuto per 30 ore prima che l\'errore fosse scoperto. Non è un caso isolato: almeno altri sei casi di arresti errati basati su riconoscimento facciale sono stati documentati negli Stati Uniti, tutti coinvolgenti persone nere.',
            'La risposta globale è stata frammentaria. Alcune città (San Francisco, Boston, Portland) hanno vietato l\'uso del riconoscimento facciale da parte della polizia. L\'Unione Europea, nell\'AI Act del 2024, ha imposto restrizioni significative ma non un divieto assoluto. In molti paesi, non esiste alcuna regolamentazione specifica. Nel frattempo, la tecnologia continua a migliorare e a diffondersi — nei centri commerciali, nelle scuole, negli stadi, nelle stazioni.',
            'La biometria va oltre il volto: riconoscimento dell\'andatura, analisi della voce, scansione dell\'iride, riconoscimento delle emozioni (una pseudoscienza che pretende di dedurre stati emotivi dalle espressioni facciali). Ciascuna di queste tecnologie presenta gli stessi rischi fondamentali: sorveglianza senza consenso, errori discriminatori e concentrazione del potere in chi controlla i dati.',
          ],
          keyTakeaways: [
            'Clearview AI ha costruito un database di 3+ miliardi di volti senza consenso',
            'I sistemi di riconoscimento facciale hanno tassi di errore enormemente diseguali per razza e genere',
            'Almeno sei persone nere sono state erroneamente arrestate sulla base di riconoscimento facciale negli USA',
            'La regolamentazione è frammentaria: alcune città vietano, molti paesi non regolano',
          ],
          reflection: 'Il tuo volto è nei database di Clearview AI se hai mai avuto una foto pubblica sui social media. Come ti fa sentire? Cosa faresti se scoprissi che il tuo volto è stato usato per addestrare un sistema di sorveglianza?',
        },
        en: {
          title: 'Facial recognition and biometric control',
          description: 'Biometrics as a tool of control: from facial recognition to predictive policing, the risks to civil liberties.',
          body: [
            'In January 2020, the New York Times revealed the existence of Clearview AI, a startup that had built a database of over 3 billion face photos — collected from Facebook, Instagram, YouTube and other sites — and made them available to police forces for facial recognition. None of the photographed individuals had given consent. The company had no legal obligation to inform them. The database had been sold to hundreds of police agencies in the United States and other countries.',
            'Facial recognition is perhaps the most invasive surveillance technology ever created, because it transforms something we cannot hide — our face — into a universal identifier. Unlike an identity document, which we can choose not to show, or a phone, which we can leave at home, our face is always with us. A camera with facial recognition in a square can identify every person who passes through it, creating a detailed register of who was where and when.',
            'The problem is amplified by the differential inaccuracy of these systems. Joy Buolamwini and Timnit Gebru\'s "Gender Shades" study demonstrated that Amazon, Microsoft and IBM\'s facial recognition systems had error rates of 34.7% for dark-skinned women, versus 0.8% for light-skinned men. In a policing context, this means Black people have an enormously higher probability of being erroneously identified as suspects.',
            'Real consequences are already visible. In 2020, Robert Williams, a Black man from Detroit, was arrested based on an erroneous facial recognition identification. He was held for 30 hours before the error was discovered. This is not an isolated case: at least six other cases of wrongful arrests based on facial recognition have been documented in the United States, all involving Black people.',
            'The global response has been fragmented. Some cities (San Francisco, Boston, Portland) have banned police use of facial recognition. The European Union, in the 2024 AI Act, imposed significant restrictions but not an absolute ban. In many countries, no specific regulation exists. Meanwhile, the technology continues to improve and spread — in shopping centres, schools, stadiums, train stations.',
            'Biometrics goes beyond the face: gait recognition, voice analysis, iris scanning, emotion recognition (a pseudoscience that claims to deduce emotional states from facial expressions). Each of these technologies presents the same fundamental risks: surveillance without consent, discriminatory errors and concentration of power in those who control the data.',
          ],
          keyTakeaways: [
            'Clearview AI built a database of 3+ billion faces without consent',
            'Facial recognition systems have enormously unequal error rates by race and gender',
            'At least six Black people have been wrongfully arrested based on facial recognition in the US',
            'Regulation is fragmented: some cities ban, many countries do not regulate',
          ],
          reflection: 'Your face is in Clearview AI\'s database if you have ever had a public photo on social media. How does that make you feel? What would you do if you discovered your face had been used to train a surveillance system?',
        },
      },
      resources: [
        { title: 'Gender Shades — Joy Buolamwini & Timnit Gebru', url: 'http://gendershades.org/', type: 'article' },
        { title: 'Clearview AI investigation — New York Times', url: 'https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html', type: 'article' },
        { title: 'Ban Facial Recognition — Fight for the Future', url: 'https://www.banfacialrecognition.com/', type: 'tool' },
      ],
    },
    {
      slug: 'resistenza-contro-sorveglianza',
      readingTime: 8,
      content: {
        it: {
          title: 'Resistenza e contro-sorveglianza',
          description: 'Strumenti tecnici, azioni legali e movimenti sociali per contrastare la sorveglianza di massa.',
          body: [
            'Di fronte alla sorveglianza di massa, la risposta "non ho nulla da nascondere" è la più diffusa — e la più pericolosa. Come ha scritto Edward Snowden: "Dire che non ti importa della privacy perché non hai nulla da nascondere è come dire che non ti importa della libertà di parola perché non hai nulla da dire". La privacy non è nascondere crimini: è il prerequisito per la libertà di pensiero, di associazione e di espressione.',
            'La resistenza alla sorveglianza opera su tre livelli: tecnico, legale e sociale. Sul piano tecnico, esistono strumenti potenti e accessibili. La crittografia end-to-end (Signal, ProtonMail) protegge le comunicazioni da intercettazioni. Le VPN nascondono il traffico internet dal provider e dal governo. Tor permette la navigazione anonima. I browser privacy-first (Brave, Firefox con estensioni) bloccano il tracking. Questi strumenti non sono perfetti, ma alzano significativamente la barriera per chi vuole sorvegliarci.',
            'Sul piano legale, il GDPR europeo ha stabilito principi importanti: il diritto all\'accesso ai propri dati, il diritto alla cancellazione, il diritto a non essere soggetti a decisioni puramente automatizzate. L\'organizzazione noyb (None Of Your Business), fondata da Max Schrems, ha vinto cause fondamentali contro Facebook e Google. In Italia, il Garante della Privacy ha bloccato l\'uso di Clearview AI. Questi precedenti legali sono vittorie importanti, anche se l\'applicazione resta spesso lenta e incompleta.',
            'Ma la resistenza più potente è quella sociale. I movimenti per il divieto del riconoscimento facciale — come la campagna "Ban the Scan" di Amnesty International — hanno ottenuto risultati concreti in diverse città. Le comunità che mappano le telecamere di sorveglianza nel proprio quartiere stanno praticando "sousveillance" — sorveglianza dal basso, dove i cittadini guardano chi li guarda. I ricercatori che pubblicano studi sugli errori e i bias dei sistemi di sorveglianza stanno fornendo le prove necessarie per il cambiamento legislativo.',
            'Un concetto fondamentale è la "privacy come infrastruttura collettiva". La mia privacy non dipende solo dalle mie scelte: dipende anche dalle app che usano i miei amici, dai dati che il mio datore di lavoro condivide, dalle politiche del mio governo. Per questo la privacy non può essere solo una responsabilità individuale — richiede azione collettiva e regolamentazione forte.',
            'La buona notizia è che la consapevolezza sta crescendo. Dall\'indignazione per Cambridge Analytica alle proteste contro il riconoscimento facciale, un movimento globale per la privacy digitale si sta formando. Non siamo impotenti: abbiamo strumenti tecnici, precedenti legali e forza collettiva. Quello che serve è la volontà di usarli.',
          ],
          keyTakeaways: [
            '"Non ho nulla da nascondere" è una risposta pericolosa: la privacy è il prerequisito della libertà',
            'La resistenza opera su tre livelli: tecnico (crittografia), legale (GDPR, cause) e sociale (movimenti)',
            'La privacy è un\'infrastruttura collettiva, non solo una responsabilità individuale',
            'Un movimento globale per la privacy digitale sta crescendo e ottenendo risultati concreti',
          ],
          reflection: 'Fai un inventario dei tuoi strumenti digitali quotidiani. Quanti usano la crittografia end-to-end? Quali dati condividi con app e servizi? C\'è un cambiamento concreto che potresti fare questa settimana per migliorare la tua privacy digitale?',
        },
        en: {
          title: 'Resistance and counter-surveillance',
          description: 'Technical tools, legal action and social movements to counter mass surveillance.',
          body: [
            'Faced with mass surveillance, the response "I have nothing to hide" is the most common — and the most dangerous. As Edward Snowden wrote: "Arguing that you don\'t care about privacy because you have nothing to hide is like arguing that you don\'t care about free speech because you have nothing to say". Privacy is not about hiding crimes: it is the prerequisite for freedom of thought, association and expression.',
            'Resistance to surveillance operates on three levels: technical, legal and social. On the technical level, there are powerful and accessible tools. End-to-end encryption (Signal, ProtonMail) protects communications from interception. VPNs hide internet traffic from providers and governments. Tor enables anonymous browsing. Privacy-first browsers (Brave, Firefox with extensions) block tracking. These tools are not perfect, but they significantly raise the barrier for those who want to surveil us.',
            'On the legal level, the European GDPR has established important principles: the right to access one\'s data, the right to deletion, the right not to be subject to purely automated decisions. The organisation noyb (None Of Your Business), founded by Max Schrems, has won landmark cases against Facebook and Google. In Italy, the Privacy Authority blocked the use of Clearview AI. These legal precedents are important victories, even if enforcement often remains slow and incomplete.',
            'But the most powerful resistance is social. Movements to ban facial recognition — such as Amnesty International\'s "Ban the Scan" campaign — have achieved concrete results in several cities. Communities mapping surveillance cameras in their neighbourhoods are practising "sousveillance" — surveillance from below, where citizens watch those who watch them. Researchers publishing studies on errors and biases of surveillance systems are providing the evidence needed for legislative change.',
            'A fundamental concept is "privacy as collective infrastructure". My privacy does not depend only on my choices: it also depends on the apps my friends use, the data my employer shares, my government\'s policies. This is why privacy cannot be only an individual responsibility — it requires collective action and strong regulation.',
            'The good news is that awareness is growing. From outrage over Cambridge Analytica to protests against facial recognition, a global movement for digital privacy is forming. We are not powerless: we have technical tools, legal precedents and collective strength. What is needed is the will to use them.',
          ],
          keyTakeaways: [
            '"I have nothing to hide" is a dangerous response: privacy is the prerequisite for freedom',
            'Resistance operates on three levels: technical (encryption), legal (GDPR, lawsuits) and social (movements)',
            'Privacy is a collective infrastructure, not just an individual responsibility',
            'A global movement for digital privacy is growing and achieving concrete results',
          ],
          reflection: 'Take an inventory of your daily digital tools. How many use end-to-end encryption? What data do you share with apps and services? Is there a concrete change you could make this week to improve your digital privacy?',
        },
      },
      resources: [
        { title: 'EFF — Electronic Frontier Foundation', url: 'https://www.eff.org/', type: 'tool' },
        { title: 'noyb — None Of Your Business', url: 'https://noyb.eu/', type: 'tool' },
        { title: 'Amnesty International — Ban the Scan', url: 'https://banthescan.amnesty.org/', type: 'article' },
      ],
    },
  ],
};
