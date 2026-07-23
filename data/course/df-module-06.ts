import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz06: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Etica e impatto',
      description: 'Verifica la tua comprensione del Modulo 06: provocazione produttiva, design fiction civica e dal laboratorio all\'azione.',
    },
    en: {
      title: 'Quiz — Ethics and impact',
      description: 'Test your understanding of Module 06: productive provocation, civic design fiction and from lab to action.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'df-q06-01',
      content: {
        it: {
          question: 'Cosa distingue la provocazione "produttiva" dalla provocazione "spettacolo"?',
          options: [
            'La provocazione produttiva è sempre meno scioccante',
            'La provocazione produttiva apre spazi di immaginazione e azione; lo spettacolo chiude nell\'angoscia o nell\'intrattenimento passivo',
            'Lo spettacolo è riservato ai musei, la provocazione produttiva solo alle università',
            'Non c\'è differenza: ogni provocazione è utile se è ben fatta',
          ],
          explanation: 'La provocazione produttiva chiede "questo futuro lo vogliamo? Se no, cosa facciamo?" e apre possibilità di azione. Lo spettacolo — distopia per il gusto della paura o installazione estetica senza uscita — lascia angoscia o indifferenza senza spazio per il cambiamento.',
        },
        en: {
          question: 'What distinguishes "productive" provocation from "spectacle"?',
          options: [
            'Productive provocation is always less shocking',
            'Productive provocation opens spaces for imagination and action; spectacle closes into anxiety or passive entertainment',
            'Spectacle is reserved for museums, productive provocation only for universities',
            'There is no difference: every provocation is useful if well made',
          ],
          explanation: 'Productive provocation asks "do we want this future? If not, what do we do?" and opens possibilities for action. Spectacle — dystopia for the pleasure of fear or aesthetic installation without exit — leaves anxiety or indifference without space for change.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q06-02',
      content: {
        it: {
          question: 'Cosa si intende per "trauma tourism" nel contesto del design speculativo?',
          options: [
            'Organizzare visite turistiche in luoghi storici di conflitto',
            'Presentare scenari di crisi (carestia, guerra, oppressione) a pubblici che non le vivono, senza contesto né spazio per l\'azione',
            'Usare immagini violente per attirare visitatori in un museo',
            'Documentare le esperienze traumatiche dei partecipanti al workshop',
          ],
          explanation: 'Il trauma tourism si verifica quando scenari di sofferenza vengono "consumati" da chi non le vive — ad esempio un\'installazione sulla carestia climatica in un museo d\'arte di Manhattan, presentata a un pubblico che non conosce l\'insicurezza alimentare. La provocazione deve essere contestualizzata e rispettosa.',
        },
        en: {
          question: 'What is meant by "trauma tourism" in the context of speculative design?',
          options: [
            'Organising tourist visits to historical conflict sites',
            'Presenting crisis scenarios (famine, war, oppression) to audiences who do not live them, without context or space for action',
            'Using violent images to attract visitors to a museum',
            'Documenting participants\' traumatic experiences in the workshop',
          ],
          explanation: 'Trauma tourism occurs when scenarios of suffering are "consumed" by those who do not live them — for example a climate famine installation in a Manhattan art museum, presented to an audience unfamiliar with food insecurity. Provocation must be contextualised and respectful.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q06-03',
      content: {
        it: {
          question: 'Perché il design fiction può essere utile per il cambiamento civico?',
          options: [
            'Perché sostituisce completamente il dibattito politico tradizionale',
            'Perché rende tangibili scenari complessi, coinvolge cittadini e policy maker in conversazioni concrete e produce input per decisioni',
            'Perché le istituzioni preferiscono sempre artefatti a report scritti',
            'Perché elimina la necessità di dati e ricerca empirica',
          ],
          explanation: 'Il design fiction non sostituisce la politica: la arricchisce. Artefatti e scenari rendono discussibili futuri altrimenti astratti, coinvolgono chi normalmente non partecipa ai processi decisionali e producono materiale (cataloghi, prototipi, scenari) utilizzabile in consultazioni e policy.',
        },
        en: {
          question: 'Why can design fiction be useful for civic change?',
          options: [
            'Because it completely replaces traditional political debate',
            'Because it makes complex scenarios tangible, involves citizens and policymakers in concrete conversations and produces input for decisions',
            'Because institutions always prefer artefacts to written reports',
            'Because it eliminates the need for data and empirical research',
          ],
          explanation: 'Design fiction does not replace politics: it enriches it. Artefacts and scenarios make otherwise abstract futures discussable, involve those who normally do not participate in decision-making and produce material (catalogues, prototypes, scenarios) usable in consultations and policy.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q06-04',
      content: {
        it: {
          question: 'Chi presenta uno scenario futuro e a chi importa?',
          options: [
            'Non importa: il contenuto dello scenario è neutrale',
            'Importa: chi presenta, chi è rappresentato e chi ha potere di definire "il futuro" influenzano profondamente l\'impatto e l\'etica del lavoro',
            'Importa solo se lo scenario è negativo',
            'Importa solo in ambito accademico, non in contesti civici',
          ],
          explanation: 'Non è neutrale se uno scenario sulla gentrificazione viene presentato da un\'agenzia immobiliare o da una comunità in lotta. Chi racconta il futuro, chi ne è protagonista e chi ne resta escluso sono questioni etiche centrali nel design fiction civico.',
        },
        en: {
          question: 'Who presents a future scenario and to whom does it matter?',
          options: [
            'It does not matter: the scenario content is neutral',
            'It matters: who presents, who is represented and who has power to define "the future" profoundly influence the impact and ethics of the work',
            'It only matters if the scenario is negative',
            'It only matters in academic settings, not in civic contexts',
          ],
          explanation: 'It is not neutral if a gentrification scenario is presented by a real estate agency or by a community in struggle. Who tells the future, who is its protagonist and who is excluded are central ethical questions in civic design fiction.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'df-q06-05',
      content: {
        it: {
          question: 'Cosa significa "dal laboratorio all\'azione" in un percorso di design fiction?',
          options: [
            'Terminare il workshop e archiviare gli output',
            'Tradurre insight, tensioni e artefatti emersi in progetti, campagne o prototipi concreti che incidono sul mondo reale',
            'Pubblicare solo un report accademico',
            'Ripetere lo stesso lab identico ogni anno',
          ],
          explanation: 'Un lab etico e utile non finisce con la sessione: produce next step concreti — chi fa cosa, quali prototipi portare avanti, quali conversazioni aprire con istituzioni o comunità. Relatronica crede in scenari che aprono spazi di azione, non che chiudono nella paura.',
        },
        en: {
          question: 'What does "from lab to action" mean in a design fiction path?',
          options: [
            'Ending the workshop and archiving the outputs',
            'Translating insights, tensions and artefacts emerged into concrete projects, campaigns or prototypes that impact the real world',
            'Publishing only an academic report',
            'Repeating the same identical lab every year',
          ],
          explanation: 'An ethical and useful lab does not end with the session: it produces concrete next steps — who does what, which prototypes to carry forward, which conversations to open with institutions or communities. Relatronica believes in scenarios that open spaces for action, not that close into fear.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const dfModule06: CourseModule = {
  slug: 'etica-e-impatto',
  number: '06',
  color: 'rose',
  iconName: 'Shield',
  content: {
    it: {
      title: 'Etica e impatto',
      description: 'Provocazione produttiva, cambiamento civico e dal laboratorio all\'azione: come il design fiction genera impatto responsabile.',
    },
    en: {
      title: 'Ethics and impact',
      description: 'Productive provocation, civic change and from lab to action: how design fiction generates responsible impact.',
    },
  },
  quiz: quiz06,
  lessons: [
    {
      slug: 'provocazione-produttiva-vs-spettacolo',
      readingTime: 8,
      content: {
        it: {
          title: 'Provocazione produttiva vs spettacolo',
          description: 'L\'etica di chi presenta i futuri altrui, come evitare il trauma tourism e la differenza tra disturbare per aprire e disturbare per intrattenere.',
          body: [
            'Il design fiction usa la provocazione come strumento centrale: mostrare futuri plausibili ma scomodi per costringere a riflettere. Ma non tutte le provocazioni sono uguali. La distinzione tra provocazione produttiva e spettacolo può fare la differenza tra un lavoro che apre possibilità e uno che chiude nell\'angoscia o nell\'indifferenza.',
            'La provocazione produttiva chiede: "Questo futuro lo vogliamo? Se no, cosa facciamo per evitarlo o costruirne uno migliore?". Apre spazi di immaginazione e azione. Lo spettacolo — distopia per il gusto della paura, installazione estetica senza uscita, "Black Mirror" senza domanda — lascia angoscia o intrattenimento passivo. Il messaggio implicito è spesso "la tecnologia è terribile e non possiamo farci nulla" o "guarda che futuro inquietante!" senza invito a cambiare.',
            'Una questione etica centrale: chi presenta i futuri di chi? Quando uno scenario sulla carestia climatica viene mostrato in un museo d\'arte di Manhattan a un pubblico che non conosce l\'insicurezza alimentare, rischiamo il "trauma tourism" — consumare la sofferenza altrui come esperienza estetica. Quando lo stesso scenario viene co-progettato con una comunità che vive già tensioni alimentari, la conversazione cambia: non si osserva, si partecipa.',
            'Anche chi è rappresentato conta. Un futuro sulla sorveglianza progettato solo da designer occidentali bianchi può invisibilizzare chi già vive sotto controllo. Un futuro sulla gentrificazione presentato da un\'agenzia immobiliare ha un interesse diverso da uno co-creato con inquilini in lotta. Il design fiction civico richiede attenzione ai rapporti di potere: chi ha voce, chi è silenziato, chi beneficia dell\'output.',
            'Strumenti per una provocazione etica: co-design con le comunità interessate, debrief strutturati dopo esercizi intensi, spazio per emozioni e dissent, chiarezza su obiettivi e next step. Il toolkit Ethical OS (Institute for the Future e Omidyar Network) offre domande utili: chi potrebbe essere danneggiato? Chi non è rappresentato? Quali assunzioni stiamo dando per scontate?',
            'Noi di Relatronica crediamo nella provocazione costruttiva: scenari che disturbano il comfort dell\'inevitabilità, ma che aprono spazi di immaginazione e azione. Non progettiamo distopie per il piacere della paura — progettiamo alternative per il coraggio della speranza. Ogni lab che facilitiamo include una domanda esplicita: "Cosa facciamo adesso?".',
          ],
          keyTakeaways: [
            'Provocazione produttiva apre possibilità di azione; lo spettacolo chiude in angoscia o intrattenimento',
            'Chi presenta i futuri e chi è rappresentato sono questioni etiche centrali',
            'Evitare trauma tourism: contestualizzare, co-progettare, rispettare chi vive già le crisi',
            'Debrief, co-design e next step espliciti rendono la provocazione responsabile',
          ],
          reflection: 'Pensa a un esempio di "futuro" che hai visto in un film, serie o installazione. Era provocazione produttiva o spettacolo? Cosa mancava — o cosa c\'era — per aprire spazio all\'azione?',
        },
        en: {
          title: 'Productive provocation vs spectacle',
          description: 'The ethics of who presents others\' futures, how to avoid trauma tourism and the difference between disturbing to open and disturbing to entertain.',
          body: [
            'Design fiction uses provocation as a central tool: showing plausible but uncomfortable futures to force reflection. But not all provocations are equal. The distinction between productive provocation and spectacle can make the difference between work that opens possibilities and work that closes into anxiety or indifference.',
            'Productive provocation asks: "Do we want this future? If not, what do we do to avoid it or build a better one?". It opens spaces for imagination and action. Spectacle — dystopia for the pleasure of fear, aesthetic installation without exit, "Black Mirror" without a question — leaves anxiety or passive entertainment. The implicit message is often "technology is terrible and we can\'t do anything about it" or "look at that unsettling future!" without invitation to change.',
            'A central ethical question: who presents whose futures? When a climate famine scenario is shown in a Manhattan art museum to an audience unfamiliar with food insecurity, we risk "trauma tourism" — consuming others\' suffering as aesthetic experience. When the same scenario is co-designed with a community already living food tensions, the conversation changes: we do not observe, we participate.',
            'Who is represented also matters. A future about surveillance designed only by white Western designers may invisibilise those already living under control. A future about gentrification presented by a real estate agency has different interests from one co-created with tenants in struggle. Civic design fiction requires attention to power dynamics: who has voice, who is silenced, who benefits from the output.',
            'Tools for ethical provocation: co-design with affected communities, structured debriefs after intense exercises, space for emotions and dissent, clarity on goals and next steps. The Ethical OS toolkit (Institute for the Future and Omidyar Network) offers useful questions: who might be harmed? Who is not represented? What assumptions are we taking for granted?',
            'At Relatronica, we believe in constructive provocation: scenarios that disturb the comfort of inevitability, but that open spaces for imagination and action. We do not design dystopias for the pleasure of fear — we design alternatives for the courage of hope. Every lab we facilitate includes an explicit question: "What do we do now?".',
          ],
          keyTakeaways: [
            'Productive provocation opens possibilities for action; spectacle closes into anxiety or entertainment',
            'Who presents futures and who is represented are central ethical questions',
            'Avoid trauma tourism: contextualise, co-design, respect those already living the crises',
            'Debriefs, co-design and explicit next steps make provocation responsible',
          ],
          reflection: 'Think of an example of a "future" you saw in a film, series or installation. Was it productive provocation or spectacle? What was missing — or present — to open space for action?',
        },
      },
      resources: [
        { title: 'Ethical OS — Institute for the Future', url: 'https://ethicalos.org/', type: 'tool' },
        { title: 'Dunne & Raby — Critical Design FAQ', url: 'http://dunneandraby.co.uk/content/bydandr/13/0', type: 'article' },
        { title: 'Superflux — Mitigation of Shock', url: 'https://superflux.in/index.php/work/mitigation-of-shock/', type: 'article' },
      ],
    },
    {
      slug: 'design-fiction-per-il-cambiamento-civico',
      readingTime: 9,
      content: {
        it: {
          title: 'Design fiction per il cambiamento civico',
          description: 'Policy, comunità, istituzioni e dibattito pubblico: come il design fiction entra nei processi che plasmano il futuro reale.',
          body: [
            'Il design fiction non vive solo in musei e università. Sempre più spesso entra in consultazioni pubbliche, processi di policy, dibattiti comunitari e iniziative istituzionali. Perché? Perché gli artefatti rendono discussibili futuri altrimenti astratti — e coinvolgono chi normalmente non legge report di centinaia di pagine.',
            'Nella policy, scenari e prototipi diegetici possono alimentare consultazioni: invece di chiedere "cosa ne pensa del piano urbanistico?", si chiede "come vivresti in un quartiere con queste regole?". Il Government Office for Science del Regno Unito ha usato approcci speculativi per esplorare futuri demografici e tecnologici. L\'UNDP e altre agenzie internazionali integrano design fiction in programmi di sviluppo e resilienza.',
            'A livello comunitario, il design fiction può dare voce a chi è escluso dai processi decisionali. Un lab con abitanti di un quartiere per immaginare il futuro dello spazio pubblico produce materiale diverso da un masterplan redatto solo da tecnici. Co-design di scenari con anziani, migranti, giovani o lavoratori precari rende visibili prospettive spesso ignorate. L\'obiettivo non è sostituire la democrazia rappresentativa, ma arricchirla con immaginazione partecipata.',
            'Le istituzioni — comuni, regioni, enti pubblici — possono usare design fiction per anticipare tensioni e testare reazioni. Un catalogo di "servizi pubblici del 2035" o un role-play su una crisi sanitaria possono rivelare assunzioni nascoste prima che diventino policy. Attenzione: le istituzioni hanno interessi e vincoli. Un lab facilitato da chi ha potere decisionale richiede trasparenza su obiettivi e limiti — e spazio per dissentire.',
            'Il dibattito pubblico beneficia di artefatti concreti. Un articolo di giornale dal futuro, un manuale d\'uso fittizio, una pagina di catalogo possono entrare in conversazioni mediatiche, sociali e politiche in modi che un report no. NextHuman, il progetto di Relatronica, usa visualizzazioni e scenari per stimolare consapevolezza e azione — ogni scenario è un invito a riflettere, discutere e agire responsabilmente.',
            'Per un impatto civico reale, collega sempre il lab a processi esistenti: una consultazione in corso, un comitato cittadino, una campagna. Gli output del lab — cataloghi, prototipi, scenari — devono avere un destinatario e un canale. Altrimenti restano esercizi creativi senza conseguenze. Il design fiction civico è efficace quando produce materiale che qualcuno userà davvero.',
          ],
          keyTakeaways: [
            'Artefatti rendono discussibili futuri astratti e coinvolgono chi non legge report lunghi',
            'Co-design comunitario dà voce a prospettive escluse dai processi decisionali',
            'Istituzioni e policy possono usare design fiction per anticipare tensioni — con trasparenza e spazio per dissentire',
            'Collegare il lab a processi esistenti (consultazioni, campagne) è essenziale per impatto reale',
          ],
          reflection: 'Nel tuo contesto (città, organizzazione, comunità), quale decisione o dibattito pubblico potrebbe beneficiare di artefatti di design fiction? Chi dovrebbe essere coinvolto nella co-creazione?',
        },
        en: {
          title: 'Design fiction for civic change',
          description: 'Policy, communities, institutions and public debate: how design fiction enters the processes that shape the real future.',
          body: [
            'Design fiction does not live only in museums and universities. Increasingly it enters public consultations, policy processes, community debates and institutional initiatives. Why? Because artefacts make otherwise abstract futures discussable — and involve those who normally do not read hundreds-page reports.',
            'In policy, scenarios and diegetic prototypes can fuel consultations: instead of asking "what do you think of the urban plan?", ask "how would you live in a neighbourhood with these rules?". The UK Government Office for Science has used speculative approaches to explore demographic and technological futures. UNDP and other international agencies integrate design fiction into development and resilience programmes.',
            'At community level, design fiction can give voice to those excluded from decision-making. A lab with neighbourhood residents to imagine the future of public space produces different material from a masterplan written only by technicians. Co-designing scenarios with elders, migrants, youth or precarious workers makes often-ignored perspectives visible. The goal is not to replace representative democracy, but to enrich it with participatory imagination.',
            'Institutions — municipalities, regions, public bodies — can use design fiction to anticipate tensions and test reactions. A catalogue of "public services in 2035" or a role-play on a health crisis can reveal hidden assumptions before they become policy. Caution: institutions have interests and constraints. A lab facilitated by those with decision-making power requires transparency on goals and limits — and space to dissent.',
            'Public debate benefits from concrete artefacts. A newspaper article from the future, a fictional user manual, a catalogue page can enter media, social and political conversations in ways a report cannot. NextHuman, Relatronica\'s project, uses visualisations and scenarios to stimulate awareness and action — every scenario is an invitation to reflect, discuss and act responsibly.',
            'For real civic impact, always connect the lab to existing processes: an ongoing consultation, a citizens\' committee, a campaign. Lab outputs — catalogues, prototypes, scenarios — must have a recipient and a channel. Otherwise they remain creative exercises without consequences. Civic design fiction is effective when it produces material someone will actually use.',
          ],
          keyTakeaways: [
            'Artefacts make abstract futures discussable and involve those who do not read long reports',
            'Community co-design gives voice to perspectives excluded from decision-making',
            'Institutions and policy can use design fiction to anticipate tensions — with transparency and space to dissent',
            'Connecting the lab to existing processes (consultations, campaigns) is essential for real impact',
          ],
          reflection: 'In your context (city, organisation, community), which decision or public debate could benefit from design fiction artefacts? Who should be involved in co-creation?',
        },
      },
      resources: [
        { title: 'UK Government Office for Science — Foresight', url: 'https://www.gov.uk/government/organisations/government-office-for-science', type: 'article' },
        { title: 'UNDP — Strategic Innovation', url: 'https://www.undp.org/innovation', type: 'article' },
        { title: 'Relatronica — NextHuman', url: 'https://relatronica.com/nexthuman', type: 'tool' },
      ],
    },
    {
      slug: 'dal-laboratorio-all-azione',
      readingTime: 8,
      content: {
        it: {
          title: 'Dal laboratorio all\'azione',
          description: 'Trasformare insight, tensioni e artefatti in progetti, campagne e prototipi che contano — la chiusura del percorso Design Fiction Lab.',
          body: [
            'Un Design Fiction Lab che termina con "grazie a tutti, arrivederci" ha fallito metà del suo scopo. L\'obiettivo non è solo esplorare futuri — è tradurre quell\'esplorazione in qualcosa che incide sul mondo reale. Dal laboratorio all\'azione significa: insight → decisioni, artefatti → prototipi, conversazioni → campagne.',
            'Il primo passo è catturare ciò che è emerso. Durante il lab, documenta: quali tensioni hanno suscitato più reazioni? Quali artefatti hanno generato più domande? Quali assunzioni sono state messe in discussione? Un debrief strutturato — "cosa abbiamo imparato?", "cosa ci sorprende?", "cosa vogliamo fare?" — produce materiale utilizzabile. Non serve un report di cento pagine: serve chiarezza su next step.',
            'Tradurre insight in progetti concreti. Un catalogo prodotto in lab può diventare una mostra temporanea in biblioteca. Un artefact brief può evolvere in prototipo per una campagna. Uno scenario role-play può alimentare un documento di policy o una consultazione. Chiediti: chi ha il potere o la risorsa per portare avanti questo? Cosa serve — tempo, budget, alleati — per il passo successivo?',
            'Le campagne beneficiano di design fiction. Un manifesto visivo, un oggetto simbolico, una narrativa speculativa possono mobilitare comunità intorno a cause (clima, diritti, spazio urbano) in modi che dati e slogan da soli non riescono. L\'artefatto diventa ancora di conversazione: "Hai visto il Passaporto Climatico? Cosa ne pensi?". La campagna non finisce con il lab — inizia.',
            'I prototipi che contano non devono essere perfetti. Un manuale stampato, un mock-up di servizio, un video breve che "documenta" un futuro immaginato possono essere sufficienti per aprire porte: presentazioni a amministratori, articoli, eventi. Relatronica costruisce strumenti come NextHuman e l\'Osservatorio per collegare immaginazione speculativa e azione civica — ogni progetto nasce da domande e si misura sull\'impatto che genera.',
            'Chiudiamo il percorso Design Fiction Lab con il manifesto Relatronica: non siamo profeti, siamo designer, ricercatori e attivisti che credono nel potere delle domande giuste, degli strumenti aperti e delle comunità informate. Il futuro non è un luogo in cui arriviamo — è un luogo che costruiamo. Un lab ben facilitato, etico e orientato all\'azione è un mattone di quel costruire. Ora tocca a te: quale futuro vuoi esplorare, e cosa farai con ciò che hai imparato?',
          ],
          keyTakeaways: [
            'Un lab etico termina con next step concreti, non con "grazie e arrivederci"',
            'Documentare tensioni, artefatti e insight durante il debrief produce materiale utilizzabile',
            'Cataloghi, brief e scenari possono evolvere in mostre, prototipi, campagne e input per policy',
            'Prototipi imperfetti ma evocativi possono aprire porte istituzionali e mobilitare comunità',
          ],
          reflection: 'Ripensa al lab che vorresti facilitare (o a quello che hai seguito). Quali tre azioni concrete potresti intraprendere nella settimana successiva per portare avanti almeno un insight o un artefatto?',
        },
        en: {
          title: 'From lab to action',
          description: 'Turning insights, tensions and artefacts into projects, campaigns and prototypes that matter — closing the Design Fiction Lab path.',
          body: [
            'A Design Fiction Lab that ends with "thank you all, goodbye" has failed half its purpose. The goal is not only to explore futures — it is to translate that exploration into something that impacts the real world. From lab to action means: insights → decisions, artefacts → prototypes, conversations → campaigns.',
            'The first step is capturing what emerged. During the lab, document: which tensions provoked the most reactions? Which artefacts generated the most questions? Which assumptions were challenged? A structured debrief — "what did we learn?", "what surprises us?", "what do we want to do?" — produces usable material. You do not need a hundred-page report: you need clarity on next steps.',
            'Translate insights into concrete projects. A catalogue produced in a lab can become a temporary exhibition in a library. An artefact brief can evolve into a prototype for a campaign. A role-play scenario can feed a policy document or consultation. Ask yourself: who has the power or resource to carry this forward? What is needed — time, budget, allies — for the next step?',
            'Campaigns benefit from design fiction. A visual manifesto, a symbolic object, a speculative narrative can mobilise communities around causes (climate, rights, urban space) in ways data and slogans alone cannot. The artefact becomes a conversation piece: "Have you seen the Climate Passport? What do you think?". The campaign does not end with the lab — it begins.',
            'Prototypes that matter need not be perfect. A printed manual, a service mock-up, a short video "documenting" an imagined future can be enough to open doors: presentations to administrators, articles, events. Relatronica builds tools like NextHuman and the Observatory to connect speculative imagination and civic action — every project is born from questions and measured by the impact it generates.',
            'We close the Design Fiction Lab path with the Relatronica manifesto: we are not prophets, we are designers, researchers and activists who believe in the power of the right questions, open tools and informed communities. The future is not a place we arrive at — it is a place we build. A well-facilitated, ethical and action-oriented lab is one brick of that building. Now it is your turn: which future do you want to explore, and what will you do with what you have learned?',
          ],
          keyTakeaways: [
            'An ethical lab ends with concrete next steps, not "thanks and goodbye"',
            'Documenting tensions, artefacts and insights during debrief produces usable material',
            'Catalogues, briefs and scenarios can evolve into exhibitions, prototypes, campaigns and policy input',
            'Imperfect but evocative prototypes can open institutional doors and mobilise communities',
          ],
          reflection: 'Rethink the lab you would like to facilitate (or the one you followed). What three concrete actions could you take in the following week to carry forward at least one insight or artefact?',
        },
      },
      resources: [
        { title: 'Relatronica — Manifesto', url: '/manifesto', type: 'article' },
        { title: 'Stuart Candy — From Experiential Futures to Action', url: 'https://futuryst.com/', type: 'article' },
        { title: 'Near Future Laboratory — Design Fiction Methods', url: 'https://nearfuturelaboratory.com/', type: 'tool' },
      ],
    },
  ],
};
