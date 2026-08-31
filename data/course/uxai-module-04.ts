import { CourseModule, ModuleQuiz, ModuleExercise } from '@/types/course';

const exercise04: ModuleExercise = {
  content: {
    it: {
      title: 'Ethical design review completa',
      description: 'Esegui una review etica end-to-end su una feature AI — come faresti in un design critique, ma con la checklist del Modulo 04.',
      duration: '60 min',
      materials: [
        'Checklist del Modulo 04 (trasparenza, consenso, equità, accessibilità, worst case)',
        'Una feature AI da revieware (reale o ipotetica)',
        'Documento condiviso per findings e raccomandazioni',
      ],
      steps: [
        'Scegli una feature AI ad alto impatto: raccomandazioni, scoring, chatbot, generazione contenuti, personalizzazione prezzi. Definisci contesto: settore, utenti target, dati usati.',
        'Scorri la checklist completa. Per ogni sezione (trasparenza, consenso, equità, accessibilità, sicurezza) assegna: ✅ OK | ⚠️ Gap | ❌ Critico. Documenta evidenza per ogni ⚠️ e ❌.',
        'Scrivi 3 scenari worst case: cosa succede se il modello discrimina, allucina, viene usato fuori contesto? L\'interfaccia lo rende visibile? L\'utente può segnalarlo?',
        'Prioritizza i finding: must-fix pre-launch, should-fix sprint prossimo, monitor post-launch. Per ogni must-fix, proponi soluzione UX concreta.',
        'Prepara un one-pager per stakeholder: executive summary (5 righe), rischi top 3, raccomandazioni, alternativa "no AI" se applicabile.',
      ],
      output: 'Report di ethical design review con checklist compilata, 3 worst case, priorità e one-pager per stakeholder.',
      debrief: 'Quale finding è più difficile da far accettare al team? C\'è un must-fix che potresti implementare tu senza attendere approvazioni? Conserverai questa checklist per i prossimi progetti?',
    },
    en: {
      title: 'Full ethical design review',
      description: 'Run an end-to-end ethical review on an AI feature — as you would in a design critique, but with the Module 04 checklist.',
      duration: '60 min',
      materials: [
        'Module 04 checklist (transparency, consent, fairness, accessibility, worst case)',
        'An AI feature to review (real or hypothetical)',
        'Shared document for findings and recommendations',
      ],
      steps: [
        'Choose a high-impact AI feature: recommendations, scoring, chatbot, content generation, price personalisation. Define context: sector, target users, data used.',
        'Run through the full checklist. For each section (transparency, consent, fairness, accessibility, safety) assign: ✅ OK | ⚠️ Gap | ❌ Critical. Document evidence for every ⚠️ and ❌.',
        'Write 3 worst case scenarios: what happens if the model discriminates, hallucinates, is used out of context? Does the interface make it visible? Can the user report it?',
        'Prioritise findings: must-fix pre-launch, should-fix next sprint, monitor post-launch. For each must-fix, propose a concrete UX solution.',
        'Prepare a one-pager for stakeholders: executive summary (5 lines), top 3 risks, recommendations, "no AI" alternative if applicable.',
      ],
      output: 'Ethical design review report with completed checklist, 3 worst cases, priorities and stakeholder one-pager.',
      debrief: 'Which finding is hardest to get the team to accept? Is there a must-fix you could implement yourself without waiting for approvals? Will you keep this checklist for future projects?',
    },
  },
};

