/* Hrafn — The Raven Library · main page behaviour
   1. Species Atlas selection (click + arrow keys), URL ?species=<id>
   2. Pause the hero animation when off-screen or when the tab is hidden
   3. Flock size: html[data-flock] = few | some | many (remembered in localStorage)
   Everything degrades gracefully: without JS the page shows the Common Raven. */

(function () {
  'use strict';

  const SPECIES: Array<{
    id: string; name: string; latin: string; rune: string;
    region: string; mark: string; size: string; num: string;
    tail: string; neck: boolean; thick: boolean; brown: boolean; whiteEye: boolean;
  }> = (window as any).HRAFN_SPECIES || [];

  function flags(s: typeof SPECIES[0]) {
    return {
      tWedge: s.tail === 'wedge',
      tFan:   s.tail === 'fan',
      tShort: s.tail === 'short',
      nk:     !!s.neck,
      bN:     !s.thick,
      bT:     !!s.thick,
      bn:     !!s.brown,
      pupil:  !!s.whiteEye,
    };
  }

  /* ── 1. Species Atlas ─────────────────────────────────────────────────── */
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sp[data-i]'));
  const panel   = document.getElementById('atlas-detail');

  function select(i: number, opts?: { silent?: boolean; noUrl?: boolean }) {
    const s = SPECIES[i];
    if (!s || !panel) return;

    buttons.forEach((b, k) => {
      const on = k === i;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });

    panel.querySelectorAll<HTMLElement>('[data-f]').forEach(el => {
      const k = el.dataset.f as string;
      if (k === 'href') {
        (el as HTMLAnchorElement).href = `/species/${s.id}/`;
      } else if (k in s) {
        el.textContent = String((s as any)[k]);
      }
    });

    const f = flags(s);
    panel.querySelectorAll<HTMLElement>('[data-flag]').forEach(el => {
      const k = el.dataset.flag as keyof typeof f;
      el.className = f[k] ? '' : 'off';
    });

    panel.querySelectorAll<SVGCircleElement>('[data-flag-eye]').forEach(el => {
      el.setAttribute('fill', s.whiteEye ? '#ece7da' : '#16181e');
    });

    panel.querySelectorAll<HTMLElement>('[data-aria-suffix]').forEach(el => {
      el.setAttribute('aria-label', s.name + el.dataset.ariaSuffix);
    });

    // Entrance animation on change
    if (!opts?.silent) {
      const bird = panel.querySelector<HTMLElement>('.detail-raven');
      bird?.animate?.(
        [{ opacity: 0, transform: 'translateX(-40px)' }, { opacity: 1, transform: 'translateX(0)' }],
        { duration: 600, easing: 'cubic-bezier(.2,.7,.1,1)' },
      );
    }

    if (!opts?.noUrl && history.replaceState) {
      const u = new URL(location.href);
      u.searchParams.set('species', s.id);
      history.replaceState(null, '', u);
    }
  }

  buttons.forEach((b, i) => {
    b.addEventListener('click', () => select(i));
    b.addEventListener('keydown', e => {
      let n: number | null = null;
      if (e.key === 'ArrowDown'  || e.key === 'ArrowRight') n = (i + 1) % buttons.length;
      if (e.key === 'ArrowUp'    || e.key === 'ArrowLeft')  n = (i - 1 + buttons.length) % buttons.length;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End')  n = buttons.length - 1;
      if (n !== null) { e.preventDefault(); select(n); buttons[n].focus(); }
    });
  });

  const fromUrl = new URLSearchParams(location.search).get('species');
  const start   = Math.max(0, SPECIES.findIndex(s => s.id === fromUrl));
  select(start, { silent: true, noUrl: !fromUrl });

  /* ── 2. Pause hero when not visible ──────────────────────────────────── */
  const hero        = document.querySelector<HTMLElement>('.hero');
  let   heroVisible = true;

  function syncPause() {
    if (hero) hero.classList.toggle('is-paused', !heroVisible || document.hidden);
  }

  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      syncPause();
    }, { threshold: 0 }).observe(hero);
  }
  document.addEventListener('visibilitychange', syncPause);

  /* ── 3. Flock size ────────────────────────────────────────────────────── */
  const root     = document.documentElement;
  let   savedFlock: string | null = null;
  try { savedFlock = localStorage.getItem('hrafn.flock'); } catch {}
  const lowPower =
    ((navigator as any).connection?.saveData) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  root.setAttribute('data-flock', savedFlock || (lowPower ? 'few' : 'many'));

  (window as any).HRAFN = {
    setFlock(v: string) {
      if (!['few', 'some', 'many'].includes(v)) return;
      root.setAttribute('data-flock', v);
      try { localStorage.setItem('hrafn.flock', v); } catch {}
    },
    selectSpecies(id: string) {
      const i = SPECIES.findIndex(s => s.id === id);
      if (i >= 0) select(i);
    },
  };
})();
