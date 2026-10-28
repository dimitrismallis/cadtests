// Highlights the link in the sticky top bar for the section currently in view.

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('section-nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('.section-link'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let ticking = false;

  function update() {
    ticking = false;
    // A section is current once its top has passed just below the bar.
    const line = nav.offsetHeight + 80;
    let current = -1;
    sections.forEach(function(section, i) {
      if (section && section.getBoundingClientRect().top <= line) current = i;
    });
    // The last sections are short; at the very bottom of the page, the last one is current.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = sections.length - 1;
    links.forEach((link, i) => link.classList.toggle('is-active', i === current));
    // On narrow screens the links scroll sideways; keep the active one in view.
    if (current >= 0) {
      const link = links[current];
      const bar = link.parentElement;
      if (link.offsetLeft < bar.scrollLeft || link.offsetLeft + link.offsetWidth > bar.scrollLeft + bar.clientWidth) {
        bar.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' });
      }
    }
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
});
