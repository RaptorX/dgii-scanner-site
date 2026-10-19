// Motion is finite and follows the user's system preference.
(() => {
 const preference = matchMedia('(prefers-reduced-motion: reduce)');
 const sync = () => { document.documentElement.dataset.motion = preference.matches ? 'off' : 'on'; };
 sync(); preference.addEventListener('change', sync);
 if (!('IntersectionObserver' in window)) return;
 const observer = new IntersectionObserver(entries => {
  for (const entry of entries) entry.target.classList.toggle('is-visible', entry.isIntersecting);
 }, {threshold: 0.12});
 document.querySelectorAll('.hero, .split-story, .story-visual').forEach(x => observer.observe(x));
})();
