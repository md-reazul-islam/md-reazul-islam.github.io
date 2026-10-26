/* ==========================================================================
   Rendering and interactivity. Content lives in data.js.
   ========================================================================== */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICONS = {
    scholar: '<svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
    website: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>'
  };
  const LINK_NAMES = { scholar: "Google Scholar", github: "GitHub", linkedin: "LinkedIn", website: "Previous website", twitter: "X (Twitter)" };

  /* ---------- Toast and clipboard ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  async function copy(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      ta.remove();
    }
    toast(msg || "Copied");
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    const set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  $$('[data-action="theme"]').forEach((b) =>
    b.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    })
  );

  /* ---------- Sidebar identity ---------- */
  $("#portrait").src = SITE.photo;
  $("#portrait").onerror = function () {
    const d = document.createElement("div"); d.className = "portrait portrait-fallback"; d.textContent = "RI"; d.setAttribute("aria-hidden", "true");
    this.replaceWith(d);
  };
  $("#portraitMobile").src = SITE.photo;
  $("#portraitMobile").onerror = function () { this.remove(); };
  const socialHTML = (wide) =>
    Object.entries(SITE.links)
      .map(([k, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${LINK_NAMES[k]}" title="${LINK_NAMES[k]}">${ICONS[k] || ICONS.website}${wide ? `<span>${LINK_NAMES[k]}</span>` : ""}</a></li>`)
      .join("");
  $("#social").innerHTML = socialHTML(false);
  $("#social2").innerHTML = socialHTML(true);
  $("#scholarLink").href = SITE.links.scholar;
  $("#emailLink").href = "mailto:" + SITE.email;
  $("#emailLink").textContent = SITE.email;
  $$('[data-copy="email"]').forEach((b) => b.addEventListener("click", () => copy(SITE.email, "Email address copied")));

  /* ---------- Stats ---------- */
  $("#statPubs").textContent = PUBLICATIONS.length;
  $("#statProjects").textContent = PROJECTS.length;
  $("#statAwards").textContent = AWARDS.length;

  /* ---------- Vital-sign monitor ---------- */
  (function monitor() {
    const hrC = $("#hrCanvas"), rrC = $("#rrCanvas");
    const toggle = $("#motionToggle"), caption = $("#monitorCaption");
    const defaultCaption = caption.textContent;
    let motion = false, running = true, last = 0, t = 0;
    const SPEED = 70; // px per second
    let hrBuf = [], rrBuf = [];
    let hr = 142, rr = 44;

    const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

    function size(c) {
      const dpr = window.devicePixelRatio || 1;
      const w = c.clientWidth, h = parseInt(c.getAttribute("height"), 10);
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      c.style.height = h + "px";
      const ctx = c.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { ctx, w, h };
    }
    let H, R;
    function resize() {
      H = size(hrC); R = size(rrC);
      // prefill so the strip is never empty
      hrBuf = []; rrBuf = [];
      const n = Math.ceil(H.w);
      for (let i = 0; i < n; i++) { const tt = t - (n - i) / SPEED; hrBuf.push(sample(tt)); rrBuf.push(sampleR(tt)); }
    }

    // PPG-like pulse: systolic peak + dicrotic wave
    function ppg(tt) {
      const p = ((((tt * hr) / 60) % 1) + 1) % 1;
      return Math.exp(-Math.pow((p - 0.2) / 0.075, 2)) + 0.42 * Math.exp(-Math.pow((p - 0.48) / 0.1, 2));
    }
    function artifact(tt, k) {
      if (!motion) return 0;
      return k * (0.9 * Math.sin(2 * Math.PI * 0.7 * tt + 1.3) * Math.sin(2 * Math.PI * 0.11 * tt) +
        0.45 * Math.sin(2 * Math.PI * 2.9 * tt) + (Math.random() - 0.5) * 0.35);
    }
    function sample(tt) { const c = ppg(tt); return { clean: c, raw: c + artifact(tt, 1.1) }; }
    function sampleR(tt) {
      const c = Math.sin(2 * Math.PI * (rr / 60) * tt) + 0.18 * Math.sin(4 * Math.PI * (rr / 60) * tt + 0.6);
      return { clean: c, raw: c + artifact(tt + 3.7, 1.4) };
    }

    function draw(ctx, w, h, buf, color, lo, hi) {
      ctx.clearRect(0, 0, w, h);
      const y = (v) => h - 6 - ((v - lo) / (hi - lo)) * (h - 12);
      if (motion) {
        ctx.beginPath();
        buf.forEach((s, i) => (i ? ctx.lineTo(i, y(s.raw)) : ctx.moveTo(i, y(s.raw))));
        ctx.strokeStyle = css("--muted"); ctx.globalAlpha = 0.45; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.globalAlpha = 1;
      }
      ctx.beginPath();
      buf.forEach((s, i) => (i ? ctx.lineTo(i, y(s.clean)) : ctx.moveTo(i, y(s.clean))));
      ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.lineJoin = "round"; ctx.stroke();
      // leading dot
      const s = buf[buf.length - 1];
      if (s) { ctx.beginPath(); ctx.arc(buf.length - 1, y(s.clean), 3.5, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); }
    }

    let acc = 0, valueTimer = 0;
    function frame(now) {
      if (!running) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now; t += dt; acc += dt * SPEED; valueTimer += dt;
      while (acc >= 1) {
        acc -= 1;
        const tt = t - acc / SPEED;
        hrBuf.push(sample(tt)); rrBuf.push(sampleR(tt));
        if (hrBuf.length > H.w) hrBuf.shift();
        if (rrBuf.length > R.w) rrBuf.shift();
      }
      if (valueTimer > 1.2) {
        valueTimer = 0;
        hr = 142 + 7 * Math.sin(t / 9) + (Math.random() - 0.5) * 2;
        rr = 44 + 4 * Math.sin(t / 13) + (Math.random() - 0.5) * 1.5;
        $("#hrVal").textContent = Math.round(hr);
        $("#rrVal").textContent = Math.round(rr);
      }
      draw(H.ctx, H.w, 90, hrBuf, css("--pulse"), -1.4, 2.1);
      draw(R.ctx, R.w, 70, rrBuf, css("--resp"), -2.9, 2.9);
      requestAnimationFrame(frame);
    }

    resize();
    let rT; window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(resize, 120); });

    toggle.addEventListener("click", () => {
      motion = !motion;
      toggle.setAttribute("aria-pressed", String(motion));
      toggle.textContent = motion ? "Stop infant motion" : "Simulate infant motion";
      caption.textContent = motion
        ? "Grey: what the camera sees when the baby moves. Colored: the signal a motion-aware model recovers."
        : defaultCaption;
      if (reduceMotion) { resize(); drawStatic(); }
    });

    function drawStatic() {
      draw(H.ctx, H.w, 90, hrBuf, css("--pulse"), -1.4, 2.1);
      draw(R.ctx, R.w, 70, rrBuf, css("--resp"), -2.9, 2.9);
    }

    if (reduceMotion) { drawStatic(); return; }

    // pause when off-screen or tab hidden
    const io = new IntersectionObserver(([e]) => {
      const vis = e.isIntersecting && !document.hidden;
      if (vis && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      else if (!vis) running = false;
    });
    io.observe($(".monitor"));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) running = false;
      else { running = true; last = 0; requestAnimationFrame(frame); }
    });
    requestAnimationFrame(frame);
  })();

  /* ---------- About ---------- */
  function renderBio(kind) {
    $("#bioBody").innerHTML = kind === "long"
      ? SITE.bioLong.map((p) => `<p>${esc(p)}</p>`).join("")
      : `<p>${esc(SITE.bioShort)}</p>`;
    $$(".bio-switch button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.bio === kind)));
    $("#bioBody").dataset.kind = kind;
  }
  $$(".bio-switch button").forEach((b) => b.addEventListener("click", () => renderBio(b.dataset.bio)));
  renderBio("short");
  $("#copyBio").addEventListener("click", () => {
    const text = $("#bioBody").dataset.kind === "long" ? SITE.bioLong.join("\n\n") : SITE.bioShort;
    copy(text, "Bio copied");
  });
  $("#interests").innerHTML = SITE.interests.map((i) => `<li>${esc(i)}</li>`).join("");
  $("#education").innerHTML = EDUCATION.map((e) =>
    `<li><b>${esc(e.degree)}</b><span>${esc(e.org)}</span><span>${esc(e.years)}${e.note ? ". " + esc(e.note) : ""}</span></li>`).join("");

  /* ---------- Research ---------- */
  const rItem = (r, lead) => `
    <article class="r-item${lead ? " lead" : ""}">
      <p class="r-status">${esc(r.status)}</p>
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.summary)}</p>
      <ul class="points">${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <ul class="chips small">${r.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      ${r.link ? `<p style="margin:14px 0 0"><a class="text-link" href="${esc(r.link)}" target="_blank" rel="noopener">Read the UAlbany story</a></p>` : ""}
    </article>`;
  $("#researchList").innerHTML = rItem(RESEARCH[0], true) +
    `<div class="r-two">${RESEARCH.slice(1).map((r) => rItem(r, false)).join("")}</div>`;

  /* ---------- News ---------- */
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (d) => { const [y, m] = d.split("-"); return m ? `${MONTHS[+m - 1]} ${y}` : y; };
  const NEWS_SHOWN = 6;
  $("#newsList").innerHTML = NEWS.map((n, i) => `
    <li${i >= NEWS_SHOWN ? " hidden" : ""}><time datetime="${esc(n.date)}">${fmtDate(n.date)}</time>
    <span>${esc(n.text)}${n.link ? ` <a href="${esc(n.link)}" target="_blank" rel="noopener">Read more</a>` : ""}</span></li>`).join("");
  const newsMore = $("#newsMore");
  if (NEWS.length <= NEWS_SHOWN) newsMore.hidden = true;
  newsMore.addEventListener("click", () => {
    const expanded = newsMore.dataset.open === "1";
    $$("#newsList li").forEach((li, i) => { if (i >= NEWS_SHOWN) li.hidden = expanded; });
    newsMore.dataset.open = expanded ? "0" : "1";
    newsMore.textContent = expanded ? "Show all news" : "Show less";
  });

  /* ---------- Publications ---------- */
  const TYPE_LABEL = { journal: "Journal", conference: "Conference", chapter: "Book chapter", dataset: "Dataset" };
  const ME = /(Md\.?\s?Reazul Islam)/g;
  let pubType = "all", pubQuery = "";

  function citation(p) {
    return `${p.authors}. (${p.year || "n.d."}). ${p.title}. ${p.venue}.${p.url ? " " + p.url : ""}`;
  }
  function bibtex(p) {
    const key = "islam" + (p.year || "nd") + p.title.split(/\s+/)[0].replace(/[^a-z]/gi, "").toLowerCase();
    const kind = p.type === "conference" ? "inproceedings" : p.type === "chapter" ? "incollection" : p.type === "dataset" ? "misc" : "article";
    const field = p.type === "conference" ? "booktitle" : p.type === "chapter" ? "booktitle" : p.type === "dataset" ? "publisher" : "journal";
    const authors = p.authors.replace(/,?\s*et al\.?/, " and others").split(/,\s*/).join(" and ");
    return `@${kind}{${key},\n  title={${p.title}},\n  author={${authors}},\n  ${field}={${p.venue}},\n  year={${p.year || ""}}${p.url ? `,\n  url={${p.url}}` : ""}\n}`;
  }

  function renderPubFilter() {
    const counts = PUBLICATIONS.reduce((a, p) => ((a[p.type] = (a[p.type] || 0) + 1), a), {});
    const types = ["all", "journal", "conference", "chapter", "dataset"].filter((t) => t === "all" || counts[t]);
    $("#pubFilter").innerHTML = types.map((t) =>
      `<button data-t="${t}" aria-pressed="${t === pubType}">${t === "all" ? "All" : TYPE_LABEL[t]}<span class="count">${t === "all" ? PUBLICATIONS.length : counts[t]}</span></button>`).join("");
    $$("#pubFilter button").forEach((b) => b.addEventListener("click", () => { pubType = b.dataset.t; renderPubFilter(); renderPubs(); }));
  }

  function renderPubs() {
    const q = pubQuery.trim().toLowerCase();
    const list = PUBLICATIONS
      .map((p, i) => ({ ...p, i }))
      .filter((p) => pubType === "all" || p.type === pubType)
      .filter((p) => !q || (p.title + " " + p.authors + " " + p.venue).toLowerCase().includes(q))
      .sort((a, b) => (b.year || 9999) - (a.year || 9999) || (b.cites || 0) - (a.cites || 0));
    const groups = {};
    list.forEach((p) => { const k = p.year ? String(p.year) : "Forthcoming and other"; (groups[k] = groups[k] || []).push(p); });
    const order = Object.keys(groups).sort((a, b) => (isNaN(b) ? -1 : +b) - (isNaN(a) ? -1 : +a));
    $("#pubList").innerHTML = order.map((k) => `
      <h3 class="pub-year">${k}</h3>
      ${groups[k].map((p) => `
        <article class="pub" id="pub-${p.i}">
          <div class="pub-type">${TYPE_LABEL[p.type]}</div>
          <div>
            <button class="pub-title" data-abs="${p.i}" aria-expanded="false">${esc(p.title)}</button>
            <p class="pub-authors">${esc(p.authors).replace(ME, "<b>$1</b>")}</p>
            <p class="pub-venue">${esc(p.venue)}</p>
            <div class="pub-abstract" id="abs-${p.i}" hidden>${esc(p.abstract || "Summary coming soon. Use the paper link for the full abstract.")}</div>
            <div class="pub-actions">
              ${p.featured ? `<span class="pill star">Selected</span>` : ""}
              ${p.url ? `<a class="pill" href="${esc(p.url)}" target="_blank" rel="noopener">${ICONS.doc}Paper</a>` : ""}
              ${p.cites ? `<a class="pill" href="${esc(SITE.links.scholar)}" target="_blank" rel="noopener" title="Citations on Google Scholar">Cited by ${p.cites}</a>` : ""}
              <button class="pill" data-cite="${p.i}">${ICONS.copy}Cite</button>
              <button class="pill" data-bib="${p.i}">${ICONS.copy}BibTeX</button>
            </div>
          </div>
        </article>`).join("")}`).join("");
    $("#pubEmpty").hidden = list.length > 0;
  }
  $("#pubList").addEventListener("click", (e) => {
    const abs = e.target.closest("[data-abs]");
    if (abs) {
      const box = $("#abs-" + abs.dataset.abs);
      box.hidden = !box.hidden;
      abs.setAttribute("aria-expanded", String(!box.hidden));
      return;
    }
    const c = e.target.closest("[data-cite]");
    if (c) return copy(citation(PUBLICATIONS[c.dataset.cite]), "Citation copied");
    const b = e.target.closest("[data-bib]");
    if (b) return copy(bibtex(PUBLICATIONS[b.dataset.bib]), "BibTeX copied");
  });
  $("#pubSearch").addEventListener("input", (e) => { pubQuery = e.target.value; renderPubs(); });
  renderPubFilter(); renderPubs();

  /* ---------- Projects ---------- */
  let projCat = "all";
  function renderProjFilter() {
    const counts = PROJECTS.reduce((a, p) => ((a[p.cat] = (a[p.cat] || 0) + 1), a), {});
    const keys = ["all", ...Object.keys(PROJECT_CATS).filter((k) => counts[k])];
    $("#projFilter").innerHTML = keys.map((k) =>
      `<button data-c="${k}" aria-pressed="${k === projCat}">${k === "all" ? "All" : PROJECT_CATS[k]}<span class="count">${k === "all" ? PROJECTS.length : counts[k]}</span></button>`).join("");
    $$("#projFilter button").forEach((b) => b.addEventListener("click", () => {
      projCat = b.dataset.c; renderProjFilter();
      $$("#projGrid .proj").forEach((el) => { el.hidden = projCat !== "all" && el.dataset.cat !== projCat; });
    }));
  }
  $("#projGrid").innerHTML = PROJECTS.map((p, i) => `
    <button class="proj" data-p="${i}" data-cat="${p.cat}" aria-label="Open project: ${esc(p.title)}">
      <div class="proj-img">
        ${p.images && p.images[0] ? `<img src="${esc(p.images[0])}" alt="" loading="lazy">` : ""}
        ${p.funded ? `<span class="proj-badge">Funded</span>` : ""}
      </div>
      <div class="proj-body">
        <span class="proj-cat">${esc(PROJECT_CATS[p.cat])}${p.year ? ", " + p.year : ""}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
      </div>
    </button>`).join("");
  renderProjFilter();

  // broken-image fallback: keep layout tidy if a remote image is gone
  document.addEventListener("error", (e) => {
    if (e.target.tagName === "IMG" && e.target.closest(".proj-img, .g-item, .talk-thumb")) {
      e.target.remove();
    }
  }, true);

  const pm = $("#projModal");
  let pmP = null, pmI = 0;
  function showPm() {
    const imgs = pmP.images || [];
    $("#pmImg").src = imgs[pmI] || "";
    $("#pmImg").alt = pmP.title + (imgs.length > 1 ? `, image ${pmI + 1} of ${imgs.length}` : "");
    $("#pmCount").textContent = imgs.length > 1 ? `${pmI + 1} / ${imgs.length}` : "";
    $("#pmPrev").hidden = $("#pmNext").hidden = imgs.length < 2;
  }
  $("#projGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".proj"); if (!card) return;
    openProject(+card.dataset.p);
  });
  function openProject(i) {
    pmP = PROJECTS[i]; pmI = 0;
    $("#pmMeta").textContent = PROJECT_CATS[pmP.cat] + (pmP.year ? ", " + pmP.year : "") + (pmP.funded ? ", funded" : "");
    $("#pmTitle").textContent = pmP.title;
    $("#pmSummary").textContent = pmP.summary;
    $("#pmStack").innerHTML = (pmP.stack || []).map((s) => `<li>${esc(s)}</li>`).join("");
    $("#pmLinks").innerHTML = (pmP.links || []).map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${ICONS.ext}${esc(l.label)}</a>`).join("");
    showPm();
    pm.showModal();
  }
  $("#pmPrev").addEventListener("click", () => { pmI = (pmI - 1 + pmP.images.length) % pmP.images.length; showPm(); });
  $("#pmNext").addEventListener("click", () => { pmI = (pmI + 1) % pmP.images.length; showPm(); });

  /* ---------- Experience ---------- */
  const EXP_GROUPS = { all: "All", academic: "Teaching", research: "Research", industry: "Industry" };
  let expG = "all";
  function renderExp() {
    $("#expFilter").innerHTML = Object.entries(EXP_GROUPS).map(([k, v]) =>
      `<button data-g="${k}" aria-pressed="${k === expG}">${v}</button>`).join("");
    $$("#expFilter button").forEach((b) => b.addEventListener("click", () => { expG = b.dataset.g; renderExp(); }));
    $("#timeline").innerHTML = EXPERIENCE.map((x) => `
      <li class="tl${x.end === "Present" ? " now" : ""}"${expG !== "all" && x.group !== expG ? " hidden" : ""}>
        <span class="tl-when">${esc(x.start)} – ${esc(x.end)}</span>
        <h3>${esc(x.role)}</h3>
        <span class="tl-org">${esc(x.org)}</span>${x.place ? `<span class="tl-when">, ${esc(x.place)}</span>` : ""}
        <p>${esc(x.detail)}</p>
      </li>`).join("");
  }
  renderExp();

  /* ---------- Talks ---------- */
  const talkImgs = [];
  $("#talkList").innerHTML = TALKS.map((t) => {
    let thumb = "";
    if (t.image) { talkImgs.push({ src: t.image, caption: t.event }); thumb = `<button class="talk-thumb" data-lb-talk="${talkImgs.length - 1}" aria-label="View photo from ${esc(t.event)}"><img src="${esc(t.image)}" alt="" loading="lazy"></button>`; }
    return `<article class="talk">
      <div class="talk-year">${t.year}</div>
      <div><span class="talk-kind">${esc(t.kind)}</span><h3>${esc(t.title)}</h3><p>${esc(t.event)}${t.link ? ` <a href="${esc(t.link)}" target="_blank" rel="noopener">Story</a>` : ""}</p></div>
      <div>${thumb}</div>
    </article>`;
  }).join("");
  $("#talkList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lb-talk]"); if (b) openLightbox(talkImgs, +b.dataset.lbTalk);
  });

  /* ---------- Awards, service, skills, media ---------- */
  $("#awardList").innerHTML = AWARDS.map((a) =>
    `<li>${a.year ? `<span class="aw-year">${a.year}</span>` : ""}<h3>${esc(a.title)}</h3><p>${esc(a.by)}</p></li>`).join("");
  $("#reviewList").innerHTML = SERVICE.reviewer.map((r) => `<li>${esc(r.journal)}<span>since ${r.since}</span></li>`).join("");
  $("#leadList").innerHTML = SERVICE.leadership.map((l) => `<li>${esc(l)}</li>`).join("");
  $("#skillList").innerHTML = SKILLS.map((g) =>
    `<div class="skill-group"><h4>${esc(g.group)}</h4><ul class="chips small">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
  $("#mediaList").innerHTML = MEDIA.map((m) => `
    <li><a href="${esc(m.url)}" target="_blank" rel="noopener">
      <span class="m-outlet">${esc(m.outlet)}</span><span class="m-title">${esc(m.title)}</span><span class="m-date">${esc(m.date)}</span>
    </a></li>`).join("");

  /* ---------- Gallery + lightbox ---------- */
  const GCATS = { all: "All", events: "Events", teaching: "Teaching", projects: "Prototypes" };
  let gCat = "all";
  function renderGalFilter() {
    $("#galFilter").innerHTML = Object.entries(GCATS).map(([k, v]) => `<button data-g="${k}" aria-pressed="${k === gCat}">${v}</button>`).join("");
    $$("#galFilter button").forEach((b) => b.addEventListener("click", () => {
      gCat = b.dataset.g; renderGalFilter();
      $$("#galGrid .g-item").forEach((el) => { el.hidden = gCat !== "all" && el.dataset.cat !== gCat; });
    }));
  }
  $("#galGrid").innerHTML = GALLERY.map((g, i) =>
    `<button class="g-item" data-g="${i}" data-cat="${g.cat}" aria-label="View: ${esc(g.caption)}"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><span>${esc(g.caption)}</span></button>`).join("");
  renderGalFilter();
  $("#galGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".g-item"); if (!b) return;
    const visible = GALLERY.filter((g) => gCat === "all" || g.cat === gCat);
    openLightbox(visible, visible.indexOf(GALLERY[+b.dataset.g]));
  });

  const lb = $("#lightbox");
  let lbSet = [], lbI = 0;
  function showLb() {
    const it = lbSet[lbI];
    $("#lbImg").src = it.src; $("#lbImg").alt = it.caption;
    $("#lbCap").textContent = it.caption + (lbSet.length > 1 ? `  (${lbI + 1} of ${lbSet.length})` : "");
    $("#lbPrev").hidden = $("#lbNext").hidden = lbSet.length < 2;
  }
  function openLightbox(set, i) { lbSet = set; lbI = Math.max(0, i); showLb(); lb.showModal(); }
  $("#lbPrev").addEventListener("click", () => { lbI = (lbI - 1 + lbSet.length) % lbSet.length; showLb(); });
  $("#lbNext").addEventListener("click", () => { lbI = (lbI + 1) % lbSet.length; showLb(); });

  // shared dialog behavior: close button, backdrop click, arrow keys
  $$("dialog").forEach((d) => {
    d.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
  });
  document.addEventListener("keydown", (e) => {
    if (lb.open) { if (e.key === "ArrowLeft") $("#lbPrev").click(); if (e.key === "ArrowRight") $("#lbNext").click(); }
    if (pm.open && pmP && pmP.images.length > 1) { if (e.key === "ArrowLeft") $("#pmPrev").click(); if (e.key === "ArrowRight") $("#pmNext").click(); }
  });

  /* ---------- Command palette ---------- */
  const pal = $("#palette"), palInput = $("#palInput"), palList = $("#palList");
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  $("#kbdKey").textContent = isMac ? "⌘ K" : "Ctrl K";
  const palItems = [
    ...$$("#navList a").map((a) => ({ kind: "Section", label: a.textContent, go: () => location.hash = a.getAttribute("href") })),
    { kind: "Action", label: "Download CV", go: () => $("#cvBtn").click() },
    { kind: "Action", label: "Copy email address", go: () => copy(SITE.email, "Email address copied") },
    { kind: "Action", label: "Switch light or dark theme", go: () => $('[data-action="theme"]').click() },
    ...PUBLICATIONS.map((p, i) => ({ kind: "Paper", label: p.title, go: () => {
      pubType = "all"; pubQuery = ""; $("#pubSearch").value = ""; renderPubFilter(); renderPubs();
      const el = $("#pub-" + i); el.scrollIntoView({ block: "center" });
      const btn = $(`[data-abs="${i}"]`, el); if (btn.getAttribute("aria-expanded") === "false") btn.click(); btn.focus();
    } })),
    ...PROJECTS.map((p, i) => ({ kind: "Project", label: p.title, go: () => openProject(i) }))
  ];
  let palSel = 0, palView = [];
  function renderPal() {
    const q = palInput.value.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    palView = palItems.filter((it) => words.every((w) => (it.label + " " + it.kind).toLowerCase().includes(w))).slice(0, 40);
    palSel = Math.min(palSel, Math.max(0, palView.length - 1));
    palList.innerHTML = palView.length
      ? palView.map((it, i) => `<li role="option" aria-selected="${i === palSel}" data-i="${i}"><span class="pk">${it.kind}</span><span class="pt">${esc(it.label)}</span></li>`).join("")
      : `<li aria-disabled="true"><span class="pt" style="color:var(--muted)">Nothing matches “${esc(palInput.value)}”. Try a topic like “ECG” or “IoT”.</span></li>`;
  }
  function openPal() { palInput.value = ""; palSel = 0; renderPal(); pal.showModal(); palInput.focus(); }
  function runPal(i) { const it = palView[i]; if (!it) return; pal.close(); setTimeout(it.go, 30); }
  $$('[data-action="palette"]').forEach((b) => b.addEventListener("click", openPal));
  palInput.addEventListener("input", () => { palSel = 0; renderPal(); });
  palInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); palSel = Math.min(palSel + 1, palView.length - 1); renderPal(); palList.children[palSel]?.scrollIntoView({ block: "nearest" }); }
    if (e.key === "ArrowUp") { e.preventDefault(); palSel = Math.max(palSel - 1, 0); renderPal(); palList.children[palSel]?.scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter") { e.preventDefault(); runPal(palSel); }
  });
  palList.addEventListener("click", (e) => { const li = e.target.closest("[data-i]"); if (li) runPal(+li.dataset.i); });
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
      e.preventDefault(); pal.open ? pal.close() : openPal();
    }
  });

  /* ---------- Mobile menu ---------- */
  const sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
  function setMenu(open) {
    sidebar.classList.toggle("open", open);
    scrim.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  menuBtn.addEventListener("click", () => setMenu(!sidebar.classList.contains("open")));
  scrim.addEventListener("click", () => setMenu(false));
  $$("#navList a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && sidebar.classList.contains("open")) setMenu(false); });

  /* ---------- Scrollspy ---------- */
  const navLinks = $$("#navList a");
  const sections = navLinks.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  sections.forEach((s) => spy.observe(s));

  /* ---------- Back to top ---------- */
  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 900), { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  /* ---------- Footer ---------- */
  $("#year").textContent = new Date().getFullYear();
  const lm = new Date(document.lastModified);
  $("#updated").textContent = isNaN(lm) ? "recently" : lm.toLocaleDateString("en-US", { month: "long", year: "numeric" });
})();
