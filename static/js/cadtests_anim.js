// Scroll-driven reveal of the CADTests for the example in window.CADTESTS_EXAMPLE.
//
// Desktop: the stage (prompt, generated model and test window) pins to the viewport.
// Scrolling through the track then moves only the test list, 1:1 with the page, and each
// test reveals and runs as it rises into view. "Passed All Tests" comes last, before unpinning.
// Scrolling back up resets the tests, so they replay on the way down.
// Phones: no pinning; each card reveals as it scrolls into view.

document.addEventListener('DOMContentLoaded', function() {
  const example = window.CADTESTS_EXAMPLE;
  const list = document.getElementById('cadtests-list');
  if (!example || !list) return;

  const track = document.getElementById('cadtests-track');
  const testWindow = document.getElementById('cadtests-window');
  const counter = document.getElementById('cadtests-counter');
  const summary = document.getElementById('cadtests-summary');
  const total = example.tests.length;
  const isNarrow = window.matchMedia('(max-width: 768px)').matches;

  document.getElementById('cadtests-prompt').textContent = example.prompt;

  example.tests.forEach(function(test, idx) {
    const card = document.createElement('div');
    card.className = 'cadtest-card';
    card.innerHTML = `
      <div class="cadtest-header">
        <span class="cadtest-index">Test ${idx + 1}</span>
        <span class="cadtest-heading">
          <span class="cadtest-type"></span>
          <span class="cadtest-title"></span>
        </span>
        <span class="cadtest-status is-pending">Queued</span>
      </div>
      ${test.code ? '<pre><code class="language-python"></code></pre>' : ''}
      <div class="cadtest-log"></div>`;
    card.querySelector('.cadtest-type').textContent = test.type || '';
    card.querySelector('.cadtest-title').textContent = test.title;
    if (test.code) card.querySelector('code').textContent = test.code;
    card.querySelector('.cadtest-log').textContent = test.log;
    list.appendChild(card);
  });

  if (window.hljs) {
    list.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
  }

  const cards = Array.from(list.querySelectorAll('.cadtest-card'));
  // Per card: 0 = hidden, 1 = revealed and running, 2 = executed.
  const state = cards.map(() => 0);
  const timers = cards.map(() => []);
  let summaryWanted = isNarrow;

  function updateCounter() {
    const executed = state.filter(s => s === 2).length;
    const passed = state.filter((s, i) => s === 2 && example.tests[i].passed).length;
    counter.textContent = `${executed} / ${total} executed · ${passed} passed`;
    if (executed === total && summaryWanted) {
      const allPassed = passed === total;
      summary.className = 'cadtests-summary is-shown ' + (allPassed ? 'is-pass' : 'is-fail');
      summary.innerHTML = `<strong>Passed All Tests:</strong> ${allPassed ? 'True' : 'False'}`;
    } else {
      summary.className = 'cadtests-summary';
    }
  }

  function reveal(i, delay) {
    const card = cards[i];
    const test = example.tests[i];
    const status = card.querySelector('.cadtest-status');
    state[i] = 1;
    timers[i].push(setTimeout(function() {
      card.classList.add('is-visible');
      status.className = 'cadtest-status is-running';
      status.innerHTML = '<span class="cadtest-spinner"></span>Running';
    }, delay));
    timers[i].push(setTimeout(function() {
      status.className = 'cadtest-status ' + (test.passed ? 'is-pass' : 'is-fail');
      status.textContent = test.passed ? '✓ Passed' : '✗ Failed';
      card.classList.add(test.passed ? 'has-passed' : 'has-failed');
      state[i] = 2;
      updateCounter();
    }, delay + 700));
  }

  function hide(i) {
    const card = cards[i];
    const status = card.querySelector('.cadtest-status');
    timers[i].forEach(clearTimeout);
    timers[i] = [];
    state[i] = 0;
    card.classList.remove('is-visible', 'has-passed', 'has-failed');
    status.className = 'cadtest-status is-pending';
    status.textContent = 'Queued';
  }

  // Show cards 0..idx and hide the rest. Newly shown cards run in order,
  // so fast scrolling never skips a test, and scrolling back up resets them.
  function showUpTo(idx) {
    let delay = 0;
    for (let i = 0; i < total; i++) {
      if (i <= idx && state[i] === 0) {
        reveal(i, delay);
        delay += 250;
      } else if (i > idx && state[i] !== 0) {
        hide(i);
      }
    }
    updateCounter();
  }

  updateCounter();

  if (isNarrow) {
    let shownUpTo = -1;
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        shownUpTo = Math.max(shownUpTo, cards.indexOf(entry.target));
        showUpTo(shownUpTo);
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -20% 0px' });
    cards.forEach(card => observer.observe(card));
    return;
  }

  const stage = track.querySelector('.cadtests-stage');
  const left = document.getElementById('cadtests-left');

  // Scroll after pinning before the tests start moving.
  const PIN_DELAY = 80;
  // Viewport offset at which the stage pins.
  let stickyTop = 0;
  // The list starts this far down the test window and scrolls up 1:1 with the page.
  let startY = 0;
  // Total scroll that moves the list from startY until the last card sits at the bottom.
  let travel = 0;
  // Card tops within the list, cached because they only change on layout.
  let tops = [];

  function measure() {
    tops = cards.map(c => c.offsetTop);
    const last = cards[total - 1];
    const maxOffset = Math.max(0, last.offsetTop + last.offsetHeight - testWindow.clientHeight + 8);
    startY = Math.round(testWindow.clientHeight * 0.6);
    travel = startY + maxOffset;
  }

  function layout() {
    // The test window is as tall as the prompt + model column next to it.
    testWindow.style.height = left.offsetHeight + 'px';
    // Pin once the whole stage is visible below the sticky top bar:
    // centered in the space under the bar if it fits, bottom-aligned if it is taller.
    const nav = document.getElementById('section-nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const spare = window.innerHeight - navHeight - stage.offsetHeight;
    stickyTop = spare >= 0 ? navHeight + Math.round(spare / 2) : window.innerHeight - stage.offsetHeight;
    stage.style.top = stickyTop + 'px';
    measure();
    // Pinned for the delay, the list travel, then a hold on the summary.
    const hold = Math.round(window.innerHeight * 0.6);
    track.style.height = (stage.offsetHeight + PIN_DELAY + travel + hold) + 'px';
    onScroll();
  }

  // Redo the layout if the prompt + model column changes height.
  new ResizeObserver(layout).observe(left);

  let shown = -1;
  let ticking = false;

  function update() {
    ticking = false;
    // Scroll spent moving the list, clamped to its travel.
    const scrolled = stickyTop - track.getBoundingClientRect().top - PIN_DELAY;
    const s = Math.max(0, Math.min(travel, scrolled));
    const listY = startY - s;
    list.style.transform = `translateY(${listY}px)`;

    // A card reveals and runs once its top rises past 80% of the test window.
    const revealLine = testWindow.clientHeight * 0.8;
    let current = -1;
    if (scrolled >= 0) {
      while (current + 1 < total && tops[current + 1] + listY < revealLine) current++;
    }
    if (current !== shown) {
      shown = current;
      showUpTo(current);
    }
    if ((scrolled >= travel) !== summaryWanted) {
      summaryWanted = scrolled >= travel;
      updateCounter();
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', layout);
  layout();
});
