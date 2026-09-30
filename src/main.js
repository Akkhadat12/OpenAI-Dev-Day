// Wiring only: stage fitting, font readiness, hidden keyboard controls.
// No visible controls, hints or overlays are created by this file.

import { SCENES } from './scene-data.js';
import { createEngine } from './engine.js';
import { createDomDriver } from './driver.js';

const LOGICAL_W = 1920;
const LOGICAL_H = 1080;

const viewport = document.getElementById('viewport');
const stage = document.getElementById('stage');
const live = document.getElementById('scene-live');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const driver = createDomDriver({ stage, scenes: SCENES, live, reducedMotion: () => motionQuery.matches });
const engine = createEngine({
  scenes: SCENES,
  driver,
  onChange: (s) => {
    stage.dataset.phase = s.phase;
  },
});

// Letterboxed fit: scale = min(vw/1920, vh/1080); never changes scene or beat.
function fit() {
  const scale = Math.min(window.innerWidth / LOGICAL_W, window.innerHeight / LOGICAL_H);
  stage.style.setProperty('--fit', String(scale));
}
fit();
window.addEventListener('resize', fit);

// Keys: Space and R are mandatory. Left Arrow and F are optional conveniences.
const isEditable = (el) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName));

function keyAction(event) {
  if (event.code === 'Space' || event.key === ' ') return 'space';
  if (event.code === 'KeyR') return 'reset';
  if (event.code === 'ArrowLeft') return 'previous';
  if (event.code === 'KeyF') return 'fullscreen';
  return null;
}

const held = new Set();

function toggleFullscreen() {
  try {
    const request = document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen();
    // Rejection is silent: no panel, and scene/beat are untouched either way.
    if (request && typeof request.catch === 'function') request.catch(() => {});
  } catch {
    /* fullscreen unavailable */
  }
}

window.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
  if (isEditable(event.target)) return;
  const action = keyAction(event);
  if (!action) return;
  // Only keys the stage handles are captured (Space would otherwise scroll).
  if (action === 'space' || action === 'previous') event.preventDefault();
  // One physical press = at most one action; auto-repeat waits for key release.
  if (event.repeat || held.has(event.code)) return;
  held.add(event.code);
  if (action === 'fullscreen') toggleFullscreen();
  else engine[action]();
});
window.addEventListener('keyup', (event) => held.delete(event.code));
window.addEventListener('blur', () => held.clear());

// The cover is the first frame shown, after the bundled fonts are ready.
async function fontsReady() {
  try {
    await Promise.all([
      document.fonts.load('500 48px "Noto Sans"'),
      document.fonts.load('600 144px "Noto Sans"'),
    ]);
    await document.fonts.ready;
    const ok = document.fonts.check('500 48px "Noto Sans"') && document.fonts.check('600 144px "Noto Sans"');
    document.documentElement.dataset.fonts = ok ? 'bundled' : 'fallback';
  } catch {
    document.documentElement.dataset.fonts = 'fallback';
  }
}

fontsReady().then(() => {
  stage.style.visibility = 'visible';
  engine.start();
});
