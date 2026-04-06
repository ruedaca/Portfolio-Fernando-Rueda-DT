/* ══════════════════════════════════════════════════════════════
   MAIN · Entry point — initialises all JS modules
   ══════════════════════════════════════════════════════════════

   IMPORTANT: ES6 modules require a local HTTP server.
   Open with VS Code Live Server, or run:
     python -m http.server 8080
   then visit http://localhost:8080
   ══════════════════════════════════════════════════════════════ */

import { initI18n }       from './i18n.js';
import { initNav }        from './nav.js';
import { initAnimations } from './animations.js';
import { initParallax }   from './parallax.js';
import { initSlideshow }  from './slideshow.js';
import { initTimeline }   from './timeline.js';
import { initGallery }    from './gallery.js';
import { initContact }    from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Language must initialise first (sets text content)
  initI18n();

  // Navigation (smooth scroll, mobile menu, scroll spy)
  initNav();

  // Scroll-reveal animations
  initAnimations();

  // Hero slideshow (fade entre fotos de fondo)
  initSlideshow();

  // Hero background parallax (desktop only)
  initParallax();

  // Career timeline (click nodes, detail panel)
  initTimeline();

  // Galería horizontal — control de velocidad por arrastre
  initGallery();

  // Formulario de contacto — async submit sin redirección
  initContact();
});
