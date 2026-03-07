/* ══════════════════════════════════════════════════════════════
   ANIMATIONS · IntersectionObserver scroll reveal engine
   ══════════════════════════════════════════════════════════════ */

export function initAnimations() {
  const selectors = [
    '.reveal',
    '.reveal-left',
    '.reveal-right',
    '.reveal-scale'
  ].join(', ');

  const elements = document.querySelectorAll(selectors);

  if (elements.length === 0) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // animate once only
      }
    });
  }, {
    threshold: 0.10,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
