// Progressive enhancement: content stays visible if scripting is unavailable.
(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const button = document.querySelector('.motion-toggle');
  const targets = document.querySelectorAll('.hero, .split-story, .story-visual');
  let paused = preference.matches;
  const sync = () => {
    const stopped = paused || preference.matches;
    root.dataset.motion = stopped ? 'off' : 'on';
    button.textContent = stopped ? 'Enable animations' : 'Pause animations';
    button.setAttribute('aria-pressed', String(stopped));
    button.disabled = preference.matches;
    if (preference.matches) button.textContent = 'Reduced motion enabled';
  };
  if (!button || !('IntersectionObserver' in window)) return;
  button.hidden = false;
  button.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', () => { paused = preference.matches; sync(); });
  sync();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    }
  }, { threshold: 0.12 });
  targets.forEach(target => observer.observe(target));
})();
