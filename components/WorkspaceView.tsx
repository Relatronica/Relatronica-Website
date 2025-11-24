'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FilterState } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { getThemeColorHex, cn } from '@/lib/utils';
import { filterDeadlines } from '@/lib/filters';
import { applyScenarioToDeadlines, type ScenarioType } from '@/lib/scenarios';
import { DeadlineCard } from './DeadlineCard';
import { Network, X, Sliders, TrendingUp, TrendingDown, Zap } from 'lucide-react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full min-h-[600px] text-gray-500">Caricamento...</div>
});

export function WorkspaceView({ filters }: { filters: FilterState }) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [scenarioType, setScenarioType] = useState<ScenarioType>('realistic');
  const [customProbabilities, setCustomProbabilities] = useState<Record<string, number>>({});
  const [showScenarioPanel, setShowScenarioPanel] = useState(false);
  const graphRef = useRef<any>();

  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, filters);
  }, [filters]);

  // Adjust probabilities based on scenario
  const adjustedDeadlines = useMemo(() => {
    return applyScenarioToDeadlines(filteredDeadlines, scenarioType, customProbabilities);
  }, [filteredDeadlines, scenarioType, customProbabilities]);

  const { nodes, links } = useMemo(() => {
    const nodeMap = new Map();
    const linkSet = new Set<string>();

    adjustedDeadlines.forEach(deadline => {
      nodeMap.set(deadline.id, {
        ...deadline,
        title: deadline.title,
        probability: deadline.probability,
        probabilityValue: deadline.adjustedProbability,
        themes: deadline.themes,
        date: deadline.date,
        category: deadline.category,
      });
    });

    adjustedDeadlines.forEach(deadline => {
      if (deadline.triggeredBy) {
        deadline.triggeredBy.forEach(triggerId => {
          if (nodeMap.has(triggerId) && nodeMap.has(deadline.id)) {
            linkSet.add(`${triggerId}-${deadline.id}`);
          }
        });
      }

      if (deadline.triggers) {
        deadline.triggers.forEach(targetId => {
          if (nodeMap.has(targetId) && nodeMap.has(deadline.id)) {
            linkSet.add(`${deadline.id}-${targetId}`);
          }
        });
      }

      if (deadline.relatedEvents) {
        deadline.relatedEvents.forEach(relatedId => {
          if (nodeMap.has(relatedId) && nodeMap.has(deadline.id)) {
            const linkKey = `${deadline.id}-${relatedId}`;
            const reverseKey = `${relatedId}-${deadline.id}`;
            if (!linkSet.has(linkKey) && !linkSet.has(reverseKey)) {
              linkSet.add(linkKey);
            }
          }
        });
      }
    });

    const linksArray = Array.from(linkSet).map(linkKey => {
      const [source, target] = linkKey.split('-');
      return { source, target };
    });

    return {
      nodes: Array.from(nodeMap.values()),
      links: linksArray
    };
  }, [adjustedDeadlines]);

  const selectedDeadline = useMemo(() => {
    if (!selectedNode) return null;
    return adjustedDeadlines.find(d => d.id === selectedNode);
  }, [selectedNode, adjustedDeadlines]);

  useEffect(() => {
    if (graphRef.current && nodes.length > 0) {
      setTimeout(() => {
        graphRef.current.zoomToFit(400, 20);
      }, 100);
    }
  }, [nodes.length]);

  const updateProbability = (deadlineId: string, newProbability: number) => {
    setCustomProbabilities(prev => ({
      ...prev,
      [deadlineId]: newProbability
    }));
  };

  const highProbabilityEvents = adjustedDeadlines.filter(d => d.adjustedProbability >= 70).length;
  const criticalEvents = adjustedDeadlines.filter(d => d.adjustedProbability >= 80).length;

  if (nodes.length === 0) {
    return (
      <div className="apple-card dark:apple-card-dark rounded-2xl p-12 text-center">
        <Network className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Nessuna scadenza trovata con i filtri selezionati
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-120px)]">
      {/* Main Graph Area */}
      <div className="absolute inset-0 apple-card dark:apple-card-dark rounded-2xl overflow-hidden">
        <ForceGraph2D
          ref={graphRef}
          graphData={{ nodes, links }}
          nodeLabel={(node: any) => `
            <div style="
              background: rgba(0, 0, 0, 0.9);
              color: white;
              padding: 10px 14px;
              border-radius: 10px;
              font-size: 12px;
              max-width: 280px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            ">
              <strong>${node.title}</strong><br/>
              <span style="color: #a1a1aa; font-size: 11px; margin-top: 4px; display: block;">
                Probabilità: ${node.probabilityValue}%
              </span>
            </div>
          `}
          nodeColor={(node: any) => {
            if (selectedNode === node.id) return '#000000';
            return getThemeColorHex(node.themes[0] || 'clima');
          }}
          nodeVal={(node: any) => 5 + (node.probabilityValue / 100) * 12}
          linkColor={() => 'rgba(0, 0, 0, 0.2)'}
          linkWidth={1.5}
          linkDirectionalArrowLength={5}
          linkDirectionalArrowRelPos={1}
          onNodeClick={(node: any) => {
            setSelectedNode(node.id === selectedNode ? null : node.id);
          }}
          onBackgroundClick={() => setSelectedNode(null)}
          cooldownTicks={100}
          onEngineStop={() => {
            if (graphRef.current) {
              graphRef.current.zoomToFit(400, 20);
            }
          }}
        />
      </div>

      {/* Floating Scenario Panel - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => setShowScenarioPanel(!showScenarioPanel)}
          className="apple-card dark:apple-card-dark rounded-xl p-3 hover:scale-105 transition-transform"
        >
          <Sliders className="w-5 h-5 text-black dark:text-white" />
        </button>
        
        {showScenarioPanel && (
          <div className="absolute top-14 left-0 w-80 apple-card dark:apple-card-dark rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-black dark:text-white">Scenari</h3>
              <button
                onClick={() => setShowScenarioPanel(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 rounded"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {(['optimistic', 'realistic', 'pessimistic'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setScenarioType(type)}
                  className={cn(
                    'p-3 rounded-lg border text-xs transition-all',
                    scenarioType === type
                      ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <div className="flex items-center gap-1 mb-1 justify-center">
                    {type === 'optimistic' && <TrendingUp className="w-3 h-3" />}
                    {type === 'realistic' && <Zap className="w-3 h-3" />}
                    {type === 'pessimistic' && <TrendingDown className="w-3 h-3" />}
                  </div>
                  <div className="font-medium capitalize">
                    {type === 'optimistic' ? 'Ottimistico' : type === 'realistic' ? 'Realistico' : 'Pessimistico'}
                  </div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/5 dark:border-white/10">
              <div className="text-center">
                <div className="text-lg font-semibold text-black dark:text-white">
                  {adjustedDeadlines.length}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Eventi</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                  {highProbabilityEvents}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">≥70%</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-red-600 dark:text-red-400">
                  {criticalEvents}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">≥80%</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected Node Details - Bottom Right */}
      {selectedDeadline && (
        <div className="absolute bottom-4 right-4 w-96 max-h-[60vh] overflow-y-auto apple-card dark:apple-card-dark rounded-2xl p-6 z-10">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {selectedDeadline.title}
            </h3>
            <button
              onClick={() => setSelectedNode(null)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Probability Slider */}
          <div className="mb-4 pb-4 border-b border-black/5 dark:border-white/10">
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">
              Probabilità: {selectedDeadline.adjustedProbability}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={selectedDeadline.adjustedProbability}
              onChange={(e) => updateProbability(selectedDeadline.id, parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white"
            />
          </div>

          <DeadlineCard deadline={selectedDeadline} />

          {/* Connections */}
          {(selectedDeadline.triggers?.length || selectedDeadline.triggeredBy?.length || selectedDeadline.relatedEvents?.length) && (
            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
              <h4 className="text-xs font-semibold text-black dark:text-white mb-2">Connessioni</h4>
              <div className="space-y-2 text-xs">
                {selectedDeadline.triggeredBy && selectedDeadline.triggeredBy.length > 0 && (
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 mb-1">Innescato da:</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedDeadline.triggeredBy.map(id => {
                        const event = deadlines.find(d => d.id === id);
                        if (!event) return null;
                        return (
                          <span
                            key={id}
                            className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                          >
                            {event.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                {selectedDeadline.triggers && selectedDeadline.triggers.length > 0 && (
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 mb-1">Può innescare:</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedDeadline.triggers.map(id => {
                        const event = deadlines.find(d => d.id === id);
                        if (!event) return null;
                        return (
                          <span
                            key={id}
                            className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                          >
                            {event.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          {selectedDeadline.actions && selectedDeadline.actions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
              <h4 className="text-xs font-semibold text-black dark:text-white mb-2">Cosa puoi fare</h4>
              <div className="space-y-2">
                {selectedDeadline.actions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-black/5 dark:border-white/10"
                  >
                    <h5 className="font-medium text-black dark:text-white text-sm mb-1">
                      {action.title}
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {action.description}
                    </p>
                    {action.links && action.links.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {action.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-2 py-1 rounded bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info Panel - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <div className="apple-card dark:apple-card-dark rounded-xl p-3 text-xs">
          <div className="text-gray-500 dark:text-gray-400 mb-1">Eventi visibili</div>
          <div className="text-lg font-semibold text-black dark:text-white">
            {nodes.length}
          </div>
          <div className="text-gray-500 dark:text-gray-400 mt-2 mb-1">Connessioni</div>
          <div className="text-lg font-semibold text-black dark:text-white">
            {links.length}
          </div>
        </div>
      </div>
    </div>
  );
}

