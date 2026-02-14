import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz01: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Pensare il futuro',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 01: Futures Studies, scenari e il futuro come spazio di progetto.',
    },
    en: {
      title: 'Quiz — Thinking the future',
      description: 'Test your understanding of Module 01 key concepts: Futures Studies, scenarios and the future as design space.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'q01-01',
      content: {
        it: {
          question: 'Qual è la differenza fondamentale tra una previsione e uno scenario?',
          options: [
            'La previsione è più accurata dello scenario',
            'La previsione dice "questo accadrà", lo scenario dice "se questo accade, ecco cosa potrebbe seguire"',
            'Gli scenari sono solo per le aziende, le previsioni per tutti',
            'Non c\'è differenza, sono sinonimi',
          ],
          explanation: 'Le previsioni promettono certezza, mentre gli scenari esplorano le conseguenze di diverse possibilità senza pretendere di predire il futuro.',
        },
        en: {
          question: 'What is the fundamental difference between a prediction and a scenario?',
          options: [
            'Predictions are more accurate than scenarios',
            'A prediction says "this will happen", a scenario says "if this happens, here is what might follow"',
            'Scenarios are only for businesses, predictions for everyone',
            'There is no difference, they are synonyms',
          ],
          explanation: 'Predictions promise certainty, while scenarios explore the consequences of different possibilities without claiming to predict the future.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q01-02',
      content: {
        it: {
          question: 'Chi ha sviluppato il "cono dei futuri" che distingue futuri probabili, plausibili, possibili e preferibili?',
          options: [
            'Peter Schwartz',
            'Yuval Noah Harari',
            'Joseph Voros',
            'Stuart Candy',
          ],
          explanation: 'Joseph Voros pubblicò nel 2003 il diagramma del "cono dei futuri", diventato uno strumento fondamentale dei Futures Studies.',
        },
        en: {
          question: 'Who developed the "futures cone" distinguishing probable, plausible, possible and preferable futures?',
          options: [
            'Peter Schwartz',
            'Yuval Noah Harari',
            'Joseph Voros',
            'Stuart Candy',
          ],
          explanation: 'Joseph Voros published the "futures cone" diagram in 2003, which became a fundamental tool of Futures Studies.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q01-03',
      content: {
        it: {
          question: 'Qual è il metodo classico per costruire scenari?',
          options: [
            'Il brainstorming libero',
            'La matrice 2x2 basata su due incertezze critiche',
            'L\'analisi statistica dei trend passati',
            'La consultazione di esperti attraverso il metodo Delphi',
          ],
          explanation: 'La matrice 2x2 è il metodo classico della scenario planning: si identificano due incertezze critiche e si esplorano i quattro scenari risultanti.',
        },
        en: {
          question: 'What is the classic method for building scenarios?',
          options: [
            'Free brainstorming',
            'The 2x2 matrix based on two critical uncertainties',
            'Statistical analysis of past trends',
            'Expert consultation through the Delphi method',
          ],
          explanation: 'The 2x2 matrix is the classic scenario planning method: you identify two critical uncertainties and explore the four resulting scenarios.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'q01-04',
      content: {
        it: {
          question: 'Perché immaginare il futuro è considerato un "atto politico"?',
          options: [
            'Perché solo i politici possono farlo',
            'Perché richiede il voto democratico',
            'Perché chi controlla la narrativa del futuro influenza le decisioni del presente',
            'Perché i Futures Studies sono finanziati dai governi',
          ],
          explanation: 'Chi controlla le storie sul futuro influenza politiche, investimenti e scelte collettive. Immaginare futuri alternativi è un atto di resistenza contro narrative imposte.',
        },
        en: {
          question: 'Why is imagining the future considered a "political act"?',
          options: [
            'Because only politicians can do it',
            'Because it requires a democratic vote',
            'Because whoever controls the narrative of the future influences present-day decisions',
            'Because Futures Studies are funded by governments',
          ],
          explanation: 'Whoever controls stories about the future influences policies, investments and collective choices. Imagining alternative futures is an act of resistance against imposed narratives.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'q01-05',
      content: {
        it: {
          question: 'Secondo il cono di Voros, i "futuri preferibili" sono:',
          options: [
            'Quelli verso cui stiamo andando se non cambia nulla',
            'Quelli coerenti con le nostre conoscenze attuali',
            'Quelli che richiedono innovazioni radicali',
            'Quelli per cui vale la pena lavorare e che vorremmo costruire',
          ],
          explanation: 'I futuri preferibili sono quelli che desideriamo costruire attivamente, distinti dai probabili (dove stiamo andando), plausibili (coerenti con ciò che sappiamo) e possibili (richiedono cambiamenti radicali).',
        },
        en: {
          question: 'According to Voros\'s cone, "preferable futures" are:',
          options: [
            'Those we are heading towards if nothing changes',
            'Those consistent with our current knowledge',
            'Those requiring radical innovations',
            'Those worth working for and that we would want to build',
          ],
          explanation: 'Preferable futures are those we actively want to build, distinct from probable (where we\'re heading), plausible (consistent with knowledge) and possible (requiring radical change).',
        },
      },
      correctAnswer: 3,
    },
  ],
};

export const module01: CourseModule = {
  slug: 'pensare-il-futuro',
  number: '01',
  color: 'blue',
  iconName: 'Compass',
  content: {
    it: {
      title: 'Pensare il futuro',
      description: 'Perché immaginare il futuro è un atto necessario, come farlo in modo strutturato e perché gli scenari sono più potenti delle previsioni.',
    },
    en: {
      title: 'Thinking the future',
      description: 'Why imagining the future is a necessary act, how to do it systematically, and why scenarios are more powerful than predictions.',
    },
  },
  quiz: quiz01,
  lessons: [
    {
      slug: 'perche-immaginare-il-futuro',
      readingTime: 7,
      content: {
        it: {
          title: 'Perché immaginare il futuro',
          description: 'L\'immaginazione come strumento politico e la differenza tra sperare e progettare.',
          body: [
            'Tutti pensiamo al futuro. Lo facciamo ogni giorno, quando pianifichiamo la settimana, quando ci preoccupiamo per il clima, quando ci chiediamo che lavoro faranno i nostri figli. Ma c\'è una differenza enorme tra preoccuparsi del futuro e immaginarlo attivamente. La prima è una reazione passiva; la seconda è un atto di progettazione.',
            'I Futures Studies — o studi sul futuro — sono una disciplina accademica nata negli anni \'60 che ha sviluppato metodi rigorosi per esplorare ciò che potrebbe accadere. Non si tratta di prevedere: nessuno può farlo con certezza. Si tratta di mappare lo spazio delle possibilità, identificare le forze che stanno plasmando il domani e prepararsi a navigarle con consapevolezza.',
            'Ma perché è importante per tutti, non solo per gli esperti? Perché chi controlla la narrativa del futuro controlla le decisioni del presente. Quando un\'azienda tech dice "l\'intelligenza artificiale sostituirà il 40% dei lavori", sta plasmando politiche, investimenti e paure. Quando un governo dice "non possiamo fare nulla contro il cambiamento climatico", sta giustificando l\'inazione. Immaginare futuri alternativi è un atto di resistenza contro queste narrative imposte.',
            'Lo storico Yuval Noah Harari ha scritto che "chi controlla le storie controlla il futuro". Noi aggiungiamo: chi non immagina il futuro, lo subisce. Ecco perché Relatronica esiste — per dare a tutti gli strumenti per immaginare, non solo agli esperti e ai potenti.',
            'Immaginare il futuro non richiede un dottorato. Richiede curiosità, pensiero critico e la volontà di mettere in discussione ciò che sembra inevitabile. In questo corso imparerai a farlo in modo strutturato, usando strumenti che sono stati sviluppati e testati da decenni di ricerca.',
          ],
          keyTakeaways: [
            'Immaginare il futuro è diverso da preoccuparsi: è un atto attivo e progettuale',
            'I Futures Studies sono una disciplina con metodi rigorosi, non fantascienza',
            'Chi controlla la narrativa del futuro influenza le decisioni del presente',
            'Immaginare futuri alternativi è accessibile a tutti, non solo agli esperti',
          ],
          reflection: 'Pensa a una narrativa sul futuro che hai accettato come inevitabile (es. "i robot ci ruberanno il lavoro"). Chi l\'ha creata? A chi conviene? Esiste un\'alternativa?',
        },
        en: {
          title: 'Why imagine the future',
          description: 'Imagination as a political tool and the difference between hoping and designing.',
          body: [
            'We all think about the future. We do it every day — when we plan the week, when we worry about the climate, when we wonder what jobs our children will have. But there is an enormous difference between worrying about the future and actively imagining it. The first is a passive reaction; the second is an act of design.',
            'Futures Studies is an academic discipline born in the 1960s that has developed rigorous methods for exploring what might happen. It is not about predicting — no one can do that with certainty. It is about mapping the space of possibilities, identifying the forces shaping tomorrow, and preparing to navigate them with awareness.',
            'But why does this matter for everyone, not just experts? Because whoever controls the narrative of the future controls the decisions of the present. When a tech company says "AI will replace 40% of jobs", it shapes policies, investments and fears. When a government says "we can\'t do anything about climate change", it justifies inaction. Imagining alternative futures is an act of resistance against these imposed narratives.',
            'Historian Yuval Noah Harari wrote that "whoever controls the stories controls the future". We add: whoever does not imagine the future is subject to it. This is why Relatronica exists — to give everyone the tools to imagine, not just experts and the powerful.',
            'Imagining the future does not require a PhD. It requires curiosity, critical thinking, and the willingness to question what seems inevitable. In this course, you will learn to do it in a structured way, using tools that have been developed and tested through decades of research.',
          ],
          keyTakeaways: [
            'Imagining the future is different from worrying: it is an active, deliberate act',
            'Futures Studies is a discipline with rigorous methods, not science fiction',
            'Whoever controls the narrative of the future influences present-day decisions',
            'Imagining alternative futures is accessible to everyone, not just experts',
          ],
          reflection: 'Think of a narrative about the future you have accepted as inevitable (e.g. "robots will steal our jobs"). Who created it? Who benefits from it? Is there an alternative?',
        },
      },
      resources: [
        { title: 'Yuval Noah Harari — 21 Lessons for the 21st Century', url: 'https://www.ynharari.com/book/21-lessons-book/', type: 'book' },
        { title: 'Introduction to Futures Thinking — IFTF', url: 'https://www.iftf.org/what-we-do/', type: 'article' },
        { title: 'The Future is Not What It Used to Be — UNDP', url: 'https://www.undp.org/foresight', type: 'article' },
      ],
    },
    {
      slug: 'scenari-vs-previsioni',
      readingTime: 8,
      content: {
        it: {
          title: 'Scenari vs previsioni',
          description: 'Perché nessuno ha previsto il COVID ma molti avevano scenari per una pandemia — e cosa significa per noi.',
          body: [
            'Nel gennaio 2020, quasi nessun analista prevedeva che una pandemia globale avrebbe fermato il mondo per due anni. Eppure, decine di organizzazioni — dall\'OMS alla Gates Foundation — avevano sviluppato scenari dettagliati su cosa sarebbe successo in caso di pandemia. La differenza è cruciale: una previsione dice "questo accadrà"; uno scenario dice "se questo accade, ecco cosa potrebbe seguire".',
            'Le previsioni sono seduttive perché promettono certezza. Ma il futuro è un sistema complesso, non-lineare e pieno di sorprese. I modelli predittivi funzionano bene per fenomeni ripetitivi (il meteo a 3 giorni, la traiettoria di un satellite), ma falliscono miseramente quando si tratta di sistemi sociali, tecnologici e ambientali dove milioni di variabili interagiscono in modo imprevedibile.',
            'Gli scenari, al contrario, non pretendono di prevedere. Sono narrazioni strutturate di futuri plausibili, costruite per esplorare le conseguenze di diverse combinazioni di fattori. Il metodo classico è la matrice 2x2: si identificano due incertezze critiche (es. "regolamentazione dell\'IA: forte o debole?" e "cooperazione internazionale: alta o bassa?") e si esplorano i quattro scenari risultanti.',
            'Peter Schwartz, uno dei padri della scenario planning, lavorava alla Shell negli anni \'70 quando sviluppò scenari sulla crisi petrolifera. Quando la crisi arrivò, la Shell era l\'unica compagnia preparata — non perché avesse previsto l\'evento esatto, ma perché aveva immaginato un mondo in cui quell\'evento era possibile e aveva pianificato di conseguenza.',
            'Il valore degli scenari non è nell\'accuratezza della previsione, ma nella qualità della preparazione che generano. Uno scenario ben costruito cambia il modo in cui un\'organizzazione, una comunità o un individuo pensa e decide. È uno strumento di apprendimento, non di profezia.',
            'NextHuman, il nostro strumento, funziona esattamente su questo principio: non ti dice cosa accadrà, ma ti mostra cosa potrebbe accadere e ti invita a esplorare le connessioni tra eventi possibili.',
          ],
          keyTakeaways: [
            'Le previsioni promettono certezza ma falliscono nei sistemi complessi',
            'Gli scenari non predicono: esplorano le conseguenze di diverse possibilità',
            'La matrice 2x2 è il metodo classico per costruire scenari',
            'Il valore degli scenari sta nella preparazione che generano, non nell\'accuratezza',
          ],
          reflection: 'Scegli un tema che ti interessa (clima, AI, lavoro). Identifica due incertezze critiche e prova a immaginare i quattro scenari possibili. Quale ti sembra più probabile? Quale più desiderabile?',
        },
        en: {
          title: 'Scenarios vs predictions',
          description: 'Why nobody predicted COVID but many had pandemic scenarios — and what it means for us.',
          body: [
            'In January 2020, almost no analyst predicted that a global pandemic would halt the world for two years. Yet dozens of organisations — from the WHO to the Gates Foundation — had developed detailed scenarios about what would happen in case of a pandemic. The difference is crucial: a prediction says "this will happen"; a scenario says "if this happens, here is what might follow".',
            'Predictions are seductive because they promise certainty. But the future is a complex, non-linear system full of surprises. Predictive models work well for repetitive phenomena (3-day weather forecasts, satellite trajectories), but fail miserably when it comes to social, technological and environmental systems where millions of variables interact unpredictably.',
            'Scenarios, by contrast, do not claim to predict. They are structured narratives of plausible futures, built to explore the consequences of different combinations of factors. The classic method is the 2x2 matrix: you identify two critical uncertainties (e.g. "AI regulation: strong or weak?" and "international cooperation: high or low?") and explore the four resulting scenarios.',
            'Peter Schwartz, one of the fathers of scenario planning, worked at Shell in the 1970s when he developed scenarios about the oil crisis. When the crisis came, Shell was the only company prepared — not because it had predicted the exact event, but because it had imagined a world where that event was possible and had planned accordingly.',
            'The value of scenarios lies not in the accuracy of prediction, but in the quality of preparation they generate. A well-constructed scenario changes how an organisation, a community or an individual thinks and decides. It is a learning tool, not a prophecy.',
            'NextHuman, our tool, works on exactly this principle: it doesn\'t tell you what will happen, but shows you what might happen and invites you to explore the connections between possible events.',
          ],
          keyTakeaways: [
            'Predictions promise certainty but fail in complex systems',
            'Scenarios don\'t predict: they explore the consequences of different possibilities',
            'The 2x2 matrix is the classic method for building scenarios',
            'The value of scenarios lies in the preparation they generate, not their accuracy',
          ],
          reflection: 'Choose a topic that interests you (climate, AI, work). Identify two critical uncertainties and try to imagine four possible scenarios. Which seems most probable? Which most desirable?',
        },
      },
      resources: [
        { title: 'Peter Schwartz — The Art of the Long View', url: 'https://www.penguinrandomhouse.com/books/172377/the-art-of-the-long-view-by-peter-schwartz/', type: 'book' },
        { title: 'Shell Scenarios — Lessons from the Past', url: 'https://www.shell.com/energy-and-innovation/the-energy-future/scenarios.html', type: 'article' },
        { title: 'Scenario Planning Toolkit — Nesta', url: 'https://www.nesta.org.uk/toolkit/scenario-planning/', type: 'tool' },
      ],
    },
    {
      slug: 'il-futuro-come-spazio-di-progetto',
      readingTime: 7,
      content: {
        it: {
          title: 'Il futuro come spazio di progetto',
          description: 'Dal cono dei futuri possibili all\'agency collettiva: il futuro come territorio da esplorare e progettare.',
          body: [
            'Nel 2003, il ricercatore australiano Joseph Voros pubblicò un diagramma che avrebbe cambiato il modo in cui pensiamo al futuro: il "cono dei futuri". L\'idea è semplice ma potente: partendo dal presente, il futuro si apre come un cono che si allarga nel tempo. Al centro ci sono i futuri probabili (quelli verso cui sembriamo diretti). Intorno, i futuri plausibili (quelli coerenti con le nostre conoscenze). Ancora più fuori, i futuri possibili (quelli che richiedono innovazioni o cambiamenti radicali). E alla base di tutto, i futuri preferibili — quelli che vorremmo costruire.',
            'Questa distinzione è fondamentale perché rivela un fatto spesso ignorato: il futuro non è uno solo. Non c\'è un destino inevitabile verso cui stiamo marciando. Ci sono molteplici futuri possibili, e le nostre scelte collettive determinano verso quale ci muoviamo. Il cono di Voros trasforma il futuro da destino a territorio di esplorazione.',
            'Ma chi ha il diritto di esplorare questo territorio? Storicamente, il pensiero sul futuro è stato dominato da élite: think tank militari durante la Guerra Fredda, corporation nella pianificazione strategica, governi nella policy. Il cittadino comune era — e spesso è ancora — escluso da queste conversazioni.',
            'La democratizzazione del pensiero sul futuro è uno degli obiettivi centrali di Relatronica. Crediamo che ogni persona, ogni comunità, abbia il diritto e la capacità di immaginare il proprio futuro. Non servono modelli matematici complessi: servono strumenti accessibili, informazioni aperte e spazi di conversazione.',
            'Il concetto di "agency" — la capacità di agire e influenzare il corso degli eventi — è al cuore di questa visione. Quando una comunità esplora scenari futuri insieme, non sta solo facendo un esercizio intellettuale: sta costruendo la consapevolezza collettiva necessaria per agire. Sta passando da "il futuro ci accade" a "noi costruiamo il futuro".',
          ],
          keyTakeaways: [
            'Il cono di Voros mostra che il futuro non è uno: ci sono futuri probabili, plausibili, possibili e preferibili',
            'Le nostre scelte collettive determinano verso quale futuro ci muoviamo',
            'Il pensiero sul futuro è stato storicamente dominato da élite — va democratizzato',
            'L\'agency collettiva nasce dalla consapevolezza condivisa degli scenari possibili',
          ],
          reflection: 'Pensa alla tua comunità (il tuo quartiere, la tua città, il tuo settore lavorativo). Quale futuro viene dato per scontato? Esiste un futuro preferibile che nessuno sta immaginando?',
        },
        en: {
          title: 'The future as design space',
          description: 'From the cone of possible futures to collective agency: the future as territory to explore and design.',
          body: [
            'In 2003, Australian researcher Joseph Voros published a diagram that would change how we think about the future: the "futures cone". The idea is simple but powerful: starting from the present, the future opens like a cone widening over time. At the centre are probable futures (those we seem headed towards). Around them, plausible futures (those consistent with our knowledge). Further out, possible futures (those requiring innovations or radical changes). And underlying everything, preferable futures — the ones we would want to build.',
            'This distinction is fundamental because it reveals an often-ignored fact: the future is not singular. There is no inevitable destiny we are marching towards. There are multiple possible futures, and our collective choices determine which one we move towards. Voros\'s cone transforms the future from destiny into territory for exploration.',
            'But who has the right to explore this territory? Historically, thinking about the future has been dominated by elites: military think tanks during the Cold War, corporations in strategic planning, governments in policy. The ordinary citizen was — and often still is — excluded from these conversations.',
            'Democratising futures thinking is one of Relatronica\'s central goals. We believe that every person, every community, has the right and the ability to imagine their own future. Complex mathematical models are not needed: what\'s needed are accessible tools, open information and spaces for conversation.',
            'The concept of "agency" — the ability to act and influence the course of events — is at the heart of this vision. When a community explores future scenarios together, it is not just doing an intellectual exercise: it is building the collective awareness needed to act. It is moving from "the future happens to us" to "we build the future".',
          ],
          keyTakeaways: [
            'Voros\'s cone shows the future is not singular: there are probable, plausible, possible and preferable futures',
            'Our collective choices determine which future we move towards',
            'Futures thinking has historically been dominated by elites — it needs to be democratised',
            'Collective agency arises from shared awareness of possible scenarios',
          ],
          reflection: 'Think about your community (your neighbourhood, your city, your industry). What future is taken for granted? Is there a preferable future that nobody is imagining?',
        },
      },
      resources: [
        { title: 'Joseph Voros — A Primer on Futures Studies', url: 'https://thevoroscope.com/2017/02/24/the-futures-cone-use-and-history/', type: 'article' },
        { title: 'Stuart Candy — Experiential Futures', url: 'https://futuryst.blogspot.com/', type: 'article' },
        { title: 'UNESCO — Futures Literacy', url: 'https://www.unesco.org/en/futures-literacy', type: 'article' },
      ],
    },
  ],
};
