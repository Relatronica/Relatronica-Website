/**
 * Relatronica - Speculative Design Studio
 * Drawer Functionality JavaScript
 * 
 * This file handles the right-side drawer functionality and future events rotation
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize drawer functionality
  initDrawer();
  
  // Initialize filter functionality
  initFilters();
  
  // Initialize future events carousel
  loadFutureEvents();
});

/**
 * Initialize drawer functionality with smooth animations and Font Awesome icons
 */
function initDrawer() {
  const drawerToggleBtn = document.getElementById('drawer-toggle-btn');
  const drawer = document.querySelector('.drawer');

  drawerToggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');

    const isOpen = drawer.classList.contains('open');
    drawerToggleBtn.setAttribute('aria-expanded', isOpen);

    const icon = drawerToggleBtn.querySelector('.drawer-icon');
    icon.className = isOpen ? 'fa-solid fa-chevron-left drawer-icon' : 'fa-solid fa-rocket drawer-icon';
  });

  document.addEventListener('click', (event) => {
    const isDrawerOpen = drawer.classList.contains('open');
    const isClickInsideDrawer = drawer.contains(event.target);
    const isClickOnToggleBtn = drawerToggleBtn.contains(event.target);

    if (isDrawerOpen && !isClickInsideDrawer && !isClickOnToggleBtn && window.innerWidth <= 768) {
      drawer.classList.remove('open');
      drawerToggleBtn.setAttribute('aria-expanded', false);

      const icon = drawerToggleBtn.querySelector('.drawer-icon');
      icon.className = 'fa-solid fa-rocket drawer-icon';
    }
  });

  // Update drawer state on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      drawer.classList.remove('open');
      drawerToggleBtn.setAttribute('aria-expanded', false);

      const icon = drawerToggleBtn.querySelector('.drawer-icon');
      icon.className = 'fa-solid fa-rocket drawer-icon';
    }
  });
  
  
  // Apply dark mode styles to drawer
  applyThemeToDrawer();
  
  // Listen for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        applyThemeToDrawer();
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // Aggiungere gestione dei tab
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const tabId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });

}

/**
 * Apply theme-specific styles to drawer elements
 */
function applyThemeToDrawer() {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  const drawer = document.querySelector('.drawer');
  
  if (isDarkMode) {
    drawer.classList.add('dark-theme');
  } else {
    drawer.classList.remove('dark-theme');
  }
}

/**
 * Initialize filter functionality in the drawer
 */
function initFilters() {
  // Create the filter UI
  createFilterUI();
  
  // Add event listeners to filter elements
  setupFilterListeners();
}

/**
 * Create the filter UI with all necessary controls
 */
function createFilterUI() {
  const filtersContainer = document.querySelector('.filters');
  
  if (!filtersContainer) return;
  
  // Clear existing content
 filtersContainer.innerHTML = `
  <h3>Future Explorations</h3>
<p class="subtitle">
  A creative invitation to imagine, explore, and reflect on possible futures.
</p>
<p>
  <em>Your mind is the engine. This tool is just the spark.</em><br><br>
  Welcome to a speculative sandbox where imagination isn’t escapism — it’s resistance.  
  We don’t predict the future here. We challenge it.<br><br>
  Pick a year, adjust the impact, stretch the probability — each choice unlocks a possible world: desirable, dangerous, or just different enough to matter.<br><br>
  This is for those who don’t ask “what will be,” but <strong>“what could we dare to make real?”</strong>
</p>

  <div class="filter-group">
    <h4>Categories</h4>
    <div class="tag-filters" id="category-filters">
      <button class="tag-filter active" data-category="all">All</button>
      <button class="tag-filter" data-category="technology">Technology</button>
      <button class="tag-filter" data-category="environment">Environment</button>
      <button class="tag-filter" data-category="society">Society</button>
      <button class="tag-filter" data-category="politics">Politics</button>
      <button class="tag-filter" data-category="health">Health</button>
      <button class="tag-filter" data-category="science">Science</button>
      <button class="tag-filter" data-category="transportation">Transportation</button>
    </div>
  </div>

  <div class="filter-group">
    <h4>Year Range</h4>
    <div class="range-slider">
      <div class="range-values">
        <span id="year-min">2025</span>
        <span id="year-max">2055</span>
      </div>
      <div class="slider-container">
        <input type="range" id="year-range-min" min="2025" max="2055" value="2025" class="range">
        <input type="range" id="year-range-max" min="2025" max="2055" value="2055" class="range">
      </div>
    </div>
  </div>

  <div class="filter-group">
    <h4>Probability Rating</h4>
    <div class="rating-filter">
      <div class="rating-stars" id="probability-rating">
        <span class="star active" data-value="1">★</span>
        <span class="star active" data-value="2">★</span>
        <span class="star active" data-value="3">★</span>
        <span class="star active" data-value="4">★</span>
        <span class="star active" data-value="5">★</span>
      </div>
      <span class="rating-label">Any probability</span>
    </div>
  </div>

  <div class="filter-group">
    <h4>Impact Rating</h4>
    <div class="rating-filter">
      <div class="rating-stars" id="impact-rating">
        <span class="star active" data-value="1">★</span>
        <span class="star active" data-value="2">★</span>
        <span class="star active" data-value="3">★</span>
        <span class="star active" data-value="4">★</span>
        <span class="star active" data-value="5">★</span>
      </div>
      <span class="rating-label">Any impact</span>
    </div>
  </div>

  <button id="reset-filters" class="reset-button">Reset Filters</button>
`;

  
  // Add styles for the new filter UI
  addFilterStyles();
}

