/* ══════════════════════════════════════════════════════════════
   MEDIA · Tab toggle + lazy video embed
   ══════════════════════════════════════════════════════════════ */

export function initMedia() {
  initTabs();
  initVideoEmbeds();
}

// ── Tab panel toggle ──────────────────────────────────────────

function initTabs() {
  const tabs   = document.querySelectorAll('.media-tab');
  const panels = document.querySelectorAll('.media-panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');

      // Update tab states
      tabs.forEach(t => {
        t.classList.remove('media-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('media-tab--active');
      tab.setAttribute('aria-selected', 'true');

      // Show/hide panels
      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove('media-panel--hidden');
          // Re-trigger reveal animations for newly shown cards
          panel.querySelectorAll('.reveal:not(.in-view)').forEach(el => {
            el.classList.add('in-view');
          });
        } else {
          panel.classList.add('media-panel--hidden');
        }
      });
    });

    // Keyboard navigation between tabs
    tab.addEventListener('keydown', e => {
      const tabsArray = Array.from(tabs);
      const idx = tabsArray.indexOf(tab);
      let next;

      if (e.key === 'ArrowRight') {
        next = tabsArray[(idx + 1) % tabsArray.length];
      } else if (e.key === 'ArrowLeft') {
        next = tabsArray[(idx - 1 + tabsArray.length) % tabsArray.length];
      }

      if (next) {
        next.click();
        next.focus();
      }
    });
  });
}

// ── Lazy YouTube/Vimeo embed ──────────────────────────────────

function initVideoEmbeds() {
  document.querySelectorAll('.media-card--video').forEach(card => {
    const embedUrl = card.dataset.embedUrl;
    if (!embedUrl) return;

    function activateEmbed() {
      const thumbWrap = card.querySelector('.media-card__thumbnail-wrap');
      if (!thumbWrap) return;

      // Build iframe
      const iframe = document.createElement('iframe');
      iframe.src = `${embedUrl}?autoplay=1&rel=0&modestbranding=1`;
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.setAttribute('title', card.querySelector('h4')?.textContent || 'Video');
      iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border:none;display:block;';

      // Replace thumbnail with iframe
      thumbWrap.replaceWith(iframe);
      card.classList.add('media-card--playing');
      card.style.cursor = 'default';

      // Remove click listener to prevent double-trigger
      card.removeEventListener('click', activateEmbed);
      card.removeEventListener('keydown', handleKeydown);
    }

    function handleKeydown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateEmbed();
      }
    }

    card.addEventListener('click', activateEmbed);
    card.addEventListener('keydown', handleKeydown);
  });
}
