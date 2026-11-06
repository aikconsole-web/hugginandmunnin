/* ── Reading / Chapter page — interactive scripts ──────────────────────── */

(function () {

  /* ── Timeline ──────────────────────────────────────────────────────── */
  const timeline = document.getElementById('timeline');
  if (timeline) {
    timeline.addEventListener('click', e => {
      const item = (e.target as Element).closest<HTMLElement>('.read-timeline-item');
      if (!item) return;
      const key = item.dataset.entry;
      if (!key) return;

      // update active dot
      timeline.querySelectorAll('.read-timeline-item').forEach(el =>
        el.classList.toggle('active', el === item)
      );

      // show / hide entries
      document.querySelectorAll<HTMLElement>('.read-timeline-entry').forEach(entry => {
        entry.hidden = entry.id !== `tl-entry-${key}`;
      });
    });
  }

  /* ── Quiz ──────────────────────────────────────────────────────────── */
  const quiz = document.getElementById('quiz');
  if (quiz) {
    let answered = false;
    quiz.addEventListener('click', e => {
      if (answered) return;
      const btn = (e.target as Element).closest<HTMLElement>('.read-quiz-option');
      if (!btn) return;
      answered = true;

      const isCorrect = btn.dataset.answer === 'correct';
      btn.classList.add(isCorrect ? 'correct' : 'wrong');
      btn.setAttribute('aria-pressed', 'true');

      // reveal correct answer if wrong chosen
      if (!isCorrect) {
        quiz.querySelectorAll<HTMLElement>('.read-quiz-option').forEach(opt => {
          if (opt.dataset.answer === 'correct') opt.classList.add('correct');
        });
      }
    });
  }

  /* ── TOC scroll-spy ────────────────────────────────────────────────── */
  const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.read-toc a'));
  if (tocLinks.length) {
    const headings = tocLinks
      .map(a => document.getElementById(a.getAttribute('href')!.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    headings.forEach(h => obs.observe(h));
  }

  /* ── Theme buttons ─────────────────────────────────────────────────── */
  document.querySelectorAll<HTMLElement>('.read-theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme ?? 'vellum';
      document.querySelectorAll('.read-theme-btn').forEach(b =>
        b.classList.toggle('active', b === btn)
      );
      const page = document.querySelector<HTMLElement>('.read-page');
      if (!page) return;
      page.dataset.theme = theme;

      if (theme === 'night') {
        page.style.setProperty('--vellum-100', '#14110d');
        page.style.setProperty('--vellum-200', '#1c1810');
        page.style.setProperty('--vellum-300', '#2a2318');
        page.style.setProperty('--iron-ink',   '#e8e4d8');
        page.style.setProperty('--ink-soft',   '#b8ad98');
        page.style.setProperty('--oxblood',    '#c06040');
      } else if (theme === 'sepia') {
        page.style.setProperty('--vellum-100', '#e8dfc8');
        page.style.setProperty('--vellum-200', '#dfd5bc');
        page.style.setProperty('--vellum-300', '#cdc0a0');
        page.style.setProperty('--iron-ink',   '#1e1710');
        page.style.setProperty('--ink-soft',   '#3e3020');
        page.style.setProperty('--oxblood',    '#6b2d1c');
      } else {
        // vellum — reset to defaults
        page.style.removeProperty('--vellum-100');
        page.style.removeProperty('--vellum-200');
        page.style.removeProperty('--vellum-300');
        page.style.removeProperty('--iron-ink');
        page.style.removeProperty('--ink-soft');
        page.style.removeProperty('--oxblood');
      }
    });
  });

  /* ── Font-size buttons ─────────────────────────────────────────────── */
  const article = document.querySelector<HTMLElement>('.read-article');
  document.querySelectorAll<HTMLElement>('.read-font-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!article) return;
      const size = btn.dataset.font;
      if (size === 'sm')      article.style.fontSize = '14px';
      else if (size === 'lg') article.style.fontSize = '20px';
      else                    article.style.removeProperty('font-size');
    });
  });

})();
