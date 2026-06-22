/* ============================================================
   Accessibility widget — self-injecting, works on every page.
   NOTE: a practical aid, not a certified IS-5568 compliance tool;
   a certified third-party widget can replace this if required.
   ============================================================ */
(function () {
  "use strict";

  var KEY = "next60-a11y";
  var FONT_MIN = 0.9, FONT_MAX = 1.6, FONT_STEP = 0.1;
  var root = document.documentElement;
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { state = {}; }

  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function apply() {
    root.classList.toggle("a11y-contrast", !!state.contrast);
    root.classList.toggle("a11y-links", !!state.links);
    root.classList.toggle("a11y-readable", !!state.readable);
    root.classList.toggle("a11y-nomotion", !!state.nomotion);
    root.style.fontSize = state.font ? (state.font * 100).toFixed(0) + "%" : "";
    syncButtons();
  }

  var TOGGLES = [
    { key: "contrast", label: "ניגודיות גבוהה" },
    { key: "links", label: "הדגשת קישורים" },
    { key: "readable", label: "פונט קריא" },
    { key: "nomotion", label: "עצירת אנימציות" }
  ];

  var panel, btnInc, btnDec, fontVal, toggleBtns = {};

  function syncButtons() {
    if (fontVal) fontVal.textContent = Math.round((state.font || 1) * 100) + "%";
    TOGGLES.forEach(function (t) {
      var b = toggleBtns[t.key];
      if (b) { b.setAttribute("aria-pressed", String(!!state[t.key])); b.classList.toggle("on", !!state[t.key]); }
    });
  }

  function build() {
    var btn = document.createElement("button");
    btn.className = "a11y-fab";
    btn.type = "button";
    btn.setAttribute("aria-label", "תפריט נגישות");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9 5c0 .6-.5 1-1.1.9l-4.9-.7v3.3l2 7.2c.2.6-.2 1.2-.8 1.3-.6.2-1.2-.2-1.3-.8L13.2 16h-2.4l-1.4 5.4c-.2.6-.8 1-1.4.8-.6-.1-1-.7-.8-1.3l2-7.2V10.2L4.1 8c-.6 0-1.1-.5-1-1.1.1-.6.6-1 1.2-.9l6 .9c.5.1 1 .1 1.5 0l6-.9c.6 0 1.1.4 1.2 1Z"/></svg>';

    panel = document.createElement("div");
    panel.className = "a11y-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "אפשרויות נגישות");
    panel.hidden = true;

    var h = document.createElement("p");
    h.className = "a11y-title";
    h.textContent = "נגישות";
    panel.appendChild(h);

    // font row
    var fontRow = document.createElement("div");
    fontRow.className = "a11y-font";
    btnDec = mkBtn("א-", "הקטן טקסט", function () { setFont(-1); });
    fontVal = document.createElement("span");
    fontVal.className = "a11y-fontval";
    btnInc = mkBtn("א+", "הגדל טקסט", function () { setFont(1); });
    fontRow.appendChild(btnInc); fontRow.appendChild(fontVal); fontRow.appendChild(btnDec);
    panel.appendChild(fontRow);

    // toggles
    TOGGLES.forEach(function (t) {
      var b = mkBtn(t.label, t.label, function () { state[t.key] = !state[t.key]; save(); apply(); });
      b.className = "a11y-toggle";
      b.setAttribute("aria-pressed", "false");
      toggleBtns[t.key] = b;
      panel.appendChild(b);
    });

    // reset
    var reset = mkBtn("איפוס", "איפוס הגדרות נגישות", function () {
      state = {}; save(); apply();
    });
    reset.className = "a11y-reset";
    panel.appendChild(reset);

    btn.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    });

    document.body.appendChild(btn);
    document.body.appendChild(panel);
  }

  function mkBtn(text, label, onClick) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = text;
    b.setAttribute("aria-label", label);
    b.addEventListener("click", onClick);
    return b;
  }

  function setFont(dir) {
    var f = state.font || 1;
    f = Math.round((f + dir * FONT_STEP) * 10) / 10;
    f = f < FONT_MIN ? FONT_MIN : f > FONT_MAX ? FONT_MAX : f;
    state.font = f === 1 ? undefined : f;
    save(); apply();
  }

  function init() { build(); apply(); }
  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