const quiz04: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Pratica responsabile',
      description: 'Verifica la tua comprensione del Modulo 04: checklist e audit, comunicare con stakeholder, EU AI Act e framework.',
    },
    en: {
      title: 'Quiz — Responsible practice',
      description: 'Test your understanding of Module 04: checklists and audits, communicating with stakeholders, EU AI Act and frameworks.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'uxai-q04-01',
      content: {
        it: {
          question: 'Cosa include un ethical design audit di una feature AI?',
          options: [
            'Solo un test di usabilità con 5 utenti',
            'Valutazione sistematica di trasparenza, consenso, equità, accessibilità, fallback e worst case',
            'Verifica che il modello abbia accuracy > 95%',
            'Controllo che il badge "AI" sia presente',
          ],
          explanation: 'Un audit etico UX va oltre l\'usabilità: verifica se l\'interfaccia rispetta autonomia, inclusione e sicurezza — con scenari di fallimento, non solo happy path.',
        },
        en: {
          question: 'What does an ethical design audit of an AI feature include?',
          options: [
            'Only a usability test with 5 users',
            'Systematic evaluation of transparency, consent, fairness, accessibility, fallback and worst case',
            'Checking that the model has accuracy > 95%',
            'Checking that the "AI" badge is present',
          ],
          explanation: 'A UX ethical audit goes beyond usability: it verifies whether the interface respects autonomy, inclusion and safety — with failure scenarios, not just happy path.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q04-02',
      content: {
        it: {
          question: 'Come comunicare efficacemente rischi etici a stakeholder non tecnici?',
          options: [
            'Usare solo terminologia legale e riferimenti a paper accademici',
            'Tradurre rischi in scenari utente concreti, impatto su metriche e alternative di design',
            'Evitare la conversazione fino al lancio',
            'Minimizzare i rischi per non bloccare la roadmap',
          ],
          explanation: 'PM e executive rispondono meglio a storie: "Maria, 67 anni, non può completare la verifica ID" che a "bias nel modello di riconoscimento facciale". Il designer fa da traduttore.',
        },
        en: {
          question: 'How to effectively communicate ethical risks to non-technical stakeholders?',
          options: [
            'Use only legal terminology and academic paper references',
            'Translate risks into concrete user scenarios, impact on metrics and design alternatives',
            'Avoid the conversation until launch',
            'Minimise risks so as not to block the roadmap',
          ],
          explanation: 'PMs and executives respond better to stories: "Maria, 67, cannot complete ID verification" than "bias in facial recognition model". The designer acts as translator.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q04-03',
      content: {
        it: {
          question: 'Cosa stabilisce l\'EU AI Act per i sistemi AI ad alto rischio riguardo agli utenti?',
          options: [
            'Che possono operare senza supervisione umana',
            'Requisiti di trasparenza, supervisione umana, accuratezza e robustezza — rilevanti anche per chi progetta l\'interfaccia',
            'Che sono vietati in Europa',
            'Che servono solo per applicazioni militari',
          ],
          explanation: 'L\'AI Act impone obblighi su trasparenza, human oversight, documentazione. Il designer contribuisce implementando disclosure, override e feedback — requisiti che diventano scelte di interfaccia.',
        },
        en: {
          question: 'What does the EU AI Act establish for high-risk AI systems regarding users?',
          options: [
            'That they can operate without human supervision',
            'Requirements for transparency, human oversight, accuracy and robustness — relevant also for those designing the interface',
            'That they are banned in Europe',
            'That they only apply to military applications',
          ],
          explanation: 'The AI Act imposes obligations on transparency, human oversight, documentation. The designer contributes by implementing disclosure, override and feedback — requirements that become interface choices.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q04-04',
      content: {
        it: {
          question: 'Quale documento interno aiuta il team a decisioni coerenti sull\'IA?',
          options: [
            'Un documento di 200 pagine che nessuno legge',
            'Linee guida di design AI concise, con esempi, anti-pattern e criteri di escalation',
            'Solo la privacy policy legale',
            'Il prompt engineering guide per developer',
          ],
          explanation: 'Linee guida UX per AI — quando usare badge, come progettare opt-in, template di disclosure, checklist pre-ship — rendono l\'etica operativa, non aspirazionale.',
        },
        en: {
          question: 'Which internal document helps the team make consistent AI decisions?',
          options: [
            'A 200-page document nobody reads',
            'Concise AI design guidelines with examples, anti-patterns and escalation criteria',
            'Only the legal privacy policy',
            'The prompt engineering guide for developers',
          ],
          explanation: 'UX guidelines for AI — when to use badges, how to design opt-in, disclosure templates, pre-ship checklists — make ethics operational, not aspirational.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'uxai-q04-05',
      content: {
        it: {
          question: 'Cosa significa "ethical off-switch" nel design di prodotti AI?',
          options: [
            'Spegnere i server di notte',
            'Progettare la possibilità di disattivare rapidamente feature AI problematiche senza redeploy completo',
            'Eliminare tutte le feature AI permanentemente',
            'Nascondere la feature nelle impostazioni',
          ],
          explanation: 'Quando un modello fallisce in produzione (bias, allucinazioni, danno), il team deve poter disattivare la feature AI e fallback su flusso umano/regole — il designer progetta questa transizione per l\'utente.',
        },
        en: {
          question: 'What does "ethical off-switch" mean in AI product design?',
          options: [
            'Turning off servers at night',
            'Designing the ability to quickly disable problematic AI features without complex redeploy',
            'Permanently eliminating all AI features',
            'Hiding the feature in settings',
          ],
          explanation: 'When a model fails in production (bias, hallucinations, harm), the team must be able to disable the AI feature and fallback to human/rule flow — the designer designs this transition for the user.',
        },
      },
      correctAnswer: 1,
    },
  ],
};

export const uxaiModule04: CourseModule = {
  slug: 'pratica-responsabile',
  number: '04',
  color: 'green',
  iconName: 'Shield',
  content: {
    it: {
      title: 'Pratica responsabile',
      description: 'Checklist, audit etico, comunicazione con stakeholder, EU AI Act e framework operativi — portare l\'etica nel lavoro quotidiano.',
    },
    en: {
      title: 'Responsible practice',
      description: 'Checklists, ethical audit, stakeholder communication, EU AI Act and operational frameworks — bringing ethics into daily work.',
    },
  },
  quiz: quiz04,
  exercise: exercise04,
  lessons: [
    {
      slug: 'checklist-e-audit-etico',
      readingTime: 8,
      content: {
        it: {
          title: 'Checklist e audit etico del design',
          description: 'Un framework operativo da applicare prima di ogni ship — o quando qualcosa va storto.',
          body: [
            'L\'etica diventa concreta quando diventa checklist. Non sostituisce il giudizio professionale, ma assicura che domande critiche non vengano saltate nella fretta dello sprint. Ecco un framework che puoi adattare al tuo team — chiamalo "AI UX Ethics Review".',
            'Trasparenza: l\'utente sa che c\'è AI? Sa cosa fa e cosa non fa? I limiti sono comunicati? Disclosure è contestuale (non solo footer)? Se qualcosa è generato, è indicato chiaramente?',
            'Consenso e controllo: opt-in o opt-out esplicito? Controllo granulare? Possibilità di disattivare? Dati usati per AI dichiarati nel flusso (non solo privacy policy)? Diritto di correzione e segnalazione errori?',
            'Equità e inclusione: testato con utenti diversi per età, disabilità, lingua, contesto socioeconomico? Metriche di equità monitorate? Fallback per riconoscimento/classificazione fallita? Messaggi di errore non colpevolizzanti?',
            'Accessibilità: output AI validato per WCAG? Alt text, struttura, contrasto, plain language verificati? Test con screen reader e keyboard-only?',
            'Sicurezza e worst case: cosa succede se il modello allucina, discrimina, viene usato fuori contesto? Esiste off-switch? Escalation umana? Piano per incident response comunicato al team design?',
            'Documenta ogni review — anche brevemente. Quando qualcosa va storto post-lancio, avere traccia di "abbiamo chiesto X, il team ha deciso Y" protegge il designer e migliora processi futuri.',
          ],
          keyTakeaways: [
            'Una checklist strutturata previene che domande etiche vengano saltate',
            'Copri trasparenza, consenso, equità, accessibilità e worst case',
            'Documentare le review protegge il team e migliora i processi',
            'Adatta il framework al contesto — sanità ≠ e-commerce, ma i principi restano',
          ],
          reflection: 'Prendi una feature AI reale o ipotetica del tuo lavoro. Scorri la checklist sopra: quante domande hanno risposta "sì"? Quali gap colmereste per primi?',
        },
        en: {
          title: 'Checklist and ethical design audit',
          description: 'An operational framework to apply before every ship — or when something goes wrong.',
          body: [
            'Ethics becomes concrete when it becomes a checklist. It does not replace professional judgement, but ensures critical questions are not skipped in the sprint rush. Here is a framework you can adapt for your team — call it "AI UX Ethics Review".',
            'Transparency: does the user know there is AI? Do they know what it does and does not do? Are limits communicated? Is disclosure contextual (not just footer)? If something is generated, is it clearly indicated?',
            'Consent and control: explicit opt-in or opt-out? Granular control? Ability to disable? Data used for AI declared in the flow (not just privacy policy)? Right to correction and error reporting?',
            'Fairness and inclusion: tested with diverse users by age, disability, language, socioeconomic context? Equity metrics monitored? Fallback for failed recognition/classification? Non-blaming error messages?',
            'Accessibility: AI output validated for WCAG? Alt text, structure, contrast, plain language verified? Test with screen reader and keyboard-only?',
            'Safety and worst case: what happens if the model hallucinates, discriminates, is used out of context? Is there an off-switch? Human escalation? Incident response plan communicated to the design team?',
            'Document every review — even briefly. When something goes wrong post-launch, having a record of "we asked X, the team decided Y" protects the designer and improves future processes.',
          ],
          keyTakeaways: [
            'A structured checklist prevents ethical questions from being skipped',
            'Cover transparency, consent, fairness, accessibility and worst case',
            'Documenting reviews protects the team and improves processes',
            'Adapt the framework to context — healthcare ≠ e-commerce, but principles remain',
          ],
          reflection: 'Take a real or hypothetical AI feature from your work. Run through the checklist above: how many questions get a "yes"? Which gaps would you fill first?',
        },
      },
      resources: [
        { title: 'Google PAIR — Workbook and worksheets', url: 'https://pair.withgoogle.com/', type: 'tool' },
        { title: 'IF — Consequence scanning', url: 'https://projects.if.design/consequence-scanning/', type: 'tool' },
        { title: 'Ada Lovelace Institute — Algorithmic impact assessment', url: 'https://www.adalovelaceinstitute.org/', type: 'article' },
      ],
    },
    {
      slug: 'comunicare-e-dire-no',
      readingTime: 7,
      content: {
        it: {
          title: 'Comunicare con stakeholder e dire no',
          description: 'Come portare rischi etici in sala riunioni — e proporre alternative che il business capisce.',
          body: [
            'Dire no a una feature AI può sembrare carriera-suicida. Ma dire no senza alternative è poco efficace. La competenza del designer etico è tradurre rischi in linguaggio che PM, legal e C-level capiscono: impatto su utenti, rischio reputazionale, compliance, costi di remediation post-incidente.',
            'Usa scenari narrativi, non abstract. Invece di "c\'è bias nel modello", mostra: "Elena, madre single, viene classificata ad alto rischio credito e vede un messaggio generico di rifiuto — nessuna spiegazione, nessun ricorso. Headline: [Nome banca] discrimina con AI". Storyboard o journey map funzionano meglio di slide con bullet etici.',
            'Collega a regolamentazione e precedenti: EU AI Act, GDPR Art. 22, sentenza Air Canada chatbot, multe FTC per dark patterns. Non come minaccia legale astratta, ma come "questo pattern ci espone a rischio simile a [caso noto]".',
            'Proponi alternative concrete: flusso rule-based testabile in 2 settimane, AI assistiva con human-in-the-loop invece di decisione automatica, MVP senza personalizzazione opaca, pilot limitato con metriche di equità. Il no diventa fork, non blocco.',
            'Costruisci alleanze: legal, compliance, accessibility lead spesso condividono preoccupazioni ma mancano di linguaggio UX. Researcher con dati qualitativi su utenti esclusi. Engineering che conosce limiti del modello. Il designer può orchestrare una review multidisciplinare.',
            'Quando il no non passa, documenta dissenso per iscritto (email, ticket, commento in Figma). Non per paranoia — per protezione professionale e traccia per future revisioni. A volte il danno post-lancio conferma il warning e apre spazio per redesign.',
          ],
          keyTakeaways: [
            'Traduci rischi etici in scenari utente e impatto business',
            'Proponi alternative concrete — il no efficace è un fork, non un blocco',
            'Alleanze con legal, a11y e research amplificano la voce del designer',
            'Documenta dissenso per protezione professionale e apprendimento',
          ],
          reflection: 'Pensa a una decisione prodotto recente con cui non eri d\'accordo. Come l\'avresti argomentata diversamente usando scenario + alternativa + regolamentazione?',
        },
        en: {
          title: 'Communicating with stakeholders and saying no',
          description: 'How to bring ethical risks into meetings — and propose alternatives the business understands.',
          body: [
            'Saying no to an AI feature can seem career-suicidal. But saying no without alternatives is ineffective. The ethical designer\'s skill is translating risks into language PMs, legal and C-level understand: impact on users, reputational risk, compliance, post-incident remediation costs.',
            'Use narrative scenarios, not abstractions. Instead of "there is bias in the model", show: "Elena, single mother, is classified as high credit risk and sees a generic rejection message — no explanation, no appeal. Headline: [Bank name] discriminates with AI". Storyboard or journey map work better than slides with ethical bullets.',
            'Link to regulation and precedents: EU AI Act, GDPR Art. 22, Air Canada chatbot ruling, FTC fines for dark patterns. Not as abstract legal threat, but as "this pattern exposes us to risk similar to [known case]".',
            'Propose concrete alternatives: rule-based flow testable in 2 weeks, assistive AI with human-in-the-loop instead of automatic decision, MVP without opaque personalisation, limited pilot with equity metrics. No becomes a fork, not a block.',
            'Build alliances: legal, compliance, accessibility leads often share concerns but lack UX language. Researchers with qualitative data on excluded users. Engineering that knows model limits. The designer can orchestrate a multidisciplinary review.',
            'When no does not pass, document dissent in writing (email, ticket, comment in Figma). Not from paranoia — for professional protection and trace for future revisions. Sometimes post-launch harm confirms the warning and opens space for redesign.',
          ],
          keyTakeaways: [
            'Translate ethical risks into user scenarios and business impact',
            'Propose concrete alternatives — effective no is a fork, not a block',
            'Alliances with legal, a11y and research amplify the designer\'s voice',
            'Document dissent for professional protection and learning',
          ],
          reflection: 'Think of a recent product decision you disagreed with. How would you have argued differently using scenario + alternative + regulation?',
        },
      },
      resources: [
        { title: 'Harvard Business Review — How to push back on unethical requests', url: 'https://hbr.org/', type: 'article' },
        { title: 'Air Canada chatbot case — CBC News', url: 'https://www.cbc.ca/news/business/air-canada-chatbot-1.7105935', type: 'article' },
        { title: 'Design Justice Network — Principles', url: 'https://designjustice.org/read-the-principles', type: 'article' },
      ],
    },
    {
      slug: 'eu-ai-act-e-framework',
      readingTime: 8,
      content: {
        it: {
          title: 'EU AI Act e framework per designer',
          description: 'Cosa cambia per chi progetta interfacce — e come tradurre principi etici in linee guida di team.',
          body: [
            'L\'EU AI Act (in vigore progressivamente dal 2024-2026) classifica i sistemi AI per rischio. Per designer, la distinzione rilevante è tra rischio minimo/limitato e alto rischio: sanità, HR, credito, istruzione, giustizia, infrastrutture critiche. In questi domini, requisiti di trasparenza e supervisione umana diventano obbligatori — e si traducono in scelte di interfaccia.',
            'Obblighi che impattano UX: informare che l\'utente interagisce con AI; spiegare decisioni automatizzate in linguaggio comprensibile; garantire supervisione umana per decisioni ad alto impatto; consentire override e ricorso; documentare il sistema per audit. Non sono solo task legali — sono pattern di design.',
            'Anche fuori dall\'alto rischio, l\'AI Act impone trasparenza per AI generativa (deepfake, contenuti sintetici) e per chatbot — obbligo di disclosure che il designer implementa. Ignorare questi requisiti non è "zona grigia creativa" — è non-compliance.',
            'Framework utili oltre la legge: Google PAIR (People + AI Research), IF Design Patterns, Microsoft Responsible AI Standard, Design Justice Network principles. Nessuno è perfetto, ma forniscono vocabolario condiviso e pattern riutilizzabili.',
            'Crea linee guida interne concise per il tuo team: quando usare badge AI, template di disclosure, pattern opt-in approvati, anti-pattern vietati (fake urgency AI, prezzi opachi), criteri di escalation ("se coinvolge salute/credito/HR → review obbligatoria"). Aggiornale quando cambiano regolamenti o impari da incidenti.',
            'L\'etica del designer AI non finisce con un corso — evolve con tecnologia e norme. Iscriviti a newsletter (Ada Lovelace Institute, AI Now, Relatronica), partecipa a community, condividi casi con colleghi. La solidarietà professionale riduce la pressione di cedere su scelte problematiche.',
          ],
          keyTakeaways: [
            'L\'EU AI Act traduce obblighi legali in pattern UX concreti',
            'Sistemi ad alto rischio richiedono disclosure, spiegazione e supervisione umana',
            'Linee guida interne rendono l\'etica operativa per tutto il team',
            'Framework come PAIR e Design Justice integrano compliance e valori',
          ],
          reflection: 'Il tuo team ha linee guida per feature AI? Se dovessi scriverne una pagina domani, quali tre regole non negoziabili includeresti?',
        },
        en: {
          title: 'EU AI Act and frameworks for designers',
          description: 'What changes for those designing interfaces — and how to translate ethical principles into team guidelines.',
          body: [
            'The EU AI Act (phasing in from 2024-2026) classifies AI systems by risk. For designers, the relevant distinction is between minimal/limited and high risk: healthcare, HR, credit, education, justice, critical infrastructure. In these domains, transparency and human oversight requirements become mandatory — and translate into interface choices.',
            'Obligations impacting UX: inform that the user interacts with AI; explain automated decisions in understandable language; ensure human oversight for high-impact decisions; allow override and appeal; document the system for audit. These are not just legal tasks — they are design patterns.',
            'Even outside high risk, the AI Act requires transparency for generative AI (deepfakes, synthetic content) and chatbots — disclosure obligations the designer implements. Ignoring these requirements is not "creative grey zone" — it is non-compliance.',
            'Useful frameworks beyond law: Google PAIR (People + AI Research), IF Design Patterns, Microsoft Responsible AI Standard, Design Justice Network principles. None is perfect, but they provide shared vocabulary and reusable patterns.',
            'Create concise internal guidelines for your team: when to use AI badges, disclosure templates, approved opt-in patterns, forbidden anti-patterns (AI fake urgency, opaque pricing), escalation criteria ("if it involves health/credit/HR → mandatory review"). Update them when regulations change or you learn from incidents.',
            'AI designer ethics does not end with a course — it evolves with technology and norms. Subscribe to newsletters (Ada Lovelace Institute, AI Now, Relatronica), join communities, share cases with colleagues. Professional solidarity reduces pressure to yield on problematic choices.',
          ],
          keyTakeaways: [
            'The EU AI Act translates legal obligations into concrete UX patterns',
            'High-risk systems require disclosure, explanation and human oversight',
            'Internal guidelines make ethics operational for the whole team',
            'Frameworks like PAIR and Design Justice integrate compliance and values',
          ],
          reflection: 'Does your team have guidelines for AI features? If you had to write one page tomorrow, what three non-negotiable rules would you include?',
        },
      },
      resources: [
        { title: 'EU AI Act — Official text and guides', url: 'https://artificialintelligenceact.eu/', type: 'article' },
        { title: 'Google PAIR — Guidebook', url: 'https://pair.withgoogle.com/guidebook/', type: 'book' },
        { title: 'Design Justice Network', url: 'https://designjustice.org/', type: 'article' },
      ],
    },
  ],
};
