'use client';

import { Sparkles, Users, Network, Lightbulb, Target, Globe, Info } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
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
  return (
    <DotBoard>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-6 text-slate-900">Relatronica</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Studio di progettazione che esplora il futuro attraverso design speculativo, civic tech e knowledge mapping
            </p>
          </div>

        <div className="space-y-8">
          {/* Mission Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm">
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
          <div className="grid md:grid-cols-3 gap-6">
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
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm">
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

          {/* NextHuman Section */}
          <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-rose-50 flex-shrink-0">
                <Globe className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-slate-900">NextHuman</h2>
                <p className="text-slate-700 leading-relaxed text-[15px]">
                  Questo progetto rappresenta un esempio del nostro lavoro: un calendario delle scadenze 
                  probabilistiche per l&apos;umanità. Attraverso visualizzazioni interattive e scenari speculativi, 
                  esploriamo le sfide e le opportunità che attendono il nostro futuro collettivo, 
                  combinando knowledge mapping per mostrare le relazioni tra eventi e civic tech per 
                  rendere queste informazioni accessibili a tutti.
                </p>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    </DotBoard>
  );
}

