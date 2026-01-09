import './style.css'

// Navigation HTML
const navHTML = `
  <div class="internal-menu-container">
    <button class="menu-trigger font-accent">Menu</button>
    <div class="menu-overlay">
      <ul class="menu-list text-uppercase">
        <li><a href="index.html">Home</a></li>
        <li><a href="location.html">Location</a></li>
        <li><a href="programme.html">Programme</a></li>
        <li><a href="travel.html">Travel & Arrival</a></li>
        <li><a href="stay.html">Where to Stay</a></li>
        <li><a href="details.html">A Few More Details</a></li>
      </ul>
    </div>
  </div>
`;

const footerHTML = `
  <div class="container text-center">
    <p class="font-accent" style="font-size: 1.5rem;">Thank you for joining us!</p>
    <p>&copy; 2026 Juan & Thomas</p>
  </div>
`;

// Inject if elements exist and we are NOT on homepage (or handle homepage specifically)
// The Homepage layout is custom. If index.html has <header id="header"> it will inject.
// We should REMOVE <header id="header"> from index.html if we don't want it there.
// Or conditionally inject.

const headerEl = document.getElementById('header');
if (headerEl) {
  // Clear any existing content to prevent duplication
  headerEl.innerHTML = navHTML;
  headerEl.classList.add('header');

  const menuTrigger = headerEl.querySelector('.menu-trigger');
  const menuOverlay = headerEl.querySelector('.menu-overlay');

  if (menuTrigger && menuOverlay) {
    const toggleMenu = (open) => {
      if (open === undefined) open = !menuOverlay.classList.contains('active');

      if (open) {
        menuOverlay.classList.add('active');
        menuTrigger.textContent = "Close";
      } else {
        menuOverlay.classList.remove('active');
        menuTrigger.textContent = "Menu";
      }
    };

    menuTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (menuOverlay.classList.contains('active') && !menuOverlay.contains(e.target) && e.target !== menuTrigger) {
        toggleMenu(false);
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  }
}

const footerEl = document.getElementById('footer');
if (footerEl) {
  // footerEl.innerHTML = footerHTML;
  // footerEl.classList.add('footer');
  footerEl.remove(); // Completely remove it per user request
}

// Scroll Logic
function initSmartScroll() {
  const viewport = document.querySelector('.scroll-viewport');
  const upArrow = document.querySelector('.scroll-arrow-up');
  const downArrow = document.querySelector('.scroll-arrow-down');

  if (!viewport || !upArrow || !downArrow) return;

  const checkScroll = () => {
    // Show UP arrow if scrolled down more than 50px
    if (viewport.scrollTop > 50) {
      upArrow.classList.remove('hidden');
    } else {
      upArrow.classList.add('hidden');
    }

    // Show DOWN arrow if not at bottom (allow some buffer)
    if (viewport.scrollHeight > viewport.clientHeight) {
      const isAtBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 50;
      if (!isAtBottom) {
        downArrow.classList.remove('hidden');
        if (downArrow.parentElement) downArrow.parentElement.style.opacity = 1;
      } else {
        downArrow.classList.add('hidden');
        if (downArrow.parentElement) downArrow.parentElement.style.opacity = 0;
      }
    } else {
      downArrow.classList.add('hidden');
      if (downArrow.parentElement) downArrow.parentElement.style.opacity = 0;
    }
  };

  // Initial check
  checkScroll();

  viewport.addEventListener('scroll', checkScroll, { passive: true });

  // Arrow Click Handlers
  downArrow.addEventListener('click', () => {
    viewport.scrollBy({ top: 300, behavior: 'smooth' });
  });

  upArrow.addEventListener('click', () => {
    viewport.scrollBy({ top: -300, behavior: 'smooth' });
  });

  // Handle window resize to re-check scroll state
  window.addEventListener('resize', checkScroll, { passive: true });
}

// Image Preloader to prevent flickering
function initImagePreloader() {
  const imageContainers = document.querySelectorAll('.home-left, .page-split-fixed-image');
  
  imageContainers.forEach(container => {
    // Get background image URL from computed style
    const bgImage = window.getComputedStyle(container).backgroundImage;
    if (!bgImage || bgImage === 'none') {
      container.classList.add('loaded'); // Reveal if no image
      return;
    }

    const imageUrl = bgImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
    
    // Create preloader
    const img = new Image();
    
    const reveal = () => {
      container.classList.add('loaded');
    };

    img.onload = reveal;
    img.onerror = reveal; // Reveal anyway on error (let CSS handle fallback)
    img.src = imageUrl;

    // Fallback: Reveal after 2 seconds if something went wrong
    setTimeout(reveal, 2000);
    
    // Check if already complete (from cache)
    if (img.complete) reveal();
  });
}

// Run init
document.addEventListener('DOMContentLoaded', () => {
  initSmartScroll();
  initImagePreloader();
});

// Since we are using Vite and main.js is a module, DOMContentLoaded might have already fired 
// or main.js might be loaded after it. Most reliably for Vite:
initSmartScroll();
initImagePreloader();
