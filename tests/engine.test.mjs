// Deterministic key-contract tests (Design 1.0 "Hidden keyboard contract") against a fake driver.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createEngine } from '../src/engine.js';
import { SCENES } from '../src/scene-data.js';

function rig({ instant = false } = {}) {
  const log = [];
  const pending = []; // motions that have started but not naturally finished
  const driver = {
    showState: (s, b) => log.push(`show ${s}.${b}`),
    runEntry: (s, done) => start(`entry ${s}`, done),
    runBeat: (s, b, done) => start(`beat ${s}.${b}`, done),
    runExit: (s, done) => start(`exit ${s}`, done),
  };
  function start(name, done) {
    log.push(`start ${name}`);
    if (instant) {
      done();
      return { cancel() {} };
    }
    const m = { name, done, cancelled: false, cancel() { m.cancelled = true; log.push(`cancel ${name}`); } };
    pending.push(m);
    return m;
  }
  const engine = createEngine({ scenes: SCENES, driver });
  // Natural end of the newest motion (a cancelled motion never calls back).
  const finish = () => {
    const m = pending.pop();
    if (m && !m.cancelled) m.done();
  };
  return { engine, log, finish, pending };
}

const at = (e) => `${e.state.scene}.${e.state.beat}/${e.state.phase}`;

test('scene data matches the 12 scenes / 20 reveals / 32 settled states of Visual 1.0', () => {
  assert.equal(SCENES.length, 12);
  assert.equal(SCENES.reduce((n, s) => n + s.beats, 0), 20);
  assert.equal(SCENES.reduce((n, s) => n + s.beats + 1, 0), 32);
  assert.deepEqual(SCENES.map((s) => s.id), Array.from({ length: 12 }, (_, i) => `S${String(i + 1).padStart(2, '0')}`));
  for (const s of SCENES) assert.equal(s.reveals.length, s.beats);
});

test('start enters S01 and holds at b0', () => {
  const { engine, finish } = rig();
  engine.start();
  assert.equal(at(engine), '0.0/entry');
  finish();
  assert.equal(at(engine), '0.0/hold');
});

test('space during entry completes the entry and does not consume the next reveal', () => {
  const { engine } = rig();
  engine.start();
  engine.space();
  assert.equal(at(engine), '0.0/hold');
});

test('space at hold runs one reveal; space during reveal settles it without a second reveal', () => {
  const { engine, finish } = rig();
  engine.start();
  finish();
  assert.equal(engine.space(), 'reveal');
  assert.equal(at(engine), '0.0/reveal');
  assert.equal(engine.space(), 'completed');
  assert.equal(at(engine), '0.1/hold');
  assert.equal(engine.space(), 'exit');
  finish(); // exit ends -> entry of S02
  assert.equal(at(engine), '1.0/entry');
  finish();
  assert.equal(at(engine), '1.0/hold');
});

test('space during exit shows the incoming scene at its initial state and skips nothing', () => {
  const { engine, finish } = rig();
  engine.start();
  finish();
  engine.space();
  engine.space(); // settle b1
  engine.space(); // exit starts
  assert.equal(at(engine), '0.1/exit');
  engine.space();
  assert.equal(at(engine), '1.0/hold');
});

test('full forward flow with instant motion visits all 32 states and ends in the S12 hold', () => {
  const { engine } = rig({ instant: true });
  engine.start();
  const seen = [at(engine)];
  for (let i = 0; i < 200; i += 1) {
    engine.space();
    const s = at(engine);
    if (seen.at(-1) !== s) seen.push(s);
  }
  assert.equal(seen.length, 32);
  assert.equal(at(engine), '11.1/hold');
  assert.equal(engine.space(), 'terminal'); // Space at S12 final hold stays
  assert.equal(at(engine), '11.1/hold');
});

test('R cancels any motion and restores the S01 initial state; next space is S01 b1', () => {
  const { engine, log, finish } = rig();
  engine.start();
  finish();
  for (let i = 0; i < 6; i += 1) {
    engine.space();
    engine.space();
  }
  engine.space(); // start a motion
  assert.notEqual(engine.state.phase, 'hold');
  engine.reset();
  assert.equal(at(engine), '0.0/hold');
  assert.match(log.at(-1), /^show 0\.0$/);
  assert.equal(engine.space(), 'reveal');
  assert.equal(engine.state.target.beat, 1);
});

test('a cancelled motion can never call back (no ghost transition after R)', () => {
  const { engine, pending } = rig();
  engine.start();
  const entry = pending[0];
  engine.reset();
  entry.done(); // stale callback
  assert.equal(at(engine), '0.0/hold');
  engine.space();
  assert.equal(at(engine), '0.0/reveal');
});

test('Left Arrow shows the previous scene final state; at S01 it stays at b0', () => {
  const { engine } = rig({ instant: true });
  engine.start();
  engine.previous();
  assert.equal(at(engine), '0.0/hold');
  engine.space(); // S01 b1
  engine.space(); // S02 b0
  assert.equal(at(engine), '1.0/hold');
  engine.previous();
  assert.equal(at(engine), '0.1/hold');
  for (let i = 0; i < 12; i += 1) engine.space();
  engine.previous();
  assert.equal(engine.state.phase, 'hold');
});

test('S06 has three reveals in spoken order input, output, cached', () => {
  const s06 = SCENES.find((s) => s.id === 'S06');
  assert.equal(s06.beats, 3);
});
