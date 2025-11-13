/**
 * Science Fiction Tech Atlas dataset
 * Mirrors the structure used by the Philosophy of Mind atlas.
 */

const SCIENCE_FICTION_GRAPH_DATA = {
  "metadata": {
    "title": "Science Fiction Tech Atlas",
    "lastUpdated": "2025-11-11",
    "scopeNotes": "Cartography of influential science fiction authors, landmark works, and speculative technologies or concepts. Emphasis falls on Anglophone texts with growing coverage of global and Afrofuturist voices; subsequent releases will expand to Latin American, South Asian, and Francophone traditions.",
    "biasNotice": "Dataset currently privileges print literature from Europe and North America plus a handful of globally popular works. Film, television, and interactive media are represented selectively. Future iterations will rebalance toward underrepresented regions and collaborative media.",
    "methodology": [
      "Nodes document authors, individual works, and key speculative technologies or conceptual devices. Each entry includes contextual annotations, key sources, and historiographic notes.",
      "Relations highlight origin moments (introduces, coins), influential transmissions (popularises, extends), and critical reinventions of speculative technologies across media.",
      "Primary references include first editions or broadcast premieres; secondary references draw from genre histories, academic criticism, and interviews with creators."
    ],
    "citationGuidelines": [
      "Relatronica, “Science Fiction Tech Atlas,” interactive dataset (2025).",
      "Cite associated primary works and scholarship when referencing specific nodes or relations."
    ],
    "typeMeta": {
      "philosopher": {
        "label": "Author",
        "icon": "\uf4fb",
        "iconClass": "fa-user-astronaut",
        "color": "#8e44ad",
        "baseRadius": 6,
        "activeRadius": 10,
        "iconFontSize": "0.66rem"
      },
      "theory": {
        "label": "Work",
        "icon": "\uf518",
        "iconClass": "fa-book-open",
        "color": "#2980b9",
          "baseRadius": 12,
          "activeRadius": 16,
        "iconFontSize": "0.66rem"
      },
      "concept": {
        "label": "Technology / Concept",
        "icon": "\uf5d2",
        "iconClass": "fa-atom",
        "color": "#e67e22",
          "baseRadius": 13,
          "activeRadius": 17,
        "iconFontSize": "0.68rem"
      }
    }
  },
  "nodes": [
    {
      "id": "mary_shelley",
      "label": "Mary Shelley",
      "type": "philosopher",
      "era": "19th-century",
      "tradition": ["proto_scifi", "gothic"],
      "topics": ["synthetic_life", "ethics", "artificial_intelligence"],
      "genres": ["proto_sf"],
      "summary": "Author who fused Romantic sensibilities with speculative biology, sketching one of the earliest cautionary tales about engineered life.",
      "detail": "Shelley’s laboratory-born creature foregrounds responsibility, empathy, and unintended consequences long before the phrase “artificial intelligence” emerged. Her narrative frames technology as a social relation rather than raw invention, anticipating debates on rights for synthetic beings.",
      "majorWorks": ["Frankenstein; or, The Modern Prometheus (1818/1831)"],
      "notes": "Scholars trace early bioethics, posthuman identity, and maker accountability back to Shelley’s portrayal of the Creature’s interior perspective and social rejection.",
      "sources": [
        "Mary Shelley, Frankenstein (1818).",
        "Brian Aldiss, Billion Year Spree (1973).",
        "Elizabeth Bear, “Inventing the Future: Mary Shelley and Science Fiction,” Tor.com (2014)."
      ],
      "debates": [
        "Debate persists over whether Frankenstein constitutes true science fiction or Romantic moral philosophy with speculative trappings."
      ]
    },
    {
      "id": "frankenstein",
      "label": "Frankenstein",
      "type": "theory",
      "era": "19th-century",
      "tradition": ["proto_scifi"],
      "topics": ["synthetic_life", "ethics", "posthumanism"],
      "genres": ["proto_sf", "biotech"],
      "summary": "Novel dramatizing laboratory-created life and the ethical limits of experimentation.",
      "detail": "Victor Frankenstein’s experiment in reanimation interrogates scientific hubris, consent, and the social obligations owed to new forms of intelligence. The text seeds the trope of the discarded creation demanding recognition.",
      "majorWorks": ["First edition, Lackington, Hughes, Harding, Mavor & Jones, 1818."],
      "notes": "Later adaptations amplified the technological spectacle but often softened the Creature’s introspective voice.",
      "sources": [
        "Mary Shelley, Frankenstein (1818).",
        "Chris Baldick, In Frankenstein's Shadow (Oxford University Press, 1987)."
      ],
      "debates": [
        "Whether the novel endorses techno-progressivism or embodies a conservative critique of scientific ambition remains a central interpretive split."
      ]
    },
    {
      "id": "edward_page_mitchell",
      "label": "Edward Page Mitchell",
      "type": "philosopher",
      "era": "19th-century",
      "tradition": ["proto_scifi", "american"],
      "topics": ["teleportation", "time_travel", "media_history"],
      "genres": ["proto_sf"],
      "summary": "Newspaper editor whose anonymously published stories introduced several core science fiction devices, including teleportation.",
      "detail": "Mitchell’s fiction in the New York Sun experimented with instantaneous travel, future societies, and sentient machines decades before genre codification. His work circulated widely without authorial credit until rediscovered by genre historians.",
      "majorWorks": ["The Man Without a Body (1877)", "The Clock that Went Backward (1881)"],
      "notes": "Although lesser-known, Mitchell’s inventions heavily influenced pulp-era writers who referenced his scenarios via reprints.",
      "sources": [
        "Edward Page Mitchell, The Man Without a Body (1877).",
        "Sam Moskowitz, Science Fiction by Gaslight (Doubleday, 1968)."
      ],
      "debates": [
        "Mitchell’s anonymity complicates direct influence tracing; historians rely on publication records and later author testimonies."
      ]
    },
    {
      "id": "the_man_without_a_body",
      "label": "The Man Without a Body",
      "type": "theory",
      "era": "19th-century",
      "tradition": ["proto_scifi"],
      "topics": ["teleportation", "transport", "ethics"],
      "genres": ["proto_sf", "time_travel_sf"],
      "summary": "Short story featuring a teleportation device that transmits information faster than matter, accidentally severing a scientist’s body.",
      "detail": "Mitchell’s tale frames teleportation as an information problem—matter converted to signals—while dramatizing failure when the receiver lacks sufficient instructions. The story seeds later anxieties about identity continuity during transport.",
      "majorWorks": ["Published anonymously in the New York Sun, 1877."],
      "notes": "Prefigures transporter mishaps popularised by Star Trek and The Fly.",
      "sources": [
        "Edward Page Mitchell, The Man Without a Body (1877).",
        "Gary K. Wolfe, The Known and the Unknown (1980)."
      ],
      "debates": [
        "Critics note the story blends comic tone with gruesome consequences, complicating its moral stance on risky experimentation."
      ]
    },
    {
      "id": "jules_verne",
      "label": "Jules Verne",
      "type": "philosopher",
      "era": "19th-century",
      "tradition": ["proto_scifi", "european"],
      "topics": ["planetary_exploration", "engineering", "adventure"],
      "genres": ["exploration_sf"],
      "summary": "Prolific novelist whose technophilic voyages popularised speculative engineering and global exploration.",
      "detail": "Verne’s meticulous research and serialized publication model made industrial innovation exciting to a mass readership. His Journeys Extraordinary framed exploration as collaborative, infrastructural undertakings.",
      "majorWorks": ["Journey to the Center of the Earth (1864)", "From the Earth to the Moon (1865)"],
      "notes": "Verne frequently foregrounded international teams and logistical detail, contrasting with lone-genius narratives.",
      "sources": [
        "Jules Verne, Journey to the Center of the Earth (1864).",
        "Arthur B. Evans, Jules Verne Rediscovered (1988)."
      ],
      "debates": [
        "Scholars discuss whether Verne merely extrapolated from contemporary science or genuinely predicted new technologies."
      ]
    },
    {
      "id": "journey_to_the_center_of_the_earth",
      "label": "Journey to the Center of the Earth",
      "type": "theory",
      "era": "19th-century",
      "tradition": ["proto_scifi"],
      "topics": ["planetary_exploration", "geoscience"],
      "genres": ["exploration_sf"],
      "summary": "Adventure novel envisioning subterranean expeditions and speculative geology.",
      "detail": "Verne fuses Bildungsroman elements with scientific speculation, positing prehistoric ecosystems and new geologic pathways accessible through daring engineering.",
      "majorWorks": ["First French edition, Pierre-Jules Hetzel, 1864."],
      "notes": "The narrative’s structured expedition format became a template for exploratory sf.",
      "sources": [
        "Jules Verne, Voyage au centre de la Terre (1864).",
        "William Butcher, Jules Verne: The Definitive Biography (2006)."
      ],
      "debates": [
        "The novel’s scientific rigor is contested; some view it as proto-science outreach, others as adventure romance."
      ]
    },
    {
      "id": "h_g_wells",
      "label": "H. G. Wells",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["proto_scifi", "british"],
      "topics": ["time_travel", "posthumanism", "social_speculation"],
      "genres": ["proto_sf", "dystopia_sf"],
      "summary": "Early modern science fiction author whose social critique and speculative devices shaped genre DNA.",
      "detail": "Wells combined evolutionary theory with social commentary, using estranged futures to critique Victorian class structures and imperialism. He legitimised time travel as a literary thought experiment.",
      "majorWorks": ["The Time Machine (1895)", "The War of the Worlds (1898)"],
      "notes": "Advocated for world state governance and science-informed policy, influencing later technocratic narratives.",
      "sources": [
        "H. G. Wells, The Time Machine (1895).",
        "Darko Suvin, Metamorphoses of Science Fiction (1979)."
      ],
      "debates": [
        "Wells oscillated between utopian and dystopian visions; critics debate the consistency of his social prescriptions."
      ]
    },
    {
      "id": "the_time_machine",
      "label": "The Time Machine",
      "type": "theory",
      "era": "19th-century",
      "tradition": ["new_wave"],
      "topics": ["time_travel", "posthumanism", "social_speculation"],
      "genres": ["time_travel_sf", "philosophical_sf"],
      "summary": "Novella formalising time travel via a mechanical device, linking temporal journeys to social critique.",
      "detail": "Wells established explicit rules for travelling along the time dimension, framing the Eloi and Morlocks as class futures shaped by industrial stratification.",
      "majorWorks": ["Heinemann, 1895."],
      "notes": "Popularised the trope of time travel as scientific apparatus rather than supernatural event.",
      "sources": [
        "H. G. Wells, The Time Machine (1895).",
        "Paul K. Alkon, Origins of Futuristic Fiction (1987)."
      ],
      "debates": [
        "Interpretations vary: evolutionary allegory, socialist warning, or reflection on entropy and decay."
      ]
    },
    {
      "id": "karel_capek",
      "label": "Karel Čapek",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["proto_scifi", "european"],
      "topics": ["robotics", "labour", "social_speculation"],
      "genres": ["ai_robotics", "social_sf"],
      "summary": "Czech playwright whose drama R.U.R. coined the word 'robot' and linked synthetic labour to political power.",
      "detail": "Čapek turned the Czech word for forced labour (robota) into a metaphor for manufactured workers, framing automation as a crisis of emancipation and control. His robots are biochemical beings, foregrounding embodiment, labour movements, and colonial exploitation decades before mid-century robotics.",
      "majorWorks": ["R.U.R. (Rossum's Universal Robots) (1920)", "War with the Newts (1936)"],
      "notes": "Collaborated with his brother Josef Čapek on the original idea; the premiere at Prague's National Theatre in 1921 quickly travelled to London and Broadway.",
      "sources": [
        "Karel Čapek, R.U.R. (1920).",
        "Peter Zusi, “R.U.R. and the Form of the Robot,” Representations 137 (2017).",
        "Ivan Klíma, Karel Čapek: Life and Work (1990)."
      ],
      "debates": [
        "Scholars discuss whether Čapek advocated technophobia or urged democratic stewardship of automation."
      ]
    },
    {
      "id": "r_u_r",
      "label": "R.U.R. (Rossum's Universal Robots)",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["proto_scifi", "european"],
      "topics": ["robotics", "labour", "governance"],
      "genres": ["ai_robotics", "dystopia_sf"],
      "summary": "Expressionist drama in which synthetic workers revolt, inaugurating the modern imagination of robots and automation politics.",
      "detail": "R.U.R. stages robots as artificially grown biological labourers, exploring corporate monopolies, dehumanisation, and revolutionary subjectivity. The play circulated globally, seeding the robot trope in pulp magazines, Soviet cinema, and engineering discourse.",
      "majorWorks": ["Premiered 1921 (Prague); English translation 1923."],
      "notes": "The epilogue introduces a second-generation robot couple, infusing technogenesis with humanist renewal.",
      "sources": [
        "Karel Čapek, R.U.R. (1920).",
        "Darko Suvin, Metamorphoses of Science Fiction (1979)."
      ],
      "debates": [
        "Readers dispute whether the ending endorses technocratic paternalism or a hybrid post-human ethics."
      ]
    },
    {
      "id": "yevgeny_zamyatin",
      "label": "Yevgeny Zamyatin",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["european", "social_design"],
      "topics": ["utopia", "governance", "social_speculation"],
      "genres": ["dystopia_sf"],
      "summary": "Russian author of We, a prototypical dystopia interrogating industrial rationalism, surveillance, and mass psychology.",
      "detail": "Zamyatin fused naval engineering expertise with avant-garde aesthetics to critique Taylorism and Soviet collectivism. His vision of glass architecture, numeric citizens, and the Bureau of Guardians informed later dystopias by Orwell, Huxley, and Delany.",
      "majorWorks": ["We (1921)"],
      "notes": "Manuscript smuggled to the West after Soviet censorship; later influenced Cold War debates on technocracy.",
      "sources": [
        "Yevgeny Zamyatin, We (1921).",
        "Patrick Parrinder, Science Fiction: Its Criticism and Teaching (1980)."
      ],
      "debates": [
        "Historians examine whether We is primarily anti-Soviet satire or a broader critique of modernist control systems."
      ]
    },
    {
      "id": "we_zamyatin",
      "label": "We",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["social_design", "european"],
      "topics": ["utopia", "governance", "social_speculation"],
      "genres": ["dystopia_sf"],
      "summary": "Dystopian novel depicting the One State, where mathematicised governance suppresses desire and imagination.",
      "detail": "Narrated by engineer D-503, We details state-mandated transparency, integral calculus as ideology, and rebellion sparked by art and eros. It became a key template for analysing the entanglement of technology, bureaucracy, and individuality.",
      "majorWorks": ["First English translation, E. Zamyatin, We (1924)."],
      "notes": "Anticipates debates on surveillance architecture and algorithmic governance.",
      "sources": [
        "Yevgeny Zamyatin, We (1921).",
        "Gregory Claeys, Dystopia: A Natural History (2017)."
      ],
      "debates": [
        "Some read the ending as hopeful artistic transcendence; others see inescapable repression."
      ]
    },
    {
      "id": "robert_a_heinlein",
      "label": "Robert A. Heinlein",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["golden_age", "american"],
      "topics": ["governance", "space", "social_speculation"],
      "genres": ["military_sf", "space_opera"],
      "summary": "Heinlein professionalised American science fiction with militarised futures, libertarian experiments, and detailed spaceflight engineering.",
      "detail": "A naval engineer turned author, he advanced hard-sf rigor, citizen-soldier ideology, and social thought experiments. His juveniles inspired aerospace careers, while later novels debated civic duty, polyamory, and anarcho-capitalism.",
      "majorWorks": ["The Moon Is a Harsh Mistress (1966)", "Starship Troopers (1959)"],
      "notes": "Mentored younger writers through the 'Manhattan Project' of Campbell's Astounding magazine.",
      "sources": [
        "Robert A. Heinlein, Starship Troopers (1959).",
        "Alexei Panshin, Heinlein in Dimension (1968).",
        "William H. Patterson, Robert A. Heinlein: In Dialogue with His Century (2010)."
      ],
      "debates": [
        "Critics polarise over whether Heinlein endorses authoritarian militarism or stages cautionary thought experiments."
      ]
    },
    {
      "id": "starship_troopers",
      "label": "Starship Troopers",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["golden_age", "american"],
      "topics": ["governance", "space", "ethics"],
      "genres": ["military_sf"],
      "summary": "Military sf novel portraying powered armour infantry, civic militarism, and interspecies war as tests of citizenship.",
      "detail": "Told through cadet Juan Rico, the novel interleaves boot-camp pedagogy, exo-suit tactics, and lectures on civic virtue. It shaped military SF aesthetics and later media from anime to war games.",
      "majorWorks": ["G. P. Putnam's Sons, 1959."],
      "notes": "Adapted into Paul Verhoeven's 1997 film, which offered satirical critique of fascist spectacle.",
      "sources": [
        "Robert A. Heinlein, Starship Troopers (1959).",
        "Graham Sleight, “The Century's Best SF Novels: Starship Troopers,” Strange Horizons (2002)."
      ],
      "debates": [
        "Philosophers interrogate whether its limited franchise model constitutes elitist democracy or satirical provocation."
      ]
    },
    {
      "id": "ray_bradbury",
      "label": "Ray Bradbury",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["american", "golden_age"],
      "topics": ["planetary_exploration", "social_speculation", "utopia"],
      "genres": ["social_sf", "exploration_sf"],
      "summary": "Literary fabulist whose lyrical sf interrogated colonial nostalgia, censorship, and technophobia.",
      "detail": "Bradbury's prose emphasised atmosphere and moral allegory over hard science. The Martian Chronicles and Fahrenheit 451 foreground settler melancholia, media saturation, and the fragility of memory.",
      "majorWorks": ["The Martian Chronicles (1950)", "Fahrenheit 451 (1953)"],
      "notes": "Bridged pulp magazines and mainstream literature, influencing New Wave experimentalism.",
      "sources": [
        "Ray Bradbury, The Martian Chronicles (1950).",
        "Jonathan R. Eller, Becoming Ray Bradbury (2011)."
      ],
      "debates": [
        "Critics assess whether Bradbury's Mars critiques or reproduces colonial romanticism."
      ]
    },
    {
      "id": "martian_chronicles",
      "label": "The Martian Chronicles",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["american"],
      "topics": ["planetary_exploration", "utopia", "social_speculation"],
      "genres": ["social_sf", "first_contact_sf"],
      "summary": "Story cycle mapping human colonisation of Mars, exposing settler violence, nostalgia, and ecological hubris.",
      "detail": "Each vignette juxtaposes mid-century Americana with alien ruins, telepathic survivors, and colonists fleeing Earthly crises. The text remains central to discourses on terraforming ethics and indigenous erasure.",
      "majorWorks": ["Doubleday, 1950."],
      "notes": "Frequently adapted for radio, television, and stage, expanding its cultural imprint.",
      "sources": [
        "Ray Bradbury, The Martian Chronicles (1950).",
        "Eric S. Rabkin, “Ray Bradbury's Mars,” Extrapolation 23.3 (1982)."
      ],
      "debates": [
        "Readers contest whether Bradbury advocates withdrawal from colonial projects or naturalises settler destiny."
      ]
    },
    {
      "id": "samuel_r_delany",
      "label": "Samuel R. Delany",
      "type": "philosopher",
      "era": "late-20th-century",
      "tradition": ["new_wave", "american"],
      "topics": ["social_speculation", "communication", "identity"],
      "genres": ["social_sf", "cyberpunk"],
      "summary": "Delany redefined New Wave sf with linguistic experimentation, queer theory, and analyses of race and capitalism.",
      "detail": "His novels foreground semiotics, marginalised subjectivities, and alternative economies, while his criticism bridges sf studies and literary theory. Works such as Babel-17 and Dhalgren interrogate language as technology and cities as systems.",
      "majorWorks": ["Babel-17 (1966)", "Dhalgren (1975)"],
      "notes": "One of the first Black queer voices to receive mainstream sf awards; also a foundational critic with The Jewel-Hinged Jaw.",
      "sources": [
        "Samuel R. Delany, Babel-17 (1966).",
        "Matthew Cheney (ed.), After the Apocalypse: Essays on Samuel R. Delany (2022)."
      ],
      "debates": [
        "Scholars debate Delany's shifting politics, from anarchist collectives to market critiques."
      ]
    },
    {
      "id": "babel_17",
      "label": "Babel-17",
      "type": "theory",
      "era": "late-20th-century",
      "tradition": ["new_wave"],
      "topics": ["communication", "identity", "posthumanism"],
      "genres": ["cyberpunk", "social_sf"],
      "summary": "Novel treating language as a weaponised technology that rewires cognition and allegiance.",
      "detail": "Poet-spy Rydra Wong investigates an alien code capable of reshaping perception. Delany links linguistics to cybernetic warfare, embodied difference, and queer kinship aboard multispecies crews.",
      "majorWorks": ["Ace Books, 1966."],
      "notes": "Won the Nebula Award; influenced linguistic relativity debates in sf and anthropology.",
      "sources": [
        "Samuel R. Delany, Babel-17 (1966).",
        "Sherryl Vint, Bodies of Tomorrow (2007)."
      ],
      "debates": [
        "Critics examine whether Babel-17 endorses Sapir-Whorf determinism or highlights interpretive agency."
      ]
    },
    {
      "id": "strugatsky_brothers",
      "label": "Arkady & Boris Strugatsky",
      "type": "philosopher",
      "era": "late-20th-century",
      "tradition": ["european"],
      "topics": ["first_contact", "social_speculation", "risk"],
      "genres": ["first_contact_sf", "weird_sf"],
      "summary": "Soviet duo blending philosophical satire with cosmic pessimism, influencing global sf and film (Stalker).",
      "detail": "The Strugatskys wrote for Soviet periodicals while navigating censorship, critiquing bureaucracy through thought experiments about alien artefacts, time travel, and utopian stagnation.",
      "majorWorks": ["Roadside Picnic (1972)", "Hard to Be a God (1964)"],
      "notes": "Collaborated closely with filmmaker Andrei Tarkovsky; their novels circulated in samizdat form.",
      "sources": [
        "Arkady & Boris Strugatsky, Roadside Picnic (1972).",
        "Darko Suvin, Soviet Science Fiction (1976)."
      ],
      "debates": [
        "Analysts weigh their ambivalent portrayal of Soviet modernity—critical yet humanist."
      ]
    },
    {
      "id": "roadside_picnic",
      "label": "Roadside Picnic",
      "type": "theory",
      "era": "late-20th-century",
      "tradition": ["european"],
      "topics": ["first_contact", "alien_consciousness", "risk"],
      "genres": ["first_contact_sf", "weird_sf"],
      "summary": "Novel exploring hazardous alien Zones left after a fleeting visitation, reframing contact as ecological aftercare.",
      "detail": "Stalker Red Schuhart scavenges artefacts in a quarantined Zone, confronting class stratification, black markets, and epistemic humility. The book inspired Tarkovsky's Stalker and countless games and novels about exclusion zones.",
      "majorWorks": ["Macmillan, 1977 (English)."],
      "notes": "Introduces the 'wish-granting' Golden Sphere, a metaphor for desire and ruin.",
      "sources": [
        "Arkady & Boris Strugatsky, Roadside Picnic (1972).",
        "Mark Bould, “The Zone: Tarkovsky's Stalker,” Science Fiction Film and Television 3.1 (2010)."
      ],
      "debates": [
        "Interpretations vary between existential surrealism and materialist critique of salvage capitalism."
      ]
    },
    {
      "id": "the_matrix",
      "label": "The Matrix",
      "type": "theory",
      "era": "late-20th-century",
      "tradition": ["cyberpunk"],
      "topics": ["cyberspace", "artificial_intelligence", "posthumanism"],
      "genres": ["cyberpunk", "philosophical_sf"],
      "summary": "Film reimagining cyberspace as a simulated prison governed by AI, blending action cinema with philosophical allegory.",
      "detail": "Written and directed by the Wachowskis, The Matrix synthesises cyberpunk literature, Hong Kong cinema, and hacker culture. Bullet time aesthetics and red-pill tropes redefined digital subjectivity debates.",
      "majorWorks": ["Warner Bros., 1999 (film)."],
      "notes": "Spawned transmedia expansions, academic conferences, and philosophical readers interrogating reality and identity.",
      "sources": [
        "The Wachowskis, The Matrix (1999).",
        "William Irwin (ed.), The Matrix and Philosophy (2002)."
      ],
      "debates": [
        "Reception oscillates between liberatory queer allegory and co-opted culture-war rhetoric."
      ]
    },
    {
      "id": "isaac_asimov",
      "label": "Isaac Asimov",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["golden_age", "american"],
      "topics": ["robotics", "artificial_intelligence", "governance"],
      "genres": ["ai_robotics", "hard_sf"],
      "summary": "Golden Age author who codified robotics ethics and large-scale futurist historiography.",
      "detail": "Asimov’s Three Laws of Robotics reframed machine agency in legalistic terms, while his Foundation saga imagined mathematical sociology steering galactic governance.",
      "majorWorks": ["I, Robot (1950)", "Foundation (1951)"],
      "notes": "Collaborated with editors like John W. Campbell to shape magazine-era expectations for “hard” sf logic.",
      "sources": [
        "Isaac Asimov, I, Robot (1950).",
        "James Gunn, The Road to Science Fiction Volume 3 (1979)."
      ],
      "debates": [
        "Critics question whether the Three Laws reinforce obedience fantasies or open space for machine autonomy."
      ]
    },
    {
      "id": "i_robot",
      "label": "I, Robot",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["golden_age"],
      "topics": ["robotics", "artificial_intelligence", "ethics"],
      "genres": ["ai_robotics", "philosophical_sf"],
      "summary": "Fix-up collection establishing the Three Laws framework and dramatizing machine moral dilemmas.",
      "detail": "Stories explore edge cases—law conflicts, self-reference, emergent identity—framing robots as partners whose reliability hinges on well-designed constraints.",
      "majorWorks": ["Gnome Press, 1950."],
      "notes": "Later media adaptations often simplify or subvert the law structure for action-driven plots.",
      "sources": [
        "Isaac Asimov, I, Robot (1950).",
        "Susan Leigh Anderson, “Asimov’s Three Laws of Robotics,” IEEE Intelligent Systems (2008)."
      ],
      "debates": [
        "Philosophers dispute whether the laws meaningfully encode ethics or replicate obedience myths."
      ]
    },
    {
      "id": "arthur_c_clarke",
      "label": "Arthur C. Clarke",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["golden_age", "british"],
      "topics": ["first_contact", "artificial_intelligence", "planetary_exploration"],
      "genres": ["first_contact_sf", "hard_sf"],
      "summary": "Writer-futurist whose collaborations bridged hard science, space advocacy, and metaphysical speculation.",
      "detail": "Clarke articulated satellite communication, staged enigmatic alien artifacts, and interrogated human evolution alongside machine intelligence.",
      "majorWorks": ["Childhood's End (1953)", "2001: A Space Odyssey (1968)"],
      "notes": "His partnership with Stanley Kubrick blended cinematic spectacle with philosophical enquiry.",
      "sources": [
        "Arthur C. Clarke & Stanley Kubrick, 2001: A Space Odyssey (1968).",
        "Neil McAleer, Arthur C. Clarke: Odyssey of a Visionary (2010)."
      ],
      "debates": [
        "Clarke oscillates between techno-optimism and cosmic mystery; critics debate whether his endings endorse transcendence or surrender."
      ]
    },
    {
      "id": "two_thousand_one",
      "label": "2001: A Space Odyssey",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["golden_age"],
      "topics": ["artificial_intelligence", "first_contact", "posthumanism"],
      "genres": ["first_contact_sf", "ai_robotics"],
      "summary": "Novel-film duet exploring AI autonomy, extraterrestrial artifacts, and human evolution.",
      "detail": "HAL 9000’s breakdown crystallised anxieties about machine reliability, while the monoliths recast humanity as stewards of cosmic developmental leaps.",
      "majorWorks": ["MGM film & New American Library novel, 1968."],
      "notes": "Structure mirrors symphonic movements, guiding readers from prehistory to transcendence.",
      "sources": [
        "Arthur C. Clarke, 2001: A Space Odyssey (1968).",
        "Michel Chion, Kubrick’s Cinema Odyssey (1985)."
      ],
      "debates": [
        "Interpretations range from psychedelic mysticism to rigorous evolutionary metaphor."
      ]
    },
    {
      "id": "gene_roddenberry",
      "label": "Gene Roddenberry",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["american", "television"],
      "topics": ["teleportation", "utopia", "first_contact"],
      "genres": ["media_sf", "first_contact_sf"],
      "summary": "Producer-creator whose Star Trek franchise embedded optimistic humanism, teleporters, and replicators into popular culture.",
      "detail": "Roddenberry’s writers’ room leveraged speculative tech as allegorical tools for civil rights, diplomacy, and cooperative exploration. The transporter addressed production budgets while inspiring generations of teleportation narratives.",
      "majorWorks": ["Star Trek: The Original Series (1966–1969)"],
      "notes": "Franchise development introduced collaborative worldbuilding pipelines spanning decades and mediums.",
      "sources": [
        "Star Trek: The Original Series, Desilu Productions (1966).",
        "Lincoln Geraghty, Living with Star Trek (2007)."
      ],
      "debates": [
        "Fans and scholars dispute the balance between utopian idealism and militaristic Starfleet framing."
      ]
    },
    {
      "id": "star_trek_tos",
      "label": "Star Trek: The Original Series",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["television"],
      "topics": ["teleportation", "first_contact", "utopia"],
      "genres": ["media_sf", "first_contact_sf"],
      "summary": "Television series portraying a post-scarcity Federation, transporters, and egalitarian crews.",
      "detail": "Budget-driven transporter beams evolved into a core speculative technology, while episodic diplomacy normalized negotiation-first approaches to alien encounter.",
      "majorWorks": ["NBC Television Broadcast, 1966–1969."],
      "notes": "Iconic props and technical manuals seeded fan engineering efforts and NASA outreach.",
      "sources": [
        "Stephen E. Whitfield & Gene Roddenberry, The Making of Star Trek (1968).",
        "Margaret Weitekamp, Inventing a Better Future? Star Trek and NASA (2016)."
      ],
      "debates": [
        "Transporter accidents highlight tensions between utopian promise and body horror anxieties."
      ]
    },
    {
      "id": "ursula_k_le_guin",
      "label": "Ursula K. Le Guin",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["new_wave", "feminist"],
      "topics": ["social_speculation", "anthropology", "communication"],
      "genres": ["social_sf", "philosophical_sf"],
      "summary": "Writer-anthropologist who foregrounded cultural relativism, gender fluidity, and anarchist futures.",
      "detail": "Le Guin’s fiction, informed by anthropology, stressed lived experience and linguistic nuance, introducing devices such as the ansible to examine community across distance.",
      "majorWorks": ["The Left Hand of Darkness (1969)", "The Dispossessed (1974)"],
      "notes": "Advocated for “stories as carrier bags,” centering maintenance over conquest.",
      "sources": [
        "Ursula K. Le Guin, The Left Hand of Darkness (1969).",
        "Donna J. Haraway, “Situated Knowledges” (1988)."
      ],
      "debates": [
        "Critics evaluate her portrayal of gender-neutral societies for residual binaries."
      ]
    },
    {
      "id": "left_hand_of_darkness",
      "label": "The Left Hand of Darkness",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["new_wave", "feminist"],
      "topics": ["social_speculation", "communication", "identity"],
      "genres": ["social_sf", "first_contact_sf"],
      "summary": "Novel chronicling a gender-fluid society and the political labour of interstellar envoys.",
      "detail": "Centers diplomacy, translation, and trust-building as core technologies. The narrative’s ansible device foregrounds the role of instantaneous communication in coalition politics.",
      "majorWorks": ["Ace Books, 1969."],
      "notes": "Inspired real-world usage of “ansible” in later sf as shorthand for FTL comms.",
      "sources": [
        "Ursula K. Le Guin, The Left Hand of Darkness (1969).",
        "Alexandra Pierce & Tansy R. Roberts (eds.), Luminescent Threads (2017)."
      ],
      "debates": [
        "Whether the novel dismantles or reinscribes binary gender norms remains contested."
      ]
    },
    {
      "id": "philip_k_dick",
      "label": "Philip K. Dick",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["new_wave", "american"],
      "topics": ["artificial_intelligence", "identity", "posthumanism"],
      "genres": ["philosophical_sf", "cyberpunk"],
      "summary": "Auteur of ontological thrillers probing reality, empathy, and artificial life.",
      "detail": "Dick’s paranoia-driven narratives question what counts as human, blending hallucinatory perception with corporate-controlled technology.",
      "majorWorks": ["Do Androids Dream of Electric Sheep? (1968)", "Ubik (1969)"],
      "notes": "Influenced cyberpunk aesthetics and critical postmodern sf.",
      "sources": [
        "Philip K. Dick, Do Androids Dream of Electric Sheep? (1968).",
        "Stanley Cavell, “Knowing and Acknowledging,” in Must We Mean What We Say? (1969)."
      ],
      "debates": [
        "Dick’s ambivalent politics invite both anarchic and conservative readings."
      ]
    },
    {
      "id": "do_androids_dream",
      "label": "Do Androids Dream of Electric Sheep?",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["new_wave"],
      "topics": ["artificial_intelligence", "identity", "ethics"],
      "genres": ["philosophical_sf", "cyberpunk"],
      "summary": "Novel interrogating empathy tests, synthetic beings, and ecological collapse.",
      "detail": "Introduces Voight-Kampff diagnostics, mood organ manipulation, and corporate android manufacturing as tools to question moral status.",
      "majorWorks": ["Doubleday, 1968."],
      "notes": "Adapted into Blade Runner (1982), amplifying neo-noir and cyberpunk imagery.",
      "sources": [
        "Philip K. Dick, Do Androids Dream of Electric Sheep? (1968).",
        "Sherryl Vint, Bodies of Tomorrow (2007)."
      ],
      "debates": [
        "Whether empathy suffices as a criterion for personhood remains disputed."
      ]
    },
    {
      "id": "octavia_e_butler",
      "label": "Octavia E. Butler",
      "type": "philosopher",
      "era": "late-20th-century",
      "tradition": ["afrofuturism", "feminist"],
      "topics": ["afrofuturism", "genealogy", "ethics"],
      "genres": ["afrofuturism", "social_sf"],
      "summary": "Author who linked slavery legacies, adaptation, and biopower to reimagine futures grounded in Black experience.",
      "detail": "Butler’s protagonists negotiate consent under coercion, exploring hybridity and resilience. She fused social critique with biological speculation.",
      "majorWorks": ["Kindred (1979)", "Lilith’s Brood (1987–1989)"],
      "notes": "Mentored emerging writers, shaping Afrofuturist discourse.",
      "sources": [
        "Octavia E. Butler, Kindred (1979).",
        "Mark Bould, “The Ships Landed Long Ago: Afrofuturism and Black SF,” Paradoxa (2007)."
      ],
      "debates": [
        "Scholars analyse Butler’s adaptive hierarchies for tensions between survival pragmatism and liberation."
      ]
    },
    {
      "id": "kindred",
      "label": "Kindred",
      "type": "theory",
      "era": "late-20th-century",
      "tradition": ["afrofuturism"],
      "topics": ["time_travel", "afrofuturism", "ethics"],
      "genres": ["afrofuturism", "time_travel_sf"],
      "summary": "Time-travel novel confronting slavery through embodied ancestry and reluctant intervention.",
      "detail": "Dana’s involuntary temporal displacement reframes time travel as a confrontation with historical trauma, linking speculative mechanics to lineage and accountability.",
      "majorWorks": ["Doubleday, 1979."],
      "notes": "Frequently taught in history and literature classrooms as speculative pedagogy.",
      "sources": [
        "Octavia E. Butler, Kindred (1979).",
        "Ashleigh Greene Wade, “Temporal Diaspora in Kindred,” South Atlantic Review (2013)."
      ],
      "debates": [
        "Critics debate whether the ending reinforces or critiques assimilation into oppressive genealogies."
      ]
    },
    {
      "id": "william_gibson",
      "label": "William Gibson",
      "type": "philosopher",
      "era": "late-20th-century",
      "tradition": ["cyberpunk"],
      "topics": ["cyberspace", "posthumanism", "media"],
      "genres": ["cyberpunk"],
      "summary": "Cyberpunk author who coined “cyberspace” and mapped data capitalism’s sensory aesthetics.",
      "detail": "Gibson’s noir prose captured network ecologies, corporate power, and augmented bodies, framing the digital realm as hallucinatory consensus.",
      "majorWorks": ["Neuromancer (1984)", "Count Zero (1986)"],
      "notes": "Influenced design practice, hacker culture, and speculative UI prototyping.",
      "sources": [
        "William Gibson, Neuromancer (1984).",
        "Lawrence Person, “Notes Toward a Postcyberpunk Manifesto” (1998)."
      ],
      "debates": [
        "Cyberpunk’s critique of neoliberalism versus its stylistic celebration of cool capitalism remains contested."
      ]
    },
    {
      "id": "neuromancer",
      "label": "Neuromancer",
      "type": "theory",
      "era": "late-20th-century",
      "tradition": ["cyberpunk"],
      "topics": ["cyberspace", "artificial_intelligence", "posthumanism"],
      "genres": ["cyberpunk"],
      "summary": "Novel popularising cyberspace as immersive matrix, blending hackers, AI, and black market biotech.",
      "detail": "Introduces deck jockey Case, the consensual hallucination metaphor, and megacorp AI Wintermute, shaping digital-era metaphors and security imaginaries.",
      "majorWorks": ["Ace Books, 1984."],
      "notes": "Won the “triple crown” (Hugo, Nebula, Philip K. Dick awards).",
      "sources": [
        "William Gibson, Neuromancer (1984).",
        "Fredric Jameson, Postmodernism, or, The Cultural Logic of Late Capitalism (1991)."
      ],
      "debates": [
        "Is cyberspace emancipatory or another domain for capital accumulation?"
      ]
    },
    {
      "id": "nnedi_okorafor",
      "label": "Nnedi Okorafor",
      "type": "philosopher",
      "era": "21st-century",
      "tradition": ["afrofuturism", "african"],
      "topics": ["afrofuturism", "first_contact", "biotech"],
      "genres": ["afrofuturism", "first_contact_sf"],
      "summary": "Nigerian-American author merging African cosmologies with bioengineering, climate futures, and interspecies diplomacy.",
      "detail": "Okorafor’s “Africanfuturism” stresses grounded cultural contexts, living technology, and reparative contact with otherness.",
      "majorWorks": ["Binti (2015)", "Lagoon (2014)"],
      "notes": "Coins distinctions between Africanfuturism and Afrofuturism to emphasize continent-based perspectives.",
      "sources": [
        "Nnedi Okorafor, Binti (2015).",
        "Nnedi Okorafor, “Africanfuturism Defined,” nnedi.com (2019)."
      ],
      "debates": [
        "Discussions explore how Africanfuturism resists Western sci-fi structures while engaging with global audiences."
      ]
    },
    {
      "id": "binti",
      "label": "Binti",
      "type": "theory",
      "era": "21st-century",
      "tradition": ["afrofuturism"],
      "topics": ["afrofuturism", "first_contact", "biotech"],
      "genres": ["afrofuturism", "first_contact_sf"],
      "summary": "Novella about a Himba mathematics prodigy mediating between species with living technology.",
      "detail": "Features astrolabes, living starships (Third Fish), and bio-symbiotic harmonisation, foregrounding negotiation and culture-rich engineering.",
      "majorWorks": ["Tor.com novella, 2015."],
      "notes": "Illustrates Africanfuturist aesthetics with ochre, braids, and artisanal mathematics as technology.",
      "sources": [
        "Nnedi Okorafor, Binti (2015).",
        "Ytasha L. Womack, Afrofuturism (2013)."
      ],
      "debates": [
        "The series raises questions about assimilation versus pluralistic coexistence."
      ]
    },
    {
      "id": "liu_cixin",
      "label": "Liu Cixin",
      "type": "philosopher",
      "era": "21st-century",
      "tradition": ["chinese_scifi"],
      "topics": ["first_contact", "grand_scale", "dark_forest"],
      "genres": ["hard_sf", "first_contact_sf"],
      "summary": "Chinese author whose Three-Body trilogy blends cosmic sociology, hard physics, and geopolitical allegory.",
      "detail": "Liu’s narratives introduce the Dark Forest hypothesis—civilisations conceal themselves to avoid predation—revitalising existential risk debates.",
      "majorWorks": ["The Three-Body Problem (2006)", "The Dark Forest (2008)"],
      "notes": "Helped globalise Chinese science fiction through Ken Liu’s translations.",
      "sources": [
        "Liu Cixin, The Three-Body Problem (2006).",
        "Martha Wells, “The Dark Forest and SF’s Existential Horror,” Wired (2015)."
      ],
      "debates": [
        "Critics dispute whether Liu endorses authoritarian solutions or stages cautionary warnings."
      ]
    },
    {
      "id": "three_body_problem",
      "label": "The Three-Body Problem",
      "type": "theory",
      "era": "21st-century",
      "tradition": ["chinese_scifi"],
      "topics": ["dark_forest", "first_contact", "cosmic_sociology"],
      "genres": ["hard_sf", "first_contact_sf"],
      "summary": "Novel linking Cultural Revolution trauma to cosmic game theory and hostile contact scenarios.",
      "detail": "Introduces sophons (quantum surveillance devices), multi-dimensional manipulation, and dark forest logic to illustrate asymmetrical contact strategies.",
      "majorWorks": ["Chongqing Publishing House, 2006; Tor Books translation, 2014."],
      "notes": "Sparked renewed interest in large-scale hard sf sagas.",
      "sources": [
        "Liu Cixin, The Three-Body Problem (2006).",
        "Ken Liu, Translator’s Postscript (2014)."
      ],
      "debates": [
        "Readers contest whether humanity’s response is justified caution or fatalistic militarism."
      ]
    },
    {
      "id": "stanislaw_lem",
      "label": "Stanisław Lem",
      "type": "philosopher",
      "era": "20th-century",
      "tradition": ["european"],
      "topics": ["alien_consciousness", "first_contact", "philosophy_of_science"],
      "genres": ["philosophical_sf", "first_contact_sf"],
      "summary": "Polish author-philosopher exploring epistemology, alien minds, and satirical futurology.",
      "detail": "Lem’s work questions humanity’s capacity to comprehend radically other intelligences, critiquing anthropocentric assumptions in contact narratives.",
      "majorWorks": ["Solaris (1961)", "Summa Technologiae (1964)"],
      "notes": "Combined rigorous speculation with metafictional critiques of genre.",
      "sources": [
        "Stanisław Lem, Solaris (1961).",
        "Peter Swirski, A Stanislaw Lem Reader (1997)."
      ],
      "debates": [
        "Discussions assess Lem’s skepticism toward meaningful communication with aliens."
      ]
    },
    {
      "id": "solaris",
      "label": "Solaris",
      "type": "theory",
      "era": "20th-century",
      "tradition": ["european"],
      "topics": ["alien_consciousness", "first_contact", "psychology"],
      "genres": ["philosophical_sf", "first_contact_sf"],
      "summary": "Novel positing a sentient planet that manifests human memories, frustrating attempts at scientific understanding.",
      "detail": "Solaris critiques anthropomorphic contact fantasies, indicating that humans project themselves onto incomprehensible others.",
      "majorWorks": ["Wydawnictwo Ministerstwa Obrony Narodowej, 1961."],
      "notes": "Adapted by Tarkovsky (1972) and Soderbergh (2002), each emphasising different philosophical angles.",
      "sources": [
        "Stanisław Lem, Solaris (1961).",
        "Darko Suvin, “Solaris and the Tradition of Earthly Extraterrestrials,” Science-Fiction Studies (1977)."
      ],
      "debates": [
        "Can humans ever interpret the planet’s manifestations, or are they doomed to solipsism?"
      ]
    },
    {
      "id": "synthetic_life",
      "label": "Synthetic Life",
      "type": "concept",
      "era": "19th-century",
      "tradition": ["speculative_technology"],
      "topics": ["synthetic_life", "creation", "ethics"],
      "genres": ["biotech"],
      "summary": "Constructed organisms or beings whose existence originates from deliberate technological intervention.",
      "detail": "Synthetic life stories interrogate design responsibility, emergent agency, and the social status of engineered beings—from Shelley's Creature to bioengineered androids.",
      "majorWorks": ["Frankenstein", "Do Androids Dream of Electric Sheep?"],
      "notes": "Overlaps with artificial intelligence when cognition arises from non-organic substrates.",
      "sources": [
        "Chris Hables Gray, Cyborg Citizen (2001).",
        "Bernard E. Rollin, Science and Ethics (2006)."
      ],
      "debates": [
        "Should synthetic beings inherit rights equivalent to their creators or owners?"
      ]
    },
    {
      "id": "artificial_intelligence",
      "label": "Artificial Intelligence",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["artificial_intelligence", "ethics", "governance"],
      "genres": ["ai_robotics"],
      "summary": "Technoscientific concept depicting machines with cognitive autonomy and decision-making capacity.",
      "detail": "Science fiction explores AI as labour force, companion, strategic threat, and aspirational ally, often debating alignment, rights, and consciousness.",
      "majorWorks": ["Asimov’s positronic robots", "HAL 9000", "Wintermute"],
      "notes": "Narratives chart evolving metaphors—from mechanical brains to distributed networks.",
      "sources": [
        "Nils Nilsson, The Quest for Artificial Intelligence (2010).",
        "Pamela McCorduck, Machines Who Think (1979)."
      ],
      "debates": [
        "Do stories reinforce fear of automation or open space for symbiotic futures?"
      ]
    },
    {
      "id": "terraforming",
      "label": "Terraforming",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["planetary_exploration", "engineering", "space"],
      "genres": ["hard_sf", "exploration_sf"],
      "summary": "Concept describing deliberate alteration of planetary environments to support human or Earth-like life.",
      "detail": "Emerging in sf (Olaf Stapledon, Jack Williamson) before NASA studies, terraforming debates material logistics, ecological ethics, and indigenous sovereignty. It frames planetary design as both technological ambition and colonial practice.",
      "majorWorks": ["Jack Williamson, “Collision Orbit” (1942)", "Kim Stanley Robinson, Mars Trilogy (1992–1996)"],
      "notes": "Intersects with geoengineering discourse and climate adaptation politics.",
      "sources": [
        "Martyn J. Fogg, Terraforming: Engineering Planetary Environments (1995).",
        "Siobhan Carroll, An Empire of Air and Water (2015)."
      ],
      "debates": [
        "Critics contest whether terraforming perpetuates extractivism or enables multi-species resilience."
      ]
    },
    {
      "id": "generation_starship",
      "label": "Generation Starship",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["space", "governance", "ethics"],
      "genres": ["space_opera", "hard_sf"],
      "summary": "Slow-boat spacecraft spanning multiple human generations, prompting social engineering and closed-ecology design.",
      "detail": "From Heinlein's Orphans of the Sky to contemporary climate fiction, generation ships pose problems of population control, social contract, and cultural drift. They mirror diaspora narratives and long-duration mission planning at agencies like NASA and ESA.",
      "majorWorks": ["Robert A. Heinlein, Orphans of the Sky (1963)", "Kim Stanley Robinson, Aurora (2015)"],
      "notes": "Serves as a testbed for speculative anthropology and governance models under resource constraints.",
      "sources": [
        "James A. H. Lambert, “The Future of Interstellar Travel: Generation Ships,” JBIS (2011).",
        "Leslie A. F. White, “The Science of Culture,” (1949)."
      ],
      "debates": [
        "Ethicists question consent across generations and the viability of closed societies."
      ]
    },
    {
      "id": "social_speculation",
      "label": "Social Speculation",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["social_design"],
      "topics": ["social_speculation", "governance", "identity"],
      "genres": ["social_sf"],
      "summary": "Framework for imagining alternative social orders, institutions, and collective identities under speculative conditions.",
      "detail": "Science fiction treats communities as design spaces, testing cooperative commons, authoritarian regimes, queer kinship, and alien diplomacy. Social speculation connects narrative experiments to political theory, futures studies, and participatory design.",
      "majorWorks": ["Ursula K. Le Guin, The Dispossessed (1974)", "Samuel R. Delany, Triton (1976)"],
      "notes": "Intersects with design fiction and critical futures practice, informing policy labs and activist imaginaries.",
      "sources": [
        "Fredric Jameson, Archaeologies of the Future (2005).",
        "Walidah Imarisha & adrienne maree brown (eds.), Octavia's Brood (2015)."
      ],
      "debates": [
        "Practitioners debate whether speculative models risk prescriptive utopias or catalyse plural experimentation."
      ]
    },
    {
      "id": "governance",
      "label": "Governance",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["philosophy_of_science"],
      "topics": ["governance", "ethics", "risk"],
      "genres": ["social_sf"],
      "summary": "Exploration of political architectures—democracy, technocracy, militarism—within speculative futures.",
      "detail": "From dystopian councils to AI-run polities, sf examines legitimacy, consent, and institutional resilience. The trope interrogates civic militarism, corporatocracy, and insurgent governance models.",
      "majorWorks": ["Yevgeny Zamyatin, We (1921)", "Robert A. Heinlein, Starship Troopers (1959)", "Ann Leckie, Ancillary Justice (2013)"],
      "notes": "Resonates with contemporary debates on algorithmic governance and platform states.",
      "sources": [
        "Sherryl Vint & Mark Bould (eds.), The Routledge Concise History of Science Fiction (2011).",
        "Henry Farrell & Cosma Shalizi, “Cognitive Democracy,” Aeon (2012)."
      ],
      "debates": [
        "Whether speculative governance normalises coercion or reveals alternative democratic imaginaries remains contested."
      ]
    },
    {
      "id": "communication",
      "label": "Communication",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["communication", "media", "identity"],
      "genres": ["social_sf"],
      "summary": "Technologies and practices for meaning-making across species, cultures, and networks.",
      "detail": "Sf posits ansibles, telepathic codes, and machine translation, probing linguistic relativity, propaganda, and information warfare. Communication becomes both infrastructure and weapon.",
      "majorWorks": ["Samuel R. Delany, Babel-17 (1966)", "Ursula K. Le Guin, The Left Hand of Darkness (1969)", "Ted Chiang, Story of Your Life (1998)"],
      "notes": "Bridges semiotics, cybernetics, and media studies.",
      "sources": [
        "Katherine Hayles, How We Became Posthuman (1999).",
        "Lisa Yaszek & Patrick B. Sharp (eds.), Sisters of Tomorrow (2016)."
      ],
      "debates": [
        "Scholars weigh whether speculative linguistics affirms determinism or celebrates interpretive agency."
      ]
    },
    {
      "id": "biotech",
      "label": "Biotechnology",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["biotech", "adaptation", "ethics"],
      "genres": ["biotech"],
      "summary": "Manipulation of biological systems—genes, tissues, symbiotes—for medical, environmental, or exploratory aims.",
      "detail": "Science fiction imagines biotech as both liberatory tool and vector for control, emphasizing intimate entanglements between bodies and technology.",
      "majorWorks": ["Lilith's Brood", "Binti", "Jurassic Park"],
      "notes": "Intersects with debates on consent, hybridity, and ecological stewardship.",
      "sources": [
        "Donna Haraway, Modest_Witness@Second_Millennium (1997).",
        "Joan Slonczewski & Michael Levy, Biology and Science Fiction (2011)."
      ],
      "debates": [
        "Does biotech entrench biopolitical control or enable community-driven resilience?"
      ]
    },
    {
      "id": "robotics",
      "label": "Robotics",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["robotics", "automation", "labour"],
      "genres": ["ai_robotics"],
      "summary": "Field concerning mechanical agents performing tasks, often governed by explicit ethical frameworks.",
      "detail": "Robotics in fiction questions labour displacement, embodiment, and the codification of moral safeguards such as Asimov’s laws.",
      "majorWorks": ["I, Robot", "Robbie", "Caves of Steel"],
      "notes": "The term “robot” originates from Karel Čapek’s play R.U.R. (1920).",
      "sources": [
        "Karel Čapek, R.U.R. (1920).",
        "Isaac Asimov, Runaround (1942)."
      ],
      "debates": [
        "Whether rigid laws or adaptive learning best ensure safe robot behaviour remains unresolved."
      ]
    },
    {
      "id": "teleportation",
      "label": "Teleportation",
      "type": "concept",
      "era": "19th-century",
      "tradition": ["speculative_technology"],
      "topics": ["teleportation", "transport", "identity"],
      "genres": ["time_travel_sf"],
      "summary": "Instantaneous transfer of matter or consciousness across space via disassembly and reassembly.",
      "detail": "Fictional teleporters foreground the metaphysics of continuity: is the traveller destroyed and copied, or smoothly translated?",
      "majorWorks": ["The Man Without a Body", "Star Trek transporters"],
      "notes": "Term “teleport” was popularised by Charles Fort in 1931, expanding on earlier fictional precedents.",
      "sources": [
        "Charles Fort, Lo! (1931).",
        "Lawrence M. Krauss, The Physics of Star Trek (1995)."
      ],
      "debates": [
        "Does teleportation preserve personhood or merely instantiate a duplicate?"
      ]
    },
    {
      "id": "time_travel",
      "label": "Time Travel",
      "type": "concept",
      "era": "19th-century",
      "tradition": ["speculative_technology"],
      "topics": ["time_travel", "temporal", "history"],
      "genres": ["time_travel_sf"],
      "summary": "Traversal along the temporal dimension via mechanical, portal, or psychological means.",
      "detail": "Time travel stories examine causality, paradox, and historical responsibility, ranging from Wellsian machinery to Butler’s involuntary ancestry.",
      "majorWorks": ["The Time Machine", "Kindred"],
      "notes": "Earlier myths featured dream journeys; Wells introduced engineering rationale.",
      "sources": [
        "Paul J. Nahin, Time Machines (1993).",
        "Elizabeth Sandifer, The Last War in Albion (2013)."
      ],
      "debates": [
        "Narratives explore fixed timelines versus mutable histories and ethical intervention."
      ]
    },
    {
      "id": "planetary_exploration",
      "label": "Planetary Exploration",
      "type": "concept",
      "era": "19th-century",
      "tradition": ["speculative_technology"],
      "topics": ["planetary_exploration", "space", "engineering"],
      "genres": ["exploration_sf"],
      "summary": "Technological and logistical systems enabling deep planetary or interplanetary travel.",
      "detail": "Stories map the apparatus—vehicles, habitats, instrumentation—required for expeditions, often as national or cooperative ventures.",
      "majorWorks": ["Journey to the Center of the Earth", "2001: A Space Odyssey"],
      "notes": "Functions as a bridge between adventure fiction and astronautics advocacy.",
      "sources": [
        "H. Bruce Franklin, Future Perfect (1995).",
        "Roger D. Launius, Coming Home (2012)."
      ],
      "debates": [
        "Speculative exploration oscillates between colonial appropriation and collective stewardship."
      ]
    },
    {
      "id": "cyberspace",
      "label": "Cyberspace",
      "type": "concept",
      "era": "late-20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["cyberspace", "media", "posthumanism"],
      "genres": ["cyberpunk"],
      "summary": "Metaphor for networked digital space as immersive reality.",
      "detail": "Gibson’s metaphor evolved into everyday parlance for the internet, framing data as navigable architecture and raising questions about embodiment online.",
      "majorWorks": ["Neuromancer", "Snow Crash"],
      "notes": "Influenced interface design, VR research, and cybersecurity discourse.",
      "sources": [
        "William Gibson, Neuromancer (1984).",
        "Thomas P. Hughes, Technological Momentum (1994)."
      ],
      "debates": [
        "Cyberspace oscillates between liberatory potential and surveillance capitalism."
      ]
    },
    {
      "id": "social_speculation",
      "label": "Social Speculation",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["social_design"],
      "topics": ["social_speculation", "governance", "identity"],
      "genres": ["social_sf"],
      "summary": "Imagined social systems, cultural norms, and political arrangements tested through speculative scenarios.",
      "detail": "From gender-fluid societies to anarchist federations, social speculation treats institutions as designable technologies subject to iteration.",
      "majorWorks": ["The Left Hand of Darkness", "The Dispossessed", "Woman on the Edge of Time"],
      "notes": "Supports worldbuilding for participatory futures and political imaginaries.",
      "sources": [
        "Fredric Jameson, Archaeologies of the Future (2005).",
        "Walidah Imarisha & adrienne maree brown (eds.), Octavia’s Brood (2015)."
      ],
      "debates": [
        "Does fictional social design risk blueprinting prescriptive utopias or stimulate plural experimentation?"
      ]
    },
    {
      "id": "first_contact",
      "label": "First Contact",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["speculative_technology"],
      "topics": ["first_contact", "diplomacy", "cosmic_sociology"],
      "genres": ["first_contact_sf"],
      "summary": "Narrative and conceptual frame for encounters between humanity and non-human intelligences.",
      "detail": "Depictions range from benevolent exchanges to existential threats, often revealing human political anxieties.",
      "majorWorks": ["2001: A Space Odyssey", "The Three-Body Problem", "Arrival"],
      "notes": "Functions as a testing ground for communication theory and exo-politics.",
      "sources": [
        "David A. Weintraub, Religions and Extraterrestrial Life (2014).",
        "Michael F. Flynn, The Forest of Time (1986)."
      ],
      "debates": [
        "SETI researchers weigh proactive messaging versus radio silence—the “METI debate.”"
      ]
    },
    {
      "id": "posthumanism",
      "label": "Posthumanism",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["philosophy", "speculative_technology"],
      "topics": ["posthumanism", "identity", "ethics"],
      "genres": ["philosophical_sf"],
      "summary": "Framework considering futures where human biology, cognition, or social structures radically transform.",
      "detail": "Sf narratives explore hybrids, uploads, and evolved species to question the boundaries of the human and accompanying rights frameworks.",
      "majorWorks": ["The Time Machine", "Do Androids Dream of Electric Sheep?", "Neuromancer"],
      "notes": "Intersects with disability studies, bioethics, and critical theory.",
      "sources": [
        "Donna Haraway, A Cyborg Manifesto (1985).",
        "Rosi Braidotti, The Posthuman (2013)."
      ],
      "debates": [
        "Posthuman discourse risks reproducing existing inequities under new technical veneers."
      ]
    },
    {
      "id": "afrofuturism",
      "label": "Afrofuturism",
      "type": "concept",
      "era": "late-20th-century",
      "tradition": ["cultural_movement"],
      "topics": ["afrofuturism", "identity", "social_speculation"],
      "genres": ["afrofuturism"],
      "summary": "Aesthetic and philosophical movement envisioning futures through Black cultural frameworks.",
      "detail": "Combines diasporic history, speculative technology, and liberation narratives, aiming to heal historical erasure and project empowered futures.",
      "majorWorks": ["Sun Ra’s Space Is the Place", "Kindred", "Binti"],
      "notes": "Includes literature, music, visual art, and design.",
      "sources": [
        "Alondra Nelson (ed.), Afrofuturism (2002).",
        "Ytasha L. Womack, Afrofuturism (2013)."
      ],
      "debates": [
        "Definitions vary between cultural umbrella and specific artistic lineage."
      ]
    },
    {
      "id": "dark_forest_hypothesis",
      "label": "Dark Forest Hypothesis",
      "type": "concept",
      "era": "21st-century",
      "tradition": ["cosmic_sociology"],
      "topics": ["dark_forest", "first_contact", "risk"],
      "genres": ["hard_sf"],
      "summary": "Game-theoretic idea that civilisations remain silent to avoid detection by potential predators in the galaxy.",
      "detail": "Popularised by Liu Cixin, the hypothesis reframes SETI optimism into existential caution, influencing strategic dialogues about beacons and probes.",
      "majorWorks": ["The Dark Forest (2008)"],
      "notes": "Links to contemporary debates on broadcasting signals versus passive listening.",
      "sources": [
        "Liu Cixin, The Dark Forest (2008).",
        "Anders Sandberg et al., “That is not dead which can eternal lie,” JBIS (2018)."
      ],
      "debates": [
        "Critics argue it projects Cold War paranoia onto cosmic scales."
      ]
    },
    {
      "id": "alien_consciousness",
      "label": "Alien Consciousness",
      "type": "concept",
      "era": "20th-century",
      "tradition": ["philosophy_of_science"],
      "topics": ["alien_consciousness", "epistemology", "first_contact"],
      "genres": ["philosophical_sf"],
      "summary": "Exploration of non-human sentience that resists human comprehension.",
      "detail": "Used to question anthropocentric science, the concept appears in narratives where aliens communicate via incomprehensible media or biologies.",
      "majorWorks": ["Solaris", "Annihilation"],
      "notes": "Supports philosophical inquiry into phenomenology and cognitive ecologies.",
      "sources": [
        "Jeff VanderMeer, “The Weird Thoreau,” Slate (2014).",
        "Stanisław Lem, Summa Technologiae (1964)."
      ],
      "debates": [
        "Is translation possible, or are humans confined to projection and misinterpretation?"
      ]
    }
  ],
  "links": [
    { "source": "mary_shelley", "target": "frankenstein", "relation": "authors" },
    { "source": "frankenstein", "target": "synthetic_life", "relation": "anticipates" },
    { "source": "frankenstein", "target": "artificial_intelligence", "relation": "anticipates" },
    { "source": "frankenstein", "target": "posthumanism", "relation": "anticipates" },
    { "source": "karel_capek", "target": "r_u_r", "relation": "authors" },
    { "source": "karel_capek", "target": "robotics", "relation": "coins" },
    { "source": "r_u_r", "target": "robotics", "relation": "introduces" },
    { "source": "r_u_r", "target": "synthetic_life", "relation": "anticipates" },
    { "source": "yevgeny_zamyatin", "target": "we_zamyatin", "relation": "authors" },
    { "source": "yevgeny_zamyatin", "target": "samuel_r_delany", "relation": "inspires" },
    { "source": "we_zamyatin", "target": "social_speculation", "relation": "anticipates" },
    { "source": "we_zamyatin", "target": "governance", "relation": "critiques" },
    { "source": "edward_page_mitchell", "target": "the_man_without_a_body", "relation": "authors" },
    { "source": "the_man_without_a_body", "target": "teleportation", "relation": "introduces" },
    { "source": "teleportation", "target": "star_trek_tos", "relation": "popularises" },
    { "source": "gene_roddenberry", "target": "star_trek_tos", "relation": "creates" },
    { "source": "star_trek_tos", "target": "first_contact", "relation": "dramatizes" },
    { "source": "star_trek_tos", "target": "teleportation", "relation": "normalises" },
    { "source": "jules_verne", "target": "journey_to_the_center_of_the_earth", "relation": "authors" },
    { "source": "journey_to_the_center_of_the_earth", "target": "planetary_exploration", "relation": "popularises" },
    { "source": "h_g_wells", "target": "the_time_machine", "relation": "authors" },
    { "source": "the_time_machine", "target": "time_travel", "relation": "formalises" },
    { "source": "the_time_machine", "target": "posthumanism", "relation": "anticipates" },
    { "source": "isaac_asimov", "target": "i_robot", "relation": "authors" },
    { "source": "isaac_asimov", "target": "robotics", "relation": "codifies" },
    { "source": "isaac_asimov", "target": "artificial_intelligence", "relation": "systematizes" },
    { "source": "i_robot", "target": "robotics", "relation": "formalises" },
    { "source": "i_robot", "target": "artificial_intelligence", "relation": "explores" },
    { "source": "karel_capek", "target": "isaac_asimov", "relation": "influences" },
    { "source": "robert_a_heinlein", "target": "starship_troopers", "relation": "authors" },
    { "source": "robert_a_heinlein", "target": "generation_starship", "relation": "develops" },
    { "source": "robert_a_heinlein", "target": "governance", "relation": "reinterprets" },
    { "source": "starship_troopers", "target": "governance", "relation": "reinterprets" },
    { "source": "ray_bradbury", "target": "martian_chronicles", "relation": "authors" },
    { "source": "ray_bradbury", "target": "terraforming", "relation": "questions" },
    { "source": "martian_chronicles", "target": "terraforming", "relation": "critiques" },
    { "source": "martian_chronicles", "target": "social_speculation", "relation": "reinterprets" },
    { "source": "ray_bradbury", "target": "samuel_r_delany", "relation": "inspires" },
    { "source": "robert_a_heinlein", "target": "liu_cixin", "relation": "inspires" },
    { "source": "arthur_c_clarke", "target": "two_thousand_one", "relation": "co-develops" },
    { "source": "two_thousand_one", "target": "artificial_intelligence", "relation": "critiques" },
    { "source": "two_thousand_one", "target": "first_contact", "relation": "envisions" },
    { "source": "ursula_k_le_guin", "target": "left_hand_of_darkness", "relation": "authors" },
    { "source": "left_hand_of_darkness", "target": "social_speculation", "relation": "develops" },
    { "source": "left_hand_of_darkness", "target": "posthumanism", "relation": "reinterprets" },
    { "source": "samuel_r_delany", "target": "babel_17", "relation": "authors" },
    { "source": "samuel_r_delany", "target": "cyberspace", "relation": "anticipates" },
    { "source": "samuel_r_delany", "target": "social_speculation", "relation": "extends" },
    { "source": "babel_17", "target": "communication", "relation": "introduces" },
    { "source": "babel_17", "target": "cyberspace", "relation": "anticipates" },
    { "source": "samuel_r_delany", "target": "william_gibson", "relation": "inspires" },
    { "source": "philip_k_dick", "target": "do_androids_dream", "relation": "authors" },
    { "source": "philip_k_dick", "target": "posthumanism", "relation": "questions" },
    { "source": "do_androids_dream", "target": "artificial_intelligence", "relation": "critiques" },
    { "source": "do_androids_dream", "target": "posthumanism", "relation": "intensifies" },
    { "source": "strugatsky_brothers", "target": "roadside_picnic", "relation": "authors" },
    { "source": "roadside_picnic", "target": "alien_consciousness", "relation": "reinterprets" },
    { "source": "roadside_picnic", "target": "first_contact", "relation": "reinterprets" },
    { "source": "strugatsky_brothers", "target": "the_matrix", "relation": "inspires" },
    { "source": "octavia_e_butler", "target": "kindred", "relation": "authors" },
    { "source": "octavia_e_butler", "target": "afrofuturism", "relation": "expands" },
    { "source": "kindred", "target": "time_travel", "relation": "reframes" },
    { "source": "kindred", "target": "afrofuturism", "relation": "grounds" },
    { "source": "william_gibson", "target": "neuromancer", "relation": "authors" },
    { "source": "william_gibson", "target": "cyberspace", "relation": "coins" },
    { "source": "neuromancer", "target": "cyberspace", "relation": "defines" },
    { "source": "neuromancer", "target": "artificial_intelligence", "relation": "questions" },
    { "source": "neuromancer", "target": "posthumanism", "relation": "explores" },
    { "source": "the_matrix", "target": "cyberspace", "relation": "popularises" },
    { "source": "the_matrix", "target": "artificial_intelligence", "relation": "challenges" },
    { "source": "the_matrix", "target": "posthumanism", "relation": "reinterprets" },
    { "source": "nnedi_okorafor", "target": "binti", "relation": "authors" },
    { "source": "nnedi_okorafor", "target": "afrofuturism", "relation": "reinterprets" },
    { "source": "binti", "target": "first_contact", "relation": "mediates" },
    { "source": "binti", "target": "afrofuturism", "relation": "advances" },
    { "source": "binti", "target": "biotech", "relation": "integrates" },
    { "source": "binti", "target": "generation_starship", "relation": "reinterprets" },
    { "source": "liu_cixin", "target": "three_body_problem", "relation": "authors" },
    { "source": "liu_cixin", "target": "dark_forest_hypothesis", "relation": "introduces" },
    { "source": "liu_cixin", "target": "generation_starship", "relation": "extends" },
    { "source": "three_body_problem", "target": "dark_forest_hypothesis", "relation": "formalises" },
    { "source": "three_body_problem", "target": "first_contact", "relation": "complicates" },
    { "source": "stanislaw_lem", "target": "solaris", "relation": "authors" },
    { "source": "stanislaw_lem", "target": "alien_consciousness", "relation": "theorises" },
    { "source": "solaris", "target": "alien_consciousness", "relation": "dramatizes" },
    { "source": "solaris", "target": "first_contact", "relation": "reinterprets" },
    { "source": "teleportation", "target": "binti", "relation": "influences" },
    { "source": "time_travel", "target": "kindred", "relation": "recontextualises" },
    { "source": "time_travel", "target": "the_time_machine", "relation": "originates" },
    { "source": "artificial_intelligence", "target": "i_robot", "relation": "systematizes" },
    { "source": "artificial_intelligence", "target": "two_thousand_one", "relation": "questions" },
    { "source": "artificial_intelligence", "target": "neuromancer", "relation": "extends" },
    { "source": "robotics", "target": "synthetic_life", "relation": "relates" },
    { "source": "afrofuturism", "target": "binti", "relation": "inspires" },
    { "source": "afrofuturism", "target": "kindred", "relation": "frames" }
  ]
};

window.SCIENCE_FICTION_GRAPH_DATA = SCIENCE_FICTION_GRAPH_DATA;
window.SCIENCE_FICTION_TYPE_META = SCIENCE_FICTION_GRAPH_DATA.metadata.typeMeta;

