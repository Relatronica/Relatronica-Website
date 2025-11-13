(function () {
  "use strict";

  const GENRE_PRIORITY = {
    proto_sf: 10,
    exploration_sf: 20,
    time_travel_sf: 30,
    dystopia_sf: 40,
    utopia_sf: 50,
    social_sf: 60,
    philosophical_sf: 70,
    ai_robotics: 80,
    military_sf: 90,
    space_opera: 100,
    hard_sf: 110,
    first_contact_sf: 120,
    cyberpunk: 130,
    afrofuturism: 140,
    biotech: 150,
    weird_sf: 160,
    media_sf: 170
  };

  document.addEventListener("DOMContentLoaded", () => {
    const dataset = window.SCIENCE_FICTION_GRAPH_DATA;
    if (!dataset || !Array.isArray(dataset.nodes) || !Array.isArray(dataset.links)) {
      return;
    }

    const container = document.getElementById("science-fiction-graph");
    if (!container || !window.d3) {
      return;
    }

    initScienceFictionGraph(container, dataset);
  });

  const DEFAULT_LABEL_SETTINGS = {
    connectorPadding: 8,
    labelPadding: 14,
    baselineOffset: -2,
    minConnectorOffset: 20,
    minHorizontalOffset: 30
  };

  const NODE_LAYOUT_SETTINGS = {
    clusterSpacing: 26,
    collisionPadding: 16,
    collisionIterations: 3,
    anchorStrengthX: 0.28,
    anchorStrengthY: 0.32,
    chargeStrength: -320
  };

  const DEFAULT_TYPE_META = {
    philosopher: {
      label: "Author",
      icon: "\uf4fb",
      iconClass: "fa-user-astronaut",
      color: "#8e44ad",
      baseRadius: 6,
      activeRadius: 10,
      iconFontSize: "0.66rem"
    },
    theory: {
      label: "Work",
      icon: "\uf518",
      iconClass: "fa-book-open",
      color: "#2980b9",
      baseRadius: 12,
      activeRadius: 16,
      iconFontSize: "0.66rem"
    },
    concept: {
      label: "Technology / Concept",
      icon: "\uf5d2",
      iconClass: "fa-atom",
      color: "#e67e22",
      baseRadius: 13,
      activeRadius: 17,
      iconFontSize: "0.68rem"
    }
  };

  const GENRE_META = {
    proto_sf: { icon: "fa-feather", label: "Proto-SF" },
    exploration_sf: { icon: "fa-compass", label: "Exploration SF" },
    time_travel_sf: { icon: "fa-hourglass-half", label: "Time Travel" },
    dystopia_sf: { icon: "fa-city", label: "Dystopia" },
    utopia_sf: { icon: "fa-seedling", label: "Utopia" },
    social_sf: { icon: "fa-people-group", label: "Social Speculation" },
    philosophical_sf: { icon: "fa-brain", label: "Philosophical SF" },
    ai_robotics: { icon: "fa-robot", label: "AI & Robotics" },
    military_sf: { icon: "fa-helmet-safety", label: "Military SF" },
    space_opera: { icon: "fa-rocket", label: "Space Opera" },
    hard_sf: { icon: "fa-flask-vial", label: "Hard SF" },
    first_contact_sf: { icon: "fa-satellite-dish", label: "First Contact" },
    cyberpunk: { icon: "fa-microchip", label: "Cyberpunk" },
    afrofuturism: { icon: "fa-globe-africa", label: "Afrofuturism" },
    biotech: { icon: "fa-dna", label: "Biotech" },
    weird_sf: { icon: "fa-mask", label: "Weird / Slipstream" },
    media_sf: { icon: "fa-tv", label: "Film & Media" }
  };

  const FALLBACK_TYPE_COLORS = [
    "#8e44ad",
    "#1abc9c",
    "#e67e22",
    "#16a085",
    "#c0392b",
    "#2980b9",
    "#f39c12",
    "#2c3e50"
  ];

  function initScienceFictionGraph(container, dataset) {
    const typeMeta = buildTypeMeta(dataset);
    const tooltip = document.createElement("div");
    tooltip.className = "mind-tooltip hidden";
    container.appendChild(tooltip);

    const emptyState = document.createElement("div");
    emptyState.className = "mind-empty-state hidden";
    emptyState.textContent = "No nodes match the current filter.";
    container.appendChild(emptyState);

    const detailOverlay = document.createElement("div");
    detailOverlay.className = "mind-detail-overlay hidden";
    container.appendChild(detailOverlay);

    const state = {
      container,
      dataset,
      typeMeta,
      tooltip,
      emptyState,
      detailOverlay,
      focusedNodeId: null,
      currentZoom: d3.zoomIdentity,
      zoom: null,
      svg: null,
      nodeSelection: null,
      linkSelection: null,
      labelSelection: null,
      labelLineSelection: null,
      labelTextSelection: null,
      updateZoomEffects: () => {},
      filters: { type: "all" },
      genreOrder: buildGenreOrder(dataset.nodes),
      eraOrder: buildEraOrder(dataset.nodes)
    };

    initLegendFilters(state);
    renderGraph(state);

    const resetButton = document.getElementById("scifi-zoom-reset");
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        if (state.zoom && state.svg) {
          state.svg.transition().duration(400).call(state.zoom.transform, d3.zoomIdentity);
          state.currentZoom = d3.zoomIdentity;
        }
      });
    }

    if (!state._resizeHandler) {
      state._resizeHandler = debounce(() => renderGraph(state), 300);
      window.addEventListener("resize", state._resizeHandler);
    }
  }

  function buildTypeMeta(dataset) {
    const overrides = dataset?.metadata?.typeMeta || window.SCIENCE_FICTION_TYPE_META || {};
    const nodes = Array.isArray(dataset?.nodes) ? dataset.nodes : [];
    const types = new Set(nodes.map((node) => normalizeTypeValue(node.type)).filter(Boolean));

    Object.keys(overrides).forEach((key) => {
      const normalized = normalizeTypeValue(key);
      if (normalized) types.add(normalized);
    });

    const meta = {};
    let colorIndex = 0;

    Array.from(types).forEach((type) => {
      const base = DEFAULT_TYPE_META[type] || {};
      const override = overrides[type] || {};
      const color = override.color || base.color || FALLBACK_TYPE_COLORS[colorIndex % FALLBACK_TYPE_COLORS.length] || "#607d8b";
      colorIndex += 1;

      meta[type] = {
        label: override.label || base.label || titleCase(type.replace(/[-_]/g, " ")),
        icon: override.icon || base.icon || "\uf128",
        iconClass: override.iconClass || base.iconClass || "fa-circle",
        color,
        baseRadius: Number(override.baseRadius ?? base.baseRadius ?? 12),
        activeRadius: Number(override.activeRadius ?? base.activeRadius ?? 16),
        iconFontSize: override.iconFontSize || base.iconFontSize || "0.62rem"
      };
    });

    return Object.keys(meta).length ? meta : { ...DEFAULT_TYPE_META };
  }

  function renderGraph(state) {
    const { container, dataset, typeMeta, emptyState } = state;
    const sourceNodes = Array.isArray(dataset.nodes) ? dataset.nodes : [];
    const sourceLinks = Array.isArray(dataset.links) ? dataset.links : [];
    const filterType = state.filters?.type || "all";

    const filteredNodes = filterType === "all"
      ? sourceNodes.slice()
      : sourceNodes.filter((node) => normalizeTypeValue(node.type) === filterType);
    const nodeIdSet = new Set(filteredNodes.map((node) => node.id));
    const filteredLinks = sourceLinks.filter((link) => nodeIdSet.has(link.source) && nodeIdSet.has(link.target));

    if (state.focusedNodeId && !nodeIdSet.has(state.focusedNodeId)) {
      state.focusedNodeId = null;
    }

    const width = container.clientWidth || 800;
    const eraOrder = state.eraOrder && state.eraOrder.length ? state.eraOrder : buildEraOrder(sourceNodes);
    const genreOrder = state.genreOrder && state.genreOrder.length ? state.genreOrder : buildGenreOrder(sourceNodes);
    const height = computeHeight(eraOrder.length, container.clientHeight || 600);

    container.style.minHeight = `${height}px`;

    if (!filteredNodes.length) {
      const existingSvg = container.querySelector("svg");
      if (existingSvg) existingSvg.remove();
      if (emptyState) emptyState.classList.remove("hidden");
      hideTooltip(state.tooltip);
      state.detailOverlay.classList.add("hidden");
      state.detailOverlay.innerHTML = "";
      state.nodeSelection = null;
      state.linkSelection = null;
      state.labelSelection = null;
      state.labelLineSelection = null;
      state.labelTextSelection = null;
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("class", "mind-graph-svg")
      .style("width", "100%")
      .style("height", "100%")
      .attr("role", "img")
      .attr("aria-label", "Science fiction relationships graph");

    const root = svg.append("g");

    let updateZoomEffects = () => {};
    const zoom = d3.zoom()
      .scaleExtent([0.6, 3])
      .on("zoom", (event) => {
        root.attr("transform", event.transform);
        updateZoomEffects(event.transform);
        state.currentZoom = event.transform;
        positionDetailOverlay(state);
      });

    svg.call(zoom);
    state.zoom = zoom;
    state.svg = svg;

    const colorScale = d3.scaleOrdinal()
      .domain(Object.keys(typeMeta))
      .range(Object.values(typeMeta).map((meta) => meta.color))
      .unknown("#607d8b");

    const mapPaddingX = Math.max(110, width * 0.1);
    const mapPaddingY = Math.max(80, height * 0.12);

    const xScale = genreOrder.length > 1
      ? d3.scalePoint().domain(genreOrder).range([mapPaddingX * 0.6, width - mapPaddingX * 0.6]).padding(0.15)
      : () => width / 2;

    const yScale = eraOrder.length > 1
      ? d3.scalePoint().domain(eraOrder).range([mapPaddingY, height - mapPaddingY]).padding(0.55)
      : () => height / 2;

    const nodesCopy = filteredNodes.map((node) => ({ ...node }));
    const linksCopy = filteredLinks.map((link) => ({ ...link }));

    const cellMap = new Map();
    nodesCopy.forEach((node) => {
      node._typeKey = normalizeTypeValue(node.type);
      node._resolvedGenre = resolveGenre(node, genreOrder);
      node._resolvedEra = resolveEra(node, eraOrder);
      const key = `${node._resolvedGenre}|${node._resolvedEra}`;
      if (!cellMap.has(key)) cellMap.set(key, []);
      cellMap.get(key).push(node);
    });
    cellMap.forEach((list) => {
      const offsets = computeRadialOffsets(list.length, NODE_LAYOUT_SETTINGS.clusterSpacing);
      list.forEach((node, index) => {
        const offset = offsets[index];
        node._cellOffsetX = offset.x;
        node._cellOffsetY = offset.y;
      });
    });

    const background = root.append("g").attr("class", "map-strata");
    renderBackgroundGrid(background, genreOrder, eraOrder, xScale, yScale, width, height, mapPaddingX, mapPaddingY);

    const linkGroup = root.append("g").attr("class", "mind-links");
    const formattedLinks = linksCopy.map((link) => ({
      ...link,
      weight: getRelationWeight(link.relation),
      category: getRelationCategory(link.relation)
    }));

    const edge = linkGroup.selectAll("line")
      .data(formattedLinks)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => getStrokeWidthByWeight(d.weight))
      .attr("stroke-opacity", (d) => getStrokeOpacityByWeight(d.weight))
      .attr("stroke", "var(--color-line)");

    const nodeGroup = root.append("g").attr("class", "mind-nodes");
    const node = nodeGroup.selectAll("g")
      .data(nodesCopy)
      .enter()
      .append("g")
      .attr("class", "mind-node")
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", (d) => `${d.label}, ${getTypeMeta(typeMeta, d._typeKey).label}`)
      .on("click", (event, d) => {
        event.stopPropagation();
        toggleFocus(state, d.id, node, edge);
        renderNodeDetail(state, d);
      })
      .on("mouseenter", (_, d) => showTooltip(state.tooltip, d))
      .on("mousemove", (event) => positionTooltip(state.tooltip, event, container))
      .on("mouseleave", () => hideTooltip(state.tooltip));

    node.append("circle")
      .attr("r", (d) => getNodeRadius(typeMeta, d, false))
      .attr("class", "mind-node-circle")
      .attr("fill", (d) => colorScale(d._typeKey));

    node.append("text")
      .attr("class", "mind-node-icon")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("font-size", (d) => getIconFontSize(typeMeta, d))
      .text((d) => getIconForType(typeMeta, d._typeKey));

    const labelsGroup = root.append("g").attr("class", "mind-labels");
    const labels = labelsGroup.selectAll("g")
      .data(nodesCopy)
      .enter()
      .append("g")
      .attr("class", "mind-label");

    const labelLines = labels.append("line").attr("class", "mind-label-line");
    const labelTexts = labels.append("text").attr("class", "mind-label-text");

    labelTexts.each(function () {
      const text = d3.select(this);
      text.text("");
      const datum = text.datum();
      const lineArray = wrapLabel(datum.label, 20);
      const lineHeight = 1.1;
      const totalLines = lineArray.length;
      const startDy = -((totalLines - 1) / 2) * lineHeight;
      lineArray.forEach((lineText, index) => {
        text.append("tspan")
          .attr("x", 0)
          .attr("dy", (index === 0 ? startDy : lineHeight) + "em")
          .text(lineText);
      });
    });

    nodesCopy.forEach((node) => {
      const targetX = xScale(node._resolvedGenre) + (node._cellOffsetX || 0);
      const targetY = yScale(node._resolvedEra) + (node._cellOffsetY || 0);
      node.x = targetX;
      node.y = targetY;
      node._targetX = targetX;
      node._targetY = targetY;
    });

    const collisionForce = d3.forceCollide()
      .radius((d) => getNodeRadius(typeMeta, d, false) + NODE_LAYOUT_SETTINGS.collisionPadding)
      .iterations(NODE_LAYOUT_SETTINGS.collisionIterations);

    const anchorForceX = d3.forceX((d) => {
      const target = xScale(d._resolvedGenre) + (d._cellOffsetX || 0);
      d._targetX = target;
      return target;
    }).strength(NODE_LAYOUT_SETTINGS.anchorStrengthX);

    const anchorForceY = d3.forceY((d) => {
      const target = yScale(d._resolvedEra) + (d._cellOffsetY || 0);
      d._targetY = target;
      return target;
    }).strength(NODE_LAYOUT_SETTINGS.anchorStrengthY);

    const simulation = d3.forceSimulation(nodesCopy)
      .force("link", d3.forceLink(formattedLinks).id((d) => d.id).distance(160).strength(0.45))
      .force("charge", d3.forceManyBody().strength(NODE_LAYOUT_SETTINGS.chargeStrength))
      .force("x", anchorForceX)
      .force("y", anchorForceY)
      .force("collision", collisionForce)
      .on("tick", () => {
        nodesCopy.forEach((d) => {
          const targetX = d._targetX ?? (xScale(d._resolvedGenre) + (d._cellOffsetX || 0));
          const targetY = d._targetY ?? (yScale(d._resolvedEra) + (d._cellOffsetY || 0));
          d.x = d.x * 0.35 + targetX * 0.65;
          d.y = d.y * 0.35 + targetY * 0.65;
          d.x = Math.max(60, Math.min(width - 60, d.x));
          d.y = Math.max(60, Math.min(height - 60, d.y));
          d._labelLayout = computeLabelLayout(typeMeta, state.focusedNodeId, d);
        });

        edge
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("transform", (d) => `translate(${d.x},${d.y})`);

        labels.attr("transform", (d) => `translate(${d.x},${d.y})`);
        labelLines
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", (d) => d._labelLayout.lineX)
          .attr("y2", (d) => d._labelLayout.lineY);
        labelTexts
          .attr("x", (d) => d._labelLayout.textX)
          .attr("y", (d) => d._labelLayout.textY)
          .attr("text-anchor", (d) => d._labelLayout.anchor)
          .each(function (d) {
            const layout = d._labelLayout;
            if (!layout) return;
            d3.select(this)
              .selectAll("tspan")
              .attr("x", layout.textX);
          });
      });

    const rowLabels = root.selectAll(".map-row-label");
    const columnLabels = root.selectAll(".map-column-label");
    const baseLabelFont = 0.6;
    const baseRowFont = 0.85;
    const baseColumnFont = 0.75;

    state.updateZoomEffects = (transform) => {
      const scale = transform?.k || 1;
      const inv = 1 / scale;
      const clamped = Math.max(0.55, Math.min(1.3, inv));
      labelTexts
        .style("font-size", `${(baseLabelFont * clamped).toFixed(3)}rem`)
        .style("opacity", 1);
      rowLabels.style("font-size", `${(baseRowFont * clamped).toFixed(3)}rem`);
      columnLabels.style("font-size", `${(baseColumnFont * clamped).toFixed(3)}rem`);
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
    state.updateZoomEffects(initialTransform);
    svg.call(zoom.transform, initialTransform);
    state.currentZoom = initialTransform;

    const existingSvg = container.querySelector("svg");
    if (existingSvg) existingSvg.remove();

    if (state.tooltip && state.tooltip.parentNode === container) {
      container.insertBefore(svg.node(), state.tooltip);
    } else {
      container.insertBefore(svg.node(), container.firstChild);
    }
    state.nodeSelection = node;
    state.linkSelection = edge;
    state.labelSelection = labels;
    state.labelLineSelection = labelLines;
    state.labelTextSelection = labelTexts;
  }

function buildGenreOrder(nodes) {
    const set = new Set();
    nodes.forEach((node) => {
    if (Array.isArray(node.genres) && node.genres.length) {
      node.genres.forEach((value) => set.add(value));
      }
    });
    return Array.from(set).sort((a, b) => {
    const rankA = GENRE_PRIORITY[a] ?? 999;
    const rankB = GENRE_PRIORITY[b] ?? 999;
      if (rankA !== rankB) return rankA - rankB;
      return a.localeCompare(b);
    });
  }

  function buildEraOrder(nodes) {
    const eras = Array.from(new Set(nodes.map((node) => node.era))).filter(Boolean);
    return eras.sort((a, b) => {
      const aScore = getEraIndex(a);
      const bScore = getEraIndex(b);
      return aScore - bScore || a.localeCompare(b);
    });
  }

  function computeHeight(eraCount, rawHeight) {
    const desiredRowSpacing = 220;
    const minDynamicHeight = eraCount > 1 ? ((eraCount - 1) * desiredRowSpacing) + 220 : rawHeight;
    return Math.max(rawHeight, minDynamicHeight) + 40;
  }

function resolveGenre(node, order) {
  const genres = Array.isArray(node.genres) ? node.genres : [];
  const match = genres.find((value) => order.includes(value));
    return match || (order[0] || "Unassigned");
  }

  function resolveEra(node, order) {
    return order.includes(node.era) ? node.era : (order[0] || "Unspecified");
  }

function renderBackgroundGrid(root, genreOrder, eraOrder, xScale, yScale, width, height, mapPaddingX, mapPaddingY) {
    if (eraOrder.length > 1) {
      const rowGroup = root.append("g").attr("class", "map-rows");
      rowGroup.selectAll("line")
        .data(eraOrder)
        .enter()
        .append("line")
        .attr("class", "map-row-line")
        .attr("x1", mapPaddingX * 0.6)
        .attr("x2", width - mapPaddingX * 0.6)
        .attr("y1", (d) => yScale(d))
        .attr("y2", (d) => yScale(d));

      rowGroup.selectAll("text")
        .data(eraOrder)
        .enter()
        .append("text")
        .attr("class", "map-row-label")
        .attr("x", () => Math.max(60, mapPaddingX * 0.35))
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr("y", (d, i) => {
          const current = yScale(d);
          const nextEra = eraOrder[i + 1];
          if (!nextEra) {
            return current - 10;
          }
          const nextY = yScale(nextEra);
          return current + (nextY - current) / 2;
        })
        .text((d) => formatEraLabel(d));
    }

  if (genreOrder.length > 1) {
      const columnGroup = root.append("g").attr("class", "map-columns");
      columnGroup.selectAll("line")
      .data(genreOrder)
        .enter()
        .append("line")
        .attr("class", "map-column-line")
        .attr("y1", mapPaddingY * 0.6)
        .attr("y2", height - mapPaddingY * 0.6)
        .attr("x1", (d) => xScale(d))
        .attr("x2", (d) => xScale(d));

      columnGroup.selectAll("text")
      .data(genreOrder)
        .enter()
        .append("text")
        .attr("class", "map-column-label")
        .attr("transform", (d) => {
          const x = xScale(d);
          const y = mapPaddingY * 0.4;
          return `translate(${x}, ${y}) rotate(-35)`;
        })
      .text((d) => getGenreMeta(d).label);
    }
  }

  function toggleFocus(state, nodeId, nodeSelection, edgeSelection) {
    if (state.focusedNodeId === nodeId) {
      state.focusedNodeId = null;
    } else {
      state.focusedNodeId = nodeId;
    }

    nodeSelection
      .classed("focused", (d) => d.id === state.focusedNodeId)
      .select("circle")
      .attr("r", (d) => getNodeRadius(state.typeMeta, d, d.id === state.focusedNodeId))
      .attr("fill", (d) => state.typeMeta[d._typeKey]?.color || "#607d8b");

    nodeSelection.select(".mind-node-icon")
      .style("font-size", (d) => getIconFontSize(state.typeMeta, d));

    if (!state.focusedNodeId) {
      edgeSelection.classed("highlighted", false).classed("dimmed", false);
      state.labelSelection.classed("focused", false);
      nodeSelection.classed("dimmed", false);
      state.detailOverlay.classList.add("hidden");
      state.detailOverlay.innerHTML = "";
      return;
    }

    const connected = new Set([state.focusedNodeId]);
    edgeSelection
      .classed("highlighted", (link) => {
        const isConnected = link.source.id === state.focusedNodeId || link.target.id === state.focusedNodeId;
        if (isConnected) {
          connected.add(link.source.id);
          connected.add(link.target.id);
        }
        return isConnected;
      })
      .classed("dimmed", (link) => link.source.id !== state.focusedNodeId && link.target.id !== state.focusedNodeId);

    nodeSelection.classed("dimmed", (d) => !connected.has(d.id));
    state.labelSelection.classed("focused", (d) => d.id === state.focusedNodeId);
  }

  function renderNodeDetail(state, nodeData) {
    if (!state.detailOverlay || !nodeData) return;

    const metaBadges = [];
    const typeMeta = getTypeMeta(state.typeMeta, nodeData._typeKey);
    if (typeMeta) {
      metaBadges.push(typeMeta);
    }
    if (Array.isArray(nodeData.tradition) && nodeData.tradition.length) {
      metaBadges.push({
        icon: "fa-layer-group",
        label: nodeData.tradition.map((value) => getTraditionMeta(value).label).join(", ")
      });
    }
    if (Array.isArray(nodeData.genres) && nodeData.genres.length) {
      metaBadges.push({
        icon: getGenreMeta(nodeData.genres[0]).icon,
        label: nodeData.genres.map((value) => getGenreMeta(value).label).join(", ")
      });
    }
    if (Array.isArray(nodeData.topics) && nodeData.topics.length) {
      metaBadges.push({
        icon: "fa-tags",
        label: nodeData.topics.map((value) => getTopicMeta(value).label).join(", ")
      });
    }

    const worksMarkup = Array.isArray(nodeData.majorWorks) && nodeData.majorWorks.length
      ? `<p><strong>Key works:</strong> ${nodeData.majorWorks.join("; ")}</p>`
      : "";
    const noteMarkup = nodeData.notes
      ? `<p class="mind-detail-note"><strong>Research note:</strong> ${nodeData.notes}</p>`
      : "";
    const debatesMarkup = Array.isArray(nodeData.debates) && nodeData.debates.length
      ? `<div class="mind-detail-debates"><strong>Debates:</strong><ul>${nodeData.debates.map((entry) => `<li>${entry}</li>`).join("")}</ul></div>`
      : "";
    const sourcesMarkup = Array.isArray(nodeData.sources) && nodeData.sources.length
      ? `<div class="mind-detail-sources"><strong>Sources:</strong><ul>${nodeData.sources.map((entry) => formatCitation(entry)).join("")}</ul></div>`
      : "";
    const metaMarkup = metaBadges.length
      ? `<div class="mind-detail-meta">${metaBadges.map((meta) => `<span><i class="fa-solid ${meta.iconClass || meta.icon}"></i>${meta.label}</span>`).join("")}</div>`
      : "";

    state.detailOverlay.innerHTML = `
      <div class="mind-detail-card mind-detail-panel">
        <button type="button" class="mind-detail-close" aria-label="Close node detail">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <h5>${nodeData.label}</h5>
        <p>${nodeData.detail || nodeData.summary || "No additional detail available."}</p>
        ${worksMarkup}
        ${noteMarkup}
        ${debatesMarkup}
        ${sourcesMarkup}
        ${metaMarkup}
      </div>
    `;

    state.detailOverlay.classList.remove("hidden");
    const closeButton = state.detailOverlay.querySelector(".mind-detail-close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        state.focusedNodeId = null;
        state.detailOverlay.classList.add("hidden");
        state.detailOverlay.innerHTML = "";
        if (state.nodeSelection) {
          state.nodeSelection.classed("focused", false).classed("dimmed", false);
          state.nodeSelection.select("circle")
            .attr("r", (d) => getNodeRadius(state.typeMeta, d, false))
            .attr("fill", (d) => state.typeMeta[d._typeKey]?.color || "#607d8b");
          state.nodeSelection.select(".mind-node-icon")
            .style("font-size", (d) => getIconFontSize(state.typeMeta, d));
        }
        if (state.linkSelection) {
          state.linkSelection.classed("highlighted", false).classed("dimmed", false);
        }
        if (state.labelSelection) {
          state.labelSelection.classed("focused", false);
        }
      });
    }
    positionDetailOverlay(state);
  }

  function positionDetailOverlay(state) {
    if (!state.detailOverlay || !state.focusedNodeId) return;

    const node = state.nodeSelection?.filter((d) => d.id === state.focusedNodeId);
    if (!node || node.empty()) return;

    const nodeData = node.datum();
    const transform = state.currentZoom || d3.zoomIdentity;

    const point = transform.apply([nodeData.x, nodeData.y]);
    const overlay = state.detailOverlay;
    overlay.style.left = `${point[0]}px`;
    overlay.style.top = `${point[1]}px`;

    if (point[1] < 200) {
      overlay.classList.add("mind-detail-overlay--below");
    } else {
      overlay.classList.remove("mind-detail-overlay--below");
    }
  }

  function showTooltip(tooltip, nodeData) {
    if (!tooltip) return;
    tooltip.innerHTML = `
      <h5>${nodeData.label}</h5>
      <p>${nodeData.summary || "No summary available."}</p>
    `;
    tooltip.classList.remove("hidden");
  }

  function positionTooltip(tooltip, event, container) {
    if (!tooltip) return;
    const bounds = container.getBoundingClientRect();
    const x = event.clientX - bounds.left + 16;
    const y = event.clientY - bounds.top + 16;
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
  }

  function hideTooltip(tooltip) {
    if (!tooltip) return;
    tooltip.classList.add("hidden");
  }

  function computeRadialOffsets(count, spacing = NODE_LAYOUT_SETTINGS.clusterSpacing) {
    if (count <= 1) {
      return [{ x: 0, y: 0 }];
    }
    const effectiveSpacing = Number(spacing) || NODE_LAYOUT_SETTINGS.clusterSpacing;
    const offsets = [{ x: 0, y: 0 }];
    for (let index = 1; index < count; index += 1) {
      const radius = effectiveSpacing * Math.sqrt(index);
      const angle = index * (Math.PI * (3 - Math.sqrt(5)));
      offsets.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    }
    return offsets;
  }

  function wrapLabel(text, maxChars) {
    const words = text.split(" ");
    const lines = [];
    let line = "";

    words.forEach((word, index) => {
      const testLine = line + word + " ";
      if (testLine.length > maxChars && index > 0) {
        lines.push(line.trim());
        line = word + " ";
      } else {
        line = testLine;
      }
    });

    lines.push(line.trim());
    return lines;
  }

  function normalizeTypeValue(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") {
      return value.trim().toLowerCase();
    }
    return String(value || "").trim().toLowerCase();
  }

  function normalizeEraValue(value) {
    if (!value) return "";
    const key = value.toLowerCase();
    return ERA_ALIASES[key] || key;
  }

  function getEraIndex(value) {
    const normalized = normalizeEraValue(value);
    const idx = ERA_SEQUENCE.indexOf(normalized);
    return idx !== -1 ? idx : ERA_SEQUENCE.length + 1;
  }

  function getTypeMeta(typeMeta, typeKey) {
    const meta = typeMeta[typeKey];
    if (!meta) return { icon: "fa-circle", label: titleCase(typeKey || "Unknown"), color: "#607d8b" };
    return {
      icon: meta.icon || "\uf128",
      iconClass: meta.iconClass || "fa-circle",
      label: meta.label || titleCase(typeKey),
      color: meta.color
    };
  }

  function getIconForType(typeMeta, typeKey) {
    return typeMeta[typeKey]?.icon || "\uf128";
  }

  function getIconFontSize(typeMeta, nodeData) {
    const meta = typeMeta[nodeData._typeKey];
    if (meta?.iconFontSize) return meta.iconFontSize;
    return nodeData._typeKey === "philosopher" ? "0.54rem" : "0.62rem";
  }

  function getNodeRadius(typeMeta, nodeData, isActive) {
    const meta = typeMeta[nodeData._typeKey];
    if (!meta) {
      return isActive ? 13 : 9;
    }
    return isActive ? meta.activeRadius : meta.baseRadius;
  }

  function getRelationCategory(relationLabel) {
    if (!relationLabel) return "influence";
    const label = relationLabel.toLowerCase();
    if (label.match(/introduce|coin|propos|anticipate|ground|define|frames|systematize|co-develop|revives|formalise|formalize/)) {
      return "foundational";
    }
    if (label.match(/develop|extend|support|reinterpret|clarify|bridge|inspire|advance|align|intensify|popularise|popularize|reframe|reinterprets/)) {
      return "development";
    }
    if (label.match(/critique|challenge|question|reframe|address|radicalize|ground/)) {
      return "critique";
    }
    return "influence";
  }

  function getRelationWeight(relationLabel) {
    const category = getRelationCategory(relationLabel);
    switch (category) {
      case "foundational":
        return 3;
      case "development":
        return 2;
      case "critique":
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

  function computeLabelLayout(typeMeta, focusedNodeId, node) {
  const radius = getNodeRadius(typeMeta, node, node.id === focusedNodeId);
    const connectorOffset = Math.max(
      radius + DEFAULT_LABEL_SETTINGS.connectorPadding,
      DEFAULT_LABEL_SETTINGS.minConnectorOffset
    );
    const horizontalOffset = Math.max(
      radius + DEFAULT_LABEL_SETTINGS.labelPadding,
      DEFAULT_LABEL_SETTINGS.minHorizontalOffset
    );
  return {
    lineX: connectorOffset,
    lineY: 0,
    textX: horizontalOffset,
      textY: DEFAULT_LABEL_SETTINGS.baselineOffset,
    anchor: "start"
  };
  }

  function getTraditionMeta(value) {
    if (!value) {
      return { icon: "fa-layer-group", label: "Unassigned" };
    }

    const map = {
      proto_scifi: { icon: "fa-feather", label: "Proto-SF" },
      gothic: { icon: "fa-moon", label: "Gothic" },
      british: { icon: "fa-crown", label: "British Tradition" },
      american: { icon: "fa-flag-usa", label: "American Tradition" },
      european: { icon: "fa-earth-europe", label: "European Tradition" },
      chinese_scifi: { icon: "fa-dragon", label: "Chinese SF" },
      golden_age: { icon: "fa-sun", label: "Golden Age" },
      new_wave: { icon: "fa-water", label: "New Wave" },
      cyberpunk: { icon: "fa-microchip", label: "Cyberpunk" },
      afrofuturism: { icon: "fa-globe-africa", label: "Afrofuturism" },
      african: { icon: "fa-people-group", label: "African Traditions" },
      feminist: { icon: "fa-venus", label: "Feminist SF" },
      philosophy: { icon: "fa-book", label: "Philosophy" },
      philosophy_of_science: { icon: "fa-flask", label: "Philosophy of Science" },
      social_design: { icon: "fa-people-roof", label: "Social Design" },
      cultural_movement: { icon: "fa-people-group", label: "Cultural Movements" },
      speculative_technology: { icon: "fa-atom", label: "Speculative Technology" },
      cosmic_sociology: { icon: "fa-satellite", label: "Cosmic Sociology" },
      television: { icon: "fa-tv", label: "Television" }
    };

    return map[value] || {
      icon: "fa-layer-group",
      label: titleCase(String(value).replace(/[-_]/g, " "))
    };
  }

  function getTopicMeta(value) {
    return {
      icon: "fa-tag",
      label: titleCase(String(value || "Untitled").replace(/[-_]/g, " "))
    };
  }

function getGenreMeta(value) {
  if (!value) {
    return { icon: "fa-layer-group", label: "Unassigned" };
  }
  return GENRE_META[value] || {
    icon: "fa-layer-group",
    label: titleCase(String(value).replace(/[-_]/g, " "))
  };
}

  function formatEraLabel(value) {
    if (!value) return "Unspecified";
    if (value === "unspecified" || value === "Unspecified") {
      return "Unspecified";
    }
    const normalized = normalizeEraValue(value);
    return ERA_LABELS[normalized] || titleCase(value.replace(/[-_]/g, " "));
  }

  function formatList(values) {
    return values
      .map((value) => titleCase(value.replace(/[-_]/g, " ")))
      .join(", ");
  }

  function formatCitation(entry) {
    if (!entry) {
      return "<li>Unspecified source</li>";
    }

    if (typeof entry === "string") {
      return `<li>${entry}</li>`;
    }

    if (typeof entry !== "object") {
      return `<li>${String(entry)}</li>`;
    }

    const parts = [];
    if (entry.author) parts.push(entry.author);
    if (entry.year) parts.push(`(${entry.year})`);
    if (entry.title) parts.push(`<em>${entry.title}</em>`);
    if (entry.publication) parts.push(entry.publication);
    if (entry.publisher) parts.push(entry.publisher);

    const citationText = parts.filter(Boolean).join(" ");
    if (entry.url) {
      const label = citationText || entry.url;
      return `<li><a href="${entry.url}" target="_blank" rel="noopener">${label}</a></li>`;
    }

    return `<li>${citationText || "Unnamed source"}</li>`;
  }

  function titleCase(value) {
    return value
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function initLegendFilters(state) {
    const section = document.getElementById("science-fiction");
    if (!section) return;
    const chips = section.querySelectorAll(".legend-chip[data-type]");
    if (!chips.length) return;

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const type = chip.dataset.type || "all";
        const current = state.filters.type;
        const next = current === type && type !== "all" ? "all" : type;
        state.filters.type = next;
        updateLegendChips(chips, next);
        renderGraph(state);
      });
    });

    updateLegendChips(chips, state.filters.type);
  }

  function updateLegendChips(chips, activeValue) {
    chips.forEach((chip) => {
      const value = chip.dataset.type || "all";
      chip.classList.toggle("active", value === activeValue);
    });
  }

  const ERA_SEQUENCE = [
    "ancient",
    "classical-antiquity",
    "late-antiquity",
    "medieval",
    "early-medieval",
    "high-medieval",
    "renaissance",
    "early-modern",
    "enlightenment",
    "18th-century",
    "modern",
    "early-19th-century",
    "19th-century",
    "late-19th-century",
    "early-20th-century",
    "20th-century",
    "mid-20th-century",
    "late-20th-century",
    "21st-century",
    "contemporary"
  ];

  const ERA_LABELS = {
    "ancient": "Ancient (–300 CE)",
    "classical-antiquity": "Classical Antiquity",
    "late-antiquity": "Late Antiquity",
    "medieval": "Medieval",
    "early-medieval": "Early Medieval",
    "high-medieval": "High Medieval",
    "renaissance": "Renaissance",
    "early-modern": "Early Modern (17th C.)",
    "enlightenment": "Enlightenment",
    "18th-century": "18th Century",
    "modern": "Modern (19th C.)",
    "early-19th-century": "Early 19th Century",
    "19th-century": "19th Century",
    "late-19th-century": "Late 19th Century",
    "early-20th-century": "Early 20th Century",
    "20th-century": "20th Century",
    "mid-20th-century": "Mid 20th Century",
    "late-20th-century": "Late 20th Century",
    "21st-century": "21st Century",
    "contemporary": "Contemporary"
  };

  const ERA_ALIASES = {
    "classical": "classical-antiquity",
    "late antiquity": "late-antiquity",
    "middle ages": "medieval",
    "middle-age": "medieval",
    "renaissance period": "renaissance",
    "modern period": "modern",
    "modern era": "modern",
    "postmodern": "contemporary",
    "modernity": "modern"
  };
})();

