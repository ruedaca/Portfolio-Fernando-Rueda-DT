/* ══════════════════════════════════════════════════════════════
   NAV · Fixed navigation, scroll spy, mobile menu
   ══════════════════════════════════════════════════════════════ */

export function initNav() {
  const nav         = document.getElementById('main-nav');
  const menuBtn     = document.getElementById('menu-btn');
  const menuClose   = document.getElementById('menu-close');
  const mobileMenu  = document.getElementById('mobile-menu');
  const navLinks    = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!nav) return;

  // ── Scroll-aware nav background ──────────────────────────────
  const handleScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  // ── Mobile menu open ─────────────────────────────────────────
  function openMenu() {
    mobileMenu.classList.add('menu--open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.classList.add('is-open');
    document.body.classList.add('overflow-hidden');
    // Move focus into menu
    const firstLink = mobileMenu.querySelector('.mobile-link');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    mobileMenu.classList.remove('menu--open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
    menuBtn.focus();
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  // Close on mobile link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('menu--open')) {
      closeMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && mobileMenu.classList.contains('menu--open')) {
      closeMenu();
    }
  });

  // ── Smooth scroll for all anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Account for fixed nav height
      const navHeight = nav.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    });
  });

  // ── Scroll spy via IntersectionObserver ──────────────────────
  const sections = document.querySelectorAll('section[id]');

  if (sections.length === 0) return;

  const spyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove current from all
        navLinks.forEach(l => l.removeAttribute('aria-current'));

        // Set current on matching link
        const id = entry.target.id;
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.setAttribute('aria-current', 'page');
        }
      }
    });
  }, {
    rootMargin: '-35% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => spyObserver.observe(section));

  // ── Update footer year ────────────────────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
