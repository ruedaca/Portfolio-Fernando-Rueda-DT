/* ══════════════════════════════════════════════════════════════
   SLIDESHOW · Carrusel de fondo del hero con fade suave
   ══════════════════════════════════════════════════════════════ */

export function initSlideshow() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  // Respeta prefers-reduced-motion: no cambia de slide
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let current = 0;
  const INTERVAL = 5000;   // ms entre cambios
  let timer = null;

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('hero__slide--active');
  }

  function next() {
    goTo(current + 1);   // siempre avanza, sin pausa en hover
  }

  function startTimer() {
    timer = setInterval(next, INTERVAL);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  // Pausa solo cuando la pestaña no está visible (ahorro de CPU)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimer();
    } else {
      startTimer();
    }
  });

  // Arranca
  startTimer();
}
