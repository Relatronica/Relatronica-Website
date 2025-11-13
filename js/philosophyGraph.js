/**
 * Relatronica - Philosophy of Mind Atlas
 * Interactive graph with filters and responsive layout
 */

const ERA_SEQUENCE = [
  'ancient',
  'classical-antiquity',
  'late-antiquity',
  'medieval',
  'early-medieval',
  'high-medieval',
  'renaissance',
  'early-modern',
  'enlightenment',
  '18th-century',
  'modern',
  'early-19th-century',
  '19th-century',
  'late-19th-century',
  'early-20th-century',
  '20th-century',
  'mid-20th-century',
  'late-20th-century',
  '21st-century',
  'contemporary'
];

const ERA_LABELS = {
  'ancient': 'Ancient (–300 CE)',
  'classical-antiquity': 'Classical Antiquity',
  'late-antiquity': 'Late Antiquity',
  'medieval': 'Medieval',
  'early-medieval': 'Early Medieval',
  'high-medieval': 'High Medieval',
  'renaissance': 'Renaissance',
  'early-modern': 'Early Modern (17th C.)',
  'enlightenment': 'Enlightenment',
  '18th-century': '18th Century',
  'modern': 'Modern (19th C.)',
  'early-19th-century': 'Early 19th Century',
  '19th-century': '19th Century',
  'late-19th-century': 'Late 19th Century',
  'early-20th-century': 'Early 20th Century',
  '20th-century': '20th Century',
  'mid-20th-century': 'Mid 20th Century',
  'late-20th-century': 'Late 20th Century',
  '21st-century': '21st Century',
  'contemporary': 'Contemporary'
};

const ERA_ALIASES = {
  'classical': 'classical-antiquity',
  'late antiquity': 'late-antiquity',
  'middle ages': 'medieval',
  'middle-age': 'medieval',
  'renaissance period': 'renaissance',
  'modern period': 'modern',
  'modern era': 'modern',
  'postmodern': 'contemporary',
  'modernity': 'modern'
};

const NODE_CLUSTER_SPACING = 20;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const DEFAULT_LABEL_SETTINGS = {
  connectorPadding: 6,
  labelPadding: 12,
  baselineOffset: -2
};

const DEFAULT_TYPE_META = {
  philosopher: {
    label: 'Philosopher',
    icon: '\uf501',
    iconClass: 'fa-user-graduate',
    color: '#3f51b5',
    baseRadius: 10,
    activeRadius: 14,
    iconFontSize: '0.58rem'
  },
  theory: {
    label: 'Theory',
    icon: '\uf0eb',
    iconClass: 'fa-lightbulb',
    color: '#009688',
    baseRadius: 14,
    activeRadius: 18,
    iconFontSize: '0.68rem'
  },
  concept: {
    label: 'Concept',
    icon: '\uf5dc',
    iconClass: 'fa-brain',
    color: '#ff9800',
    baseRadius: 14,
    activeRadius: 18,
    iconFontSize: '0.68rem'
  }
};

const FALLBACK_TYPE_COLORS = ['#8e44ad', '#1abc9c', '#e67e22', '#16a085', '#c0392b', '#2980b9', '#f39c12', '#2c3e50'];
let ACTIVE_TYPE_META = { ...DEFAULT_TYPE_META };

function computeRadialOffsets(count, spacing = NODE_CLUSTER_SPACING) {
  if (count <= 1) {
    return [{ x: 0, y: 0 }];
  }

  const offsets = [{ x: 0, y: 0 }];

  for (let index = 1; index < count; index += 1) {
    const radius = spacing * Math.sqrt(index);
    const angle = index * GOLDEN_ANGLE;
    offsets.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    });
  }

  return offsets;
}

function normalizeTypeValue(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }
  return String(value || '').trim().toLowerCase();
}

function buildTypeMeta(rawData) {
  const metadataOverrides = rawData?.metadata?.typeMeta || {};
  const globalOverrides = window.MIND_GRAPH_TYPE_META || {};
  const overrides = { ...metadataOverrides, ...globalOverrides };

  const nodes = Array.isArray(rawData?.nodes) ? rawData.nodes : [];
  const types = new Set(
    nodes
      .map((node) => normalizeTypeValue(node.type))
      .filter(Boolean)
  );

  Object.keys(overrides).forEach((key) => {
    const normalized = normalizeTypeValue(key);
    if (normalized) {
      types.add(normalized);
    }
  });

  if (types.size === 0) {
    return { ...DEFAULT_TYPE_META };
  }

  let colorIndex = 0;
  const meta = {};

  types.forEach((type) => {
    const base = DEFAULT_TYPE_META[type] || {};
    const override = overrides[type] || {};
    const color = override.color || base.color || FALLBACK_TYPE_COLORS[colorIndex % FALLBACK_TYPE_COLORS.length] || '#607d8b';
    colorIndex += 1;
    meta[type] = {
      label: override.label || base.label || titleCase(type.replace(/[-_]/g, ' ')),
      icon: override.icon || base.icon || '\uf128',
      iconClass: override.iconClass || base.iconClass || 'fa-circle',
      color,
      baseRadius: Number(override.baseRadius ?? base.baseRadius ?? 12),
      activeRadius: Number(override.activeRadius ?? base.activeRadius ?? 16),
      iconFontSize: override.iconFontSize || base.iconFontSize || '0.62rem'
    };
  });

  return meta;
}

function normalizeEraValue(value) {
  if (!value) return '';
  const key = value.toLowerCase();
  return ERA_ALIASES[key] || key;
}

function getEraIndex(value) {
  const normalized = normalizeEraValue(value);
  const idx = ERA_SEQUENCE.indexOf(normalized);
  return idx !== -1 ? idx : ERA_SEQUENCE.length + 1;
}

document.addEventListener('DOMContentLoaded', () => {
  initPhilosophyMindGraph();
});

