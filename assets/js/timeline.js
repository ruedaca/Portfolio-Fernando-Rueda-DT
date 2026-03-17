/* ══════════════════════════════════════════════════════════════
   TIMELINE · Career timeline interactivity
   ══════════════════════════════════════════════════════════════ */

import { applyTranslations, getCurrentLang } from './i18n.js';

export function initTimeline() {
  const nodes       = document.querySelectorAll('.timeline-node');
  const detailPanel = document.getElementById('timeline-detail');
  const dataWrap    = document.querySelector('.timeline-data');

  if (!nodes.length || !detailPanel || !dataWrap) return;

  let activeNode = null;

  function activateNode(node) {
    // Deactivate all
    nodes.forEach(n => {
      n.classList.remove('timeline-node--active');
      n.setAttribute('aria-pressed', 'false');
    });

    // Activate selected
    node.classList.add('timeline-node--active');
    node.setAttribute('aria-pressed', 'true');
    activeNode = node;

    // Find corresponding template
    const clubId   = node.dataset.clubId;
    const template = dataWrap.querySelector(`template[data-club-id="${clubId}"]`);

    if (!template) return;

    // Clone and inject template content
    const content = template.content.cloneNode(true);
    detailPanel.innerHTML = '';
    detailPanel.appendChild(content);
    detailPanel.classList.add('detail--visible');
    detailPanel.classList.add('in-view');

    // Apply current language to injected content
    applyTranslations(getCurrentLang());
  }

  // Attach click listeners
  nodes.forEach(node => {
    node.addEventListener('click', () => activateNode(node));

    // Keyboard support
    node.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateNode(node);
      }
    });
  });

  // Re-render active node on language change
  document.getElementById('lang-btn')?.addEventListener('click', () => {
    if (activeNode) {
      setTimeout(() => activateNode(activeNode), 0);
    }
  });

  // Activate first node on load
  if (nodes[0]) {
    activateNode(nodes[0]);
  }
}
