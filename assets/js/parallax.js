/* ══════════════════════════════════════════════════════════════
   PARALLAX · Subtle hero background parallax (desktop only)
   ══════════════════════════════════════════════════════════════ */

export function initParallax() {
  // Disable on mobile / reduced motion
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const slideshow = document.getElementById('hero-slideshow');
  if (!slideshow) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
        if (scrolled < heroHeight) {
          const rate = scrolled * 0.25;
          // Aplica parallax a todos los slides a la vez
          slideshow.querySelectorAll('.hero__slide').forEach(slide => {
            slide.style.transform = `translateY(${rate}px)`;
          });
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
