import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz03: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Civic Tech',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 03: civic tech, open data e etica della tecnologia civica.',
    },
    en: {
      title: 'Quiz — Civic Tech',
      description: 'Test your understanding of Module 03 key concepts: civic tech, open data and the ethics of civic technology.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q03-01',
      content: {
        it: {
          question: 'Qual è il principio fondamentale della civic tech?',
          options: [
            'Sostituire i processi democratici con algoritmi più efficienti',
            'Creare app governative per ridurre i costi della burocrazia',
            'Amplificare la voce dei cittadini, non sostituirla',
            'Digitalizzare tutti i servizi pubblici entro il 2030',
          ],
          explanation: 'La civic tech è una filosofia che mette al centro il principio che la tecnologia deve amplificare la voce dei cittadini, non sostituirla.',
        },
        en: {
          question: 'What is the fundamental principle of civic tech?',
          options: [
            'Replacing democratic processes with more efficient algorithms',
            'Creating government apps to reduce bureaucracy costs',
            'Amplifying citizens\' voices, not replacing them',
            'Digitalising all public services by 2030',
          ],
          explanation: 'Civic tech is a philosophy centred on the principle that technology must amplify citizens\' voices, not replace them.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q03-02',
      content: {
        it: {
          question: 'Cosa significa "participation washing"?',
          options: [
            'Lavare i dati prima di pubblicarli come open data',
            'Usare strumenti partecipativi come facciata senza reale trasferimento di potere',
            'Un metodo per aumentare la partecipazione online',
            'Un processo di pulizia dei dati nei sistemi di e-voting',
          ],
          explanation: 'Il "participation washing" è il rischio di usare strumenti partecipativi come facciata, senza un reale trasferimento di potere decisionale ai cittadini.',
        },
        en: {
          question: 'What does "participation washing" mean?',
          options: [
            'Cleaning data before publishing it as open data',
            'Using participatory tools as a facade without genuine transfer of power',
            'A method to increase online participation',
            'A data cleaning process in e-voting systems',
          ],
          explanation: '"Participation washing" is the risk of using participatory tools as a facade, without a genuine transfer of decision-making power to citizens.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q03-03',
      content: {
        it: {
          question: 'Quali sono i tre principi fondamentali dell\'open data?',
          options: [
            'Sicurezza, scalabilità e velocità',
            'Apertura, accessibilità e riutilizzabilità',
            'Completezza, aggiornamento e visualizzazione',
            'Centralizzazione, standardizzazione e certificazione',
          ],
          explanation: 'I principi dell\'open data sono: apertura (formati non proprietari), accessibilità (scaricabili gratuitamente) e riutilizzabilità (licenze che permettono l\'uso libero).',
        },
        en: {
          question: 'What are the three fundamental principles of open data?',
          options: [
            'Security, scalability and speed',
            'Openness, accessibility and reusability',
            'Completeness, updating and visualisation',
            'Centralisation, standardisation and certification',
          ],
          explanation: 'Open data principles are: openness (non-proprietary formats), accessibility (downloadable for free) and reusability (licences permitting free use).',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q03-04',
      content: {
        it: {
          question: 'Cos\'è il "Community-Centered Design"?',
          options: [
            'Un approccio in cui il designer decide cosa è meglio per la comunità',
            'Progettare strumenti tecnologici con la comunità come co-progettista fin dall\'inizio',
            'Un metodo di test in cui la comunità valuta il prodotto finito',
            'Un brand di design per progetti sociali',
          ],
          explanation: 'Il Community-Centered Design coinvolge le comunità come co-progettisti con saperi propri fin dall\'inizio del processo, non come "utenti da testare".',
        },
        en: {
          question: 'What is "Community-Centred Design"?',
          options: [
            'An approach where the designer decides what is best for the community',
            'Designing technological tools with the community as co-designer from the start',
            'A testing method where the community evaluates the finished product',
            'A design brand for social projects',
          ],
          explanation: 'Community-Centred Design involves communities as co-designers with their own knowledge from the very beginning of the process, not as "users to test".',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q03-05',
      content: {
        it: {
          question: 'Cos\'è Decidim?',
          options: [
            'Un social network per attivisti',
            'Un algoritmo per il voto elettronico',
            'Una piattaforma open source per la democrazia partecipativa nata a Barcellona',
            'Un\'app di messaggistica crittografata',
          ],
          explanation: 'Decidim è una piattaforma open source per la democrazia partecipativa, nata a Barcellona e usata da centinaia di città nel mondo.',
        },
        en: {
          question: 'What is Decidim?',
          options: [
            'A social network for activists',
            'An algorithm for electronic voting',
            'An open-source platform for participatory democracy born in Barcelona',
            'An encrypted messaging app',
          ],
          explanation: 'Decidim is an open-source platform for participatory democracy, born in Barcelona and used by hundreds of cities worldwide.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const module03: CourseModule = {
  slug: 'civic-tech',
  number: '03',
  color: 'green',
  iconName: 'Users',
  content: {
    it: {
      title: 'Civic Tech',
      description: 'Tecnologia al servizio delle comunità: dalla partecipazione all\'open data, dall\'empowerment all\'etica della civic tech.',
    },
    en: {
      title: 'Civic Tech',
      description: 'Technology at the service of communities: from participation to open data, from empowerment to the ethics of civic tech.',
    },
  },
  quiz: quiz03,
  lessons: [
    {
      slug: 'tecnologia-per-la-partecipazione',
      readingTime: 8,
      content: {
        it: {
          title: 'Tecnologia per la partecipazione',
          description: 'Cos\'è la civic tech, da dove viene e perché è più importante che mai.',
          body: [
            'Nel 2009, a Washington D.C., Jennifer Pahlka fondò Code for America con un\'idea semplice: i migliori talenti tecnologici del paese avrebbero potuto lavorare — anche solo per un anno — al fianco dei governi locali per migliorare i servizi pubblici con il digitale. Fu l\'inizio di un movimento globale che oggi si chiama civic tech: l\'uso della tecnologia per rafforzare la partecipazione civica, migliorare la trasparenza governativa e dare potere alle comunità.',
            'La civic tech è un campo vasto che include strumenti molto diversi tra loro. C\'è il civic hacking — sviluppatori che creano applicazioni per risolvere problemi della comunità, come FixMyStreet (per segnalare buche e problemi stradali) o MySociety\'s TheyWorkForYou (per monitorare l\'attività dei parlamentari). C\'è il budgeting partecipativo digitale, dove i cittadini decidono come allocare una parte del bilancio comunale. C\'è il civic journalism, con piattaforme che permettono ai cittadini di partecipare all\'informazione.',
            'Ma la civic tech non è solo software. È una filosofia che mette al centro un principio: la tecnologia deve amplificare la voce dei cittadini, non sostituirla. Non è sufficiente creare un\'app per votare online; bisogna chiedersi chi ha accesso a quell\'app, chi ne è escluso, e se il processo è realmente più democratico o solo più efficiente.',
            'In Europa, la civic tech ha preso forme particolarmente interessanti. Decidim, nato a Barcellona, è una piattaforma open source per la democrazia partecipativa usata da centinaia di città nel mondo. Consul, sviluppato a Madrid, permette ai cittadini di proporre e votare iniziative legislative. In Italia, progetti come openParlamento rendono trasparente l\'attività del parlamento.',
            'Il potenziale è enorme, ma le sfide sono reali. Il digital divide esclude chi non ha accesso alla tecnologia. La platform governance — chi decide le regole della piattaforma — può essere opaca quanto i processi che cerca di rendere trasparenti. E c\'è sempre il rischio del "participation washing": usare strumenti partecipativi come facciata senza reale trasferimento di potere.',
            'Nonostante queste sfide, la civic tech rappresenta una delle promesse più concrete della tecnologia: non come strumento di profitto o controllo, ma come infrastruttura per la democrazia. Relatronica si colloca in questo filone, creando strumenti che non vendono attenzione ma la catalizzano verso questioni che contano.',
          ],
          keyTakeaways: [
            'La civic tech usa la tecnologia per rafforzare la partecipazione civica e la trasparenza',
            'Comprende strumenti diversi: civic hacking, budgeting partecipativo, civic journalism',
            'La tecnologia deve amplificare la voce dei cittadini, non sostituirla',
            'Le sfide includono digital divide, platform governance opaca e "participation washing"',
          ],
          reflection: 'Nella tua città o comunità, esiste un problema che potrebbe essere affrontato con uno strumento tecnologico civico? Chi ne beneficerebbe? Chi potrebbe essere escluso?',
        },
        en: {
          title: 'Technology for participation',
          description: 'What civic tech is, where it comes from, and why it matters more than ever.',
          body: [
            'In 2009, in Washington D.C., Jennifer Pahlka founded Code for America with a simple idea: the country\'s best tech talent could work — even for just one year — alongside local governments to improve public services with digital tools. It was the beginning of a global movement now called civic tech: the use of technology to strengthen civic participation, improve government transparency and empower communities.',
            'Civic tech is a vast field that includes very different tools. There is civic hacking — developers creating applications to solve community problems, like FixMyStreet (for reporting potholes and street issues) or MySociety\'s TheyWorkForYou (for monitoring parliamentary activity). There is digital participatory budgeting, where citizens decide how to allocate part of the municipal budget. There is civic journalism, with platforms enabling citizens to participate in reporting.',
            'But civic tech is not just software. It is a philosophy centred on a principle: technology must amplify citizens\' voices, not replace them. It is not enough to create an app for online voting; we must ask who has access to that app, who is excluded, and whether the process is genuinely more democratic or merely more efficient.',
            'In Europe, civic tech has taken particularly interesting forms. Decidim, born in Barcelona, is an open-source platform for participatory democracy used by hundreds of cities worldwide. Consul, developed in Madrid, allows citizens to propose and vote on legislative initiatives. In Italy, projects like openParlamento make parliamentary activity transparent.',
            'The potential is enormous, but the challenges are real. The digital divide excludes those without access to technology. Platform governance — who decides the platform\'s rules — can be as opaque as the processes it seeks to make transparent. And there is always the risk of "participation washing": using participatory tools as a facade without genuine transfer of power.',
            'Despite these challenges, civic tech represents one of technology\'s most concrete promises: not as a tool for profit or control, but as infrastructure for democracy. Relatronica sits in this tradition, creating tools that don\'t sell attention but channel it towards issues that matter.',
          ],
          keyTakeaways: [
            'Civic tech uses technology to strengthen civic participation and transparency',
            'It includes diverse tools: civic hacking, participatory budgeting, civic journalism',
            'Technology must amplify citizens\' voices, not replace them',
            'Challenges include digital divide, opaque platform governance and "participation washing"',
          ],
          reflection: 'In your city or community, is there a problem that could be addressed with a civic technology tool? Who would benefit? Who might be excluded?',
        },
      },
      resources: [
        { title: 'Code for America', url: 'https://codeforamerica.org/', type: 'tool' },
        { title: 'Decidim — Free Open-Source Democracy', url: 'https://decidim.org/', type: 'tool' },
        { title: 'Civic Tech Field Guide', url: 'https://civictech.guide/', type: 'article' },
      ],
    },
    {
      slug: 'open-data-e-trasparenza',
      readingTime: 7,
      content: {
        it: {
          title: 'Open data e trasparenza',
          description: 'I dati aperti come infrastruttura democratica: successi, fallimenti e il potere della trasparenza.',
          body: [
            'Nel 2009, Tim Berners-Lee — l\'inventore del World Wide Web — salì sul palco del TED e lanciò un appello: "Raw data now!". La sua tesi era che i dati raccolti dai governi con i soldi dei contribuenti dovessero essere aperti e accessibili a tutti. Non dati elaborati o interpretati: dati grezzi, in formati aperti, riutilizzabili da chiunque. Era l\'inizio del movimento open data.',
            'L\'open data è l\'idea che certi dati — quelli prodotti dalla pubblica amministrazione, dalla ricerca scientifica finanziata pubblicamente, dai servizi pubblici — siano un bene comune. Come l\'aria o l\'acqua, devono essere accessibili a tutti senza restrizioni. I principi fondamentali sono: apertura (formati non proprietari), accessibilità (scaricabili gratuitamente), riutilizzabilità (licenze che permettono l\'uso libero).',
            'I successi dell\'open data sono impressionanti. In Kenya, il portale open data del governo ha permesso ai cittadini di monitorare la spesa pubblica, riducendo la corruzione. In Italia, portali come dati.gov.it e soldipubblici.gov.it permettono di seguire ogni euro speso dallo stato. A livello globale, OpenStreetMap — la Wikipedia delle mappe — è diventata un\'infrastruttura critica usata da organizzazioni umanitarie durante le emergenze.',
            'Ma l\'open data non è una bacchetta magica. I dati senza contesto possono essere fuorvianti. I dati senza competenze per interpretarli restano lettera morta. E c\'è un paradosso: rendere i dati aperti richiede risorse (standardizzazione, pulizia, documentazione) che molte amministrazioni non hanno. Il risultato è che spesso i dati più importanti — quelli su inquinamento, salute pubblica, contratti statali — restano chiusi o vengono pubblicati in formati inutilizzabili.',
            'La vera sfida dell\'open data non è tecnica: è politica. Chi decide quali dati aprire e quali no? Chi finanzia l\'infrastruttura necessaria? E soprattutto: come garantire che i dati aperti diventino strumenti di empowerment per tutti, non solo per chi ha le competenze tecniche per usarli?',
          ],
          keyTakeaways: [
            'L\'open data tratta i dati pubblici come bene comune: aperti, accessibili e riutilizzabili',
            'Successi concreti nella lotta alla corruzione, nella trasparenza e nelle emergenze umanitarie',
            'I limiti includono mancanza di contesto, competenze necessarie per l\'interpretazione e risorse per la pubblicazione',
            'La vera sfida è politica: chi decide cosa aprire e come garantire l\'empowerment di tutti',
          ],
          reflection: 'Cerca il portale open data della tua città o del tuo paese. Quali dati sono disponibili? Quali mancano? Cosa faresti se avessi accesso ai dati che oggi non ci sono?',
        },
        en: {
          title: 'Open data and transparency',
          description: 'Open data as democratic infrastructure: successes, failures and the power of transparency.',
          body: [
            'In 2009, Tim Berners-Lee — the inventor of the World Wide Web — took the TED stage and made a plea: "Raw data now!". His argument was that data collected by governments with taxpayers\' money should be open and accessible to everyone. Not processed or interpreted data: raw data, in open formats, reusable by anyone. It was the beginning of the open data movement.',
            'Open data is the idea that certain data — those produced by public administration, publicly funded scientific research, public services — are a common good. Like air or water, they must be accessible to all without restrictions. The fundamental principles are: openness (non-proprietary formats), accessibility (downloadable for free), reusability (licences permitting free use).',
            'Open data\'s successes are impressive. In Kenya, the government\'s open data portal allowed citizens to monitor public spending, reducing corruption. In Italy, portals like dati.gov.it and soldipubblici.gov.it allow tracking every euro spent by the state. Globally, OpenStreetMap — the Wikipedia of maps — has become a critical infrastructure used by humanitarian organisations during emergencies.',
            'But open data is no magic wand. Data without context can be misleading. Data without the skills to interpret them remains a dead letter. And there is a paradox: making data open requires resources (standardisation, cleaning, documentation) that many administrations lack. The result is that often the most important data — on pollution, public health, state contracts — remain closed or are published in unusable formats.',
            'The real challenge of open data is not technical: it is political. Who decides which data to open and which to keep closed? Who funds the necessary infrastructure? And above all: how do we ensure open data becomes a tool of empowerment for everyone, not just those with the technical skills to use them?',
          ],
          keyTakeaways: [
            'Open data treats public data as common goods: open, accessible and reusable',
            'Concrete successes in fighting corruption, transparency and humanitarian emergencies',
            'Limitations include lack of context, skills needed for interpretation and resources for publication',
            'The real challenge is political: who decides what to open and how to ensure empowerment for all',
          ],
          reflection: 'Search for your city or country\'s open data portal. What data is available? What\'s missing? What would you do if you had access to the data that currently isn\'t there?',
        },
      },
      resources: [
        { title: 'Tim Berners-Lee — The Next Web (TED Talk)', url: 'https://www.ted.com/talks/tim_berners_lee_the_next_web', type: 'video' },
        { title: 'Open Data Handbook', url: 'https://opendatahandbook.org/', type: 'article' },
        { title: 'OpenStreetMap', url: 'https://www.openstreetmap.org/', type: 'tool' },
      ],
    },
    {
      slug: 'etica-della-civic-tech',
      readingTime: 7,
      content: {
        it: {
          title: 'Etica della civic tech',
          description: 'Le buone intenzioni non bastano: divario digitale, sorveglianza e design centrato sulla comunità.',
          body: [
            'Nel 2016, la città di Chicago lanciò un sistema predittivo per identificare le case a rischio di avvelenamento da piombo, con l\'obiettivo di proteggere i bambini. L\'algoritmo funzionava, ma c\'era un problema: le zone identificate come "a rischio" corrispondevano quasi perfettamente ai quartieri afroamericani a basso reddito. Il sistema, costruito con buone intenzioni, rischiava di diventare uno strumento di profilazione razziale mascherata da salute pubblica.',
            'Questo caso illustra un principio fondamentale dell\'etica della civic tech: le buone intenzioni non sono sufficienti. Ogni strumento tecnologico opera all\'interno di strutture di potere preesistenti e, se non progettato con estrema attenzione, rischia di amplificarle piuttosto che correggerle. Un\'app per la partecipazione civica che richiede uno smartphone esclude chi non ce l\'ha. Una piattaforma di open data in inglese esclude chi parla solo spagnolo o arabo.',
            'Il concetto di "Community-Centered Design" risponde a queste sfide. Invece di progettare per le comunità, si progetta con le comunità. Le persone che useranno lo strumento partecipano alla sua progettazione fin dall\'inizio — non come "utenti da testare" ma come co-progettisti con saperi propri. Questo approccio è più lento, più costoso e più difficile. Ma è l\'unico che produce strumenti realmente utili e rispettosi.',
            'C\'è poi la questione della sorveglianza. Molte tecnologie civiche raccolgono dati sui cittadini — dove vivono, come si muovono, cosa pensano, come votano. Anche quando questi dati servono a migliorare i servizi, creano rischi: possono essere venduti, hackerati, usati per finalità diverse da quelle dichiarate. La civic tech etica deve essere privacy-first per design, non come ripensamento.',
            'Infine, l\'etica della civic tech riguarda il potere. Chi finanzia la piattaforma? Chi ne controlla il codice? Chi decide le regole di moderazione? Se la risposta è sempre "un\'azienda tech della Silicon Valley" o "un\'ONG del Nord globale", stiamo riproducendo dinamiche coloniali sotto una veste digitale. La vera civic tech è quella dove le comunità hanno non solo accesso allo strumento, ma proprietà e controllo su di esso.',
          ],
          keyTakeaways: [
            'Le buone intenzioni non bastano: ogni tecnologia opera in strutture di potere preesistenti',
            'Il Community-Centered Design coinvolge le comunità come co-progettisti, non come utenti da testare',
            'La civic tech etica è privacy-first per design, non come ripensamento',
            'La vera civic tech dà alle comunità proprietà e controllo sullo strumento, non solo accesso',
          ],
          reflection: 'Pensa a un servizio digitale pubblico che usi (SPID, l\'app della tua banca, un servizio sanitario online). Chi è escluso? Chi ha progettato il servizio? Le persone escluse sono state consultate?',
        },
        en: {
          title: 'Ethics of civic tech',
          description: 'Good intentions are not enough: digital divides, surveillance and community-centred design.',
          body: [
            'In 2016, the city of Chicago launched a predictive system to identify homes at risk of lead poisoning, aiming to protect children. The algorithm worked, but there was a problem: the zones identified as "at risk" corresponded almost perfectly to low-income African-American neighbourhoods. The system, built with good intentions, risked becoming a tool of racial profiling masked as public health.',
            'This case illustrates a fundamental principle of civic tech ethics: good intentions are not sufficient. Every technological tool operates within pre-existing power structures and, if not designed with extreme care, risks amplifying them rather than correcting them. A civic participation app that requires a smartphone excludes those who don\'t have one. An open data platform in English excludes those who only speak Spanish or Arabic.',
            'The concept of "Community-Centred Design" responds to these challenges. Instead of designing for communities, you design with communities. The people who will use the tool participate in its design from the very beginning — not as "users to test" but as co-designers with their own knowledge. This approach is slower, more expensive and more difficult. But it is the only one that produces truly useful and respectful tools.',
            'Then there is the question of surveillance. Many civic technologies collect data on citizens — where they live, how they move, what they think, how they vote. Even when this data serves to improve services, it creates risks: it can be sold, hacked, used for purposes different from those stated. Ethical civic tech must be privacy-first by design, not as an afterthought.',
            'Finally, civic tech ethics is about power. Who funds the platform? Who controls the code? Who decides the moderation rules? If the answer is always "a Silicon Valley tech company" or "a Global North NGO", we are reproducing colonial dynamics under a digital guise. True civic tech is where communities have not just access to the tool, but ownership and control over it.',
          ],
          keyTakeaways: [
            'Good intentions are not enough: every technology operates within pre-existing power structures',
            'Community-Centred Design involves communities as co-designers, not users to test',
            'Ethical civic tech is privacy-first by design, not as an afterthought',
            'True civic tech gives communities ownership and control over the tool, not just access',
          ],
          reflection: 'Think of a digital public service you use (digital identity, your bank\'s app, an online health service). Who is excluded? Who designed the service? Were excluded people consulted?',
        },
      },
      resources: [
        { title: 'Civic Tech Ethics — MIT GOV/LAB', url: 'https://mitgovlab.org/', type: 'article' },
        { title: 'Design Justice — Sasha Costanza-Chock', url: 'https://designjustice.mitpress.mit.edu/', type: 'book' },
        { title: 'AlgorithmWatch', url: 'https://algorithmwatch.org/', type: 'tool' },
      ],
    },
  ],
};