function initPhilosophyMindGraph() {
  const container = document.getElementById('philosophy-graph');
  if (!container || !window.d3) {
    return;
  }

  const dataset = window.PHILOSOPHY_MIND_GRAPH_DATA;
  if (!dataset || !Array.isArray(dataset.nodes) || !Array.isArray(dataset.links)) {
    renderErrorState(container, 'Dataset unavailable: ensure philosophyMindData.js is loaded.');
    return;
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'mind-tooltip hidden';
  container.appendChild(tooltip);

  const emptyState = document.createElement('div');
  emptyState.className = 'mind-empty-state hidden';
  emptyState.textContent = 'No nodes match the current filters.';
  container.appendChild(emptyState);

  const detailOverlay = document.createElement('div');
  detailOverlay.className = 'mind-detail-overlay hidden';
  container.appendChild(detailOverlay);

  const state = {
    container,
    tooltip,
    emptyState,
    detailOverlay,
    rawData: dataset,
    detailContainer: document.getElementById('mind-detail-panel'),
    typeMeta: buildTypeMeta(dataset),
    typeDomain: [],
    filters: {
      type: 'all',
      era: 'all',
      tradition: 'all',
      topic: 'all',
      relation: 'all',
      search: ''
    },
    focusedNodeId: null,
    svg: null,
    zoom: null,
    zoomTarget: null,
    resizeObserver: null,
    currentZoom: d3.zoomIdentity, // Added for zoom effect updater
    lastNodeCount: 0,
    lastLinkCount: 0,
    graphWidth: 0,
    graphHeight: 0,
    currentNodes: [],
    currentLinks: []
  };

  state.typeDomain = Object.keys(state.typeMeta || {});
  ACTIVE_TYPE_META = state.typeMeta;

  populateDynamicFilters(state);
  bindFilterEvents(state);
  renderDefaultDetail(state);
  applyMindGraphFilters(state);
  setupResizeObserver(state);
  bindZoomReset(state);
}

function populateDynamicFilters(state) {
  const { rawData } = state;
  if (!rawData) return;

  const searchInput = document.getElementById('mind-filter-search');
  const resetButton = document.getElementById('mind-filter-reset');

  const eras = Array.from(
    new Set(rawData.nodes.map((node) => node.era).filter(Boolean))
  ).sort();

  const traditions = Array.from(
    new Set(
      rawData.nodes.reduce((acc, node) => {
        if (Array.isArray(node.tradition)) {
          node.tradition.forEach((entry) => acc.push(entry));
        }
        return acc;
      }, [])
    )
  ).sort();

  const topics = Array.from(
    new Set(
      rawData.nodes.reduce((acc, node) => {
        if (Array.isArray(node.topics)) {
          node.topics.forEach((entry) => acc.push(entry));
        }
        return acc;
      }, [])
    )
  ).sort();

  const relationCategories = Array.from(
    new Set(
      rawData.links.map((link) => getRelationCategory(link.relation))
    )
  ).sort();

  const eraOrder = eras.sort((a, b) => {
    const aScore = getEraIndex(a);
    const bScore = getEraIndex(b);
    return aScore - bScore || a.localeCompare(b);
  });

  state.eraOrder = eraOrder;
  state.traditionOrder = traditions;
  state.topicOrder = topics;
  state.relationCategories = relationCategories;
  populateIconSelectOptions(state, 'relation', relationCategories, getRelationOptionHTML);
  populateIconSelectOptions(state, 'era', eras, (value) => formatIconOptionHTML(getEraMeta(value)));
  populateIconSelectOptions(state, 'tradition', traditions, (value) => formatIconOptionHTML(getTraditionMeta(value)));
  populateIconSelectOptions(state, 'topic', topics, (value) => formatIconOptionHTML(getTopicMeta(value)));
}

function bindFilterEvents(state) {
  const searchInput = document.getElementById('mind-filter-search');
  const resetButton = document.getElementById('mind-filter-reset');

  setupTypeIconSelect(state);
  setupLegendTypeChips(state);
  setupRelationIconSelect(state);
  setupEraIconSelect(state);
  setupTraditionIconSelect(state);
  setupTopicIconSelect(state);
  setIconSelectValue('type', state.filters.type || 'all');
  setIconSelectValue('relation', state.filters.relation || 'all');
  setIconSelectValue('era', state.filters.era || 'all');
  setIconSelectValue('tradition', state.filters.tradition || 'all');
  setIconSelectValue('topic', state.filters.topic || 'all');

  if (searchInput) {
    const debouncedSearch = debounce((value) => {
      state.filters.search = value;
      applyMindGraphFilters(state);
    }, 250);

    searchInput.addEventListener('input', (event) => {
      debouncedSearch(event.target.value.trim());
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      state.filters = { type: 'all', era: 'all', tradition: 'all', topic: 'all', relation: 'all', search: '' };
      if (searchInput) searchInput.value = '';
      setIconSelectValue('type', 'all');
      setIconSelectValue('relation', 'all');
      setIconSelectValue('era', 'all');
      setIconSelectValue('tradition', 'all');
      setIconSelectValue('topic', 'all');
      state.focusedNodeId = null;
      applyMindGraphFilters(state);
    });
  }
}

function applyMindGraphFilters(state) {
  const { rawData, filters } = state;
  if (!rawData) return;

  const searchTerm = filters.search.toLowerCase();
  const relationFilter = filters.relation;

  const relevantLinks = rawData.links
    .map((link) => ({
      ...link,
      category: getRelationCategory(link.relation),
      weight: getRelationWeight(link.relation)
    }))
    .filter((link) => relationFilter === 'all' || link.category === relationFilter);

  const relationNodeSet = new Set();
  relevantLinks.forEach((link) => {
    relationNodeSet.add(link.source);
    relationNodeSet.add(link.target);
  });

  const typeFilterValue = filters.type === 'all' ? 'all' : normalizeTypeValue(filters.type);

  const filteredNodes = rawData.nodes.filter((node) => {
    const nodeTypeKey = normalizeTypeValue(node.type);
    const matchesType = typeFilterValue === 'all' || nodeTypeKey === typeFilterValue;
    const matchesEra = filters.era === 'all' || node.era === filters.era;
    const matchesTradition =
      filters.tradition === 'all' ||
      (Array.isArray(node.tradition) && node.tradition.includes(filters.tradition));
    const matchesTopic =
      filters.topic === 'all' ||
      (Array.isArray(node.topics) && node.topics.includes(filters.topic));
    const matchesRelation =
      filters.relation === 'all' || relationNodeSet.has(node.id);

    const searchableText = [
      node.label,
      node.summary || '',
      ...(Array.isArray(node.topics) ? node.topics : []),
      ...(Array.isArray(node.tradition) ? node.tradition : [])
    ]
      .join(' ')
      .toLowerCase();

    const matchesSearch =
      searchTerm.length === 0 || searchableText.includes(searchTerm);

    return matchesType && matchesEra && matchesTradition && matchesTopic && matchesRelation && matchesSearch;
  });

  const nodeIdSet = new Set(filteredNodes.map((node) => node.id));
  const filteredLinks = relevantLinks.filter(
    (link) => nodeIdSet.has(link.source) && nodeIdSet.has(link.target)
  );

  state.lastNodeCount = filteredNodes.length;
  state.lastLinkCount = filteredLinks.length;
  if (state.focusedNodeId && !nodeIdSet.has(state.focusedNodeId)) {
    state.focusedNodeId = null;
    renderDefaultDetail(state);
  } else if (state.focusedNodeId) {
    const activeNode = filteredNodes.find((node) => node.id === state.focusedNodeId);
    if (activeNode) {
      renderNodeDetail(state, activeNode);
    } else {
      renderDefaultDetail(state);
    }
  } else if (!filteredNodes.length) {
    renderDefaultDetail(state);
  }

  renderGraph(state, filteredNodes, filteredLinks);
  updateFeedback(state, filteredNodes.length, filteredLinks.length);
}

function renderGraph(state, nodes, links) {
  const { container, tooltip, emptyState } = state;

  const existingSvg = container.querySelector('svg');
  if (existingSvg) {
    existingSvg.remove();
  }

  if (!nodes.length) {
    emptyState.classList.remove('hidden');
    tooltip.classList.add('hidden');
    state.svg = null;
    state.zoomTarget = null;
    hideDetailOverlay(state);
    return;
  }

  emptyState.classList.add('hidden');

  if (container.style.minWidth) {
    container.style.minWidth = '';
  }

  const width = container.clientWidth || 640;
  const rawHeight = container.clientHeight || 480;
  const eraCount = Array.isArray(state.eraOrder) ? state.eraOrder.length : 1;
  const desiredRowSpacing = 220;
  const minDynamicHeight = eraCount > 1
    ? ((eraCount - 1) * desiredRowSpacing) + 200
    : rawHeight;
  const computedHeight = Math.max(rawHeight, minDynamicHeight);
  if (container.style.minHeight !== `${computedHeight}px`) {
    container.style.minHeight = `${computedHeight}px`;
  }

  const height = computedHeight;

  const nodesCopy = nodes.map((node) => ({ ...node }));
  const linksCopy = links.map((link) => ({ ...link }));

  state.currentNodes = nodesCopy;
  state.currentLinks = linksCopy;
  state.graphWidth = width;
  state.graphHeight = height;
  state.graphWidth = width;
  state.graphHeight = height;

  const svg = d3.create('svg')
    .attr('viewBox', [0, 0, width, height])
    .attr('class', 'mind-graph-svg')
    .style('width', '100%')
    .style('height', '100%')
    .attr('role', 'img')
    .attr('aria-label', 'Graph of philosophy of mind relationships');

  const root = svg.append('g');

  let updateZoomEffects = () => {};

  const zoom = d3.zoom()
    .scaleExtent([0.6, 3])
    .on('zoom', (event) => {
      root.attr('transform', event.transform);
      updateZoomEffects(event.transform);
      state.currentZoom = event.transform;
      updateDetailOverlayPosition(state);
    });

  svg.call(zoom);

  const typeMetaMap = state.typeMeta && Object.keys(state.typeMeta).length ? state.typeMeta : ACTIVE_TYPE_META;
  const typeDomainSet = new Set();
  nodesCopy.forEach((node) => {
    const typeKey = normalizeTypeValue(node.type);
    if (typeKey) {
      typeDomainSet.add(typeKey);
      node._typeKey = typeKey;
    } else {
      node._typeKey = '';
    }
  });
  if (typeDomainSet.size === 0) {
    Object.keys(typeMetaMap).forEach((type) => typeDomainSet.add(type));
  }
  const typeDomain = Array.from(typeDomainSet);
  const colorScale = d3.scaleOrdinal()
    .domain(typeDomain)
    .range(typeDomain.map((type) => typeMetaMap[type]?.color || '#607d8b'))
    .unknown('#607d8b');

  const mapPaddingX = Math.max(110, width * 0.1);
  const mapPaddingY = Math.max(80, height * 0.12);

  const traditionOrder = (state.traditionOrder && state.traditionOrder.length)
    ? state.traditionOrder
    : ['Unassigned'];
  const eraOrder = (state.eraOrder && state.eraOrder.length)
    ? state.eraOrder
    : ['Unspecified'];

  let xScale;
  if (traditionOrder.length > 1) {
    xScale = d3.scalePoint()
      .domain(traditionOrder)
      .range([mapPaddingX * 0.6, width - mapPaddingX * 0.6])
      .padding(0.15);
  } else {
    const centerX = width / 2;
    xScale = () => centerX;
  }

  let yScale;
  if (eraOrder.length > 1) {
    yScale = d3.scalePoint()
      .domain(eraOrder)
      .range([mapPaddingY, height - mapPaddingY])
      .padding(0.55);
  } else {
    const centerY = height / 2;
    yScale = () => centerY;
  }

  const resolveTradition = (node) => {
    const traditions = Array.isArray(node.tradition) && node.tradition.length ? node.tradition : [];
    const firstMatch = traditions.find((value) => traditionOrder.includes(value));
    return firstMatch || traditionOrder[0];
  };

  const resolveEra = (node) => {
    return eraOrder.includes(node.era) ? node.era : eraOrder[0];
  };

  const cellMap = new Map();
  nodesCopy.forEach((node) => {
    node._resolvedTradition = resolveTradition(node);
    node._resolvedEra = resolveEra(node);
    const key = `${node._resolvedTradition}|${node._resolvedEra}`;
    if (!cellMap.has(key)) {
      cellMap.set(key, []);
    }
    cellMap.get(key).push(node);
  });

  cellMap.forEach((list) => {
    const offsets = computeRadialOffsets(list.length, NODE_CLUSTER_SPACING);
    list.forEach((node, index) => {
      const offset = offsets[index];
      node._cellOffsetX = offset.x;
      node._cellOffsetY = offset.y;
    });
  });

  const getTargetX = (node) => xScale(node._resolvedTradition) + (node._cellOffsetX || 0);

  const getTargetY = (node) => yScale(node._resolvedEra) + (node._cellOffsetY || 0);

  const background = root.append('g').attr('class', 'map-strata');

  const rowGroup = background.append('g').attr('class', 'map-rows');
  rowGroup.selectAll('line')
    .data(eraOrder)
    .enter()
    .append('line')
    .attr('class', 'map-row-line')
    .attr('x1', mapPaddingX * 0.6)
    .attr('x2', width - mapPaddingX * 0.6)
    .attr('y1', (d) => yScale(d))
    .attr('y2', (d) => yScale(d));

  rowGroup.selectAll('text')
    .data(eraOrder)
    .enter()
    .append('text')
    .attr('class', 'map-row-label')
    .attr('x', () => Math.max(60, mapPaddingX * 0.35))
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'end')
    .attr('y', (d, i) => {
      const current = yScale(d);
      const nextEra = eraOrder[i + 1];
      if (!nextEra) {
        return current - 10;
      }
      const nextY = yScale(nextEra);
      return current + (nextY - current) / 2;
    })
    .attr('dominant-baseline', 'middle')
    .text((d) => formatEraLabel(d));

  const columnGroup = background.append('g').attr('class', 'map-columns');
  columnGroup.selectAll('line')
    .data(traditionOrder)
    .enter()
    .append('line')
    .attr('class', 'map-column-line')
    .attr('y1', mapPaddingY * 0.6)
    .attr('y2', height - mapPaddingY * 0.6)
    .attr('x1', (d) => xScale(d))
    .attr('x2', (d) => xScale(d));

  columnGroup.selectAll('text')
    .data(traditionOrder)
    .enter()
    .append('text')
    .attr('class', 'map-column-label')
    .attr('transform', (d) => {
      const x = xScale(d);
      const y = mapPaddingY * 0.4;
      return `translate(${x}, ${y}) rotate(-35)`;
    })
    .text((d) => titleCase(d.replace(/[-_]/g, ' ')));

  nodesCopy.forEach((node) => {
    const targetX = getTargetX(node);
    const targetY = getTargetY(node);
    node.x = targetX;
    node.y = targetY;
    node._targetX = targetX;
    node._targetY = targetY;
    node._labelLayout = computeLabelLayout(state, node);
  });

  const simulation = d3.forceSimulation(nodesCopy)
    .force('link', d3.forceLink(linksCopy).id((d) => d.id).distance(120).strength(0.22))
    .force('charge', d3.forceManyBody().strength(-160))
    .force('x', d3.forceX((d) => getTargetX(d)).strength(0.24))
    .force('y', d3.forceY((d) => getTargetY(d)).strength(0.28))
    .force('collision', d3.forceCollide().radius(32));

  const edge = root.append('g')
    .attr('class', 'mind-links')
    .selectAll('line')
    .data(linksCopy)
    .enter()
    .append('line')
    .attr('stroke', 'var(--color-line, rgba(255,255,255,0.18))')
    .attr('stroke-width', (d) => getStrokeWidthByWeight(d.weight || 1))
    .attr('stroke-opacity', (d) => getStrokeOpacityByWeight(d.weight || 1));

  const labelGroup = root.append('g').attr('class', 'mind-labels');

  const labels = labelGroup.selectAll('g')
    .data(nodesCopy)
    .enter()
    .append('g')
    .attr('class', 'mind-label');

  labels.append('line')
    .attr('class', 'mind-label-line');

  labels.append('text')
    .attr('class', 'mind-label-text')
    .text((d) => d.label);

  const labelLines = labels.select('.mind-label-line');
  const labelTexts = labels.select('.mind-label-text');

  const rowLabels = rowGroup.selectAll('text');
  const columnLabels = columnGroup.selectAll('text');

  labels.attr('transform', (d) => `translate(${d.x},${d.y})`);
  labelLines
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', (d) => d._labelLayout.lineX)
    .attr('y2', (d) => d._labelLayout.lineY);
  labelTexts
    .attr('x', (d) => d._labelLayout.textX)
    .attr('y', (d) => d._labelLayout.textY)
    .attr('text-anchor', (d) => d._labelLayout.anchor);

  const baseLabelFont = 0.6;
  const baseRowFont = 0.85;
  const baseColumnFont = 0.75;

  updateZoomEffects = (transform) => {
    const scale = transform.k || 1;
    const inv = 1 / scale;
    const clamped = Math.max(0.55, Math.min(1.3, inv));
    labelTexts.style('font-size', `${(baseLabelFont * clamped).toFixed(3)}rem`);
    rowLabels.style('font-size', `${(baseRowFont * clamped).toFixed(3)}rem`);
    columnLabels.style('font-size', `${(baseColumnFont * clamped).toFixed(3)}rem`);
  };

  const contentWidth = Math.max(240, width - mapPaddingX * 2);
  const contentHeight = Math.max(240, height - mapPaddingY * 2);
  const scaleX = width / (contentWidth + mapPaddingX * 1.2);
  const scaleY = height / (contentHeight + mapPaddingY * 1.2);
  const initialScale = Math.max(0.55, Math.min(0.7, Math.min(scaleX, scaleY)));

  const firstEra = eraOrder.length ? yScale(eraOrder[0]) : height / 2;
  const lastEra = eraOrder.length ? yScale(eraOrder[eraOrder.length - 1]) : height / 2;
  const contentCenterY = (firstEra + lastEra) / 2;
  const translateY = ((height / 2) - contentCenterY) + mapPaddingY * 0.2;
  const translateX = mapPaddingX * 0.85;

  const initialTransform = d3.zoomIdentity.translate(translateX, translateY).scale(initialScale);
  updateZoomEffects(initialTransform);
  svg.call(zoom.transform, initialTransform);
  state.currentZoom = initialTransform;

  const node = root.append('g')
    .attr('class', 'mind-nodes')
    .selectAll('g')
    .data(nodesCopy)
    .enter()
    .append('g')
    .attr('class', (d) => {
      const base = 'mind-node';
      return state.focusedNodeId === d.id ? `${base} focused` : base;
    })
    .attr('data-node-type', (d) => d._typeKey || '')
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('aria-label', (d) => {
      const meta = getTypeMeta(d.type);
      return meta ? `${d.label}, ${meta.label}` : d.label;
    })
    .on('click', (event, d) => {
      event.stopPropagation();
      state.focusedNodeId = state.focusedNodeId === d.id ? null : d.id;
      updateFocusStyles(node, state.focusedNodeId, updateLinkHighlight, state);
      updateFeedback(state, nodes.length, links.length);
      if (state.focusedNodeId) {
        renderNodeDetail(state, d);
      } else {
        renderDefaultDetail(state);
      }
      hideTooltip(tooltip);
    })
    .on('mouseenter', (_, d) => showTooltip(tooltip, d))
    .on('mousemove', (event) => positionTooltip(tooltip, event, container))
    .on('mouseleave', () => hideTooltip(tooltip));

  node.append('circle')
    .attr('r', (d) => getNodeRadius(d, state.focusedNodeId === d.id))
    .attr('class', 'mind-node-circle')
    .attr('fill', (d) => colorScale(d._typeKey || normalizeTypeValue(d.type)));

  node.append('text')
    .attr('class', 'mind-node-icon')
    .attr('text-anchor', 'middle')
    .attr('y', (d) => getIconOffset(d, state.focusedNodeId === d.id))
    .attr('dominant-baseline', 'middle')
    .style('font-size', (d) => getIconFontSize(d))
    .text((d) => getIconForType(d.type));

  simulation.on('tick', () => {
    nodesCopy.forEach((d) => {
      const targetX = getTargetX(d);
      const targetY = getTargetY(d);
      d.x = d.x * 0.3 + targetX * 0.7;
      d.y = d.y * 0.3 + targetY * 0.7;
      d._targetX = targetX;
      d._targetY = targetY;
      d.x = Math.max(60, Math.min(width - 60, d.x));
      d.y = Math.max(60, Math.min(height - 60, d.y));
      d._labelLayout = computeLabelLayout(state, d, width, height);
    });

    edge
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

    node.attr('transform', (d) => `translate(${d.x},${d.y})`);

    labels.attr('transform', (d) => `translate(${d.x},${d.y})`);

    labelLines
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', (d) => d._labelLayout.lineX)
      .attr('y2', (d) => d._labelLayout.lineY);

    labelTexts
      .attr('x', (d) => d._labelLayout.textX)
      .attr('y', (d) => d._labelLayout.textY)
      .attr('text-anchor', (d) => d._labelLayout.anchor);

    updateDetailOverlayPosition(state);
  });

  state.container.appendChild(svg.node());
  state.svg = svg;
  state.zoom = zoom;
  state.zoomTarget = d3.select(state.container).select('svg');
  state.labelSelection = labels;
  state.labelLineSelection = labelLines;
  state.labelTextSelection = labelTexts;
  state.mapRowLabels = rowLabels;
  state.mapColumnLabels = columnLabels;
  state.updateZoomEffects = updateZoomEffects;
  state.nodeSelection = node;
  updateDetailOverlayPosition(state);

  function updateLinkHighlight(focusedId) {
    if (!focusedId) {
      node.classed('dimmed', false);
      edge.classed('dimmed', false).classed('highlighted', false);
      return;
    }

    const connected = new Set([focusedId]);
    edge.classed('highlighted', (link) => {
      const isConnected =
        link.source.id === focusedId || link.target.id === focusedId;
      if (isConnected) {
        connected.add(link.source.id);
        connected.add(link.target.id);
      }
      return isConnected;
    }).classed('dimmed', (link) => {
      return link.source.id !== focusedId && link.target.id !== focusedId;
    });

    node.classed('dimmed', (d) => !connected.has(d.id));
  }

  state.updateHighlight = updateLinkHighlight;
  updateLinkHighlight(state.focusedNodeId);
}

