/* Cover Page, "the 4 that make most of your budget": three hand built experiences, no library.
   Mounts into native Webflow blocks: <div class="cpx" data-cpx="menu|film|night"> ... <div class="cpx-app"></div></div>
   menu  = catering: the visitor writes a printed menu card, live
   film  = photo and video: a budget slider lights up a contact sheet of real wedding frames
   night = entertainment: the evening hour by hour, one act per moment
   Every result goes to WhatsApp with the full summary, so nothing is lost and no backend is needed. */
(function () {
  var SCRIPT = document.currentScript;
  var BASE = SCRIPT && SCRIPT.src ? SCRIPT.src.replace(/[^/]*$/, '') : './';
  var mounts = document.querySelectorAll('.cpx[data-cpx]');
  if (!mounts.length) return;
  var IT = (document.documentElement.lang || 'en').slice(0, 2) === 'it';
  var WA = '393278417970';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function wa(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
  function eur(n) { return n.toLocaleString('en-US').replace(/,/g, IT ? '.' : ',') + ' EUR'; }

  var css = `
/* these three cards now run on this script: anything else injected into them is hidden, the title stays */
.cpb-body-1:has(>.cpx)>:not(.cpb-t):not(.cpx){display:none!important}
.cpx{--ink:#141311;--mut:rgba(20,19,17,.58);--line:rgba(20,19,17,.12);--acc:#e25b1e;font-family:Inter,system-ui,sans-serif;color:var(--ink);margin-top:clamp(16px,1.6vw,28px)}
.cpx-lead{font-size:clamp(16px,1.05vw,19px);line-height:1.55;margin:0;max-width:62ch}
.cpx-quote{display:inline-flex;align-items:center;gap:12px;margin:16px 0 0;padding:12px 18px;border:1px solid var(--ink);border-radius:999px;font:600 clamp(13px,.95vw,17px)/1 Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--ink)}
.cpx-quote::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 0 rgba(226,91,30,.5);animation:cpxPulse 2.4s ease-out infinite}
@keyframes cpxPulse{0%{box-shadow:0 0 0 0 rgba(226,91,30,.45)}70%{box-shadow:0 0 0 10px rgba(226,91,30,0)}100%{box-shadow:0 0 0 0 rgba(226,91,30,0)}}
.cpx-app{margin-top:clamp(20px,2vw,36px)}
.cpx-k{font:500 11px/1.3 Inter,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--mut);margin:0 0 10px}
.cpx-chips{display:flex;flex-wrap:wrap;gap:8px}
.cpx-chip{appearance:none;border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:999px;padding:9px 15px;font:400 14px/1.2 Inter,sans-serif;cursor:pointer;transition:transform 160ms ease-out,background-color 160ms ease-out,border-color 160ms ease-out,color 160ms ease-out}
.cpx-chip:hover{border-color:rgba(20,19,17,.45)}
.cpx-chip:active{transform:scale(.97)}
.cpx-chip[aria-pressed=true]{background:var(--ink);border-color:var(--ink);color:#fff}
.cpx-chip:focus-visible,.cpx-btn:focus-visible,.cpx-in:focus-visible,.cpx-range:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
.cpx-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:999px;background:var(--ink);color:#fff;padding:16px 30px;font:500 13px/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:transform 160ms ease-out,opacity 160ms ease-out}
.cpx-btn:active{transform:scale(.97)}.cpx-btn[aria-disabled=true]{opacity:.35;pointer-events:none}
.cpx-ghost{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)}
.cpx-send{display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;margin-top:22px}
.cpx-send .cpx-quote{margin:0}
.cpx-in{border:0;border-bottom:1px solid var(--line);background:transparent;padding:10px 0;font:400 15px Inter,sans-serif;color:var(--ink);width:100%;border-radius:0}
.cpx-in::placeholder{color:rgba(20,19,17,.38)}
/* menu */
.cpx,.cpx-app,.cpx-m>*{min-width:0}
.cpx-m{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,.9fr);gap:clamp(24px,3vw,56px);align-items:start}
.cpx-ctl>*+*{margin-top:22px}
.cpx-guests{display:flex;align-items:center;gap:14px}
.cpx-step{appearance:none;width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:#fff;font:400 20px/1 Inter,sans-serif;cursor:pointer;color:var(--ink);transition:transform 160ms ease-out}
.cpx-step:active{transform:scale(.94)}
.cpx-gn{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(34px,2.6vw,48px);line-height:1;min-width:3ch;text-align:center;font-variant-numeric:tabular-nums}
.cpx-tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}
.cpx-tab{appearance:none;border:0;background:none;padding:10px 12px 12px;font:500 12px/1 Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);cursor:pointer;white-space:nowrap;position:relative}
.cpx-tab[aria-selected=true]{color:var(--ink)}
.cpx-tab[aria-selected=true]::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;background:var(--ink)}
.cpx-own{display:flex;gap:10px;align-items:end;margin-top:14px}
.cpx-own .cpx-in{flex:1}
.cpx-add{appearance:none;border:0;background:none;font:500 12px/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--ink);padding:10px 0;cursor:pointer}
.cpx-paper{position:relative;background:#fff;padding:clamp(28px,3vw,52px) clamp(22px,2.6vw,44px);text-align:center;box-shadow:0 1px 2px rgba(20,19,17,.06),0 24px 60px -28px rgba(20,19,17,.35);border-radius:2px;min-height:420px}
.cpx-paper::before{content:"";position:absolute;inset:12px;border:1px solid rgba(20,19,17,.14);pointer-events:none}
.cpx-paper::after{content:"";position:absolute;inset:16px;border:1px solid rgba(20,19,17,.07);pointer-events:none}
.cpx-pt{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(30px,2.4vw,44px);letter-spacing:.06em;text-transform:uppercase;margin:6px 0 2px}
.cpx-ps{font-family:Hurricane,cursive;font-size:clamp(26px,2vw,36px);color:var(--acc);line-height:1;margin:0 0 18px}
.cpx-pg{font:500 11px/1.4 Inter,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:var(--mut);margin:0 0 22px}
.cpx-co{margin:0 0 16px}
.cpx-co h5{font:500 10.5px/1 Inter,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:var(--mut);margin:0 0 8px}
.cpx-co h5::before,.cpx-co h5::after{content:"";display:inline-block;width:18px;height:1px;background:var(--line);vertical-align:middle;margin:0 10px}
.cpx-dish{display:block;margin:0 auto;font-family:"Classy Vogue",Georgia,serif;font-size:clamp(17px,1.2vw,21px);line-height:1.35;background:none;border:0;color:var(--ink);cursor:pointer;padding:2px 6px;animation:cpxInk 420ms cubic-bezier(.23,1,.32,1) both}
.cpx-dish:hover{text-decoration:line-through;text-decoration-color:rgba(20,19,17,.4)}
.cpx-dish.cpx-empty{font-family:Inter,sans-serif;font-size:13px;color:rgba(20,19,17,.32);cursor:default;font-style:italic;animation:none}
.cpx-dish.cpx-empty:hover{text-decoration:none}
@keyframes cpxInk{from{opacity:0;filter:blur(6px);transform:translateY(4px)}to{opacity:1;filter:blur(0);transform:none}}
/* film */
.cpx-f-top{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:18px}
.cpx-bud{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(40px,3.4vw,64px);line-height:1;font-variant-numeric:tabular-nums}
.cpx-range{-webkit-appearance:none;appearance:none;width:100%;height:28px;background:transparent;margin:18px 0 6px;cursor:pointer}
.cpx-range::-webkit-slider-runnable-track{height:2px;background:linear-gradient(90deg,var(--ink) var(--p,0%),var(--line) var(--p,0%))}
.cpx-range::-moz-range-track{height:2px;background:var(--line)}.cpx-range::-moz-range-progress{height:2px;background:var(--ink)}
.cpx-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:1px solid var(--ink);margin-top:-10px;box-shadow:0 2px 8px rgba(0,0,0,.15);transition:transform 160ms ease-out}
.cpx-range:active::-webkit-slider-thumb{transform:scale(1.12)}
.cpx-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:1px solid var(--ink)}
.cpx-ticks{display:flex;justify-content:space-between;font:400 11px Inter,sans-serif;color:var(--mut);letter-spacing:.06em}
.cpx-pk{margin-top:22px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px 24px;align-items:baseline}
.cpx-pkn{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(26px,2vw,38px);line-height:1.1;margin:0;transition:opacity 200ms ease-out,filter 200ms ease-out}
.cpx-pkp{font:500 13px Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--mut)}
.cpx-pkd{grid-column:1/-1;margin:0;font-size:15px;line-height:1.55;color:rgba(20,19,17,.8);max-width:64ch}
.cpx-swap{opacity:0;filter:blur(4px)}
.cpx-sheet{margin-top:24px;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:clamp(4px,.5vw,8px);background:#111;padding:clamp(8px,.9vw,14px);border-radius:3px;position:relative}
.cpx-fr{position:relative;aspect-ratio:3/4;overflow:hidden;background:#222}
.cpx-fr img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) brightness(.35) blur(2px);transform:scale(1.04);transition:filter 600ms cubic-bezier(.23,1,.32,1),transform 600ms cubic-bezier(.23,1,.32,1)}
.cpx-fr.on img{filter:none;transform:none}
.cpx-fr i{position:absolute;left:6px;bottom:5px;font:500 9px/1 Inter,sans-serif;letter-spacing:.14em;color:rgba(255,255,255,.75);font-style:normal;text-transform:uppercase;opacity:0;transition:opacity 300ms ease-out}
.cpx-fr.on i{opacity:1}
.cpx-fr.mv::after{content:"";position:absolute;top:50%;left:50%;width:0;height:0;margin:-9px 0 0 -5px;border-left:14px solid rgba(255,255,255,.9);border-top:9px solid transparent;border-bottom:9px solid transparent;opacity:0;transition:opacity 300ms ease-out}
.cpx-fr.mv.on::after{opacity:1}
.cpx-feat{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.cpx-feat span{font:400 13px/1 Inter,sans-serif;padding:8px 12px;border-radius:999px;border:1px solid var(--line);color:var(--mut);transition:background-color 200ms ease-out,color 200ms ease-out,border-color 200ms ease-out}
.cpx-feat span.on{background:var(--ink);border-color:var(--ink);color:#fff}
.cpx-more{font:500 12px/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--ink);text-decoration:underline;text-underline-offset:5px}
/* night */
.cpx-n{position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0}
.cpx-n::before{content:"";position:absolute;left:0;right:0;top:15px;height:1px;background:var(--line)}
.cpx-nl{position:absolute;left:0;top:15px;height:1px;background:var(--ink);width:var(--w,0%);transition:width 500ms cubic-bezier(.23,1,.32,1)}
.cpx-mo{position:relative;padding:0 10px 0 0}
.cpx-dot{width:31px;height:31px;border-radius:50%;background:#fff;border:1px solid var(--line);display:grid;place-items:center;font:500 10px Inter,sans-serif;color:var(--mut);position:relative;transition:background-color 200ms ease-out,border-color 200ms ease-out,color 200ms ease-out}
.cpx-mo.on .cpx-dot{background:var(--ink);border-color:var(--ink);color:#fff}
.cpx-t{font:500 11px/1 Inter,sans-serif;letter-spacing:.18em;color:var(--mut);margin:16px 0 6px;font-variant-numeric:tabular-nums}
.cpx-mn{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(20px,1.5vw,27px);line-height:1.1;margin:0 0 12px}
.cpx-mo .cpx-chips{flex-direction:column;align-items:flex-start;gap:6px}
.cpx-mo .cpx-chip{font-size:13px;padding:8px 12px;text-align:left}
.cpx-pick{font-family:Hurricane,cursive;color:var(--acc);font-size:24px;line-height:1;min-height:24px;margin:10px 0 0}
.cpx-pick span{display:inline-block;animation:cpxInk 420ms cubic-bezier(.23,1,.32,1) both}
@media (max-width:1100px){.cpx-m{grid-template-columns:1fr}}
@media (max-width:900px){.cpx-n{grid-template-columns:1fr;gap:26px;padding-left:46px}.cpx-n::before{left:15px;right:auto;top:0;bottom:0;width:1px;height:auto}.cpx-nl{left:15px;top:0;width:1px!important;height:var(--w,0%);transition:height 500ms cubic-bezier(.23,1,.32,1)}.cpx-dot{position:absolute;left:-46px;top:-4px}.cpx-t{margin-top:0}.cpx-mo .cpx-chips{flex-direction:row;flex-wrap:wrap}.cpx-sheet{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (prefers-reduced-motion:reduce){.cpx *,.cpx *::before,.cpx *::after{animation:none!important;transition:none!important}}
`;
  var st = el('style'); st.id = 'cpx-css'; st.textContent = css; document.head.appendChild(st);

  /* ---------------- catering: the menu card ---------------- */
  var MENU = IT ? {
    g: 'Ospiti', s: 'Servizio', svc: ['Cena servita', 'Family style', 'Isole a buffet'],
    courses: [['Aperitivo', ['Crudo e burrata', 'Fritto misto', 'Ostriche', 'Franciacorta']], ['Antipasto', ['Vitello tonnato', 'Carpaccio di manzo', 'Insalata di mare', 'Fiori di zucca']], ['Primo', ['Risotto alla milanese', 'Tortelli di zucca', 'Tagliolini al tartufo', 'Risotto al pesce persico']], ['Secondo', ['Cotoletta alla milanese', 'Filetto di manzo', 'Branzino al sale', 'Ossobuco']], ['Dolce', ['Torta nuziale', 'Tiramisù', 'Panna cotta', 'Croquembouche']], ['Open bar', ['Negroni', 'Spritz', 'Gin tonic', 'Vini lombardi']]],
    own: 'Scrivi il tuo piatto', add: 'Aggiungi', title: 'Menu', sub: 'il vostro menu da sogno', for: 'per', guests: 'ospiti', empty: 'tocca un piatto o scrivi il tuo',
    send: 'Invia il mio menu', msg: 'Ciao Cover Page, ecco il menu dei nostri sogni'
  } : {
    g: 'Guests', s: 'Service', svc: ['Seated dinner', 'Family style', 'Food stations'],
    courses: [['Aperitivo', ['Crudo and burrata', 'Fritto misto', 'Oysters', 'Franciacorta']], ['Antipasto', ['Vitello tonnato', 'Beef carpaccio', 'Seafood salad', 'Courgette flowers']], ['Primo', ['Risotto alla milanese', 'Pumpkin tortelli', 'Truffle tagliolini', 'Lake perch risotto']], ['Secondo', ['Cotoletta alla milanese', 'Beef fillet', 'Salt crusted sea bass', 'Ossobuco']], ['Dolce', ['Wedding cake', 'Tiramisù', 'Panna cotta', 'Croquembouche']], ['Open bar', ['Negroni', 'Spritz', 'Gin tonic', 'Lombardy wines']]],
    own: 'Write your own dish', add: 'Add', title: 'Menu', sub: 'your dream menu', for: 'for', guests: 'guests', empty: 'tap a dish or write your own',
    send: 'Send my menu', msg: 'Hello Cover Page, here is our dream menu'
  };
  function menu(app, quote) {
    var state = { g: 120, s: 0, c: 0, d: MENU.courses.map(function () { return []; }) };
    var wrap = el('div', 'cpx-m'), ctl = el('div', 'cpx-ctl'), paper = el('div', 'cpx-paper');
    wrap.append(ctl, paper); app.appendChild(wrap);
    // guests
    var gb = el('div'); gb.appendChild(el('p', 'cpx-k', MENU.g));
    var gr = el('div', 'cpx-guests'), minus = el('button', 'cpx-step', '&minus;'), plus = el('button', 'cpx-step', '+'), gn = el('span', 'cpx-gn');
    minus.type = plus.type = 'button'; minus.setAttribute('aria-label', '-10'); plus.setAttribute('aria-label', '+10');
    gr.append(minus, gn, plus); gb.appendChild(gr); ctl.appendChild(gb);
    minus.onclick = function () { state.g = Math.max(10, state.g - 10); draw(); };
    plus.onclick = function () { state.g = Math.min(600, state.g + 10); draw(); };
    // service
    var sb = el('div'); sb.appendChild(el('p', 'cpx-k', MENU.s)); var sc = el('div', 'cpx-chips'); sb.appendChild(sc); ctl.appendChild(sb);
    MENU.svc.forEach(function (n, i) { var b = el('button', 'cpx-chip', esc(n)); b.type = 'button'; b.onclick = function () { state.s = i; draw(); }; sc.appendChild(b); });
    // courses
    var cb = el('div'), tabs = el('div', 'cpx-tabs'), dishes = el('div', 'cpx-chips'); tabs.setAttribute('role', 'tablist'); dishes.style.marginTop = '16px';
    cb.append(tabs, dishes); ctl.appendChild(cb);
    MENU.courses.forEach(function (c, i) { var t = el('button', 'cpx-tab', esc(c[0])); t.type = 'button'; t.setAttribute('role', 'tab'); t.onclick = function () { state.c = i; draw(); }; tabs.appendChild(t); });
    var own = el('form', 'cpx-own'), inp = el('input', 'cpx-in'), add = el('button', 'cpx-add', MENU.add);
    inp.placeholder = MENU.own; inp.maxLength = 60; inp.setAttribute('aria-label', MENU.own); add.type = 'submit'; own.append(inp, add); cb.appendChild(own);
    own.onsubmit = function (e) { e.preventDefault(); var v = inp.value.trim(); if (!v) return; var l = state.d[state.c]; if (l.indexOf(v) < 0 && l.length < 6) l.push(v); inp.value = ''; draw(v); };
    // send
    var send = el('div', 'cpx-send'), go = el('a', 'cpx-btn', esc(MENU.send)); go.target = '_blank'; go.rel = 'noopener';
    send.appendChild(go); if (quote) send.appendChild(quote); ctl.appendChild(send);

    function toggle(d) { var l = state.d[state.c], k = l.indexOf(d); if (k >= 0) l.splice(k, 1); else if (l.length < 6) l.push(d); draw(k >= 0 ? null : d); }
    function draw(fresh) {
      gn.textContent = state.g;
      [].forEach.call(sc.children, function (b, i) { b.setAttribute('aria-pressed', i === state.s); });
      [].forEach.call(tabs.children, function (t, i) { t.setAttribute('aria-selected', i === state.c); t.textContent = MENU.courses[i][0] + (state.d[i].length ? ' · ' + state.d[i].length : ''); });
      dishes.innerHTML = '';
      MENU.courses[state.c][1].concat(state.d[state.c].filter(function (x) { return MENU.courses[state.c][1].indexOf(x) < 0; })).forEach(function (d) {
        var b = el('button', 'cpx-chip', esc(d)); b.type = 'button'; b.setAttribute('aria-pressed', state.d[state.c].indexOf(d) >= 0); b.onclick = function () { toggle(d); }; dishes.appendChild(b);
      });
      // the printed card
      var h = '<p class="cpx-pt">' + MENU.title + '</p><p class="cpx-ps">' + MENU.sub + '</p><p class="cpx-pg">' + MENU.svc[state.s] + ' · ' + MENU.for + ' ' + state.g + ' ' + MENU.guests + '</p>';
      var any = false;
      MENU.courses.forEach(function (c, i) {
        if (!state.d[i].length) return; any = true;
        h += '<div class="cpx-co"><h5>' + esc(c[0]) + '</h5>' + state.d[i].map(function (d) { return '<button type="button" class="cpx-dish" data-c="' + i + '" data-d="' + esc(d) + '"' + (d === fresh ? '' : ' style="animation:none"') + '>' + esc(d) + '</button>'; }).join('') + '</div>';
      });
      if (!any) h += '<span class="cpx-dish cpx-empty">' + MENU.empty + '</span>';
      paper.innerHTML = h;
      [].forEach.call(paper.querySelectorAll('button.cpx-dish'), function (b) { b.onclick = function () { var l = state.d[+b.dataset.c], k = l.indexOf(b.dataset.d); if (k >= 0) l.splice(k, 1); draw(); }; });
      var txt = MENU.msg + '\n' + MENU.svc[state.s] + ', ' + state.g + ' ' + MENU.guests + '\n' + MENU.courses.map(function (c, i) { return state.d[i].length ? c[0] + ': ' + state.d[i].join(', ') : ''; }).filter(Boolean).join('\n');
      go.href = wa(txt); go.setAttribute('aria-disabled', !any);
    }
    draw();
  }

  /* ---------------- photo and video: the contact sheet ---------------- */
  var FILM = IT ? {
    k: 'Il tuo budget foto e video', lab: ['Fotografia', 'Videografia', 'Foto e video', 'Su misura'],
    d: ['300 foto editate, un album digitale e uno sneak peek in giornata.', 'Un film del matrimonio e un teaser, fino a sette angolazioni.', '150 foto editate e un film del matrimonio.', 'Il nostro pacchetto più alto più un progetto su misura: più operatori per foto, video e drone, più punti di vista, più profondità in ciò che ricevi. Più invitati richiedono più talenti.'],
    below: 'Sotto i nostri pacchetti: il primo parte da 790 EUR.', feat: ['Foto editate', 'Sneak peek', 'Film', 'Teaser', 'Più angolazioni', 'Drone', 'Secondo operatore'],
    send: 'Ricevi la proposta', more: 'Vedi i pacchetti', msg: 'Ciao Cover Page, il nostro budget foto e video è', link: '/it/foto-video-matrimonio-milano'
  } : {
    k: 'Your photo and video budget', lab: ['Photography', 'Videography', 'Photo and video', 'Custom build'],
    d: ['300 edited photos, a digital album and a same day sneak peek.', 'A wedding film and a teaser, up to seven camera angles.', '150 edited photos and a wedding film.', 'Our highest package plus a custom build: more operators for photo, video and drone, more points of view, more depth in what you receive. A larger guest list needs more talents.'],
    below: 'Below our packages: the first one starts at 790 EUR.', feat: ['Edited photos', 'Sneak peek', 'Wedding film', 'Teaser', 'More angles', 'Drone', 'Second operator'],
    send: 'Get the proposal', more: 'See the packages', msg: 'Hello Cover Page, our photo and video budget is', link: 'https://www.coverpageagency.com/foto-video-matrimonio-milano'
  };
  var PRICE = [790, 990, 1490, 2500];
  // which frames light up and which features switch on, per package
  var LIT = [[0, 1, 2, 3, 6, 7, 8], [4, 5, 9, 10], [0, 1, 2, 4, 5, 6, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];
  var FEAT = [[0, 1], [2, 3, 4], [0, 2], [0, 1, 2, 3, 4, 5, 6]];
  function film(app, quote) {
    var MIN = 500, MAX = 4000;
    var top = el('div', 'cpx-f-top'), kb = el('div'); kb.appendChild(el('p', 'cpx-k', FILM.k)); var bud = el('div', 'cpx-bud'); kb.appendChild(bud); top.appendChild(kb); app.appendChild(top);
    var r = el('input', 'cpx-range'); r.type = 'range'; r.min = MIN; r.max = MAX; r.step = 50; r.value = 1000; r.setAttribute('aria-label', FILM.k); app.appendChild(r);
    var tk = el('div', 'cpx-ticks', '<span>500</span><span>790</span><span>990</span><span>1,490</span><span>2,500+</span><span>4,000</span>'); app.appendChild(tk);
    var pk = el('div', 'cpx-pk'), pn = el('p', 'cpx-pkn'), pp = el('span', 'cpx-pkp'), pd = el('p', 'cpx-pkd'); pk.append(pn, pp, pd); app.appendChild(pk);
    var feat = el('div', 'cpx-feat'); FILM.feat.forEach(function (f) { feat.appendChild(el('span', '', esc(f))); }); app.appendChild(feat);
    var sheet = el('div', 'cpx-sheet'); app.appendChild(sheet);
    var frames = [];
    for (var i = 0; i < 12; i++) {
      var f = el('div', 'cpx-fr' + ([4, 5, 9, 10].indexOf(i) >= 0 ? ' mv' : '')), im = el('img'); im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'; im.src = BASE + 'wed/' + (i + 1) + '.webp';
      f.append(im, el('i', '', ([4, 5, 9, 10].indexOf(i) >= 0 ? 'Film ' : 'Frame ') + String(i + 1).padStart(2, '0'))); sheet.appendChild(f); frames.push(f);
    }
    var send = el('div', 'cpx-send'), go = el('a', 'cpx-btn', esc(FILM.send)), more = el('a', 'cpx-more', esc(FILM.more));
    go.target = '_blank'; go.rel = 'noopener'; more.href = FILM.link;
    send.append(go); if (quote) send.appendChild(quote); send.appendChild(more); app.appendChild(send);
    var last = -2;
    function tier(b) { var t = -1; for (var k = 0; k < PRICE.length; k++) if (b >= PRICE[k]) t = k; return t; }
    function draw() {
      var b = +r.value, t = tier(b);
      r.style.setProperty('--p', ((b - MIN) / (MAX - MIN) * 100) + '%');
      bud.textContent = (b >= MAX ? eur(MAX) + '+' : eur(b));
      if (t !== last) {
        var set = function () {
          pn.textContent = t < 0 ? '' : FILM.lab[t]; pp.textContent = t < 0 ? '' : (t === 3 ? eur(PRICE[2]) + ' +' : eur(PRICE[t]));
          pd.textContent = t < 0 ? FILM.below : FILM.d[t];
          frames.forEach(function (f, i) { f.classList.toggle('on', t >= 0 && LIT[t].indexOf(i) >= 0); });
          [].forEach.call(feat.children, function (s, i) { s.classList.toggle('on', t >= 0 && FEAT[t].indexOf(i) >= 0); });
          pn.classList.remove('cpx-swap');
        };
        if (last === -2 || RM) set(); else { pn.classList.add('cpx-swap'); setTimeout(set, 180); }
        last = t;
      }
      go.href = wa(FILM.msg + ' ' + bud.textContent + (t >= 0 ? ' (' + FILM.lab[t] + ')' : ''));
    }
    r.addEventListener('input', draw); draw();
  }

  /* ---------------- entertainment: the night, hour by hour ---------------- */
  var NIGHT = IT ? {
    m: [['15:30', 'Cerimonia', ['Musicisti dal vivo', 'Voce e archi', 'Arpa']], ['17:00', 'Aperitivo', ['Intrattenimento itinerante', 'Trio jazz', 'Sax']], ['19:30', 'Cena', ['Band dal vivo', 'Pianoforte', 'Cantante']], ['22:00', 'Primo ballo', ['Live band', 'Ballerini', 'Show di luci']], ['22:30', 'Festa', ['DJ', 'DJ e sax', 'Show LED']], ['00:30', 'A tarda notte', ['Show di fuoco', 'Acrobati', 'Fuochi d’artificio']]],
    send: 'Ricevi la proposta', msg: 'Ciao Cover Page, ecco la nostra serata'
  } : {
    m: [['15:30', 'Ceremony', ['Live musicians', 'Voice and strings', 'Harp']], ['17:00', 'Aperitivo', ['Roaming entertainment', 'Jazz trio', 'Saxophone']], ['19:30', 'Dinner', ['Live band', 'Piano', 'Singer']], ['22:00', 'First dance', ['Live band', 'Dancers', 'Light show']], ['22:30', 'Party', ['DJ', 'DJ and sax', 'LED show']], ['00:30', 'Late night', ['Fire show', 'Acrobats', 'Circus act']]],
    send: 'Get the proposal', msg: 'Hello Cover Page, here is our night'
  };
  function night(app, quote) {
    var pick = NIGHT.m.map(function () { return null; });
    var tl = el('div', 'cpx-n'), line = el('div', 'cpx-nl'); tl.appendChild(line); app.appendChild(tl);
    var cols = NIGHT.m.map(function (m, i) {
      var c = el('div', 'cpx-mo'); c.appendChild(el('div', 'cpx-dot', String(i + 1)));
      c.appendChild(el('p', 'cpx-t', m[0])); c.appendChild(el('p', 'cpx-mn', esc(m[1])));
      var ch = el('div', 'cpx-chips'); m[2].forEach(function (a) { var b = el('button', 'cpx-chip', esc(a)); b.type = 'button'; b.onclick = function () { pick[i] = pick[i] === a ? null : a; draw(i); }; ch.appendChild(b); });
      c.appendChild(ch); var pk = el('p', 'cpx-pick'); c.appendChild(pk); tl.appendChild(c); return { c: c, ch: ch, pk: pk };
    });
    var send = el('div', 'cpx-send'), go = el('a', 'cpx-btn', esc(NIGHT.send)); go.target = '_blank'; go.rel = 'noopener';
    send.appendChild(go); if (quote) send.appendChild(quote); app.appendChild(send);
    function draw(fresh) {
      var lastOn = -1;
      cols.forEach(function (o, i) {
        o.c.classList.toggle('on', !!pick[i]); if (pick[i]) lastOn = i;
        [].forEach.call(o.ch.children, function (b) { b.setAttribute('aria-pressed', b.textContent === pick[i]); });
        if (i === fresh || !pick[i]) o.pk.innerHTML = pick[i] ? '<span>' + esc(pick[i]) + '</span>' : '';
      });
      tl.style.setProperty('--w', lastOn < 0 ? '0%' : ((lastOn + 0.5) / NIGHT.m.length * 100) + '%');
      var any = pick.some(Boolean);
      go.href = wa(NIGHT.msg + '\n' + NIGHT.m.map(function (m, i) { return pick[i] ? m[0] + ' ' + m[1] + ': ' + pick[i] : ''; }).filter(Boolean).join('\n'));
      go.setAttribute('aria-disabled', !any);
    }
    draw();
  }

  var RUN = { menu: menu, film: film, night: night };
  [].forEach.call(mounts, function (m) {
    var fn = RUN[m.dataset.cpx], app = m.querySelector('.cpx-app');
    if (!fn || !app || app.dataset.on) return; app.dataset.on = '1';
    // the "quote within" line moves next to the send button, where the decision happens
    var q = m.querySelector('.cpx-quote');
    try { fn(app, q); } catch (e) { if (q && !q.parentNode.isConnected) m.appendChild(q); }
  });
})();
