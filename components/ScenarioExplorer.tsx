'use client';

import { useState, useMemo } from 'react';
import { FilterState } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { DeadlineCard } from './DeadlineCard';
import { Sliders, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { filterDeadlines } from '@/lib/filters';
import { applyScenarioToDeadlines, type ScenarioType } from '@/lib/scenarios';

export function ScenarioExplorer({ filters }: { filters: FilterState }) {
  const [scenarioType, setScenarioType] = useState<ScenarioType>('realistic');
  const [customProbabilities, setCustomProbabilities] = useState<Record<string, number>>({});

  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, filters);
  }, [filters]);

  const adjustedDeadlines = useMemo(() => {
    return applyScenarioToDeadlines(filteredDeadlines, scenarioType, customProbabilities)
      .sort((a, b) => b.adjustedProbability - a.adjustedProbability);
  }, [filteredDeadlines, scenarioType, customProbabilities]);

  const updateProbability = (deadlineId: string, newProbability: number) => {
    setCustomProbabilities(prev => ({
      ...prev,
      [deadlineId]: newProbability
    }));
  };

  const resetScenario = () => {
    setCustomProbabilities({});
    setScenarioType('realistic');
  };

  const highProbabilityEvents = adjustedDeadlines.filter(d => d.adjustedProbability >= 70).length;
  const criticalEvents = adjustedDeadlines.filter(d => d.adjustedProbability >= 80).length;

  return (
    <div className="space-y-6">
      {/* Scenario Controls */}
      <div className="apple-card dark:apple-card-dark rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white flex items-center gap-2">
              <Sliders className="w-6 h-6" />
              Scenario Explorer
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Esplora come cambiano gli scenari modificando le probabilità
            </p>
          </div>
          <button
            onClick={resetScenario}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Reset
          </button>
        </div>

        {/* Scenario Type Selector */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {(['optimistic', 'realistic', 'pessimistic'] as const).map(type => (
            <button
              key={type}
              onClick={() => setScenarioType(type)}
              className={cn(
                'p-4 rounded-xl border transition-all',
                scenarioType === type
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                  : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                {type === 'optimistic' && <TrendingUp className="w-5 h-5" />}
                {type === 'realistic' && <Zap className="w-5 h-5" />}
                {type === 'pessimistic' && <TrendingDown className="w-5 h-5" />}
                <span className="font-semibold capitalize">
                  {type === 'optimistic' ? 'Ottimistico' : type === 'realistic' ? 'Realistico' : 'Pessimistico'}
                </span>
              </div>
              <p className="text-xs opacity-80">
                {type === 'optimistic' 
                  ? 'Probabilità ridotte del 20%' 
                  : type === 'realistic' 
                  ? 'Probabilità originali' 
                  : 'Probabilità aumentate del 20%'}
              </p>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-2xl font-semibold text-black dark:text-white">
              {adjustedDeadlines.length}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Eventi totali
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-2xl font-semibold text-orange-600 dark:text-orange-400">
              {highProbabilityEvents}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Alta probabilità (≥70%)
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-2xl font-semibold text-red-600 dark:text-red-400">
              {criticalEvents}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Critici (≥80%)
            </div>
          </div>
        </div>
      </div>

      {/* Events List with Adjustable Probabilities */}
      <div className="space-y-4">
        {adjustedDeadlines.map(deadline => {
          const hasCustom = customProbabilities[deadline.id] !== undefined;
          
          return (
            <div
              key={deadline.id}
              className="apple-card dark:apple-card-dark rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {deadline.title}
                    </h4>
                    {hasCustom && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
                        Personalizzato
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Originale: </span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {deadline.probabilityValue}%
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Scenario: </span>
                      <span className={cn(
                        'font-bold',
                        (deadline.probabilityChange ?? 0) > 0 && 'text-red-600 dark:text-red-400',
                        (deadline.probabilityChange ?? 0) < 0 && 'text-green-600 dark:text-green-400',
                        (deadline.probabilityChange ?? 0) === 0 && 'text-slate-700 dark:text-slate-300'
                      )}>
                        {deadline.adjustedProbability}%
                        {(deadline.probabilityChange ?? 0) !== 0 && (
                          <span className="ml-1 text-xs">
                            ({(deadline.probabilityChange ?? 0) > 0 ? '+' : ''}{deadline.probabilityChange}%)
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Probability Slider */}
              <div className="mt-4">
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Modifica probabilità: {deadline.adjustedProbability}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={deadline.adjustedProbability}
                  onChange={(e) => updateProbability(deadline.id, parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Show full card on expand */}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Mostra dettagli
                </summary>
                <div className="mt-4">
                  <DeadlineCard deadline={deadline} />
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}