function updateFocusStyles(nodeSelection, focusedId, highlightFn, state) {
  nodeSelection
    .classed('focused', (d) => d.id === focusedId)
    .select('circle')
    .attr('r', (d) => getNodeRadius(d, focusedId === d.id));

  nodeSelection.select('.mind-node-icon')
    .attr('y', (d) => getIconOffset(d, focusedId === d.id))
    .style('font-size', (d) => getIconFontSize(d));

  if (typeof highlightFn === 'function') {
    highlightFn(focusedId);
  }

  if (state && state.labelSelection) {
    state.labelSelection.classed('focused', (d) => d.id === focusedId);
  }
}

function updateFeedback(state, nodeCount, linkCount) {
  const feedback = document.getElementById('mind-filter-feedback');
  if (!feedback) return;

  const parts = [`${nodeCount} ${nodeCount === 1 ? 'node' : 'nodes'}`, `${linkCount} ${linkCount === 1 ? 'relation' : 'relations'}`];
  if (state.focusedNodeId && state.rawData) {
    const focused = state.rawData.nodes.find((node) => node.id === state.focusedNodeId);
    if (focused) {
      parts.push(`Focused: ${focused.label}`);
    }
  }
  feedback.textContent = parts.join(' • ');
}

function renderDefaultDetail(state) {
  if (state.detailContainer) {
    state.detailContainer.innerHTML = getDefaultDetailMarkup(state);
  }
  hideDetailOverlay(state);
}