/**
 * Add necessary styles for the filter UI
 */
function addFilterStyles() {
  // Check if styles already exist
  if (document.getElementById('drawer-filter-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'drawer-filter-styles';
  
  styleElement.textContent = `
    .filters h3 {
      margin-bottom: 1.5rem;
      color: var(--color-accent-primary);
    }
    
    .filter-group {
      margin-bottom: 1.5rem;
    }
    
    .filter-group h4 {
      margin-bottom: 0.75rem;
      font-size: 1rem;
      color: var(--color-text-secondary);
    }
    
    .tag-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .tag-filter {
      background-color: var(--color-bg-tertiary);
      border: 1px solid var(--color-border);
      border-radius: 20px;
      padding: 0.25rem 0.75rem;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .tag-filter:hover {
      background-color: var(--color-accent-primary);
      color: white;
    }
    
    .tag-filter.active {
      background-color: var(--color-accent-primary);
      color: white;
    }
    
    .range-slider {
      padding: 0 0.5rem;
    }
    
    .range-values {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    .slider-container {
      position: relative;
      height: 40px;
    }
    
    input[type="range"].range {
      position: absolute;
      width: 100%;
      pointer-events: none;
      appearance: none;
      height: 4px;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: var(--color-border);
      outline: none;
    }
    
    input[type="range"].range::-webkit-slider-thumb {
      pointer-events: auto;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--color-accent-primary);
      cursor: pointer;
    }
    
    input[type="range"].range::-moz-range-thumb {
      pointer-events: auto;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--color-accent-primary);
      cursor: pointer;
    }
    
    .rating-filter {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .rating-stars {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 0.25rem;
    }
    
    .rating-stars .star {
      font-size: 1.25rem;
      cursor: pointer;
      color: var(--color-border);
      transition: color 0.2s ease;
    }
    
    .rating-stars .star.active {
      color: var(--color-accent-primary);
    }
    
    .rating-label {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
    }
    
    .reset-button {
      background-color: var(--color-bg-tertiary);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius);
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: block;
      width: 100%;
      margin-top: 1rem;
    }
    
    .reset-button:hover {
      background-color: var(--color-accent-secondary);
      color: var(--color-text-primary);
    }
    
    /* Future Events Styling */
    .future-events {
      margin-top: 2rem;
    }
    
    .future-events h3 {
      margin-bottom: 1rem;
      color: var(--color-accent-primary);
    }
    
    .event-carousel {
      position: relative;
      min-height: 200px;
    }
    
    .event {
      padding: 1.25rem;
      margin-bottom: 1rem;
      background-color: var(--color-bg-tertiary);
      border-radius: var(--border-radius);
      border-left: 4px solid var(--color-accent-primary);
      transition: opacity 0.5s ease, transform 0.5s ease;
      position: absolute;
      width: 100%;
      opacity: 0;
      transform: translateY(10px);
      pointer-events: none;
    }
    
    .event.active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    
    .event h4 {
      margin-bottom: 0.25rem;
      color: var(--color-text-primary);
    }
    
    .event-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.85rem;
      color: var(--color-text-secondary);
    }
    
    .event-description {
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
    }
    
    .event-ratings {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: var(--color-text-secondary);
    }
    
    .event-rating {
      display: flex;
      align-items: center;
    }
    
    .event-rating-stars {
      margin-left: 0.25rem;
      color: var(--color-accent-primary);
    }
    
    .event-navigation {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    
    .event-nav-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: color 0.2s ease;
      padding: 0.25rem 0.5rem;
    }
    
    .event-nav-button:hover {
      color: var(--color-accent-primary);
    }
    
    .event-indicators {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    
    .event-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-border);
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .event-indicator.active {
      background-color: var(--color-accent-primary);
    }
  `;
  
  document.head.appendChild(styleElement);
}

/**
 * Set up event listeners for filter controls
 */
function setupFilterListeners() {
  // Category filter buttons
  const categoryButtons = document.querySelectorAll('.tag-filter');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active state for the clicked button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Apply filters
      if (typeof applyFilters === 'function') applyFilters();
    });
  });

  // Year range sliders
  const yearMinSlider = document.getElementById('year-range-min');
  const yearMaxSlider = document.getElementById('year-range-max');
  const yearMinDisplay = document.getElementById('year-min');
  const yearMaxDisplay = document.getElementById('year-max');

  if (yearMinSlider && yearMaxSlider && yearMinDisplay && yearMaxDisplay) {
    yearMinSlider.addEventListener('input', () => {
      let minVal = parseInt(yearMinSlider.value);
      let maxVal = parseInt(yearMaxSlider.value);

      if (minVal > maxVal) {
        yearMinSlider.value = maxVal;
        minVal = maxVal;
      }
      yearMinDisplay.textContent = minVal;
      if (typeof applyFilters === 'function') applyFilters();
    });

    yearMaxSlider.addEventListener('input', () => {
      let minVal = parseInt(yearMinSlider.value);
      let maxVal = parseInt(yearMaxSlider.value);

      if (maxVal < minVal) {
        yearMaxSlider.value = minVal;
        maxVal = minVal;
      }
      yearMaxDisplay.textContent = maxVal;
      if (typeof applyFilters === 'function') applyFilters();
    });
  }

  // Probability rating stars
  const probabilityStars = document.querySelectorAll('#probability-rating .star');
  let probabilityRating = 0;

  probabilityStars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      probabilityRating = probabilityRating === value ? 0 : value;

      probabilityStars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));
        s.classList.toggle('active', starValue <= probabilityRating || probabilityRating === 0);
      });

      const label = star.parentElement?.nextElementSibling;
      if (label) {
        label.textContent = probabilityRating === 0
          ? 'Any probability'
          : `Minimum probability: ${probabilityRating}`;
      }

      if (typeof applyFilters === 'function') applyFilters();
    });
  });

  // Impact rating stars
  const impactStars = document.querySelectorAll('#impact-rating .star');
  let impactRating = 0;

  impactStars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      impactRating = impactRating === value ? 0 : value;

      impactStars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));
        s.classList.toggle('active', starValue <= impactRating || impactRating === 0);
      });

      const label = star.parentElement?.nextElementSibling;
      if (label) {
        label.textContent = impactRating === 0
          ? 'Any impact'
          : `Minimum impact: ${impactRating}`;
      }

      if (typeof applyFilters === 'function') applyFilters();
    });
  });

  // Reset filters button
  const resetButton = document.getElementById('reset-filters');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // Reset category filters
      categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
          btn.classList.add('active');
        }
      });

      // Reset year range
      if (yearMinSlider && yearMaxSlider && yearMinDisplay && yearMaxDisplay) {
        yearMinSlider.value = yearMinSlider.min;
        yearMaxSlider.value = yearMaxSlider.max;
        yearMinDisplay.textContent = yearMinSlider.min;
        yearMaxDisplay.textContent = yearMaxSlider.max;
      }

      // Reset probability rating
      probabilityRating = 0;
      probabilityStars.forEach(s => s.classList.add('active'));
      if (probabilityStars.length > 0) {
        const label = probabilityStars[0].parentElement?.nextElementSibling;
        if (label) label.textContent = 'Any probability';
      }

      // Reset impact rating
      impactRating = 0;
      impactStars.forEach(s => s.classList.add('active'));
      if (impactStars.length > 0) {
        const label = impactStars[0].parentElement?.nextElementSibling;
        if (label) label.textContent = 'Any impact';
      }

      // Apply reset filters
      if (typeof applyFilters === 'function') applyFilters();
    });
  }
}


