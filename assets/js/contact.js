/* ══════════════════════════════════════════════════════════════
   CONTACT · Async form submit — stays on page, shows feedback
   ══════════════════════════════════════════════════════════════ */

export function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Loading state
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        btn.textContent = '¡Mensaje enviado!';
        btn.style.background = '#2a7a4b';
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      btn.textContent = 'Error al enviar. Intentá de nuevo.';
      btn.style.background = '#8b2020';
      btn.disabled = false;
    }

    // Reset button after 4 seconds
    setTimeout(() => {
      btn.textContent = btn.getAttribute('data-original-text');
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  });

  // Save original button text for reset
  btn.setAttribute('data-original-text', btn.textContent);
}
