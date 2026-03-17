/* ══════════════════════════════════════════════════════════════
   GALLERY — arrow controls to jump forward/backward
   ══════════════════════════════════════════════════════════════ */

export function initGallery() {
  const track  = document.getElementById('gallery-track');
  const btnPrev = document.getElementById('gallery-prev');
  const btnNext = document.getElementById('gallery-next');

  if (!track || !btnPrev || !btnNext) return;

  const DURATION = 200; // must match CSS animation duration in seconds

  function getCurrentX() {
    const matrix = new DOMMatrix(getComputedStyle(track).transform);
    return matrix.m41;
  }

  function jumpTo(newX) {
    const halfWidth = track.scrollWidth / 2;

    // Clamp within valid range
    if (newX > 0) newX = 0;
    if (newX < -halfWidth) newX = -halfWidth;

    // Calculate delay so animation resumes from newX position
    const progress = Math.abs(newX) / halfWidth;
    const delay = -(progress * DURATION);

    // Smooth slide to new position
    track.style.animation = 'none';
    track.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = `translateX(${newX}px)`;

    // After transition ends, resume auto-scroll from new position
    setTimeout(() => {
      track.style.transition = '';
      track.style.transform = '';
      track.style.animation = `gallery-scroll ${DURATION}s linear infinite`;
      track.style.animationDelay = `${delay}s`;
    }, 720);
  }

  btnNext.addEventListener('click', () => {
    const item = track.querySelector('.gallery-item');
    const jumpAmount = item ? (item.offsetWidth + 16) * 3 : 900;
    jumpTo(getCurrentX() - jumpAmount);
  });

  btnPrev.addEventListener('click', () => {
    const item = track.querySelector('.gallery-item');
    const jumpAmount = item ? (item.offsetWidth + 16) * 3 : 900;
    jumpTo(getCurrentX() + jumpAmount);
  });
}