/**
 * Load future events from JSON file or fallback to hardcoded events
 */
function loadFutureEvents() {
  fetch('assets/data/future_events.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load future events: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data && Array.isArray(data.future_events)) {
        const futureEvents = data.future_events;
        window.futureEvents = futureEvents; // solo se ti serve globale
        initEventDisplay(futureEvents);
      } else {
        throw new Error('Invalid future_events format');
      }
    })
    .catch(error => {
      console.error('Error loading future events:', error);

      const fallbackEvents = [
        {
          title: "First Neural Mesh Network City",
          description: "Singapore becomes the first city to implement a citywide neural mesh network, allowing buildings, infrastructure, and natural systems to communicate and adapt in real-time to environmental changes and human needs.",
          year: 2035,
          category: "technology",
          probability: 3,
          impact: 5
        },
        {
          title: "Global Carbon Sequestration Treaty",
          description: "Following decades of climate crisis, 175 nations sign the Mumbai Accord, committing 2% of global GDP to atmospheric carbon capture and sequestration technologies, marking the first serious attempt to reverse climate change rather than just mitigate it.",
          year: 2042,
          category: "environment",
          probability: 4,
          impact: 5
        },
        {
          title: "Universal Basic Purpose Program",
          description: "As automation reaches 65% of traditional employment sectors, the European Union launches the first Universal Basic Purpose program, providing citizens with both basic income and access to meaningful project-based work in community development, environmental restoration, and care economies.",
          year: 2038,
          category: "society",
          probability: 3,
          impact: 4
        }
      ];

      window.futureEvents = fallbackEvents;
      initEventDisplay(fallbackEvents);
    });
}


