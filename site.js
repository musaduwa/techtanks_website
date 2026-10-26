/* TechTanks registration desk — prototype behaviour. No data leaves the browser. */
(function () {
  "use strict";

  // Mobile menu
  var btn = document.querySelector(".menu-btn"), nav = document.querySelector(".nav");
  if (btn && nav) btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  });

  // Mark current page in the menu
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });

  // Normalise a model number for lookup: upper-case, drop spaces and dashes
  function norm(s) { return String(s || "").toUpperCase().replace(/[\s\-_.]/g, ""); }

  // Model check against the embedded sample of the Commission's register
  function lookup(model) {
    var data = window.TT_SAMPLE || [], q = norm(model);
    if (q.length < 3) return { status: "wait", matches: [] };
    var exact = data.filter(function (r) { return norm(r.model) === q; });
    if (exact.length === 1) return { status: "ok", matches: exact };
    if (exact.length > 1) return { status: "wait", matches: exact };
    var partial = data.filter(function (r) { return norm(r.model).indexOf(q) === 0 || norm(r.name).indexOf(q) >= 0; });
    if (partial.length === 1) return { status: "ok", matches: partial };
    if (partial.length > 1) return { status: "wait", matches: partial.slice(0, 6) };
    return { status: "no", matches: [] };
  }

  function chip(kind, text) { var ic = { ok: "ok", wait: "wait", no: "no" }[kind]; return "<span class='chip " + kind + "'><svg class='tt-icon' aria-hidden='true'><use href='#tt-" + ic + "'/></svg>" + text + "</span>"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var checkForm = document.getElementById("check-form");
  if (checkForm) {
    checkForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var model = checkForm.querySelector("[name=model]").value.trim();
      var box = document.getElementById("check-result");
      var r = lookup(model);
      box.className = "result show " + r.status;
      var html = "";
      if (r.status === "ok") {
        var m = r.matches[0];
        html = "" + chip("ok", "Type Approved") + "<h3>" + esc(m.name) + " (" + esc(m.model) + ")</h3>" +
          "<p>This model is on the Commission's Type Approval register, applied for by " + esc(m.applicant) + ". Your own phone: call 315 — registration is free. A shop's stock: Dealer Registration.</p>" +
          "<p><a class='tt-btn tt-btn-secondary' href='owner.html'>For phone owners</a> &nbsp; <a class='tt-btn tt-btn-primary' href='dealer.html'>Dealer Registration</a></p>";
      } else if (r.status === "no") {
        html = "" + chip("no", "Not found on the register") + "<h3>We could not find “" + esc(model) + "”</h3>" +
          "<p>This model is not in our copy of the Commission's Type Approval register. It cannot be registered until the manufacturer or an importer applies for Type Approval. We charge nothing.</p>" +
          "<p class='muted'>Prototype note: this demonstration holds a sample of " + ((window.TT_SAMPLE || []).length) + " current models, not the full register of 2,515 certificates. A model missing here may still be on the Commission's register.</p>" +
          "<p><a class='tt-btn tt-btn-secondary' href='contact.html'>Tell me when this changes</a></p>";
      } else {
        html = "" + chip("wait", "Needs manual confirmation") + "<h3>More than one entry matches</h3>" +
          (r.matches.length ? "<ul>" + r.matches.map(function (m) { return "<li><b>" + esc(m.model) + "</b> — " + esc(m.name) + "</li>"; }).join("") + "</ul>" : "<p>Please enter at least three characters of the model number.</p>") +
          "<p>Pick the exact model number from the box or Settings → About phone and check again, or leave your name and phone number and we will confirm. No charge.</p>" +
          "<p><a class='tt-btn tt-btn-secondary' href='contact.html'>Ask us to confirm</a></p>";
      }
      box.innerHTML = html;
      box.setAttribute("tabindex", "-1"); box.focus();
    });
  }

  // Generic form handling: required-field check, then a prototype confirmation (nothing is sent anywhere)
  document.querySelectorAll("form[data-proto]").forEach(function (f) {
    var modelParam = new URLSearchParams(location.search).get("model");
    if (modelParam && f.querySelector("[name=model]")) f.querySelector("[name=model]").value = modelParam;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      f.querySelectorAll("[required]").forEach(function (inp) {
        var wrap = inp.closest(".field");
        var bad = !inp.value.trim() || (inp.type === "tel" && !/^\+?[\d\s]{10,15}$/.test(inp.value.trim())) || (inp.pattern && !(new RegExp("^" + inp.pattern + "$")).test(inp.value.trim()));
        if (wrap) wrap.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) { var first = f.querySelector(".invalid input, .invalid select"); if (first) first.focus(); return; }
      var out = document.getElementById(f.getAttribute("data-proto"));
      var kind = f.getAttribute("data-kind");
      var tn = "TT-" + String(Math.floor(100000 + Math.random() * 900000));
      var html = "";
      if (kind === "lead") {
        var sel = (f.querySelector("[name=seller]") || {}).value || "";
        html = chip("ok", "Thank you") + "<h3>Now call 315</h3><p>Dial *#06#, call 315 and read out your IMEI number. The Commission registers the phone free and confirms by text and email.</p>" +
          (sel.trim() ? "<p>We have noted <b>" + esc(sel.trim()) + "</b> and will offer to register the rest of their stock. Reference <b>" + tn + "</b>.</p>" : "<p>Reference <b>" + tn + "</b>. If you remember who sold you the phone, reply to our text and tell us.</p>") +
          "<p class='muted'>Prototype: nothing was sent. No data left this browser.</p>";
        out.className = "result show ok";
      } else {
        html = "" + chip("wait", "Received") + "<h3>Thank you</h3><p>Reference <b>" + tn + "</b>. In the live service we text this number to the phone number you gave and reply within one working day.</p><p class='muted'>Prototype: nothing was sent. No data left this browser.</p>";
        out.className = "result show wait";
      }
      out.innerHTML = html; out.setAttribute("tabindex", "-1"); out.focus();
    });
  });

  // Tracking lookup — demo records
  var DEMO = {
    "TT-482913": { model: "Tecno Spark 30c (KL5)", imeis: ["35•••••••••4821", "35•••••••••4839"], step: 6 },
    "TT-115207": { model: "Samsung Galaxy A16 LTE (SM-A165F)", imeis: ["35•••••••••0917", "35•••••••••0925"], step: 3 },
    "TT-770034": { model: "iPhone 16 (A3287)", imeis: ["35•••••••••2210"], step: 5 },
    "TT-209911": { model: "Model not Type Approved", imeis: ["86•••••••••7731"], step: -1 }
  };
  var STEPS = ["Received", "Type Approval checked (Gate 1 passed)", "Awaiting payment", "Paid", "Submitted to the Device Management System", "Registered (Gate 2 passed)"];
  var trackForm = document.getElementById("track-form");
  function showTrack(tn) {
    var out = document.getElementById("track-result"); if (!out) return;
    var rec = DEMO[tn.toUpperCase()];
    if (!rec && /^TT-\d{6}$/i.test(tn)) rec = { model: "Your phone (prototype)", imeis: ["35•••••••••0001", "35•••••••••0002"], step: 2 };
    if (!rec) { out.className = "result show no"; out.innerHTML = "<h3>We could not find that tracking number</h3><p>Check the text message we sent you, or call +234 70 6578 4089.</p>"; return; }
    var html = "<p class='kicker'>Tracking number " + esc(tn.toUpperCase()) + "</p><h3>" + esc(rec.model) + "</h3><p class='muted'>IMEI numbers: " + rec.imeis.join(" · ") + " (middle digits hidden)</p>";
    if (rec.step === -1) { html += "" + chip("no", "Not Type Approved — no charge") + "<p>This model is not on the Commission's Type Approval register, so it cannot be registered. Nothing was charged.</p>"; out.className = "result show no"; }
    else {
      html += chip(rec.step === 6 ? "ok" : "wait", esc(STEPS[rec.step - 1])) + "<ol class='timeline'>";
      STEPS.forEach(function (s, i) { var cls = i + 1 < rec.step ? "done" : (i + 1 === rec.step ? "done now" : ""); html += "<li class='" + cls + "'>" + esc(s) + "</li>"; });
      html += "</ol>";
      if (rec.step === 6) html += "<p>Dial <b>*315#</b> on the phone to see the Commission's own confirmation.</p>";
      out.className = "result show " + (rec.step === 6 ? "ok" : "wait");
    }
    out.innerHTML = html;
  }
  if (trackForm) {
    trackForm.addEventListener("submit", function (e) { e.preventDefault(); showTrack(trackForm.querySelector("[name=tn]").value.trim()); });
    var tnParam = new URLSearchParams(location.search).get("tn");
    if (tnParam) { trackForm.querySelector("[name=tn]").value = tnParam; showTrack(tnParam); }
  }
})();