function renderNodeDetail(state, nodeData) {
  if (!nodeData) return;

  const detailText = nodeData.detail || nodeData.summary || 'No additional detail available for this node.';
  const metaBadges = [];

  const typeMeta = getTypeMeta(nodeData.type);
  if (typeMeta) {
    metaBadges.push(typeMeta);
  }

  if (nodeData.era) {
    metaBadges.push(getEraMeta(nodeData.era));
  }

  if (Array.isArray(nodeData.tradition) && nodeData.tradition.length) {
    metaBadges.push({ icon: 'fa-layer-group', label: nodeData.tradition.map((value) => getTraditionMeta(value).label).join(', ') });
  }

  if (Array.isArray(nodeData.topics) && nodeData.topics.length) {
    metaBadges.push({ icon: 'fa-tags', label: nodeData.topics.map((value) => getTopicMeta(value).label).join(', ') });
  }

  const worksMarkup = Array.isArray(nodeData.majorWorks) && nodeData.majorWorks.length
    ? `<p><strong>Key works:</strong> ${nodeData.majorWorks.join('; ')}</p>`
    : '';

  const noteMarkup = nodeData.notes
    ? `<p class="mind-detail-note"><strong>Research note:</strong> ${nodeData.notes}</p>`
    : '';

  const debatesMarkup = Array.isArray(nodeData.debates) && nodeData.debates.length
    ? `<div class="mind-detail-debates"><strong>Scholarly debates:</strong><ul>${nodeData.debates.map((entry) => `<li>${entry}</li>`).join('')}</ul></div>`
    : '';

  const sourcesMarkup = Array.isArray(nodeData.sources) && nodeData.sources.length
    ? `<div class="mind-detail-sources"><strong>Key sources:</strong><ul>${nodeData.sources.map((entry) => formatCitation(entry)).join('')}</ul></div>`
    : '';

  const metaMarkup = metaBadges.length
    ? `<div class="mind-detail-meta">${metaBadges.map((meta) => `<span><i class="fa-solid ${meta.icon}"></i>${meta.label}</span>`).join('')}</div>`
    : '';

  const contentMarkup = `
    <h5>${nodeData.label}</h5>
    <p>${detailText}</p>
    ${worksMarkup}
    ${noteMarkup}
    ${debatesMarkup}
    ${sourcesMarkup}
    ${metaMarkup}
  `;

  if (state.detailContainer) {
    state.detailContainer.innerHTML = contentMarkup;
  }

  showDetailOverlay(state, nodeData, contentMarkup);
}

