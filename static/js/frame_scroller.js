// Scroll-driven frame animation for the "Framework" section.
// The stage pins below the sticky top bar; each stretch of scrolling fades in the next frame
// on top of the previous ones. The frames build on each other, so stacking them (instead of
// cross-fading) keeps the shared parts of the diagram steady.

document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('framework-track');
  if (!track) return;

  const stage = track.querySelector('.framework-stage');
  const frames = Array.from(track.querySelectorAll('.framework-frame'));
  const dots = Array.from(track.querySelectorAll('.framework-dot'));
  const total = frames.length;

  // Scroll after pinning before the second frame appears.
  const PIN_DELAY = 120;
  let stepPx = 0;
  let stickyTop = 0;
  let shown = -1;
  let ticking = false;

  function layout() {
    // Pin once the whole stage is visible below the sticky top bar:
    // centered in the space under the bar if it fits, bottom-aligned if it is taller.
    const nav = document.getElementById('section-nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const spare = window.innerHeight - navHeight - stage.offsetHeight;
    stickyTop = spare >= 0 ? navHeight + Math.round(spare / 2) : window.innerHeight - stage.offsetHeight;
    stage.style.top = stickyTop + 'px';
    stepPx = Math.round(window.innerHeight * 0.35);
    // One step per frame after the first, plus a hold on the last frame.
    track.style.height = (stage.offsetHeight + PIN_DELAY + (total - 1) * stepPx + stepPx) + 'px';
    update();
  }

  function update() {
    ticking = false;
    const scrolled = stickyTop - track.getBoundingClientRect().top - PIN_DELAY;
    const current = Math.max(0, Math.min(total - 1, Math.floor(scrolled / stepPx) + 1));
    if (current === shown) return;
    shown = current;
    frames.forEach((frame, i) => frame.classList.toggle('is-shown', i <= current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener('resize', layout);
  // Image sizes settle once they load; lay out again then.
  new ResizeObserver(layout).observe(stage);
  layout();
});
