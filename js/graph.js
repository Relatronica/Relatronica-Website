// Relatronica - Speculative Design Studio
// Graph Navigation JavaScript - Enhanced UX + Accessibility

// Wait for the DOM to fully load before initializing the graph
document.addEventListener('DOMContentLoaded', () => {
  initGraphVisualization();
});

function initGraphVisualization() {
  const graphContainer = document.getElementById('graph-container');
  graphContainer.innerHTML = ''; // Clear any previous content

  // Define the graph nodes (sections) with unique IDs and group identifiers
  const sections = [
    { id: "mission-vision", name: "Mission & Vision", group: 1 },
    { id: "research-areas", name: "Research Areas", group: 2 },
    { id: "toolbox", name: "Toolbox for Ethical Futures", group: 3 },
    { id: "scenario-generator", name: "Scenario Generator", group: 4 },
    { id: "people", name: "People & Inspirations", group: 5 },
    { id: "bibliography", name: "Bibliography & Resources", group: 6 },
    { id: "projects", name: "Projects", group: 7 }
  ];

  // Define links (edges) between nodes, with a "value" used for line thickness
  const links = [
  { source: 0, target: 1, value: 3 }, // Mission → Research Areas
  { source: 1, target: 4, value: 1 }, // Research → People
  { source: 1, target: 5, value: 1 }, // Research → Bibliography
  { source: 4, target: 5, value: 2 }, // People → Bibliography
  { source: 6, target: 2, value: 1 }, // Projects → Toolbox
  { source: 6, target: 3, value: 1 }, // Projects → Scenario Generator
  { source: 6, target: 1, value: 3 }, // Projects → Mission
  ];

  // Set up graph dimensions
  const width = graphContainer.clientWidth;
  const height = graphContainer.clientHeight;

  // Create an SVG element with zoom and accessibility features
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("class", "graph-svg")
    .style("width", "100%")
    .style("height", "100%")
    .attr("role", "img")
    .attr("aria-label", "Graph navigation interface");

  // Define a gradient for the active node
  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "activeNodeGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  gradient.append("stop").attr("offset", "0%").attr("stop-color", "#8e44ad");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#018786");

  const g = svg.append("g");

  // Enable zoom and pan interaction
  svg.call(d3.zoom()
    .scaleExtent([0.5, 3])
    .on("zoom", event => g.attr("transform", event.transform)));

  // Initialize the force simulation
  const simulation = d3.forceSimulation(sections)
    .force("link", d3.forceLink(links).id(d => d.index).distance(100))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(60));

  // Draw the links between nodes
  g.append("g").attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke", "var(--color-line)")
    .attr("stroke-width", d => Math.sqrt(d.value) * 2);

  // Draw the nodes
  const node = g.append("g").attr("class", "nodes")
    .selectAll("g")
    .data(sections)
    .enter().append("g")
    .attr("class", "node")
    .attr("data-section-id", d => d.id)
    .attr("tabindex", 0) // Make node focusable
    .attr("role", "button")
    .attr("aria-label", d => d.name)
    .attr("aria-pressed", (d, i) => i === 0)
    .call(drag(simulation)); // Enable dragging

  // Add circles to represent nodes
  const circles = node.append("circle")
    .attr("r", 50)
    .attr("stroke", "var(--color-border)")
    .attr("stroke-width", 2)
    .attr("class", (d, i) => i === 0 ? "node-circle active" : "node-circle")
    .attr("fill", (d, i) => i === 0 ? "url(#activeNodeGradient)" : "var(--color-node)");

  // Add text labels to each node, handling multi-line wrapping
  const labels = node.append("text")
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .attr("pointer-events", "none")
    .each(function(d) {
      const text = d3.select(this);
      const words = d.name.split(' ');
      text.text('');
      const lines = [];
      let line = '';
      const maxLineLength = 15;

      words.forEach((word, i) => {
        const testLine = line + word + ' ';
        if (testLine.length > maxLineLength && i > 0) {
          lines.push(line.trim());
          line = word + ' ';
        } else {
          line = testLine;
        }
      });
      lines.push(line.trim());

      const lineHeight = 1.2;
      const totalLines = lines.length;
      const startDy = -((totalLines - 1) / 2) * lineHeight;

      lines.forEach((lineText, i) => {
        text.append('tspan')
          .attr('x', 0)
          .attr('dy', (i === 0 ? startDy : lineHeight) + 'em')
          .text(lineText);
      });
    });

  // Click event to activate a node and navigate to its section
  node.on("click", (event, d) => {
    setActiveNode(d.id);
    if (window.navigateToSection) {
      window.navigateToSection(d.id);
    } else {
      loadSection(d.id);
    }
  });

  // Keyboard accessibility for activating nodes
  node.on("keydown", (event, d) => {
    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      setActiveNode(d.id);
      loadSection(d.id);
    }
  });

  // Hover effects
  node.on("mouseenter", function () {
    const circle = d3.select(this).select("circle");
    stopIdleAnimation(circle);
    if (!circle.classed("active")) {
      circle.transition().duration(200)
        .attr("fill", "var(--color-node-hover)")
        .attr("r", 55);
    }
  });

  node.on("mouseleave", function () {
    const circle = d3.select(this).select("circle");
    if (!circle.classed("active")) {
      circle.transition().duration(200)
        .attr("fill", "var(--color-node)")
        .attr("r", 50);
      startIdleAnimation(circle);
    }
  });

  // Update positions on every simulation tick
  simulation.on("tick", () => {
    sections.forEach(d => {
      d.x = Math.max(50, Math.min(width - 50, d.x));
      d.y = Math.max(50, Math.min(height - 50, d.y));
    });

    g.selectAll(".links line")
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });

  graphContainer.appendChild(svg.node());
  addGraphStyles();

  // Handle window resize to update layout
  window.addEventListener('resize', debounce(updateGraphSize, 300));
  window.updateGraphActiveNode = setActiveNode;

  // Function to visually set the active node
  function setActiveNode(sectionId) {
    circles.classed("active", false)
      .attr("fill", "var(--color-node)");
    node.selectAll("circle")
      .filter(d => d.id === sectionId)
      .classed("active", true)
      .attr("fill", "url(#activeNodeGradient)");
    node.attr("aria-pressed", d => d.id === sectionId);
  }

  // Resize behavior on window resize
  function updateGraphSize() {
    const newWidth = graphContainer.clientWidth;
    const newHeight = graphContainer.clientHeight;
    svg.attr("viewBox", [0, 0, newWidth, newHeight]);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2)).alpha(0.3).restart();
  }

  // Drag behavior setup for each node
  function drag(simulation) {
    return d3.drag()
      .on("start", event => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on("drag", event => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on("end", event => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      });
  }

  // Inject CSS styles dynamically
  function addGraphStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .graph-svg {
        background: var(--color-background);
        border-radius: 12px;
        box-shadow: var(--shadow);
        cursor: grab;
      }
      .node-circle {
        cursor: pointer;
        transition: fill 0.3s ease, r 0.3s ease;
      }
      .node-circle.active {
        stroke: var(--color-node-active-border);
        stroke-width: 3;
      }
      .links line {
        stroke: var(--color-line);
      }
      .node text {
        user-select: none;
        pointer-events: none;
      }
      .node:focus {
        outline: 2px solid var(--color-node-active-border);
        outline-offset: 4px;
      }
    `;
    document.head.appendChild(style);
  }

  // Load a section's content (stub function)
  function loadSection(sectionId) {
    console.log("Loading section:", sectionId);
  }

  // Idle animation logic for non-active nodes
  function startIdleAnimation(circle) {
    if (circle.classed("active")) return;
    animateIdle(circle);
  }

  function animateIdle(circle) {
    if (circle.classed("active")) return;
    circle.transition()
      .duration(1000)
      .attr("r", 53)
      .transition()
      .duration(1000)
      .attr("r", 50)
      .on("end", () => animateIdle(circle)); // Loop animation
  }

  function stopIdleAnimation(circle) {
    circle.interrupt().attr("r", 50);
  }

  // Start idle animation on non-active nodes after initial render
  setTimeout(() => {
    node.selectAll("circle").each(function() {
      const circle = d3.select(this);
      if (!circle.classed("active")) {
        startIdleAnimation(circle);
      }
    });
  }, 500);
}

   // Aggiungiamo la funzione debounce mancante
        function debounce(func, wait = 100) {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(this, args);
                }, wait);
            };
        }



