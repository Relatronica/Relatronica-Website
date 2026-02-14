import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz06: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — AI per il bene comune',
      description: 'Verifica la tua comprensione del Modulo 06: AI per il clima e la salute, open source e beni comuni digitali, e costruire una pratica etica.',
    },
    en: {
      title: 'Quiz — AI for the common good',
      description: 'Test your understanding of Module 06: AI for climate and health, open source and digital commons, and building an ethical practice.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q06-01',
      content: {
        it: {
          question: 'Quale esempio illustra meglio l\'uso dell\'AI per il bene comune?',
          options: [
            'Un algoritmo che massimizza i profitti pubblicitari di un social network',
            'Un sistema che usa dati satellitari e machine learning per prevedere la deforestazione e allertare le comunità locali',
            'Un chatbot che genera contenuti per aumentare l\'engagement',
            'Un sistema di riconoscimento facciale per i centri commerciali',
          ],
          explanation: 'L\'AI per il bene comune affronta problemi collettivi con governance trasparente. Il monitoraggio della deforestazione con AI (come Global Forest Watch) è un esempio: usa tecnologia avanzata per proteggere beni comuni, con dati aperti e benefici distribuiti.',
        },
        en: {
          question: 'Which example best illustrates the use of AI for the common good?',
          options: [
            'An algorithm that maximises advertising profits for a social network',
            'A system using satellite data and machine learning to predict deforestation and alert local communities',
            'A chatbot generating content to increase engagement',
            'A facial recognition system for shopping centres',
          ],
          explanation: 'AI for the common good addresses collective problems with transparent governance. Deforestation monitoring with AI (like Global Forest Watch) is an example: it uses advanced technology to protect commons, with open data and distributed benefits.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q06-02',
      content: {
        it: {
          question: 'Perché l\'AI open source è importante per la società?',
          options: [
            'Perché è sempre più sicura dell\'AI proprietaria',
            'Perché permette la verifica indipendente, riduce la concentrazione di potere e favorisce l\'innovazione distribuita',
            'Perché è gratuita e quindi più economica',
            'Perché elimina automaticamente il bias algoritmico',
          ],
          explanation: 'L\'AI open source è importante perché permette a ricercatori indipendenti di verificare come funzionano i modelli, riduce la dipendenza da poche corporation, e permette a comunità e paesi di sviluppare soluzioni adatte ai propri contesti. Non elimina automaticamente il bias ma rende possibile individuarlo.',
        },
        en: {
          question: 'Why is open source AI important for society?',
          options: [
            'Because it is always more secure than proprietary AI',
            'Because it enables independent verification, reduces power concentration and favours distributed innovation',
            'Because it is free and therefore cheaper',
            'Because it automatically eliminates algorithmic bias',
          ],
          explanation: 'Open source AI is important because it allows independent researchers to verify how models work, reduces dependence on a few corporations, and enables communities and countries to develop solutions suited to their own contexts. It does not automatically eliminate bias but makes it possible to identify it.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q06-03',
      content: {
        it: {
          question: 'Cos\'è il "paradosso dell\'AI verde"?',
          options: [
            'Il fatto che l\'AI per il clima funziona solo in paesi verdi',
            'Il fatto che i sistemi AI per il clima consumano enormi quantità di energia e risorse, contribuendo al problema che cercano di risolvere',
            'Il fatto che l\'AI non può essere usata per problemi ambientali',
            'Il fatto che l\'AI verde è sempre più costosa di quella tradizionale',
          ],
          explanation: 'Il "paradosso dell\'AI verde" è che addestrare e far funzionare modelli AI per il clima richiede enormi quantità di energia (spesso da fonti fossili), acqua per il raffreddamento e terre rare per l\'hardware. L\'AI può aiutare il clima, ma il suo impatto ambientale deve essere parte del calcolo.',
        },
        en: {
          question: 'What is the "green AI paradox"?',
          options: [
            'The fact that climate AI only works in green countries',
            'The fact that AI systems for climate consume enormous amounts of energy and resources, contributing to the problem they try to solve',
            'The fact that AI cannot be used for environmental problems',
            'The fact that green AI is always more expensive than traditional AI',
          ],
          explanation: 'The "green AI paradox" is that training and running AI models for climate requires enormous amounts of energy (often from fossil sources), water for cooling and rare earths for hardware. AI can help the climate, but its environmental impact must be part of the calculation.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q06-04',
      content: {
        it: {
          question: 'Quali domande dovremmo porci prima di adottare un sistema di AI?',
          options: [
            'Solo: "funziona?"',
            '"Funziona?", "Quanto costa?" e "È alla moda?"',
            '"Chi ne beneficia?", "Chi ne è escluso?", "Chi ne paga il prezzo?", "Esiste un\'alternativa non-AI?"',
            'Non serve farsi domande, basta che l\'AI sia approvata dall\'azienda che la produce',
          ],
          explanation: 'Una pratica etica dell\'AI richiede di porsi domande critiche prima dell\'adozione: chi beneficia, chi è escluso, chi paga il prezzo, quali sono le alternative non-AI, come garantire la trasparenza e la responsabilità, e se le persone colpite sono state consultate.',
        },
        en: {
          question: 'What questions should we ask before adopting an AI system?',
          options: [
            'Only: "does it work?"',
            '"Does it work?", "How much does it cost?" and "Is it fashionable?"',
            '"Who benefits?", "Who is excluded?", "Who pays the price?", "Is there a non-AI alternative?"',
            'No questions need to be asked, as long as the AI is approved by the company that produces it',
          ],
          explanation: 'An ethical AI practice requires asking critical questions before adoption: who benefits, who is excluded, who pays the price, what non-AI alternatives exist, how to ensure transparency and accountability, and whether affected people have been consulted.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'ai-q06-05',
      content: {
        it: {
          question: 'Qual è il messaggio chiave dell\'intero corso "AI & Società"?',
          options: [
            'L\'AI è pericolosa e dovrebbe essere vietata',
            'L\'AI è neutrale e il problema è solo come la usiamo',
            'L\'AI è inevitabilmente positiva e non dovremmo preoccuparci',
            'L\'AI è una tecnologia socio-tecnica potente che va governata democraticamente, con consapevolezza critica e partecipazione collettiva',
          ],
          explanation: 'Il messaggio chiave è che l\'AI non è né buona né cattiva in sé, ma non è nemmeno neutrale. È un sistema socio-tecnico che riflette e amplifica le dinamiche di potere esistenti. Governarla richiede consapevolezza critica, regolamentazione democratica e partecipazione di tutti, non solo degli esperti.',
        },
        en: {
          question: 'What is the key message of the entire "AI & Society" course?',
          options: [
            'AI is dangerous and should be banned',
            'AI is neutral and the problem is only how we use it',
            'AI is inevitably positive and we should not worry',
            'AI is a powerful socio-technical technology that must be governed democratically, with critical awareness and collective participation',
          ],
          explanation: 'The key message is that AI is neither good nor bad in itself, but it is not neutral either. It is a socio-technical system that reflects and amplifies existing power dynamics. Governing it requires critical awareness, democratic regulation and everyone\'s participation, not just experts\'.',
        },
      },
      correctAnswer: 3,
    },
  ],
};

export const aiModule06: CourseModule = {
  slug: 'ai-per-il-bene-comune',
  number: '06',
  color: 'green',
  iconName: 'Heart',
  content: {
    it: {
      title: 'AI per il bene comune',
      description: 'Come l\'AI può servire il bene collettivo: applicazioni per il clima e la salute, open source e beni comuni digitali, costruire una pratica etica.',
    },
    en: {
      title: 'AI for the common good',
      description: 'How AI can serve the collective good: applications for climate and health, open source and digital commons, building an ethical practice.',
    },
  },
  quiz: quiz06,
  lessons: [
    {
      slug: 'ai-clima-salute-istruzione',
      readingTime: 9,
      content: {
        it: {
          title: 'AI per clima, salute e istruzione',
          description: 'Quando l\'AI funziona per il bene collettivo: casi concreti nel monitoraggio ambientale, nella diagnosi medica e nell\'accesso alla conoscenza.',
          body: [
            'Dopo cinque moduli dedicati ai rischi e ai problemi dell\'AI, è tempo di esplorare l\'altro lato della medaglia: le applicazioni dove l\'intelligenza artificiale produce benefici concreti e misurabili per la società. Non per cadere nell\'ottimismo tecnologico ingenuo, ma per capire quali condizioni rendono possibile un uso dell\'AI al servizio del bene comune — e come replicarle.',
            'Clima e ambiente. L\'AI è uno strumento potente per affrontare la crisi climatica. Global Forest Watch usa immagini satellitari e machine learning per monitorare la deforestazione in tempo quasi reale, permettendo a comunità indigene e attivisti di intervenire prima che la distruzione sia irreversibile. DeepMind (Google) ha sviluppato modelli che prevedono la produzione di energia eolica con 36 ore di anticipo, permettendo una gestione più efficiente delle reti elettriche. ClimateTrace, cofondato da Al Gore, usa AI per monitorare le emissioni di gas serra di oltre 70.000 impianti nel mondo, rendendo impossibile per le aziende nascondere il loro impatto.',
            'Ma c\'è un paradosso: l\'AI stessa ha un\'impronta ambientale enorme. Addestrare GPT-4 ha consumato una quantità di energia stimata equivalente a quella di 1.000 famiglie americane per un anno. I data center usano miliardi di litri d\'acqua per il raffreddamento. L\'AI per il clima deve fare i conti con la propria impronta — un paradosso che richiede trasparenza e scelte consapevoli su quando l\'AI è la soluzione giusta e quando non lo è.',
            'Salute. L\'AI ha dimostrato capacità notevoli nella diagnosi medica. Il sistema di Google per la retinopatia diabetica rileva la malattia con una precisione pari o superiore a quella degli specialisti, potenzialmente permettendo screening di massa in aree con carenza di medici. AlphaFold (DeepMind) ha predetto la struttura 3D di quasi tutte le proteine conosciute — un risultato che sta accelerando la ricerca farmaceutica in tutto il mondo. Aidoc usa l\'AI per identificare emorragie cerebrali nelle TAC, riducendo i tempi di intervento.',
            'Ma anche qui le sfide sono reali. L\'AI medica addestrata su dati di popolazioni ricche e bianche funziona peggio per le popolazioni del Sud globale. I sistemi diagnostici possono creare una falsa sensazione di certezza, portando medici e pazienti a fidarsi troppo dell\'output algoritmico. E l\'accesso a queste tecnologie è profondamente diseguale: chi beneficia per primo sono i paesi e le comunità che ne avrebbero meno bisogno.',
            'Istruzione. L\'AI può personalizzare l\'apprendimento, adattando contenuti e ritmi alle esigenze di ogni studente. Khan Academy ha integrato un tutor AI (Khanmigo) che aiuta gli studenti a ragionare senza dare risposte dirette. Duolingo usa l\'AI per adattare le lezioni di lingua al livello di ogni utente. Ma il rischio è la sostituzione del rapporto umano insegnante-studente con un\'interazione algoritmica, e la raccolta massiva di dati su minori senza adeguate protezioni.',
          ],
          keyTakeaways: [
            'L\'AI ha applicazioni concrete e benefiche per clima (monitoraggio deforestazione, previsioni energetiche), salute (diagnosi, ricerca farmaceutica) e istruzione',
            'Il "paradosso dell\'AI verde": l\'AI per il clima ha un\'enorme impronta ambientale propria',
            'L\'AI medica funziona peggio per le popolazioni sotto-rappresentate nei dati',
            'Il criterio: l\'AI per il bene comune richiede governance trasparente, dati aperti e benefici distribuiti',
          ],
          reflection: 'Pensa a un problema della tua comunità (ambientale, sanitario, educativo). L\'AI potrebbe aiutare a risolverlo? Quali dati servirebbero? Chi dovrebbe controllare il sistema? Esiste una soluzione non-AI che sarebbe più appropriata?',
        },
        en: {
          title: 'AI for climate, health and education',
          description: 'When AI works for the collective good: concrete cases in environmental monitoring, medical diagnosis and access to knowledge.',
          body: [
            'After five modules dedicated to AI\'s risks and problems, it is time to explore the other side of the coin: applications where artificial intelligence produces concrete and measurable benefits for society. Not to fall into naive technological optimism, but to understand which conditions make it possible to use AI in service of the common good — and how to replicate them.',
            'Climate and environment. AI is a powerful tool for addressing the climate crisis. Global Forest Watch uses satellite imagery and machine learning to monitor deforestation in near real time, allowing indigenous communities and activists to intervene before destruction is irreversible. DeepMind (Google) has developed models that predict wind energy production 36 hours in advance, enabling more efficient electricity grid management. ClimateTrace, co-founded by Al Gore, uses AI to monitor greenhouse gas emissions from over 70,000 facilities worldwide, making it impossible for companies to hide their impact.',
            'But there is a paradox: AI itself has an enormous environmental footprint. Training GPT-4 consumed an estimated amount of energy equivalent to that of 1,000 American households for a year. Data centres use billions of litres of water for cooling. AI for climate must reckon with its own footprint — a paradox that requires transparency and conscious choices about when AI is the right solution and when it is not.',
            'Health. AI has demonstrated remarkable capabilities in medical diagnosis. Google\'s system for diabetic retinopathy detects the disease with accuracy equal to or exceeding that of specialists, potentially enabling mass screening in areas with doctor shortages. AlphaFold (DeepMind) has predicted the 3D structure of nearly all known proteins — a result that is accelerating pharmaceutical research worldwide. Aidoc uses AI to identify brain haemorrhages in CT scans, reducing intervention times.',
            'But here too the challenges are real. Medical AI trained on data from wealthy, white populations works worse for Global South populations. Diagnostic systems can create a false sense of certainty, leading doctors and patients to over-trust algorithmic output. And access to these technologies is profoundly unequal: those who benefit first are the countries and communities that would need them least.',
            'Education. AI can personalise learning, adapting content and pace to each student\'s needs. Khan Academy has integrated an AI tutor (Khanmigo) that helps students reason without giving direct answers. Duolingo uses AI to adapt language lessons to each user\'s level. But the risk is replacing the human teacher-student relationship with an algorithmic interaction, and massive data collection on minors without adequate protections.',
          ],
          keyTakeaways: [
            'AI has concrete beneficial applications for climate (deforestation monitoring, energy forecasting), health (diagnosis, pharmaceutical research) and education',
            'The "green AI paradox": AI for climate has an enormous environmental footprint of its own',
            'Medical AI works worse for populations under-represented in the data',
            'The criterion: AI for the common good requires transparent governance, open data and distributed benefits',
          ],
          reflection: 'Think about a problem in your community (environmental, health, educational). Could AI help solve it? What data would be needed? Who should control the system? Is there a non-AI solution that would be more appropriate?',
        },
      },
      resources: [
        { title: 'Global Forest Watch', url: 'https://www.globalforestwatch.org/', type: 'tool' },
        { title: 'AlphaFold — DeepMind', url: 'https://alphafold.ebi.ac.uk/', type: 'tool' },
        { title: 'Climate TRACE', url: 'https://climatetrace.org/', type: 'tool' },
      ],
    },
    {
      slug: 'ai-open-source-beni-comuni',
      readingTime: 8,
      content: {
        it: {
          title: 'AI open source e beni comuni digitali',
          description: 'Perché l\'AI non può essere proprietà esclusiva delle corporation: il ruolo dell\'open source, dei dati aperti e dei beni comuni digitali.',
          body: [
            'Uno dei rischi più gravi dell\'AI contemporanea è la concentrazione: poche corporation controllano i modelli più potenti, i dataset più grandi e l\'infrastruttura necessaria per addestrarli. Google, Microsoft, Meta e OpenAI hanno un vantaggio strutturale che si auto-rinforza: più dati producono modelli migliori, modelli migliori attraggono più utenti, più utenti generano più dati. In questo contesto, l\'AI open source non è solo una preferenza tecnica — è una necessità democratica.',
            'L\'AI open source significa che il codice sorgente dei modelli, i pesi addestrati e — idealmente — i dati di addestramento sono pubblicamente disponibili. Chiunque può ispezionare come funziona il modello, verificarne i bias, adattarlo alle proprie esigenze, migliorarlo. Meta ha rilasciato Llama, Stability AI ha rilasciato Stable Diffusion, Mistral AI ha rilasciato modelli competitivi con quelli proprietari. Questi rilasci hanno democratizzato l\'accesso alla tecnologia e accelerato l\'innovazione.',
            'Ma "open source" non significa automaticamente "per il bene comune". Un modello open source può essere usato per creare deepfake, produrre disinformazione o potenziare sistemi di sorveglianza. La questione non è solo l\'accessibilità del codice, ma la governance: chi decide come viene usato, chi è responsabile dei danni, come si bilancia apertura e sicurezza.',
            'Il concetto di "beni comuni digitali" (digital commons) offre un framework più ampio. I beni comuni non sono né proprietà privata né proprietà statale: sono risorse gestite collettivamente da una comunità secondo regole condivise. Wikipedia è un bene comune digitale: chiunque può contribuire, ma le regole della comunità (neutralità, verificabilità, consenso) ne garantiscono la qualità. OpenStreetMap è un altro: una mappa del mondo creata e mantenuta da volontari, alternativa a Google Maps.',
            'Applicare il modello dei beni comuni all\'AI significa creare modelli, dataset e infrastrutture che siano di proprietà collettiva, governati democraticamente e orientati al beneficio pubblico. BLOOM, un modello linguistico multilingue sviluppato da BigScience — un consorzio di oltre 1.000 ricercatori — è un esempio: è stato creato con un processo decisionale partecipativo su scelte etiche e tecniche. EleutherAI è un collettivo di ricercatori che sviluppa modelli linguistici aperti e documenta pubblicamente le proprie scelte.',
            'I dati stessi possono essere beni comuni. I "data trusts" — strutture legali che gestiscono dati per conto di una comunità, come un trust gestisce patrimoni — sono un modello promettente. Invece di cedere i nostri dati alle corporation, potremmo conferirli a trust governati democraticamente, che ne negozino l\'uso nell\'interesse dei contribuenti. È un\'idea ancora sperimentale, ma potrebbe trasformare radicalmente il rapporto tra cittadini e dati.',
          ],
          keyTakeaways: [
            'La concentrazione dell\'AI in poche corporation è un rischio democratico che l\'open source può mitigare',
            'L\'open source è necessario ma non sufficiente: serve governance responsabile, non solo codice aperto',
            'I beni comuni digitali (Wikipedia, OpenStreetMap, BLOOM) sono modelli di governance collettiva applicabili all\'AI',
            'I data trusts potrebbero trasformare il rapporto tra cittadini e dati, restituendo potere collettivo',
          ],
          reflection: 'Se i tuoi dati (sanitari, finanziari, comportamentali) fossero gestiti da un trust democratico anziché da corporation, cosa cambierebbe? Saresti disposto a condividere di più sapendo che la governance è collettiva? Quali regole vorresti per il trust?',
        },
        en: {
          title: 'Open source AI and digital commons',
          description: 'Why AI cannot be the exclusive property of corporations: the role of open source, open data and digital commons.',
          body: [
            'One of the most serious risks of contemporary AI is concentration: a few corporations control the most powerful models, the largest datasets and the infrastructure needed to train them. Google, Microsoft, Meta and OpenAI have a structural advantage that is self-reinforcing: more data produces better models, better models attract more users, more users generate more data. In this context, open source AI is not just a technical preference — it is a democratic necessity.',
            'Open source AI means that the source code of models, trained weights and — ideally — training data are publicly available. Anyone can inspect how the model works, verify its biases, adapt it to their needs, improve it. Meta released Llama, Stability AI released Stable Diffusion, Mistral AI released models competitive with proprietary ones. These releases have democratised access to technology and accelerated innovation.',
            'But "open source" does not automatically mean "for the common good". An open source model can be used to create deepfakes, produce disinformation or enhance surveillance systems. The question is not just code accessibility, but governance: who decides how it is used, who is responsible for harm, how to balance openness and safety.',
            'The concept of "digital commons" offers a broader framework. Commons are neither private property nor state property: they are resources collectively managed by a community according to shared rules. Wikipedia is a digital common: anyone can contribute, but community rules (neutrality, verifiability, consensus) ensure quality. OpenStreetMap is another: a world map created and maintained by volunteers, an alternative to Google Maps.',
            'Applying the commons model to AI means creating models, datasets and infrastructure that are collectively owned, democratically governed and oriented towards public benefit. BLOOM, a multilingual language model developed by BigScience — a consortium of over 1,000 researchers — is an example: it was created with a participatory decision-making process on ethical and technical choices. EleutherAI is a collective of researchers developing open language models and publicly documenting their choices.',
            'Data itself can be a commons. "Data trusts" — legal structures that manage data on behalf of a community, as a trust manages assets — are a promising model. Instead of giving our data to corporations, we could contribute it to democratically governed trusts that negotiate its use in contributors\' interests. It is still an experimental idea, but it could radically transform the relationship between citizens and data.',
          ],
          keyTakeaways: [
            'AI concentration in a few corporations is a democratic risk that open source can mitigate',
            'Open source is necessary but not sufficient: responsible governance is needed, not just open code',
            'Digital commons (Wikipedia, OpenStreetMap, BLOOM) are models of collective governance applicable to AI',
            'Data trusts could transform the relationship between citizens and data, restoring collective power',
          ],
          reflection: 'If your data (health, financial, behavioural) were managed by a democratic trust rather than corporations, what would change? Would you be willing to share more knowing governance is collective? What rules would you want for the trust?',
        },
      },
      resources: [
        { title: 'BigScience — BLOOM Language Model', url: 'https://bigscience.huggingface.co/', type: 'tool' },
        { title: 'EleutherAI — Open Source AI Research', url: 'https://www.eleuther.ai/', type: 'tool' },
        { title: 'Data Trusts — Open Data Institute', url: 'https://theodi.org/insights/projects/data-trusts/', type: 'article' },
      ],
    },
    {
      slug: 'costruire-pratica-etica',
      readingTime: 8,
      content: {
        it: {
          title: 'Costruire una pratica etica dell\'AI',
          description: 'Dalla teoria all\'azione: un framework personale per usare, valutare e influenzare l\'AI in modo consapevole e responsabile.',
          body: [
            'Siamo arrivati all\'ultimo capitolo di questo corso. Abbiamo esplorato cos\'è l\'AI e come funziona, come il bias algoritmico perpetua le disuguaglianze, come la sorveglianza di massa minaccia le libertà civili, come l\'automazione trasforma il lavoro, come la regolamentazione cerca (faticosamente) di tenere il passo, e come l\'AI può anche servire il bene comune. Ora la domanda è: cosa facciamo con tutto questo?',
            'La risposta di Relatronica è che la consapevolezza critica è il primo passo, ma non basta. Serve una pratica — un insieme di abitudini, domande e azioni che integriamo nella nostra vita quotidiana. Ecco un framework in cinque punti che puoi usare come punto di partenza.',
            'Primo: interroga. Ogni volta che incontri un sistema di AI — un chatbot, un algoritmo di raccomandazione, un sistema di selezione — poniti cinque domande. Chi l\'ha costruito e perché? Su quali dati è addestrato? Chi ne beneficia e chi ne è escluso? Quali decisioni prende e con quale trasparenza? Esiste un\'alternativa? Non avrai sempre le risposte, ma porsi le domande è già un atto di consapevolezza critica.',
            'Secondo: proteggi. La tua privacy e quella degli altri non è un lusso — è un diritto. Usa strumenti di crittografia per le comunicazioni sensibili. Controlla le impostazioni di privacy delle app e dei servizi che usi. Scegli servizi che rispettano la tua privacy quando possibile (Signal invece di WhatsApp, Proton invece di Gmail, Firefox invece di Chrome). E ricorda: ogni volta che condividi dati su altri (foto di amici, contatti), stai prendendo decisioni anche per loro.',
            'Terzo: partecipa. La governance dell\'AI non può essere lasciata solo ai tecnici e ai politici. Partecipa al dibattito pubblico: scrivi ai tuoi rappresentanti politici sulle questioni che ti stanno a cuore, partecipa a consultazioni pubbliche, supporta le organizzazioni della società civile che lavorano sull\'etica dell\'AI (come l\'Algorithmic Justice League, l\'EFF, noyb, Privacy International). Se ti viene offerta l\'opportunità di partecipare a un\'assemblea cittadina sull\'AI, coglila.',
            'Quarto: sostieni alternative. Ogni volta che scegli un servizio open source invece di uno proprietario, che contribuisci a Wikipedia, che supporti un progetto di beni comuni digitali, stai votando con le tue azioni per un modello diverso di tecnologia. Il platform cooperativism — cooperative che possiedono le piattaforme su cui lavorano — è un\'alternativa concreta alla gig economy algoritmica. Cerca, usa e sostieni queste alternative.',
            'Quinto: condividi. La cosa più potente che puoi fare con le conoscenze acquisite in questo corso è condividerle. Parla di bias algoritmico con i tuoi colleghi, di privacy con i tuoi familiari, di sorveglianza con i tuoi amici. Non serve essere esperti per avere conversazioni significative — serve essere informati e curiosi. Questo corso è un inizio, non una fine. Il futuro dell\'AI non è scritto: lo stiamo scrivendo insieme, una scelta alla volta.',
          ],
          keyTakeaways: [
            'La consapevolezza critica è il primo passo, ma serve una pratica quotidiana',
            'Cinque azioni: interroga (domande critiche), proteggi (privacy), partecipa (governance), sostieni (alternative), condividi (conoscenza)',
            'Ogni scelta tecnologica è un voto per il modello di società che vogliamo',
            'Il futuro dell\'AI non è scritto: lo costruiamo insieme, una scelta alla volta',
          ],
          reflection: 'Scegli una delle cinque azioni del framework e impegnati a metterla in pratica questa settimana. Quale scegli? Qual è il primo passo concreto che farai? Scrivilo e torna tra una settimana per vedere se l\'hai fatto.',
        },
        en: {
          title: 'Building an ethical AI practice',
          description: 'From theory to action: a personal framework for using, evaluating and influencing AI in a conscious and responsible way.',
          body: [
            'We have reached the final chapter of this course. We have explored what AI is and how it works, how algorithmic bias perpetuates inequalities, how mass surveillance threatens civil liberties, how automation transforms work, how regulation struggles to keep pace, and how AI can also serve the common good. Now the question is: what do we do with all this?',
            'Relatronica\'s answer is that critical awareness is the first step, but it is not enough. What is needed is a practice — a set of habits, questions and actions that we integrate into our daily lives. Here is a five-point framework you can use as a starting point.',
            'First: question. Every time you encounter an AI system — a chatbot, a recommendation algorithm, a screening system — ask yourself five questions. Who built it and why? What data is it trained on? Who benefits and who is excluded? What decisions does it make and with what transparency? Is there an alternative? You won\'t always have the answers, but asking the questions is already an act of critical awareness.',
            'Second: protect. Your privacy and that of others is not a luxury — it is a right. Use encryption tools for sensitive communications. Check the privacy settings of apps and services you use. Choose services that respect your privacy when possible (Signal instead of WhatsApp, Proton instead of Gmail, Firefox instead of Chrome). And remember: every time you share data about others (photos of friends, contacts), you are making decisions for them too.',
            'Third: participate. AI governance cannot be left solely to technicians and politicians. Participate in public debate: write to your political representatives on issues you care about, participate in public consultations, support civil society organisations working on AI ethics (such as the Algorithmic Justice League, the EFF, noyb, Privacy International). If you are offered the opportunity to participate in a citizen assembly on AI, take it.',
            'Fourth: support alternatives. Every time you choose an open source service instead of a proprietary one, contribute to Wikipedia, support a digital commons project, you are voting with your actions for a different model of technology. Platform cooperativism — cooperatives that own the platforms they work on — is a concrete alternative to the algorithmic gig economy. Seek out, use and support these alternatives.',
            'Fifth: share. The most powerful thing you can do with the knowledge gained in this course is share it. Talk about algorithmic bias with your colleagues, about privacy with your family, about surveillance with your friends. You don\'t need to be an expert to have meaningful conversations — you need to be informed and curious. This course is a beginning, not an end. The future of AI is not written: we are writing it together, one choice at a time.',
          ],
          keyTakeaways: [
            'Critical awareness is the first step, but a daily practice is needed',
            'Five actions: question (critical questions), protect (privacy), participate (governance), support (alternatives), share (knowledge)',
            'Every technology choice is a vote for the model of society we want',
            'The future of AI is not written: we build it together, one choice at a time',
          ],
          reflection: 'Choose one of the five actions from the framework and commit to putting it into practice this week. Which do you choose? What is the first concrete step you will take? Write it down and come back in a week to see if you did it.',
        },
      },
      resources: [
        { title: 'Relatronica — Manifesto', url: '/manifesto', type: 'article' },
        { title: 'The Ethical OS Toolkit', url: 'https://ethicalos.org/', type: 'tool' },
        { title: 'Responsible AI Practices — Google', url: 'https://ai.google/responsibility/responsible-ai-practices/', type: 'article' },
      ],
    },
  ],
};
