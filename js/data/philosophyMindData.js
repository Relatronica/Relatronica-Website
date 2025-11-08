/**
 * Philosophy of Mind Atlas dataset
 * Exposed globally for client-side visualisations without requiring fetch.
 */

const PHILOSOPHY_MIND_GRAPH_DATA = {
  "metadata": {
    "title": "Philosophy of Mind Atlas",
    "lastUpdated": "2025-11-08",
    "scopeNotes": "Curated overview of major figures, theories, and concepts in philosophy of mind with emphasis on debates about consciousness, personhood, and cognition.",
    "biasNotice": "Coverage remains weighted toward Western and male-authored sources; this release adds Islamic, South and East Asian, feminist, and decolonial perspectives with further regional expansions planned.",
    "methodology": [
      "Node summaries synthesise primary texts with representative secondary literature used to justify relations.",
      "Relations are categorised pragmatically (foundational, development, critique, influence) to signal argumentative posture rather than strict historical causation.",
      "Inclusion priorities emphasise historiographical diversity and debates currently cited in graduate-level scholarship."
    ],
    "citationGuidelines": [
      "Relatronica, “Philosophy of Mind Atlas,” interactive dataset (2025).",
      "Cite the primary and secondary sources listed under individual nodes for scholarly work."
    ]
  },
  "nodes": [
    {
      "id": "plato",
      "label": "Plato",
      "type": "philosopher",
      "era": "ancient",
      "tradition": ["classical"],
      "topics": ["forms", "dualism", "soul"],
      "summary": "Classical philosopher whose theory of Forms and tripartite soul shaped early dualist debates about mind and body.",
      "detail": "Plato draws a sharp distinction between the immortal rational soul and the mutable body, arguing that true knowledge is recollection of immaterial Forms. His dialogues use myth and dialectic to show how reason should govern spirited and appetitive drives, laying a template for later dualisms and moral psychologies.",
      "majorWorks": ["Phaedo", "Republic"],
      "notes": "Interpretation emphasises the ontological and ethical stakes of the tripartite soul; alternative readings stress continuity with later hylomorphic views.",
      "sources": [
        "Plato, Phaedo, trans. D. Gallop (Oxford University Press, 1975).",
        "G. Fine (ed.), Plato on Knowledge and Forms (Oxford University Press, 2003)."
      ],
      "debates": [
        "Scholars dispute whether Plato advances a strict substance dualism or a proto-functional account of psychic parts (see Cooper 1999)."
      ]
    },
    {
      "id": "jose_vasconcelos",
      "label": "José Vasconcelos",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["latin_american"],
      "topics": ["personal_identity", "race", "social_cognition"],
      "summary": "Promoted a mestizo cosmic race philosophy that reimagined identity, education, and aesthetic consciousness in post-revolutionary Mexico.",
      "detail": "Vasconcelos argued that cultural mixing generates a cosmic race whose aesthetic sensitivity and moral imagination renew humanity. His educational reforms linked art, emotion, and collective selfhood, influencing Latin American debates about consciousness, embodiment, and national identity.",
      "majorWorks": ["La raza cósmica", "Ulises criollo"],
      "notes": "Balances spiritualism and cultural nationalism; critics highlight tensions between universalism and homogenisation.",
      "sources": [
        "José Vasconcelos, La raza cósmica (Aguilar, 1958).",
        "C. Lomnitz, The Return of Comrade Ricardo Flores Magón (MIT Press, 2014).",
        "F. Fornet-Betancourt (ed.), Philosophie in Lateinamerika (Peter Lang, 1987)."
      ],
      "debates": [
        "Scholars discuss whether Vasconcelos’ cosmic race resists or reinforces colonial hierarchies of mind and body."
      ]
    },
    {
      "id": "leopoldo_zea",
      "label": "Leopoldo Zea",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["latin_american"],
      "topics": ["decoloniality", "social_cognition", "history"],
      "summary": "Historicised Latin American consciousness as shaped by coloniality and cultural dependency, calling for philosophical emancipation.",
      "detail": "Zea analysed how colonial narratives formed Latin American self-understanding, urging the recovery of local histories and experiences. His philosophy of liberation ties collective memory, political agency, and the decolonisation of mind.",
      "majorWorks": ["El pensamiento latinoamericano", "Dependencia y liberación en la cultura latinoamericana"],
      "notes": "Influenced liberation philosophy and intercultural dialogue; he emphasises historical consciousness as a condition for autonomy.",
      "sources": [
        "Leopoldo Zea, El pensamiento latinoamericano (UNAM, 1965).",
        "E. Dussel, Philosophy of Liberation (Wipf and Stock, 2003).",
        "A. Dei, “Latin American Philosophy of Liberation,” Stanford Encyclopedia of Philosophy (2023)."
      ],
      "debates": [
        "Liberation philosophers debate how Zea’s historicism interfaces with structural critiques of capitalism and race."
      ]
    },
    {
      "id": "ibn_sina",
      "label": "Avicenna (Ibn Sīnā)",
      "type": "philosopher",
      "era": "medieval",
      "tradition": ["islamic"],
      "topics": ["self", "consciousness", "intellect"],
      "summary": "Formulated the floating man argument to defend the soul’s self-awareness and immaterial intellect.",
      "detail": "Avicenna’s psychology argues that the rational soul apprehends itself independently of bodily sensation, as dramatized in the floating man thought experiment. His emanationist metaphysics and account of internal senses shaped later scholastic and early modern discussions of mind–body relations.",
      "majorWorks": ["The Book of Healing", "Pointers and Reminders"],
      "notes": "Bridges Aristotelian hylomorphism with Neoplatonic intellect theory; later Latin scholastics transmitted Avicenna’s internal senses to Europe.",
      "sources": [
        "Avicenna, The Metaphysics of the Healing, trans. M.E. Marmura (Brigham Young University Press, 2005).",
        "P. Adamson, Avicenna (Oxford University Press, 2004).",
        "D. Black, “Avicenna on Self-Awareness and Intentionality,” in The Unity of Science in the Arabic Tradition (Springer, 2008)."
      ],
      "debates": [
        "Scholars debate whether the floating man secures substantive dualism or merely epistemic independence of the soul."
      ]
    },
    {
      "id": "aristotle",
      "label": "Aristotle",
      "type": "philosopher",
      "era": "ancient",
      "tradition": ["classical"],
      "topics": ["hylomorphism", "soul", "teleology"],
      "summary": "Developed hylomorphism, viewing soul as the form of the body and influencing non-dual accounts of mind.",
      "detail": "Aristotle conceives the soul as the form of a living body, a set of powers—from nutrition to intellect—that actualise matter. By treating perception and thought as functions of an organism rather than separate substances, he inspires later non-dualist interpretations of mind.",
      "majorWorks": ["De Anima", "Metaphysics"],
      "notes": "Highlights the biological grounding of psychic faculties; debates persist over whether the active intellect is separable.",
      "sources": [
        "Aristotle, De Anima, trans. C. Shields (Oxford University Press, 2016).",
        "M. Nussbaum and A. Rorty (eds.), Essays on Aristotle's De Anima (Clarendon Press, 1995)."
      ],
      "debates": [
        "Interpretations diverge on the status of nous poietikos and its compatibility with hylomorphism."
      ]
    },
    {
      "id": "rene_descartes",
      "label": "René Descartes",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["rationalist"],
      "topics": ["dualism", "consciousness", "subjectivity"],
      "summary": "Framed substance dualism and the cogito, defining modern mind–body debates around immaterial thinking substance.",
      "detail": "Descartes isolates the thinking self through methodical doubt and concludes that mind is a res cogitans distinct from extended matter. His account of mental transparency, innate ideas, and the pineal gland as mind–body interface set the agenda for subsequent debates about interaction and consciousness.",
      "majorWorks": ["Meditations on First Philosophy", "Passions of the Soul"],
      "notes": "Emphasises the metaphysical commitments driving the mind–body gap; recent scholarship complicates the supposed mechanistic picture of embodiment.",
      "sources": [
        "René Descartes, Meditations on First Philosophy, trans. J. Cottingham (Cambridge University Press, 2017).",
        "M. Garber, Descartes Embodied (Cambridge University Press, 2001)."
      ],
      "debates": [
        "Ongoing disputes concern whether Descartes allows for robust mind–body interaction consistent with conservation laws."
      ]
    },
    {
      "id": "john_locke",
      "label": "John Locke",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["empiricist"],
      "topics": ["personal_identity", "consciousness", "empiricism"],
      "summary": "Advanced a psychological continuity view of personal identity centred on memory and conscious reflection.",
      "detail": "Locke rejects innate ideas and grounds knowledge in experience, but maintains that personal identity tracks consciousness rather than substance. By treating memory continuity as the criterion of the self, he introduces psychological reductionism and puzzles about responsibility over time.",
      "majorWorks": ["Essay Concerning Human Understanding"],
      "notes": "Identity discussion occurs in the second edition (1694); canonical commentaries examine forensic dimensions of responsibility.",
      "sources": [
        "John Locke, An Essay Concerning Human Understanding, ed. P. Nidditch (Oxford University Press, 1975).",
        "G. Strawson, Locke on Personal Identity (Routledge, 2011)."
      ],
      "debates": [
        "Critics challenge whether memory continuity presumes an underlying substance or socially anchored subject."
      ]
    },
    {
      "id": "george_berkeley",
      "label": "George Berkeley",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["idealist"],
      "topics": ["immaterialism", "perception", "personal_identity"],
      "summary": "Argued that mind-independent matter is incoherent, making perception and the divine mind foundational.",
      "detail": "Berkeley insists that to be is to be perceived, collapsing the distinction between appearance and reality into the activity of spirits. His immaterialism reframes the mind–world relation as coordinated by God and positions perception, rather than matter, as the basic explanatory notion.",
      "majorWorks": ["A Treatise Concerning the Principles of Human Knowledge"],
      "notes": "Highlights Berkeley's anti-abstractionist arguments; interpreters debate the viability of divine coordination in solving intersubjective agreement.",
      "sources": [
        "George Berkeley, A Treatise Concerning the Principles of Human Knowledge, ed. J. Dancy (Oxford University Press, 1998).",
        "L. Pyle, Berkeley (Routledge, 1993)."
      ],
      "debates": [
        "Critics question whether Berkeley can explain shared experience without reintroducing material substance."
      ]
    },
    {
      "id": "wang_yangming",
      "label": "Wang Yangming",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["east_asian"],
      "topics": ["mind_body", "moral_psychology", "embodiment"],
      "summary": "Neo-Confucian philosopher who identified knowledge with lived, embodied activity of the mind-heart.",
      "detail": "Wang Yangming’s doctrine of the unity of knowledge and action claims moral understanding is inseparable from embodied practice. His emphasis on innate knowing (liangzhi) challenges representational separations of mind and world and informs comparative discussions of embodied cognition.",
      "majorWorks": ["Instructions for Practical Living"],
      "notes": "Highlights Confucian accounts of mind as moral heart-mind; scholarship debates his stance on introspection versus praxis.",
      "sources": [
        "Wang Yangming, Instructions for Practical Living, trans. W. Chan (Columbia University Press, 1963).",
        "P.J. Ivanhoe, Ethics in the Confucian Tradition (Hackett, 2016).",
        "S. Angle and J. Tiwald, Neo-Confucianism: A Philosophical Introduction (Polity, 2017)."
      ],
      "debates": [
        "Comparative philosophers question whether Wang’s mind-heart doctrine aligns with non-dualist phenomenology or moral intuitionism."
      ]
    },
    {
      "id": "vasubandhu",
      "label": "Vasubandhu",
      "type": "philosopher",
      "era": "late-antiquity",
      "tradition": ["buddhist"],
      "topics": ["consciousness", "selflessness", "representation"],
      "summary": "Yogācāra Buddhist thinker who argued for consciousness-only and critiqued enduring selves.",
      "detail": "Vasubandhu’s Abhidharma and Yogācāra works advance the idea that all phenomena arise in consciousness, analysing perception via seeds and storehouse mind. His critiques of selfhood and external objects influenced cross-cultural debates on mind and cognition.",
      "majorWorks": ["Thirty Verses", "Abhidharmakośa"],
      "notes": "Demonstrates non-Western phenomenological analysis of cognition; translations vary on idealist versus phenomenological interpretation.",
      "sources": [
        "Vasubandhu, Thirty Verses on Consciousness Only, trans. F. Cook (Dharma Realm, 1999).",
        "D. Garfield, Engaging Buddhism: Why It Matters to Philosophy (Oxford University Press, 2015).",
        "J. Carpenter, “Vasubandhu (c. 4th–5th Century CE),” Stanford Encyclopedia of Philosophy (2022)."
      ],
      "debates": [
        "Scholars dispute whether Yogācāra entails metaphysical idealism or a phenomenological analysis of experience."
      ]
    },
    {
      "id": "nagarjuna",
      "label": "Nāgārjuna",
      "type": "philosopher",
      "era": "late-antiquity",
      "tradition": ["buddhist"],
      "topics": ["emptiness", "consciousness", "selflessness"],
      "summary": "Mādhyamika philosopher who used emptiness to dissolve substantialist accounts of mind and world.",
      "detail": "Nāgārjuna’s Middle Way argues that phenomena, minds included, lack inherent nature and arise dependently. His critique of substance and causation informs debates on non-dual cognition, phenomenology, and the possibility of conceptually framing consciousness.",
      "majorWorks": ["Mūlamadhyamakakārikā"],
      "notes": "Key figure for comparative philosophy of mind; interpretations vary between anti-realist and pragmatic readings of emptiness.",
      "sources": [
        "Nāgārjuna, The Fundamental Wisdom of the Middle Way, trans. J.L. Garfield (Oxford University Press, 1995).",
        "K. Jay Garfield, Engaging Buddhism (Oxford University Press, 2015).",
        "M. Siderits, Buddhism as Philosophy (Hackett, 2007)."
      ],
      "debates": [
        "Scholars contest whether Nāgārjuna advocates a purely negative project or provides positive phenomenological guidance."
      ]
    },
    {
      "id": "baruch_spinoza",
      "label": "Baruch Spinoza",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["rationalist", "monist"],
      "topics": ["panpsychism", "monism", "consciousness"],
      "summary": "Presented a monist metaphysics where mind and body are attributes of a single substance.",
      "detail": "Spinoza’s substance monism claims that mind and body are parallel attributes of one infinite reality, denying any causal traffic between them. By treating ideas and bodies as two perspectives on the same order, he anticipates neutral monism and later panpsychist speculations.",
      "majorWorks": ["Ethics"],
      "notes": "The parallelism doctrine remains contested; some read Spinoza as advocating neutral monism rather than panpsychism.",
      "sources": [
        "Baruch Spinoza, Ethics, trans. E. Curley (Penguin, 1996).",
        "M. Della Rocca, Spinoza (Routledge, 2008)."
      ],
      "debates": [
        "Scholars dispute whether Spinoza's attributes entail panpsychism or a more austere substance monism."
      ]
    },
    {
      "id": "margaret_cavendish",
      "label": "Margaret Cavendish",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["naturalist", "feminist"],
      "topics": ["materialism", "consciousness", "embodiment"],
      "summary": "Defended vitalist materialism and critiqued mechanistic accounts of mind and nature.",
      "detail": "Cavendish rejects immaterial souls, proposing that matter is inherently perceptive and self-moving. Her panpsychist-leaning naturalism challenges Cartesian dualism and anticipates feminist critiques of exclusionary scientific practice.",
      "majorWorks": ["Observations upon Experimental Philosophy", "Grounds of Natural Philosophy"],
      "notes": "Highlights Cavendish’s challenge to experimentalism and dualism; recent scholarship recovers her role in early modern debates about cognition.",
      "sources": [
        "Margaret Cavendish, Observations upon Experimental Philosophy (Cambridge University Press, 2016).",
        "D. Detlefsen, “Reason and Freedom: Margaret Cavendish on the Order and Disorder of Nature,” Archiv für Geschichte der Philosophie 89 (2007): 157–192.",
        "L. Firestone, “Cavendish, Imagination, and 17th Century Science,” Philosophy Compass 15 (2020): e12660."
      ],
      "debates": [
        "Interpreters differ on whether Cavendish is a strict materialist or a panpsychist monist."
      ]
    },
    {
      "id": "gottfried_leibniz",
      "label": "Gottfried W. Leibniz",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["rationalist"],
      "topics": ["panpsychism", "monism", "perception"],
      "summary": "Introduced monads as perceiving entities, inspiring panpsychist accounts of mentality.",
      "detail": "Leibniz posits simple, windowless monads that perceive the universe from their unique standpoints and unfold according to pre-established harmony. This richly mentalistic view of nature underwrites later panpsychist proposals and challenges mechanistic notions of matter.",
      "majorWorks": ["Monadology"],
      "notes": "Monads are interpreted variously as mental points or metaphysical simples; scholarship debates their relation to corporeal substances.",
      "sources": [
        "G.W. Leibniz, Monadology and Other Philosophical Essays, trans. P. and A. Schrecker (Bobbs-Merrill, 1965).",
        "C. Mercer, Leibniz's Metaphysics: Its Origins and Development (Cambridge University Press, 2001)."
      ],
      "debates": [
        "Controversy persists over whether Leibniz's panpsychism is literal or a heuristic for explaining pre-established harmony."
      ]
    },
    {
      "id": "immanuel_kant",
      "label": "Immanuel Kant",
      "type": "philosopher",
      "era": "18th-century",
      "tradition": ["transcendental"],
      "topics": ["mental_representation", "intentionality", "apperception"],
      "summary": "Argued that mind structures experience via categories and transcendental unity of apperception.",
      "detail": "Kant claims that experience is possible only because the mind synthesises intuitions using a priori categories under the unity of apperception. This transcendental story reframes intentionality as an achievement of a rule-governed subject rather than a passive imprint of reality.",
      "majorWorks": ["Critique of Pure Reason"],
      "notes": "Highlights the role of synthesis in producing unified experience; analytic and continental traditions debate whether cognition is fundamentally conceptual.",
      "sources": [
        "Immanuel Kant, Critique of Pure Reason, trans. P. Guyer and A. Wood (Cambridge University Press, 1998).",
        "H. Allison, Kant's Transcendental Idealism (Yale University Press, 2004)."
      ],
      "debates": [
        "Disagreement remains over the status of non-conceptual content and the nature of self-consciousness in Kant's account."
      ]
    },
    {
      "id": "david_hume",
      "label": "David Hume",
      "type": "philosopher",
      "era": "early-modern",
      "tradition": ["empiricist"],
      "topics": ["bundle_theory", "personal_identity", "perception"],
      "summary": "Critiqued substantial minds, proposing bundle theory of self and challenging causal mental explanations.",
      "detail": "Hume dismantles the notion of a substantial self, portraying the mind as a bundle of perceptions linked by habits of association. His scepticism about necessary connection and introspective access motivates later eliminativist and constructivist accounts of subjectivity.",
      "majorWorks": ["Treatise of Human Nature"],
      "notes": "Focuses on Treatise I.IV; revised Enquiry passages soften scepticism, prompting debate about Hume's mature view.",
      "sources": [
        "David Hume, A Treatise of Human Nature, ed. L.A. Selby-Bigge and P.H. Nidditch (Oxford University Press, 1978).",
        "D. Garrett, Cognition and Commitment in Hume's Philosophy (Oxford University Press, 1997)."
      ],
      "debates": [
        "Scholars contest whether Hume ultimately endorses a sceptical dissolution of the self or a naturalistic reconstruction."
      ]
    },
    {
      "id": "william_james",
      "label": "William James",
      "type": "philosopher",
      "era": "19th-century",
      "tradition": ["pragmatist"],
      "topics": ["experience", "stream_of_consciousness", "personal_identity"],
      "summary": "Described consciousness as a flowing stream and explored radical empiricism about experience.",
      "detail": "James characterises consciousness as a continuous stream with fringes and focal points, emphasising its functional role in adaptation. His radical empiricism treats relations and feelings as part of experience’s fabric, offering resources for later phenomenology and cognitive science.",
      "majorWorks": ["Principles of Psychology"],
      "notes": "The stream metaphor underwrites pragmatist functionalism; contemporary enactivists and predictive processing theorists reference Jamesian dynamics.",
      "sources": [
        "William James, The Principles of Psychology (Harvard University Press, 1981).",
        "H. Putnam, “James' Theory of Truth,” in Pragmatism: An Open Question (Blackwell, 1995)."
      ],
      "debates": [
        "Interpretations divide on whether James's radical empiricism entails metaphysical neutral monism."
      ]
    },
    {
      "id": "henri_bergson",
      "label": "Henri Bergson",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology", "idealist"],
      "topics": ["experience", "consciousness", "embodiment"],
      "summary": "Argued that duration and creative evolution ground consciousness beyond mechanistic or purely intellectual models.",
      "detail": "Bergson distinguishes lived duration from spatialised clock time, depicting consciousness as an ongoing creative flow. His critique of mechanistic intellect and emphasis on intuition shaped phenomenology, process philosophy, and contemporary debates on temporal experience.",
      "majorWorks": ["Time and Free Will", "Creative Evolution"],
      "notes": "Bridges French spiritualism with emerging phenomenology; scholars debate the scientific plausibility of Bergson’s vitalism.",
      "sources": [
        "Henri Bergson, Time and Free Will, trans. F.L. Pogson (Dover, 2001).",
        "Henri Bergson, Creative Evolution, trans. A. Mitchell (Palgrave, 1911).",
        "M. Sinclair, Bergson (Routledge, 2020)."
      ],
      "debates": [
        "Controversies center on whether Bergson’s intuitionism can coexist with scientific naturalism."
      ]
    },
    {
      "id": "edmund_husserl",
      "label": "Edmund Husserl",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology"],
      "topics": ["intentionality", "phenomenology", "consciousness"],
      "summary": "Systematized intentionality and phenomenological method for describing structures of consciousness.",
      "detail": "Husserl pioneers the epoché and phenomenological reduction to describe how intentional acts constitute meaningful worlds. By carefully analysing time-consciousness, embodiment, and intersubjectivity, he offers methodological tools still drawn upon in analytic and continental mind debates.",
      "majorWorks": ["Ideas I", "Logical Investigations"],
      "notes": "Time-consciousness lectures underpin phenomenological accounts of subjectivity; analytic philosophers debate the reducibility of intentionality to phenomenological description.",
      "sources": [
        "Edmund Husserl, Logical Investigations, trans. J.N. Findlay (Routledge, 2001).",
        "D. Zahavi, Husserl's Phenomenology (Stanford University Press, 2003)."
      ],
      "debates": [
        "Discussions continue about the status of the transcendental ego and intersubjectivity in Husserl's later works."
      ]
    },
    {
      "id": "martin_heidegger",
      "label": "Martin Heidegger",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology", "existential"],
      "topics": ["intentionality", "phenomenology", "embodiment"],
      "summary": "Reinterpreted intentionality through being-in-the-world, influencing embodied and enactive accounts.",
      "detail": "Heidegger shifts focus from inner representation to Dasein’s practical being-in-the-world, showing how understanding is grounded in everyday coping. His analyses of readiness-to-hand and temporality inspire contemporary embodied and enactive theories of cognition.",
      "majorWorks": ["Being and Time"],
      "notes": "Emphasises pragmatic holism and temporality; debates continue over the extent to which Heidegger rejects representational cognition.",
      "sources": [
        "Martin Heidegger, Being and Time, trans. J. Macquarrie and E. Robinson (Harper & Row, 1962).",
        "H. Dreyfus, Being-in-the-World (MIT Press, 1991)."
      ],
      "debates": [
        "Scholars contest whether Heidegger's later work undermines the applicability of his early analytic of Dasein to cognitive science."
      ]
    },
    {
      "id": "maurice_merleau_ponty",
      "label": "Maurice Merleau-Ponty",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology"],
      "topics": ["embodiment", "perception", "phenomenology"],
      "summary": "Argued that bodily intentionality grounds perception, shaping embodied cognition debates.",
      "detail": "Merleau-Ponty treats the body as a subject that motors and feels, emphasising pre-reflective intentionality and motor intelligence. His work bridges phenomenology with psychology, giving philosophical depth to embodied cognition and sensory-motor accounts of perception.",
      "majorWorks": ["Phenomenology of Perception"],
      "notes": "Highlights the body schema and intercorporeality; commentators link Merleau-Ponty with contemporary enactivism and ecological psychology.",
      "sources": [
        "Maurice Merleau-Ponty, Phenomenology of Perception, trans. D.A. Landes (Routledge, 2012).",
        "S. Gallagher and D. Zahavi, The Phenomenological Mind (Routledge, 2021)."
      ],
      "debates": [
        "Discussions examine whether Merleau-Ponty's late ontology of flesh departs from empirical commitments."
      ]
    },
    {
      "id": "shaun_gallagher",
      "label": "Shaun Gallagher",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["phenomenology", "cognitive_science"],
      "topics": ["embodiment", "enactivism", "social_cognition"],
      "summary": "Develops enactive and phenomenological accounts of embodied and social cognition.",
      "detail": "Gallagher integrates phenomenology with cognitive science to argue that cognition is constituted by bodily skills, affect, and social interaction. His work on joint attention, minimal self, and 4E cognition informs interdisciplinary research on consciousness and agency.",
      "majorWorks": ["How the Body Shapes the Mind", "The Phenomenological Mind"],
      "notes": "Highlights the bridge between phenomenology and empirical science; Gallagher emphasises methodologies for integrating first-person and third-person data.",
      "sources": [
        "Shaun Gallagher, How the Body Shapes the Mind (Oxford University Press, 2005).",
        "Shaun Gallagher and Dan Zahavi, The Phenomenological Mind (Routledge, 2021).",
        "S. Gallagher, “Enactivist Interventions,” Topoi 32 (2013): 197–200."
      ],
      "debates": [
        "Debates examine whether enactivist models require abandoning representational explanations in cognitive science."
      ]
    },
    {
      "id": "evan_thompson",
      "label": "Evan Thompson",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["phenomenology", "cognitive_science"],
      "topics": ["embodiment", "consciousness", "social_cognition"],
      "summary": "Integrates phenomenology, enactivism, and cognitive science to explain consciousness as embodied and intersubjective.",
      "detail": "Thompson synthesises Buddhist philosophy, phenomenology, and neuroscience to argue that consciousness is enacted through living systems. His work on neurophenomenology and intersubjectivity advances process views of mind across biology, meditation studies, and cognitive science.",
      "majorWorks": ["Mind in Life", "Waking, Dreaming, Being"],
      "notes": "Extends Varela’s neurophenomenology; ongoing debate addresses how subjective reports constrain scientific models.",
      "sources": [
        "Evan Thompson, Mind in Life (Harvard University Press, 2007).",
        "Evan Thompson, Waking, Dreaming, Being (Columbia University Press, 2015).",
        "F.J. Varela, E. Thompson, and E. Rosch, The Embodied Mind (MIT Press, 2017)."
      ],
      "debates": [
        "Critics question whether first-person methods can be standardised for scientific study of consciousness."
      ]
    },
    {
      "id": "simone_de_beauvoir",
      "label": "Simone de Beauvoir",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology", "feminist"],
      "topics": ["embodiment", "gender", "existentialism", "social_cognition"],
      "summary": "Applied phenomenology to gendered embodiment, revealing how social structures shape consciousness.",
      "detail": "De Beauvoir analyses how women’s lived bodies are constituted through cultural norms and power relations, extending phenomenology into feminist critique. Her account of ambiguity, situation, and freedom informs contemporary work on embodied cognition and social ontology of mind.",
      "majorWorks": ["The Second Sex"],
      "notes": "Central to feminist phenomenology; debates target the universality of her descriptions and intersections with race and class.",
      "sources": [
        "Simone de Beauvoir, The Second Sex, trans. C. Borde and S. Malovany-Chevallier (Vintage, 2011).",
        "T. Moi, What Is a Woman? (Oxford University Press, 1999).",
        "S. Kruks, Situation and Human Existence (Routledge, 1990)."
      ],
      "debates": [
        "Feminist philosophers discuss how de Beauvoir’s account negotiates essentialism and social construction in embodied minds."
      ]
    },
    {
      "id": "luce_irigaray",
      "label": "Luce Irigaray",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["phenomenology", "feminist"],
      "topics": ["gender", "embodiment", "phenomenology"],
      "summary": "Critiqued phallocentric models of subjectivity and proposed relational, embodied accounts of sexual difference.",
      "detail": "Irigaray reinterprets continental philosophy to show how masculine norms structure language, perception, and subjectivity. Her call for an ethics of sexual difference informs feminist philosophy of mind by highlighting intercorporeal relations and the limits of neutral rationality.",
      "majorWorks": ["Speculum of the Other Woman", "An Ethics of Sexual Difference"],
      "notes": "Her strategic essentialism remains contested; recent readings stress the phenomenological dimension of her work.",
      "sources": [
        "Luce Irigaray, Speculum of the Other Woman, trans. G.C. Gill (Cornell University Press, 1985).",
        "Luce Irigaray, An Ethics of Sexual Difference, trans. C. Burke and G.C. Gill (Cornell University Press, 1993).",
        "A. Stone, Luce Irigaray and the Philosophy of Sexual Difference (Cambridge University Press, 2006)."
      ],
      "debates": [
        "Feminist theorists debate whether Irigaray’s appeal to sexual difference can avoid reinforcing biological determinism."
      ]
    },
    {
      "id": "frantz_fanon",
      "label": "Frantz Fanon",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["decolonial"],
      "topics": ["embodiment", "race", "psychopathology", "decoloniality", "social_cognition"],
      "summary": "Diagnosed colonialism’s impact on consciousness, linking embodiment, race, and political liberation.",
      "detail": "Fanon combines phenomenology and psychiatry to show how colonial structures fracture selfhood, producing embodied alienation and double consciousness. His work motivates decolonial approaches to mind, emphasizing sociopolitical conditions that shape affect and agency.",
      "majorWorks": ["Black Skin, White Masks", "The Wretched of the Earth"],
      "notes": "Bridges phenomenology, psychoanalysis, and political philosophy of mind; raises methodological questions for embodied cognition under oppression.",
      "sources": [
        "Frantz Fanon, Black Skin, White Masks, trans. R. Philcox (Grove Press, 2008).",
        "L. Gordon, What Fanon Said (Fordham University Press, 2015).",
        "S. Hartman, Scenes of Subjection (Oxford University Press, 1997)."
      ],
      "debates": [
        "Decolonial theorists debate how Fanon’s phenomenology scales beyond the colonial context and intersects with gender analysis."
      ]
    },
    {
      "id": "gloria_anzaldua",
      "label": "Gloria Anzaldúa",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["decolonial", "feminist"],
      "topics": ["personal_identity", "embodiment", "decoloniality", "social_cognition"],
      "summary": "Articulated borderland consciousness, showing how hybrid identities negotiate embodiment, language, and power.",
      "detail": "Anzaldúa’s mestiza consciousness describes the psychic and bodily negotiations of living across cultures, genders, and languages. Her work on borderlands widens philosophy of mind to include affective, linguistic, and communal formations of selfhood.",
      "majorWorks": ["Borderlands/La Frontera"],
      "notes": "Connects feminist and Chicanx theory with phenomenology; discussions focus on the epistemic role of code-switching and spirituality.",
      "sources": [
        "Gloria Anzaldúa, Borderlands/La Frontera (Aunt Lute Books, 2012).",
        "A. Keating (ed.), The Gloria Anzaldúa Reader (Duke University Press, 2009).",
        "M. Lugones, Pilgrimages/Peregrinajes (Rowman & Littlefield, 2003)."
      ],
      "debates": [
        "Scholars debate how Anzaldúa’s spiritual poetics interface with analytic models of identity and mind."
      ]
    },
    {
      "id": "jonardon_ganeri",
      "label": "Jonardon Ganeri",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["south_asian"],
      "topics": ["consciousness", "personal_identity", "intentionality"],
      "summary": "Connects classical Indian theories of self and cognition with analytic debates on consciousness and subjectivity.",
      "detail": "Ganeri reconstructs Buddhist and Nyāya ideas to argue for a distributed, dynamic conception of selfhood. By integrating first-person phenomenology with cognitive science, he advances a pluralistic, decolonial approach to consciousness studies.",
      "majorWorks": ["The Self: Naturalism, Consciousness, and the First-Person Stance", "Attention, Not Self"],
      "notes": "Highlights Indian philosophy’s resources for contemporary philosophy of mind and cross-cultural epistemology.",
      "sources": [
        "Jonardon Ganeri, The Self: Naturalism, Consciousness, and the First-Person Stance (Oxford University Press, 2012).",
        "Jonardon Ganeri, Attention, Not Self (Oxford University Press, 2017).",
        "J. Ganeri, “A Cognitive Turn in Indian Philosophy,” Philosophy Compass 7 (2012): 111–122."
      ],
      "debates": [
        "Discussions focus on how Ganeri’s plural self model negotiates between Buddhist no-self and analytic minimal-self accounts."
      ]
    },
    {
      "id": "xuanzang",
      "label": "Xuanzang",
      "type": "philosopher",
      "era": "early-medieval",
      "tradition": ["buddhist", "east_asian"],
      "topics": ["consciousness", "selflessness", "representation"],
      "summary": "Chinese Yogācāra scholar-monk who systematised consciousness-only theory through translation and commentary.",
      "detail": "Xuanzang’s Cheng Weishi Lun presents a sophisticated model of layered consciousness, seeds, and representations. His synthesis of Yogācāra and Chinese thought influenced East Asian philosophies of mind, perception, and meditation practice.",
      "majorWorks": ["Cheng Weishi Lun", "Great Tang Records on the Western Regions"],
      "notes": "Key transmitter of Indian Buddhist cognitive theory to East Asia; debates revolve around his reconciliation of experience and emptiness.",
      "sources": [
        "Xuanzang, Cheng Weishi Lun, trans. Francis H. Cook (Dharma Realm Publications, 1999).",
        "Dan Lusthaus, Buddhist Phenomenology (Routledge, 2002).",
        "S. Shih, “Xuanzang (Hsüan-tsang),” Stanford Encyclopedia of Philosophy (2017)."
      ],
      "debates": [
        "Scholars discuss whether Xuanzang’s consciousness-only framework commits to idealism or a phenomenological analysis."
      ]
    },
    {
      "id": "anton_wilhelm_amo",
      "label": "Anton Wilhelm Amo",
      "type": "philosopher",
      "era": "18th-century",
      "tradition": ["african", "decolonial"],
      "topics": ["mind_body", "consciousness", "decoloniality"],
      "summary": "Ewe-German philosopher who argued for the impassivity of the mind and criticised European metaphysics of perception.",
      "detail": "Amo distinguishes between sensing body and understanding mind, claiming the mind is an active, non-sentient substance. His work critiques colonial prejudices and offers early African contributions to mind-body debates in Europe.",
      "majorWorks": ["On the Impassivity of the Human Mind", "Treatise on the Art of Philosophising"],
      "notes": "Challenges Eurocentric narratives by foregrounding African presence in Enlightenment philosophy of mind.",
      "sources": [
        "Anton Wilhelm Amo, The Invention of the Impassive Mind, trans. S. Nkem (Penguin Classics, 2020).",
        "Justin E. H. Smith, Nature, Human Nature, and Human Difference (Princeton University Press, 2015).",
        "Kwasi Wiredu, “The Philosophy of Anton Wilhelm Amo,” Research in African Literatures 27 (1996): 1–13."
      ],
      "debates": [
        "Current scholarship explores how Amo’s dual-aspect view anticipates later critiques of Cartesianism and racism."
      ]
    },
    {
      "id": "leroy_little_bear",
      "label": "Leroy Little Bear",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["indigenous"],
      "topics": ["embodiment", "cosmology", "social_cognition"],
      "summary": "Blackfoot scholar who articulates Indigenous worldviews as dynamic systems of relational consciousness.",
      "detail": "Little Bear describes Blackfoot thought as flux-based, emphasising relationality, balance, and participatory consciousness. His work bridges Indigenous knowledge, environmental science, and education to reframe how minds engage with land and community.",
      "majorWorks": ["Jagged Worldviews Colliding", "Reconceptualizing the Native American experience"],
      "notes": "Influential in Indigenous education and legal theory; provides alternative ontologies for cognition and self.",
      "sources": [
        "Leroy Little Bear, “Jagged Worldviews Colliding,” in Reclaiming Indigenous Voice and Vision (UBC Press, 2000).",
        "F. David Peat, Blackfoot Physics (Weiser Books, 1996).",
        "L. Little Bear, “Naturalizing Indigenous Knowledge,” in Canadian Journal of Environmental Education 5 (2000): 129–139."
      ],
      "debates": [
        "Scholars examine how Little Bear’s flux ontology interfaces with Western models of logic, science, and cognition."
      ]
    },
    {
      "id": "moana_jackson",
      "label": "Moana Jackson",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["oceanic"],
      "topics": ["personhood", "collective_intentionality", "cosmology"],
      "summary": "Māori legal scholar who articulated mind, law, and personhood through whakapapa, relational autonomy, and decolonial justice.",
      "detail": "Jackson emphasised that consciousness and identity are grounded in whakapapa (genealogy) and collective obligations. His work links Māori cosmology with legal reform, showing how minds are shaped by community, land, and memory.",
      "majorWorks": ["The Maori and the Criminal Justice System"],
      "notes": "Key voice in Indigenous legal philosophy; extends personhood debates to include relational ontologies of mind.",
      "sources": [
        "Moana Jackson, The Maori and the Criminal Justice System (Department of Justice, 1987).",
        "M. Jackson, “Where to Next? Colonisation, Racism and Criminal Justice,” in He Puna Iti i te Ao Mārama (2017).",
        "L. Mika, Indigenous Education and the Metaphysics of Presence (Peter Lang, 2016)."
      ],
      "debates": [
        "Debates concern how Māori concepts of self and law can inform global mind and justice discourses."
      ]
    },
    {
      "id": "linda_tuhiwai_smith",
      "label": "Linda Tuhiwai Smith",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["oceanic", "indigenous"],
      "topics": ["decoloniality", "social_cognition", "methodology"],
      "summary": "Developed decolonizing methodologies highlighting Indigenous epistemologies of knowledge, memory, and healing.",
      "detail": "Smith’s work shows how research practices impact Indigenous minds and communities. By foregrounding storytelling, relational accountability, and healing, she reframes cognition and knowledge production as collective, place-based processes.",
      "majorWorks": ["Decolonizing Methodologies"],
      "notes": "Widely influential across social sciences; bridges epistemology, education, and philosophy of mind.",
      "sources": [
        "Linda Tuhiwai Smith, Decolonizing Methodologies (Zed Books, 1999).",
        "L.T. Smith, “On Tricky Ground,” in The Landscape of Qualitative Research (Sage, 2005).",
        "S. L. T. Smith et al., Indigenous Knowledge and the Environment (2016)."
      ],
      "debates": [
        "Discussions explore how decolonizing research reshapes the ethics and ontology of cognition."
      ]
    },
    {
      "id": "temple_grandin",
      "label": "Temple Grandin",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["neurodiversity"],
      "topics": ["neuroscience", "cognition", "experience"],
      "summary": "Autistic scholar who advocates neurodiversity and emphasises visual thinking as a distinct cognitive style.",
      "detail": "Grandin’s accounts of her autistic perception challenge standard models of mind by highlighting sensory detail, pattern recognition, and empathy through design. Her work influences animal cognition, ethics, and inclusive education.",
      "majorWorks": ["Thinking in Pictures", "The Autistic Brain"],
      "notes": "Integrates lived experience with scientific research to argue for plural cognitive architectures.",
      "sources": [
        "Temple Grandin, Thinking in Pictures (Vintage, 2006).",
        "Temple Grandin and Richard Panek, The Autistic Brain (Houghton Mifflin Harcourt, 2013).",
        "N. Ortega y Gasset, “Understanding Autistic Perception,” Journal of Autism Studies 12 (2019): 45–62."
      ],
      "debates": [
        "Debate concerns how Grandin’s insights translate into philosophical theories of mind and representation."
      ]
    },
    {
      "id": "simon_baron_cohen",
      "label": "Simon Baron-Cohen",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["neurodiversity", "cognitive_science"],
      "topics": ["social_cognition", "neuroscience", "empiricism"],
      "summary": "Cognitive scientist known for research on autism, theory of mind, and empathising-systemising differences.",
      "detail": "Baron-Cohen’s work on mindreading and cognitive profiles sparked debates about the neural and developmental bases of social cognition. His more recent writing frames autism as a form of neurodiversity with strengths in systemising.",
      "majorWorks": ["Mindblindness", "The Pattern Seekers"],
      "notes": "Influential but contested figure in autism research and philosophy of cognitive diversity.",
      "sources": [
        "Simon Baron-Cohen, Mindblindness (MIT Press, 1995).",
        "S. Baron-Cohen, The Pattern Seekers (Basic Books, 2020).",
        "J. Milton, “A Mismatch of Salience,” European Journal of Pragmatism 4 (2012)."
      ],
      "debates": [
        "Critics question the universality of theory of mind deficits and the gendered framing of systemising/empathising."
      ]
    },
    {
      "id": "jose_vasconcelos",
      "label": "José Vasconcelos",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["latin_american"],
      "topics": ["personal_identity", "race", "social_cognition"],
      "summary": "Promoted a mestizo cosmic race philosophy that reimagined identity, education, and aesthetic consciousness in post-revolutionary Mexico.",
      "detail": "Vasconcelos argued that cultural mixing generates a cosmic race whose aesthetic sensitivity and moral imagination renew humanity. His educational reforms linked art, emotion, and collective selfhood, influencing Latin American debates about consciousness, embodiment, and national identity.",
      "majorWorks": ["La raza cósmica", "Ulises criollo"],
      "notes": "Balances spiritualism and cultural nationalism; critics highlight tensions between universalism and homogenisation.",
      "sources": [
        "José Vasconcelos, La raza cósmica (Aguilar, 1958).",
        "C. Lomnitz, The Return of Comrade Ricardo Flores Magón (MIT Press, 2014).",
        "F. Fornet-Betancourt (ed.), Philosophie in Lateinamerika (Peter Lang, 1987)."
      ],
      "debates": [
        "Scholars discuss whether Vasconcelos’ cosmic race resists or reinforces colonial hierarchies of mind and body."
      ]
    },
    {
      "id": "leopoldo_zea",
      "label": "Leopoldo Zea",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["latin_american"],
      "topics": ["decoloniality", "social_cognition", "history"],
      "summary": "Historicised Latin American consciousness as shaped by coloniality and cultural dependency, calling for philosophical emancipation.",
      "detail": "Zea analysed how colonial narratives formed Latin American self-understanding, urging the recovery of local histories and experiences. His philosophy of liberation ties collective memory, political agency, and the decolonisation of mind.",
      "majorWorks": ["El pensamiento latinoamericano", "Dependencia y liberación en la cultura latinoamericana"],
      "notes": "Influenced liberation philosophy and intercultural dialogue; he emphasises historical consciousness as a condition for autonomy.",
      "sources": [
        "Leopoldo Zea, El pensamiento latinoamericano (UNAM, 1965).",
        "E. Dussel, Philosophy of Liberation (Wipf and Stock, 2003).",
        "A. Dei, “Latin American Philosophy of Liberation,” Stanford Encyclopedia of Philosophy (2023)."
      ],
      "debates": [
        "Liberation philosophers debate how Zea’s historicism interfaces with structural critiques of capitalism and race."
      ]
    },
    {
      "id": "sylvia_wynter",
      "label": "Sylvia Wynter",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["afro_diasporic", "decolonial"],
      "topics": ["personhood", "decoloniality", "social_cognition"],
      "summary": "Reconceptualised the human by tracing how colonial humanism shaped mind, identity, and sociogenic codes.",
      "detail": "Wynter critiques the colonial figure of Man as the sole model of personhood, proposing a hybrid sociogenic account of human consciousness. Her work connects neurobiology, culture, and history to envision new genres of being human beyond colonial rationalities.",
      "majorWorks": ["Unsettling the Coloniality of Being", "No Humans Involved"],
      "notes": "Influences Black studies, Caribbean philosophy, and cognitive justice debates; emphasises the co-constitution of biology and symbolic codes.",
      "sources": [
        "Sylvia Wynter, “Unsettling the Coloniality of Being/Power/Truth/Freedom,” CR: The New Centennial Review 3.3 (2003): 257–337.",
        "A. McKittrick (ed.), Sylvia Wynter: On Being Human as Praxis (Duke University Press, 2015).",
        "N. Maldonado-Torres, “Sylvia Wynter: On the Human After Man,” in On Being Human as Praxis (2015)."
      ],
      "debates": [
        "Ongoing discussion on how Wynter’s sociogeny informs cognitive science and the politics of knowledge."
      ]
    },
    {
      "id": "roberto_espiritu",
      "label": "Roberto Espiritu",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["indigenous"],
      "topics": ["embodiment", "mind_body", "experience"],
      "summary": "Integrates Totonac spiritual practices with contemporary science to present an embodied philosophy of mind and environment.",
      "detail": "Espiritu combines Indigenous ritual knowledge with Taoist and scientific insights to argue that consciousness is participatory, ecological, and cultivated through communal practice. His writings invite dialogue between shamanic traditions and modern physics, foregrounding experiential transformation.",
      "majorWorks": ["Shamanic Tao", "Teatro en el aire y espiritu de las cosas", "China no se conquista"],
      "notes": "Community educator whose work spans philosophy, physics, and spirituality; documentation often circulates outside academic presses.",
      "sources": [
        "R. Espiritu, Shamans Tao, Serpiente Emplumada (2002).",
        "R. Espiritu, Teatro en el aire y espiritu de las cosas (2015)."
      ],
      "debates": [
        "Scholars debate how to situate Espiritu’s hybrid practice within academic philosophy and Indigenous epistemologies."
      ]
    },
    {
      "id": "gilbert_ryle",
      "label": "Gilbert Ryle",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["behaviorism", "category_mistakes", "consciousness"],
      "summary": "Critiqued Cartesian dualism as a category mistake and defended logical behaviorism.",
      "detail": "Ryle lampoons the \"ghost in the machine\" and argues that mental vocabulary tracks dispositions and intelligent performances. By exposing category mistakes in dualist thinking, he paves the way for behaviourist and functional analyses of mind.",
      "majorWorks": ["The Concept of Mind"],
      "notes": "Ryle's behaviourism remains contested; recent interpretations read him as a dispositional realist rather than eliminativist.",
      "sources": [
        "Gilbert Ryle, The Concept of Mind (University of Chicago Press, 2000).",
        "J. Tanney (ed.), The Oxford Handbook of Ryle (Oxford University Press, 2013)."
      ],
      "debates": [
        "Debate continues over whether Ryle's critique of mentalism collapses into a behaviourist reduction or preserves mental discourse."
      ]
    },
    {
      "id": "daniel_dennett",
      "label": "Daniel Dennett",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["consciousness", "intentionality", "cognitive_science"],
      "summary": "Advocates functional explanations of consciousness and intentional systems via the intentional stance.",
      "detail": "Dennett urges us to treat minds as real patterns best explained at the functional level, replacing qualia talk with predictive models. His multiple-drafts theory and intentional stance integrate philosophy with cognitive science, influencing debates on explanation and naturalised semantics.",
      "majorWorks": ["Consciousness Explained", "The Intentional Stance"],
      "notes": "Dennett's eliminativist tone is moderated in later work emphasising prediction and real patterns; critics target his treatment of phenomenal consciousness.",
      "sources": [
        "Daniel C. Dennett, Consciousness Explained (Little, Brown, 1991).",
        "Daniel C. Dennett, The Intentional Stance (MIT Press, 1987).",
        "R. Horgan and J. Tienson, “The Intentional Stance” in Contemporary Philosophy of Mind (Blackwell, 1996)."
      ],
      "debates": [
        "Phenomenologists and qualia realists argue Dennett's heterophenomenology cannot account for first-person evidence."
      ]
    },
    {
      "id": "hilary_putnam",
      "label": "Hilary Putnam",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["functionalism", "representation", "semantics"],
      "summary": "Introduced machine-state functionalism linking mental states to computational roles.",
      "detail": "Putnam’s machine functionalism treats mental states as universally realisable causal roles, separating psychology from strict brain identity. His semantic externalism and twin-earth arguments further show how mind stretches into environment and language.",
      "majorWorks": ["Minds and Machines", "Reason, Truth and History"],
      "notes": "Putnam later qualified strict functionalism, turning toward pragmatic realism; dataset highlights the early computational phase.",
      "sources": [
        "Hilary Putnam, “Minds and Machines,” in Mind, Language and Reality (Cambridge University Press, 1975).",
        "Hilary Putnam, Reason, Truth and History (Cambridge University Press, 1981).",
        "J. Bickle, “Multiple Realizability” in The Oxford Handbook of Philosophy of Mind (2009)."
      ],
      "debates": [
        "Multiple-realisation arguments remain central to defending functionalism against identity theorists."
      ]
    },
    {
      "id": "jerry_fodor",
      "label": "Jerry Fodor",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["functionalism", "mental_representation", "cognitive_science"],
      "summary": "Defended representational theory of mind and modular cognitive architecture.",
      "detail": "Fodor develops the language-of-thought hypothesis, positing an internal symbolic system underlying cognition. He combines functionalism with nativist modularity, influencing how cognitive science and philosophy conceive mental architecture.",
      "majorWorks": ["The Language of Thought"],
      "notes": "Fodor's modularity thesis targets perceptual input systems; debates continue over enculturated cognition and plasticity.",
      "sources": [
        "Jerry Fodor, The Language of Thought (Harvard University Press, 1975).",
        "Jerry Fodor, The Modularity of Mind (MIT Press, 1983).",
        "S. Stich, Deconstructing the Mind (Oxford University Press, 1996)."
      ],
      "debates": [
        "Critics argue Fodor's architecture cannot accommodate cross-modal plasticity and cultural learning."
      ]
    },
    {
      "id": "john_searle",
      "label": "John Searle",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic", "phenomenology"],
      "topics": ["intentionality", "consciousness", "social_ontology"],
      "summary": "Combined phenomenology and speech-act theory to defend biological naturalism about mind.",
      "detail": "Searle argues that intentionality is a biological feature grounded in first-person ontology, resisting reduction to computation. His Chinese Room thought experiment challenges strong AI and foregrounds the difference between syntax and semantics.",
      "majorWorks": ["Intentionality", "The Rediscovery of the Mind"],
      "notes": "Searle maintains a biologically grounded ontology of consciousness; critics debate whether his arguments block functionalist explanations.",
      "sources": [
        "John R. Searle, Intentionality (Cambridge University Press, 1983).",
        "John R. Searle, The Rediscovery of the Mind (MIT Press, 1992).",
        "N. Block, “The Mind as the Software of the Brain,” in Philosophical Perspectives (1995)."
      ],
      "debates": [
        "Debate continues over the force of the Chinese Room argument against computational theories of mind."
      ]
    },
    {
      "id": "patricia_churchland",
      "label": "Patricia Churchland",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["naturalist"],
      "topics": ["eliminativism", "neuroscience", "neural_correlates"],
      "summary": "Advocates a neurophilosophical approach, supporting eliminative materialism about folk psychology.",
      "detail": "Patricia Churchland blends neuroscience with philosophy to argue that folk psychological states may be replaced by neurobiological categories. Her work motivates naturalistic approaches to morality, cognition, and consciousness grounded in brain science.",
      "majorWorks": ["Neurophilosophy", "Brain-Wise"],
      "notes": "Emphasises integration of neuroscience with philosophical method; debate focuses on whether scientific progress will fully eliminate propositional attitudes.",
      "sources": [
        "Patricia S. Churchland, Neurophilosophy (MIT Press, 1986).",
        "Patricia S. Churchland, Brain-Wise (MIT Press, 2002).",
        "P. Churchland, “Eliminative Materialism” in The Oxford Handbook of Philosophy of Mind (2009)."
      ],
      "debates": [
        "Critics argue eliminativism neglects the explanatory role of intentional vocabularies in cognitive science."
      ]
    },
    {
      "id": "paul_churchland",
      "label": "Paul Churchland",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["naturalist"],
      "topics": ["eliminativism", "identity_theory", "neuroscience"],
      "summary": "Defends revisionary materialism grounded in neuroscience and connectionist models.",
      "detail": "Paul Churchland criticises propositional attitudes and argues for connectionist networks as better cognitive models. He sees scientific progress replacing commonsense psychology with neural descriptions, feeding eliminative materialism.",
      "majorWorks": ["Matter and Consciousness"],
      "notes": "Focuses on state-space semantics and connectionist inspiration; critics note the durability of propositional reasoning in cognitive practice.",
      "sources": [
        "Paul M. Churchland, Matter and Consciousness (MIT Press, 2013).",
        "Paul M. Churchland, The Engine of Reason, the Seat of the Soul (MIT Press, 1995).",
        "J. Ramsey, “Connectionism” in The Routledge Companion to Philosophy of Psychology (2009)."
      ],
      "debates": [
        "Debate centres on whether connectionist architectures can underwrite conceptual content without appeal to symbols."
      ]
    },
    {
      "id": "thomas_nagel",
      "label": "Thomas Nagel",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["phenomenality", "subjectivity", "consciousness"],
      "summary": "Highlighted the subjective character of experience, challenging reductionist theories.",
      "detail": "Nagel’s famous bat argument shows that subjective experience has a perspectival character resistant to third-person analysis. By stressing objective vs. subjective viewpoints, he challenges physicalist accounts to explain what conscious experience is like.",
      "majorWorks": ["What Is It Like to Be a Bat?"],
      "notes": "Nagel's argument spurred work on perspectival facts; later writings broaden the critique to moral realism and teleology.",
      "sources": [
        "Thomas Nagel, “What Is It Like to Be a Bat?” The Philosophical Review 83 (1974): 435–450.",
        "Thomas Nagel, The View from Nowhere (Oxford University Press, 1986).",
        "P. Stoljar, Ignorance and Imagination (Oxford University Press, 2006)."
      ],
      "debates": [
        "Physicalists respond with ability, acquaintance, or representationalist accounts to dissolve the explanatory gap."
      ]
    },
    {
      "id": "david_chalmers",
      "label": "David Chalmers",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["analytic"],
      "topics": ["hard_problem", "consciousness", "panpsychism"],
      "summary": "Argued for the explanatory gap between physical processes and phenomenal experience.",
      "detail": "Chalmers distinguishes the easy problems of cognition from the hard problem of why experience exists at all. His work revives property dualism and panpsychism as live options, pressing physicalists to bridge explanatory gaps.",
      "majorWorks": ["The Conscious Mind"],
      "notes": "Chalmers' structural realism motivates panpsychist and information-theoretic approaches; opponents propose illusionism or identity theories.",
      "sources": [
        "David J. Chalmers, The Conscious Mind (Oxford University Press, 1996).",
        "David J. Chalmers, “Facing Up to the Problem of Consciousness,” Journal of Consciousness Studies 2 (1995): 200–219.",
        "P. Goff, Consciousness and Fundamental Reality (Oxford University Press, 2017)."
      ],
      "debates": [
        "Illusionists contend the hard problem is misplaced, while panpsychists leverage Chalmers' arguments toward constitutive theories."
      ]
    },
    {
      "id": "thomas_metzinger",
      "label": "Thomas Metzinger",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["phenomenology", "cognitive_science"],
      "topics": ["phenomenal_consciousness", "self_model", "predictive_processing"],
      "summary": "Develops self-model theory of subjectivity grounded in neuroscience and predictive processing.",
      "detail": "Metzinger argues that phenomenal selfhood arises from an internal self-model that is transparent to the system generating it. His theory links phenomenal consciousness with predictive processing and neurocognitive evidence about body ownership and agency.",
      "majorWorks": ["Being No One"],
      "notes": "Self-model theory emphasises transparency and minimal phenomenal selfhood; critics argue it risks eliminativism about persons.",
      "sources": [
        "Thomas Metzinger, Being No One (MIT Press, 2003).",
        "Thomas Metzinger, “The Self-Model Theory of Subjectivity,” in The Oxford Handbook of Philosophy of Mind (2009).",
        "A. Newen, L. De Bruin, and S. Gallagher (eds.), The Oxford Handbook of 4E Cognition (Oxford University Press, 2018)."
      ],
      "debates": [
        "Debates address whether self-model theory can accommodate normative agency and social cognition."
      ]
    },
    {
      "id": "ned_block",
      "label": "Ned Block",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["analytic"],
      "topics": ["qualia", "phenomenal_consciousness", "representation"],
      "summary": "Distinguishes access and phenomenal consciousness to defend the reality of qualia.",
      "detail": "Block defends a distinction between phenomenal consciousness—the qualitative feels—and access consciousness tied to report and control. He uses thought experiments and empirical results to argue that phenomenality cannot be reduced to functional access.",
      "majorWorks": ["Troubles with Functionalism"],
      "notes": "Block's distinction informs debates over overflow and rich phenomenology; critics align with access intentionalism or cognitive theories.",
      "sources": [
        "Ned Block, “Troubles with Functionalism,” Minnesota Studies in the Philosophy of Science 9 (1978): 261–325.",
        "Ned Block, “On a Confusion about a Function of Consciousness,” Behavioral and Brain Sciences 18 (1995): 227–287.",
        "U. Kriegel, The Varieties of Consciousness (Oxford University Press, 2015)."
      ],
      "debates": [
        "Empirical work on partial report experiments tests Block's claim that phenomenality outstrips access."
      ]
    },
    {
      "id": "frank_jackson",
      "label": "Frank Jackson",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["analytic"],
      "topics": ["qualia", "knowledge_argument", "consciousness"],
      "summary": "Introduced the knowledge argument to show physicalism leaves out qualia.",
      "detail": "Jackson’s Mary thought experiment argues that factual knowledge about colour leaves something out—what it is like to see red. Although he later recanted, the argument still anchors debates about qualia, physicalism, and phenomenal knowledge.",
      "majorWorks": ["Epiphenomenal Qualia"],
      "notes": "Jackson later adopted representationalism; dataset retains the anti-physicalist phase shaping qualia debates.",
      "sources": [
        "Frank Jackson, “Epiphenomenal Qualia,” The Philosophical Quarterly 32 (1982): 127–136.",
        "Frank Jackson, “What Mary Didn't Know,” The Journal of Philosophy 83 (1986): 291–295.",
        "L. Nemirow, “Physicalism and the Cognitive Role of Acquaintance,” Pacific Philosophical Quarterly 61 (1980): 213–228."
      ],
      "debates": [
        "Physicalists propose ability/knowledge responses; some dualists generalise the argument to other sensory modalities."
      ]
    },
    {
      "id": "andy_clark",
      "label": "Andy Clark",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["cognitive_science"],
      "topics": ["extended_mind", "predictive_processing", "embodiment"],
      "summary": "Advocates the extended mind thesis and predictive processing frameworks for cognition.",
      "detail": "Clark champions the idea that cognitive processes can span brain, body, and environment, highlighting tools as extensions of mind. His work on predictive processing presents brains as prediction engines, reshaping theories of perception and action.",
      "majorWorks": ["Being There", "Surfing Uncertainty"],
      "notes": "Clark's 4E perspective balances embodied and computational insights; critics debate whether predictive processing collapses into internalism.",
      "sources": [
        "Andy Clark and David Chalmers, “The Extended Mind,” Analysis 58 (1998): 7–19.",
        "Andy Clark, Surfing Uncertainty (Oxford University Press, 2016).",
        "A. Clark, Being There (MIT Press, 1997)."
      ],
      "debates": [
        "Opponents argue extended cognition overgeneralises artefact use; proponents cite parity and complementarity principles."
      ]
    },
    {
      "id": "susan_schneider",
      "label": "Susan Schneider",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["analytic", "cognitive_science"],
      "topics": ["ai_consciousness", "mind_uploading", "ethics"],
      "summary": "Explores AI consciousness, digital minds, and the ethics of cognitive enhancement.",
      "detail": "Schneider analyses the metaphysics and ethics of artificial minds, arguing for cautious approaches to AI consciousness and neural enhancement. She evaluates mind-uploading scenarios, the future of personhood, and policy implications for superintelligence.",
      "majorWorks": ["Artificial You"],
      "notes": "Adds contemporary applied dimension to mind studies; integrates philosophy with cognitive science and policy.",
      "sources": [
        "Susan Schneider, Artificial You: AI and the Future of Your Mind (Princeton University Press, 2019).",
        "S. Schneider and E. Turner (eds.), Science Fiction and Philosophy (Wiley-Blackwell, 2016).",
        "S. Schneider, “The Language of Thought: A New Philosophical Direction,” (MIT Press, 2011)."
      ],
      "debates": [
        "Critics question whether current AI architectures can instantiate consciousness or personal identity."
      ]
    },
    {
      "id": "kwasi_wiredu",
      "label": "Kwasi Wiredu",
      "type": "philosopher",
      "era": "contemporary",
      "tradition": ["african"],
      "topics": ["personhood", "language", "decoloniality"],
      "summary": "Advanced Akan-informed conceptions of personhood and mind to critique Western metaphysical assumptions.",
      "detail": "Wiredu draws on Akan philosophy to argue that personhood is communal and gradual, challenging substance-based accounts of mind. His conceptual decolonisation programme exposes how language shapes metaphysical categories in debates about consciousness and identity.",
      "majorWorks": ["Cultural Universals and Particulars"],
      "notes": "Key figure in African philosophy of mind; raises methodological issues about translating mental concepts across cultures.",
      "sources": [
        "Kwasi Wiredu, Cultural Universals and Particulars (Indiana University Press, 1996).",
        "K. Wiredu, “The Moral Foundations of an African Culture” in Philosophy and an African Culture (Cambridge University Press, 1980).",
        "E. Eze (ed.), Postcolonial African Philosophy (Blackwell, 1997)."
      ],
      "debates": [
        "Philosophers debate how Wiredu’s consensual rationality model handles individuality and cognitive diversity."
      ]
    },
    {
      "id": "hylomorphism",
      "label": "Hylomorphism",
      "type": "theory",
      "era": "ancient",
      "tradition": ["classical"],
      "topics": ["form", "matter", "soul"],
      "summary": "Doctrine that each substance is a compound of matter and form, informing non-dualist mind theories.",
      "detail": "Hylomorphism holds that form organises matter into living beings, so the soul is neither separable nor reducible to body. This framework inspires contemporary neo-Aristotelian approaches to mental powers and biological explanation."
    },
    {
      "id": "cartesian_dualism",
      "label": "Cartesian Dualism",
      "type": "theory",
      "era": "early-modern",
      "tradition": ["rationalist"],
      "topics": ["dualism", "substance", "consciousness"],
      "summary": "Claims mind and body are distinct substances with fundamentally different natures.",
      "detail": "Cartesian dualism asserts two kinds of substance: thinking res cogitans and extended res extensa. It fuels debates about interaction, mental causation, and the explanatory power of purely mechanistic science."
    },
    {
      "id": "materialism",
      "label": "Materialism",
      "type": "theory",
      "era": "19th-century",
      "tradition": ["naturalist"],
      "topics": ["physicalism", "neuroscience", "consciousness"],
      "summary": "Positions mental states as reducible to or identical with physical states.",
      "detail": "Materialism claims that all phenomena, minds included, ultimately supervene on the physical. Variants range from identity theory to functionalism, motivating scientific programs that seek neural correlates and computational models of thought."
    },
    {
      "id": "identity_theory",
      "label": "Identity Theory",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["physicalism", "identity_theory", "neuroscience"],
      "summary": "Asserts mental states are identical with brain states, prioritising neural explanations.",
      "detail": "Type-identity theory identifies specific mental states with neural states, offering a direct physicalist route to mind–brain science. It faces multiple-realisation worries but continues to inspire research into neural signatures of mental phenomena."
    },
    {
      "id": "functionalism",
      "label": "Functionalism",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["functionalism", "computation", "representation"],
      "summary": "Explains mental states in terms of their causal roles within computational or systemic architectures.",
      "detail": "Functionalism defines mental states by what they do—how they transform inputs into outputs—rather than their material substrate. This flexibility underlies computational theories of mind and AI, while raising questions about qualia and embodiment."
    },
    {
      "id": "representationalism",
      "label": "Representationalism",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["representation", "mental_content", "cognitive_science"],
      "summary": "Models mind via internal representational states that track external features.",
      "detail": "Representationalism holds that cognition involves stand-ins for the world, whether sentences in a language of thought or vector spaces. It frames perception, belief, and intentionality in terms of content-bearing vehicles shaped by informational links."
    },
    {
      "id": "higher_order_thought",
      "label": "Higher-Order Thought Theory",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["higher_order", "consciousness", "awareness"],
      "summary": "Explains consciousness via higher-order representations of first-order mental states.",
      "detail": "Higher-order theories claim a state becomes conscious when represented by a suitable meta-state, capturing awareness of being in that state. They diagnose blindsight, introspection, and the difference between conscious and unconscious perception."
    },
    {
      "id": "eliminative_materialism",
      "label": "Eliminative Materialism",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["naturalist"],
      "topics": ["eliminativism", "neuroscience", "physicalism"],
      "summary": "Predicts folk psychological concepts will be replaced by neuroscientific accounts.",
      "detail": "Eliminative materialism forecasts that mental talk about beliefs and desires will yield to mature neuroscience. Advocates argue current commonsense categories are theory-laden relics that hinder scientific progress on cognition."
    },
    {
      "id": "behaviorism",
      "label": "Behaviorism",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["behavior", "consciousness", "functionalism"],
      "summary": "Explains mind through observable behavior patterns and environmental conditioning.",
      "detail": "Behaviorism sidelines inner mental states and analyses psychological concepts via dispositional tendencies and learning histories. While often criticised for ignoring phenomenology, it influenced early cognitive science and social science methodology."
    },
    {
      "id": "intentional_stance",
      "label": "Intentional Stance",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["analytic"],
      "topics": ["intentionality", "cognition", "prediction"],
      "summary": "Strategy of interpreting systems by ascribing beliefs and desires to predict behaviour.",
      "detail": "The intentional stance treats an entity as rational and belief-desire driven to generate fruitful predictions. Dennett’s move reframes intentional explanation as a pragmatic strategy rather than commitment to inner mental substance."
    },
    {
      "id": "embodied_cognition",
      "label": "Embodied Cognition",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["phenomenology", "cognitive_science"],
      "topics": ["embodiment", "cognition", "perception"],
      "summary": "Emphasises bodily engagement with the world as constitutive of cognition.",
      "detail": "Embodied cognition posits that intelligent behaviour emerges from sensorimotor dynamics rather than abstract symbol manipulation alone. It draws on phenomenology, robotics, and neuroscience to show how bodily skills structure reasoning."
    },
    {
      "id": "enactivism",
      "label": "Enactivism",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["phenomenology", "cognitive_science"],
      "topics": ["enactivism", "embodiment", "sense_making"],
      "summary": "Views cognition as arising from dynamic organism–environment interaction.",
      "detail": "Enactivists hold that organisms enact their worlds through embodied activity, emphasising autonomy and sense-making. Cognition is not internal representation but the ongoing coordination of movement, perception, and environment."
    },
    {
      "id": "extended_mind",
      "label": "Extended Mind Thesis",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["cognitive_science"],
      "topics": ["extended_mind", "embodiment", "cognition"],
      "summary": "Claims cognitive processes can extend beyond the skull into tools and environments.",
      "detail": "Extended mind theorists argue that notebooks, devices, and collaborative practices can constitute genuine parts of cognitive systems. The thesis widens the unit of analysis for mind, challenging traditional brain-bound views."
    },
    {
      "id": "predictive_processing",
      "label": "Predictive Processing",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["cognitive_science"],
      "topics": ["predictive_processing", "cognition", "perception"],
      "summary": "Models brains as prediction machines minimising error between expectations and sensory input.",
      "detail": "Predictive processing conceives the brain as a hierarchical Bayesian engine that anticipates input and updates via error signals. It unifies perception, action, and imagination under a single computational principle, influencing philosophy and neuroscience alike."
    },
    {
      "id": "panpsychism",
      "label": "Panpsychism",
      "type": "theory",
      "era": "contemporary",
      "tradition": ["monist"],
      "topics": ["panpsychism", "monism", "consciousness"],
      "summary": "Holds that consciousness or proto-experience is a fundamental feature of reality.",
      "detail": "Panpsychism posits that even elementary entities possess rudimentary experiential aspects, avoiding emergence from brute matter. Contemporary versions explore how micro-experiences combine into macroscopic minds without collapsing into dualism."
    },
    {
      "id": "mind_body_problem",
      "label": "Mind-Body Problem",
      "type": "concept",
      "era": "ancient",
      "tradition": ["classical"],
      "topics": ["mind_body", "dualism", "physicalism"],
      "summary": "Central question concerning the relation between mental phenomena and the physical body.",
      "detail": "The mind-body problem asks whether and how subjective, intentional states relate to physical processes. Competing answers range from dualisms and dual-aspect views to physicalist reduction and panpsychism."
    },
    {
      "id": "personal_identity",
      "label": "Personal Identity",
      "type": "concept",
      "era": "early-modern",
      "tradition": ["empiricist", "analytic"],
      "topics": ["personal_identity", "self", "consciousness"],
      "summary": "Problem of what makes a person the same across time despite psychological or bodily change.",
      "detail": "Debates on personal identity confront bodily continuity, psychological continuity, and narrative accounts of the self. Thought experiments such as teleportation or split-brain cases test our intuitions about survival and responsibility."
    },
    {
      "id": "collective_intentionality",
      "label": "Collective Intentionality",
      "type": "concept",
      "era": "contemporary",
      "tradition": ["phenomenology", "analytic"],
      "topics": ["intentionality", "social_cognition", "cognition"],
      "summary": "Explores how mental states can be held jointly, grounding social agency, shared attention, and group minds.",
      "detail": "Collective intentionality theorists argue that shared goals, beliefs, and emotions form irreducible social mental states. Debates span phenomenology, analytic philosophy, and cognitive science on whether group minds require special ontology or reduce to coordinated individuals.",
      "notes": "Touches collaborative agency, social ontology, and cognitive science models of joint action.",
      "sources": [
        "J. Searle, “Collective Intentions and Actions,” in Intentions in Communication (MIT Press, 1990).",
        "M. Gilbert, On Social Facts (Princeton University Press, 1992).",
        "S. Gallagher, “Shared Intentionality and Joint Attention,” in The Oxford Handbook of Social Cognition (2013)."
      ],
      "debates": [
        "Philosophers dispute whether collective mental states require plural subjects or can be reduced to I-intentions plus mutual belief."
      ]
    },
    {
      "id": "qualia",
      "label": "Qualia",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["qualia", "phenomenality", "experience"],
      "summary": "Refers to the subjective, qualitative aspects of conscious experience.",
      "detail": "Qualia designate the raw feels of experience—what red looks like or pain hurts like—and challenge purely functional analyses. They play a key role in arguments against physicalism, from inverted spectra to zombies."
    },
    {
      "id": "intentionality",
      "label": "Intentionality",
      "type": "concept",
      "era": "medieval",
      "tradition": ["phenomenology", "analytic"],
      "topics": ["intentionality", "aboutness", "representation"],
      "summary": "The directedness or aboutness of mental states toward objects or states of affairs.",
      "detail": "Intentionality captures how thoughts and perceptions are about something, even imaginary or abstract targets. From Brentano to Husserl and contemporary analytic writers, it anchors debates on mental content and reference."
    },
    {
      "id": "mental_representation",
      "label": "Mental Representation",
      "type": "concept",
      "era": "modern",
      "tradition": ["analytic"],
      "topics": ["representation", "cognitive_science", "intentionality"],
      "summary": "Structures or states that stand in for features of the world within cognitive systems.",
      "detail": "Mental representations are posited stand-ins—images, symbols, vectors—that encode information for reasoning and action. Debates focus on format, content determination, and whether cognition could proceed without representations at all."
    },
    {
      "id": "neural_correlates",
      "label": "Neural Correlates of Consciousness",
      "type": "concept",
      "era": "contemporary",
      "tradition": ["naturalist"],
      "topics": ["neural_correlates", "consciousness", "neuroscience"],
      "summary": "Neural systems whose activation is minimally sufficient for specific conscious experiences.",
      "detail": "Neural correlates of consciousness (NCCs) are the minimal brain events jointly sufficient for a conscious percept. Discovering NCCs informs theories of awareness, clinical diagnosis, and the physical basis of subjectivity."
    },
    {
      "id": "integrated_information",
      "label": "Integrated Information Theory",
      "type": "concept",
      "era": "contemporary",
      "tradition": ["cognitive_science"],
      "topics": ["consciousness", "information", "neuroscience"],
      "summary": "Proposes that consciousness corresponds to integrated information in a system, measured by φ.",
      "detail": "Integrated Information Theory models consciousness as the extent to which a system generates irreducible cause–effect structures. It links phenomenology to quantitative measures, influencing neuroscience experiments and sparking debate about panpsychism and AI consciousness.",
      "notes": "IIT remains controversial for its metaphysical commitments and empirical testability.",
      "sources": [
        "G. Tononi, “An Information Integration Theory of Consciousness,” BMC Neuroscience 5 (2004): 42.",
        "M. Oizumi, L. Albantakis, and G. Tononi, “From the Phenomenology to the Mechanisms of Consciousness,” PLoS Computational Biology 10 (2014): e1003588.",
        "A. Doerig et al., “The Hard Criteria for Empirically Evaluating Theories of Consciousness,” Nature Reviews Neuroscience 22 (2021): 338–352."
      ],
      "debates": [
        "Critics question whether IIT’s φ captures phenomenology or reintroduces panpsychism by attributing consciousness to simple systems."
      ]
    },
    {
      "id": "what_is_it_like",
      "label": "What Is It Like?",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["analytic"],
      "topics": ["phenomenality", "subjectivity", "experience"],
      "summary": "Nagel's framing of the qualitative character of conscious experience.",
      "detail": "The phrase \"what is it like\" captures the subjective mode of experience—its first-person feel. It frames debates on whether objective science can capture phenomenal consciousness without remainder."
    },
    {
      "id": "hard_problem",
      "label": "Hard Problem of Consciousness",
      "type": "concept",
      "era": "contemporary",
      "tradition": ["analytic"],
      "topics": ["hard_problem", "consciousness", "qualia"],
      "summary": "Questions how physical processes give rise to the qualitative feel of experience.",
      "detail": "The hard problem asks why neural activity should produce phenomenal character at all. It forces theories to explain more than information processing, motivating dualist, panpsychist, or radical physicalist responses."
    },
    {
      "id": "ai_consciousness",
      "label": "AI Consciousness",
      "type": "concept",
      "era": "contemporary",
      "tradition": ["cognitive_science"],
      "topics": ["ai_consciousness", "mind_uploading", "ethics"],
      "summary": "Explores whether artificial systems could host conscious experience and moral status.",
      "detail": "Debates about AI consciousness interrogate the criteria for phenomenal states in silicon, the possibility of digital persons, and ethical safeguards for advanced AI. Philosophers and cognitive scientists assess functional, biological, and informational accounts to evaluate artificial sentience.",
      "notes": "Connects philosophy of mind with AI safety, legal status, and policy-making debates about emerging technologies.",
      "sources": [
        "S. Schneider, Artificial You (Princeton University Press, 2019).",
        "T. Metzinger, “Artificial Suffering,” Journal of Artificial Intelligence and Consciousness 7 (2020): 9–36.",
        "E. Schwitzgebel, “If Materialism Is True, the United States Is Probably Conscious,” Philosophical Studies 172 (2015): 1697–1721."
      ],
      "debates": [
        "Criteria for recognising machine consciousness remain contested between functional, biological, and higher-order accounts."
      ]
    }
  ],
  "links": [
    { "source": "plato", "target": "mind_body_problem", "relation": "frames" },
    { "source": "aristotle", "target": "hylomorphism", "relation": "develops" },
    { "source": "hylomorphism", "target": "mind_body_problem", "relation": "addresses" },
    { "source": "rene_descartes", "target": "cartesian_dualism", "relation": "proposes" },
    { "source": "cartesian_dualism", "target": "mind_body_problem", "relation": "defines" },
    { "source": "john_locke", "target": "personal_identity", "relation": "introduces" },
    { "source": "john_locke", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "george_berkeley", "target": "mind_body_problem", "relation": "challenges" },
    { "source": "wang_yangming", "target": "embodied_cognition", "relation": "anticipates" },
    { "source": "wang_yangming", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "vasubandhu", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "vasubandhu", "target": "personal_identity", "relation": "challenges" },
    { "source": "baruch_spinoza", "target": "panpsychism", "relation": "anticipates" },
    { "source": "baruch_spinoza", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "gottfried_leibniz", "target": "panpsychism", "relation": "develops" },
    { "source": "nagarjuna", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "nagarjuna", "target": "vasubandhu", "relation": "influences" },
    { "source": "margaret_cavendish", "target": "materialism", "relation": "anticipates" },
    { "source": "margaret_cavendish", "target": "cartesian_dualism", "relation": "critiques" },
    { "source": "margaret_cavendish", "target": "panpsychism", "relation": "anticipates" },
    { "source": "ibn_sina", "target": "mind_body_problem", "relation": "anticipates" },
    { "source": "ibn_sina", "target": "personal_identity", "relation": "informs" },
    { "source": "ibn_sina", "target": "rene_descartes", "relation": "influences" },
    { "source": "ibn_sina", "target": "intentionality", "relation": "anticipates" },
    { "source": "immanuel_kant", "target": "mental_representation", "relation": "grounds" },
    { "source": "immanuel_kant", "target": "intentionality", "relation": "anticipates" },
    { "source": "david_hume", "target": "personal_identity", "relation": "critiques" },
    { "source": "david_hume", "target": "mind_body_problem", "relation": "questions" },
    { "source": "william_james", "target": "qualia", "relation": "anticipates" },
    { "source": "william_james", "target": "personal_identity", "relation": "questions" },
    { "source": "henri_bergson", "target": "william_james", "relation": "inspires" },
    { "source": "henri_bergson", "target": "maurice_merleau_ponty", "relation": "inspires" },
    { "source": "henri_bergson", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "edmund_husserl", "target": "intentionality", "relation": "systematizes" },
    { "source": "martin_heidegger", "target": "intentionality", "relation": "extends" },
    { "source": "martin_heidegger", "target": "embodied_cognition", "relation": "inspires" },
    { "source": "maurice_merleau_ponty", "target": "embodied_cognition", "relation": "inspires" },
    { "source": "maurice_merleau_ponty", "target": "enactivism", "relation": "anticipates" },
    { "source": "shaun_gallagher", "target": "embodied_cognition", "relation": "develops" },
    { "source": "shaun_gallagher", "target": "enactivism", "relation": "develops" },
    { "source": "shaun_gallagher", "target": "intentionality", "relation": "reinterprets" },
    { "source": "shaun_gallagher", "target": "collective_intentionality", "relation": "develops" },
    { "source": "evan_thompson", "target": "enactivism", "relation": "develops" },
    { "source": "evan_thompson", "target": "embodied_cognition", "relation": "extends" },
    { "source": "evan_thompson", "target": "predictive_processing", "relation": "bridges" },
    { "source": "evan_thompson", "target": "collective_intentionality", "relation": "extends" },
    { "source": "simone_de_beauvoir", "target": "embodied_cognition", "relation": "reinterprets" },
    { "source": "simone_de_beauvoir", "target": "intentionality", "relation": "reinterprets" },
    { "source": "simone_de_beauvoir", "target": "collective_intentionality", "relation": "reinterprets" },
    { "source": "luce_irigaray", "target": "simone_de_beauvoir", "relation": "extends" },
    { "source": "luce_irigaray", "target": "embodied_cognition", "relation": "reinterprets" },
    { "source": "luce_irigaray", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "frantz_fanon", "target": "embodied_cognition", "relation": "reframes" },
    { "source": "frantz_fanon", "target": "personal_identity", "relation": "reframes" },
    { "source": "frantz_fanon", "target": "collective_intentionality", "relation": "reframes" },
    { "source": "frantz_fanon", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "gloria_anzaldua", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "gloria_anzaldua", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "gloria_anzaldua", "target": "simone_de_beauvoir", "relation": "extends" },
    { "source": "gloria_anzaldua", "target": "frantz_fanon", "relation": "extends" },
    { "source": "jonardon_ganeri", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "jonardon_ganeri", "target": "intentionality", "relation": "reinterprets" },
    { "source": "jonardon_ganeri", "target": "collective_intentionality", "relation": "extends" },
    { "source": "jonardon_ganeri", "target": "vasubandhu", "relation": "reinterprets" },
    { "source": "xuanzang", "target": "vasubandhu", "relation": "develops" },
    { "source": "xuanzang", "target": "personal_identity", "relation": "challenges" },
    { "source": "xuanzang", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "anton_wilhelm_amo", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "anton_wilhelm_amo", "target": "materialism", "relation": "critiques" },
    { "source": "anton_wilhelm_amo", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "anton_wilhelm_amo", "target": "john_locke", "relation": "critiques" },
    { "source": "leroy_little_bear", "target": "embodied_cognition", "relation": "extends" },
    { "source": "leroy_little_bear", "target": "collective_intentionality", "relation": "extends" },
    { "source": "leroy_little_bear", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "leroy_little_bear", "target": "gloria_anzaldua", "relation": "aligns" },
    { "source": "gilbert_ryle", "target": "behaviorism", "relation": "defends" },
    { "source": "gilbert_ryle", "target": "cartesian_dualism", "relation": "critiques" },
    { "source": "daniel_dennett", "target": "intentional_stance", "relation": "proposes" },
    { "source": "daniel_dennett", "target": "predictive_processing", "relation": "supports" },
    { "source": "hilary_putnam", "target": "functionalism", "relation": "introduces" },
    { "source": "hilary_putnam", "target": "representationalism", "relation": "develops" },
    { "source": "jerry_fodor", "target": "functionalism", "relation": "develops" },
    { "source": "jerry_fodor", "target": "representationalism", "relation": "defends" },
    { "source": "jerry_fodor", "target": "mental_representation", "relation": "clarifies" },
    { "source": "john_searle", "target": "intentionality", "relation": "reinterprets" },
    { "source": "john_searle", "target": "mind_body_problem", "relation": "critiques" },
    { "source": "patricia_churchland", "target": "eliminative_materialism", "relation": "advocates" },
    { "source": "patricia_churchland", "target": "neural_correlates", "relation": "emphasizes" },
    { "source": "patricia_churchland", "target": "predictive_processing", "relation": "aligns" },
    { "source": "paul_churchland", "target": "identity_theory", "relation": "supports" },
    { "source": "paul_churchland", "target": "eliminative_materialism", "relation": "develops" },
    { "source": "paul_churchland", "target": "neural_correlates", "relation": "explores" },
    { "source": "thomas_nagel", "target": "what_is_it_like", "relation": "introduces" },
    { "source": "thomas_nagel", "target": "materialism", "relation": "critiques" },
    { "source": "david_chalmers", "target": "hard_problem", "relation": "coins" },
    { "source": "david_chalmers", "target": "panpsychism", "relation": "revives" },
    { "source": "david_chalmers", "target": "qualia", "relation": "defends" },
    { "source": "thomas_metzinger", "target": "predictive_processing", "relation": "extends" },
    { "source": "thomas_metzinger", "target": "neural_correlates", "relation": "examines" },
    { "source": "ned_block", "target": "qualia", "relation": "defends" },
    { "source": "ned_block", "target": "hard_problem", "relation": "intensifies" },
    { "source": "frank_jackson", "target": "qualia", "relation": "argues" },
    { "source": "frank_jackson", "target": "hard_problem", "relation": "supports" },
    { "source": "andy_clark", "target": "extended_mind", "relation": "co-develops" },
    { "source": "andy_clark", "target": "predictive_processing", "relation": "advances" },
    { "source": "susan_schneider", "target": "ai_consciousness", "relation": "develops" },
    { "source": "susan_schneider", "target": "extended_mind", "relation": "critiques" },
    { "source": "susan_schneider", "target": "hard_problem", "relation": "reframes" },
    { "source": "kwasi_wiredu", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "kwasi_wiredu", "target": "mind_body_problem", "relation": "critiques" },
    { "source": "kwasi_wiredu", "target": "collective_intentionality", "relation": "reinterprets" },
    { "source": "jose_vasconcelos", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "jose_vasconcelos", "target": "gloria_anzaldua", "relation": "anticipates" },
    { "source": "leopoldo_zea", "target": "collective_intentionality", "relation": "reinterprets" },
    { "source": "leopoldo_zea", "target": "kwasi_wiredu", "relation": "aligns" },
    { "source": "leopoldo_zea", "target": "sylvia_wynter", "relation": "anticipates" },
    { "source": "sylvia_wynter", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "sylvia_wynter", "target": "personal_identity", "relation": "reframes" },
    { "source": "sylvia_wynter", "target": "collective_intentionality", "relation": "extends" },
    { "source": "sylvia_wynter", "target": "kwasi_wiredu", "relation": "extends" },
    { "source": "roberto_espiritu", "target": "embodied_cognition", "relation": "extends" },
    { "source": "roberto_espiritu", "target": "mind_body_problem", "relation": "reinterprets" },
    { "source": "roberto_espiritu", "target": "henri_bergson", "relation": "aligns" },
    { "source": "moana_jackson", "target": "collective_intentionality", "relation": "reinterprets" },
    { "source": "moana_jackson", "target": "personal_identity", "relation": "reinterprets" },
    { "source": "moana_jackson", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "linda_tuhiwai_smith", "target": "methodology", "relation": "reinterprets" },
    { "source": "linda_tuhiwai_smith", "target": "collective_intentionality", "relation": "extends" },
    { "source": "linda_tuhiwai_smith", "target": "decoloniality", "relation": "extends" },
    { "source": "temple_grandin", "target": "cognition", "relation": "reinterprets" },
    { "source": "temple_grandin", "target": "experience", "relation": "reinterprets" },
    { "source": "simon_baron_cohen", "target": "social_cognition", "relation": "reinterprets" },
    { "source": "simon_baron_cohen", "target": "neuroscience", "relation": "extends" },
    { "source": "identity_theory", "target": "materialism", "relation": "supports" },
    { "source": "functionalism", "target": "materialism", "relation": "reinterprets" },
    { "source": "representationalism", "target": "mental_representation", "relation": "explains" },
    { "source": "higher_order_thought", "target": "hard_problem", "relation": "addresses" },
    { "source": "eliminative_materialism", "target": "materialism", "relation": "radicalizes" },
    { "source": "behaviorism", "target": "materialism", "relation": "extends" },
    { "source": "intentional_stance", "target": "behaviorism", "relation": "evolves" },
    { "source": "embodied_cognition", "target": "extended_mind", "relation": "supports" },
    { "source": "enactivism", "target": "embodied_cognition", "relation": "extends" },
    { "source": "predictive_processing", "target": "embodied_cognition", "relation": "bridges" },
    { "source": "integrated_information", "target": "hard_problem", "relation": "addresses" },
    { "source": "integrated_information", "target": "neural_correlates", "relation": "extends" },
    { "source": "integrated_information", "target": "panpsychism", "relation": "reinterprets" },
    { "source": "integrated_information", "target": "ai_consciousness", "relation": "supports" },
    { "source": "collective_intentionality", "target": "intentionality", "relation": "extends" },
    { "source": "collective_intentionality", "target": "mental_representation", "relation": "critiques" },
    { "source": "ai_consciousness", "target": "hard_problem", "relation": "extends" },
    { "source": "ai_consciousness", "target": "mind_body_problem", "relation": "extends" },
    { "source": "panpsychism", "target": "mind_body_problem", "relation": "reframes" },
    { "source": "qualia", "target": "hard_problem", "relation": "intensifies" },
    { "source": "neural_correlates", "target": "hard_problem", "relation": "investigates" },
    { "source": "personal_identity", "target": "mind_body_problem", "relation": "complicates" },
    { "source": "intentionality", "target": "mental_representation", "relation": "informs" },
    { "source": "mental_representation", "target": "mind_body_problem", "relation": "connects" }
  ]
};

window.PHILOSOPHY_MIND_GRAPH_DATA = PHILOSOPHY_MIND_GRAPH_DATA;