function getDefaultDetailMarkup(state) {
  const rawData = state?.rawData;
  const metadata = rawData?.metadata || null;

  const nodeCount = Array.isArray(rawData?.nodes) ? rawData.nodes.length : 0;
  const linkCount = Array.isArray(rawData?.links) ? rawData.links.length : 0;

  const traditionSet = new Set();
  const topicSet = new Set();
  if (Array.isArray(rawData?.nodes)) {
    rawData.nodes.forEach((node) => {
      if (Array.isArray(node.tradition)) {
        node.tradition.forEach((value) => traditionSet.add(value));
      }
      if (Array.isArray(node.topics)) {
        node.topics.forEach((value) => topicSet.add(value));
      }
    });
  }

  const traditionBadges = Array.from(traditionSet)
    .sort()
    .map((value) => {
      const meta = getTraditionMeta(value);
      return `<span class="mind-detail-badge"><i class="fa-solid ${meta.icon}"></i>${meta.label}</span>`;
    })
    .join('');

  const topTopics = Array.from(topicSet).sort().slice(0, 8);
  const topicBadges = topTopics
    .map((value) => {
      const meta = getTopicMeta(value);
      return `<span class="mind-detail-badge subtle"><i class="fa-solid ${meta.icon}"></i>${meta.label}</span>`;
    })
    .join('');

  const methodologyMarkup = Array.isArray(metadata?.methodology) && metadata.methodology.length
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-flask-vial"></i> Methodology</h6>
        <ul class="mind-detail-list">
          ${metadata.methodology.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const citationMarkup = Array.isArray(metadata?.citationGuidelines) && metadata.citationGuidelines.length
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-book-open"></i> Citation</h6>
        <ul class="mind-detail-list">
          ${metadata.citationGuidelines.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const biasMarkup = metadata?.biasNotice
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-compass-drafting"></i> Bias Notice</h6>
        <p class="mind-detail-note">${metadata.biasNotice}</p>
      </div>`
    : '';

  const scopeMarkup = metadata?.scopeNotes
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-map"></i> Scope</h6>
        <p>${metadata.scopeNotes}</p>
      </div>`
    : '';

  const traditionMarkup = traditionBadges
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-layer-group"></i> Traditions Represented</h6>
        <div class="mind-detail-badges">${traditionBadges}</div>
      </div>`
    : '';

  const topicMarkup = topicBadges
    ? `<div class="mind-detail-section">
        <h6><i class="fa-solid fa-tags"></i> Key Topics (sample)</h6>
        <div class="mind-detail-badges">${topicBadges}</div>
      </div>`
    : '';

  const updateMarkup = metadata?.lastUpdated
    ? `<span class="mind-detail-metric"><i class="fa-solid fa-clock-rotate-left"></i>Updated ${metadata.lastUpdated}</span>`
    : '';

  return `
    <div class="mind-detail-default">
      <h5>${metadata?.title || 'Philosophy of Mind Atlas'}</h5>
      <div class="mind-detail-metrics">
        <span class="mind-detail-metric"><i class="fa-solid fa-shapes"></i>${nodeCount} nodes</span>
        <span class="mind-detail-metric"><i class="fa-solid fa-diagram-project"></i>${linkCount} relations</span>
        <span class="mind-detail-metric"><i class="fa-solid fa-landmark"></i>${traditionSet.size} traditions</span>
        ${updateMarkup}
      </div>
      <p class="mind-detail-lede">L’atlante mette in relazione pensatori, teorie e concetti sulla mente da tradizioni globali. Seleziona un nodo per accedere a note, riferimenti e dibattiti o esplora i filtri per combinare epoche, scuole e temi.</p>
      ${scopeMarkup}
      ${biasMarkup}
      ${traditionMarkup}
      ${topicMarkup}
      ${methodologyMarkup}
      ${citationMarkup}
      <p class="mind-detail-footer">Suggerimenti o integrazioni? Consulta le linee guida sopra e contatta il team editoriale con le tue proposte.</p>
    </div>
  `;
}

function showTooltip(tooltip, node) {
  if (!tooltip) return;
  const eraLabel = node.era ? titleCase(node.era.replace(/[-_]/g, ' ')) : 'Era n/a';
  const traditionLabel = Array.isArray(node.tradition) && node.tradition.length
    ? formatList(node.tradition)
    : null;
  const topicsLabel = Array.isArray(node.topics) && node.topics.length
    ? formatList(node.topics)
    : null;
  const worksLabel = Array.isArray(node.majorWorks) && node.majorWorks.length
    ? node.majorWorks.join('; ')
    : null;

  tooltip.innerHTML = `
    <strong>${node.label}</strong>
    <span class="tooltip-meta">${titleCase(node.type)} • ${eraLabel}</span>
    ${traditionLabel ? `<span class="tooltip-meta"><strong>Traditions:</strong> ${traditionLabel}</span>` : ''}
    ${topicsLabel ? `<span class="tooltip-meta"><strong>Topics:</strong> ${topicsLabel}</span>` : ''}
    ${worksLabel ? `<span class="tooltip-meta"><strong>Key Works:</strong> ${worksLabel}</span>` : ''}
    <p>${node.summary || 'No summary available.'}</p>
  `;
  tooltip.classList.remove('hidden');
}

function positionTooltip(tooltip, event, container) {
  const bounds = container.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth || 220;
  const tooltipHeight = tooltip.offsetHeight || 140;
  const padding = 16;

  let left = event.clientX - bounds.left + padding;
  let top = event.clientY - bounds.top + padding;

  if (left + tooltipWidth > bounds.width) {
    left = bounds.width - tooltipWidth - padding;
  }
  if (top + tooltipHeight > bounds.height) {
    top = bounds.height - tooltipHeight - padding;
  }

  tooltip.style.transform = `translate(${left}px, ${top}px)`;
}

function hideTooltip(tooltip) {
  if (!tooltip) return;
  tooltip.classList.add('hidden');
}

function showDetailOverlay(state, nodeData, contentMarkup) {
  if (!state || !state.detailOverlay) return;
  state.focusedNodeData = nodeData;
  const overlay = state.detailOverlay;
  overlay.innerHTML = `
    <div class="mind-detail-card mind-detail-panel">
      <button type="button" class="mind-detail-close" aria-label="Close node detail">
        <i class="fa-solid fa-xmark"></i>
      </button>
      ${contentMarkup}
    </div>
  `;
  overlay.classList.remove('mind-detail-overlay--below');
  overlay.classList.remove('hidden');
  overlay.dataset.nodeId = nodeData.id;

  const closeButton = overlay.querySelector('.mind-detail-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      state.focusedNodeId = null;
      hideDetailOverlay(state);
      renderDefaultDetail(state);
      if (state.nodeSelection) {
        updateFocusStyles(state.nodeSelection, null, state.updateHighlight, state);
      }
      updateFeedback(state, state.lastNodeCount || 0, state.lastLinkCount || 0);
    }, { once: true });
  }

  requestAnimationFrame(() => {
    updateDetailOverlayPosition(state);
  });
}

function hideDetailOverlay(state) {
  if (!state || !state.detailOverlay) return;
  state.detailOverlay.classList.add('hidden');
  state.detailOverlay.classList.remove('mind-detail-overlay--below');
  state.detailOverlay.removeAttribute('data-node-id');
  state.focusedNodeData = null;
}

function updateDetailOverlayPosition(state) {
  if (!state || !state.detailOverlay || state.detailOverlay.classList.contains('hidden')) {
    return;
  }

  if (!state.focusedNodeId) {
    hideDetailOverlay(state);
    return;
  }

  const svgSelection = state.svg;
  if (!svgSelection) return;
  const svgNode = svgSelection.node();
  if (!svgNode) return;

  const nodes = Array.isArray(state.currentNodes) ? state.currentNodes : [];
  let activeNode = nodes.find((entry) => entry.id === state.focusedNodeId);

  if (!activeNode && state.focusedNodeData) {
    activeNode = {
      ...state.focusedNodeData,
      x: state.focusedNodeData._targetX || state.focusedNodeData.x || ((state.graphWidth || 0) / 2),
      y: state.focusedNodeData._targetY || state.focusedNodeData.y || ((state.graphHeight || 0) / 2),
      _targetX: state.focusedNodeData._targetX || state.focusedNodeData.x || ((state.graphWidth || 0) / 2),
      _targetY: state.focusedNodeData._targetY || state.focusedNodeData.y || ((state.graphHeight || 0) / 2)
    };
  }

  if (!activeNode) {
    hideDetailOverlay(state);
    return;
  }

  const containerRect = state.container.getBoundingClientRect();
  const svgRect = svgNode.getBoundingClientRect();

  const viewBox = svgNode.viewBox && svgNode.viewBox.baseVal
    ? svgNode.viewBox.baseVal
    : { width: state.graphWidth || svgRect.width, height: state.graphHeight || svgRect.height };

  const transform = state.currentZoom || d3.zoomIdentity;
  const [graphX, graphY] = transform.apply([activeNode.x, activeNode.y]);

  const scaleX = svgRect.width / (viewBox.width || 1);
  const scaleY = svgRect.height / (viewBox.height || 1);

  const nodeX = (svgRect.left - containerRect.left) + graphX * scaleX;
  const nodeY = (svgRect.top - containerRect.top) + graphY * scaleY;

  const overlay = state.detailOverlay;
  overlay.style.left = `${nodeX}px`;
  overlay.style.top = `${nodeY}px`;

  const card = overlay.firstElementChild;
  if (!card) {
    return;
  }

  const cardRect = card.getBoundingClientRect();
  const topSpace = nodeY - cardRect.height - 32;
  if (topSpace < 0) {
    overlay.classList.add('mind-detail-overlay--below');
  } else {
    overlay.classList.remove('mind-detail-overlay--below');
  }

  const padding = 16;
  const containerWidth = containerRect.width;
  const cardWidth = cardRect.width;
  let adjustedLeft = nodeX;

  if (nodeX - cardWidth / 2 < padding) {
    adjustedLeft = padding + cardWidth / 2;
  } else if (nodeX + cardWidth / 2 > containerWidth - padding) {
    adjustedLeft = containerWidth - padding - cardWidth / 2;
  }

  overlay.style.left = `${adjustedLeft}px`;
}

function setupResizeObserver(state) {
  if (typeof ResizeObserver === 'undefined') {
    window.addEventListener('resize', () => applyMindGraphFilters(state));
    return;
  }

  state.resizeObserver = new ResizeObserver(() => {
    applyMindGraphFilters(state);
  });

  state.resizeObserver.observe(state.container);
}

function bindZoomReset(state) {
  const resetButton = document.getElementById('mind-zoom-reset');
  if (!resetButton) return;

  resetButton.addEventListener('click', () => {
    if (state.zoomTarget && state.zoom) {
      state.zoomTarget.transition().duration(400).call(state.zoom.transform, d3.zoomIdentity);
    }
  });
}

function renderErrorState(container, message) {
  container.classList.add('mind-error');
  container.innerHTML = `
    <div class="mind-error-message">
      <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
      <p>${message}</p>
    </div>
  `;
}

function debounce(func, wait = 200) {
  let timeout;
  return function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function titleCase(value) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatList(values) {
  return values
    .map((value) => titleCase(value.replace(/[-_]/g, ' ')))
    .join(', ');
}

function formatCitation(entry) {
  if (!entry) {
    return '<li>Unspecified source</li>';
  }

  if (typeof entry === 'string') {
    return `<li>${entry}</li>`;
  }

  if (typeof entry !== 'object') {
    return `<li>${String(entry)}</li>`;
  }

  const parts = [];
  if (entry.author) {
    parts.push(entry.author);
  }
  if (entry.year) {
    parts.push(`(${entry.year})`);
  }
  if (entry.title) {
    parts.push(`<em>${entry.title}</em>`);
  }
  if (entry.publication) {
    parts.push(entry.publication);
  }
  if (entry.publisher) {
    parts.push(entry.publisher);
  }

  const citationText = parts.filter(Boolean).join(' ');
  if (entry.url) {
    const label = citationText || entry.url;
    return `<li><a href="${entry.url}" target="_blank" rel="noopener">${label}</a></li>`;
  }

  return `<li>${citationText || 'Unnamed source'}</li>`;
}

function getNodeRadius(nodeData, isActive) {
  const typeKey = nodeData?._typeKey || normalizeTypeValue(nodeData?.type);
  const meta = ACTIVE_TYPE_META[typeKey] || DEFAULT_TYPE_META[typeKey];
  const fallbackBase = typeKey === 'philosopher' ? 10 : 14;
  const baseRadius = Number(meta?.baseRadius ?? fallbackBase);
  const activeRadius = Number(meta?.activeRadius ?? (baseRadius + 4));
  return isActive ? activeRadius : baseRadius;
}

function getIconForType(type) {
  const typeKey = normalizeTypeValue(type);
  const meta = ACTIVE_TYPE_META[typeKey] || DEFAULT_TYPE_META[typeKey];
  return meta?.icon || '\uf128';
}

function getIconFontSize(nodeData) {
  const typeKey = nodeData?._typeKey || normalizeTypeValue(nodeData?.type);
  const meta = ACTIVE_TYPE_META[typeKey] || DEFAULT_TYPE_META[typeKey];
  if (meta?.iconFontSize) {
    return meta.iconFontSize;
  }
  return typeKey === 'philosopher' ? '0.58rem' : '0.68rem';
}

function getIconOffset(nodeData, isActive) {
  return 0;
}

function getRelationCategory(relationLabel) {
  const label = relationLabel.toLowerCase();
  if (label.match(/introduce|coin|propos|anticipate|ground|define|frames|systematize|co-develops|revives/)) {
    return 'foundational';
  }
  if (label.match(/develop|extends|supports|reinterprets|clarifies|bridges|inspires|advances|aligns|intensifies/)) {
    return 'development';
  }
  if (label.match(/critique|challenge|question|reframes|addresses|radicalizes/)) {
    return 'critique';
  }
  return 'influence';
}

function getRelationWeight(relationLabel) {
  const category = getRelationCategory(relationLabel);
  switch (category) {
    case 'foundational':
      return 3;
    case 'development':
      return 2;
    case 'critique':
      return 2;
    default:
      return 1;
  }
}

function getStrokeWidthByWeight(weight) {
  switch (weight) {
    case 3:
      return 3.2;
    case 2:
      return 2.4;
    default:
      return 1.5;
  }
}

function getStrokeOpacityByWeight(weight) {
  switch (weight) {
    case 3:
      return 0.85;
    case 2:
      return 0.6;
    default:
      return 0.35;
  }
}

function getRelationIconClass(category) {
  const normalized = category.toLowerCase();
  switch (normalized) {
    case 'foundational':
      return 'fa-star';
    case 'development':
      return 'fa-code-branch';
    case 'critique':
      return 'fa-gavel';
    default:
      return 'fa-share-nodes';
  }
}

function setupTypeIconSelect(state) {
  const container = document.querySelector('.icon-select[data-filter="type"]');
  if (!container) return;
  initializeIconSelect(container, (value) => {
    const normalizedValue = value === 'all' ? 'all' : normalizeTypeValue(value);
    state.filters.type = normalizedValue;
    applyMindGraphFilters(state);
  });
  setIconSelectValue('type', state.filters.type || 'all');
}

function updateTypeChips(value) {
  const chips = document.querySelectorAll('.legend-chip');
  if (!chips.length) return;
  chips.forEach((chip) => {
    const rawValue = chip.dataset.type || 'all';
    const chipValue = rawValue === 'all' ? 'all' : normalizeTypeValue(rawValue);
    chip.classList.toggle('active', chipValue === value);
  });
}

function setupLegendTypeChips(state) {
  const container = document.getElementById('philosophy-of-mind');
  if (!container) return;

  const chips = container.querySelectorAll('.legend-chip');
  if (!chips.length) return;

  const typeMetaMap = ACTIVE_TYPE_META || DEFAULT_TYPE_META;

  chips.forEach((chip) => {
    const rawValue = chip.dataset.type || 'all';
    if (rawValue === 'all') {
      chip.innerHTML = '<i class="fa-solid fa-globe"></i> All';
      chip.style.background = '';
      return;
    }
    const typeKey = normalizeTypeValue(rawValue);
    const meta = typeMetaMap[typeKey];
    const iconClass = meta?.iconClass || 'fa-circle';
    const label = meta?.label || titleCase(typeKey.replace(/[-_]/g, ' '));
    chip.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${label}`;
    if (meta?.color) {
      chip.style.background = meta.color;
    }
    const iconEl = chip.querySelector('i');
    if (iconEl) {
      iconEl.style.color = '#ffffff';
    }
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const rawValue = chip.dataset.type || 'all';
      const chipValue = rawValue === 'all' ? 'all' : normalizeTypeValue(rawValue);
      const nextValue = state.filters.type === chipValue && chipValue !== 'all' ? 'all' : chipValue;
      state.filters.type = nextValue;
      setIconSelectValue('type', nextValue);
      applyMindGraphFilters(state);
    });
  });

  updateTypeChips(state.filters.type || 'all');
}

