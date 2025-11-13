(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const configuratorSection = document.getElementById("agi-ethics-configurator");
    if (!configuratorSection) return;

    if (!Array.isArray(window.AGI_CAPABILITIES) || window.AGI_CAPABILITIES.length === 0) {
      console.warn("AGI configurator: capability dataset missing.");
      return;
    }

    initAgiConfigurator();
  });

  function initAgiConfigurator() {
    const capabilityContainer = document.getElementById("agi-capability-chips");
    const lensContainer = document.getElementById("agi-lens-options");
    const volatilityInput = document.getElementById("agi-volatility");
    const summaryContainer = document.getElementById("agi-summary");
    const feedbackNode = document.getElementById("agi-feedback");
    const outputNodes = {
      doubts: document.querySelector('[data-output="doubts"]'),
      questions: document.querySelector('[data-output="questions"]'),
      scenarios: document.querySelector('[data-output="scenarios"]'),
      signals: document.querySelector('[data-output="signals"]')
    };

    if (!capabilityContainer || !lensContainer || !volatilityInput || !summaryContainer) {
      console.warn("AGI configurator: required DOM nodes missing.");
      return;
    }

    const state = {
      selected: new Set(),
      lens: Array.isArray(window.AGI_ANALYTIC_LENSES) && window.AGI_ANALYTIC_LENSES.length > 0
        ? window.AGI_ANALYTIC_LENSES[0].id
        : null,
      volatility: parseInt(volatilityInput.value, 10) || 3
    };

    renderCapabilityChips(capabilityContainer, state);
    renderLensOptions(lensContainer, state);
    updateSummary(summaryContainer, state);
    updateFeedback(feedbackNode, state);
    renderOutputs(outputNodes, state);

    capabilityContainer.addEventListener("click", (event) => {
      const target = event.target.closest("button[data-capability-id]");
      if (!target) return;

      const capabilityId = target.dataset.capabilityId;
      toggleCapability(capabilityId, target, state);
      updateFeedback(feedbackNode, state);
      updateSummary(summaryContainer, state);
      debouncedRenderOutputs(outputNodes, state);
    });

    lensContainer.addEventListener("change", (event) => {
      const target = event.target;
      if (target && target.name === "agi-lens") {
        state.lens = target.value;
        updateFeedback(feedbackNode, state);
        updateSummary(summaryContainer, state);
        debouncedRenderOutputs(outputNodes, state);
      }
    });

    volatilityInput.addEventListener("input", () => {
      state.volatility = parseInt(volatilityInput.value, 10) || 3;
      updateFeedback(feedbackNode, state);
      updateSummary(summaryContainer, state);
      debouncedRenderOutputs(outputNodes, state);
    });

    renderOutputs(outputNodes, state);
  }

  function renderCapabilityChips(container, state) {
    container.innerHTML = "";
    window.AGI_CAPABILITIES.forEach((capability) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "agi-chip";
      chip.dataset.capabilityId = capability.id;
      chip.setAttribute("aria-pressed", "false");
      chip.innerHTML = `
        <span class="agi-chip__title">${capability.name}</span>
        <span class="agi-chip__meta">${capability.domain}</span>
        <span class="agi-chip__description">${capability.description || capability.archetype}</span>
      `;
      chip.title = capability.archetype;
      container.appendChild(chip);
    });
    state.selected.clear();
  }

  function renderLensOptions(container, state) {
    container.innerHTML = "";
    const lenses = Array.isArray(window.AGI_ANALYTIC_LENSES) ? window.AGI_ANALYTIC_LENSES : [];
    lenses.forEach((lens, index) => {
      if (index === 0 && !state.lens) {
        state.lens = lens.id;
      }
      const option = document.createElement("label");
      option.className = "agi-lens-option";
      option.title = lens.description;
      option.innerHTML = `
        <input type="radio" name="agi-lens" value="${lens.id}" ${state.lens === lens.id ? "checked" : ""}>
        <span class="agi-lens-option__label">${lens.name}</span>
        <span class="agi-lens-option__description">${lens.description}</span>
      `;
      container.appendChild(option);
    });
  }

  function toggleCapability(capabilityId, chipNode, state) {
    if (!capabilityId) return;
    if (state.selected.has(capabilityId)) {
      state.selected.delete(capabilityId);
      chipNode.classList.remove("agi-chip--selected");
      chipNode.setAttribute("aria-pressed", "false");
    } else {
      state.selected.add(capabilityId);
      chipNode.classList.add("agi-chip--selected");
      chipNode.setAttribute("aria-pressed", "true");
    }
  }

  function updateSummary(container, state) {
    const selectedCapabilities = window.AGI_CAPABILITIES.filter((cap) => state.selected.has(cap.id));
    if (selectedCapabilities.length === 0) {
      container.innerHTML = `
        <h4><i class="fa-solid fa-satellite gradient-icon" aria-hidden="true"></i> Synthesis Brief</h4>
        <p class="summary-placeholder">Seleziona almeno una capacità per generare una sintesi multi-vettore.</p>
      `;
      return;
    }

    const lens = getLens(state.lens);
    const volatilityBand = getVolatilityBand(state.volatility);
    const capabilitySummary = selectedCapabilities
      .map((cap) => `<span class="agi-summary-chip">${cap.name}</span>`)
      .join(" ");

    const archetypeSummary = selectedCapabilities
      .map((cap) => cap.archetype)
      .slice(0, 2)
      .join(" • ");

    container.innerHTML = `
      <h4><i class="fa-solid fa-satellite gradient-icon" aria-hidden="true"></i> Synthesis Brief</h4>
      <div class="summary-section">
        <strong>Capability focus:</strong>
        <div class="summary-chips">${capabilitySummary}</div>
      </div>
      <div class="summary-section">
        <strong>Analytic lens:</strong>
        <span>${lens ? `${lens.name} — ${lens.description}` : "n.d."}</span>
      </div>
      <div class="summary-section">
        <strong>Volatility band:</strong>
        <span>${volatilityBand ? `${volatilityBand.label} — ${volatilityBand.description}` : "n.d."}</span>
      </div>
      <div class="summary-section">
        <strong>Epistemic posture:</strong>
        <span>${archetypeSummary || "Hybrid configuration in exploratory phase."}</span>
      </div>
    `;
  }

  function updateFeedback(node, state) {
    if (!node) return;
    const lens = getLens(state.lens);
    const band = getVolatilityBand(state.volatility);
    const capabilityCount = state.selected.size;
    const fragments = [];
    const capabilityLabel = capabilityCount === 1 ? "capability" : "capabilities";
    fragments.push(`${capabilityCount} ${capabilityLabel} active`);
    if (lens) fragments.push(`lens ${lens.name}`);
    if (band) fragments.push(`volatility: ${band.label}`);
    node.textContent = fragments.join(" · ");
  }

  const debouncedRenderOutputs = debounce((outputNodes, state) => {
    renderOutputs(outputNodes, state);
  }, 240);

  function renderOutputs(outputNodes, state) {
    const selectedCapabilities = window.AGI_CAPABILITIES.filter((cap) => state.selected.has(cap.id));
    if (selectedCapabilities.length === 0) {
      Object.values(outputNodes).forEach((list) => {
        if (list) {
          list.innerHTML = `<li class="agi-output-placeholder">No output yet: activate at least one capability to start the analysis.</li>`;
        }
      });
      return;
    }

    const lens = getLens(state.lens);
    const volatilityBand = getVolatilityBand(state.volatility);
    const volatilityBias = 1 + ((state.volatility || 3) - 2) * 0.22;

    const activeSynergies = Array.isArray(window.AGI_SYNERGIES)
      ? window.AGI_SYNERGIES.filter((syn) => syn.capabilities.every((id) => state.selected.has(id)))
      : [];

    const doubtsResult = deriveInsights({
      type: "doubts",
      property: "ethicalDoubts",
      selectedCapabilities,
      lens,
      volatilityBias,
      activeSynergies
    });
    populateOutputList(outputNodes.doubts, doubtsResult.items);

    const questionsResult = deriveInsights({
      type: "questions",
      property: "researchQuestions",
      selectedCapabilities,
      lens,
      volatilityBias: volatilityBias + 0.1,
      activeSynergies
    });
    populateOutputList(outputNodes.questions, questionsResult.items);

    const scenariosResult = deriveInsights({
      type: "scenarios",
      property: "scenarios",
      selectedCapabilities,
      lens,
      volatilityBias: volatilityBias + 0.15,
      volatilityBand,
      activeSynergies
    });
    populateOutputList(outputNodes.scenarios, scenariosResult.items);

    const signals = buildSignals({
      selectedCapabilities,
      lens,
      volatilityBand,
      activeSynergies,
      scenarioSignals: scenariosResult.signals
    });
    populateOutputList(outputNodes.signals, signals);
  }

  function deriveInsights({ type, property, selectedCapabilities, lens, volatilityBias, volatilityBand, activeSynergies }) {
    const registry = new Map();

    selectedCapabilities.forEach((cap) => {
      const entries = Array.isArray(cap[property]) ? cap[property] : [];
      entries.forEach((text, index) => {
        const weight = 1.8 / (index + 1);
        addInsight(registry, text, weight, {
          label: cap.domain,
          category: "capability"
        });
      });
    });

    if (Array.isArray(activeSynergies) && activeSynergies.length > 0) {
      activeSynergies.forEach((synergy) => {
        const synergyEntries = Array.isArray(synergy[property]) ? synergy[property] : [];
        synergyEntries.forEach((text, index) => {
          const weight = 2.2 / (index + 1);
          addInsight(registry, text, weight, {
            label: "Synergy",
            category: "synergy"
          });
        });
      });
    }

    if (lens && lens.contributions && Array.isArray(lens.contributions[type])) {
      lens.contributions[type].forEach((text, index) => {
        const weight = ((lens.weighting && lens.weighting[type]) || 1.1) / (index + 1);
        addInsight(registry, text, weight, {
          label: lens.name,
          category: "lens"
        });
      });
    }

    const entries = Array.from(registry.values()).map((record) => {
      const weighting = (lens?.weighting?.[type] || 1) * volatilityBias;
      return {
        text: record.text,
        weight: record.weight * weighting,
        badges: Array.from(record.meta.entries()).map(([label, category]) => ({ label, category }))
      };
    });

    entries.sort((a, b) => b.weight - a.weight);

    const desiredLength = Math.max(
      3,
      Math.round((statefulLensWeight(lens, type) + volatilityBias) * 2)
    );

    const limited = entries.slice(0, desiredLength);
    const signals = [];

    if (volatilityBand && type === "scenarios") {
      signals.push({
        text: `Volatility band — ${volatilityBand.description}`,
        badges: [{ label: volatilityBand.label, category: "volatility" }]
      });
    }

    if (Array.isArray(activeSynergies) && activeSynergies.length > 0 && type === "scenarios") {
      const names = activeSynergies.map((syn) => syn.description).slice(0, 2);
      signals.push({
        text: `Synergy focus — ${names.join(" • ")}`,
        badges: [{ label: "Synergy", category: "synergy" }]
      });
    }

    return { items: limited, signals };
  }

  function addInsight(registry, text, weight, meta) {
    const normalized = (text || "").trim();
    if (!normalized) return;
    let record = registry.get(normalized);
    if (!record) {
      record = { text: normalized, weight: 0, meta: new Map() };
      registry.set(normalized, record);
    }
    record.weight += weight;
    if (meta && meta.label) {
      record.meta.set(meta.label, meta.category || "capability");
    }
  }

  function populateOutputList(node, entries) {
    if (!node) return;
    if (!entries || entries.length === 0) {
      node.innerHTML = `<li class="agi-output-placeholder">Ancora nessun insight disponibile per questa combinazione.</li>`;
      return;
    }
    node.innerHTML = "";
    entries.forEach((entry) => {
      const item = document.createElement("li");
      item.className = "agi-output-item";
      if (Array.isArray(entry.badges) && entry.badges.length > 0) {
        const badgeGroup = document.createElement("span");
        badgeGroup.className = "agi-badge-group";
        entry.badges.forEach((badge) => {
          const badgeNode = document.createElement("span");
          badgeNode.className = `agi-badge agi-badge--${badge.category || "capability"}`;
          badgeNode.textContent = badge.label;
          badgeGroup.appendChild(badgeNode);
        });
        item.appendChild(badgeGroup);
      }
      const textNode = document.createElement("span");
      textNode.className = "agi-output-text";
      textNode.textContent = entry.text;
      item.appendChild(textNode);
      node.appendChild(item);
    });
  }

  function buildSignals({ selectedCapabilities, lens, volatilityBand, activeSynergies, scenarioSignals }) {
    const signals = [];

    if (Array.isArray(scenarioSignals)) {
      scenarioSignals.forEach((signal) => signals.push(signal));
    }

    if (lens) {
      signals.push({
        text: `Lens orientation — ${lens.name}: ${lens.description}`,
        badges: [{ label: lens.name, category: "lens" }]
      });
    }

    if (Array.isArray(selectedCapabilities) && selectedCapabilities.length > 0) {
      signals.push({
        text: `Capability spread — ${selectedCapabilities.length} cluster${selectedCapabilities.length > 1 ? "s" : ""} attivati`,
        badges: [{ label: "Capability", category: "capability" }]
      });
    }

    if (volatilityBand && !signals.some((sig) => sig.badges?.some((badge) => badge.category === "volatility"))) {
      signals.push({
        text: `Volatility band — ${volatilityBand.description}`,
        badges: [{ label: volatilityBand.label, category: "volatility" }]
      });
    }

    const hasSynergySignal = signals.some((sig) =>
      sig.badges?.some((badge) => badge.category === "synergy")
    );

    if (!hasSynergySignal && Array.isArray(activeSynergies) && activeSynergies.length > 0) {
      signals.push({
        text: `Synergies attive — ${activeSynergies.length} pattern complementari`,
        badges: [{ label: "Synergy", category: "synergy" }]
      });
    }

    return signals;
  }

  function getLens(lensId) {
    if (!lensId || !Array.isArray(window.AGI_ANALYTIC_LENSES)) return null;
    return window.AGI_ANALYTIC_LENSES.find((lens) => lens.id === lensId) || null;
  }

  function getVolatilityBand(level) {
    if (!window.AGI_VOLATILITY_BANDS) return null;
    return window.AGI_VOLATILITY_BANDS[level] || null;
  }

  function statefulLensWeight(lens, type) {
    if (!lens || !lens.weighting) return 1;
    return lens.weighting[type] || 1;
  }

  function debounce(fn, wait = 250) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }
})();

