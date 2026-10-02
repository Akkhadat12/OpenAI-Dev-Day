(function () {
  "use strict";

  var scenes = Array.prototype.slice.call(document.querySelectorAll(".scene"));
  var stageSlot = document.getElementById("stage-slot");
  var pointer = document.getElementById("pointer");
  var live = document.getElementById("live");
  var sceneIndex = 0;
  var beat = 0;
  var phase = "hold";
  var motionKind = "hold";
  var token = 0;
  var timer = null;
  var pointerEnabled = true;
  var coverMode = "wordmark";

  function reduced() {
    return document.documentElement.dataset.reduced === "1";
  }

  function cssMs(name, fallback) {
    var raw = getComputedStyle(document.documentElement).getPropertyValue(name);
    var n = parseFloat(raw);
    return Number.isFinite(n) ? n : fallback;
  }

  function entryMs() {
    return reduced() ? cssMs("--entry", 150) : cssMs("--entry", 700);
  }

  function revealMs() {
    return reduced() ? cssMs("--reveal", 150) : cssMs("--reveal", 900);
  }

  function exitMs() {
    return reduced() ? cssMs("--exit", 150) : cssMs("--exit", 400);
  }

  function bump() {
    token += 1;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function sleep(ms) {
    var my = token;
    return new Promise(function (resolve) {
      timer = setTimeout(function () {
        timer = null;
        resolve(my === token);
      }, ms);
    });
  }

  function sceneAt(index) {
    return scenes[index];
  }

  function lastBeat(scene) {
    var max = 0;
    scene.querySelectorAll("[data-beat]").forEach(function (el) {
      var n = Number(el.dataset.beat);
      if (n > max) max = n;
    });
    return max;
  }

  function announce(index, beatIndex) {
    var scene = sceneAt(index);
    var meta = window.SCENE_META[scene.dataset.scene];
    var text = meta && meta.alts[beatIndex] ? meta.alts[beatIndex] : scene.dataset.scene;
    scene.setAttribute("aria-label", text);
    if (live.textContent !== text) live.textContent = text;
    document.documentElement.dataset.scene = scene.dataset.scene;
    document.documentElement.dataset.beat = String(beatIndex);
    document.documentElement.dataset.phase = phase;
  }

  function applyBeat(scene, beatIndex, animate) {
    scene.querySelectorAll("[data-beat]").forEach(function (el) {
      var min = Number(el.dataset.beat || "0");
      var until = el.hasAttribute("data-until") ? Number(el.dataset.until) : Infinity;
      if (beatIndex > until) {
        el.classList.remove("is-on");
        el.classList.add("is-suppressed");
        el.setAttribute("aria-hidden", "true");
        return;
      }
      el.classList.remove("is-suppressed");
      if (beatIndex < min) {
        el.classList.remove("is-on");
        el.setAttribute("aria-hidden", "true");
        return;
      }
      el.setAttribute("aria-hidden", "false");
      if (animate && min === beatIndex && el.classList.contains("reveal")) {
        el.classList.remove("is-on");
        void el.offsetWidth;
        el.classList.add("is-on");
      } else {
        el.classList.add("is-on");
      }
    });
  }

  function hideScenes(except) {
    scenes.forEach(function (scene) {
      if (scene === except) return;
      scene.classList.remove("is-active", "is-entered", "is-leaving");
      scene.setAttribute("aria-hidden", "true");
    });
  }

  function showSettled(index, beatIndex) {
    var scene = sceneAt(index);
    document.documentElement.classList.add("snap");
    hideScenes(scene);
    scene.classList.add("is-active", "is-entered");
    scene.classList.remove("is-leaving");
    scene.setAttribute("aria-hidden", "false");
    applyBeat(scene, beatIndex, false);
    sceneIndex = index;
    beat = beatIndex;
    phase = "hold";
    motionKind = "hold";
    announce(index, beatIndex);
  }

  function prepareCover() {
    var word = document.getElementById("wordmark");
    var blossom = document.getElementById("blossom");
    var wordPaths = word ? word.querySelectorAll("path") : [];
    var blossomPaths = blossom ? blossom.querySelectorAll("path") : [];
    if (word && wordPaths.length) {
      coverMode = "wordmark";
      word.hidden = false;
      if (blossom) blossom.hidden = true;
    } else if (blossom && blossomPaths.length) {
      coverMode = "blossom";
      if (word) word.hidden = true;
      blossom.hidden = false;
    } else {
      coverMode = "none";
      if (word) word.hidden = true;
      if (blossom) blossom.hidden = true;
    }
    document.documentElement.dataset.cover = coverMode;
  }

  async function playEntry(index) {
    var scene = sceneAt(index);
    var my = token;
    hideScenes(scene);
    scene.classList.add("is-active");
    scene.classList.remove("is-leaving", "is-entered");
    scene.setAttribute("aria-hidden", "false");
    sceneIndex = index;
    beat = 0;
    applyBeat(scene, 0, false);
    if (scene.dataset.instantEntry === "1") {
      document.documentElement.classList.add("snap");
      scene.classList.add("is-entered");
      phase = "hold";
      motionKind = "hold";
      announce(index, 0);
      return;
    }
    document.documentElement.classList.remove("snap");
    phase = "motion";
    motionKind = "entry";
    document.documentElement.dataset.phase = phase;
    document.documentElement.dataset.scene = scene.dataset.scene;
    document.documentElement.dataset.beat = "0";
    await new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(resolve);
      });
    });
    if (my !== token) return;
    scene.classList.add("is-entered");
    var ok = await sleep(entryMs());
    if (!ok) return;
    phase = "hold";
    motionKind = "hold";
    announce(index, 0);
  }

  async function playReveal(nextBeat) {
    var scene = sceneAt(sceneIndex);
    var my = token;
    beat = nextBeat;
    phase = "motion";
    motionKind = "reveal";
    document.documentElement.dataset.phase = phase;
    document.documentElement.dataset.beat = String(beat);
    document.documentElement.classList.remove("snap");
    applyBeat(scene, beat, true);
    var ok = await sleep(revealMs());
    if (!ok || my !== token) return;
    phase = "hold";
    motionKind = "hold";
    announce(sceneIndex, beat);
  }

  async function playExit() {
    var scene = sceneAt(sceneIndex);
    var next = sceneIndex + 1;
    var my = token;
    phase = "motion";
    motionKind = "exit";
    document.documentElement.dataset.phase = phase;
    document.documentElement.classList.remove("snap");
    scene.classList.remove("is-entered");
    scene.classList.add("is-leaving");
    var ok = await sleep(exitMs());
    if (!ok || my !== token) return;
    scene.classList.remove("is-active", "is-leaving");
    scene.setAttribute("aria-hidden", "true");
    await playEntry(next);
  }

  function settle() {
    var kind = motionKind;
    var index = sceneIndex;
    bump();
    if (kind === "exit") {
      var leaving = sceneAt(index);
      leaving.classList.remove("is-active", "is-entered", "is-leaving");
      leaving.setAttribute("aria-hidden", "true");
      playEntry(index + 1);
      return;
    }
    showSettled(index, beat);
  }

  function forward() {
    if (phase === "motion") {
      settle();
      return;
    }
    var scene = sceneAt(sceneIndex);
    if (beat < lastBeat(scene)) {
      playReveal(beat + 1);
      return;
    }
    if (sceneIndex < scenes.length - 1) {
      playExit();
    }
  }

  function resetCover() {
    bump();
    scenes.forEach(function (scene) {
      scene.classList.remove("is-active", "is-entered", "is-leaving");
      scene.setAttribute("aria-hidden", "true");
      applyBeat(scene, -1, false);
    });
    showSettled(0, 0);
  }

  function back() {
    if (sceneIndex === 0) return;
    bump();
    var prev = sceneIndex - 1;
    showSettled(prev, lastBeat(sceneAt(prev)));
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      var root = document.documentElement;
      var request = root.requestFullscreen || root.webkitRequestFullscreen;
      if (request) {
        Promise.resolve(request.call(root)).catch(function () {});
      }
      return;
    }
    var exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (exit) {
      Promise.resolve(exit.call(document)).catch(function () {});
    }
  }

  function hidePointer() {
    pointer.hidden = true;
    stageSlot.classList.remove("pointer-live");
  }

  function onPointer(event) {
    if (!pointerEnabled || event.pointerType === "touch") {
      hidePointer();
      return;
    }
    var rect = stageSlot.getBoundingClientRect();
    var inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside || document.hidden) {
      hidePointer();
      return;
    }
    pointer.hidden = false;
    pointer.style.left = event.clientX + "px";
    pointer.style.top = event.clientY + "px";
    stageSlot.classList.add("pointer-live");
  }

  function togglePointer() {
    pointerEnabled = !pointerEnabled;
    document.documentElement.dataset.pointer = pointerEnabled ? "on" : "off";
    if (!pointerEnabled) hidePointer();
  }

  function onKey(event) {
    if (event.repeat) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    var target = event.target;
    if (target) {
      var tag = target.tagName;
      if (target.isContentEditable || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        return;
      }
    }
    if (event.code === "Space") {
      event.preventDefault();
      forward();
      return;
    }
    if (event.key === "r" || event.key === "R") {
      event.preventDefault();
      resetCover();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      back();
      return;
    }
    if (event.key === "f" || event.key === "F") {
      event.preventDefault();
      toggleFullscreen();
      return;
    }
    if (event.key === "p" || event.key === "P") {
      event.preventDefault();
      togglePointer();
    }
  }

  function assertMeta() {
    scenes.forEach(function (scene) {
      var id = scene.dataset.scene;
      var meta = window.SCENE_META[id];
      if (!meta) throw new Error("Missing scene meta for " + id);
      var beats = lastBeat(scene) + 1;
      if (meta.alts.length !== beats) {
        throw new Error(id + " alt count " + meta.alts.length + " != beats " + beats);
      }
    });
  }

  prepareCover();
  assertMeta();
  document.documentElement.dataset.pointer = "on";
  scenes.forEach(function (scene, index) {
    applyBeat(scene, index === 0 ? 0 : -1, false);
  });
  announce(0, 0);
  document.addEventListener("keydown", onKey);
  document.addEventListener("pointermove", onPointer);
  document.addEventListener("pointerleave", hidePointer);
  window.addEventListener("blur", hidePointer);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) hidePointer();
  });
})();