function setupRelationIconSelect(state) {
  const container = document.querySelector('.icon-select[data-filter="relation"]');
  if (!container) return;
  initializeIconSelect(container, (value) => {
    state.filters.relation = value;
    applyMindGraphFilters(state);
  });
  setIconSelectValue('relation', state.filters.relation || 'all');
}

function setupEraIconSelect(state) {
  const container = document.querySelector('.icon-select[data-filter="era"]');
  if (!container) return;
  initializeIconSelect(container, (value) => {
    state.filters.era = value;
    applyMindGraphFilters(state);
  });
  setIconSelectValue('era', state.filters.era || 'all');
}

function setupTraditionIconSelect(state) {
  const container = document.querySelector('.icon-select[data-filter="tradition"]');
  if (!container) return;
  initializeIconSelect(container, (value) => {
    state.filters.tradition = value;
    applyMindGraphFilters(state);
  });
  setIconSelectValue('tradition', state.filters.tradition || 'all');
}

function setupTopicIconSelect(state) {
  const container = document.querySelector('.icon-select[data-filter="topic"]');
  if (!container) return;
  initializeIconSelect(container, (value) => {
    state.filters.topic = value;
    applyMindGraphFilters(state);
  });
  setIconSelectValue('topic', state.filters.topic || 'all');
}

