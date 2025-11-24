'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già visto il modale
    const hasSeenWelcome = localStorage.getItem('relatronica-welcome-seen');
    if (!hasSeenWelcome) {
      // Piccolo delay per un effetto più naturale
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem('relatronica-welcome-seen', 'true');
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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
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
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Relatronica Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Benvenuto</h2>
              <p className="text-sm text-slate-500 mt-1">Relatronica — Studio di progettazione</p>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p className="text-lg">
              Stai esplorando <strong className="text-slate-900">NextHuman</strong>, un progetto che rappresenta 
              il nostro modo di lavorare: unire <strong className="text-slate-900">speculative design, civic tech 
              e knowledge mapping</strong> per rendere accessibili scenari futuri complessi.
            </p>
            
            <p className="text-[15px] text-slate-600">
              La <strong>board interattiva</strong> visualizza le connessioni tra eventi e scenari futuri attraverso 
              uno spazio navigabile che favorisce la scoperta di relazioni inaspettate.
            </p>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-[15px] text-slate-600">
                Naviga liberamente o usa i <strong>filtri</strong> per esplorare temi specifici. Ogni elemento 
                rappresenta una scadenza probabilistica con le sue implicazioni. Scopri gli altri nostri progetti 
                nella sezione <strong>Progetti</strong>.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
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

