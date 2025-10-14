window.addEventListener('scroll', () => {
  document.querySelectorAll('.fill').forEach(el => {
    const val = el.getAttribute('data-fill');
    el.style.width = val;
  });
});