/**
 * Initialize the event display with navigation and rotation
 * @param {Array} events - Array of event objects
 */
function initEventDisplay(events) {
  if (events.length === 0) return;
  
  const eventCarousel = document.querySelector('.event-carousel');
  if (!eventCarousel) return;
  
  // Clear existing content
  eventCarousel.innerHTML = '';
  
  // Create container for events
  const eventsContainer = document.createElement('div');
  eventsContainer.className = 'events-container';
  
  // Create event elements
  events.forEach((event, index) => {
    const eventElement = document.createElement('div');
    eventElement.className = `event ${index === 0 ? 'active' : ''}`;
    eventElement.dataset.category = event.category;
    eventElement.dataset.year = event.year;
    eventElement.dataset.probability = event.probability;
    eventElement.dataset.impact = event.impact;
    
    eventElement.innerHTML = `
      <h4>${event.title}</h4>
      <div class="event-meta">
        <span class="event-year">${event.year}</span>
        <span class="event-category">${event.category}</span>
      </div>
      <p class="event-description">${event.description}</p>
      <div class="event-ratings">
        <div class="event-rating">
          <span>Probability:</span>
          <span class="event-rating-stars">${'★'.repeat(event.probability)}${'☆'.repeat(5 - event.probability)}</span>
        </div>
        <div class="event-rating">
          <span>Impact:</span>
          <span class="event-rating-stars">${'★'.repeat(event.impact)}${'☆'.repeat(5 - event.impact)}</span>
        </div>
      </div>
    `;
    
    eventsContainer.appendChild(eventElement);
  });
  
  eventCarousel.appendChild(eventsContainer);
  
  // Add navigation controls
  const navControls = document.createElement('div');
  navControls.className = 'event-navigation';
  navControls.innerHTML = `
    <button class="event-nav-button prev" aria-label="Previous event">❮</button>
    <button class="event-nav-button next" aria-label="Next event">❯</button>
  `;
  eventCarousel.appendChild(navControls);
  
  // Add indicator dots
  const indicators = document.createElement('div');
  indicators.className = 'event-indicators';
  
  events.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.className = `event-indicator ${index === 0 ? 'active' : ''}`;
    indicator.dataset.index = index;
    indicators.appendChild(indicator);
  });
  
  eventCarousel.appendChild(indicators);
  
  // Set up event rotation
  setupEventRotation();
}

/**
 * Set up automatic and manual event rotation
 */
