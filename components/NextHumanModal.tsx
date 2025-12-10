'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Network, Sparkles, TrendingUp, TrendingDown, BarChart, Info } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export function NextHumanModal() {
  const { t } = useI18n();
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
          aria-label={t('nexthuman.modal.close')}
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
              <h2 className="text-3xl font-bold text-slate-900">{t('nexthuman.title')}</h2>
              <p className="text-sm text-slate-500 mt-1">{t('nexthuman.subtitle')}</p>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <p className="text-lg font-medium text-slate-900 mb-3">
                {t('nexthuman.modal.whatIs')}
              </p>
              <p className="text-[15px] text-slate-600 mb-4">
                {t('nexthuman.modal.description', {
                  probabilistic: `<strong class="text-slate-900">${t('nexthuman.modal.probabilistiche')}</strong>`,
                  speculative: `<strong class="text-slate-900">${t('nexthuman.modal.speculativo')}</strong>`
                }).replace(/\{probabilistiche\}/, `<strong class="text-slate-900">${t('nexthuman.modal.probabilistiche')}</strong>`)
                  .replace(/\{speculativo\}/, `<strong class="text-slate-900">${t('nexthuman.modal.speculativo')}</strong>`)
                  .split(/(\{probabilistiche\}|\{speculativo\})/).map((part, i) => {
                    if (part === '{probabilistiche}') return <strong key={i} className="text-slate-900">{t('nexthuman.modal.probabilistiche')}</strong>;
                    if (part === '{speculativo}') return <strong key={i} className="text-slate-900">{t('nexthuman.modal.speculativo')}</strong>;
                    return <span key={i}>{part}</span>;
                  })}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.features.deadlines.title')}</p>
                  <p className="text-xs text-slate-600">{t('nexthuman.modal.features.deadlines.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-50 flex-shrink-0">
                  <Network className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.features.mapping.title')}</p>
                  <p className="text-xs text-slate-600">{t('nexthuman.modal.features.mapping.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-50 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.features.scenarios.title')}</p>
                  <p className="text-xs text-slate-600">{t('nexthuman.modal.features.scenarios.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-slate-900 mb-3">
                {t('nexthuman.modal.howItWorks')}
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.steps.explore.title')}</p>
                    <p className="text-xs text-slate-600">
                      {t('nexthuman.modal.steps.explore.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.steps.filters.title')}</p>
                    <p className="text-xs text-slate-600">
                      {t('nexthuman.modal.steps.filters.description', {
                        themes: `<strong>${t('nexthuman.modal.steps.filters.themes')}</strong>`,
                        probabilities: `<strong>${t('nexthuman.modal.steps.filters.probabilities')}</strong>`
                      }).replace(/\{themes\}/, `<strong>${t('nexthuman.modal.steps.filters.themes')}</strong>`)
                        .replace(/\{probabilities\}/, `<strong>${t('nexthuman.modal.steps.filters.probabilities')}</strong>`)
                        .split(/(\{themes\}|\{probabilities\})/).map((part, i) => {
                          if (part === '{themes}') return <strong key={i}>{t('nexthuman.modal.steps.filters.themes')}</strong>;
                          if (part === '{probabilities}') return <strong key={i}>{t('nexthuman.modal.steps.filters.probabilities')}</strong>;
                          return <span key={i}>{part}</span>;
                        })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.steps.scenarios.title')}</p>
                    <p className="text-xs text-slate-600">
                      {t('nexthuman.modal.steps.scenarios.description', {
                        optimistic: `<strong>${t('nexthuman.modal.steps.scenarios.optimistic')}</strong>`,
                        realistic: `<strong>${t('nexthuman.modal.steps.scenarios.realistic')}</strong>`,
                        pessimistic: `<strong>${t('nexthuman.modal.steps.scenarios.pessimistic')}</strong>`
                      }).replace(/\{optimistic\}/, `<strong>${t('nexthuman.modal.steps.scenarios.optimistic')}</strong>`)
                        .replace(/\{realistic\}/, `<strong>${t('nexthuman.modal.steps.scenarios.realistic')}</strong>`)
                        .replace(/\{pessimistic\}/, `<strong>${t('nexthuman.modal.steps.scenarios.pessimistic')}</strong>`)
                        .split(/(\{optimistic\}|\{realistic\}|\{pessimistic\})/).map((part, i) => {
                          if (part === '{optimistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.optimistic')}</strong>;
                          if (part === '{realistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.realistic')}</strong>;
                          if (part === '{pessimistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.pessimistic')}</strong>;
                          return <span key={i}>{part}</span>;
                        })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{t('nexthuman.modal.steps.connections.title')}</p>
                    <p className="text-xs text-slate-600">
                      {t('nexthuman.modal.steps.connections.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">{t('nexthuman.modal.importantNote.title')}</p>
                  <p className="text-xs text-amber-800">
                    {t('nexthuman.modal.importantNote.description', {
                      speculative: `<strong>${t('nexthuman.modal.importantNote.speculative')}</strong>`
                    }).replace(/\{speculative\}/, `<strong>${t('nexthuman.modal.importantNote.speculative')}</strong>`)
                      .split(/(\{speculative\})/).map((part, i) => {
                        if (part === '{speculative}') return <strong key={i}>{t('nexthuman.modal.importantNote.speculative')}</strong>;
                        return <span key={i}>{part}</span>;
                      })}
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
              <span className="text-sm text-slate-600">{t('nexthuman.modal.dontShowAgain')}</span>
            </label>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('nexthuman.modal.startExploring')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

