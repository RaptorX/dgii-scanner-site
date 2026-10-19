// Save only the visitor's explicit language choice; default to Spanish.
(() => {
 const select = document.querySelector('#language');
 const key = 'dgii-site-language';
 let language = 'es';
 try { const saved = localStorage.getItem(key); if (saved === 'en' || saved === 'es') language = saved; } catch {}
 const apply = value => {
  document.documentElement.lang = value;
  document.querySelectorAll('[data-en][data-es]').forEach(node => { node.textContent = node.dataset[value]; });
  select.value = value;
  document.querySelectorAll('[data-alt-en]').forEach(img => { img.alt = img.dataset[value === 'es' ? 'altEs' : 'altEn']; });
  document.querySelectorAll('[data-label-en]').forEach(node => { node.setAttribute('aria-label', node.dataset[value === 'es' ? 'labelEs' : 'labelEn']); });
  select.setAttribute('aria-label', value === 'es' ? 'Idioma' : 'Language');
  document.querySelectorAll('img[data-localized-art]').forEach(img => { img.src = img.dataset[value === 'es' ? 'artEs' : 'artEn']; });
  const titles = { 'privacy.html': ['Política de privacidad', 'Privacy policy'], 'terms.html': ['Términos de uso', 'Terms of use'] };
  const page = location.pathname.split('/').pop();
  const title = titles[page] || ['Tus comprobantes, más claros', 'Personal receipts, in clear view'];
  document.title = title[value === 'es' ? 0 : 1] + ' · DGII Scanner';
 };
 select.addEventListener('change', () => {
  language = select.value; apply(language);
  try { localStorage.setItem(key, language); } catch {}
 });
 apply(language);
})();
