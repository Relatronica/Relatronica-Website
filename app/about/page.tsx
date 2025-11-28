'use client';

import { Sparkles, Users, Network, Lightbulb, Target, Globe, Info, Shield, Heart, Zap, BookOpen, Code2, Instagram, Linkedin } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useState } from 'react';

interface InfoTooltipProps {
  term: string;
  definition: string;
}

function InfoTooltip({ term, definition }: InfoTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="inline-flex items-center relative">
      <strong className="font-semibold text-slate-900">{term}</strong>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="ml-1.5 inline-flex items-center justify-center cursor-help"
        aria-label={`Definizione di ${term}`}
      >
        <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors" />
        {isHovered && (
          <div className="absolute left-0 bottom-full mb-2 z-50 w-72 p-4 rounded-lg bg-slate-900 text-white text-xs leading-relaxed shadow-2xl pointer-events-none animate-in fade-in duration-200">
            {definition}
            <div className="absolute -bottom-1 left-5 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        )}
      </span>
    </span>
  );
}

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About - Relatronica",
    "description": "Relatronica è uno studio di progettazione che unisce speculative design, civic tech e knowledge mapping per esplorare scenari futuri. Attivismo per tecnologie responsabili.",
    "url": `${siteUrl}/about`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Relatronica",
      "description": "Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli. Attivismo per tecnologie responsabili.",
      "sameAs": [
        "https://www.instagram.com/relatronica",
        "https://www.linkedin.com/company/relatronica/"
      ],
      "knowsAbout": [
        "Speculative Design",
        "Civic Tech",
        "Knowledge Mapping",
        "Data Visualization",
        "Future Scenarios",
        "Responsible Technology",
        "Technology Activism",
        "Ethical Design"
      ]
    }
  };

  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-6xl font-bold mb-6 text-slate-900">Relatronica</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Immaginiamo futuri possibili e creiamo strumenti che aiutano le comunità a comprenderli, discuterli e plasmarli
            </p>
          </div>

        <div className="space-y-10">
          {/* Mission Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-blue-50 flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">La Nostra Missione</h2>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  Relatronica è uno studio di progettazione che unisce{' '}
                  <InfoTooltip
                    term="speculative design"
                    definition="Un approccio creativo che immagina scenari futuri possibili per stimolare riflessioni critiche su come le tecnologie e le scelte di oggi possano plasmare il domani."
                  />
                  ,{' '}
                  <InfoTooltip
                    term="civic tech"
                    definition="Tecnologie digitali create per migliorare la vita delle comunità, facilitare la partecipazione civica e rendere le informazioni pubbliche più accessibili a tutti."
                  />{' '}
                  e{' '}
                  <InfoTooltip
                    term="knowledge mapping"
                    definition="La visualizzazione delle connessioni tra idee, concetti e dati per rendere la conoscenza più comprensibile e aiutare a identificare relazioni che altrimenti resterebbero nascoste."
                  />{' '}
                  per esplorare scenari futuri e creare strumenti che aiutano le comunità a comprendere e navigare le complessità del mondo contemporaneo.
                </p>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-purple-50 w-fit mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Speculative Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Progettiamo scenari futuri alternativi per stimolare il pensiero critico e aprire 
                conversazioni su possibili futuri. Attraverso prototipi e narrazioni, esploriamo 
                le implicazioni etiche, sociali e tecnologiche di possibili sviluppi.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-green-50 w-fit mb-4">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Civic Tech</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sviluppiamo tecnologie digitali che potenziano le comunità e migliorano 
                l&apos;accesso alle informazioni pubbliche. Creiamo strumenti che facilitano 
                la partecipazione civica e la trasparenza democratica.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-orange-50 w-fit mb-4">
                <Network className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Knowledge Mapping</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Visualizziamo le relazioni tra concetti, dati e idee per rendere la conoscenza 
                più accessibile e comprensibile. I nostri strumenti di mappatura aiutano a 
                navigare complessità e identificare connessioni nascoste.
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-indigo-50 flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">Il Nostro Approccio</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  Combiniamo ricerca, design e tecnologia per creare progetti che:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">Stimolano il pensiero critico su futuri possibili</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">Rendono accessibili informazioni complesse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">Favoriscono la partecipazione e l&apos;engagement civico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span className="text-[15px]">Esplorano le implicazioni etiche delle tecnologie emergenti</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Activism Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-emerald-50 flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">Attivismo per Tecnologie Responsabili</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  Crediamo fermamente che la tecnologia debba essere progettata e sviluppata in modo responsabile, 
                  etico e orientato al benessere collettivo. Il nostro impegno va oltre la progettazione: 
                  siamo attivi nel promuovere una cultura tecnologica più consapevole e critica.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-500" />
                      Etica e Umanità
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Promuoviamo tecnologie che mettono al centro le persone, rispettano i diritti umani 
                      e favoriscono l&apos;inclusione e l&apos;equità sociale.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Trasparenza e Controllo
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Sosteniamo sistemi trasparenti, open source e decentralizzati che restituiscono 
                      controllo e autonomia alle comunità e agli individui.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      Educazione Critica
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Creiamo strumenti e risorse che aiutano a comprendere le implicazioni delle tecnologie 
                      emergenti e a sviluppare un pensiero critico informato.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-500" />
                      Sostenibilità Digitale
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Progettiamo soluzioni che considerano l&apos;impatto ambientale, l&apos;efficienza energetica 
                      e la longevità dei sistemi digitali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-violet-50 flex-shrink-0">
                <Heart className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">I Nostri Valori</h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
                  I principi che guidano il nostro lavoro e le nostre scelte progettuali:
                </p>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">Accessibilità</span>
                      <span className="text-[15px]"> - Crediamo che l&apos;informazione e gli strumenti debbano essere accessibili a tutti, indipendentemente da background tecnico o risorse disponibili.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">Partecipazione</span>
                      <span className="text-[15px]"> - Promuoviamo processi collaborativi e inclusivi che coinvolgono le comunità nella definizione del proprio futuro.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">Pensiero Critico</span>
                      <span className="text-[15px]"> - Stimoliamo riflessioni profonde e domande scomode, evitando soluzioni semplicistiche a problemi complessi.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">Responsabilità</span>
                      <span className="text-[15px]"> - Assumiamo la responsabilità delle implicazioni etiche, sociali e ambientali delle nostre creazioni.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-900">Apertura</span>
                      <span className="text-[15px]"> - Privilegiamo approcci open source, trasparenti e riproducibili che favoriscono la condivisione della conoscenza.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* NextHuman Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-rose-50 flex-shrink-0">
                <Globe className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">NextHuman</h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
                  Questo progetto rappresenta un esempio del nostro lavoro: un calendario delle scadenze 
                  probabilistiche per l&apos;umanità. Attraverso visualizzazioni interattive e scenari speculativi, 
                  esploriamo le sfide e le opportunità che attendono il nostro futuro collettivo, 
                  combinando knowledge mapping per mostrare le relazioni tra eventi e civic tech per 
                  rendere queste informazioni accessibili a tutti.
                </p>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  NextHuman è anche un manifesto del nostro approccio: utilizziamo la tecnologia per 
                  stimolare consapevolezza, favorire il dibattito pubblico e incoraggiare azioni concrete 
                  verso futuri più desiderabili. Ogni visualizzazione, ogni scenario, ogni connessione 
                  mappata è un invito a riflettere, discutere e agire responsabilmente.
                </p>
              </div>
            </div>
          </section>

          {/* Contact/Engagement Section */}
          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Vuoi Collaborare?</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
                Siamo sempre interessati a collaborazioni, progetti e conversazioni su design speculativo, 
                civic tech, knowledge mapping e tecnologie responsabili. Se condividi i nostri valori 
                e vuoi esplorare insieme possibili futuri, non esitare a contattarci.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  Progetti Collaborativi
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  Ricerca e Sviluppo
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  Workshop e Formazione
                </span>
                <span className="px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                  Consulenza Etica
                </span>
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.instagram.com/relatronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                  aria-label="Segui Relatronica su Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/relatronica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                  aria-label="Segui Relatronica su LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    </DotBoard>
    </>
  );
}

