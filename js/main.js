/**
 * Relatronica - Speculative Design Studio
 * Main JavaScript file
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Initialize content section display
  initContentSections();
  
  // Initialize drawer functionality
  // Note: This is now handled by drawer.js
  
  // Check if we need to load content from files
  // Since we've integrated the content directly in index.html, we don't need to load it separately
  // But we'll keep the function in case we need to load dynamic content in the future
});

/**
 * Initialize theme based on user preference or localStorage
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  // Check for saved theme preference or prefer-color-scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Theme toggle button event listener
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/**
 * Initialize content sections display
 */
function initContentSections() {
  // Ensure the first section is active
  const sections = document.querySelectorAll('.content-section');
  if (sections.length > 0) {
    sections.forEach(section => section.classList.remove('active'));
    sections[0].classList.add('active');
  }
  
  // Check for URL hash to navigate to specific section
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.substring(1); // Remove the # character
    navigateToSection(sectionId);
  }
  
  // Add event listener for hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      navigateToSection(sectionId);
    }
  });
}

/**
 * Handle section navigation
 * @param {string} sectionId - The ID of the section to navigate to
 */
function navigateToSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));
  
  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Add animation class
    targetSection.classList.add('section-transition');
    setTimeout(() => {
      targetSection.classList.remove('section-transition');
    }, 500);
    
    // Update URL hash for deep linking (optional)
    if (window.location.hash !== `#${sectionId}`) {
      history.pushState(null, null, `#${sectionId}`);
    }
    
    // Update active node in graph
    updateActiveGraphNode(sectionId);
  }
}

/**
 * Update the active node in the graph visualization
 * @param {string} sectionId - The ID of the active section
 */
function updateActiveGraphNode(sectionId) {
  // This function will be called by graph.js when it's ready
  if (window.updateGraphActiveNode) {
    window.updateGraphActiveNode(sectionId);
  }
}

/**
 * Check if a section exists in the DOM
 * @param {string} sectionId - The ID of the section to check
 * @returns {boolean} - Whether the section exists
 */
function sectionExists(sectionId) {
  return document.getElementById(sectionId) !== null;
}

// Export functions for use in other modules
window.navigateToSection = navigateToSection;
window.sectionExists = sectionExists;