'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FilterState } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { getThemeColorHex, cn } from '@/lib/utils';
import { filterDeadlines } from '@/lib/filters';
import { DeadlineCard } from './DeadlineCard';
import { X, Network } from 'lucide-react';

// Dynamic import per evitare problemi SSR
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full min-h-[600px] text-slate-500">Caricamento grafo...</div>
});

export function NetworkGraphView({ filters }: { filters: FilterState }) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const graphRef = useRef<any>();

  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, filters);
  }, [filters]);

  const { nodes, links } = useMemo(() => {
    const nodeMap = new Map();
    const linkSet = new Set<string>();

    // Crea nodi
    filteredDeadlines.forEach(deadline => {
      nodeMap.set(deadline.id, {
        ...deadline,
        title: deadline.title,
        probability: deadline.probability,
        probabilityValue: deadline.probabilityValue,
        themes: deadline.themes,
        date: deadline.date,
        category: deadline.category,
      });
    });

    // Crea link
    filteredDeadlines.forEach(deadline => {
      // Link da triggeredBy
      if (deadline.triggeredBy) {
        deadline.triggeredBy.forEach(triggerId => {
          if (nodeMap.has(triggerId) && nodeMap.has(deadline.id)) {
            const linkKey = `${triggerId}-${deadline.id}`;
            if (!linkSet.has(linkKey)) {
              linkSet.add(linkKey);
            }
          }
        });
      }

      // Link a triggers
      if (deadline.triggers) {
        deadline.triggers.forEach(targetId => {
          if (nodeMap.has(targetId) && nodeMap.has(deadline.id)) {
            const linkKey = `${deadline.id}-${targetId}`;
            if (!linkSet.has(linkKey)) {
              linkSet.add(linkKey);
            }
          }
        });
      }

      // Link relatedEvents
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
  }, [filteredDeadlines]);

  const selectedDeadline = useMemo(() => {
    if (!selectedNode) return null;
    return deadlines.find(d => d.id === selectedNode);
  }, [selectedNode]);

  // Auto-center on load
  useEffect(() => {
    if (graphRef.current && nodes.length > 0) {
      setTimeout(() => {
        graphRef.current.zoomToFit(400, 20);
      }, 100);
    }
  }, [nodes.length]);

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
    <div className="space-y-6">
      {/* Graph Container */}
      <div className="apple-card dark:apple-card-dark rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
                <Network className="w-5 h-5" />
                Mappa delle Connessioni
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {nodes.length} eventi, {links.length} connessioni
              </p>
            </div>
            <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Evento</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <span>Connessione</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative" style={{ height: '600px' }}>
          <ForceGraph2D
            ref={graphRef}
            graphData={{ nodes, links }}
            nodeLabel={(node: any) => `
              <div style="
                background: rgba(15, 23, 42, 0.95);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 12px;
                max-width: 250px;
                border: 1px solid rgba(255, 255, 255, 0.2);
              ">
                <strong>${node.title}</strong><br/>
                <span style="color: #94a3b8; font-size: 10px;">Probabilità: ${node.probabilityValue}%</span>
              </div>
            `}
            nodeColor={(node: any) => {
              if (hoveredNode === node.id) return '#fbbf24';
              if (selectedNode === node.id) return '#3b82f6';
              return getThemeColorHex(node.themes[0] || 'clima');
            }}
            nodeVal={(node: any) => {
              // Dimensione basata su probabilità
              return 5 + (node.probabilityValue / 100) * 10;
            }}
            linkColor={() => 'rgba(147, 197, 253, 0.4)'}
            linkWidth={2}
            linkDirectionalArrowLength={6}
            linkDirectionalArrowRelPos={1}
            onNodeClick={(node: any) => {
              setSelectedNode(node.id === selectedNode ? null : node.id);
            }}
            onNodeHover={(node: any) => {
              setHoveredNode(node?.id || null);
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
      </div>

      {/* Selected Node Details */}
      {selectedDeadline && (
        <div className="apple-card dark:apple-card-dark rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Dettagli Evento
            </h3>
            <button
              onClick={() => setSelectedNode(null)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <DeadlineCard deadline={selectedDeadline} />
          
          {/* Connections Info */}
          {(selectedDeadline.triggers?.length || selectedDeadline.triggeredBy?.length || selectedDeadline.relatedEvents?.length) && (
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
              <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                Connessioni
              </h4>
              <div className="space-y-2">
                {selectedDeadline.triggeredBy && selectedDeadline.triggeredBy.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Innescato da:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDeadline.triggeredBy.map(id => {
                        const event = deadlines.find(d => d.id === id);
                        if (!event) return null;
                        return (
                          <span
                            key={id}
                            className="px-2 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
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
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Può innescare:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDeadline.triggers.map(id => {
                        const event = deadlines.find(d => d.id === id);
                        if (!event) return null;
                        return (
                          <span
                            key={id}
                            className="px-2 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                          >
                            {event.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                {selectedDeadline.relatedEvents && selectedDeadline.relatedEvents.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Correlato a:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedDeadline.relatedEvents.map(id => {
                        const event = deadlines.find(d => d.id === id);
                        if (!event) return null;
                        return (
                          <span
                            key={id}
                            className="px-2 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
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
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
              <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                Cosa puoi fare
              </h4>
              <div className="space-y-3">
                {selectedDeadline.actions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-black/5 dark:border-white/10"
                  >
                    <h5 className="font-medium text-black dark:text-white mb-1">
                      {action.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {action.description}
                    </p>
                    {action.links && action.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {action.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
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
    </div>
  );
}

