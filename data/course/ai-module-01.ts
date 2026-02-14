import { CourseModule, ModuleQuiz } from '@/types/course';

const quiz01: ModuleQuiz = {
  content: {
    it: {
      title: 'Quiz — Capire l\'intelligenza artificiale',
      description: 'Verifica la tua comprensione dei concetti chiave del Modulo 01: cos\'è l\'AI, come funziona il machine learning e cosa può (e non può) fare l\'AI generativa.',
    },
    en: {
      title: 'Quiz — Understanding artificial intelligence',
      description: 'Test your understanding of Module 01 key concepts: what AI is, how machine learning works, and what generative AI can (and cannot) do.',
    },
  },
  passingScore: 60,
  questions: [
    {
      id: 'ai-q01-01',
      content: {
        it: {
          question: 'Qual è la definizione più accurata dell\'intelligenza artificiale attuale?',
          options: [
            'Una macchina che pensa come un essere umano',
            'Un software che apprende da pattern nei dati per fare previsioni o generare output',
            'Un programma che è consapevole di sé stesso',
            'Un computer che supera l\'intelligenza umana in ogni campo',
          ],
          explanation: 'L\'AI attuale (narrow AI) non "pensa" né è consapevole. È un insieme di tecniche statistiche e computazionali che riconoscono pattern nei dati e producono output basati su quei pattern.',
        },
        en: {
          question: 'What is the most accurate definition of current artificial intelligence?',
          options: [
            'A machine that thinks like a human being',
            'Software that learns from patterns in data to make predictions or generate output',
            'A program that is self-aware',
            'A computer that surpasses human intelligence in every field',
          ],
          explanation: 'Current AI (narrow AI) does not "think" or have awareness. It is a set of statistical and computational techniques that recognise patterns in data and produce output based on those patterns.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q01-02',
      content: {
        it: {
          question: 'Cosa significa "garbage in, garbage out" nel contesto del machine learning?',
          options: [
            'I computer producono troppi rifiuti elettronici',
            'Gli algoritmi funzionano solo con i dati più recenti',
            'Se i dati di addestramento sono distorti o incompleti, anche l\'output del modello sarà distorto',
            'I modelli vanno riaddestrati ogni settimana',
          ],
          explanation: 'Un modello di machine learning è tanto buono quanto i dati su cui è addestrato. Dati incompleti, distorti o non rappresentativi producono modelli che replicano e amplificano quegli stessi problemi.',
        },
        en: {
          question: 'What does "garbage in, garbage out" mean in the context of machine learning?',
          options: [
            'Computers produce too much electronic waste',
            'Algorithms only work with the most recent data',
            'If training data is biased or incomplete, the model\'s output will also be biased',
            'Models need to be retrained every week',
          ],
          explanation: 'A machine learning model is only as good as the data it is trained on. Incomplete, biased or unrepresentative data produces models that replicate and amplify those same problems.',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'ai-q01-03',
      content: {
        it: {
          question: 'Quale affermazione sull\'AI generativa è corretta?',
          options: [
            'Capisce il significato di ciò che produce',
            'Produce testo originale attraverso un processo creativo simile a quello umano',
            'Genera output statisticamente probabili basandosi su pattern appresi dai dati di addestramento',
            'Non può mai produrre informazioni false',
          ],
          explanation: 'L\'AI generativa non "capisce" né "crea" nel senso umano. Produce output calcolando la sequenza statisticamente più probabile in base ai pattern appresi, il che può includere informazioni false (hallucinations).',
        },
        en: {
          question: 'Which statement about generative AI is correct?',
          options: [
            'It understands the meaning of what it produces',
            'It produces original text through a creative process similar to the human one',
            'It generates statistically probable output based on patterns learned from training data',
            'It can never produce false information',
          ],
          explanation: 'Generative AI does not "understand" or "create" in the human sense. It produces output by calculating the statistically most probable sequence based on learned patterns, which may include false information (hallucinations).',
        },
      },
      correctAnswer: 2,
    },
    {
      id: 'ai-q01-04',
      content: {
        it: {
          question: 'Perché è importante distinguere tra "narrow AI" e "general AI"?',
          options: [
            'Perché la general AI esiste già ma è segreta',
            'Perché confonderle genera paure infondate e aspettative irrealistiche sull\'AI attuale',
            'Perché la narrow AI è più pericolosa della general AI',
            'La distinzione non è importante, sono la stessa cosa',
          ],
          explanation: 'La narrow AI (che esiste oggi) è specializzata in compiti specifici. La general AI (che non esiste) sarebbe un\'intelligenza equivalente a quella umana. Confondere le due genera sia paure apocalittiche infondate sia un\'eccessiva fiducia nelle capacità dei sistemi attuali.',
        },
        en: {
          question: 'Why is it important to distinguish between "narrow AI" and "general AI"?',
          options: [
            'Because general AI already exists but is kept secret',
            'Because confusing them generates unfounded fears and unrealistic expectations about current AI',
            'Because narrow AI is more dangerous than general AI',
            'The distinction is not important, they are the same thing',
          ],
          explanation: 'Narrow AI (which exists today) is specialised in specific tasks. General AI (which does not exist) would be intelligence equivalent to human intelligence. Confusing the two generates both unfounded apocalyptic fears and excessive confidence in current systems\' capabilities.',
        },
      },
      correctAnswer: 1,
    },
    {
      id: 'ai-q01-05',
      content: {
        it: {
          question: 'Qual è il ruolo del lavoro umano nella creazione dei sistemi di AI?',
          options: [
            'L\'AI è completamente autonoma e non richiede lavoro umano',
            'Il lavoro umano serve solo nella fase iniziale di programmazione',
            'Dietro ogni sistema di AI c\'è un\'enorme quantità di lavoro umano: etichettatura dati, moderazione, valutazione',
            'Solo i ricercatori universitari contribuiscono allo sviluppo dell\'AI',
          ],
          explanation: 'L\'AI dipende da un\'infrastruttura massiccia di lavoro umano spesso invisibile: data labelers che etichettano milioni di immagini, moderatori che filtrano contenuti tossici, crowd workers che valutano la qualità degli output. Questo lavoro è spesso sottopagato e svolto nel Sud globale.',
        },
        en: {
          question: 'What is the role of human labour in creating AI systems?',
          options: [
            'AI is completely autonomous and requires no human labour',
            'Human labour is only needed in the initial programming phase',
            'Behind every AI system there is an enormous amount of human labour: data labelling, moderation, evaluation',
            'Only university researchers contribute to AI development',
          ],
          explanation: 'AI depends on a massive infrastructure of often invisible human labour: data labellers who tag millions of images, moderators who filter toxic content, crowd workers who evaluate output quality. This work is often underpaid and performed in the Global South.',
        },
      },
      correctAnswer: 2,
    },
  ],
};

export const aiModule01: CourseModule = {
  slug: 'capire-intelligenza-artificiale',
  number: '01',
  color: 'purple',
  iconName: 'Brain',
  content: {
    it: {
      title: 'Capire l\'intelligenza artificiale',
      description: 'Cos\'è davvero l\'AI, come funziona il machine learning, cosa può e non può fare l\'AI generativa — oltre l\'hype e le paure.',
    },
    en: {
      title: 'Understanding artificial intelligence',
      description: 'What AI really is, how machine learning works, what generative AI can and cannot do — beyond the hype and the fears.',
    },
  },
  quiz: quiz01,
  lessons: [
    {
      slug: 'cosa-e-davvero-intelligenza-artificiale',
      readingTime: 8,
      content: {
        it: {
          title: 'Cos\'è davvero l\'intelligenza artificiale',
          description: 'Smontare il mito della macchina pensante: cosa l\'AI è, cosa non è e perché la narrazione conta.',
          body: [
            'Quando senti parlare di "intelligenza artificiale", cosa immagini? Un robot che ragiona come un essere umano? Un computer che prova emozioni? Un\'entità che sta per superarci e renderci obsoleti? Se la tua immagine mentale assomiglia più alla fantascienza che alla realtà, non sei solo: è esattamente così che l\'AI viene raccontata dalla maggior parte dei media, delle aziende tech e persino di alcuni ricercatori.',
            'La verità è molto più prosaica — e per certi versi più interessante. L\'intelligenza artificiale, come esiste oggi, non è "intelligente" nel senso umano del termine. Non pensa, non capisce, non prova emozioni, non ha obiettivi propri. È un insieme di tecniche matematiche e computazionali che permettono ai computer di riconoscere pattern nei dati e produrre output basati su quei pattern. Quando un sistema di AI "riconosce" un volto in una foto, non "vede" la persona: calcola la probabilità che un certo insieme di pixel corrisponda a un pattern che ha incontrato milioni di volte nei dati di addestramento.',
            'Questa distinzione non è pedanteria accademica: ha conseguenze enormi sul modo in cui regoliamo, usiamo e pensiamo a queste tecnologie. Se crediamo che l\'AI "pensi", potremmo affidarle decisioni che non dovrebbe prendere — come stabilire se un detenuto merita la libertà condizionale. Se crediamo che l\'AI sia "solo matematica", potremmo sottovalutare il suo impatto reale sulla vita delle persone.',
            'La studiosa Kate Crawford usa un\'immagine efficace: l\'AI non è né intelligente né artificiale. Non è intelligente perché non ha comprensione; non è artificiale perché dipende interamente da risorse materiali (terre rare, energia, acqua) e lavoro umano (data labelers, moderatori, crowd workers). È un sistema socio-tecnico, non un\'entità autonoma.',
            'Capire cosa l\'AI è davvero è il primo passo per poter parlare in modo sensato del suo impatto sulla società. Non si tratta di essere "pro" o "contro" l\'AI — si tratta di avere gli strumenti per distinguere tra ciò che è reale e ciò che è marketing, tra ciò che è possibile e ciò che è desiderabile.',
            'Nel resto di questo modulo esploreremo come funzionano concretamente queste tecnologie — dal machine learning ai Large Language Models — per costruire una comprensione solida su cui basare le conversazioni dei moduli successivi.',
          ],
          keyTakeaways: [
            'L\'AI attuale non "pensa" né "capisce": riconosce pattern statistici nei dati',
            'La narrazione sull\'AI influenza profondamente come la regoliamo e usiamo',
            'L\'AI è un sistema socio-tecnico: dipende da risorse materiali e lavoro umano',
            'Capire cosa l\'AI è davvero è il prerequisito per un dibattito informato',
          ],
          reflection: 'Ripensa all\'ultima volta che hai letto un articolo sull\'AI. Il linguaggio usato era accurato o antropomorfizzava la tecnologia? ("L\'AI ha deciso", "l\'AI pensa che", "l\'AI vuole"). Come cambia la tua percezione se sostituisci "l\'AI" con "un software che calcola probabilità"?',
        },
        en: {
          title: 'What artificial intelligence really is',
          description: 'Dismantling the myth of the thinking machine: what AI is, what it isn\'t, and why the narrative matters.',
          body: [
            'When you hear about "artificial intelligence", what do you picture? A robot that reasons like a human? A computer that feels emotions? An entity that is about to surpass us and make us obsolete? If your mental image resembles science fiction more than reality, you\'re not alone: that is exactly how AI is portrayed by most media, tech companies and even some researchers.',
            'The truth is much more prosaic — and in some ways more interesting. Artificial intelligence, as it exists today, is not "intelligent" in the human sense. It does not think, does not understand, does not feel emotions, does not have its own goals. It is a set of mathematical and computational techniques that allow computers to recognise patterns in data and produce output based on those patterns. When an AI system "recognises" a face in a photo, it does not "see" the person: it calculates the probability that a certain set of pixels matches a pattern it has encountered millions of times in training data.',
            'This distinction is not academic pedantry: it has enormous consequences for how we regulate, use and think about these technologies. If we believe AI "thinks", we might entrust it with decisions it should not make — like determining whether a prisoner deserves parole. If we believe AI is "just maths", we might underestimate its real impact on people\'s lives.',
            'Scholar Kate Crawford uses an effective image: AI is neither intelligent nor artificial. It is not intelligent because it has no understanding; it is not artificial because it depends entirely on material resources (rare earths, energy, water) and human labour (data labellers, moderators, crowd workers). It is a socio-technical system, not an autonomous entity.',
            'Understanding what AI really is constitutes the first step towards being able to talk sensibly about its impact on society. This is not about being "pro" or "against" AI — it is about having the tools to distinguish between what is real and what is marketing, between what is possible and what is desirable.',
            'In the rest of this module, we will explore how these technologies actually work — from machine learning to Large Language Models — to build a solid understanding on which to base the conversations of the following modules.',
          ],
          keyTakeaways: [
            'Current AI does not "think" or "understand": it recognises statistical patterns in data',
            'The narrative around AI profoundly influences how we regulate and use it',
            'AI is a socio-technical system: it depends on material resources and human labour',
            'Understanding what AI really is constitutes a prerequisite for an informed debate',
          ],
          reflection: 'Think about the last time you read an article about AI. Was the language accurate or did it anthropomorphise the technology? ("AI decided", "AI thinks that", "AI wants"). How does your perception change if you replace "AI" with "software that calculates probabilities"?',
        },
      },
      resources: [
        { title: 'Kate Crawford — Atlas of AI', url: 'https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/', type: 'book' },
        { title: 'AI Is Not What You Think — Melanie Mitchell', url: 'https://melaniemitchell.me/aibook/', type: 'book' },
        { title: 'What Is AI? — MIT Technology Review', url: 'https://www.technologyreview.com/topic/artificial-intelligence/', type: 'article' },
      ],
    },
    {
      slug: 'machine-learning-e-dati',
      readingTime: 9,
      content: {
        it: {
          title: 'Machine learning e dati di addestramento',
          description: 'Come le macchine "imparano" dai dati, perché i dati non sono mai neutri e il costo invisibile dell\'addestramento.',
          body: [
            'Il machine learning — l\'apprendimento automatico — è il cuore dell\'AI contemporanea. L\'idea di base è sorprendentemente semplice: invece di programmare esplicitamente un computer per eseguire un compito, gli si forniscono enormi quantità di dati e si lascia che trovi da solo i pattern. Un modello di machine learning è essenzialmente una funzione matematica molto complessa che, dato un input, produce l\'output più "probabile" secondo i pattern nei dati di addestramento.',
            'Prendiamo un esempio concreto: un sistema che deve distinguere foto di gatti da foto di cani. Non scriviamo regole come "se ha le orecchie a punta è un gatto". Forniamo al modello milioni di foto etichettate ("gatto", "cane") e il modello, attraverso un processo iterativo chiamato backpropagation, aggiusta i suoi parametri interni fino a minimizzare gli errori. Alla fine, il modello ha "imparato" a distinguere gatti e cani — non perché capisca cosa siano, ma perché ha interiorizzato pattern statistici nelle configurazioni dei pixel.',
            'Questo processo funziona incredibilmente bene per molti compiti: riconoscimento di immagini, traduzione, trascrizione del parlato. Ma nasconde un problema fondamentale: i dati non sono mai neutri. Ogni dataset è il prodotto di scelte umane — chi decide cosa raccogliere, come etichettarlo, cosa escludere. Se un dataset di volti contiene principalmente volti bianchi, il modello sarà pessimo nel riconoscere volti neri. Non per malvagità, ma per matematica: il modello ottimizza le sue performance sui dati che ha visto di più.',
            'Il ricercatore Timnit Gebru, prima del suo controverso licenziamento da Google, ha documentato come i dataset più usati nel machine learning siano profondamente sbilanciati: sovra-rappresentano il Nord globale, la lingua inglese, le culture occidentali, gli uomini e le persone bianche. Quando alleniamo modelli su questi dati, non stiamo creando strumenti "oggettivi" — stiamo codificando le disuguaglianze esistenti in sistemi che sembrano neutrali.',
            'C\'è poi il costo invisibile dell\'addestramento. Addestrare un singolo modello linguistico di grandi dimensioni può consumare tanta energia quanto cinque automobili nella loro intera vita utile, secondo uno studio dell\'Università del Massachusetts Amherst. L\'acqua necessaria per raffreddare i data center, le terre rare per i chip, il lavoro di migliaia di data labelers pagati pochi centesimi a task — tutto questo è nascosto dietro l\'interfaccia elegante di un chatbot.',
            'Il principio "garbage in, garbage out" — spazzatura dentro, spazzatura fuori — è forse la legge più importante del machine learning. Ma dovremmo aggiornarla: "bias in, bias out, amplified". I dati distorti non producono solo risultati distorti: producono risultati distorti con un\'aura di oggettività scientifica che li rende ancora più pericolosi.',
          ],
          keyTakeaways: [
            'Il machine learning trova pattern nei dati, non "capisce" — è statistica su larga scala',
            'I dati di addestramento non sono mai neutri: riflettono le scelte e i bias di chi li crea',
            'I dataset più usati sovra-rappresentano il Nord globale, l\'inglese, gli uomini bianchi',
            'Il costo ambientale e umano dell\'addestramento è enorme e spesso invisibile',
          ],
          reflection: 'Pensa a un servizio che usi quotidianamente e che si basa su machine learning (es. suggerimenti di Netflix, traduttore automatico, filtro spam). Quali dati sono stati usati per addestrarlo? Chi potrebbe essere sotto-rappresentato in quei dati?',
        },
        en: {
          title: 'Machine learning and training data',
          description: 'How machines "learn" from data, why data is never neutral, and the invisible cost of training.',
          body: [
            'Machine learning is the heart of contemporary AI. The basic idea is surprisingly simple: instead of explicitly programming a computer to perform a task, you provide it with enormous amounts of data and let it find patterns on its own. A machine learning model is essentially a very complex mathematical function that, given an input, produces the most "probable" output according to patterns in the training data.',
            'Let\'s take a concrete example: a system that must distinguish photos of cats from photos of dogs. We don\'t write rules like "if it has pointed ears it\'s a cat". We provide the model with millions of labelled photos ("cat", "dog") and the model, through an iterative process called backpropagation, adjusts its internal parameters until it minimises errors. In the end, the model has "learned" to distinguish cats and dogs — not because it understands what they are, but because it has internalised statistical patterns in pixel configurations.',
            'This process works incredibly well for many tasks: image recognition, translation, speech transcription. But it hides a fundamental problem: data is never neutral. Every dataset is the product of human choices — who decides what to collect, how to label it, what to exclude. If a face dataset predominantly contains white faces, the model will be poor at recognising black faces. Not out of malice, but out of mathematics: the model optimises its performance on the data it has seen most.',
            'Researcher Timnit Gebru, before her controversial dismissal from Google, documented how the most widely used machine learning datasets are deeply imbalanced: they over-represent the Global North, the English language, Western cultures, men and white people. When we train models on this data, we are not creating "objective" tools — we are encoding existing inequalities into systems that appear neutral.',
            'Then there is the invisible cost of training. Training a single large language model can consume as much energy as five cars over their entire lifetime, according to a study by the University of Massachusetts Amherst. The water needed to cool data centres, the rare earths for chips, the labour of thousands of data labellers paid a few cents per task — all this is hidden behind a chatbot\'s elegant interface.',
            'The principle "garbage in, garbage out" is perhaps the most important law of machine learning. But we should update it: "bias in, bias out, amplified". Biased data does not just produce biased results: it produces biased results with an aura of scientific objectivity that makes them even more dangerous.',
          ],
          keyTakeaways: [
            'Machine learning finds patterns in data, it doesn\'t "understand" — it is statistics at scale',
            'Training data is never neutral: it reflects the choices and biases of those who create it',
            'The most widely used datasets over-represent the Global North, English, white men',
            'The environmental and human cost of training is enormous and often invisible',
          ],
          reflection: 'Think of a service you use daily that relies on machine learning (e.g. Netflix suggestions, automatic translator, spam filter). What data was used to train it? Who might be under-represented in that data?',
        },
      },
      resources: [
        { title: 'Timnit Gebru — On the Dangers of Stochastic Parrots', url: 'https://dl.acm.org/doi/10.1145/3442188.3445922', type: 'article' },
        { title: 'Energy and Policy Considerations for Deep Learning in NLP — UMass', url: 'https://arxiv.org/abs/1906.02243', type: 'article' },
        { title: 'Machine Learning for Everyone — Vas3k', url: 'https://vas3k.com/blog/machine_learning/', type: 'article' },
      ],
    },
    {
      slug: 'ai-generativa-promesse-limiti',
      readingTime: 8,
      content: {
        it: {
          title: 'AI generativa: promesse e limiti',
          description: 'Come funzionano ChatGPT e i suoi simili, cosa significa "generare" testo e perché le allucinazioni non sono un bug.',
          body: [
            'Nel novembre 2022, OpenAI ha rilasciato ChatGPT e il mondo non è stato più lo stesso — o almeno, così racconta la narrativa dominante. In realtà, i modelli linguistici di grandi dimensioni (LLM) esistevano da anni, e le tecniche alla base (i transformer, introdotti da Google nel 2017) non erano nuove. Ciò che era nuovo era l\'accessibilità: per la prima volta, chiunque poteva conversare con un modello linguistico attraverso un\'interfaccia semplice.',
            'Ma come funziona concretamente un LLM? In modo semplificato: è un modello che, data una sequenza di parole, prevede la parola successiva più probabile. Lo fa perché è stato addestrato su enormi quantità di testo — libri, articoli, siti web, forum, codice sorgente — e ha "interiorizzato" i pattern statistici del linguaggio umano. Quando genera una risposta, non "ragiona": calcola, parola dopo parola, la continuazione più probabile della conversazione.',
            'Questo meccanismo produce risultati che sembrano magici — testi coerenti, traduzioni fluide, riassunti efficaci — ma ha limiti intrinseci. Il più famoso sono le "allucinazioni": il modello produce informazioni false ma plausibili con la stessa sicurezza con cui produce fatti veri. Non è un bug: è una conseguenza diretta del modo in cui funziona. Il modello non distingue tra vero e falso — produce ciò che è statisticamente probabile nel contesto.',
            'Emily Bender e Timnit Gebru hanno coniato l\'espressione "stochastic parrots" — pappagalli stocastici — per descrivere questi modelli. Come un pappagallo che ripete frasi senza capirle, un LLM produce testo che sembra significativo senza avere alcuna comprensione del significato. Questo non vuol dire che non sia utile — significa che dobbiamo usarlo consapevolmente, sapendo cosa può e cosa non può fare.',
            'L\'AI generativa non si limita al testo: produce immagini (DALL-E, Midjourney, Stable Diffusion), musica, video, codice. In tutti questi domini, il principio è lo stesso: un modello addestrato su enormi quantità di dati genera nuovi output statisticamente coerenti con quei dati. E in tutti questi domini, emergono le stesse domande: chi possiede i dati di addestramento? Chi beneficia degli output? Chi viene danneggiato?',
            'Un aspetto spesso trascurato è il rapporto tra AI generativa e lavoro creativo. Questi modelli sono addestrati sul lavoro di milioni di artisti, scrittori e programmatori — spesso senza il loro consenso e senza compenso. Quando un\'AI "nello stile di" un artista genera un\'immagine, sta estraendo valore da quel lavoro creativo. La domanda non è solo tecnica, è politica: chi ha il diritto di usare e monetizzare il lavoro altrui?',
          ],
          keyTakeaways: [
            'Gli LLM prevedono la parola successiva più probabile, non "ragionano"',
            'Le allucinazioni non sono un bug: sono una conseguenza del funzionamento statistico del modello',
            '"Stochastic parrots": i modelli producono testo plausibile senza comprensione del significato',
            'L\'AI generativa è addestrata sul lavoro creativo di milioni di persone, spesso senza consenso',
          ],
          reflection: 'Prova a chiedere a un chatbot AI un\'informazione che conosci bene (es. la storia del tuo quartiere, un fatto specifico del tuo campo di lavoro). Il risultato è accurato? Se contiene errori, quanto sono plausibili? Cosa succede se qualcuno che non conosce l\'argomento legge quella risposta?',
        },
        en: {
          title: 'Generative AI: promises and limits',
          description: 'How ChatGPT and its peers work, what "generating" text means, and why hallucinations are not a bug.',
          body: [
            'In November 2022, OpenAI released ChatGPT and the world was never the same — or so the dominant narrative tells us. In reality, large language models (LLMs) had existed for years, and the underlying techniques (transformers, introduced by Google in 2017) were not new. What was new was accessibility: for the first time, anyone could converse with a language model through a simple interface.',
            'But how does an LLM actually work? In simplified terms: it is a model that, given a sequence of words, predicts the most probable next word. It does this because it has been trained on enormous amounts of text — books, articles, websites, forums, source code — and has "internalised" the statistical patterns of human language. When it generates a response, it does not "reason": it calculates, word by word, the most probable continuation of the conversation.',
            'This mechanism produces results that seem magical — coherent texts, fluent translations, effective summaries — but it has intrinsic limitations. The most famous are "hallucinations": the model produces false but plausible information with the same confidence as true facts. This is not a bug: it is a direct consequence of how it works. The model does not distinguish between true and false — it produces what is statistically probable in context.',
            'Emily Bender and Timnit Gebru coined the expression "stochastic parrots" to describe these models. Like a parrot that repeats phrases without understanding them, an LLM produces text that seems meaningful without having any understanding of meaning. This does not mean it is not useful — it means we must use it consciously, knowing what it can and cannot do.',
            'Generative AI is not limited to text: it produces images (DALL-E, Midjourney, Stable Diffusion), music, video, code. In all these domains, the principle is the same: a model trained on enormous amounts of data generates new output that is statistically coherent with that data. And in all these domains, the same questions emerge: who owns the training data? Who benefits from the output? Who is harmed?',
            'An often-overlooked aspect is the relationship between generative AI and creative work. These models are trained on the work of millions of artists, writers and programmers — often without their consent and without compensation. When an AI generates an image "in the style of" an artist, it is extracting value from that creative work. The question is not only technical, it is political: who has the right to use and monetise other people\'s work?',
          ],
          keyTakeaways: [
            'LLMs predict the most probable next word, they do not "reason"',
            'Hallucinations are not a bug: they are a consequence of the model\'s statistical operation',
            '"Stochastic parrots": models produce plausible text without understanding meaning',
            'Generative AI is trained on the creative work of millions of people, often without consent',
          ],
          reflection: 'Try asking an AI chatbot for information you know well (e.g. the history of your neighbourhood, a specific fact from your field of work). Is the result accurate? If it contains errors, how plausible are they? What happens if someone unfamiliar with the topic reads that answer?',
        },
      },
      resources: [
        { title: 'Stochastic Parrots — Bender, Gebru et al.', url: 'https://dl.acm.org/doi/10.1145/3442188.3445922', type: 'article' },
        { title: 'Attention Is All You Need — Google (Transformer paper)', url: 'https://arxiv.org/abs/1706.03762', type: 'article' },
        { title: 'How Large Language Models Work — 3Blue1Brown', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M', type: 'video' },
      ],
    },
  ],
};
