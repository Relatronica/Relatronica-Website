'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Network, Sparkles, TrendingUp, TrendingDown, BarChart, Info } from 'lucide-react';
import Image from 'next/image';

export function NextHumanModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già visto il modale per NextHuman
    const hasSeenNextHuman = localStorage.getItem('nexthuman-welcome-seen');
    if (!hasSeenNextHuman) {
      // Piccolo delay per un effetto più naturale
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem('nexthuman-welcome-seen', 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors z-10"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Relatronica Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">NextHuman</h2>
              <p className="text-sm text-slate-500 mt-1">Calendario delle Scadenze per l&apos;Umanità</p>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <p className="text-lg font-medium text-slate-900 mb-3">
                Cos&apos;è NextHuman?
              </p>
              <p className="text-[15px] text-slate-600 mb-4">
                NextHuman è una piattaforma interattiva che visualizza le <strong className="text-slate-900">scadenze probabilistiche</strong> che attendono l&apos;umanità. 
                Non è una previsione, ma un <strong className="text-slate-900">esercizio di design speculativo</strong> che combina knowledge mapping, 
                scenari futuri e visualizzazioni temporali per aiutare a comprendere le complessità del domani.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">Scadenze Probabilistiche</p>
                  <p className="text-xs text-slate-600">Eventi futuri con probabilità di accadimento basate su analisi e trend</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-50 flex-shrink-0">
                  <Network className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">Knowledge Mapping</p>
                  <p className="text-xs text-slate-600">Visualizzazione delle connessioni tra eventi, temi e scenari</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">Scenari Speculativi</p>
                  <p className="text-xs text-slate-600">Esplorazione di futuri possibili attraverso visualizzazioni interattive</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-slate-900 mb-3">
                Come Funziona?
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Esplora la Board</p>
                    <p className="text-xs text-slate-600">
                      Naviga liberamente nella whiteboard interattiva. Ogni card rappresenta una scadenza probabilistica 
                      con data, probabilità e temi associati.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Usa i Filtri</p>
                    <p className="text-xs text-slate-600">
                      Filtra per <strong>temi</strong> (clima, tecnologia, geopolitica...) o <strong>probabilità</strong> per 
                      concentrarti su aree specifiche di interesse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Esplora Scenari</p>
                    <p className="text-xs text-slate-600">
                      Seleziona tra scenari <strong>ottimistici</strong>, <strong>realistici</strong> o <strong>pessimistici</strong> 
                      per vedere come cambiano le probabilità degli eventi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Scopri le Connessioni</p>
                    <p className="text-xs text-slate-600">
                      Clicca su un evento per vedere dettagli, implicazioni e link a risorse approfondite. 
                      Le connessioni tra eventi mostrano come il futuro sia interconnesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Nota Importante</p>
                  <p className="text-xs text-amber-800">
                    NextHuman non è una previsione scientifica, ma uno strumento di <strong>design speculativo</strong> 
                    per stimolare riflessioni critiche sui futuri possibili. Le probabilità sono indicative e basate su 
                    analisi di trend, non su modelli predittivi rigorosi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600">Non mostrare più questo messaggio</span>
            </label>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Inizia l&apos;esplorazione
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