function formatEraLabel(value) {
  if (value === 'unspecified' || value === 'Unspecified') {
    return 'Unspecified';
  }
  const normalized = normalizeEraValue(value);
  return ERA_LABELS[normalized] || titleCase(value.replace(/[-_]/g, ' '));
}

function initializeIconSelect(container, onChange) {
  if (!container) return;
  if (!container._toggleInitialized) {
    const toggle = container.querySelector('.icon-select-toggle');
    toggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      closeAllIconSelects();
      container.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
      if (!container.contains(event.target)) {
        container.classList.remove('open');
      }
    });

    container._toggleInitialized = true;
  }

  container._onChange = onChange;
  bindIconSelectOptions(container);
}

function bindIconSelectOptions(container) {
  const options = container.querySelectorAll('.icon-select-options li');
  options.forEach((item) => {
    item.onclick = () => {
      container.querySelectorAll('.icon-select-options li').forEach((li) => li.classList.remove('active'));
      item.classList.add('active');
      const label = container.querySelector('.icon-select-label');
      if (label) {
        label.innerHTML = item.innerHTML;
      }
      container.classList.remove('open');
      if (typeof container._onChange === 'function') {
        container._onChange(item.dataset.value);
      }
    };
  });
}

function setIconSelectValue(filterKey, value) {
  if (filterKey === 'type') {
    updateTypeChips(value);
  }
  const container = document.querySelector(`.icon-select[data-filter="${filterKey}"]`);
  if (!container) return;
  const options = container.querySelectorAll('.icon-select-options li');
  let activeOption = null;
  options.forEach((item) => {
    if (item.dataset.value === value) {
      item.classList.add('active');
      activeOption = item;
    } else {
      item.classList.remove('active');
    }
  });
  if (activeOption) {
    const label = container.querySelector('.icon-select-label');
    if (label) {
      label.innerHTML = activeOption.innerHTML;
    }
  }
}

function closeAllIconSelects() {
  document.querySelectorAll('.icon-select').forEach((container) => {
    container.classList.remove('open');
  });
}

function populateIconSelectOptions(state, filterKey, values, formatter) {
  const container = document.querySelector(`.icon-select[data-filter="${filterKey}"]`);
  if (!container) return;
  const list = container.querySelector('.icon-select-options');
  if (!list) return;

  list.innerHTML = '';

  const allItem = document.createElement('li');
  allItem.dataset.value = 'all';
  allItem.innerHTML = `<i class="fa-solid fa-globe"></i> ${getAllLabelForFilter(filterKey)}`;
  list.appendChild(allItem);

  values.forEach((value) => {
    const item = document.createElement('li');
    item.dataset.value = value;
    item.innerHTML = formatter(value);
    list.appendChild(item);
  });

  bindIconSelectOptions(container);
  setIconSelectValue(filterKey, state.filters?.[filterKey] || 'all');
}

function getRelationOptionHTML(value) {
  const iconClass = getRelationIconClass(value);
  return `<i class="fa-solid ${iconClass}"></i> ${titleCase(value.replace(/[-_]/g, ' '))}`;
}

function formatIconOptionHTML(meta) {
  return `<i class="fa-solid ${meta.icon}"></i> ${meta.label}`;
}

function getAllLabelForFilter(filterKey) {
  switch (filterKey) {
    case 'relation':
      return 'All relations';
    case 'era':
      return 'All eras';
    case 'tradition':
      return 'All traditions';
    case 'topic':
      return 'All topics';
    case 'type':
    default:
      return 'All';
  }
}

function getEraMeta(value) {
  if (value === 'all') {
    return { icon: 'fa-globe', label: 'All eras' };
  }

  const normalized = normalizeEraValue(value);
  const label = ERA_LABELS[normalized] || titleCase(value.replace(/[-_]/g, ' '));
  const iconMap = {
    'ancient': 'fa-landmark',
    'classical-antiquity': 'fa-landmark',
    'late-antiquity': 'fa-landmark',
    'medieval': 'fa-chess-rook',
    'early-medieval': 'fa-chess-rook',
    'high-medieval': 'fa-chess-rook',
    'renaissance': 'fa-feather-pointed',
    'early-modern': 'fa-feather-pointed',
    'enlightenment': 'fa-scroll',
    '18th-century': 'fa-scroll',
    'modern': 'fa-compass-drafting',
    'early-19th-century': 'fa-compass-drafting',
    '19th-century': 'fa-compass-drafting',
    'late-19th-century': 'fa-compass-drafting',
    'early-20th-century': 'fa-atom',
    '20th-century': 'fa-atom',
    'mid-20th-century': 'fa-atom',
    'late-20th-century': 'fa-atom',
    '21st-century': 'fa-microchip',
    'contemporary': 'fa-microchip'
  };
  const icon = iconMap[normalized] || 'fa-clock';
  return { icon, label };
}

function getTraditionMeta(value) {
  if (value === 'all') {
    return { icon: 'fa-globe', label: 'All traditions' };
  }

  const map = {
    'classical': { icon: 'fa-landmark-dome', label: 'Classical' },
    'rationalist': { icon: 'fa-scale-balanced', label: 'Rationalist' },
    'empiricist': { icon: 'fa-flask', label: 'Empiricist' },
    'idealist': { icon: 'fa-star-half-stroke', label: 'Idealist' },
    'monist': { icon: 'fa-circle-nodes', label: 'Monist' },
    'transcendental': { icon: 'fa-stairs', label: 'Transcendental' },
    'pragmatist': { icon: 'fa-people-arrows', label: 'Pragmatist' },
    'phenomenology': { icon: 'fa-eye', label: 'Phenomenology' },
    'existential': { icon: 'fa-road', label: 'Existential' },
    'analytic': { icon: 'fa-diagram-project', label: 'Analytic' },
    'naturalist': { icon: 'fa-dna', label: 'Naturalist' },
    'cognitive_science': { icon: 'fa-robot', label: 'Cognitive Science' },
    'islamic': { icon: 'fa-moon', label: 'Islamic' },
    'feminist': { icon: 'fa-venus', label: 'Feminist' },
    'buddhist': { icon: 'fa-om', label: 'Buddhist' },
    'east_asian': { icon: 'fa-yin-yang', label: 'East Asian' },
    'decolonial': { icon: 'fa-globe-africa', label: 'Decolonial' },
    'african': { icon: 'fa-people-group', label: 'African' },
    'latin_american': { icon: 'fa-earth-americas', label: 'Latin American' },
    'afro_diasporic': { icon: 'fa-hand-fist', label: 'Afro-Diasporic' },
    'indigenous': { icon: 'fa-feather', label: 'Indigenous' },
    'south_asian': { icon: 'fa-hands-praying', label: 'South Asian' },
    'oceanic': { icon: 'fa-water', label: 'Oceanic' },
    'neurodiversity': { icon: 'fa-infinity', label: 'Neurodiversity' },
    'proto_scifi': { icon: 'fa-feather', label: 'Proto-SF' },
    'british': { icon: 'fa-crown', label: 'British' },
    'american': { icon: 'fa-flag-usa', label: 'American' },
    'european': { icon: 'fa-earth-europe', label: 'European' },
    'gothic': { icon: 'fa-moon', label: 'Gothic' },
    'golden_age': { icon: 'fa-sun', label: 'Golden Age' },
    'new_wave': { icon: 'fa-water', label: 'New Wave' },
    'cyberpunk': { icon: 'fa-microchip', label: 'Cyberpunk' },
    'television': { icon: 'fa-tv', label: 'Television' },
    'speculative_technology': { icon: 'fa-atom', label: 'Speculative Technology' },
    'social_design': { icon: 'fa-people-roof', label: 'Social Design' },
    'cultural_movement': { icon: 'fa-people-group', label: 'Cultural Movement' },
    'cosmic_sociology': { icon: 'fa-satellite', label: 'Cosmic Sociology' },
    'chinese_scifi': { icon: 'fa-dragon', label: 'Chinese SF' },
    'philosophy': { icon: 'fa-book', label: 'Philosophy' },
    'philosophy_of_science': { icon: 'fa-flask', label: 'Philosophy of Science' },
    'afrofuturism': { icon: 'fa-globe-africa', label: 'Afrofuturism' }
  };
  return map[value] || { icon: 'fa-layer-group', label: titleCase(value.replace(/[-_]/g, ' ')) };
}

