import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz05: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Regolamentazione e governance',
      description: 'Verifica la tua comprensione del Modulo 05: AI Act europeo, governance globale e partecipazione dei cittadini.',
    },
    en: {
      title: 'Quiz — Regulation and governance',
      description: 'Test your understanding of Module 05: European AI Act, global governance and citizen participation.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q05-01',
      content: {
        it: {
          question: 'Qual è l\'approccio principale dell\'AI Act europeo?',
          options: [
            'Vietare completamente l\'intelligenza artificiale in Europa',
            'Classificare i sistemi AI in base al livello di rischio, con regole più severe per i rischi più alti',
            'Lasciare che le aziende si auto-regolino volontariamente',
            'Creare un\'agenzia governativa che sviluppi tutta l\'AI per conto dell\'Europa',
          ],
          explanation: 'L\'AI Act adotta un approccio basato sul rischio: classifica i sistemi AI in quattro livelli (rischio inaccettabile, alto, limitato, minimo) e applica requisiti proporzionali. I sistemi ad alto rischio (giustizia, sanità, credito) hanno gli obblighi più stringenti.',
        },
        en: {
          question: 'What is the main approach of the European AI Act?',
          options: [
            'Completely banning artificial intelligence in Europe',
            'Classifying AI systems based on risk level, with stricter rules for higher risks',
            'Letting companies self-regulate voluntarily',
            'Creating a government agency to develop all AI on behalf of Europe',
          ],
          explanation: 'The AI Act adopts a risk-based approach: it classifies AI systems into four levels (unacceptable, high, limited, minimal risk) and applies proportional requirements. High-risk systems (justice, healthcare, credit) have the strictest obligations.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q05-02',
      content: {
        it: {
          question: 'Quali pratiche di AI sono considerate "rischio inaccettabile" e quindi vietate dall\'AI Act?',
          options: [
            'L\'uso dell\'AI per la traduzione automatica e i videogiochi',
            'Il social scoring governativo, la manipolazione subliminale e il riconoscimento facciale di massa in tempo reale',
            'L\'uso dell\'AI nella ricerca scientifica',
            'Tutti gli usi commerciali dell\'AI',
          ],
          explanation: 'L\'AI Act vieta i sistemi di social scoring governativo (come il credito sociale cinese), i sistemi di manipolazione subliminale che causano danni, e il riconoscimento biometrico di massa in tempo reale in spazi pubblici (con eccezioni per la sicurezza nazionale).',
        },
        en: {
          question: 'Which AI practices are considered "unacceptable risk" and therefore banned by the AI Act?',
          options: [
            'Using AI for automatic translation and video games',
            'Government social scoring, subliminal manipulation and real-time mass facial recognition',
            'Using AI in scientific research',
            'All commercial uses of AI',
          ],
          explanation: 'The AI Act bans government social scoring systems (like the Chinese social credit), subliminal manipulation systems that cause harm, and real-time mass biometric recognition in public spaces (with exceptions for national security).',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q05-03',
      content: {
        it: {
          question: 'Perché l\'autoregolamentazione delle aziende tech è considerata insufficiente?',
          options: [
            'Perché le aziende tech non hanno competenze tecniche',
            'Perché esiste un conflitto di interessi strutturale: chi profita dalla tecnologia non può regolarsene l\'uso in modo imparziale',
            'Perché le aziende preferiscono la regolamentazione governativa',
            'Perché l\'autoregolamentazione funziona bene in tutti gli altri settori',
          ],
          explanation: 'L\'autoregolamentazione soffre di un conflitto di interessi strutturale. Le aziende hanno un incentivo economico a minimizzare i vincoli e massimizzare i profitti. I "comitati etici" interni, come quello sciolto da Google dopo il licenziamento di Timnit Gebru, hanno dimostrato di essere spesso strumenti di PR più che di governance reale.',
        },
        en: {
          question: 'Why is tech company self-regulation considered insufficient?',
          options: [
            'Because tech companies lack technical expertise',
            'Because there is a structural conflict of interest: those who profit from technology cannot regulate its use impartially',
            'Because companies prefer government regulation',
            'Because self-regulation works well in all other sectors',
          ],
          explanation: 'Self-regulation suffers from a structural conflict of interest. Companies have an economic incentive to minimise constraints and maximise profits. Internal "ethics committees", like the one dissolved by Google after firing Timnit Gebru, have proven to often be PR tools rather than real governance instruments.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q05-04',
      content: {
        it: {
          question: 'Cos\'è una "citizen assembly" nel contesto della governance dell\'AI?',
          options: [
            'Un\'app che permette ai cittadini di votare sulle politiche AI',
            'Un gruppo di cittadini selezionati casualmente che deliberano su questioni di AI dopo essere stati informati da esperti',
            'Una manifestazione di protesta contro l\'AI',
            'Un gruppo di esperti che consiglia il governo',
          ],
          explanation: 'Le assemblee cittadine (citizen assemblies) sono gruppi di cittadini rappresentativi della popolazione, selezionati per sorteggio, che deliberano su questioni complesse dopo un processo di informazione e confronto con esperti. Sono state usate con successo in Irlanda, Francia e Taiwan.',
        },
        en: {
          question: 'What is a "citizen assembly" in the context of AI governance?',
          options: [
            'An app that allows citizens to vote on AI policies',
            'A group of randomly selected citizens who deliberate on AI issues after being informed by experts',
            'A protest demonstration against AI',
            'A group of experts advising the government',
          ],
          explanation: 'Citizen assemblies are groups of citizens representative of the population, selected by lottery, who deliberate on complex issues after a process of information and expert discussion. They have been used successfully in Ireland, France and Taiwan.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q05-05',
      content: {
        it: {
          question: 'Qual è il rischio principale della "corsa al ribasso" nella regolamentazione globale dell\'AI?',
          options: [
            'Che i paesi investano troppo nella regolamentazione',
            'Che i paesi competano per attrarre aziende AI abbassando gli standard, a scapito dei diritti dei cittadini',
            'Che tutti i paesi adottino le stesse regole',
            'Che la regolamentazione sia troppo severa',
          ],
          explanation: 'La "corsa al ribasso" (race to the bottom) si verifica quando i paesi competono per attrarre investimenti tech abbassando gli standard di protezione. Senza coordinamento internazionale, le aziende possono semplicemente spostarsi nelle giurisdizioni meno regolate, vanificando gli sforzi dei paesi più responsabili.',
        },
        en: {
          question: 'What is the main risk of the "race to the bottom" in global AI regulation?',
          options: [
            'That countries invest too much in regulation',
            'That countries compete to attract AI companies by lowering standards, at the expense of citizens\' rights',
            'That all countries adopt the same rules',
            'That regulation is too severe',
          ],
          explanation: 'The "race to the bottom" occurs when countries compete to attract tech investment by lowering protection standards. Without international coordination, companies can simply move to less regulated jurisdictions, nullifying the efforts of more responsible countries.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const aiModule05: CourseModule = {
  slug: 'regolamentazione-governance',
  number: '05',
  color: 'teal',
  iconName: 'Shield',
  content: {
    it: {
      title: 'Regolamentazione e governance',
      description: 'L\'AI Act europeo, la corsa globale alla regolamentazione e come i cittadini possono influenzare le scelte sull\'AI.',
    },
    en: {
      title: 'Regulation and governance',
      description: 'The European AI Act, the global race to regulation, and how citizens can influence choices about AI.',
    },
  },
  quiz: quiz05,
  lessons: [
    {
      slug: 'ai-act-corsa-globale',
      readingTime: 9,
      content: {
        it: {
          title: 'L\'AI Act europeo e la corsa globale',
          description: 'Il primo quadro normativo completo sull\'AI al mondo: cosa prevede, cosa manca e come si confronta con altri approcci.',
          body: [
            'Il 13 marzo 2024, il Parlamento Europeo ha approvato l\'AI Act — il primo quadro normativo completo sull\'intelligenza artificiale al mondo. È un momento storico, paragonabile al GDPR del 2016 per la protezione dei dati. Come il GDPR, l\'AI Act potrebbe diventare un modello globale — o restare un\'eccezione europea in un mondo dominato da approcci più permissivi.',
            'L\'AI Act adotta un approccio basato sul rischio. I sistemi di AI sono classificati in quattro livelli. Rischio inaccettabile: sistemi vietati, come il social scoring governativo, la manipolazione subliminale e il riconoscimento biometrico di massa in tempo reale in spazi pubblici. Rischio alto: sistemi in ambiti sensibili (giustizia, sanità, credito, istruzione, assunzione) che devono rispettare requisiti rigorosi di trasparenza, documentazione, supervisione umana e gestione del rischio. Rischio limitato: sistemi con obblighi di trasparenza (es. chatbot che devono dichiarare di essere AI). Rischio minimo: la maggior parte dei sistemi AI, senza requisiti specifici.',
            'L\'AI Act ha punti di forza significativi. Il divieto del social scoring e della manipolazione subliminale stabilisce limiti chiari a usi inaccettabili. L\'obbligo di trasparenza per i sistemi ad alto rischio è un passo importante verso la responsabilizzazione. Il requisito di valutazione d\'impatto sui diritti fondamentali per i sistemi ad alto rischio è innovativo. E le sanzioni — fino al 7% del fatturato globale — sono potenzialmente deterrenti.',
            'Ma ha anche lacune importanti. Le eccezioni per la sicurezza nazionale e le forze dell\'ordine sono ampie: il riconoscimento facciale è vietato "in tempo reale" ma permesso "a posteriori", una distinzione difficile da applicare. La classificazione dei sistemi generativi (come GPT) è stata oggetto di lunghe negoziazioni e il risultato è un compromesso: i modelli foundation hanno obblighi di trasparenza ma non sono classificati come "alto rischio" di default. Inoltre, l\'implementazione sarà graduale (le regole entreranno pienamente in vigore nel 2026) e l\'applicazione dipenderà dalle autorità nazionali, con il rischio di enforcement diseguale tra i paesi membri.',
            'Nel panorama globale, gli approcci sono molto diversi. Gli Stati Uniti hanno adottato un approccio frammentario: executive orders presidenziali, linee guida NIST, proposte di legge statali, ma nessun quadro federale organico. La Cina ha una regolamentazione selettiva: restrizioni sui deepfake e sulla raccolta dati, ma il governo stesso è il principale utilizzatore di AI per la sorveglianza. Il Regno Unito post-Brexit ha scelto un approccio "pro-innovazione" basato sui principi piuttosto che su regole specifiche.',
            'La frammentazione globale crea un rischio di "corsa al ribasso": i paesi competono per attrarre aziende AI abbassando gli standard. Senza coordinamento internazionale — come quello proposto dall\'AI Safety Summit di Bletchley Park nel 2023 — le regolamentazioni più protettive rischiano di essere vanificate dalla mobilità delle corporation.',
          ],
          keyTakeaways: [
            'L\'AI Act classifica i sistemi AI per rischio: inaccettabile, alto, limitato, minimo',
            'Punti di forza: divieti chiari, trasparenza, sanzioni fino al 7% del fatturato globale',
            'Limiti: eccezioni per sicurezza, compromessi sui modelli generativi, implementazione graduale',
            'La frammentazione globale crea rischi di "corsa al ribasso" nella regolamentazione',
          ],
          reflection: 'Pensi che l\'AI Act sia troppo restrittivo, troppo permissivo o equilibrato? Quali usi dell\'AI che conosci classificheresti come "rischio inaccettabile"? Ce ne sono alcuni che mancano dall\'elenco dell\'AI Act?',
        },
        en: {
          title: 'The European AI Act and the global race',
          description: 'The world\'s first comprehensive regulatory framework for AI: what it includes, what\'s missing, and how it compares to other approaches.',
          body: [
            'On 13 March 2024, the European Parliament approved the AI Act — the world\'s first comprehensive regulatory framework for artificial intelligence. It is a historic moment, comparable to the 2016 GDPR for data protection. Like the GDPR, the AI Act could become a global model — or remain a European exception in a world dominated by more permissive approaches.',
            'The AI Act adopts a risk-based approach. AI systems are classified into four levels. Unacceptable risk: banned systems, such as government social scoring, subliminal manipulation and real-time mass biometric recognition in public spaces. High risk: systems in sensitive areas (justice, healthcare, credit, education, hiring) that must comply with rigorous requirements for transparency, documentation, human oversight and risk management. Limited risk: systems with transparency obligations (e.g. chatbots must declare they are AI). Minimal risk: most AI systems, with no specific requirements.',
            'The AI Act has significant strengths. The ban on social scoring and subliminal manipulation establishes clear limits on unacceptable uses. The transparency requirement for high-risk systems is an important step towards accountability. The requirement for fundamental rights impact assessment for high-risk systems is innovative. And the penalties — up to 7% of global turnover — are potentially deterrent.',
            'But it also has important gaps. Exceptions for national security and law enforcement are broad: facial recognition is banned "in real time" but allowed "retrospectively", a distinction difficult to enforce. The classification of generative systems (like GPT) was subject to lengthy negotiations and the result is a compromise: foundation models have transparency obligations but are not classified as "high risk" by default. Moreover, implementation will be gradual (rules will fully enter into force in 2026) and enforcement will depend on national authorities, with the risk of unequal enforcement across member states.',
            'Globally, approaches vary greatly. The United States has adopted a fragmented approach: presidential executive orders, NIST guidelines, state-level legislative proposals, but no comprehensive federal framework. China has selective regulation: restrictions on deepfakes and data collection, but the government itself is the primary user of AI for surveillance. Post-Brexit UK has chosen a "pro-innovation" approach based on principles rather than specific rules.',
            'Global fragmentation creates a risk of "race to the bottom": countries compete to attract AI companies by lowering standards. Without international coordination — such as that proposed at the Bletchley Park AI Safety Summit in 2023 — the most protective regulations risk being nullified by corporate mobility.',
          ],
          keyTakeaways: [
            'The AI Act classifies AI systems by risk: unacceptable, high, limited, minimal',
            'Strengths: clear bans, transparency, penalties up to 7% of global turnover',
            'Limitations: security exceptions, compromises on generative models, gradual implementation',
            'Global fragmentation creates risks of a "race to the bottom" in regulation',
          ],
          reflection: 'Do you think the AI Act is too restrictive, too permissive or balanced? Which AI uses you know of would you classify as "unacceptable risk"? Are there some missing from the AI Act\'s list?',
        },
      },
      resources: [
        { title: 'AI Act — Official EU Text', url: 'https://artificialintelligenceact.eu/', type: 'article' },
        { title: 'AI Act Explorer — Future of Life Institute', url: 'https://artificialintelligenceact.eu/ai-act-explorer/', type: 'tool' },
        { title: 'Comparing Global AI Regulation — Brookings', url: 'https://www.brookings.edu/articles/how-different-countries-view-artificial-intelligence/', type: 'article' },
      ],
    },
    {
      slug: 'autoregolamentazione-governance-pubblica',
      readingTime: 8,
      content: {
        it: {
          title: 'Autoregolamentazione vs. governance pubblica',
          description: 'Perché affidarsi alla buona volontà delle aziende tech non basta e cosa serve per una governance dell\'AI democratica.',
          body: [
            '"Move fast and break things" — il motto di Facebook per i suoi primi anni — riassume l\'atteggiamento dominante della Silicon Valley verso la regolamentazione: l\'innovazione viene prima, le regole dopo. Le aziende tech hanno promesso per anni di "autoregolarsi" attraverso principi etici, comitati interni e impegni volontari. Ma la storia dimostra che questa promessa non è stata mantenuta.',
            'Google ha pubblicato i suoi "AI Principles" nel 2018, impegnandosi a non sviluppare AI per armi, sorveglianza o tecnologie che causino danni. Lo stesso anno, firmò il Project Maven con il Pentagono per l\'uso dell\'AI nell\'analisi di immagini di droni militari. Quando i dipendenti protestarono, Google non rinnovò il contratto — ma non per principi etici, bensì per la pressione pubblica. Nel 2020, Google licenziò Timnit Gebru, co-lead del suo team di etica dell\'AI, dopo che pubblicò un paper critico verso i modelli linguistici di grandi dimensioni. Il messaggio era chiaro: l\'etica interna vale fino a quando non contraddice gli interessi commerciali.',
            'Il problema dell\'autoregolamentazione è strutturale, non individuale. Le aziende quotate in borsa hanno un obbligo fiduciario verso gli azionisti di massimizzare il profitto. I dirigenti che rallentano lo sviluppo per ragioni etiche vengono sostituiti da quelli che non lo fanno. Il mercato premia chi arriva primo, non chi arriva in modo responsabile. In questo contesto, i "comitati etici" interni funzionano come strumenti di relazioni pubbliche (ethics washing) più che come meccanismi di governance reale.',
            'La governance pubblica dell\'AI non significa che i governi debbano controllare la tecnologia — significa che le regole fondamentali debbano essere stabilite democraticamente, non dalle aziende che profittano della tecnologia. Come non permettiamo alle aziende farmaceutiche di decidere da sole se i loro farmaci sono sicuri, non dovremmo permettere alle aziende AI di decidere da sole se i loro sistemi sono etici.',
            'Una governance pubblica efficace richiede quattro elementi. Primo: autorità indipendenti con competenze tecniche e potere sanzionatorio reale. Secondo: obblighi di trasparenza che permettano la verifica indipendente (non basta pubblicare principi, bisogna permettere audit). Terzo: diritti esigibili per le persone colpite (non solo il diritto di sapere, ma il diritto di contestare e ottenere rimedi). Quarto: finanziamento pubblico della ricerca indipendente sull\'AI, per ridurre la dipendenza dalla ricerca aziendale.',
            'Un modello interessante è la governance multi-stakeholder: tavoli dove siedono governo, industria, accademia, società civile e rappresentanti delle comunità colpite. Non è perfetto — il potere è spesso sbilanciato a favore dell\'industria — ma è più democratico dell\'autoregolamentazione pura.',
          ],
          keyTakeaways: [
            'L\'autoregolamentazione delle aziende tech ha fallito: l\'etica interna cede agli interessi commerciali',
            'Il problema è strutturale: il mercato premia chi arriva primo, non chi è più responsabile',
            'La governance pubblica richiede autorità indipendenti, trasparenza, diritti esigibili e ricerca pubblica',
            'La governance multi-stakeholder è più democratica, anche se imperfetta',
          ],
          reflection: 'Pensi che le aziende tech siano capaci di autoregolarsi sull\'AI? Se dovessi progettare un\'autorità di governance dell\'AI per il tuo paese, chi ci metteresti dentro? Solo tecnici? Anche filosofi, sociologi, rappresentanti dei cittadini?',
        },
        en: {
          title: 'Self-regulation vs. public governance',
          description: 'Why relying on tech companies\' goodwill is not enough and what is needed for democratic AI governance.',
          body: [
            '"Move fast and break things" — Facebook\'s motto in its early years — summarises Silicon Valley\'s dominant attitude towards regulation: innovation comes first, rules later. Tech companies have promised for years to "self-regulate" through ethical principles, internal committees and voluntary commitments. But history shows that this promise has not been kept.',
            'Google published its "AI Principles" in 2018, committing not to develop AI for weapons, surveillance or technologies that cause harm. That same year, it signed Project Maven with the Pentagon for using AI in military drone image analysis. When employees protested, Google did not renew the contract — but not for ethical principles, rather due to public pressure. In 2020, Google fired Timnit Gebru, co-lead of its AI ethics team, after she published a paper critical of large language models. The message was clear: internal ethics holds only as long as it does not contradict commercial interests.',
            'The problem with self-regulation is structural, not individual. Publicly traded companies have a fiduciary duty to shareholders to maximise profit. Executives who slow development for ethical reasons are replaced by those who don\'t. The market rewards those who arrive first, not those who arrive responsibly. In this context, internal "ethics committees" function as public relations tools (ethics washing) more than real governance mechanisms.',
            'Public AI governance does not mean governments should control technology — it means that fundamental rules should be established democratically, not by the companies that profit from the technology. Just as we do not allow pharmaceutical companies to decide on their own whether their drugs are safe, we should not allow AI companies to decide on their own whether their systems are ethical.',
            'Effective public governance requires four elements. First: independent authorities with technical expertise and real sanctioning power. Second: transparency obligations that allow independent verification (publishing principles is not enough, audits must be permitted). Third: enforceable rights for affected people (not just the right to know, but the right to challenge and obtain remedies). Fourth: public funding of independent AI research, to reduce dependence on corporate research.',
            'An interesting model is multi-stakeholder governance: roundtables where government, industry, academia, civil society and representatives of affected communities sit together. It is not perfect — power is often skewed in favour of industry — but it is more democratic than pure self-regulation.',
          ],
          keyTakeaways: [
            'Tech company self-regulation has failed: internal ethics yields to commercial interests',
            'The problem is structural: the market rewards first movers, not the most responsible',
            'Public governance requires independent authorities, transparency, enforceable rights and public research',
            'Multi-stakeholder governance is more democratic, if imperfect',
          ],
          reflection: 'Do you think tech companies are capable of self-regulating on AI? If you had to design an AI governance authority for your country, who would you include? Only technicians? Also philosophers, sociologists, citizen representatives?',
        },
      },
      resources: [
        { title: 'Google AI Principles — and What Happened After', url: 'https://ai.google/responsibility/principles/', type: 'article' },
        { title: 'Meredith Whittaker — The Steep Cost of Capture', url: 'https://dl.acm.org/doi/10.1145/3351095.3372853', type: 'article' },
        { title: 'Ethics Washing — Ben Wagner', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3288828', type: 'article' },
      ],
    },
    {
      slug: 'governance-partecipativa-cittadini',
      readingTime: 8,
      content: {
        it: {
          title: 'Governance partecipativa e coinvolgimento dei cittadini',
          description: 'Assemblee cittadine, deliberazione pubblica e partecipazione dal basso: come i cittadini possono influenzare le scelte sull\'AI.',
          body: [
            'La regolamentazione dell\'AI non può essere lasciata solo ai tecnici, ai politici o alle aziende. Le decisioni su come l\'AI viene usata nella società riguardano tutti: il lavoratore il cui CV viene filtrato da un algoritmo, il paziente il cui trattamento è influenzato da un sistema predittivo, il cittadino il cui quartiere è monitorato da telecamere con riconoscimento facciale. Eppure, queste persone sono quasi sempre escluse dal processo decisionale. La governance partecipativa propone di cambiare questa dinamica.',
            'Le assemblee cittadine (citizen assemblies) sono lo strumento più promettente. Un gruppo di cittadini, selezionati per sorteggio in modo da essere rappresentativi della popolazione per età, genere, istruzione e provenienza, viene convocato per deliberare su una questione complessa. I partecipanti ricevono informazioni da esperti con prospettive diverse, discutono in piccoli gruppi facilitati e formulano raccomandazioni. Non è democrazia diretta né sondaggio: è deliberazione informata.',
            'L\'Irlanda ha usato le assemblee cittadine per affrontare questioni divisive come il matrimonio omosessuale e l\'aborto — ottenendo risultati che il parlamento non era riuscito a raggiungere in decenni. La Francia ha usato la Convention Citoyenne pour le Climat per elaborare 149 proposte sul cambiamento climatico. Taiwan usa regolarmente la piattaforma Polis per la deliberazione digitale su questioni tecnologiche, permettendo a milioni di cittadini di esprimere preferenze e trovare punti di consenso.',
            'Applicare questi strumenti all\'AI è un\'idea ancora giovane ma con esempi concreti. L\'Ada Lovelace Institute nel Regno Unito ha organizzato assemblee cittadine sul riconoscimento facciale, producendo raccomandazioni che hanno influenzato il dibattito parlamentare. Il progetto ALGO:AWARE dell\'UE ha sperimentato la deliberazione pubblica sugli algoritmi. La città di Amsterdam ha creato un registro pubblico degli algoritmi usati dall\'amministrazione comunale, un esempio di trasparenza che permette ai cittadini di sapere — e quindi di contestare — come l\'AI li riguarda.',
            'Ma la partecipazione non deve essere solo consultiva: deve avere potere reale. Una assemblea cittadina le cui raccomandazioni vengono ignorate è peggio di nessuna assemblea — crea cinismo e sfiducia. Per questo servono meccanismi che garantiscano che le raccomandazioni dei cittadini vengano prese seriamente: obbligo di risposta pubblica, vincoli di implementazione, revisione periodica.',
            'La governance partecipativa dell\'AI non è utopia: è una necessità democratica. Le tecnologie che plasmano la nostra società devono essere governate dalla società — non solo da chi le sviluppa o da chi le regola, ma da tutti noi. Relatronica crede che questo sia possibile e lavora per renderlo reale.',
          ],
          keyTakeaways: [
            'I cittadini sono quasi sempre esclusi dalle decisioni sull\'AI che li riguardano direttamente',
            'Le assemblee cittadine per sorteggio sono lo strumento più promettente di governance partecipativa',
            'Esempi concreti esistono già: Irlanda, Francia, Taiwan, Ada Lovelace Institute, Amsterdam',
            'La partecipazione deve avere potere reale, non essere solo consultiva',
          ],
          reflection: 'Se fossi selezionato per un\'assemblea cittadina sull\'AI, quale tema vorresti affrontare? L\'uso dell\'AI nelle scuole? Nella sanità? Nella polizia? Nei social media? Quali domande faresti agli esperti?',
        },
        en: {
          title: 'Participatory governance and citizen involvement',
          description: 'Citizen assemblies, public deliberation and bottom-up participation: how citizens can influence choices about AI.',
          body: [
            'AI regulation cannot be left solely to technicians, politicians or companies. Decisions about how AI is used in society concern everyone: the worker whose CV is filtered by an algorithm, the patient whose treatment is influenced by a predictive system, the citizen whose neighbourhood is monitored by cameras with facial recognition. Yet these people are almost always excluded from the decision-making process. Participatory governance proposes to change this dynamic.',
            'Citizen assemblies are the most promising tool. A group of citizens, selected by lottery to be representative of the population by age, gender, education and origin, is convened to deliberate on a complex issue. Participants receive information from experts with diverse perspectives, discuss in facilitated small groups and formulate recommendations. It is neither direct democracy nor a poll: it is informed deliberation.',
            'Ireland used citizen assemblies to address divisive issues like same-sex marriage and abortion — achieving results that parliament had failed to reach in decades. France used the Convention Citoyenne pour le Climat to develop 149 proposals on climate change. Taiwan regularly uses the Polis platform for digital deliberation on technological issues, allowing millions of citizens to express preferences and find points of consensus.',
            'Applying these tools to AI is a still-young idea but with concrete examples. The Ada Lovelace Institute in the UK organised citizen assemblies on facial recognition, producing recommendations that influenced the parliamentary debate. The EU\'s ALGO:AWARE project experimented with public deliberation on algorithms. The city of Amsterdam created a public register of algorithms used by the municipal administration, an example of transparency that allows citizens to know — and therefore to challenge — how AI affects them.',
            'But participation must not be merely consultative: it must have real power. A citizen assembly whose recommendations are ignored is worse than no assembly — it creates cynicism and distrust. This is why mechanisms are needed to ensure citizens\' recommendations are taken seriously: obligation for public response, implementation commitments, periodic review.',
            'Participatory AI governance is not utopia: it is a democratic necessity. Technologies that shape our society must be governed by society — not only by those who develop them or those who regulate them, but by all of us. Relatronica believes this is possible and works to make it real.',
          ],
          keyTakeaways: [
            'Citizens are almost always excluded from AI decisions that directly affect them',
            'Sortition-based citizen assemblies are the most promising participatory governance tool',
            'Concrete examples already exist: Ireland, France, Taiwan, Ada Lovelace Institute, Amsterdam',
            'Participation must have real power, not be merely consultative',
          ],
          reflection: 'If you were selected for a citizen assembly on AI, which topic would you want to address? AI use in schools? In healthcare? In policing? In social media? What questions would you ask the experts?',
        },
      },
      resources: [
        { title: 'Ada Lovelace Institute — Citizens\' Biometrics Council', url: 'https://www.adalovelaceinstitute.org/project/citizens-biometrics-council/', type: 'article' },
        { title: 'Amsterdam Algorithm Register', url: 'https://algoritmeregister.amsterdam.nl/en/ai-register/', type: 'tool' },
        { title: 'Taiwan\'s Digital Democracy — Audrey Tang', url: 'https://info.vtaiwan.tw/', type: 'tool' },
      ],
    },
  ],
};
