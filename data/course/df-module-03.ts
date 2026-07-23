import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz03: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Prototipi diegetici',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 03: artefatti diegetici, tipologie di prototipi e tecniche di materializzazione dal concept all\'oggetto.',
    },
    en: {
      title: 'Quiz — Diegetic prototypes',
      description: 'Test your understanding of Module 03 key concepts: diegetic artefacts, prototype types and materialisation techniques from concept to object.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q03-01',
      content: {
        it: {
          question: 'Da quale disciplina proviene il termine "diegetico"?',
          options: [
            'Dalla sociologia delle organizzazioni',
            'Dal cinema e dalla narratologia',
            'Dalla psicologia cognitiva',
            'Dall\'ingegneria industriale',
          ],
          explanation: 'Il termine "diegetico" viene dal cinema: indica tutto ciò che appartiene al mondo narrativo della storia, in contrapposizione a ciò che è "extra-diegetico" (musica fuori campo, titoli di coda).',
        },
        en: {
          question: 'Which discipline does the term "diegetic" come from?',
          options: [
            'Organisational sociology',
            'Cinema and narratology',
            'Cognitive psychology',
            'Industrial engineering',
          ],
          explanation: 'The term "diegetic" comes from cinema: it indicates everything that belongs to the narrative world of the story, as opposed to what is "extra-diegetic" (off-screen music, end credits).',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q03-02',
      content: {
        it: {
          question: 'Qual è la priorità principale di un prototipo diegetico?',
          options: [
            'Funzionare perfettamente come un prodotto commerciale',
            'Essere brevettabile e pronto per la produzione di massa',
            'Essere credibile abbastanza da provocare conversazione sul futuro che rappresenta',
            'Dimostrare la fattibilità tecnica con dati sperimentali',
          ],
          explanation: 'Un prototipo diegetico non deve funzionare: deve sembrare provenire da un mondo futuro plausibile. La credibilità narrativa e culturale conta più della funzionalità tecnica.',
        },
        en: {
          question: 'What is the main priority of a diegetic prototype?',
          options: [
            'To work perfectly like a commercial product',
            'To be patentable and ready for mass production',
            'To be credible enough to provoke conversation about the future it represents',
            'To demonstrate technical feasibility with experimental data',
          ],
          explanation: 'A diegetic prototype does not need to work: it must seem to come from a plausible future world. Narrative and cultural credibility matter more than technical functionality.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'df-q03-03',
      content: {
        it: {
          question: 'Quale di questi è un esempio di prototipo diegetico "documentale"?',
          options: [
            'Un oggetto fisico stampato in 3D',
            'Un\'interfaccia utente di un\'app del futuro',
            'Una carta d\'identità digitale di una città immaginaria del 2040',
            'Un servizio di consegna realmente operativo in beta',
          ],
          explanation: 'I documenti diegetici — carte d\'identità, bollette, certificati, contratti — sono tra i prototipi più efficaci perché usano formati familiari per rendere credibile un mondo futuro.',
        },
        en: {
          question: 'Which of these is an example of a "documentary" diegetic prototype?',
          options: [
            'A physical object 3D printed',
            'A user interface for a future app',
            'A digital ID card from an imaginary city in 2040',
            'A delivery service actually operating in beta',
          ],
          explanation: 'Diegetic documents — ID cards, bills, certificates, contracts — are among the most effective prototypes because they use familiar formats to make a future world credible.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'df-q03-04',
      content: {
        it: {
          question: 'Perché un prototipo low-fi in cartone può essere più efficace di uno hi-fi?',
          options: [
            'Perché costa sempre meno e quindi è più etico',
            'Perché invita alla co-creazione e mantiene aperta l\'interpretazione, evitando l\'illusione di completezza',
            'Perché i materiali digitali non sono mai credibili',
            'Perché le istituzioni accettano solo prototipi artigianali',
          ],
          explanation: 'Un prototipo low-fi comunica chiaramente che è una proposta, non un prodotto finito. Invita le persone a completarlo con la propria immaginazione e a discutere alternative, invece di accettarlo passivamente.',
        },
        en: {
          question: 'Why can a low-fi cardboard prototype be more effective than a hi-fi one?',
          options: [
            'Because it always costs less and is therefore more ethical',
            'Because it invites co-creation and keeps interpretation open, avoiding the illusion of completeness',
            'Because digital materials are never credible',
            'Because institutions only accept craft prototypes',
          ],
          explanation: 'A low-fi prototype clearly communicates that it is a proposal, not a finished product. It invites people to complete it with their own imagination and discuss alternatives, rather than passively accepting it.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q03-05',
      content: {
        it: {
          question: 'Cosa significa "materializzare" un concept nel design fiction?',
          options: [
            'Scrivere un report accademico sul futuro',
            'Trasformare un\'idea speculativa in un artefatto tangibile o visibile che le persone possono incontrare',
            'Calcolare la fattibilità economica di un prodotto',
            'Produrre un video di marketing per un\'innovazione reale',
          ],
          explanation: 'Materializzare significa dare corpo a un\'idea: passare dall\'abstract al concreto, creando oggetti, interfacce o documenti che rendono il futuro esperibile e discutibile.',
        },
        en: {
          question: 'What does "materialising" a concept mean in design fiction?',
          options: [
            'Writing an academic report about the future',
            'Transforming a speculative idea into a tangible or visible artefact that people can encounter',
            'Calculating the economic feasibility of a product',
            'Producing a marketing video for a real innovation',
          ],
          explanation: 'Materialising means giving body to an idea: moving from the abstract to the concrete, creating objects, interfaces or documents that make the future experienceable and debatable.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule03: CourseModule = {
  slug: 'prototipi-diegetici',
  number: '03',
  color: 'purple',
  iconName: 'Package',
  content: {
    it: {
      title: 'Prototipi diegetici',
      description: 'Progettare artefatti che sembrano provenire da un mondo futuro: credibilità, tipologie e tecniche di materializzazione.',
    },
    en: {
      title: 'Diegetic prototypes',
      description: 'Designing artefacts that seem to come from a future world: credibility, types and materialisation techniques.',
    },
  },
  quiz: quiz03,
  lessons: [
    {
      slug: 'cos-e-un-artefatto-diegetico',
      readingTime: 8,
      content: {
        it: {
          title: 'Cos\'è un artefatto diegetico',
          description: 'Definizione, origine cinematografica e la distinzione fondamentale tra credibilità e funzionalità.',
          body: [
            'Nel linguaggio del design speculativo, un artefatto diegetico è un oggetto — fisico o digitale — progettato come se appartenesse a un mondo futuro. Non è un concept sketch appeso a una parete: è qualcosa che potresti trovare in un negozio, in una borsa, su un tavolo. La sua forza sta nel far credere, anche solo per un istante, che quel futuro esista già.',
            'Il termine "diegetico" viene dal cinema. In una scena, tutto ciò che i personaggi possono vedere, toccare e usare è diegetico: la spada, il telefono, il manifesto sul muro. La colonna sonora, invece, è extra-diegetica — la sentiamo noi spettatori, non i personaggi. Julian Bleecker ha importato questo concetto nel design per descrivere oggetti che "vivono" dentro una storia sul futuro, non nel nostro presente.',
            'La distinzione più importante da interiorizzare è tra credibilità e funzionalità. Un prototipo diegetico non deve funzionare. Deve sembrare plausibile nel contesto culturale, sociale e materiale del mondo che stai immaginando. Un dispositivo per misurare l\'umore collettivo può essere un cubo di legno con luci LED e un manuale stampato: ciò che conta è che racconti qualcosa di vero sul futuro che vuoi esplorare.',
            'La credibilità diegetica si costruisce nei dettagli. Materiali, tipografia, linguaggio, packaging, prezzo indicato, istruzioni legali: ogni elemento dice "questo esiste in quel mondo". Quando Superflux progetta oggetti per scenari climatici, non crea gadget futuristici generici — progetta cose che sembrerebbero normali per chi ci vive, anche se per noi sono inquietanti.',
            'Un errore frequente è confondere il prototipo diegetico con il prototipo di prodotto tradizionale. Nel design industriale, un prototipo serve a testare funzionalità, ergonomia, costi di produzione. Nel design fiction, serve a testare immaginazione collettiva: cosa succede quando le persone incontrano questo oggetto? Che domande fanno? Che emozioni provano? Che decisioni prenderebbero?',
            'Noi di Relatronica usiamo i prototipi diegetici come ponti tra il pensiero astratto sul futuro e l\'azione concreta nel presente. Un oggetto credibile rende visibile ciò che spesso resta invisibile: assunzioni, trade-off, ingiustizie, possibilità. Non serve la perfezione tecnica — serve l\'onestà narrativa e il coraggio di mostrare un futuro che qualcuno, da qualche parte, potrebbe voler evitare o costruire.',
          ],
          keyTakeaways: [
            'Un artefatto diegetico appartiene al mondo narrativo di un futuro immaginario, non al nostro presente',
            'Il termine viene dal cinema: diegetico = ciò che esiste dentro la storia',
            'Credibilità narrativa conta più della funzionalità tecnica',
            'I dettagli (materiali, linguaggio, packaging) costruiscono la plausibilità del mondo futuro',
          ],
          reflection: 'Pensa a un oggetto quotidiano che usi ogni giorno. Come apparirebbe se fosse stato progettato in un mondo con valori diversi — più attento all\'ambiente, più sorvegliante, più comunitario? Descrivilo come se lo avessi davanti.',
        },
        en: {
          title: 'What is a diegetic artefact',
          description: 'Definition, cinematic origin and the fundamental distinction between credibility and functionality.',
          body: [
            'In the language of speculative design, a diegetic artefact is an object — physical or digital — designed as if it belonged to a future world. It is not a concept sketch pinned to a wall: it is something you might find in a shop, in a bag, on a table. Its power lies in making you believe, even for a moment, that this future already exists.',
            'The term "diegetic" comes from cinema. In a scene, everything characters can see, touch and use is diegetic: the sword, the phone, the poster on the wall. The soundtrack, by contrast, is extra-diegetic — we viewers hear it, the characters do not. Julian Bleecker imported this concept into design to describe objects that "live" inside a story about the future, not in our present.',
            'The most important distinction to internalise is between credibility and functionality. A diegetic prototype does not need to work. It must seem plausible within the cultural, social and material context of the world you are imagining. A device for measuring collective mood can be a wooden cube with LED lights and a printed manual: what matters is that it tells something true about the future you want to explore.',
            'Diegetic credibility is built in the details. Materials, typography, language, packaging, indicated price, legal instructions: every element says "this exists in that world". When Superflux designs objects for climate scenarios, they do not create generic futuristic gadgets — they design things that would seem normal to those living in them, even if they unsettle us.',
            'A common mistake is confusing the diegetic prototype with the traditional product prototype. In industrial design, a prototype serves to test functionality, ergonomics, production costs. In design fiction, it serves to test collective imagination: what happens when people encounter this object? What questions do they ask? What emotions do they feel? What decisions would they make?',
            'At Relatronica, we use diegetic prototypes as bridges between abstract thinking about the future and concrete action in the present. A credible object makes visible what often remains invisible: assumptions, trade-offs, injustices, possibilities. Technical perfection is not required — narrative honesty and the courage to show a future that someone, somewhere, might want to avoid or build are.',
          ],
          keyTakeaways: [
            'A diegetic artefact belongs to the narrative world of an imagined future, not our present',
            'The term comes from cinema: diegetic = what exists inside the story',
            'Narrative credibility matters more than technical functionality',
            'Details (materials, language, packaging) build the plausibility of the future world',
          ],
          reflection: 'Think of an everyday object you use daily. How would it look if it had been designed in a world with different values — more environmentally conscious, more surveillant, more communal? Describe it as if it were in front of you.',
        },
      },
      resources: [
        { title: 'Julian Bleecker — Design Fiction: A Short Essay on Design, Science, Fact and Fiction', url: 'https://dfrlab.org/', type: 'article' },
        { title: 'Near Future Laboratory', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
        { title: 'Dunne & Raby — Speculative Everything', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
      ],
    },
    {
      slug: 'tipologie-di-prototipi',
      readingTime: 8,
      content: {
        it: {
          title: 'Tipologie di prototipi',
          description: 'Oggetti fisici, interfacce, documenti e servizi: quattro famiglie di artefatti diegetici e quando usarle.',
          body: [
            'I prototipi diegetici non sono solo oggetti fisici — anche se spesso sono i più immediati da comprendere. In un progetto di design fiction efficace, conviene pensare a una famiglia di artefatti che insieme costruiscono un mondo credibile. Quattro tipologie coprono la maggior parte dei casi: oggetti, interfacce, documenti e servizi.',
            'Gli oggetti fisici sono la forma più iconica: un dispositivo indossabile, un contenitore per cibo, uno strumento medico, un giocattolo. Hanno il vantaggio della tangibilità — puoi metterli nelle mani delle persone, fotografarli, esporli. Il rischio è cadere nel "futurismo da fiera tecnologica": forme lisce, luci blu, materiali che gridano "innovazione" invece di raccontare una vita quotidiana.',
            'Le interfacce diegetiche — schermate di app, dashboard, chatbot, pannelli di controllo — sono potentissime perché molti futuri si manifestano prima come software che come oggetti. Un\'interfaccia per un algoritmo di allocazione delle cure mediche, per un sistema di credito sociale o per una piattaforma di democrazia liquida rende visibili logiche che altrimenti resterebbero astratte. Non serve programmare: mockup su Figma, screenshot stampati o proiezioni bastano.',
            'I documenti sono forse la tipologia sottovalutata e più efficace. Carte d\'identità, bollette, certificati di vaccinazione, contratti di lavoro, sentenze tribunali, etichette nutrizionali: formati che conosciamo bene, applicati a un mondo diverso. Il TBD Catalog del Near Future Laboratory usa proprio questo principio — prodotti presentati come in un catalogo commerciale, con codici prodotto, prezzi e descrizioni banali che rendono inquietante la normalità del futuro.',
            'I servizi diegetici completano il quadro: un desk di assistenza, un call center, una procedura burocratica, un tour guidato. Non produci un oggetto — produci un\'esperienza che fa vivere le regole del mondo futuro. Stuart Candy parla di "experiential futures": quando attraversi un servizio immaginario, capisci meglio chi beneficia e chi paga il costo di uno scenario.',
            'La scelta della tipologia dipende dal tuo obiettivo e dal tuo pubblico. Per un workshop partecipativo, documenti e mockup low-fi funzionano meglio. Per un\'esposizione museale, oggetti fisici e installazioni immersive hanno più impatto. Per un briefing istituzionale, interfacce e servizi rendono concreti i trade-off politici. Spesso la combinazione di più tipologie — un oggetto con il suo manuale e la sua app — è ciò che rende il mondo davvero credibile.',
          ],
          keyTakeaways: [
            'Quattro famiglie principali: oggetti fisici, interfacce, documenti, servizi',
            'Gli oggetti tangibili colpiscono, ma attenzione al futurismo da fiera tecnologica',
            'Documenti e cataloghi usano formati familiari per rendere inquietante la normalità del futuro',
            'Combinare più tipologie di artefatto costruisce un mondo diegetico più convincente',
          ],
          reflection: 'Scegli uno scenario futuro che ti interessa (clima, AI, lavoro, salute). Quale combinazione di oggetto, interfaccia, documento e servizio renderebbe quel mondo più discutibile per il tuo pubblico?',
        },
        en: {
          title: 'Types of prototypes',
          description: 'Physical objects, interfaces, documents and services: four families of diegetic artefacts and when to use them.',
          body: [
            'Diegetic prototypes are not only physical objects — although those are often the easiest to grasp. In an effective design fiction project, it helps to think of a family of artefacts that together build a credible world. Four types cover most cases: objects, interfaces, documents and services.',
            'Physical objects are the most iconic form: a wearable device, a food container, a medical instrument, a toy. They have the advantage of tangibility — you can put them in people\'s hands, photograph them, exhibit them. The risk is falling into "tech fair futurism": sleek forms, blue lights, materials that shout "innovation" instead of telling an everyday life story.',
            'Diegetic interfaces — app screens, dashboards, chatbots, control panels — are extremely powerful because many futures manifest first as software rather than objects. An interface for a healthcare allocation algorithm, a social credit system or a liquid democracy platform makes visible logics that would otherwise remain abstract. You do not need to code: Figma mockups, printed screenshots or projections are enough.',
            'Documents are perhaps the most underrated and effective type. ID cards, bills, vaccination certificates, employment contracts, court rulings, nutrition labels: formats we know well, applied to a different world. The Near Future Laboratory\'s TBD Catalog uses exactly this principle — products presented like in a commercial catalogue, with product codes, prices and mundane descriptions that make the normality of the future unsettling.',
            'Diegetic services complete the picture: a help desk, a call centre, a bureaucratic procedure, a guided tour. You do not produce an object — you produce an experience that lets people live the rules of the future world. Stuart Candy speaks of "experiential futures": when you go through an imaginary service, you better understand who benefits and who pays the cost of a scenario.',
            'The choice of type depends on your goal and your audience. For a participatory workshop, documents and low-fi mockups work best. For a museum exhibition, physical objects and immersive installations have more impact. For an institutional briefing, interfaces and services make political trade-offs concrete. Often combining multiple types — an object with its manual and its app — is what makes the world truly credible.',
          ],
          keyTakeaways: [
            'Four main families: physical objects, interfaces, documents, services',
            'Tangible objects impress, but beware of tech fair futurism',
            'Documents and catalogues use familiar formats to make the normality of the future unsettling',
            'Combining multiple artefact types builds a more convincing diegetic world',
          ],
          reflection: 'Choose a future scenario that interests you (climate, AI, work, health). What combination of object, interface, document and service would make that world more debatable for your audience?',
        },
      },
      resources: [
        { title: 'TBD Catalog — Near Future Laboratory', url: 'https://nearfuturelaboratory.com/mybb/2013/11/27/tbd-catalog-concept-design-fiction/', type: 'article' },
        { title: 'Superflux — Design Studio', url: 'https://superflux.in/', type: 'tool' },
        { title: 'Stuart Candy — The Futures Bazaar', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
      ],
    },
    {
      slug: 'dal-concept-all-oggetto',
      readingTime: 9,
      content: {
        it: {
          title: 'Dal concept all\'oggetto',
          description: 'Tecniche di materializzazione: dal low-fi al hi-fi, dal cartone alla stampa 3D.',
          body: [
            'Avere un\'idea speculativa forte è solo metà del lavoro. L\'altra metà è materializzarla — trasformarla da pensiero in qualcosa che altri possono vedere, toccare, discutere. La materializzazione non è un passaggio tecnico neutro: ogni scelta di forma, materiale e fedeltà comunica qualcosa sul futuro e sul tuo rapporto con esso.',
            'Il percorso tipico va dal low-fi al hi-fi, ma non è obbligatorio completarlo. Un prototipo low-fi — cartone, carta, gomma, collage — costa poco, si produce in ore e invita alla partecipazione. In un workshop, chiedere ai partecipanti di completare un oggetto incompleto produce conversazioni più ricche che presentare un modello perfetto. Il low-fi dice: "questo è una proposta aperta, aiutaci a immaginare".',
            'Il mid-fi aggiunge credibilità senza esigere budget da produzione industriale. Stampare etichette professionali, usare contenitori reali, applicare decalcomanie, costruire scatole con materiali quotidiani (barattoli, scatole di scarpe, custodie per occhiali). Molti progetti di design fiction memorabili stanno in questa zona: abbastanza curati da sembrare reali, abbastanza artigianali da restare aperti.',
            'Il hi-fi — stampa 3D, lavorazione CNC, elettronica funzionante, packaging prodotto — ha un impatto visivo enorme ma comporta rischi. Un oggetto troppo rifinito può essere accettato passivamente ("che bello!" invece di "lo vogliamo?"). Inoltre, investire troppo presto nel hi-fi blinda l\'idea prima di averla testata con le persone. La regola pratica: hi-fi solo dopo che il concept ha generato conversazione utile in versione low-fi.',
            'La stampa 3D è uno strumento accessibile e potente, ma va usata con intenzione narrativa. Non serve replicare la perfezione industriale — serve comunicare forma, scala, ergonomia. Una stampa visibile, con strati e imperfezioni, può essere più onesta di una finitura liscia che finge un prodotto già sul mercato. Combina stampa 3D per parti strutturali con elementi trovati (cavi, LED, tessuti) per costruire oggetti ibridi convincenti.',
            'Indipendentemente dalla tecnica, ogni prototipo diegetico ha bisogno di un contesto di presentazione. Un oggetto da solo sul tavolo è ambiguo; lo stesso oggetto con un manuale, una ricevuta d\'acquisto e una foto di contesto d\'uso diventa una storia. Pensa alla materializzazione come a un sistema: l\'oggetto centrale, i media di supporto, lo spazio espositivo, la facilitazione che guida la conversazione. È così che un concept diventa uno strumento civico per immaginare insieme.',
          ],
          keyTakeaways: [
            'Materializzare significa rendere esperibile un\'idea speculativa, non solo esteticamente bella',
            'Low-fi invita alla co-creazione; hi-fi impressiona ma rischia di chiudere il dibattito',
            'Il mid-fi (materiali quotidiani + finiture curate) è spesso il punto di equilibrio ideale',
            'Stampa 3D e tecniche digitali servono la narrativa, non la perfezione industriale',
          ],
          reflection: 'Hai un\'idea speculativa in mente? Progetta tre versioni dello stesso oggetto: una in cartone (30 minuti), una con materiali quotidiani curati (2 ore), una con stampa 3D o digitale (se disponibile). Cosa cambia nel messaggio e nella conversazione che genera?',
        },
        en: {
          title: 'From concept to object',
          description: 'Materialisation techniques: from low-fi to hi-fi, from cardboard to 3D printing.',
          body: [
            'Having a strong speculative idea is only half the work. The other half is materialising it — transforming it from thought into something others can see, touch, discuss. Materialisation is not a neutral technical step: every choice of form, material and fidelity communicates something about the future and your relationship with it.',
            'The typical path goes from low-fi to hi-fi, but completing it is not mandatory. A low-fi prototype — cardboard, paper, foam, collage — costs little, can be made in hours and invites participation. In a workshop, asking participants to complete an unfinished object produces richer conversations than presenting a perfect model. Low-fi says: "this is an open proposal, help us imagine".',
            'Mid-fi adds credibility without requiring an industrial production budget. Printing professional labels, using real containers, applying decals, building boxes with everyday materials (jars, shoe boxes, glasses cases). Many memorable design fiction projects sit in this zone: polished enough to seem real, craft enough to remain open.',
            'Hi-fi — 3D printing, CNC machining, working electronics, product packaging — has enormous visual impact but carries risks. An object that is too polished may be passively accepted ("how nice!" instead of "do we want this?"). Also, investing too early in hi-fi locks the idea before testing it with people. The practical rule: hi-fi only after the concept has generated useful conversation in low-fi form.',
            '3D printing is an accessible and powerful tool, but it must be used with narrative intention. You do not need to replicate industrial perfection — you need to communicate form, scale, ergonomics. A visible print, with layers and imperfections, can be more honest than a smooth finish pretending to be a product already on the market. Combine 3D printing for structural parts with found elements (cables, LEDs, fabrics) to build convincing hybrid objects.',
            'Regardless of technique, every diegetic prototype needs a presentation context. An object alone on a table is ambiguous; the same object with a manual, a purchase receipt and a photo of use in context becomes a story. Think of materialisation as a system: the central object, supporting media, exhibition space, facilitation that guides the conversation. This is how a concept becomes a civic tool for imagining together.',
          ],
          keyTakeaways: [
            'Materialising means making a speculative idea experienceable, not just aesthetically pleasing',
            'Low-fi invites co-creation; hi-fi impresses but risks closing the debate',
            'Mid-fi (everyday materials + careful finishing) is often the ideal balance',
            '3D printing and digital techniques serve the narrative, not industrial perfection',
          ],
          reflection: 'Do you have a speculative idea in mind? Design three versions of the same object: one in cardboard (30 minutes), one with curated everyday materials (2 hours), one with 3D printing or digital tools (if available). What changes in the message and the conversation it generates?',
        },
      },
      resources: [
        { title: 'Design Fiction Toolkit — Situation Lab', url: 'https://situationlab.org/project/design-fiction/', type: 'tool' },
        { title: 'Making Things to Make Sense of Things — Paul Coulton', url: 'https://dl.acm.org/doi/10.1145/2757226.2757366', type: 'article' },
        { title: 'Prototyping Futures — Vimeo (Near Future Laboratory)', url: 'https://vimeo.com/nearfuturelaboratory', type: 'video' },
      ],
    },
  ],
};