function getTopicMeta(value) {
  if (value === 'all') {
    return { icon: 'fa-globe', label: 'All topics' };
  }

  const map = {
    'forms': { icon: 'fa-cubes', label: 'Forms' },
    'dualism': { icon: 'fa-people-arrows-left-right', label: 'Dualism' },
    'soul': { icon: 'fa-heart', label: 'Soul' },
    'hylomorphism': { icon: 'fa-layer-group', label: 'Hylomorphism' },
    'teleology': { icon: 'fa-bullseye', label: 'Teleology' },
    'consciousness': { icon: 'fa-brain', label: 'Consciousness' },
    'subjectivity': { icon: 'fa-user', label: 'Subjectivity' },
    'personal_identity': { icon: 'fa-id-card', label: 'Personal Identity' },
    'immaterialism': { icon: 'fa-feather', label: 'Immaterialism' },
    'perception': { icon: 'fa-eye', label: 'Perception' },
    'phenomenology': { icon: 'fa-hands', label: 'Phenomenology' },
    'intentionality': { icon: 'fa-crosshairs', label: 'Intentionality' },
    'embodiment': { icon: 'fa-person-running', label: 'Embodiment' },
    'behaviorism': { icon: 'fa-shoe-prints', label: 'Behaviorism' },
    'functionalism': { icon: 'fa-gears', label: 'Functionalism' },
    'representation': { icon: 'fa-icons', label: 'Representation' },
    'mental_representation': { icon: 'fa-icons', label: 'Mental Representation' },
    'higher_order': { icon: 'fa-layer-group', label: 'Higher-Order' },
    'eliminativism': { icon: 'fa-trash', label: 'Eliminativism' },
    'predictive_processing': { icon: 'fa-wave-square', label: 'Predictive Processing' },
    'extended_mind': { icon: 'fa-arrows-left-right', label: 'Extended Mind' },
    'panpsychism': { icon: 'fa-star-half-stroke', label: 'Panpsychism' },
    'qualia': { icon: 'fa-palette', label: 'Qualia' },
    'mind_body': { icon: 'fa-scale-balanced', label: 'Mind-Body' },
    'experience': { icon: 'fa-hand-sparkles', label: 'Experience' },
    'neuroscience': { icon: 'fa-dna', label: 'Neuroscience' },
    'self': { icon: 'fa-person', label: 'Self' },
    'selflessness': { icon: 'fa-person-circle-minus', label: 'Selflessness' },
    'emptiness': { icon: 'fa-circle-notch', label: 'Emptiness' },
    'moral_psychology': { icon: 'fa-scale-unbalanced', label: 'Moral Psychology' },
    'gender': { icon: 'fa-venus-mars', label: 'Gender' },
    'existentialism': { icon: 'fa-mask', label: 'Existentialism' },
    'race': { icon: 'fa-flag', label: 'Race' },
    'psychopathology': { icon: 'fa-notes-medical', label: 'Psychopathology' },
    'personhood': { icon: 'fa-user-group', label: 'Personhood' },
    'language': { icon: 'fa-language', label: 'Language' },
    'decoloniality': { icon: 'fa-globe-africa', label: 'Decoloniality' },
    'cosmology': { icon: 'fa-sun', label: 'Cosmology' },
    'history': { icon: 'fa-book', label: 'History' },
    'information': { icon: 'fa-database', label: 'Information' },
    'ai_consciousness': { icon: 'fa-robot', label: 'AI Consciousness' },
    'mind_uploading': { icon: 'fa-cloud-arrow-up', label: 'Mind Uploading' },
    'social_cognition': { icon: 'fa-people-group', label: 'Social Cognition' },
    'enactivism': { icon: 'fa-chess-board', label: 'Enactivism' },
    'sense_making': { icon: 'fa-puzzle-piece', label: 'Sense-Making' },
    'cognition': { icon: 'fa-brain', label: 'Cognition' },
    'methodology': { icon: 'fa-flask-vial', label: 'Methodology' },
    'artificial_intelligence': { icon: 'fa-robot', label: 'Artificial Intelligence' },
    'robotics': { icon: 'fa-gears', label: 'Robotics' },
    'teleportation': { icon: 'fa-bolt', label: 'Teleportation' },
    'time_travel': { icon: 'fa-hourglass-half', label: 'Time Travel' },
    'planetary_exploration': { icon: 'fa-rocket', label: 'Planetary Exploration' },
    'cyberspace': { icon: 'fa-network-wired', label: 'Cyberspace' },
    'biotech': { icon: 'fa-dna', label: 'Biotechnology' },
    'first_contact': { icon: 'fa-handshake', label: 'First Contact' },
    'posthumanism': { icon: 'fa-user-gear', label: 'Posthumanism' },
    'afrofuturism': { icon: 'fa-globe-africa', label: 'Afrofuturism' },
    'dark_forest': { icon: 'fa-tree', label: 'Dark Forest' },
    'alien_consciousness': { icon: 'fa-meteor', label: 'Alien Consciousness' },
    'synthetic_life': { icon: 'fa-heart-pulse', label: 'Synthetic Life' },
    'social_speculation': { icon: 'fa-people-group', label: 'Social Speculation' },
    'adaptation': { icon: 'fa-shuffle', label: 'Adaptation' },
    'adventure': { icon: 'fa-compass', label: 'Adventure' },
    'anthropology': { icon: 'fa-person-rays', label: 'Anthropology' },
    'automation': { icon: 'fa-industry', label: 'Automation' },
    'communication': { icon: 'fa-comments', label: 'Communication' },
    'cosmic_sociology': { icon: 'fa-satellite', label: 'Cosmic Sociology' },
    'creation': { icon: 'fa-seedling', label: 'Creation' },
    'diplomacy': { icon: 'fa-handshake', label: 'Diplomacy' },
    'engineering': { icon: 'fa-gear', label: 'Engineering' },
    'epistemology': { icon: 'fa-lightbulb', label: 'Epistemology' },
    'ethics': { icon: 'fa-scale-balanced', label: 'Ethics' },
    'genealogy': { icon: 'fa-tree', label: 'Genealogy' },
    'geoscience': { icon: 'fa-mountain', label: 'Geoscience' },
    'governance': { icon: 'fa-landmark-flag', label: 'Governance' },
    'grand_scale': { icon: 'fa-chart-line', label: 'Grand Scale' },
    'identity': { icon: 'fa-id-badge', label: 'Identity' },
    'labour': { icon: 'fa-person-digging', label: 'Labour' },
    'media': { icon: 'fa-broadcast-tower', label: 'Media' },
    'media_history': { icon: 'fa-timeline', label: 'Media History' },
    'philosophy_of_science': { icon: 'fa-flask', label: 'Philosophy of Science' },
    'psychology': { icon: 'fa-brain', label: 'Psychology' },
    'risk': { icon: 'fa-triangle-exclamation', label: 'Risk' },
    'space': { icon: 'fa-user-astronaut', label: 'Space' },
    'transport': { icon: 'fa-truck-fast', label: 'Transport' },
    'temporal': { icon: 'fa-clock', label: 'Temporal' },
    'utopia': { icon: 'fa-city', label: 'Utopia' }
  };
  return map[value] || { icon: 'fa-circle', label: titleCase(value.replace(/[-_]/g, ' ')) };
}

function getTypeMeta(type) {
  const typeKey = normalizeTypeValue(type);
  const meta = ACTIVE_TYPE_META[typeKey] || DEFAULT_TYPE_META[typeKey];
  if (!meta) return null;
  return {
    icon: meta.iconClass || 'fa-circle',
    label: meta.label || titleCase(typeKey.replace(/[-_]/g, ' '))
  };
}

function computeLabelLayout(state, node) {
  const isFocused = state && state.focusedNodeId === node.id;
  const radius = getNodeRadius(node, isFocused);
  const connectorOffset = radius + DEFAULT_LABEL_SETTINGS.connectorPadding;
  const horizontalOffset = radius + DEFAULT_LABEL_SETTINGS.labelPadding;

  return {
    lineX: connectorOffset,
    lineY: 0,
    textX: horizontalOffset,
    textY: DEFAULT_LABEL_SETTINGS.baselineOffset,
    anchor: 'start'
  };
}

