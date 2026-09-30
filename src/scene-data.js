// Scene data and cue metadata. Scene IDs, claim IDs and beat counts trace to
// 01_CONTENT.md / references/scenes.json and 03_VISUAL_PLAN.md (Visual 1.0).
// Geometry and copy live only in assets/visual/Sxx.svg; nothing here draws.
//
// beats:   number of cue-linked reveals after the entry state (b0).
// reveals: one choreography entry per reveal (b1..bn).
//   from:  [dx, dy] logical px the non-arrow content starts from (<= 96 px).
//   order: how a beat with an explanatory arrow is sequenced inside the 650 ms budget
//          'arrow-last'  objects 0-400 ms, arrow draws 250-650 ms (default)
//          'arrow-first' arrow draws 0-400 ms, objects 250-650 ms
//          'together'    everything 0-650 ms
//   special: 'ring' scales the S04 harness ring from r200 to r236 (Visual plan S04 b1).

const fade = { from: [0, 0] };
const left = { from: [-24, 0] };
const rise = { from: [0, 24] };

export const SCENES = [
  { id: 'S01', claims: ['C01', 'A01'], beats: 1, reveals: [{ from: [-24, 0], order: 'arrow-first' }] },
  { id: 'S02', claims: ['C12'], beats: 1, reveals: [{ from: [0, 0], order: 'together' }] },
  { id: 'S03', claims: ['C02'], beats: 2, reveals: [left, { from: [-24, 0], order: 'arrow-first' }] },
  {
    id: 'S04',
    claims: ['C04', 'C08'],
    beats: 3,
    reveals: [
      { from: [-24, 0], order: 'together', special: 'ring' },
      { from: [24, 0] },
      { from: [0, -24], order: 'arrow-last' },
    ],
  },
  { id: 'S05', claims: ['C09', 'C10'], beats: 1, reveals: [{ from: [-24, 0], order: 'together' }] },
  { id: 'S06', claims: ['C05', 'C06', 'A02'], beats: 3, reveals: [fade, fade, fade] },
  { id: 'S07', claims: ['A02'], beats: 1, reveals: [fade] },
  { id: 'S08', claims: ['C07'], beats: 1, reveals: [{ from: [0, 24], order: 'arrow-last' }] },
  { id: 'S09', claims: ['A03'], beats: 2, reveals: [rise, { from: [0, 24], order: 'arrow-last' }] },
  { id: 'S10', claims: ['C11', 'A02'], beats: 1, reveals: [{ from: [-24, 0], order: 'arrow-first' }] },
  {
    id: 'S11',
    claims: ['A04'],
    beats: 3,
    reveals: [
      { from: [-24, 0], order: 'arrow-first' },
      { from: [-24, 0], order: 'arrow-first' },
      { from: [-24, 0], order: 'arrow-first' },
    ],
  },
  { id: 'S12', claims: ['A01', 'A02', 'A03', 'A04'], beats: 1, reveals: [{ from: [0, -48] }] },
];

export const TIMING = Object.freeze({
  entryMs: 500,
  revealMs: 650,
  exitMs: 350,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  entryShiftPx: 24,
});
