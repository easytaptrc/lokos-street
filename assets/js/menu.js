/* Territorio Lokos Street — página de menú: categorías, buscador y "Mi pedido" */
(function () {
  const L = window.LOKOS, M = window.LOKOS_MENU, I = L.ICONS;
  const $ = s => document.querySelector(s);

  // ---------- render ----------
  $('#cats').innerHTML = M.map(c => L.categoryCard(c, `#${c.id}`)).join('');
  $('#chips').innerHTML = M.map(c => `<a class="chip c-${c.color}" href="#${c.id}" data-cat="${c.id}">${L.esc(c.short)}</a>`).join('');

  const photo = (it, cat) => L.hasPhoto(it.id)
    ? `<img src="${L.img(it.id)}" alt="${L.esc(it.name)}" loading="lazy">`
    : `<span class="noimg">${I[L.CAT_ICON[cat.id]] || I.star}</span>`;

  function itemHTML(it, cat) {
    const buy = it.options
      ? `<div class="opts">${it.options.map((o, k) => `<button class="opt" data-add="${it.id}" data-opt="${k}" aria-label="Agregar ${L.esc(it.name)} ${L.esc(o.label)}">${L.esc(o.label)} <b>${L.money(o.price)}</b><span class="p">${I.plus}</span></button>`).join('')}</div>`
      : `<div class="row">${L.priceHTML(it.price)}<button class="add" data-add="${it.id}" aria-label="Agregar ${L.esc(it.name)}">${I.plus}</button></div>`;
    return `<article class="item c-${cat.color}" data-search="${L.esc((it.name + ' ' + it.desc + ' ' + cat.name).toLowerCase())}">
      <div class="ph">${it.hot ? `<span class="tag-hot">${I.flame} Favorito</span>` : ''}${photo(it, cat)}</div>
      <div class="body"><h3>${L.esc(it.name)}</h3><p>${L.esc(it.desc)}</p>${buy}</div>
    </article>`;
  }
  function extrasHTML(x) {
    return `<div class="extras">
      <div class="extra c-pink"><h4>Toppings</h4><div class="pills">${x.toppings.map(t => `<span>${L.esc(t)}</span>`).join('')}</div></div>
      <div class="extra c-pink"><h4>Jarabes</h4><div class="pills">${x.jarabes.map(t => `<span>${L.esc(t)}</span>`).join('')}</div></div>
      <div class="extra c-pink"><h4>Toppings premium</h4>${x.premium.map(t => `
        <div class="tier"><span class="tp">${t.price}</span><div><div class="ti">${t.imgs.map(i => `<img src="${L.img(i)}" alt="" loading="lazy">`).join('')}</div><div class="tn">${t.items.map(L.esc).join(' · ')}</div></div></div>`).join('')}
      </div>
    </div>`;
  }
  $('#sections').innerHTML = M.map(c => `
    <section class="cat-section c-${c.color}" id="${c.id}" data-cat="${c.id}">
      <div class="cat-head reveal">${L.hasPhoto(c.img) ? `<img class="cat-ill" src="${L.img(c.img)}" alt="">` : ''}<h2 class="display"><span class="brush b${(c.id.length % 3) + 1}">${L.esc(c.name)}</span></h2></div>
      <p class="cat-tagline">${L.esc(c.tagline)}</p>
      ${c.note ? `<div class="note">${I.info}<span>${L.esc(c.note)}</span></div>` : ''}
      <div class="items">${c.items.map(it => itemHTML(it, c)).join('')}</div>
      ${c.extras ? extrasHTML(c.extras) : ''}
    </section>`).join('');

  // ---------- active chip while scrolling ----------
  const chips = [...document.querySelectorAll('.chip')];
  const setActive = id => chips.forEach(ch => {
    const on = ch.dataset.cat === id; ch.classList.toggle('active', on);
    if (on) { const bar = $('#chips'); bar.scrollTo({ left: ch.offsetLeft - bar.clientWidth / 2 + ch.clientWidth / 2, behavior: 'smooth' }); }
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.dataset.cat); }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.cat-section').forEach(s => io.observe(s));
  }

  // ---------- search ----------
  $('#q').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    let any = false;
    document.querySelectorAll('.cat-section').forEach(sec => {
      let n = 0;
      sec.querySelectorAll('.item').forEach(it => {
        const hit = !q || it.dataset.search.normalize('NFD').replace(/[̀-ͯ]/g, '').includes(q);
        it.style.display = hit ? '' : 'none'; if (hit) n++;
      });
      const ex = sec.querySelector('.extras'); if (ex) ex.style.display = q ? 'none' : '';
      sec.style.display = n ? '' : 'none'; any = any || n > 0;
    });
    $('#empty').style.display = any ? 'none' : 'block';
    $('.menu-cats').style.display = q ? 'none' : '';
  });

  // ---------- Mi pedido ----------
  const find = id => { for (const c of M) for (const it of c.items) if (it.id === id) return { it, c }; };
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('lokos-pedido') || '[]'); } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem('lokos-pedido', JSON.stringify(cart)); } catch (e) { /* almacenamiento no disponible */ } };
  const lineInfo = l => { const f = find(l.id); if (!f) return null; const o = f.it.options ? f.it.options[l.opt] : null; return { ...f, label: o ? o.label : '', price: o ? o.price : f.it.price }; };

  function render() {
    cart = cart.filter(l => lineInfo(l));
    const n = cart.reduce((a, l) => a + l.q, 0), total = cart.reduce((a, l) => a + l.q * lineInfo(l).price, 0);
    $('#fab').classList.toggle('show', n > 0);
    $('#fab-n').textContent = n; $('#fab-t').textContent = L.money(total); $('#total').textContent = L.money(total);
    $('#lines').innerHTML = cart.length ? cart.map((l, k) => { const x = lineInfo(l); return `
      <div class="line">
        ${L.hasPhoto(x.it.id) ? `<img src="${L.img(x.it.id)}" alt="">` : `<span class="noimg" style="color:var(--pink)">${I[L.CAT_ICON[x.c.id]]}</span>`}
        <div class="nm">${L.esc(x.it.name)}<small>${x.label ? L.esc(x.label) + ' · ' : ''}${L.money(x.price)} c/u</small></div>
        <div class="qty"><button data-dec="${k}" aria-label="Quitar uno">${I.minus}</button><b>${l.q}</b><button data-inc="${k}" aria-label="Agregar uno">${I.plus}</button></div>
      </div>`; }).join('') : '<p class="empty">Tu pedido está vacío.<br>Toca <b style="color:var(--pink)">+</b> en tus antojos favoritos.</p>';
    save();
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-add]');
    if (a) {
      const id = a.dataset.add, opt = a.dataset.opt ? +a.dataset.opt : null;
      const l = cart.find(x => x.id === id && x.opt === opt); if (l) l.q++; else cart.push({ id, opt, q: 1 });
      render(); const f = $('#fab'); f.classList.remove('bump'); void f.offsetWidth; f.classList.add('bump');
      return;
    }
    const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
    if (inc) { cart[+inc.dataset.inc].q++; render(); }
    if (dec) { const k = +dec.dataset.dec; if (--cart[k].q <= 0) cart.splice(k, 1); render(); }
  });
  const open = o => { $('#drawer').classList.toggle('open', o); $('#bg').classList.toggle('open', o); $('#drawer').setAttribute('aria-hidden', !o); };
  $('#fab').addEventListener('click', () => open(true));
  $('#close').addEventListener('click', () => open(false));
  $('#bg').addEventListener('click', () => open(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') open(false); });
  $('#clear').addEventListener('click', () => { cart = []; render(); });
  render();
})();
