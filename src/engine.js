// Presentation state machine. No DOM, no timers: all motion is delegated to a
// driver that returns a cancellable handle and calls back once when it ends.
//
// phase: 'hold' | 'reveal' | 'exit' | 'entry'
// Every physical key press yields at most one action (repeats are filtered by the caller).
//
// driver contract
//   showState(sceneIndex, beat)        instant, settled state; cancels nothing else
//   runEntry(sceneIndex, done)  -> { cancel() }   scene b0 enters
//   runBeat(sceneIndex, beat, done) -> { cancel() }
//   runExit(sceneIndex, done)   -> { cancel() }   outgoing scene leaves
// A driver may call done() synchronously (reduced motion).

export function createEngine({ scenes, driver, onChange = () => {} }) {
  const last = scenes.length - 1;
  const state = { scene: 0, beat: 0, phase: 'hold' };
  let motion = null;
  let target = null;
  let token = 0;

  const snapshot = () => ({ scene: state.scene, beat: state.beat, phase: state.phase, target });

  function settle(scene, beat) {
    state.scene = scene;
    state.beat = beat;
    state.phase = 'hold';
    motion = null;
    target = null;
    driver.showState(scene, beat);
    onChange(snapshot());
  }

  function cancelMotion() {
    token += 1;
    if (motion) motion.cancel();
    motion = null;
  }

  function run(kind, tgt, start) {
    const mine = ++token;
    let finished = false;
    state.phase = kind;
    target = tgt;
    const done = () => {
      if (finished || mine !== token) return;
      finished = true;
      motion = null;
      afterMotion(kind, tgt);
    };
    onChange(snapshot());
    const handle = start(done);
    if (!finished && mine === token) motion = handle;
  }

  function afterMotion(kind, tgt) {
    if (kind === 'exit') {
      state.scene = tgt.scene;
      state.beat = 0;
      run('entry', tgt, (done) => driver.runEntry(tgt.scene, done));
      return;
    }
    settle(tgt.scene, tgt.beat);
  }

  return {
    get state() {
      return snapshot();
    },

    // First render: scene S01 entry, then hold at b0.
    start() {
      cancelMotion();
      state.scene = 0;
      state.beat = 0;
      run('entry', { scene: 0, beat: 0 }, (done) => driver.runEntry(0, done));
    },

    // Spacebar: complete active motion, otherwise next beat or next scene.
    space() {
      if (state.phase !== 'hold') {
        const t = target;
        cancelMotion();
        settle(t.scene, t.beat);
        return 'completed';
      }
      const beats = scenes[state.scene].beats;
      if (state.beat < beats) {
        const next = { scene: state.scene, beat: state.beat + 1 };
        run('reveal', next, (done) => driver.runBeat(next.scene, next.beat, done));
        return 'reveal';
      }
      if (state.scene < last) {
        const next = { scene: state.scene + 1, beat: 0 };
        const from = state.scene;
        run('exit', next, (done) => driver.runExit(from, done));
        return 'exit';
      }
      return 'terminal';
    },

    // R: cancel everything, show the cover's initial state.
    reset() {
      cancelMotion();
      settle(0, 0);
    },

    // Optional Left Arrow: previous scene's final settled state; S01 stays at b0.
    previous() {
      cancelMotion();
      if (state.scene === 0) settle(0, 0);
      else settle(state.scene - 1, scenes[state.scene - 1].beats);
    },
  };
}