function setupEventRotation() {
  const eventElements = document.querySelectorAll('.event');
  const indicators = document.querySelectorAll('.event-indicator');
  const prevButton = document.querySelector('.event-nav-button.prev');
  const nextButton = document.querySelector('.event-nav-button.next');
  
  if (eventElements.length === 0) return;
  
  let currentIndex = 0;
  let rotationInterval;
  let isPaused = false;
  
  // Function to show a specific event
  const showEvent = (index) => {
    // Hide all events
    eventElements.forEach(event => event.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show the selected event
    eventElements[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentIndex = index;
  };
  
  // Start automatic rotation
  const startRotation = () => {
    if (rotationInterval) clearInterval(rotationInterval);
    
    rotationInterval = setInterval(() => {
      if (!isPaused) {
        const nextIndex = (currentIndex + 1) % eventElements.length;
        showEvent(nextIndex);
      }
    }, 8000); // Rotate every 8 seconds
  };
  
  // Initialize rotation
  startRotation();
  
  // Event listeners for manual navigation
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + eventElements.length) % eventElements.length;
      showEvent(prevIndex);
      
      // Reset rotation timer
      startRotation();
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % eventElements.length;
      showEvent(nextIndex);
      
      // Reset rotation timer
      startRotation();
    });
  }
  
  // Event listeners for indicator dots
  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      const index = parseInt(indicator.dataset.index);
      showEvent(index);
      
      // Reset rotation timer
      startRotation();
    });
  });
  
  // Pause rotation when hovering over events
  const eventsContainer = document.querySelector('.events-container');
  if (eventsContainer) {
    eventsContainer.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    
    eventsContainer.addEventListener('mouseleave', () => {
      isPaused = false;
    });
  }
  
  // Pause rotation when user is interacting with the drawer
  const drawer = document.querySelector('.drawer');
  if (drawer) {
    drawer.addEventListener('touchstart', () => {
      isPaused = true;
    }, { passive: true });
    
    drawer.addEventListener('touchend', () => {
      // Resume after a short delay
      setTimeout(() => {
        isPaused = false;
      }, 2000);
    }, { passive: true });
  }
}

/**
 * Apply filters to the events based on current filter settings
 */
function applyFilters() {
  // Get current filter values
  const selectedCategory = document.querySelector('.tag-filter.active')?.getAttribute('data-category') || 'all';
  
  const yearMin = parseInt(document.getElementById('year-range-min')?.value || 2025);
  const yearMax = parseInt(document.getElementById('year-range-max')?.value || 2055);
  
  const probabilityMin = document.querySelectorAll('#probability-rating .star.active').length === 5 ? 
    0 : document.querySelectorAll('#probability-rating .star.active').length;
  
  const impactMin = document.querySelectorAll('#impact-rating .star.active').length === 5 ? 
    0 : document.querySelectorAll('#impact-rating .star.active').length;
  
  // Get all events
  const events = document.querySelectorAll('.event');
  const indicators = document.querySelectorAll('.event-indicator');
  
  // Track visible events
  const visibleEvents = [];
  
  // Apply filters to each event
  events.forEach((event, index) => {
    const category = event.dataset.category;
    const year = parseInt(event.dataset.year);
    const probability = parseInt(event.dataset.probability);
    const impact = parseInt(event.dataset.impact);
    
    // Check if event passes all filters
    const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
    const yearMatch = year >= yearMin && year <= yearMax;
    const probabilityMatch = probabilityMin === 0 || probability >= probabilityMin;
    const impactMatch = impactMin === 0 || impact >= impactMin;
    
    const isVisible = categoryMatch && yearMatch && probabilityMatch && impactMatch;
    
    // Update visibility
    event.style.display = isVisible ? '' : 'none';
    indicators[index].style.display = isVisible ? '' : 'none';
    
    if (isVisible) {
      visibleEvents.push(index);
    }
  });
  
  // If no events are visible after filtering, show a message
  const eventsContainer = document.querySelector('.events-container');
  let noResultsMessage = document.querySelector('.no-results-message');
  
  if (visibleEvents.length === 0) {
    if (!noResultsMessage) {
      noResultsMessage = document.createElement('div');
      noResultsMessage.className = 'no-results-message';
      noResultsMessage.textContent = 'No events match your filters. Try adjusting your criteria.';
      eventsContainer.parentNode.appendChild(noResultsMessage);
    }
  } else {
    if (noResultsMessage) {
      noResultsMessage.remove();
    }
    
    // Show the first visible event
    events.forEach(event => event.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    const firstVisibleIndex = visibleEvents[0];
    events[firstVisibleIndex].classList.add('active');
    indicators[firstVisibleIndex].classList.add('active');
    
    // Reset rotation with new filtered set
    setupEventRotation();
  }
}