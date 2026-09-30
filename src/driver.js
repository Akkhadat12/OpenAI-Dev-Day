// DOM driver: maps engine requests to Web Animations on the inlined storyboard SVGs.
// Endpoints always equal the base (un-animated) DOM state, so cancelling any
// animation lands exactly on the settled endpoint. No timers and no rAF loops:
// a held scene owns zero running animations.

import { TIMING } from './scene-data.js';

const { entryMs, revealMs, exitMs, easing, entryShiftPx } = TIMING;

export function createDomDriver({ stage, scenes, live, reducedMotion }) {
  const sections = scenes.map((s) => stage.querySelector(`.scene[data-scene="${s.id}"]`));
  const beatGroups = sections.map((sec) => {
    const byIndex = [];
    sec.querySelectorAll(':scope > svg > g.beat').forEach((g) => {
      byIndex[Number(g.dataset.beat)] = g;
    });
    return byIndex;
  });
  const running = new Set();
  let announced = -1;

  const track = (animation) => {
    running.add(animation);
    const forget = () => running.delete(animation);
    animation.finished.then(forget, forget);
    return animation;
  };

  const animate = (el, keyframes, options) =>
    track(el.animate(keyframes, { easing, fill: 'backwards', ...options }));

  function cancelAll() {
    for (const a of running) a.cancel();
    running.clear();
  }

  function announce(index) {
    if (announced === index) return;
    announced = index;
    const desc = sections[index].querySelector('desc');
    if (live && desc) live.textContent = desc.textContent;
  }

  function setBeatsVisible(index, beat) {
    beatGroups[index].forEach((g, k) => {
      g.style.display = k <= beat ? '' : 'none';
    });
  }

  function showScene(index) {
    sections.forEach((sec, i) => {
      sec.hidden = i !== index;
      sec.style.opacity = '';
      sec.style.transform = '';
    });
    announce(index);
  }

  const handle = (animations, done) => {
    Promise.all(animations.map((a) => a.finished)).then(
      () => done(),
      () => {} // cancelled: the engine already owns the state
    );
    return { cancel: () => animations.forEach((a) => a.cancel()) };
  };

  // Reveal choreography for one beat group.
  function revealAnimations(index, beat) {
    const group = beatGroups[index][beat];
    const plan = scenes[index].reveals[beat - 1];
    const [dx, dy] = plan.from;
    const order = plan.order ?? 'arrow-last';
    const hasArrow = group.querySelector('[data-role="arrow"]') !== null;
    const objectWindow = !hasArrow || order === 'together' ? [0, revealMs] : order === 'arrow-first' ? [250, revealMs] : [0, 400];
    const arrowWindow = !hasArrow || order === 'together' ? [0, revealMs] : order === 'arrow-first' ? [0, 400] : [250, revealMs];
    const animations = [];

    for (const child of group.children) {
      if (child.matches('[data-role="arrow"]')) {
        const [start, end] = arrowWindow;
        const line = child.querySelector('path[fill="none"]');
        const head = child.querySelector('path:not([fill="none"])');
        const length = line.getTotalLength();
        const dash = `${length}`;
        animations.push(
          animate(
            line,
            [
              { strokeDasharray: dash, strokeDashoffset: length },
              { strokeDasharray: dash, strokeDashoffset: 0 },
            ],
            { delay: start, duration: (end - start) * 0.9 }
          )
        );
        // The head never appears before its line has been drawn.
        animations.push(
          animate(head, [{ opacity: 0 }, { opacity: 1 }], {
            delay: start + (end - start) * 0.9,
            duration: (end - start) * 0.1,
            easing: 'linear',
          })
        );
        continue;
      }
      const [start, end] = objectWindow;
      if (plan.special === 'ring' && child.matches('[data-role="harness"]')) {
        // Radius grows r200 -> r236 while fading in; stroke width stays 4 logical px.
        animations.push(
          animate(
            child,
            [
              { opacity: 0, r: '200px' },
              { opacity: 1, r: '236px' },
            ],
            { delay: start, duration: end - start }
          )
        );
        continue;
      }
      const from = dx === 0 && dy === 0 ? 'none' : `translate(${dx}px, ${dy}px)`;
      animations.push(
        animate(
          child,
          [
            { opacity: 0, transform: from },
            { opacity: 1, transform: 'none' },
          ],
          { delay: start, duration: end - start }
        )
      );
    }
    return animations;
  }

  return {
    get reducedMotion() {
      return reducedMotion();
    },

    // Instant settled state: scene visible, beats 0..beat shown, nothing animating.
    showState(index, beat) {
      cancelAll();
      showScene(index);
      setBeatsVisible(index, beat);
      stage.dataset.scene = scenes[index].id;
      stage.dataset.beat = String(beat);
    },

    runEntry(index, done) {
      cancelAll();
      showScene(index);
      setBeatsVisible(index, 0);
      stage.dataset.scene = scenes[index].id;
      stage.dataset.beat = '0';
      if (reducedMotion()) {
        done();
        return { cancel() {} };
      }
      const a = animate(
        sections[index],
        [
          { opacity: 0, transform: `translateY(${entryShiftPx}px)` },
          { opacity: 1, transform: 'none' },
        ],
        { duration: entryMs }
      );
      return handle([a], done);
    },

    runBeat(index, beat, done) {
      if (reducedMotion()) {
        this.showState(index, beat);
        done();
        return { cancel() {} };
      }
      setBeatsVisible(index, beat);
      stage.dataset.beat = String(beat);
      return handle(revealAnimations(index, beat), done);
    },

    runExit(index, done) {
      if (reducedMotion()) {
        done();
        return { cancel() {} };
      }
      const a = animate(sections[index], [{ opacity: 1 }, { opacity: 0 }], {
        duration: exitMs,
        fill: 'forwards',
      });
      // The forwards fill is released in the same task that starts the next entry
      // (which hides this scene), so nothing lingers and nothing repaints in between.
      a.finished.then(
        () => {
          a.cancel();
          done();
        },
        () => {}
      );
      return { cancel: () => a.cancel() };
    },
  };
}
