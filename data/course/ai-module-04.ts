import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz04: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Lavoro e automazione',
      description: 'Verifica la tua comprensione del Modulo 04: storia dell\'automazione, impatti differenziati e scenari futuri per il lavoro.',
    },
    en: {
      title: 'Quiz — Work and automation',
      description: 'Test your understanding of Module 04: history of automation, differentiated impacts and future scenarios for work.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q04-01',
      content: {
        it: {
          question: 'Qual è la lezione principale dalla storia dell\'automazione?',
          options: [
            'L\'automazione ha sempre eliminato più posti di lavoro di quanti ne abbia creati',
            'L\'automazione crea nuovi posti di lavoro ma non necessariamente per le stesse persone o con le stesse condizioni',
            'L\'automazione non ha mai avuto impatti significativi sull\'occupazione',
            'L\'automazione riguarda solo il settore manifatturiero',
          ],
          explanation: 'La storia mostra che l\'automazione crea nuovi tipi di lavoro, ma non automaticamente per chi ha perso il vecchio. La transizione può durare decenni e i benefici e i costi sono distribuiti in modo molto diseguale tra gruppi sociali, geografie e generazioni.',
        },
        en: {
          question: 'What is the main lesson from the history of automation?',
          options: [
            'Automation has always eliminated more jobs than it created',
            'Automation creates new jobs but not necessarily for the same people or with the same conditions',
            'Automation has never had significant impacts on employment',
            'Automation only concerns the manufacturing sector',
          ],
          explanation: 'History shows that automation creates new types of work, but not automatically for those who lost their old jobs. The transition can take decades and benefits and costs are distributed very unequally between social groups, geographies and generations.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q04-02',
      content: {
        it: {
          question: 'Cos\'è il "ghost work" nel contesto dell\'economia dell\'AI?',
          options: [
            'Il lavoro svolto da AI senza supervisione umana',
            'Il lavoro umano invisibile che alimenta i sistemi AI (etichettatura dati, moderazione, valutazione)',
            'Il lavoro notturno nei data center',
            'Le attività illegali svolte con l\'aiuto dell\'AI',
          ],
          explanation: 'Mary Gray e Siddharth Suri hanno coniato il termine "ghost work" per descrivere il lavoro umano invisibile ma essenziale che alimenta l\'AI: milioni di lavoratori nel Sud globale etichettano dati, moderano contenuti e valutano output per pochi centesimi a task, senza tutele lavorative.',
        },
        en: {
          question: 'What is "ghost work" in the context of the AI economy?',
          options: [
            'Work performed by AI without human supervision',
            'Invisible human work that powers AI systems (data labelling, moderation, evaluation)',
            'Night work in data centres',
            'Illegal activities carried out with the help of AI',
          ],
          explanation: 'Mary Gray and Siddharth Suri coined the term "ghost work" to describe the invisible but essential human labour that powers AI: millions of workers in the Global South label data, moderate content and evaluate output for a few cents per task, without labour protections.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q04-03',
      content: {
        it: {
          question: 'Perché le stime sull\'automazione dei posti di lavoro sono così diverse tra loro?',
          options: [
            'Perché alcune sono fatte da ottimisti e altre da pessimisti',
            'Perché dipendono da come si definisce "automazione" e da assunzioni diverse su tecnologia, economia e politica',
            'Perché nessuno ha dati affidabili sul mercato del lavoro',
            'Perché le aziende tech mentono sulle capacità dell\'AI',
          ],
          explanation: 'Le stime variano da -14% a +47% dei posti di lavoro "a rischio" perché dipendono da definizioni diverse: automatizzare un compito non significa eliminare un lavoro. Le previsioni dipendono da assunzioni su adozione tecnologica, regolamentazione, dinamiche economiche e scelte politiche.',
        },
        en: {
          question: 'Why are estimates about job automation so different from each other?',
          options: [
            'Because some are made by optimists and others by pessimists',
            'Because they depend on how "automation" is defined and on different assumptions about technology, economics and policy',
            'Because nobody has reliable data on the labour market',
            'Because tech companies lie about AI capabilities',
          ],
          explanation: 'Estimates range from -14% to +47% of jobs "at risk" because they depend on different definitions: automating a task does not mean eliminating a job. Forecasts depend on assumptions about technology adoption, regulation, economic dynamics and political choices.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q04-04',
      content: {
        it: {
          question: 'Cos\'è il reddito di base universale (UBI) e perché è discusso nel contesto dell\'AI?',
          options: [
            'È uno stipendio per chi lavora nell\'industria tech',
            'È un pagamento periodico incondizionato a tutti i cittadini, proposto come rete di sicurezza in un\'economia sempre più automatizzata',
            'È un sistema di sussidi per i disoccupati',
            'È un fondo pensione anticipato per chi perde il lavoro a causa dell\'AI',
          ],
          explanation: 'Il UBI è un pagamento regolare e incondizionato a ogni cittadino, indipendentemente dal reddito o dallo status lavorativo. Viene discusso nel contesto dell\'AI perché potrebbe fornire una rete di sicurezza in un\'economia dove il lavoro tradizionale diventa meno disponibile o più precario.',
        },
        en: {
          question: 'What is Universal Basic Income (UBI) and why is it discussed in the context of AI?',
          options: [
            'A salary for people working in the tech industry',
            'An unconditional periodic payment to all citizens, proposed as a safety net in an increasingly automated economy',
            'A system of unemployment benefits',
            'An early pension fund for those who lose their jobs due to AI',
          ],
          explanation: 'UBI is a regular, unconditional payment to every citizen, regardless of income or employment status. It is discussed in the AI context because it could provide a safety net in an economy where traditional work becomes less available or more precarious.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q04-05',
      content: {
        it: {
          question: 'Quale approccio al rapporto tra AI e lavoro è più equilibrato?',
          options: [
            'Bloccare lo sviluppo dell\'AI per proteggere i posti di lavoro',
            'Accelerare l\'automazione il più possibile per massimizzare la produttività',
            'Governare la transizione con politiche attive: formazione, protezione sociale, redistribuzione e coinvolgimento dei lavoratori',
            'Lasciare che il mercato si auto-regoli, come è sempre successo',
          ],
          explanation: 'La storia mostra che i benefici dell\'automazione non si distribuiscono automaticamente. Servono politiche attive di transizione: investimenti in formazione, reti di protezione sociale, redistribuzione dei benefici e, soprattutto, il coinvolgimento dei lavoratori nelle decisioni che li riguardano.',
        },
        en: {
          question: 'Which approach to the relationship between AI and work is most balanced?',
          options: [
            'Blocking AI development to protect jobs',
            'Accelerating automation as much as possible to maximise productivity',
            'Governing the transition with active policies: training, social protection, redistribution and worker involvement',
            'Letting the market self-regulate, as has always happened',
          ],
          explanation: 'History shows that automation\'s benefits do not distribute automatically. Active transition policies are needed: investment in training, social safety nets, redistribution of benefits and, above all, involvement of workers in decisions that affect them.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const aiModule04: CourseModule = {
  slug: 'lavoro-e-automazione',
  number: '04',
  color: 'amber',
  iconName: 'Briefcase',
  content: {
    it: {
      title: 'Lavoro e automazione',
      description: 'L\'impatto dell\'AI sul lavoro: storia dell\'automazione, chi beneficia e chi perde, e i futuri possibili del lavoro.',
    },
    en: {
      title: 'Work and automation',
      description: 'AI\'s impact on work: history of automation, who benefits and who loses, and the possible futures of work.',
    },
  },
  quiz: quiz04,
  lessons: [
    {
      slug: 'automazione-storia-presente',
      readingTime: 8,
      content: {
        it: {
          title: 'Automazione: storia e presente',
          description: 'Dai telai meccanici all\'AI generativa: cosa la storia dell\'automazione ci insegna sul presente.',
          body: [
            'Ogni volta che emerge una nuova tecnologia di automazione, la stessa domanda riemerge: "Ci ruberà il lavoro?". È successo con il telaio meccanico nel Settecento (i Luddisti lo distruggevano), con la catena di montaggio nel Novecento, con il computer negli anni \'80, con internet negli anni 2000. Ora tocca all\'intelligenza artificiale. Ma la storia ci insegna che la risposta non è mai un semplice sì o no.',
            'Quando i telai meccanici sostituirono i tessitori manuali nell\'Inghilterra del XVIII secolo, i tessitori persero il lavoro — questo è innegabile. Ma nel giro di qualche decennio, l\'industria tessile impiegava molte più persone di prima, in ruoli diversi: operai nelle fabbriche, ingegneri, commercianti, trasportatori. Il problema non era che il lavoro scomparisse, ma che i benefici e i costi fossero distribuiti in modo brutalmente diseguale. I proprietari delle fabbriche si arricchirono; i tessitori manuali morirono in povertà. La transizione creò ricchezza aggregata ma devastazione individuale.',
            'Lo stesso schema si è ripetuto con ogni ondata di automazione. L\'economista Joseph Schumpeter lo chiamò "distruzione creatrice": il capitalismo progredisce distruggendo vecchie industrie e creandone di nuove. Ma Schumpeter era più onesto di molti dei suoi epigoni: riconosceva che la distruzione era reale e dolorosa, non solo una fase di passaggio indolore.',
            'Cosa rende l\'automazione basata sull\'AI diversa dalle precedenti? Tre elementi. Primo: la velocità. Le rivoluzioni industriali precedenti si sono sviluppate nell\'arco di decenni; l\'AI trasforma interi settori in anni. Secondo: l\'ampiezza. L\'automazione precedente colpiva principalmente il lavoro manuale e ripetitivo; l\'AI può automatizzare anche compiti cognitivi, creativi e relazionali. Terzo: la concentrazione. I benefici dell\'automazione industriale erano distribuiti tra molte aziende; i benefici dell\'AI tendono a concentrarsi in poche corporation globali che controllano i modelli, i dati e l\'infrastruttura.',
            'Uno studio di Goldman Sachs del 2023 stima che l\'AI generativa potrebbe "esporre" all\'automazione circa 300 milioni di posti di lavoro nel mondo. Ma "esporre" non significa "eliminare": significa che una parte significativa dei compiti che compongono quei lavori potrebbe essere automatizzata. La differenza tra "automazione di compiti" e "automazione di lavori" è cruciale. Pochi lavori sono completamente automatizzabili; molti lavori vedranno alcuni compiti automatizzati e altri trasformati.',
            'La domanda giusta non è "l\'AI ci ruberà il lavoro?" ma "chi beneficerà dell\'automazione, chi ne pagherà il prezzo, e cosa possiamo fare perché la transizione sia più equa di quelle passate?".',
          ],
          keyTakeaways: [
            'La storia mostra che l\'automazione non elimina il lavoro in aggregato, ma i costi sono distribuiti in modo diseguale',
            'L\'AI differisce dalle precedenti automazioni per velocità, ampiezza (anche lavoro cognitivo) e concentrazione dei benefici',
            '"Esporre all\'automazione" non significa "eliminare": la distinzione compiti/lavori è cruciale',
            'La domanda chiave è chi beneficia e chi paga il prezzo, non se il lavoro scompare',
          ],
          reflection: 'Pensa al tuo lavoro (o a quello che vorresti fare). Quali compiti potrebbero essere automatizzati dall\'AI? Quali no? Come cambierebbe il tuo ruolo se quei compiti fossero automatizzati?',
        },
        en: {
          title: 'Automation: history and present',
          description: 'From mechanical looms to generative AI: what the history of automation teaches us about the present.',
          body: [
            'Every time a new automation technology emerges, the same question resurfaces: "Will it steal our jobs?". It happened with the mechanical loom in the 18th century (the Luddites destroyed them), with the assembly line in the 20th century, with computers in the 1980s, with the internet in the 2000s. Now it\'s artificial intelligence\'s turn. But history teaches us that the answer is never a simple yes or no.',
            'When mechanical looms replaced manual weavers in 18th-century England, weavers lost their jobs — this is undeniable. But within a few decades, the textile industry employed far more people than before, in different roles: factory workers, engineers, merchants, transporters. The problem was not that work disappeared, but that benefits and costs were distributed in a brutally unequal way. Factory owners grew rich; manual weavers died in poverty. The transition created aggregate wealth but individual devastation.',
            'The same pattern has repeated with every wave of automation. Economist Joseph Schumpeter called it "creative destruction": capitalism progresses by destroying old industries and creating new ones. But Schumpeter was more honest than many of his followers: he acknowledged that the destruction was real and painful, not merely a painless transition phase.',
            'What makes AI-based automation different from previous ones? Three elements. First: speed. Previous industrial revolutions unfolded over decades; AI is transforming entire sectors in years. Second: breadth. Previous automation mainly affected manual, repetitive work; AI can automate cognitive, creative and relational tasks too. Third: concentration. Benefits of industrial automation were distributed among many companies; AI benefits tend to concentrate in a few global corporations that control models, data and infrastructure.',
            'A 2023 Goldman Sachs study estimates that generative AI could "expose" around 300 million jobs worldwide to automation. But "expose" does not mean "eliminate": it means that a significant portion of tasks that make up those jobs could be automated. The difference between "task automation" and "job automation" is crucial. Few jobs are fully automatable; many jobs will see some tasks automated and others transformed.',
            'The right question is not "will AI steal our jobs?" but "who will benefit from automation, who will pay the price, and what can we do to make the transition fairer than past ones?".',
          ],
          keyTakeaways: [
            'History shows automation does not eliminate work in aggregate, but costs are unequally distributed',
            'AI differs from previous automation in speed, breadth (cognitive work too) and concentration of benefits',
            '"Exposed to automation" does not mean "eliminated": the tasks/jobs distinction is crucial',
            'The key question is who benefits and who pays the price, not whether work disappears',
          ],
          reflection: 'Think about your job (or the one you would like to have). Which tasks could be automated by AI? Which could not? How would your role change if those tasks were automated?',
        },
      },
      resources: [
        { title: 'Goldman Sachs — The Potentially Large Effects of AI on Economic Growth', url: 'https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html', type: 'article' },
        { title: 'Carl Benedikt Frey — The Technology Trap', url: 'https://global.oup.com/academic/product/the-technology-trap-9780190908287', type: 'book' },
        { title: 'Automation and the Future of Work — Aaron Benanav', url: 'https://www.versobooks.com/books/3717-automation-and-the-future-of-work', type: 'book' },
      ],
    },
    {
      slug: 'chi-beneficia-chi-perde',
      readingTime: 9,
      content: {
        it: {
          title: 'Chi beneficia e chi perde',
          description: 'La geografia della disuguaglianza nell\'era dell\'AI: ghost work, gig economy e concentrazione del potere.',
          body: [
            'L\'immagine dominante dell\'AI e del lavoro è quella del programmatore di Silicon Valley che usa ChatGPT per scrivere codice più velocemente. Ma questa immagine nasconde una realtà molto più complessa e diseguale. Per capire chi beneficia e chi perde dall\'automazione basata sull\'AI, dobbiamo guardare l\'intera catena del valore — dalla miniera di cobalto al data center, dal data labeler al CEO.',
            'Alla base della catena ci sono i lavoratori che estraggono le materie prime: il cobalto per le batterie (spesso estratto da minatori bambini nella Repubblica Democratica del Congo), il litio per i chip, le terre rare per i componenti elettronici. Questi lavoratori non beneficiano dell\'AI — ne pagano il prezzo con la loro salute e il loro ambiente.',
            'Un gradino sopra ci sono quelli che Mary Gray e Siddharth Suri chiamano "ghost workers" — lavoratori fantasma. Sono le centinaia di migliaia di persone nel Sud globale che etichettano immagini, trascrivono audio, moderano contenuti violenti e valutano la qualità degli output dell\'AI per piattaforme come Amazon Mechanical Turk, Scale AI, Sama. Guadagnano pochi centesimi a task, non hanno contratti stabili, non hanno tutele sindacali, non hanno benefici. Sono la forza lavoro invisibile che permette all\'AI di funzionare.',
            'Nel 2023, un\'inchiesta di TIME ha rivelato che OpenAI aveva pagato lavoratori kenioti meno di 2 dollari l\'ora per moderare i contenuti violenti e sessuali usati per addestrare ChatGPT, esponendoli a materiale traumatizzante senza adeguato supporto psicologico. Questo è il costo umano che non appare nelle presentazioni sulle meraviglie dell\'AI generativa.',
            'In cima alla catena ci sono le grandi corporation — Google, Microsoft, Meta, OpenAI, Amazon — che catturano la stragrande maggioranza del valore generato dall\'AI. Queste aziende hanno una capitalizzazione di mercato combinata di migliaia di miliardi di dollari, ma impiegano relativamente poche persone. La produttività aumenta, i profitti aumentano, ma i benefici si concentrano in un numero sempre più ristretto di mani.',
            'In mezzo ci sono i lavoratori dei paesi ricchi, il cui destino varia enormemente. I professionisti altamente qualificati (programmatori, medici, avvocati) tendono a usare l\'AI come strumento di amplificazione della produttività — almeno per ora. I lavoratori in ruoli di routine (contabilità, servizio clienti, traduzione) vedono i loro compiti automatizzati o devoluti a sistemi ibridi dove l\'AI fa la maggior parte del lavoro e l\'umano gestisce le eccezioni. I gig workers (rider, autisti, camerieri) sono sempre più gestiti da algoritmi che ne dettano ritmi, percorsi e compensi.',
          ],
          keyTakeaways: [
            'L\'intera catena del valore dell\'AI è costruita su lavoro sottopagato e risorse estratte dal Sud globale',
            'I "ghost workers" — data labelers, moderatori — sono la forza lavoro invisibile dell\'AI',
            'I benefici dell\'AI si concentrano in poche corporation globali, amplificando la disuguaglianza',
            'L\'impatto sul lavoro varia enormemente per qualifica, settore, geografia e genere',
          ],
          reflection: 'La prossima volta che usi un servizio basato su AI (chatbot, traduttore, navigatore), chiediti: quante persone hanno lavorato — e stanno lavorando — per rendere possibile questo servizio? In che condizioni? Questo cambia il modo in cui valuti il servizio?',
        },
        en: {
          title: 'Who benefits and who loses',
          description: 'The geography of inequality in the AI era: ghost work, gig economy and concentration of power.',
          body: [
            'The dominant image of AI and work is that of a Silicon Valley programmer using ChatGPT to write code faster. But this image conceals a much more complex and unequal reality. To understand who benefits and who loses from AI-based automation, we must look at the entire value chain — from the cobalt mine to the data centre, from the data labeller to the CEO.',
            'At the base of the chain are workers who extract raw materials: cobalt for batteries (often mined by child labourers in the Democratic Republic of Congo), lithium for chips, rare earths for electronic components. These workers do not benefit from AI — they pay its price with their health and their environment.',
            'One step up are those whom Mary Gray and Siddharth Suri call "ghost workers". They are the hundreds of thousands of people in the Global South who label images, transcribe audio, moderate violent content and evaluate AI output quality for platforms like Amazon Mechanical Turk, Scale AI, Sama. They earn a few cents per task, have no stable contracts, no union protections, no benefits. They are the invisible workforce that enables AI to function.',
            'In 2023, a TIME investigation revealed that OpenAI had paid Kenyan workers less than 2 dollars an hour to moderate the violent and sexual content used to train ChatGPT, exposing them to traumatising material without adequate psychological support. This is the human cost that does not appear in presentations about the wonders of generative AI.',
            'At the top of the chain are the major corporations — Google, Microsoft, Meta, OpenAI, Amazon — which capture the vast majority of value generated by AI. These companies have a combined market capitalisation of trillions of dollars but employ relatively few people. Productivity increases, profits increase, but benefits concentrate in an ever-smaller number of hands.',
            'In between are workers in wealthy countries, whose fate varies enormously. Highly skilled professionals (programmers, doctors, lawyers) tend to use AI as a productivity amplification tool — at least for now. Workers in routine roles (accounting, customer service, translation) see their tasks automated or devolved to hybrid systems where AI does most of the work and the human handles exceptions. Gig workers (delivery riders, drivers, waiters) are increasingly managed by algorithms that dictate their rhythms, routes and compensation.',
          ],
          keyTakeaways: [
            'AI\'s entire value chain is built on underpaid labour and resources extracted from the Global South',
            '"Ghost workers" — data labellers, moderators — are AI\'s invisible workforce',
            'AI benefits concentrate in a few global corporations, amplifying inequality',
            'Impact on work varies enormously by skill, sector, geography and gender',
          ],
          reflection: 'Next time you use an AI-based service (chatbot, translator, navigator), ask yourself: how many people have worked — and are working — to make this service possible? In what conditions? Does this change how you evaluate the service?',
        },
      },
      resources: [
        { title: 'Mary Gray & Siddharth Suri — Ghost Work', url: 'https://ghostwork.info/', type: 'book' },
        { title: 'TIME — OpenAI Used Kenyan Workers on Less Than $2/hr', url: 'https://time.com/6247678/openai-chatgpt-kenya-workers/', type: 'article' },
        { title: 'The Click That Makes the AI Work — The Verge', url: 'https://www.theverge.com/features/23764584/ai-artificial-intelligence-data-notation-labor-scale-surge-remotasks-consumers-workers', type: 'article' },
      ],
    },
    {
      slug: 'futuri-del-lavoro',
      readingTime: 8,
      content: {
        it: {
          title: 'UBI, reskilling e futuri alternativi',
          description: 'Reddito di base universale, formazione continua e modelli cooperativi: scenari per un futuro del lavoro più equo.',
          body: [
            'Se l\'AI trasformerà radicalmente il lavoro — e le evidenze suggeriscono che lo farà, anche se i tempi e i modi sono incerti — quali strumenti abbiamo per governare questa transizione? Esploriamo tre approcci: il reddito di base universale, la formazione continua e i modelli cooperativi di proprietà della tecnologia.',
            'Il reddito di base universale (UBI — Universal Basic Income) è l\'idea che ogni cittadino riceva un pagamento periodico incondizionato, sufficiente a coprire i bisogni di base, indipendentemente dal lavoro o dal reddito. Non è un\'idea nuova — Thomas Paine lo propose nel 1797 — ma l\'AI le ha dato urgenza. Se il lavoro tradizionale diventa meno disponibile o più precario, il UBI potrebbe fornire una rete di sicurezza che permette alle persone di vivere con dignità, formarsi, dedicarsi al volontariato o all\'imprenditoria.',
            'I risultati degli esperimenti sul UBI sono promettenti. Il programma pilota finlandese (2017-2018) ha mostrato che i destinatari del UBI non lavoravano meno — anzi, alcuni lavoravano di più — ma avevano livelli significativamente più bassi di stress, ansia e problemi di salute. L\'esperimento di Stockton, California (2019-2021) ha mostrato risultati simili: i destinatari trovavano lavoro a tempo pieno a un tasso doppio rispetto al gruppo di controllo.',
            'La formazione continua (reskilling e upskilling) è la risposta più citata dai governi e dalle aziende. L\'idea è che i lavoratori i cui compiti vengono automatizzati possano essere formati per nuovi ruoli. Ma la realtà è più complessa. La formazione funziona quando i nuovi ruoli esistono, sono accessibili e offrono condizioni comparabili. Formare un contabile cinquantenne come programmatore in sei mesi non è realistico né desiderabile. E la responsabilità della formazione ricade troppo spesso sull\'individuo, non sulle aziende che beneficiano dell\'automazione né sullo Stato.',
            'Un terzo approccio, meno discusso ma potenzialmente trasformativo, è la proprietà cooperativa della tecnologia. Invece di concentrare i benefici dell\'AI nelle mani degli azionisti delle big tech, i modelli cooperativi propongono che i lavoratori, le comunità e il pubblico possano possedere e governare i sistemi di AI. Cooperativa piattaforma (platform cooperativism) è un movimento che crea alternative alle gig economy controllate dagli algoritmi: cooperative di rider, di freelancer, di lavoratori domestici che possiedono e gestiscono le piattaforme su cui lavorano.',
            'Nessuno di questi approcci è sufficiente da solo. Il UBI senza formazione rischia di creare una classe di sussidiati passivi. La formazione senza protezione sociale lascia scoperte le transizioni. La proprietà cooperativa senza regolamentazione non può competere con le corporation. Servono approcci integrati, e soprattutto servono processi democratici per decidere collettivamente quale futuro del lavoro vogliamo costruire.',
          ],
          keyTakeaways: [
            'Il UBI potrebbe fornire una rete di sicurezza, e gli esperimenti mostrano risultati promettenti',
            'Il reskilling funziona solo se i nuovi ruoli esistono, sono accessibili e offrono condizioni adeguate',
            'Il platform cooperativism propone la proprietà collettiva della tecnologia come alternativa alla concentrazione',
            'Nessun approccio è sufficiente da solo: servono politiche integrate e processi democratici',
          ],
          reflection: 'Se ricevessi un reddito di base sufficiente a coprire i tuoi bisogni essenziali, come cambierebbe il tuo rapporto con il lavoro? Lavoreresti meno, diversamente, o nello stesso modo? Cosa faresti con il tempo liberato?',
        },
        en: {
          title: 'UBI, reskilling and alternative futures',
          description: 'Universal basic income, lifelong learning and cooperative models: scenarios for a fairer future of work.',
          body: [
            'If AI will radically transform work — and evidence suggests it will, even if the timing and modes are uncertain — what tools do we have to govern this transition? We explore three approaches: universal basic income, lifelong learning and cooperative models of technology ownership.',
            'Universal Basic Income (UBI) is the idea that every citizen receives an unconditional periodic payment, sufficient to cover basic needs, regardless of work or income. It is not a new idea — Thomas Paine proposed it in 1797 — but AI has given it urgency. If traditional work becomes less available or more precarious, UBI could provide a safety net that allows people to live with dignity, train, volunteer or start businesses.',
            'Results from UBI experiments are promising. The Finnish pilot programme (2017-2018) showed that UBI recipients did not work less — some actually worked more — but had significantly lower levels of stress, anxiety and health problems. The Stockton, California experiment (2019-2021) showed similar results: recipients found full-time employment at twice the rate of the control group.',
            'Lifelong learning (reskilling and upskilling) is the most frequently cited response by governments and companies. The idea is that workers whose tasks are automated can be trained for new roles. But reality is more complex. Training works when new roles exist, are accessible and offer comparable conditions. Training a fifty-year-old accountant as a programmer in six months is neither realistic nor desirable. And the responsibility for training falls too often on the individual, not on the companies that benefit from automation or the state.',
            'A third approach, less discussed but potentially transformative, is cooperative technology ownership. Instead of concentrating AI benefits in the hands of big tech shareholders, cooperative models propose that workers, communities and the public can own and govern AI systems. Platform cooperativism is a movement creating alternatives to algorithm-controlled gig economies: cooperatives of delivery riders, freelancers, domestic workers who own and manage the platforms they work on.',
            'None of these approaches is sufficient alone. UBI without training risks creating a class of passive recipients. Training without social protection leaves transitions uncovered. Cooperative ownership without regulation cannot compete with corporations. Integrated approaches are needed, and above all, democratic processes to collectively decide which future of work we want to build.',
          ],
          keyTakeaways: [
            'UBI could provide a safety net, and experiments show promising results',
            'Reskilling works only if new roles exist, are accessible and offer adequate conditions',
            'Platform cooperativism proposes collective technology ownership as an alternative to concentration',
            'No approach is sufficient alone: integrated policies and democratic processes are needed',
          ],
          reflection: 'If you received a basic income sufficient to cover your essential needs, how would your relationship with work change? Would you work less, differently, or the same? What would you do with the freed-up time?',
        },
      },
      resources: [
        { title: 'Rutger Bregman — Utopia for Realists (UBI)', url: 'https://www.rutgerbregman.com/utopia-for-realists', type: 'book' },
        { title: 'Platform Cooperativism Consortium', url: 'https://platform.coop/', type: 'tool' },
        { title: 'Finland\'s UBI Experiment — Results', url: 'https://julkaisut.valtioneuvosto.fi/handle/10024/161361', type: 'article' },
      ],
    },
  ],
};
