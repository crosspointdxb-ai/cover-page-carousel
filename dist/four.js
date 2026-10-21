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
  // market comes from the section itself (data-market="ae" on #budget-four), never from the slug
  var AE = !!document.querySelector('#budget-four[data-market="ae"]');
  var WA = AE ? '971524018887' : '393278417970';
  var CUR = AE ? 'AED' : 'EUR';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function wa(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
  // anonymous answers go to the Cover Page wedding endpoint (same one the villa finder uses), never personal data
  var API = 'https://cover-agent-wedding.coverpageagency.workers.dev' + (/\.webflow\.io$/.test(location.hostname) ? '/next' : '');
  function save(kind, data) { try { fetch(API + '/wedding/lead', { method: 'POST', keepalive: true, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind: kind, lang: IT ? 'it' : 'en', page: location.pathname, data: data }) }); } catch (e) {} }
  function eur(n) { return n.toLocaleString('en-US').replace(/,/g, IT ? '.' : ',') + ' ' + CUR; }

  var css = `
/* these three cards now run on this script: anything else injected into them is hidden, the title stays */
.cpb-body-1:has(>.cpx)>:not(.cpb-t):not(.cpx){display:none!important}
/* location card: the native intro (Webflow) replaces the text the villa finder script writes */
.cpb-cardloc .cpb-body-1:has(>.cpx-lead)>.cpb-p{display:none!important}
.cpb-cardloc .cpx-lead{margin:clamp(12px,1.2vw,20px) 0 0}
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
.cpx-row3{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.6fr);gap:18px 28px;align-items:end}.cpx-row3>:first-child{grid-column:1/-1}
.cpx-f{display:block}.cpx-f .cpx-k{display:block}
.cpx-hw{font-family:"Homemade Apple",cursive;font-weight:400;letter-spacing:0;text-transform:none;color:#1d2a44}
.cpx-write{display:inline-block;animation:cpxWrite 900ms cubic-bezier(.45,.05,.35,1) both}
@keyframes cpxWrite{from{clip-path:inset(-20% 100% -20% 0)}to{clip-path:inset(-20% -2% -20% 0)}}
.cpx-pg .cpx-hw{font-size:clamp(13px,.9vw,15px);color:#1d2a44}.cpx-pg i{font-style:normal;color:var(--mut)}
.cpx-pg{letter-spacing:0!important;text-transform:none!important;line-height:2!important}
.cpx-dish .cpx-hw{font-size:clamp(16px,1.1vw,19px);line-height:1.9}
.cpx-live{font-family:"Homemade Apple",cursive;font-size:clamp(16px,1.1vw,19px);line-height:1.9;color:rgba(29,42,68,.4);display:block}
.cpx-live::after{content:"";display:inline-block;width:1px;height:1em;background:#1d2a44;margin-left:3px;vertical-align:-2px;animation:cpxCaret 1s steps(2) infinite}
@keyframes cpxCaret{50%{opacity:0}}
.cpx-note{margin:18px 0 0;font-size:12px;color:var(--mut)}.cpx-note b{font:500 10.5px Inter,sans-serif;letter-spacing:.24em;text-transform:uppercase;margin-right:6px}.cpx-note .cpx-hw{font-size:15px}
.cpx-empty{display:block;font-family:"Homemade Apple",cursive;font-size:15px;color:rgba(29,42,68,.35);margin-top:28px}
.cpx-pkn em{font:500 10.5px/1 Inter,sans-serif;letter-spacing:.2em;text-transform:uppercase;font-style:normal;vertical-align:middle;margin-left:10px;padding:6px 10px;border-radius:999px;background:var(--acc);color:#fff}
.cpx-cap{position:absolute;left:0;right:0;bottom:0;padding:28px 8px 8px;background:linear-gradient(transparent,rgba(0,0,0,.78));color:#fff;font:500 clamp(10px,.75vw,13px)/1.25 Inter,sans-serif;opacity:0;transform:translateY(6px);transition:opacity 400ms ease-out,transform 400ms cubic-bezier(.23,1,.32,1);transition-delay:inherit}
.cpx-fr.on .cpx-cap{opacity:1;transform:none}
.cpx-fr img{transition-delay:inherit}
.cpw-mapw p.cr.cpx-crx{display:none}
.cpx-cri{appearance:none;width:22px;height:22px;border-radius:50%;border:1px solid rgba(20,19,17,.25);background:#fff;color:rgba(20,19,17,.6);font:italic 600 12px/1 Georgia,serif;cursor:pointer;padding:0;margin:6px 0 0}
.cpx-agent{margin-top:34px;padding-top:26px;border-top:1px solid var(--line)}
.cpx-agent.cpx-idle .entertainment-list,.cpx-agent.cpx-idle .w-dyn-empty{display:none}
.cpx-agent .entertainment-list{max-height:620px;overflow:auto}
.cpx-ld{font-size:14px;color:var(--mut);margin:0}
@media (max-width:900px){.cpx-row3{grid-template-columns:1fr}}
.cpx-wz{min-height:360px;display:flex;flex-direction:column}
.cpx-dots{display:flex;gap:6px;margin-bottom:22px}.cpx-dots i{flex:1;height:2px;background:var(--line);transition:background-color 300ms ease-out}.cpx-dots i.on{background:var(--ink)}.cpx-dots i.cur{background:var(--acc)}
.cpx-qn{font:500 11px/1 Inter,sans-serif;letter-spacing:.2em;color:var(--mut);margin:0 0 12px}
.cpx-qt{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(26px,2.2vw,40px);line-height:1.12;margin:0 0 20px;animation:cpxInk 420ms cubic-bezier(.23,1,.32,1) both}.cpx-qt span{color:var(--acc)}
.cpx-big{font-size:clamp(17px,1.2vw,21px);padding:12px 0;resize:none;font-family:Inter,sans-serif}
.cpx-err{color:var(--acc);font-size:13px;min-height:18px;margin:8px 0 0}
.cpx-nav{display:flex;align-items:center;gap:12px;margin-top:auto;padding-top:18px}
.cpx-skip{appearance:none;border:0;background:none;font:500 12px/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--mut);cursor:pointer;margin-left:auto}
.cpx-nav [hidden],.cpx-send[hidden]{display:none!important}
.cpx-em,.cpx-ph{margin-bottom:10px}.cpx-send .cpx-skip{margin-left:0}
.cpx-ttl3{margin:4px 0 18px;line-height:1.1}.cpx-s1{font-family:Hurricane,cursive;font-size:clamp(28px,2.2vw,40px);color:var(--acc)}.cpx-s2{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(24px,2vw,36px);letter-spacing:.06em}
.cpx-bfr{display:flex;align-items:center;gap:12px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 6px 6px 22px;max-width:640px}
.cpx-bfr .cpx-bud{border:0;font-family:"Classy Vogue",Georgia,serif;font-size:clamp(26px,2vw,36px);padding:4px 0;flex:1;min-width:0}
.cpx-eur{font:500 12px Inter,sans-serif;letter-spacing:.16em;color:var(--mut)}
.cpx-bf .cpx-k{display:block}
.cpx-res{animation:cpxInk 420ms cubic-bezier(.23,1,.32,1) both}
.cpx-res .cpx-fr{display:none}.cpx-res .cpx-fr.on{display:block;animation:cpxPop 560ms cubic-bezier(.34,1.56,.64,1) both}
@keyframes cpxPop{from{opacity:0;transform:translateY(14px) scale(.9)}to{opacity:1;transform:none}}
.cpx-res .cpx-fr.on img{filter:none;transform:none}.cpx-res .cpx-fr.on .cpx-cap{opacity:1;transform:none}
.cpx-res .cpx-sheet{background:none;padding:0;gap:clamp(8px,.8vw,14px);grid-template-columns:repeat(auto-fill,minmax(clamp(120px,11vw,190px),1fr))}.cpx-res .cpx-fr{border-radius:4px;box-shadow:0 18px 40px -22px rgba(0,0,0,.45)}
.cpx-fr img,.cpx-cap{transition-delay:inherit}
@media (max-width:600px){.cpx-bfr{flex-wrap:wrap;border-radius:18px;padding:10px 14px}.cpx-bfr .cpx-btn{width:100%}}
/* minimal design system (cpa-service-pages Part 5): outlined pills, no fills, no shadows, hairlines */
.cpx-fact{margin-top:10px}
.cpx-btn{background:transparent!important;color:var(--ink)!important;box-shadow:inset 0 0 0 1px var(--ink)!important;padding:13px 26px!important;font-size:12.5px!important;letter-spacing:.14em!important}
.cpx-btn:hover{background:rgba(0,0,0,.06)!important}
.cpx-chip[aria-pressed=true]{background:rgba(0,0,0,.06)!important;color:var(--ink)!important;border-color:var(--ink)!important;box-shadow:inset 0 0 0 1px var(--ink)}
.cpx-paper{box-shadow:none!important;border:1px solid rgba(0,0,0,.14)}
.cpx-res .cpx-fr{box-shadow:none!important}
.cpx-pkn em{background:transparent!important;color:var(--ink)!important;box-shadow:inset 0 0 0 1px rgba(0,0,0,.22)}
.cpx-quote{border-color:rgba(0,0,0,.22)!important}.cpx-quote::before{background:var(--ink)!important;animation:none!important}
.cpx-mo.on .cpx-dot{background:#fff!important;color:var(--ink)!important;border-color:var(--ink)!important}
.cpx-nl{background:var(--ink)}
.cpx-dots i.cur{background:var(--ink)!important}.cpx-dots i.on{background:rgba(0,0,0,.45)!important}
.cpx-range::-webkit-slider-thumb{box-shadow:none!important}
@media (max-width:600px){.cpx-btn{width:100%;padding:13px 14px!important;font-size:10.5px!important}}
@media (max-width:1100px){.cpx-m{grid-template-columns:1fr}}
@media (max-width:900px){.cpx-n{grid-template-columns:1fr;gap:26px;padding-left:46px}.cpx-n::before{left:15px;right:auto;top:0;bottom:0;width:1px;height:auto}.cpx-nl{left:15px;top:0;width:1px!important;height:var(--w,0%);transition:height 500ms cubic-bezier(.23,1,.32,1)}.cpx-dot{position:absolute;left:-46px;top:-4px}.cpx-t{margin-top:0}.cpx-mo .cpx-chips{flex-direction:row;flex-wrap:wrap}.cpx-sheet{grid-template-columns:repeat(4,minmax(0,1fr))}}
/* 1.6: numbered cards, Cover Agent as the star, one card per phone screen */
#budget-four{counter-reset:cpbn}
#budget-four .cpb-t{counter-increment:cpbn}
#budget-four .cpb-t::before{content:"0" counter(cpbn);display:block;font:500 11px/1 Inter,sans-serif;letter-spacing:.22em;color:rgba(20,19,17,.5);margin:0 0 8px}
.cpx-agent{margin-top:clamp(22px,2vw,34px);padding:clamp(18px,1.8vw,30px);border:1px solid rgba(20,19,17,.22);border-radius:6px;border-top-width:1px}
.cpx-at{margin:0 0 6px;line-height:1}
.cpx-at1{font-family:"Classy Vogue",Georgia,serif;font-size:clamp(26px,2.2vw,40px);letter-spacing:.04em}
.cpx-at2{font-family:Hurricane,cursive;font-size:clamp(30px,2.6vw,46px);color:var(--acc)}
.cpx-as{font-size:clamp(13px,.95vw,16px);line-height:1.5;color:var(--mut);margin:0 0 14px;max-width:56ch}
.cpx-nk{margin-top:clamp(22px,2vw,34px)}
@media (max-width:767px){
#budget-four .cpb-grid-1>article .cpb-img-1,#budget-four .cpb-img-1{height:112px!important;min-height:0!important;object-fit:cover}
#budget-four .cpb-grid-1>article .cpb-body-1,#budget-four .cpb-body-1{padding:16px!important}
#budget-four .cpb-t::before{margin-bottom:6px}
.cpx{margin-top:10px}
.cpx-app{margin-top:14px}
.cpx-lead,.cpb-cardloc .cpx-lead{font-size:13.6px;line-height:1.5}
.cpx-fact{font-size:12px;line-height:1.5;margin:8px 0 0}
.cpx-quote{padding:9px 14px;font-size:11px;margin-top:10px}
/* location: villa finder compact */
.cpw-tool .cpw-modes{margin-bottom:8px}.cpw-tool .cpw-modes button{padding:7px 10px!important;font-size:13px!important}
.cpw-tool .cpw-cnt,.cpw-tool .cpw-hint{display:none!important}.cpb-cardloc .cpx-lead{line-height:1.45}
.cpw-tool .cpw-pill{padding:4px!important}
.cpw-tool .cpw-pill button,.cpw-tool .cpw-go{background:transparent!important;color:#141311!important;box-shadow:inset 0 0 0 1px #141311!important;padding:9px 14px!important;font-size:10.5px!important}
.cpw-tool .cpw-flt{margin-top:8px}.cpw-tool .cpw-lakes,.cpw-tool .cpw-rg{margin-bottom:4px!important}
.cpw-tool .cpw-chip{padding:5px 10px!important;font-size:12px!important}
.cpw-tool .cpw-mapw p{font-size:12px!important;margin:0 0 6px!important}
.cpw-tool .cpw-map svg{max-height:150px;width:100%}.cpw-tool .cpw-map{padding:10px!important}
/* catering: wizard and menu card in one screen */
.cpx-wz{min-height:0}
.cpx-dots{margin-bottom:12px}.cpx-qn{margin-bottom:6px}
.cpx-qt{font-size:22px;margin:0 0 10px}
.cpx-big{font-size:16px;padding:8px 0}
.cpx-nav{padding-top:10px}
.cpx-m{gap:14px}
.cpx-paper{min-height:0;padding:20px 16px}
.cpx-paper::before{inset:8px}.cpx-paper::after{inset:11px}
.cpx-ttl3{margin:0 0 8px}.cpx-s1{font-size:24px}.cpx-s2{font-size:19px}
.cpx-pg{margin:0 0 8px}.cpx-co{margin:0 0 6px}.cpx-dish .cpx-hw,.cpx-live{font-size:13px;line-height:1.7}
.cpx-empty{margin-top:8px;font-size:12.5px}
/* photo and video: centred budget, smaller frames */
.cpx-bf{text-align:center}.cpx-bf .cpx-k{text-align:center}
.cpx-bfr{margin:0 auto;justify-content:center}.cpx-bfr .cpx-bud{text-align:center;font-size:22px}
.cpx-res{text-align:center}.cpx-pk{justify-items:center;text-align:center;grid-template-columns:1fr}
.cpx-pkn{font-size:22px}.cpx-pkd{font-size:12.8px;margin:0 auto}
.cpx-res .cpx-sheet{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-top:14px}
.cpx-res .cpx-cap{font-size:9px;padding:16px 4px 4px}
.cpx-send{justify-content:center;margin-top:14px;gap:10px}
/* entertainment: the six moments in one swipeable line */
.cpx-n{display:flex!important;grid-template-columns:none!important;gap:10px!important;padding:0 0 6px!important;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.cpx-n::-webkit-scrollbar{display:none}
.cpx-n::before{left:0!important;right:0!important;top:15px!important;bottom:auto!important;width:auto!important;height:1px!important}
.cpx-nl{left:0!important;top:15px!important;height:1px!important;width:var(--w,0%)!important}
.cpx-mo{flex:0 0 66%;scroll-snap-align:start;padding:0 6px 0 0!important}
.cpx-mo .cpx-dot{position:relative!important;left:auto!important;top:auto!important}
.cpx-mn{font-size:18px;margin:10px 0 8px}
.cpx-mo .cpx-chip{font-size:12px;padding:6px 10px;white-space:normal}
.cpx-pick{font-size:20px;min-height:20px;margin-top:6px}
.cpx-agent{padding:16px}
.cpx-at1{font-size:24px}.cpx-at2{font-size:30px}
.cpx-as{font-size:12.5px}
}
.cpx .cpx-at,.cpx .cpx-ttl3{position:relative;display:inline-block;line-height:1}
.cpx .cpx-at2,.cpx .cpx-ttl3 .cpx-s1{position:absolute;left:100%;top:0;transform:translate(-100%,.7em);white-space:nowrap;text-align:right;line-height:.66em}
.cpx .cpx-at{margin:0 0 clamp(22px,1.9vw,32px)}.cpx .cpx-at2{font-size:clamp(26px,2.2vw,40px)}
.cpx .cpx-ttl3{margin:4px 0 clamp(26px,2.2vw,38px)}.cpx .cpx-ttl3 .cpx-s1{font-size:clamp(24px,2vw,36px)}
@media (max-width:767px){.cpx .cpx-at{margin-bottom:22px}.cpx .cpx-at2{font-size:24px}.cpx .cpx-ttl3{margin:0 0 22px}.cpx .cpx-ttl3 .cpx-s1{font-size:19px}
.cpx .cpx-agent .cpx-as{margin-bottom:18px}.cpx .cpx-agent.cpx-idle #cpa-as{margin-bottom:0!important}.cpx .cpx-agent.cpx-idle #cpa-as .st{display:none!important}}
@media (prefers-reduced-motion:reduce){.cpx *,.cpx *::before,.cpx *::after{animation:none!important;transition:none!important}}
`;
  var st = el('style'); st.id = 'cpx-css'; st.textContent = css; document.head.appendChild(st);

  /* ---------------- catering: the Cover Page catering brief, one question at a time, written on the menu as it goes ---------------- */
  var MENU = IT ? {
    Q: [['guests', 'Quanti ospiti?', 'num', '120', 1], ['where', 'Dove si sposa? Location o villa', 'text', 'Villa sul Lago di Como', 1], ['date', 'Quando? Anche indicativo', 'text', 'Giugno 2027', 0], ['style', 'Come volete il servizio?', 'chips', ['Servito', 'Buffet', 'Family style', 'Isole'], 0], ['aperitivo', 'Aperitivo', 'area', 'Bollicine, finger food, crudo', 0], ['antipasto', 'Antipasto', 'area', 'Vitello tonnato, burrata, tartare', 0], ['primo', 'Primo', 'area', 'Risotto alla milanese, ravioli', 0], ['secondo', 'Secondo', 'area', 'Pesce di lago, filetto, cotoletta', 0], ['dolce', 'Dolce e torta', 'area', 'Torta nuziale, sorbetto, mignon', 0], ['bar', 'Bevande e open bar', 'area', 'Vini, cocktail, open bar dopo cena', 0], ['note', 'Esigenze particolari', 'area', 'Vegetariani, allergie, bambini', 0]],
    next: 'Avanti', back: 'Indietro', skip: 'Salta', send: 'Invia il mio menu', req: 'Ci serve questa risposta per il preventivo.',
    t1: 'Il vostro', t2: 'WEDDING DREAM', t3: 'menu', guests: 'ospiti', empty: 'rispondete, il menu si scrive da solo', note: 'Nota', done: 'Dove vi mandiamo il preventivo?', em: 'Email', ph: 'Telefono', need: 'Email e telefono servono per inviarvi il preventivo.', sending: 'Invio', ok: 'Ricevuto. Il vostro preventivo su misura arriva entro 24 ore.', ko: 'Invio non riuscito, riprovate tra un attimo.',
    msg: 'Ciao Cover Page, ecco il menu dei nostri sogni'
  } : {
    Q: [['guests', 'How many guests?', 'num', '120', 1], ['where', 'Where is the wedding? Location or villa', 'text', 'Villa on Lake Como', 1], ['date', 'When? Even approximate', 'text', 'June 2027', 0], ['style', 'How do you want the service?', 'chips', ['Plated', 'Buffet', 'Family style', 'Food stations'], 0], ['aperitivo', 'Aperitivo', 'area', 'Bubbles, finger food, crudo', 0], ['antipasto', 'Starter', 'area', 'Vitello tonnato, burrata, tartare', 0], ['primo', 'First course', 'area', 'Risotto alla milanese, ravioli', 0], ['secondo', 'Main course', 'area', 'Lake fish, fillet, cotoletta', 0], ['dolce', 'Dessert and cake', 'area', 'Wedding cake, sorbet, petit fours', 0], ['bar', 'Drinks and open bar', 'area', 'Wines, cocktails, open bar after dinner', 0], ['note', 'Special requirements', 'area', 'Vegetarians, allergies, children', 0]],
    next: 'Next', back: 'Back', skip: 'Skip', send: 'Send my menu', req: 'We need this answer for the quote.',
    t1: 'Your', t2: 'WEDDING DREAM', t3: 'menu', guests: 'guests', empty: 'answer, and the menu writes itself', note: 'Note', done: 'Where do we send your quote?', em: 'Email', ph: 'Phone', need: 'We need your email and phone to send your quote.', sending: 'Sending', ok: 'Received. Your bespoke quote arrives within 24 hours.', ko: 'Sending failed, please try again in a moment.',
    msg: 'Hello Cover Page, here is our dream menu'
  };
  if (AE) MENU.Q = IT ?
    [['guests', 'Quanti ospiti?', 'num', '150', 1], ['where', 'Dove si sposa? Location o hotel', 'text', 'Spiaggia a Dubai, deserto, hotel', 1], ['date', 'Quando? Anche indicativo', 'text', 'Febbraio 2027', 0], ['style', 'Come volete il servizio?', 'chips', ['Servito', 'Buffet', 'Family style', 'Isole'], 0], ['aperitivo', 'Ricevimento', 'area', 'Mocktail, canapé, mezze', 0], ['antipasto', 'Antipasto', 'area', 'Hummus, fattoush, burrata', 0], ['primo', 'Primo', 'area', 'Riso allo zafferano, risotto, biryani', 0], ['secondo', 'Secondo', 'area', 'Agnello, branzino, filetto', 0], ['dolce', 'Dolce e torta', 'area', 'Torta nuziale, kunafa, mignon', 0], ['bar', 'Bevande', 'area', 'Mocktail, succhi freschi, vini e cocktail', 0], ['note', 'Esigenze particolari', 'area', 'Halal, vegetariani, allergie, bambini', 0]] :
    [['guests', 'How many guests?', 'num', '150', 1], ['where', 'Where is the wedding? Location or hotel', 'text', 'Beach in Dubai, desert, hotel', 1], ['date', 'When? Even approximate', 'text', 'February 2027', 0], ['style', 'How do you want the service?', 'chips', ['Plated', 'Buffet', 'Family style', 'Food stations'], 0], ['aperitivo', 'Reception', 'area', 'Mocktails, canapes, mezze', 0], ['antipasto', 'Starter', 'area', 'Hummus, fattoush, burrata', 0], ['primo', 'First course', 'area', 'Saffron rice, risotto, biryani', 0], ['secondo', 'Main course', 'area', 'Lamb, sea bass, beef fillet', 0], ['dolce', 'Dessert and cake', 'area', 'Wedding cake, kunafa, petit fours', 0], ['bar', 'Drinks', 'area', 'Mocktails, fresh juices, wines and cocktails', 0], ['note', 'Special requirements', 'area', 'Halal, vegetarians, allergies, children', 0]];
  // a pen script for everything the couple writes
  (function () { if (document.getElementById('cpx-hand')) return; var l = el('link'); l.id = 'cpx-hand'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap'; document.head.appendChild(l); })();
  function menu(app, quote) {
    var Q = MENU.Q, A = {}, i = 0, seen = {};
    var wrap = el('div', 'cpx-m'), ctl = el('div', 'cpx-ctl cpx-wz'), paper = el('div', 'cpx-paper');
    wrap.append(ctl, paper); app.appendChild(wrap);
    var dots = el('div', 'cpx-dots'); Q.forEach(function () { dots.appendChild(el('i')); }); ctl.appendChild(dots);
    var stage = el('div', 'cpx-q'); ctl.appendChild(stage);
    var err = el('p', 'cpx-err'); ctl.appendChild(err);
    var nav = el('div', 'cpx-nav'), back = el('button', 'cpx-btn cpx-ghost', esc(MENU.back)), skip = el('button', 'cpx-skip', esc(MENU.skip)), next = el('button', 'cpx-btn', esc(MENU.next));
    back.type = skip.type = next.type = 'button'; nav.append(back, next, skip); ctl.appendChild(nav);
    var send = el('div', 'cpx-send'), go = el('button', 'cpx-btn', esc(MENU.send)); go.type = 'button'; send.appendChild(go); if (quote) send.appendChild(quote); ctl.appendChild(send);
    var msgTxt = '';
    // the menu is sent straight to Cover Page through the native Webflow form in this card (email notification, no WhatsApp step)
    go.onclick = function () {
      var em = stage.querySelector('.cpx-em'), ph = stage.querySelector('.cpx-ph');
      if (!em || !ph || !em.value.trim() || !ph.value.trim() || !em.checkValidity()) { err.textContent = MENU.need; (em && !em.value.trim() ? em : ph).focus(); return; }
      var form = document.getElementById('cpx-menu-form');
      save('menu', A);
      if (!form) { window.open(wa(MENU.msg + '\n' + em.value.trim() + ', ' + ph.value.trim() + '\n' + msgTxt), '_blank', 'noopener'); send.innerHTML = ''; stage.innerHTML = '<p class="cpx-qt">' + MENU.ok + '</p>'; return; }
      form.querySelector('[name=Email]').value = em.value.trim(); form.querySelector('[name=Phone]').value = ph.value.trim(); form.querySelector('[name=Menu]').value = msgTxt;
      go.disabled = true; go.textContent = MENU.sending; err.textContent = '';
      var wrap = form.closest('.w-form'), t0 = Date.now();
      (function watch() {
        var done = wrap && wrap.querySelector('.w-form-done'), fail = wrap && wrap.querySelector('.w-form-fail');
        if (done && getComputedStyle(done).display !== 'none') { send.innerHTML = ''; stage.innerHTML = '<p class="cpx-qt">' + MENU.ok + '</p>'; return; }
        if (fail && getComputedStyle(fail).display !== 'none' || Date.now() - t0 > 15000) { go.disabled = false; go.textContent = MENU.send; err.textContent = MENU.ko; return; }
        setTimeout(watch, 250);
      })();
      if (form.requestSubmit) form.requestSubmit(); else form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    };
    var field;
    function ask() {
      err.textContent = ''; var q = Q[i];
      [].forEach.call(dots.children, function (d, k) { d.className = k < i ? 'on' : k === i ? 'cur' : ''; });
      var done = i >= Q.length;
      ctl.classList.toggle('cpx-fin', done); nav.hidden = done; send.hidden = !done;
      if (done) {
        stage.innerHTML = '<p class="cpx-qt">' + MENU.done + ' <span>*</span></p>';
        var e1 = el('input', 'cpx-in cpx-big cpx-em'), p1 = el('input', 'cpx-in cpx-big cpx-ph');
        e1.type = 'email'; e1.required = true; e1.placeholder = MENU.em; e1.autocomplete = 'email'; e1.setAttribute('aria-label', MENU.em);
        p1.type = 'tel'; p1.required = true; p1.placeholder = MENU.ph; p1.autocomplete = 'tel'; p1.setAttribute('aria-label', MENU.ph);
        stage.append(e1, p1); var ob = send.querySelector('.cpx-skip'); if (ob) ob.remove(); var bk = el('button', 'cpx-skip', esc(MENU.back)); bk.type = 'button'; bk.onclick = function () { i--; ask(); }; send.appendChild(bk);
        draw(); return;
      }
      stage.innerHTML = '<p class="cpx-qn">' + (i + 1) + ' / ' + Q.length + '</p><p class="cpx-qt">' + esc(q[1]) + (q[4] ? ' <span>*</span>' : '') + '</p>';
      if (q[2] === 'chips') {
        field = el('div', 'cpx-chips');
        q[3].forEach(function (c) { var b = el('button', 'cpx-chip', esc(c)); b.type = 'button'; b.setAttribute('aria-pressed', A[q[0]] === c); b.onclick = function () { A[q[0]] = c; draw(); setTimeout(function () { i++; ask(); }, 260); }; field.appendChild(b); });
      } else {
        field = el(q[2] === 'area' ? 'textarea' : 'input', 'cpx-in cpx-big'); field.placeholder = q[3]; field.value = A[q[0]] || '';
        if (q[2] === 'num') { field.type = 'number'; field.min = 1; field.inputMode = 'numeric'; } else field.maxLength = 160;
        if (q[2] === 'area') field.rows = 2;
        field.addEventListener('input', function () { A[q[0]] = field.value.trim(); draw(); });
        field.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); go1(); } });
      }
      stage.appendChild(field); back.hidden = i === 0; skip.hidden = !!q[4] || q[2] === 'chips' && false;
      if (field.focus && i > 0) try { field.focus({ preventScroll: true }); } catch (e) {}
      draw();
    }
    function go1() { var q = Q[i]; if (q[4] && !A[q[0]]) { err.textContent = MENU.req; return; } i++; ask(); }
    next.onclick = go1; skip.onclick = function () { delete A[Q[i][0]]; i++; ask(); }; back.onclick = function () { if (i > 0) { i--; ask(); } };
    function hw(text, key) { var fresh = !seen[key]; seen[key] = 1; return '<span class="cpx-hw' + (fresh ? ' cpx-write' : '') + '">' + esc(text) + '</span>'; }
    function list(v) { return String(v).split(/,|\n/).map(function (x) { return x.trim(); }).filter(Boolean); }
    function draw() {
      var meta = [];
      if (A.guests) meta.push(A.guests + ' ' + MENU.guests); if (A.where) meta.push(A.where); if (A.date) meta.push(A.date); if (A.style) meta.push(A.style);
      var sc = MENU.t1 + ' ' + MENU.t3; sc = sc.charAt(0).toLowerCase() + sc.slice(1);
      var h = '<p class="cpx-ttl3"><span class="cpx-s2">' + MENU.t2 + '</span> <span class="cpx-s1">' + sc + '</span></p>';
      h += '<p class="cpx-pg">' + meta.map(function (m) { return hw(m, 'm' + m); }).join('<i> · </i>') + '</p>';
      var any = false;
      Q.slice(4, 10).forEach(function (q) {
        var v = A[q[0]]; if (!v) return; any = true;
        h += '<div class="cpx-co"><h5>' + esc(q[1]) + '</h5>' + list(v).map(function (d) { return '<span class="cpx-dish">' + hw(d, q[0] + d) + '</span>'; }).join('') + '</div>';
      });
      if (A.note) h += '<p class="cpx-note"><b>' + MENU.note + '</b> ' + hw(A.note, 'n' + A.note) + '</p>';
      if (!any && !meta.length) h += '<span class="cpx-empty">' + MENU.empty + '</span>';
      paper.innerHTML = h;
      msgTxt = meta.join(', ') + '\n' + Q.slice(4).map(function (q) { return A[q[0]] ? q[1] + ': ' + A[q[0]] : ''; }).filter(Boolean).join('\n');
    }
    ask();
  }

  /* ---------------- photo and video: the couple writes a budget, presses "see all you get", the deliverables pop ---------------- */
  var FILM = IT ? {
    k: 'Il tuo budget foto e video', ph: 'Il tuo budget in euro, es. 1500', see: 'Vedi tutto ciò che ottieni', change: 'Cambia budget', send: 'Ricevi la proposta', more: 'Vedi i pacchetti', msg: 'Ciao Cover Page, il nostro budget foto e video è',
    below: 'Sotto i nostri pacchetti: il primo parte da 790 EUR.', pop: 'Il più scelto', link: '/it/foto-video-matrimonio-milano',
    items: [['Foto editate'], ['Color grading e ritocco'], ['Album digitale'], ['Sneak peek in giornata'], ['Film del matrimonio', 1], ['Sceneggiato, sound design', 1], ['Teaser', 1], ['Fino a 7 angolazioni', 1], ['Versione social', 1], ['Più operatori'], ['Drone', 1], ['Più punti di vista']],
    pk: [
      { n: 'Fotografia', p: 790, on: [0, 1, 2, 3], d: '300 foto editate, color grading e ritocco, un album digitale, sneak peek: 3 foto in giornata o 9 il giorno dopo.' },
      { n: 'Videografia', p: 990, on: [4, 5, 6, 7], d: 'Un film del matrimonio sceneggiato con sound design e color grading, un teaser per i social, fino a sette angolazioni.' },
      { n: 'Foto e video', p: 1490, pop: 1, on: [0, 1, 4, 5, 8], d: '150 foto editate con color grading e ritocco, un film del matrimonio sceneggiato con sound design e versione social.' },
      { n: 'Su misura', p: 2500, on: [0, 1, 4, 5, 8, 9, 10, 11], d: 'Il nostro pacchetto più alto più un progetto su misura: più operatori per foto, video e drone, più punti di vista, più profondità in ciò che ricevi. Più invitati richiedono più talenti.' }
    ]
  } : {
    k: 'Your photo and video budget', ph: 'Your budget in euro, e.g. 1500', see: 'See all you get', change: 'Change budget', send: 'Get the proposal', more: 'See the packages', msg: 'Hello Cover Page, our photo and video budget is',
    below: 'Below our packages: the first one starts at 790 EUR.', pop: 'Most popular', link: 'https://www.coverpageagency.com/foto-video-matrimonio-milano',
    items: [['Edited photos'], ['Colour graded and retouched'], ['Digital album'], ['Same day sneak peek'], ['Wedding film', 1], ['Scripted, sound design', 1], ['Wedding teaser', 1], ['Up to 7 camera angles', 1], ['Social cut', 1], ['More operators'], ['Drone', 1], ['More points of view']],
    pk: [
      { n: 'Photography', p: 790, on: [0, 1, 2, 3], d: '300 edited photos, colour graded and retouched, one digital album, sneak peek: 3 photos the same day or 9 the next day.' },
      { n: 'Videography', p: 990, on: [4, 5, 6, 7], d: 'A scripted wedding film with sound design and colour grading, a teaser for social, up to seven camera angles.' },
      { n: 'Photo and video', p: 1490, pop: 1, on: [0, 1, 4, 5, 8], d: '150 edited photos, colour graded and retouched, plus a scripted wedding film with sound design and a social cut.' },
      { n: 'Custom build', p: 2500, on: [0, 1, 4, 5, 8, 9, 10, 11], d: 'Our highest package plus a custom build: more operators for photo, video and drone, more points of view, more depth in what you receive. A larger guest list needs more talents.' }
    ]
  };
  if (AE) {
    FILM.ph = IT ? 'Il tuo budget in dirham, es. 8000' : 'Your budget in dirhams, e.g. 8000';
    FILM.below = IT ? 'Sotto i nostri pacchetti: il primo parte da 4.300 AED.' : 'Below our packages: the first one starts at 4,300 AED.';
    FILM.link = IT ? '/it/wedding-packages' : '/wedding-packages';
    FILM.items[3] = [IT ? 'Album da 50 foto' : '50 photo album'];
    FILM.items[7] = [IT ? 'Giornata intera' : 'Full day coverage', 1];
    FILM.pk = IT ? [
      { n: 'Fotografia', p: 4300, on: [0, 1, 2, 3], d: '300 foto editate con color grading e ritocco, un album digitale di 50 foto, editoriale e narrativo.' },
      { n: 'Videografia', p: 6500, on: [4, 5, 6], d: 'Un film del matrimonio sceneggiato con sound design e color grading, più un teaser.' },
      { n: 'Foto e video', p: 8600, pop: 1, on: [0, 1, 4, 5, 7], d: 'Copertura di una giornata intera: 200 foto editate con color grading e ritocco, più un film del matrimonio sceneggiato con sound design.' },
      { n: 'Su misura', p: 12000, on: [0, 1, 4, 5, 7, 9, 10, 11], d: 'Il nostro pacchetto più alto più un progetto su misura: più operatori, drone su richiesta, più punti di vista. Più invitati richiedono più talenti.' }
    ] : [
      { n: 'Photography', p: 4300, on: [0, 1, 2, 3], d: '300 edited photos, colour graded and retouched, one digital album of 50 photos, editorial and storytelling.' },
      { n: 'Videography', p: 6500, on: [4, 5, 6], d: 'A scripted wedding film with sound design and colour grading, plus a wedding teaser.' },
      { n: 'Photo and video', p: 8600, pop: 1, on: [0, 1, 4, 5, 7], d: 'Full day coverage: 200 edited photos, colour graded and retouched, plus a scripted wedding film with sound design.' },
      { n: 'Custom build', p: 12000, on: [0, 1, 4, 5, 7, 9, 10, 11], d: 'Our highest package plus a custom build: more operators, drone on request, more points of view. A larger guest list needs more talents.' }
    ];
  }
  function film(app, quote) {
    var PK = FILM.pk;
    var f = el('form', 'cpx-bf'), lab = el('label', 'cpx-k', esc(FILM.k)), row = el('div', 'cpx-bfr'), inp = el('input', 'cpx-in cpx-bud'), btn = el('button', 'cpx-btn', esc(FILM.see));
    inp.type = 'number'; inp.min = 0; inp.step = 50; inp.inputMode = 'numeric'; inp.placeholder = FILM.ph; inp.setAttribute('aria-label', FILM.k); btn.type = 'submit';
    row.append(el('span', 'cpx-eur', CUR), inp, btn); f.append(lab, row); app.appendChild(f);
    var res = el('div', 'cpx-res'); res.hidden = true; app.appendChild(res);
    var pk = el('div', 'cpx-pk'), pn = el('p', 'cpx-pkn'), pp = el('span', 'cpx-pkp'), pd = el('p', 'cpx-pkd'); pk.append(pn, pp, pd); res.appendChild(pk);
    var sheet = el('div', 'cpx-sheet'); res.appendChild(sheet);
    var frames = FILM.items.map(function (it, k) {
      var fr = el('div', 'cpx-fr' + (it[1] ? ' mv' : '')), im = el('img'); im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'; im.src = BASE + 'wed/' + (k + 1) + '.webp';
      fr.append(im, el('b', 'cpx-cap', esc(it[0]))); sheet.appendChild(fr); return fr;
    });
    var sendRow = el('div', 'cpx-send'), go = el('a', 'cpx-btn', esc(FILM.send)), chg = el('button', 'cpx-btn cpx-ghost', esc(FILM.change)), more = el('a', 'cpx-more', esc(FILM.more));
    go.target = '_blank'; go.rel = 'noopener'; more.href = FILM.link; chg.type = 'button';
    sendRow.append(go, chg); if (quote) sendRow.appendChild(quote); sendRow.appendChild(more); res.appendChild(sendRow);
    function tier(b) { var t = -1; for (var k = 0; k < PK.length; k++) if (b >= PK[k].p) t = k; return t; }
    f.onsubmit = function (e) {
      e.preventDefault(); var b = Math.round(+inp.value); if (!b || b < 1) { inp.focus(); return; }
      var t = tier(b), P = PK[t];
      save('budget', { budget: b, pick: t < 0 ? 'under' : P.n });
      pn.innerHTML = t < 0 ? esc(eur(b)) : esc(P.n) + (P.pop ? ' <em>' + FILM.pop + '</em>' : ''); pp.textContent = t < 0 ? '' : (t === 3 ? eur(PK[2].p) + ' +' : eur(P.p));
      pd.textContent = t < 0 ? FILM.below : P.d;
      frames.forEach(function (fr) { fr.classList.remove('on'); });
      res.hidden = false; f.classList.add('cpx-used');
      var k = 0;
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        frames.forEach(function (fr, n) { if (t >= 0 && P.on.indexOf(n) >= 0) { fr.style.animationDelay = (RM ? 0 : 120 + (k++) * 120) + 'ms'; fr.classList.add('on'); } });
      }); });
      go.href = wa(FILM.msg + ' ' + eur(b) + (t >= 0 ? ' (' + P.n + ')' : ''));
    };
    chg.onclick = function () { res.hidden = true; f.classList.remove('cpx-used'); inp.focus(); };
  }

  /* map credit in the villa finder: shown, then folded after five seconds into an (i) that opens it again
     (OSM attribution guidelines allow a collapse after five seconds as long as the licence stays findable) */
  (function () {
    var card = document.querySelector('.cpb-cardloc'); if (!card || !window.MutationObserver) return;
    function fold(p) {
      if (p.dataset.cpx) return; p.dataset.cpx = '1';
      setTimeout(function () {
        p.classList.add('cpx-crx');
        var b = el('button', 'cpx-cri', 'i'); b.type = 'button'; b.setAttribute('aria-label', p.textContent); b.title = p.textContent;
        b.onclick = function () { p.classList.toggle('cpx-crx'); };
        p.parentNode.insertBefore(b, p);
      }, 5000);
    }
    var scan = function () { [].forEach.call(card.querySelectorAll('.cpw-mapw p.cr'), fold); };
    new MutationObserver(scan).observe(card, { childList: true, subtree: true }); scan();
  })();

  /* ---------------- entertainment: the night, hour by hour ---------------- */
  var NIGHT = IT ? {
    m: [['15:30', 'Cerimonia', ['Musicisti dal vivo', 'Voce e archi', 'Arpa']], ['17:00', 'Aperitivo', ['Intrattenimento itinerante', 'Trio jazz', 'Sax']], ['19:30', 'Cena', ['Band dal vivo', 'Pianoforte', 'Cantante']], ['22:00', 'Primo ballo', ['Live band', 'Ballerini', 'Show di luci']], ['22:30', 'Festa', ['DJ', 'DJ e sax', 'Show LED']], ['00:30', 'A tarda notte', ['Show di fuoco', 'Acrobati', 'Fuochi d’artificio']]],
    send: 'Ricevi la proposta', msg: 'Ciao Cover Page, ecco la nostra serata'
  } : {
    m: [['15:30', 'Ceremony', ['Live musicians', 'Voice and strings', 'Harp']], ['17:00', 'Aperitivo', ['Roaming entertainment', 'Jazz trio', 'Saxophone']], ['19:30', 'Dinner', ['Live band', 'Piano', 'Singer']], ['22:00', 'First dance', ['Live band', 'Dancers', 'Light show']], ['22:30', 'Party', ['DJ', 'DJ and sax', 'LED show']], ['00:30', 'Late night', ['Fire show', 'Acrobats', 'Circus act']]],
    send: 'Get the proposal', msg: 'Hello Cover Page, here is our night'
  };
  if (AE) NIGHT.m[1][1] = IT ? 'Ricevimento' : 'Reception';
  function night(app, quote) {
    var pick = NIGHT.m.map(function () { return null; });
    agent(app);
    app.appendChild(el('p', 'cpx-k cpx-nk', IT ? 'Oppure costruisci la serata, momento per momento' : 'Or build the night, moment by moment'));
    var tl = el('div', 'cpx-n'), line = el('div', 'cpx-nl'); tl.appendChild(line); app.appendChild(tl);
    var cols = NIGHT.m.map(function (m, i) {
      var c = el('div', 'cpx-mo'); c.appendChild(el('div', 'cpx-dot', String(i + 1)));
      c.appendChild(el('p', 'cpx-mn', esc(m[1])));
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
      go.onclick = function () { save('night', pick); }; go.href = wa(NIGHT.msg + '\n' + NIGHT.m.map(function (m, i) { return pick[i] ? m[1] + ': ' + pick[i] : ''; }).filter(Boolean).join('\n'));
      go.setAttribute('aria-disabled', !any);
    }
    draw();
  }

  // Cover Agent: his AI act search, reused as is (list from /entertainment + act-search.js from his worker)
  function agent(app) {
    var box = el('div', 'cpx-agent cpx-idle'); box.appendChild(el('p', 'cpx-at', '<span class="cpx-at1">COVER AGENT</span> <span class="cpx-at2">' + (IT ? 'la nostra AI' : 'our AI') + '</span>'));
    box.appendChild(el('p', 'cpx-as', IT ? 'Scrivi l\u2019idea della tua serata: trova gli artisti tra eventi veri, dal 2025 a oggi.' : 'Type the idea of your night: it finds the acts among real events, from 2025 to today.'));
    var host = el('div', 'cpx-ah', '<p class="cpx-ld">' + (IT ? 'Carico il nostro archivio' : 'Loading our archive') + '\u2026</p>'); box.appendChild(host); app.appendChild(box);
    var done = false;
    function wire() {
      var wake = function () { box.classList.remove('cpx-idle'); };
      var i = host.querySelector('#cpa-as input'); if (i) i.addEventListener('input', function () { if (i.value.length > 1) wake(); });
      if (i) i.addEventListener('keydown', function (e) { if (e.key === 'Enter') wake(); });
      host.addEventListener('click', function (e) { if (e.target.closest('#cpa-as button, #cpa-as .op, #cpa-as .chips *')) wake(); });
    }
    // if the older page script already built the bar, adopt it here instead of loading a second copy
    function adopt(tries) {
      var old = document.querySelector('#cpw-ent'), as = old && old.querySelector('#cpa-as');
      if (as) { host.innerHTML = ''; while (old.firstChild) host.appendChild(old.firstChild); wire(); return true; }
      if (tries > 0) setTimeout(function () { adopt(tries - 1); }, 300); return false;
    }
    function load() {
      if (done) return; done = true;
      if (document.querySelector('#cpw-ent') || window.__cpaActSearch) { adopt(100); return; }
      fetch((IT ? '/it' : '') + '/entertainment').then(function (r) { return r.text(); }).then(function (html) {
        var L = new DOMParser().parseFromString(html, 'text/html').querySelector('.entertainment-list'); if (!L) throw 0;
        host.innerHTML = ''; host.appendChild(document.importNode(L.closest('.w-dyn-list') || L, true));
        if (window.__cpaActSearch) { adopt(100); return; }
        var s = document.createElement('script'); s.defer = true;
        s.src = 'https://cover-agent-ai.coverpageagency.workers.dev/' + (/\.webflow\.io$/.test(location.hostname) ? 'next/' : '') + 'act-search.js';
        s.onload = wire;
        document.body.appendChild(s);
      }).catch(function () { host.innerHTML = '<a class="cpx-more" href="' + (IT ? '/it' : '') + '/entertainment">' + (IT ? 'Apri il nostro archivio' : 'Open our archive') + '</a>'; });
    }
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '900px' }); io.observe(box); } else load();
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
