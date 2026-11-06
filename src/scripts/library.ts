/* ── Library explorer — client-side filter ──────────────────────────────── */

(function () {
  const grid   = document.getElementById('lib-grid')!;
  const count  = document.getElementById('lib-count')!;
  const empty  = document.getElementById('lib-empty')!;
  const search = document.getElementById('lib-search') as HTMLInputElement;
  const tabs   = document.getElementById('lib-tabs')!;

  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.lib-card'));
  const total = cards.length;

  let activeCollection = 'all';
  let activeRegion     = 'all';
  let query            = '';

  function filter() {
    let visible = 0;

    cards.forEach(card => {
      const col    = card.dataset.collection ?? '';
      const region = card.dataset.region ?? '';
      const title  = card.dataset.title  ?? '';
      const sub    = card.dataset.subtitle ?? '';
      const body   = card.dataset.body   ?? '';

      const colMatch = activeCollection === 'all' || col === activeCollection;
      // When a region chip is active, global cards always show alongside region-specific ones
      const regionMatch = activeRegion === 'all' || region === activeRegion || region === 'global';
      const q = query.trim().toLowerCase();
      const textMatch = !q || title.includes(q) || sub.includes(q) || body.includes(q);

      const show = colMatch && regionMatch && textMatch;
      if (show) {
        delete card.dataset.hidden;
        visible++;
      } else {
        card.dataset.hidden = '';
      }
    });

    count.textContent = `Showing ${visible} of ${total}`;
    empty.hidden = visible > 0;
  }

  // ── Collection tabs ────────────────────────────────────────────────────
  tabs.addEventListener('click', e => {
    const btn = (e.target as Element).closest<HTMLElement>('.lib-tab');
    if (!btn) return;
    activeCollection = btn.dataset.collection ?? 'all';
    tabs.querySelectorAll('.lib-tab').forEach(t => {
      t.classList.toggle('active', t === btn);
      t.setAttribute('aria-selected', t === btn ? 'true' : 'false');
    });
    filter();
  });

  // ── Region chips ───────────────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>('.lib-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeRegion = chip.dataset.region ?? 'all';
      document.querySelectorAll('.lib-chip').forEach(c => {
        c.classList.toggle('active', c === chip);
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      filter();
    });
  });

  // ── TOC sidebar ────────────────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>('.lib-toc-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const col = btn.dataset.tocCollection ?? 'all';
      activeCollection = col;
      document.querySelectorAll<HTMLElement>('.lib-tab').forEach(t => {
        const match = t.dataset.collection === col;
        t.classList.toggle('active', match);
        t.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      document.querySelectorAll('.lib-toc-item').forEach(b =>
        b.classList.toggle('active', b === btn)
      );
      filter();
      document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Search ─────────────────────────────────────────────────────────────
  search?.addEventListener('input', () => {
    query = search.value;
    filter();
  });

  filter();
})();
