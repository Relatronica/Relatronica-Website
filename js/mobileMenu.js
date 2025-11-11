// Relatronica - Mobile Navigation Overlay

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigationMenu();
});

function initMobileNavigationMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (!toggleBtn) return;

  const overlay = buildOverlay();
  const backdrop = overlay.querySelector('[data-mobile-menu-backdrop]');
  const closeBtn = overlay.querySelector('[data-mobile-menu-close]');
  const listContainer = overlay.querySelector('.mobile-nav-list');
  const panel = overlay.querySelector('.mobile-nav-panel');

  let isOpen = false;
  let previousFocus = null;

  renderMenuItems();
  syncActiveItem(getActiveSectionId());

  toggleBtn.addEventListener('click', () => {
    if (!isMobileViewport()) return;
    isOpen ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', () => closeMenu());
  closeBtn.addEventListener('click', () => closeMenu());

  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
    }

    if (event.key === 'Tab' && isOpen) {
      trapFocus(event);
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobileViewport() && isOpen) {
      closeMenu(false);
    }
  });

  window.addEventListener('hashchange', () => {
    syncActiveItem(getActiveSectionId());
  });

  window.addEventListener('graph:activeChange', (event) => {
    if (event?.detail?.sectionId) {
      syncActiveItem(event.detail.sectionId);
    }
  });

  function buildOverlay() {
    const overlayEl = document.createElement('div');
    overlayEl.className = 'mobile-nav-overlay';
    overlayEl.innerHTML = `
      <div class="mobile-nav-backdrop" data-mobile-menu-backdrop></div>
      <nav class="mobile-nav-panel" id="mobile-nav-panel" aria-label="Navigazione mobile">
        <div class="mobile-nav-header">
          <p class="mobile-nav-eyebrow">Esplora</p>
          <button type="button" class="mobile-nav-close" data-mobile-menu-close aria-label="Chiudi menu">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <ul class="mobile-nav-list" role="list"></ul>
      </nav>
    `;
    document.body.appendChild(overlayEl);
    toggleBtn.setAttribute('aria-controls', 'mobile-nav-panel');
    toggleBtn.setAttribute('aria-expanded', 'false');
    return overlayEl;
  }

  function renderMenuItems() {
    const sections = Array.isArray(window.graphSections) ? window.graphSections : [];
    listContainer.innerHTML = '';

    sections.forEach(section => {
      const item = document.createElement('li');
      item.className = 'mobile-nav-item';

      const button = document.createElement('button');
      button.className = 'mobile-nav-link';
      button.type = 'button';
      button.textContent = section.name;
      button.dataset.sectionId = section.id;
      button.setAttribute('aria-label', `Vai alla sezione ${section.name}`);

      button.addEventListener('click', () => {
        activateSection(section.id);
        closeMenu();
      });

      item.appendChild(button);
      listContainer.appendChild(item);
    });
  }

  function openMenu() {
    if (isOpen) return;

    isOpen = true;
    previousFocus = document.activeElement;
    overlay.classList.add('is-open');
    document.body.classList.add('mobile-menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');

    const activeButton = overlay.querySelector('.mobile-nav-link.is-active') ||
      overlay.querySelector('.mobile-nav-link');

    requestAnimationFrame(() => {
      if (activeButton) {
        activeButton.focus();
      } else {
        panel.focus();
      }
    });
  }

  function closeMenu(restoreFocus = true) {
    if (!isOpen) return;

    isOpen = false;
    overlay.classList.remove('is-open');
    document.body.classList.remove('mobile-menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');

    if (restoreFocus && previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }
  }

  function activateSection(sectionId) {
    if (typeof window.navigateToSection === 'function') {
      window.navigateToSection(sectionId);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    syncActiveItem(sectionId);
  }

  function syncActiveItem(sectionId) {
    if (!sectionId) return;

    const buttons = overlay.querySelectorAll('.mobile-nav-link');
    buttons.forEach(button => {
      const isActive = button.dataset.sectionId === sectionId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  function getActiveSectionId() {
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) return activeSection.id;
    if (window.location.hash) return window.location.hash.substring(1);
    const sections = Array.isArray(window.graphSections) ? window.graphSections : [];
    return sections.length ? sections[0].id : null;
  }

  function isMobileViewport() {
    return window.innerWidth <= 992;
  }

  function trapFocus(event) {
    const focusableElements = overlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const focusable = Array.from(focusableElements).filter(el => !el.hasAttribute('disabled'));
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    } else if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  }
}

