import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz04: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Cataloghi e narrative',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 04: cataloghi del futuro, storytelling speculativo e media diegetici.',
    },
    en: {
      title: 'Quiz — Catalogues and narratives',
      description: 'Test your understanding of Module 04 key concepts: future catalogues, speculative storytelling and diegetic media.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q04-01',
      content: {
        it: {
          question: 'Qual è l\'idea centrale del "Design Fiction Product Catalogue" di Julian Bleecker?',
          options: [
            'Vendere prodotti reali attraverso e-commerce speculativo',
            'Presentare oggetti del futuro con il linguaggio banale di un catalogo commerciale, rendendo il futuro familiare e discutibile',
            'Creare un database open source di brevetti futuri',
            'Sostituire i report strategici aziendali con illustrazioni artistiche',
          ],
          explanation: 'Il catalogo del futuro usa il formato familiare del commercio (codici prodotto, prezzi, descrizioni) per rendere tangibile e discutibile un mondo speculativo — come IKEA, ma per oggetti che non esistono ancora.',
        },
        en: {
          question: 'What is the central idea of Julian Bleecker\'s "Design Fiction Product Catalogue"?',
          options: [
            'Selling real products through speculative e-commerce',
            'Presenting future objects in the mundane language of a commercial catalogue, making the future familiar and debatable',
            'Creating an open source database of future patents',
            'Replacing corporate strategy reports with artistic illustrations',
          ],
          explanation: 'The future catalogue uses the familiar format of commerce (product codes, prices, descriptions) to make a speculative world tangible and debatable — like IKEA, but for objects that do not yet exist.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q04-02',
      content: {
        it: {
          question: 'Perché uno storytelling speculativo "costruttivo" evita la paralisi distopica?',
          options: [
            'Perché non mostra mai scenari negativi',
            'Perché presenta futuri possibili aprendo spazi di scelta e azione, invece di lasciare solo angoscia senza via d\'uscita',
            'Perché usa solo toni ottimistici e rassicuranti',
            'Perché si concentra esclusivamente su soluzioni tecnologiche',
          ],
          explanation: 'Una narrativa speculativa costruttiva può mostrare scenari difficili, ma accompagna la provocazione con possibilità: "questo futuro è plausibile — lo vogliamo? Cosa possiamo fare oggi?".',
        },
        en: {
          question: 'Why does "constructive" speculative storytelling avoid dystopian paralysis?',
          options: [
            'Because it never shows negative scenarios',
            'Because it presents possible futures opening spaces for choice and action, instead of leaving only anxiety without an exit',
            'Because it uses only optimistic and reassuring tones',
            'Because it focuses exclusively on technological solutions',
          ],
          explanation: 'Constructive speculative narrative can show difficult scenarios, but accompanies provocation with possibilities: "this future is plausible — do we want it? What can we do today?".',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q04-03',
      content: {
        it: {
          question: 'Cosa rende efficace un "media diegetico" come un manuale o un packaging?',
          options: [
            'La qualità cinematografica della produzione',
            'L\'uso di formati quotidiani e familiari che le persone già sanno leggere, applicati a un mondo futuro',
            'La necessità di essere distribuito su larga scala',
            'L\'assenza di qualsiasi riferimento al presente',
          ],
          explanation: 'I media diegetici funzionano perché sfruttano competenze che abbiamo già: leggere istruzioni, decifrare etichette, navigare interfacce. Il futuro diventa credibile quando parla la nostra lingua visiva quotidiana.',
        },
        en: {
          question: 'What makes a "diegetic medium" like a manual or packaging effective?',
          options: [
            'The cinematic quality of production',
            'The use of everyday, familiar formats that people already know how to read, applied to a future world',
            'The need to be distributed at scale',
            'The absence of any reference to the present',
          ],
          explanation: 'Diegetic media work because they leverage skills we already have: reading instructions, decoding labels, navigating interfaces. The future becomes credible when it speaks our everyday visual language.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q04-04',
      content: {
        it: {
          question: 'Quale elemento distingue un catalogo speculativo da un concept board tradizionale?',
          options: [
            'Il catalogo usa sempre immagini fotorealistiche',
            'Il catalogo presenta oggetti come se fossero già sul mercato, con prezzi, codici e descrizioni prodotto',
            'Il concept board è sempre digitale, il catalogo sempre cartaceo',
            'Non c\'è differenza significativa tra i due formati',
          ],
          explanation: 'Un catalogo speculativo non presenta "idee di design" — presenta "prodotti" con tutta l\'apparato del commercio. Questo shift di registro rende il futuro meno astratto e più esperibile.',
        },
        en: {
          question: 'What element distinguishes a speculative catalogue from a traditional concept board?',
          options: [
            'The catalogue always uses photorealistic images',
            'The catalogue presents objects as if already on the market, with prices, codes and product descriptions',
            'The concept board is always digital, the catalogue always printed',
            'There is no significant difference between the two formats',
          ],
          explanation: 'A speculative catalogue does not present "design ideas" — it presents "products" with all the apparatus of commerce. This register shift makes the future less abstract and more experienceable.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q04-05',
      content: {
        it: {
          question: 'Quale di questi è un esempio di "notizia dal futuro" come media diegetico?',
          options: [
            'Un saggio accademico sul cambiamento climatico',
            'Un articolo di giornale datato 2042 che descrive una crisi idrica come evento ordinario',
            'Un report PowerPoint per investitori',
            'Un trailer cinematografico di fantascienza',
          ],
          explanation: 'Le notizie dal futuro usano il formato giornalistico — titoli, lead, citazioni, foto — per rendere plausibile un evento futuro. Il lettore non "guarda uno scenario": legge il futuro come se fosse già accaduto.',
        },
        en: {
          question: 'Which of these is an example of a "news from the future" as diegetic media?',
          options: [
            'An academic essay on climate change',
            'A newspaper article dated 2042 describing a water crisis as an ordinary event',
            'An investor PowerPoint report',
            'A science fiction movie trailer',
          ],
          explanation: 'News from the future use the journalistic format — headlines, leads, quotes, photos — to make a future event plausible. The reader does not "watch a scenario": they read the future as if it had already happened.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule04: CourseModule = {
  slug: 'cataloghi-e-narrative',
  number: '04',
  color: 'green',
  iconName: 'BookOpen',
  content: {
    it: {
      title: 'Cataloghi e narrative',
      description: 'Cataloghi prodotto, storytelling speculativo e media diegetici: raccontare il futuro con formati che già conosciamo.',
    },
    en: {
      title: 'Catalogues and narratives',
      description: 'Product catalogues, speculative storytelling and diegetic media: telling the future with formats we already know.',
    },
  },
  quiz: quiz04,
  lessons: [
    {
      slug: 'catalogo-del-futuro',
      readingTime: 8,
      content: {
        it: {
          title: 'Il catalogo del futuro',
          description: 'Il metodo Bleecker/Near Future Laboratory e i cataloghi stile IKEA per prodotti che non esistono ancora.',
          body: [
            'Immagina di sfogliare un catalogo IKEA — quello che arriva per posta o si consulta online. Codici prodotto, prezzi, descrizioni essenziali, foto di ambienti domestici. Ora immagina che ogni prodotto in quel catalogo provenga da un futuro plausibile: un frigorifero che compra cibo autonomamente, una sedia adattiva al tuo umore, un kit di sopravvivenza per inondazioni urbane. Questo è il catalogo del futuro.',
            'Julian Bleecker del Near Future Laboratory ha sviluppato il metodo del "Design Fiction Product Catalogue" partendo da un\'intuizione semplice: i cataloghi commerciali sono tra i documenti più familiari del capitalismo contemporaneo. Li sappiamo leggere istintivamente. Sfruttare quel formato per oggetti speculativi crea un effetto potente — il futuro non sembra un\'opera d\'arte distante, sembra qualcosa che potresti ordinare domani.',
            'Il TBD Catalog ("To Be Determined") è l\'esempio più noto: un catalogo di prodotti il cui futuro è ancora "da determinare". Oggetti presentati con la stessa banalità di un tostapane o di un tappeto. La normalità del tono commerciale rende inquietante ciò che viene venduto — perché se un "Home Surveillance Drone for Children" ha un codice prodotto e un prezzo, qualcuno potrebbe davvero volerlo.',
            'Il catalogo stile IKEA funziona perché costruisce un mondo attraverso l\'accumulo. Non un singolo oggetto provocatorio, ma decine di prodotti che insieme dipingono una società: che tipo di famiglia vive così? Che problemi risolvono questi oggetti? Che valori assumono come normali? Ogni pagina aggiunge un tassello al world-building senza bisogno di un manifesto esplicito.',
            'Creare un catalogo speculativo è accessibile a chiunque. Serve un template (layout da catalogo, tipografia commerciale), una lista di 10-20 prodotti coerenti con uno scenario, descrizioni brevi scritte come copywriting reale, prezzi plausibili e codici prodotto inventati. Non servono render 3D fotorealistici: illustrazioni, collage, foto di prototipi low-fi o persino disegni a mano possono funzionare — l\'importante è la coerenza del registro.',
            'I cataloghi del futuro sono strumenti civici potenti. In un workshop con cittadini, amministratori o imprenditori, sfogliare un catalogo genera conversazioni concrete: "compreresti questo?", "chi ne beneficia?", "chi paga il costo ambientale?". Trasformano l\'astratto in decisioni immaginabili — e le decisioni immaginabili sono il primo passo verso l\'azione.',
          ],
          keyTakeaways: [
            'Il catalogo del futuro usa formati commerciali familiari per rendere tangibile uno scenario speculativo',
            'Julian Bleecker e il Near Future Laboratory hanno codificato il metodo con il TBD Catalog',
            'La banalità del tono commerciale rende inquietante la normalità del futuro immaginato',
            'Un catalogo costruisce world-building attraverso l\'accumulo di prodotti coerenti',
          ],
          reflection: 'Progetta mentalmente 5 prodotti per un catalogo del 2040 sul tema che ti interessa di più. Per ciascuno: nome, codice prodotto, prezzo, descrizione in due righe. Cosa rivelano insieme sul mondo che immagini?',
        },
        en: {
          title: 'The future catalogue',
          description: 'The Bleecker/Near Future Laboratory method and IKEA-style catalogues for products that do not yet exist.',
          body: [
            'Imagine browsing an IKEA catalogue — the one that arrives by post or online. Product codes, prices, essential descriptions, photos of domestic settings. Now imagine every product in that catalogue comes from a plausible future: a fridge that buys food autonomously, a chair that adapts to your mood, an urban flood survival kit. This is the future catalogue.',
            'Julian Bleecker of the Near Future Laboratory developed the "Design Fiction Product Catalogue" method from a simple insight: commercial catalogues are among the most familiar documents of contemporary capitalism. We know how to read them instinctively. Using that format for speculative objects creates a powerful effect — the future does not seem like a distant work of art, it seems like something you could order tomorrow.',
            'The TBD Catalog ("To Be Determined") is the best-known example: a catalogue of products whose future is still "to be determined". Objects presented with the same mundanity as a toaster or a rug. The normality of the commercial tone makes what is being sold unsettling — because if a "Home Surveillance Drone for Children" has a product code and a price, someone might really want it.',
            'The IKEA-style catalogue works because it builds a world through accumulation. Not a single provocative object, but dozens of products that together paint a society: what kind of family lives like this? What problems do these objects solve? What values do they assume as normal? Each page adds a piece to world-building without needing an explicit manifesto.',
            'Creating a speculative catalogue is accessible to anyone. You need a template (catalogue layout, commercial typography), a list of 10-20 products coherent with a scenario, brief descriptions written as real copywriting, plausible prices and invented product codes. Photorealistic 3D renders are not required: illustrations, collages, photos of low-fi prototypes or even hand drawings can work — what matters is register consistency.',
            'Future catalogues are powerful civic tools. In a workshop with citizens, administrators or entrepreneurs, browsing a catalogue generates concrete conversations: "would you buy this?", "who benefits?", "who pays the environmental cost?". They transform the abstract into imaginable decisions — and imaginable decisions are the first step towards action.',
          ],
          keyTakeaways: [
            'The future catalogue uses familiar commercial formats to make a speculative scenario tangible',
            'Julian Bleecker and the Near Future Laboratory codified the method with the TBD Catalog',
            'The mundanity of the commercial tone makes the normality of the imagined future unsettling',
            'A catalogue builds world-building through the accumulation of coherent products',
          ],
          reflection: 'Mentally design 5 products for a 2040 catalogue on the theme that interests you most. For each: name, product code, price, two-line description. What do they reveal together about the world you imagine?',
        },
      },
      resources: [
        { title: 'TBD Catalog — Near Future Laboratory', url: 'https://nearfuturelaboratory.com/mybb/2013/11/27/tbd-catalog-concept-design-fiction/', type: 'article' },
        { title: 'Design Fiction Product Catalogue — Julian Bleecker', url: 'https://dfrlab.org/', type: 'article' },
        { title: 'IKEA Catalog Archive', url: 'https://www.ikea.com/global/en/newsroom/catalogue/', type: 'tool' },
      ],
    },
    {
      slug: 'storytelling-speculativo',
      readingTime: 9,
      content: {
        it: {
          title: 'Storytelling speculativo',
          description: 'Archi narrativi che aprono il dibattito senza cadere nella paralisi distopica.',
          body: [
            'Il design fiction non è solo oggetti — è anche narrazione. Ma non narrazione nel senso letterario tradizionale: archi narrativi embedded negli artefatti, nelle sequenze di media, nelle performance. Lo storytelling speculativo è l\'arte di costruire storie sul futuro che aprono conversazione invece di chiuderla nell\'angoscia.',
            'Il rischio più grande dello storytelling futurista è la paralisi distopica. Black Mirror, molti film di fantascienza e una buona parte della comunicazione tech ci hanno abituati a futuri in cui la tecnologia ci schiaccia e non possiamo farci nulla. Questo tipo di narrativa provoca, ma spesso lascia solo impotenza. Lo storytelling speculativo costruttivo parte da una premessa diversa: ogni futuro mostrato è ancora aperto alla scelta collettiva.',
            'Anthony Dunne e Fiona Raby distinguono tra design che rassicura e design che disturba produttivamente. La chiave è la direzione della provocazione. Un arco narrativo costruttivo segue spesso questa struttura: mondo familiare → elemento estraneante → rivelazione di assunzioni nascoste → apertura verso alternative. Non "ecco l\'orrore", ma "ecco una possibilità — cosa ne pensi? Cosa faresti?".',
            'Superflux è maestra in questo equilibrio. "Mitigation of Shock" mostra un appartamento adattato alla crisi climatica — inquietante nella sua plausibilità — ma l\'installazione invita a chiedersi cosa possiamo fare oggi, non solo a impaurirci. "Drone Aviary" immagina droni come infrastruttura urbana quotidiana, aprendo dibattito su sorveglianza, spazio pubblico e agency cittadina. La provocazione è realistica, ma lo spazio di risposta è reale.',
            'Esistono formati narrativi accessibili per chi non è scrittore professionista. La "micro-narrazione diegetica": tre frasi su un retro etichetta, un tweet dal futuro, una recensione Amazon immaginaria. Il "day in the life": seguire un personaggio attraverso una giornata nel mondo speculativo, documentata con foto, screenshot, oggetti. Il "before/after": mostrare lo stesso luogo o persona prima e dopo un cambiamento scenario. Ogni formato può essere realizzato con mezzi semplici.',
            'Noi di Relatronica crediamo che lo storytelling speculativo sia uno strumento di democrazia deliberativa. Quando racconti un futuro in modo che le persone possano discuterne — non subirlo passivamente — stai creando le condizioni per scelte collettive più consapevoli. Non serve evitare scenari difficili: serve accompagnarli con domande, non con sentenze. Il futuro non è scritto: lo stiamo scrivendo, e raccontarlo bene è parte del lavoro civico.',
          ],
          keyTakeaways: [
            'Lo storytelling speculativo costruisce archi narrativi che aprono conversazione, non angoscia passiva',
            'La paralisi distopica chiude nella impotenza; la narrativa costruttiva apre spazi di scelta e azione',
            'Formati accessibili: micro-narrazioni diegetiche, day in the life, before/after',
            'Superflux e Dunne & Raby mostrano come provocare realisticamente mantenendo spazi di risposta',
          ],
          reflection: 'Pensa a uno scenario futuro che ti preoccupa. Scrivi un arco narrativo in 4 passi: (1) situazione familiare, (2) elemento che la rende strana, (3) assunzione nascosta rivelata, (4) domanda aperta al lettore. Evita la chiusura distopica.',
        },
        en: {
          title: 'Speculative storytelling',
          description: 'Narrative arcs that open debate without falling into dystopian paralysis.',
          body: [
            'Design fiction is not only objects — it is also narrative. But not narrative in the traditional literary sense: narrative arcs embedded in artefacts, in sequences of media, in performances. Speculative storytelling is the art of building stories about the future that open conversation instead of closing it in anxiety.',
            'The greatest risk of futurist storytelling is dystopian paralysis. Black Mirror, many science fiction films and much tech communication have accustomed us to futures in which technology crushes us and we can do nothing about it. This kind of narrative provokes, but often leaves only powerlessness. Constructive speculative storytelling starts from a different premise: every future shown is still open to collective choice.',
            'Anthony Dunne and Fiona Raby distinguish between design that reassures and design that productively disturbs. The key is the direction of provocation. A constructive narrative arc often follows this structure: familiar world → estranging element → revelation of hidden assumptions → opening towards alternatives. Not "here is the horror", but "here is a possibility — what do you think? What would you do?".',
            'Superflux is a master of this balance. "Mitigation of Shock" shows a flat adapted to the climate crisis — unsettling in its plausibility — but the installation invites us to ask what we can do today, not just to frighten us. "Drone Aviary" imagines drones as everyday urban infrastructure, opening debate on surveillance, public space and civic agency. The provocation is realistic, but the space for response is real.',
            'There are accessible narrative formats for those who are not professional writers. "Diegetic micro-narrative": three sentences on a label back, a tweet from the future, an imaginary Amazon review. The "day in the life": following a character through a day in the speculative world, documented with photos, screenshots, objects. The "before/after": showing the same place or person before and after a scenario change. Each format can be realised with simple means.',
            'At Relatronica, we believe speculative storytelling is a tool for deliberative democracy. When you tell a future in a way people can discuss — not passively suffer it — you are creating conditions for more conscious collective choices. Avoiding difficult scenarios is not required: accompanying them with questions, not verdicts, is. The future is not written: we are writing it, and telling it well is part of civic work.',
          ],
          keyTakeaways: [
            'Speculative storytelling builds narrative arcs that open conversation, not passive anxiety',
            'Dystopian paralysis closes into powerlessness; constructive narrative opens spaces for choice and action',
            'Accessible formats: diegetic micro-narratives, day in the life, before/after',
            'Superflux and Dunne & Raby show how to provoke realistically while maintaining spaces for response',
          ],
          reflection: 'Think of a future scenario that worries you. Write a narrative arc in 4 steps: (1) familiar situation, (2) element that makes it strange, (3) hidden assumption revealed, (4) open question to the reader. Avoid dystopian closure.',
        },
      },
      resources: [
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
        { title: 'Dunne & Raby — Speculative Everything', url: 'https://mitpress.mit.edu/9780262019842/speculative-everything/', type: 'book' },
        { title: 'Superflux — Drone Aviary', url: 'https://superflux.in/index.php/work/drone-aviary/', type: 'article' },
      ],
    },
    {
      slug: 'media-diegetici',
      readingTime: 8,
      content: {
        it: {
          title: 'Media diegetici',
          description: 'Packaging, manuali, pubblicità, screenshot UI e articoli di giornale dal futuro.',
          body: [
            'Se gli oggetti fisici sono il cuore del design fiction, i media diegetici sono il sistema circolatorio che li rende vivi. Packaging, manuali d\'uso, pubblicità, screenshot di interfacce, articoli di giornale, recensioni online, bollette, contratti: tutto ciò che circonda un prodotto nel mondo reale può essere replicato diegeticamente per costruire un futuro credibile.',
            'Il packaging è spesso sottovalutato, ma è potentissimo. Una scatola con logo, barcode, avvertenze legali, icone di riciclo e istruzioni multilingue dice immediatamente: "questo esiste, viene prodotto, distribuito, regolamentato". Quando Near Future Laboratory o altri studi creano packaging per prodotti immaginari, usano esattamente i codici visivi che riconosciamo dallo scaffale del supermercato — e li distorcono leggermente per rivelare il mondo futuro.',
            'I manuali d\'uso e le guide rapide sono formati ideali per il design fiction partecipativo. Sono strutturati, scansionabili, familiari. Un manuale per un "Neighbourhood Data Trust" o per un "Personal Carbon Budget Device" spiega regole, responsabilità e procedure — rendendo visibili i trade-off di uno scenario. In un workshop, chiedere ai partecipanti di scrivere il manuale di un oggetto speculativo produce insight straordinari sulle implicazioni nascoste.',
            'Le pubblicità diegetiche completano il quadro commerciale. Un poster, uno spot radiofonico, un banner online per un servizio del futuro usa il linguaggio persuasivo che già conosciamo — promesse, benefici, call to action — applicato a mondi diversi. La dissonanza tra tono pubblicitario rassicurante e contenuto inquietante è uno degli effetti più efficaci del design fiction civico.',
            'Gli screenshot UI e gli articoli di giornale dal futuro sono tra i media più accessibili da produrre digitalmente. Un feed di notizie datato 2038, un\'app di prenotazione sanitaria con criteri di accesso controversi, un thread social su una nuova legge: formati che richiedono solo competenze base di design grafico o editing testuale. Stuart Candy usa spesso "future news" in workshop per rendere gli scenari immediatamente discussibili — perché tutti sappiamo leggere una notizia e formare un\'opinione.',
            'La forza dei media diegetici sta nella loro moltiplicazione. Un singolo oggetto diventa un ecosistema narrativo quando lo accompagni con packaging, manuale, pubblicità, recensione e notizia. Ogni media aggiunge un angolo, una voce, un registro diverso sullo stesso futuro. Per chi progetta scenari civici, questa moltiplicazione non è decorazione — è metodo per rendere il futuro leggibile, discutibile e, soprattutto, actionable.',
          ],
          keyTakeaways: [
            'I media diegetici (packaging, manuali, ads, UI, notizie) circondano e danno vita agli oggetti speculativi',
            'Packaging e manuali usano codici visivi familiari per comunicare "questo esiste davvero"',
            'Pubblicità e notizie dal futuro sfruttano formati persuasivi e giornalistici che tutti sappiamo leggere',
            'Moltiplicare i media diegetici intorno a un oggetto costruisce un ecosistema narrativo completo',
          ],
          reflection: 'Scegli un oggetto speculativo (tuo o immaginario). Elenca 5 media diegetici che lo accompagnerebbero: packaging, manuale, ad, screenshot UI, notizia. Per ciascuno, scrivi una riga di contenuto. Cosa rivela ogni medium che gli altri non dicono?',
        },
        en: {
          title: 'Diegetic media',
          description: 'Packaging, manuals, advertising, UI screenshots and newspaper articles from the future.',
          body: [
            'If physical objects are the heart of design fiction, diegetic media are the circulatory system that brings them to life. Packaging, instruction manuals, advertising, interface screenshots, newspaper articles, online reviews, bills, contracts: everything that surrounds a product in the real world can be diegetically replicated to build a credible future.',
            'Packaging is often underrated, but extremely powerful. A box with logo, barcode, legal warnings, recycling icons and multilingual instructions immediately says: "this exists, is produced, distributed, regulated". When the Near Future Laboratory or other studios create packaging for imaginary products, they use exactly the visual codes we recognise from the supermarket shelf — and distort them slightly to reveal the future world.',
            'Instruction manuals and quick guides are ideal formats for participatory design fiction. They are structured, scannable, familiar. A manual for a "Neighbourhood Data Trust" or a "Personal Carbon Budget Device" explains rules, responsibilities and procedures — making the trade-offs of a scenario visible. In a workshop, asking participants to write the manual for a speculative object produces extraordinary insights into hidden implications.',
            'Diegetic advertising completes the commercial picture. A poster, a radio spot, an online banner for a future service uses the persuasive language we already know — promises, benefits, calls to action — applied to different worlds. The dissonance between reassuring advertising tone and unsettling content is one of the most effective effects of civic design fiction.',
            'UI screenshots and newspaper articles from the future are among the most accessible media to produce digitally. A news feed dated 2038, a healthcare booking app with controversial access criteria, a social thread about a new law: formats requiring only basic graphic design or text editing skills. Stuart Candy often uses "future news" in workshops to make scenarios immediately debatable — because we all know how to read a news story and form an opinion.',
            'The power of diegetic media lies in their multiplication. A single object becomes a narrative ecosystem when you accompany it with packaging, manual, advertising, review and news. Each medium adds an angle, a voice, a different register on the same future. For those designing civic scenarios, this multiplication is not decoration — it is a method for making the future readable, debatable and, above all, actionable.',
          ],
          keyTakeaways: [
            'Diegetic media (packaging, manuals, ads, UI, news) surround and bring speculative objects to life',
            'Packaging and manuals use familiar visual codes to communicate "this really exists"',
            'Advertising and news from the future leverage persuasive and journalistic formats we all know how to read',
            'Multiplying diegetic media around an object builds a complete narrative ecosystem',
          ],
          reflection: 'Choose a speculative object (yours or imaginary). List 5 diegetic media that would accompany it: packaging, manual, ad, UI screenshot, news story. For each, write one line of content. What does each medium reveal that the others do not?',
        },
      },
      resources: [
        { title: 'Near Future Laboratory — Design Fiction Media', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
        { title: 'Stuart Candy — Future News Workshop', url: 'https://www.carnegiemellon.edu/experiential-futures', type: 'article' },
        { title: 'Design Fiction Film — Vimeo (Near Future Laboratory)', url: 'https://vimeo.com/nearfuturelaboratory', type: 'video' },
      ],
    },
  ],
};
