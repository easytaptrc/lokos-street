/* Territorio Lokos Street — utilidades compartidas: íconos, encabezado, animaciones y tarjetas */
(function () {
  const S = (d, extra = '') => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const FILL = (d) => `<svg class="i" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;
  const ICONS = {
    utensils: S('<path d="M7 2v8a2 2 0 0 0 2 2v10M5 2v7M9 2v7M17 22V2c-2 0-3.5 2.5-3.5 6v5H17"/>'),
    star: FILL('<path d="M12 2l3.1 6.6 7 .7-5.3 4.7 1.5 7L12 17.3 5.7 21l1.5-7L2 9.3l7-.7z"/>'),
    cup: S('<path d="M5 8h14l-1.6 13H6.6zM4 8h16M12 8l2.5-6H18"/>'),
    corn: S('<path d="M12 2c2.8 0 4 4 4 9s-1.6 9-4 9-4-4-4-9 1.2-9 4-9zM8.4 8h7.2M8 12h8M8.4 16h7.2M12 2v18M8 20c-2.5-1-4-4-4-7.5 2.2 1.2 4 3.5 4 7.5zM16 20c2.5-1 4-4 4-7.5-2.2 1.2-4 3.5-4 7.5z"/>'),
    flame: S('<path d="M12 22a6 6 0 0 0 6-6c0-5-6-9-6-14 0 0-1.5 4-4 6.5C6.4 10 6 12 6 16a6 6 0 0 0 6 6zM12 22a2.5 2.5 0 0 0 2.5-2.5c0-2-2.5-3.5-2.5-5.5-1.2 1.5-2.5 3-2.5 5.5A2.5 2.5 0 0 0 12 22z"/>'),
    heart: S('<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>'),
    strawberry: S('<path d="M12 7.5c4 0 7 2 7 5.8 0 4.2-4.2 8.7-7 8.7s-7-4.5-7-8.7c0-3.8 3-5.8 7-5.8zM8.5 4.5 12 7.5l3.5-3M12 2v5.5M9.5 12.5h.01M14.5 12.5h.01M12 16h.01M9.8 18.5h.01M14.2 18.5h.01"/>'),
    facebook: FILL('<path d="M14 8.2h3V4.1h-3.2C10.8 4.1 9.4 6 9.4 8.8V11H7v4h2.4v7h4.1v-7h3l.5-4h-3.5V9c0-.5.3-.8.5-.8z"/>'),
    pin: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 1.8a7.2 7.2 0 0 0-7.2 7.2c0 5.3 7.2 13.2 7.2 13.2s7.2-7.9 7.2-13.2A7.2 7.2 0 0 0 12 1.8z"/><circle cx="12" cy="9" r="2.7" fill="#fff"/></svg>',
    pinLine: S('<path d="M12 22s7-7.4 7-12.6a7 7 0 0 0-14 0C5 14.6 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    bag: S('<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>'),
    plus: S('<path d="M12 5v14M5 12h14"/>', 'stroke-width="3"'),
    minus: S('<path d="M5 12h14"/>', 'stroke-width="3"'),
    arrow: S('<path d="M5 12h14M13 6l6 6-6 6"/>', 'stroke-width="2.8"'),
    close: S('<path d="M6 6l12 12M18 6 6 18"/>'),
    menu: S('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    clock: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    phone: S('<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>'),
    chat: S('<path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.3-4A8 8 0 1 1 20 11.5z"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
    info: S('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>'),
    crown: S('<path d="M3 19h18M4.5 16 3 7l5.2 4L12 4l3.8 7L21 7l-1.5 9z"/>'),
    squiggle: '<svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c20-8 30 6 50-1s32-7 50 0 30 6 48-1 30-6 48 1" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>',
  };
  const CAT_ICON = { tradicional: 'corn', elotes: 'corn', compartir: 'corn', chilito: 'flame', frappes: 'cup', premium: 'cup', frutales: 'cup', arma: 'strawberry', fresas: 'strawberry', infantil: 'star' };

  const money = n => `$${n}`;
  const img = id => `assets/img/products/${id}.webp`;
  const hasPhoto = id => window.LOKOS_PHOTOS && window.LOKOS_PHOTOS.has(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function fillIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach(el => { if (!el.dataset.done) { el.insertAdjacentHTML('afterbegin', ICONS[el.dataset.icon] || ''); el.dataset.done = 1; } });
  }
  function header() {
    const h = document.querySelector('.site-header'); if (!h) return;
    const on = () => h.classList.toggle('scrolled', window.scrollY > 8); on(); window.addEventListener('scroll', on, { passive: true });
    const t = h.querySelector('.menu-toggle'), ul = h.querySelector('nav ul');
    if (t) t.addEventListener('click', () => { const o = ul.classList.toggle('open'); t.setAttribute('aria-expanded', o); });
    ul && ul.querySelectorAll('a').forEach(a => a.addEventListener('click', () => ul.classList.remove('open')));
    const cfg = window.LOKOS_CONFIG || {};
    document.querySelectorAll('[data-link="facebook"]').forEach(a => { a.href = cfg.facebook || '#'; });
    document.querySelectorAll('[data-link="maps"]').forEach(a => { a.href = cfg.maps || '#'; });
  }
  function reveal() {
    const els = [...document.querySelectorAll('.reveal:not(.in)')];
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => {
      // whatever is already on screen shows right away; the rest animates in on scroll
      if (e.getBoundingClientRect().top < window.innerHeight) e.classList.add('in'); else io.observe(e);
    });
  }
  function categoryCard(cat, href) {
    const n = cat.items.length;
    return `<a class="cat-card c-${cat.color} reveal" href="${href}">
      <span class="count">${n} ${n === 1 ? 'opción' : 'opciones'}</span>
      <img src="${img(cat.img)}" alt="" loading="lazy">
      <span class="label"><span class="brush b${(cat.id.length % 3) + 1}">${esc(cat.short)}</span></span>
      <span class="go" style="position:absolute;right:14px;bottom:18px">${ICONS.arrow}</span>
    </a>`;
  }
  function priceHTML(n) { return `<span class="price">${money(n)}<small> MXN</small></span>`; }

  window.LOKOS = { ICONS, CAT_ICON, money, img, hasPhoto, esc, fillIcons, categoryCard, priceHTML };
  document.addEventListener('DOMContentLoaded', () => { fillIcons(); header(); reveal(); });
  window.LOKOS.reveal = reveal;
})();
