/*! Cover Page motion: constellation (how an event takes shape). (c) Cover Page Agency. */
CPM.define('constellation', function (el, cv, A) {
'use strict';
var g = A.gl2(cv, { alpha: false });
if (!g) return null;
var it = A.lang === 'it';
var CH0 = it ? [
['Brief', 'chi siete, cosa sognate', ['data', 'stile', 'lingue', 'atmosfera', 'ospiti']],
['Location', 'lago, villa o vigneto', ['lago', 'villa', 'giardino', 'terrazza', 'chiesa']],
['Ospiti', 'chi siede dove', ['lista', 'tavoli', 'viaggi', 'camere', 'menu']],
['Team', 'planner, hostess, staff', ['planner', 'hostess', 'staff', 'fiori', 'chef']],
['Musica', 'dal rito al primo ballo', ['quartetto', 'dj', 'sax', 'luci', 'suono']],
['Foto e video', 'ogni momento custodito', ['foto', 'video', 'drone', 'reel', '24 ore']],
['Verifica', 'ogni dettaglio torna?', ['orari', 'piano b', 'prove', 'check', 'ok']],
['Il giorno', 'tutto al suo posto', ['rito', 'brindisi', 'cena', 'ballo', 'festa']]
] : [
['Brief', 'who you are, what you dream', ['date', 'style', 'languages', 'mood', 'guests']],
['Venue', 'lake, villa or vineyard', ['lake', 'villa', 'garden', 'terrace', 'chapel']],
['Guests', 'who sits where', ['list', 'seating', 'travel', 'rooms', 'menu']],
['Team', 'planners, hosts, crew', ['planner', 'hosts', 'crew', 'florist', 'chef']],
['Music', 'from ceremony to first dance', ['quartet', 'dj', 'sax', 'lights', 'sound']],
['Photo and film', 'every moment kept', ['photo', 'film', 'drone', 'reel', '24 hours']],
['Review', 'does every detail trace?', ['timing', 'plan b', 'rehearsal', 'check', 'sign off']],
['The day', 'everything in place', ['ceremony', 'toast', 'dinner', 'dance', 'party']]
];
var cfg = A.cfg({
chapters: CH0, colors: ['#e25b1e', '#c8a24a', '#5cc7bd', '#9e7af2', '#f26b9e', '#6b9ef9', '#a885f9', '#f2c773'],
bg: '#0b0e1a', accent: '#e25b1e', brand: 'COVER PAGE', engine: 'event engine', place: it ? 'Milano · Dubai' : 'Dubai · Milan',
step: 4.6, bpm: 76, seed: 7, scale: [261.63, 311.13, 349.23, 392, 466.16, 523.25, 622.25, 783.99], pad: [65.41, 98, 130.81]
});
var CH = cfg.chapters.slice(0, 8);
var NC = CH.length;
var h2c = function (h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16) / 255; }); };
var COL = CH.map(function (c, i) { return h2c(cfg.colors[i % cfg.colors.length]); });
while (COL.length < 8) COL.push(COL[0]);
var BG = h2c(cfg.bg);
var hex = function (c) { return '#' + c.map(function (x) { return ('0' + Math.round(x * 255).toString(16)).slice(-2); }).join(''); };
var sd = (cfg.seed | 0) || 7;
function rnd() { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }
function gauss() { return (rnd() + rnd() + rnd() - 1.5) / 1.5; }
var centers = [];
for (var i = 0; i < NC; i++) {
var a = i / NC * Math.PI * 2 + 0.4;
centers.push([Math.cos(a) * 1.45 + gauss() * 0.25, Math.sin(a) * 0.82 + gauss() * 0.18, gauss() * 0.5]);
}
var PER = A.LOW ? 320 : (A.MOBILE ? 520 : 900), DUST = A.LOW ? 500 : 1400;
var total = PER * NC + DUST;
var data = new Float32Array(total * 5), o = 0;
for (var c = 0; c < NC; c++) {
var C = centers[c], R = 0.55 + rnd() * 0.15, strands = [];
for (var s = 0; s < 9; s++) strands.push([gauss(), gauss(), gauss() * 0.5]);
for (var k = 0; k < PER; k++) {
var x, y, z;
if (k % 3 === 0) {
var st = strands[k % 9], tt = Math.pow(rnd(), 0.7) * R * 1.4;
x = st[0] * tt + gauss() * 0.03; y = st[1] * tt + gauss() * 0.03; z = st[2] * tt;
} else {
var rr = R * Math.pow(rnd(), 0.55), th = rnd() * 6.283, ph = Math.acos(rnd() * 2 - 1);
x = rr * Math.sin(ph) * Math.cos(th); y = rr * Math.sin(ph) * Math.sin(th) * 0.85; z = rr * Math.cos(ph) * 0.5;
}
data[o++] = C[0] + x; data[o++] = C[1] + y; data[o++] = C[2] + z; data[o++] = c; data[o++] = rnd();
}
}
for (var d2 = 0; d2 < DUST; d2++) { data[o++] = gauss() * 2.6; data[o++] = gauss() * 1.6; data[o++] = gauss() * 1.2; data[o++] = -1; data[o++] = rnd(); }
var PROJ = 'uniform vec3 uCam;uniform float uZoom,uRot,uAsp;vec4 proj(vec3 w){vec3 p=w-uCam;float c=cos(uRot),s=sin(uRot);' +
'vec3 q=vec3(p.x*c-p.z*s,p.y,p.x*s+p.z*c);float k=uZoom/(1.+q.z*.32);return vec4(q.x*k/uAsp,q.y*k,0.,1.);}';
var ptVs = '#version 300 es\nprecision highp float;in vec3 aP;in vec2 aI;uniform float uT,uAct,uPrev,uMix,uAll,uDpr,uBeat;uniform vec3 uCol[8];uniform vec3 uAcc;' + PROJ +
'out vec3 vC;out float vA,vSq;void main(){gl_Position=proj(aP);float cl=aI.x,sd=aI.y;' +
'float on=cl<0.?0.:(abs(cl-uAct)<.5?uMix:(abs(cl-uPrev)<.5?1.-uMix:0.));on=max(on,uAll*(cl<0.?0.:.8));' +
'float tw=.6+.4*sin(uT*(1.+sd*3.)+sd*40.);' +
'vec3 base=cl<0.?vec3(.55,.58,.7):uCol[int(cl)];' +
'vSq=step(.988,sd)*step(0.,cl);' +
'vC=mix(vec3(.62,.64,.75),base,.35+.65*on);vC=mix(vC,uAcc,vSq*on);' +
'vA=(cl<0.?.12:.22+.7*on)*tw*(1.+uBeat*.25*on);' +
'gl_PointSize=max(2.,uDpr*(cl<0.?1.2:(1.6+pow(sd,9.)*2.8+on*.9)+vSq*2.5*on)*clamp(uZoom,.8,1.6));}';
var ptFs = '#version 300 es\nprecision mediump float;in vec3 vC;in float vA,vSq;out vec4 o;void main(){vec2 q=gl_PointCoord-.5;' +
'float d=vSq>.5?max(abs(q.x),abs(q.y))*1.4:length(q)*2.;float a=vA*(1.-smoothstep(.55,1.05,d));o=vec4(vC*a,a);}';
var lnVs = '#version 300 es\nprecision highp float;in vec3 aP;in float aU;' + PROJ + 'out float vU;void main(){gl_Position=proj(aP);vU=aU;}';
var lnFs = '#version 300 es\nprecision mediump float;in float vU;uniform vec3 uC;uniform float uA,uRev;out vec4 o;void main(){if(vU>uRev)discard;float a=uA*(1.-vU*.55);o=vec4(uC*a,a);}';
var PP = A.prog(g, ptVs, ptFs), PL = A.prog(g, lnVs, lnFs);
if (!PP || !PL) return null;
var vaoP = g.createVertexArray(); g.bindVertexArray(vaoP);
var bP = g.createBuffer(); g.bindBuffer(g.ARRAY_BUFFER, bP); g.bufferData(g.ARRAY_BUFFER, data, g.STATIC_DRAW);
var lp = g.getAttribLocation(PP, 'aP'), li = g.getAttribLocation(PP, 'aI');
g.enableVertexAttribArray(lp); g.vertexAttribPointer(lp, 3, g.FLOAT, false, 20, 0);
g.enableVertexAttribArray(li); g.vertexAttribPointer(li, 2, g.FLOAT, false, 20, 12);
function lineVao() {
var v = g.createVertexArray(); g.bindVertexArray(v);
var b = g.createBuffer(); g.bindBuffer(g.ARRAY_BUFFER, b);
var a1 = g.getAttribLocation(PL, 'aP'), a2 = g.getAttribLocation(PL, 'aU');
g.enableVertexAttribArray(a1); g.vertexAttribPointer(a1, 3, g.FLOAT, false, 16, 0);
g.enableVertexAttribArray(a2); g.vertexAttribPointer(a2, 1, g.FLOAT, false, 16, 12);
return { vao: v, buf: b, n: 0 };
}
var spokes = lineVao(), ring = lineVao(), arc = lineVao(), web = lineVao();
function upload(L, arr) { g.bindVertexArray(L.vao); g.bindBuffer(g.ARRAY_BUFFER, L.buf); g.bufferData(g.ARRAY_BUFFER, new Float32Array(arr), g.DYNAMIC_DRAW); L.n = arr.length / 4; }
function buildLines(c, p) {
var C = centers[c], arr = [], base = c * PER;
for (var k = 0; k < 54; k++) {
var idx = (base + ((k * 97 + c * 31) % PER)) * 5;
arr.push(C[0], C[1], C[2], 0, data[idx], data[idx + 1], data[idx + 2], 1);
}
upload(spokes, arr);
arr = [];
for (var s = 0; s < 48; s++) {
var a0 = s / 48 * 6.283, a1 = (s + 1) / 48 * 6.283, rx = 0.13, ry = 0.085;
arr.push(C[0] + Math.cos(a0) * rx, C[1] + Math.sin(a0) * ry, C[2], 0, C[0] + Math.cos(a1) * rx, C[1] + Math.sin(a1) * ry, C[2], 0);
}
upload(ring, arr);
arr = [];
if (p != null && p !== c) {
var P0 = centers[p], mx = (P0[0] + C[0]) / 2, my = (P0[1] + C[1]) / 2 + 0.45, mz = (P0[2] + C[2]) / 2;
var prev = P0;
for (var q = 1; q <= 40; q++) {
var t = q / 40, u = 1 - t;
var pt = [u * u * P0[0] + 2 * u * t * mx + t * t * C[0], u * u * P0[1] + 2 * u * t * my + t * t * C[1], u * u * P0[2] + 2 * u * t * mz + t * t * C[2]];
arr.push(prev[0], prev[1], prev[2], (q - 1) / 40, pt[0], pt[1], pt[2], t);
prev = pt;
}
}
upload(arc, arr);
}
(function () {
var arr = [];
for (var i = 0; i < NC; i++) { var a = centers[i], b = centers[(i + 1) % NC]; arr.push(a[0], a[1], a[2], i / NC, b[0], b[1], b[2], (i + 1) / NC); }
upload(web, arr);
})();
var ui = document.createElement('div');
ui.className = 'cpc';
var mono = 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace';
var st = document.createElement('style');
st.textContent = '.cpc{position:absolute;inset:0;pointer-events:none;color:#c9ccd8;font:500 10px/1.3 ' + mono + ';letter-spacing:.04em}' +
'.cpc-top{position:absolute;left:2.4%;right:2.4%;top:12px;display:flex;gap:18px;align-items:center;white-space:nowrap;overflow:hidden;font-size:9px;color:#7d8194}' +
'.cpc-top b{color:#e8e9ef;font-weight:600}.cpc-top .r{margin-left:auto;color:#e25b1e}' +
'.cpc-tabs{position:absolute;left:2.4%;right:2.4%;top:32px;display:grid;grid-template-columns:repeat(' + NC + ',1fr);gap:4px;pointer-events:auto}' +
'.cpc-tabs button{all:unset;cursor:pointer;text-align:center;padding:4px 0;font:500 9px/1 ' + mono + ';color:#8a8ea2;background:rgba(255,255,255,.04);transition:background .5s,color .5s}' +
'.cpc-tabs button.on{color:' + cfg.bg + '}' +
'.cpc-h{position:absolute;left:2.4%;top:58px;border-left:3px solid #e25b1e;padding-left:9px}' +
'.cpc-h b{display:block;font:600 clamp(15px,1.9vw,26px)/1.1 ' + mono + ';color:#f2f2f6;letter-spacing:.02em}.cpc-h span{display:block;margin-top:3px;color:#8d92a8;font-size:10px}' +
'.cpc-l{position:absolute;left:0;top:0;will-change:transform;white-space:nowrap;transition:opacity .6s}' +
'.cpc-n{font:600 clamp(11px,1.15vw,15px)/1 ' + mono + '}.cpc-n i{display:block;font:400 9px/1.2 ' + mono + ';opacity:.6;margin-top:3px;font-style:normal}' +
'.cpc-t{padding:2px 6px;font-size:9px;color:#fff;border:1px solid rgba(255,255,255,.35);background:rgba(11,14,26,.6)}.cpc-t.hot{border:0;color:#0b0e1a}' +
'.cpc-b{position:absolute;left:2.4%;right:calc(2.4% + 236px);bottom:12px;height:64px;display:grid;grid-template-columns:1.4fr 1fr .6fr;gap:16px;align-items:end;border-top:1px solid rgba(255,255,255,.08);padding-top:8px}' +
'.cpc-bars{display:grid;gap:4px}.cpc-bars i{display:block;height:4px;transform-origin:left;transition:transform 1.2s cubic-bezier(.2,.7,.2,1)}' +
'.cpc-b svg{height:56px;width:100%}.cpc-g{justify-self:end}' +
'@media (max-width:640px){.cpc-b{right:calc(2.4% + 196px)}.cpc-tabs,.cpc-top .m{display:none}.cpc-h{top:34px}.cpc-b{grid-template-columns:1fr auto;height:46px}.cpc-b .rd{display:none}.cpc-b svg{height:42px}}';
ui.appendChild(st);
var top = document.createElement('div'); top.className = 'cpc-top';
top.innerHTML = '<span><b>' + cfg.brand + '</b> ' + cfg.engine + '</span><span class="m">STEP <b class="s">01</b>/0' + NC + '</span><span class="m">NODES <b>' + (PER * NC).toLocaleString('en') + '</b></span><span class="m">LINKS <b class="k">0</b></span><span class="m">FRAME <b class="f">0</b></span><span class="r">' + cfg.place + '</span>';
ui.appendChild(top);
var tabs = document.createElement('div'); tabs.className = 'cpc-tabs';
var tabEls = CH.map(function (ch, i) {
var b = document.createElement('button'); b.type = 'button'; b.textContent = ch[0].toLowerCase();
b.addEventListener('click', function () { go(i, true); });
tabs.appendChild(b); return b;
});
ui.appendChild(tabs);
var head = document.createElement('div'); head.className = 'cpc-h'; ui.appendChild(head);
var names = centers.map(function (cc, i) {
var l = document.createElement('div'); l.className = 'cpc-l cpc-n'; l.style.color = hex(COL[i]);
l.innerHTML = CH[i][0].toLowerCase() + '<i>' + CH[i][2].length + '/' + CH[i][2].length + (it ? ' voci' : ' items') + '</i>';
ui.appendChild(l); return l;
});
var tags = [0, 1, 2, 3, 4].map(function () { var l = document.createElement('div'); l.className = 'cpc-l cpc-t'; l.style.opacity = 0; ui.appendChild(l); return l; });
var bottom = document.createElement('div'); bottom.className = 'cpc-b';
bottom.innerHTML = '<div class="cpc-bars">' + '<i></i><i></i><i></i><i></i><i></i>' + '</div>' +
'<svg class="rd" viewBox="0 0 100 56"><polygon points="" fill="rgba(54,199,189,.35)" stroke="#36c7bd" stroke-width=".8"/></svg>' +
'<svg class="cpc-g" viewBox="0 0 56 56"><circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="3"/><circle class="gc" cx="28" cy="28" r="22" fill="none" stroke="#e25b1e" stroke-width="3" stroke-linecap="round" transform="rotate(-90 28 28)" stroke-dasharray="138.2" stroke-dashoffset="138.2" style="transition:stroke-dashoffset 1.2s"/><text x="28" y="32" text-anchor="middle" fill="#e8e9ef" font-size="11" font-family="' + mono + '" class="gt">0</text></svg>';
ui.appendChild(bottom);
el.appendChild(ui);
var bars = bottom.querySelectorAll('.cpc-bars i'), poly = bottom.querySelector('polygon'), gc = bottom.querySelector('.gc'), gt = bottom.querySelector('.gt');
var fEl = top.querySelector('.f'), sEl = top.querySelector('.s'), kEl = top.querySelector('.k');
var act = 0, prev = -1, mix = 1, chT = 0, DUR = cfg.step, all = 0, allT = 0, frameN = 0, cw = 2, ch = 2, cssW = 1, cssH = 1, dpr = 1;
var cam = [0, 0, 0], zoom = 1, beat = 0, sound = null, lastBeat = -1;
var tagPts = [];
function go(i, manual) {
prev = act; act = (i + NC) % NC; mix = 0; chT = 0; all = 0;
buildLines(act, prev);
var c = COL[act], hx = hex(c);
head.style.borderColor = hx;
head.innerHTML = '<b>0' + (act + 1) + ' ' + CH[act][0].toUpperCase() + '</b><span>' + CH[act][1] + '</span>';
tabEls.forEach(function (b, j) { b.className = j === act ? 'on' : ''; b.style.background = j === act ? hx : ''; });
sEl.textContent = '0' + (act + 1); kEl.textContent = 54 + act * 7;
tagPts = [];
tags.forEach(function (l, j) {
var idx = (act * PER + ((j * 131 + 17) % PER)) * 5;
tagPts.push([data[idx], data[idx + 1], data[idx + 2]]);
l.textContent = CH[act][2][j] || '';
l.className = 'cpc-l cpc-t' + (j < 2 ? ' hot' : '');
l.style.background = j < 2 ? hx : '';
l.style.opacity = 0;
setTimeout(function () { l.style.opacity = 1; if (sound) sound.tick(j); }, 350 + j * 140);
});
bars.forEach(function (b, j) { b.style.background = hex(COL[(act + j) % NC]); b.style.transform = 'scaleX(' + (0.25 + 0.75 * Math.abs(Math.sin(act * 1.7 + j * 2.1))) + ')'; });
var pts = [];
for (var k = 0; k < 7; k++) { var a = k / 7 * 6.283, r = 10 + 16 * Math.abs(Math.sin(act * 2.3 + k * 1.3)); pts.push((50 + Math.cos(a) * r * 1.6).toFixed(1) + ',' + (28 + Math.sin(a) * r).toFixed(1)); }
poly.setAttribute('points', pts.join(' '));
poly.setAttribute('fill', hx + '55'); poly.setAttribute('stroke', hx);
var pct = Math.round((act + 1) / NC * 100);
gc.style.strokeDashoffset = (138.2 * (1 - pct / 100)).toFixed(1); gc.setAttribute('stroke', hx); gt.textContent = pct;
if (sound) sound.chapter(act);
if (manual) chT = 0;
}
function project(w) {
var p = [w[0] - cam[0], w[1] - cam[1], w[2] - cam[2]], c = Math.cos(rot), s = Math.sin(rot);
var q = [p[0] * c - p[2] * s, p[1], p[0] * s + p[2] * c], k = zoom / (1 + q[2] * 0.32);
return [(q[0] * k / (cssW / cssH) * 0.5 + 0.5) * cssW, (0.5 - q[1] * k * 0.5) * cssH];
}
var rot = 0;
function resize(w, h, cssw, cssh) { cw = w; ch = h; cssW = cssw; cssH = cssh; dpr = w / cssw; g.viewport(0, 0, w, h); }
function frame(t, dt) {
chT += dt;
if (all) { allT += dt; if (allT > 3.6) go(0); }
else if (chT > DUR) { if (act === NC - 1) { all = 1; allT = 0; prev = act; } else go(act + 1); }
mix = Math.min(1, mix + dt / 1.1);
var bt = Math.floor(t * cfg.bpm / 60);
if (bt !== lastBeat) { lastBeat = bt; beat = 1; if (sound) sound.beat(); }
beat = Math.max(0, beat - dt * 3.5);
var C = centers[act], fz = all ? 0.82 : 1.22 + 0.18 * Math.sin(chT / DUR * Math.PI);
var por = cw < ch, f = por ? 0.95 : 0.62;
var tx = all ? 0 : C[0] * f, ty = all ? 0 : C[1] * f + (por ? 0.16 : 0.05), tz = all ? 0 : C[2] * 0.6;
var e = 1 - Math.exp(-dt * 1.6);
cam[0] += (tx - cam[0]) * e; cam[1] += (ty - cam[1]) * e; cam[2] += (tz - cam[2]) * e; zoom += (fz - zoom) * e;
var asp = cw / ch, zs = asp < 1 ? zoom * asp * 1.25 : zoom * 0.78;
rot = Math.sin(t * 0.07) * 0.35;
var zKeep = zoom; zoom = zs;
g.clearColor(BG[0], BG[1], BG[2], 1); g.clear(g.COLOR_BUFFER_BIT);
g.enable(g.BLEND); g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA);
function camU(P) { g.uniform3f(P.u.uCam, cam[0], cam[1], cam[2]); g.uniform1f(P.u.uZoom, zoom); g.uniform1f(P.u.uRot, rot); g.uniform1f(P.u.uAsp, asp); }
g.useProgram(PL); camU(PL);
var cc = COL[act];
g.uniform3f(PL.u.uC, cc[0], cc[1], cc[2]);
if (all) { g.uniform1f(PL.u.uA, 0.35); g.uniform1f(PL.u.uRev, Math.min(1, allT / 1.4)); g.bindVertexArray(web.vao); g.drawArrays(g.LINES, 0, web.n); }
else {
g.uniform1f(PL.u.uA, 0.26 * mix); g.uniform1f(PL.u.uRev, 1); g.bindVertexArray(spokes.vao); g.drawArrays(g.LINES, 0, spokes.n);
g.uniform1f(PL.u.uA, 0.7 * mix); g.bindVertexArray(ring.vao); g.drawArrays(g.LINES, 0, ring.n);
if (arc.n) { var pc = COL[prev]; g.uniform3f(PL.u.uC, (pc[0] + cc[0]) / 2, (pc[1] + cc[1]) / 2, (pc[2] + cc[2]) / 2); g.uniform1f(PL.u.uA, 0.55 * (1 - Math.max(0, chT - 2.5) / 2)); g.uniform1f(PL.u.uRev, Math.min(1, chT / 1.2)); g.bindVertexArray(arc.vao); g.drawArrays(g.LINES, 0, arc.n); }
}
g.useProgram(PP); camU(PP);
g.uniform1f(PP.u.uT, t); g.uniform1f(PP.u.uAct, act); g.uniform1f(PP.u.uPrev, prev < 0 ? -9 : prev); g.uniform1f(PP.u.uMix, mix);
g.uniform1f(PP.u.uAll, all ? Math.min(1, allT / 0.8) : 0); g.uniform1f(PP.u.uDpr, dpr); g.uniform1f(PP.u.uBeat, beat);
g.uniform3fv(PP.u.uCol, new Float32Array([].concat.apply([], COL.slice(0, 8))));
var AC3 = h2c(cfg.accent); g.uniform3f(PP.u.uAcc, AC3[0], AC3[1], AC3[2]);
g.bindVertexArray(vaoP); g.drawArrays(g.POINTS, 0, total);
for (var i = 0; i < NC; i++) {
var p = project(centers[i]), on = all || i === act;
names[i].style.transform = 'translate3d(' + (p[0] + (i === act && !all ? 18 : 6)).toFixed(1) + 'px,' + (p[1] - (i === act && !all ? 46 : 8)).toFixed(1) + 'px,0)';
var inside = p[0] > 10 && p[0] < cssW - 90 && p[1] > 70 && p[1] < cssH - 80;
names[i].style.opacity = inside ? (on ? 1 : 0.4) : 0;
}
tags.forEach(function (l, j) {
if (!tagPts[j]) return;
var p = project(tagPts[j]);
l.style.transform = 'translate3d(' + (p[0] + 4).toFixed(1) + 'px,' + (p[1] - 6).toFixed(1) + 'px,0)';
if (all) l.style.opacity = 0;
});
zoom = zKeep;
if ((frameN++ & 7) === 0) fEl.textContent = frameN;
}
sound = (function () {
var ctx, b, pad, on = false;
var scale = cfg.scale;
function pluck(f, at, lv) {
var o = ctx.createOscillator(), m = ctx.createOscillator(), mg = ctx.createGain(), gg = ctx.createGain();
o.frequency.value = f; m.frequency.value = f * 2.01; mg.gain.setValueAtTime(f * 1.6, at); mg.gain.exponentialRampToValueAtTime(1, at + 0.8);
m.connect(mg); mg.connect(o.frequency);
gg.gain.setValueAtTime(0, at); gg.gain.linearRampToValueAtTime(lv, at + 0.006); gg.gain.exponentialRampToValueAtTime(0.0001, at + 1.6);
o.connect(gg); gg.connect(b); o.start(at); m.start(at); o.stop(at + 1.7); m.stop(at + 1.7);
}
return {
init: function (c) {
if (ctx) return; ctx = c; b = A.bus(ctx, 0.45);
var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; lp.Q.value = 2;
var lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.05; lg.gain.value = 220; lfo.connect(lg); lg.connect(lp.frequency); lfo.start();
pad = ctx.createGain(); pad.gain.value = 0.05;
cfg.pad.forEach(function (f, i) { var o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = (i - 1) * 7; o.connect(lp); o.start(); });
lp.connect(pad); pad.connect(b);
},
on: function (v) { on = v; if (ctx) b.gain.setTargetAtTime(v ? 0.8 : 0, ctx.currentTime, v ? 0.5 : 0.3); },
chapter: function (i) {
if (!on || !ctx) return;
var at = ctx.currentTime + 0.02, f = scale[i % scale.length];
pluck(f, at, 0.11); pluck(f * 1.5, at + 0.12, 0.06); pluck(f * 2, at + 0.24, 0.04);
},
tick: function (j) {
if (!on || !ctx) return;
var at = ctx.currentTime, n = A.noiseSrc(ctx), bp = ctx.createBiquadFilter(), gg = ctx.createGain();
bp.type = 'bandpass'; bp.frequency.value = 5200 + j * 600; bp.Q.value = 6;
gg.gain.setValueAtTime(0, at); gg.gain.linearRampToValueAtTime(0.16, at + 0.003); gg.gain.exponentialRampToValueAtTime(0.0001, at + 0.05);
n.connect(bp); bp.connect(gg); gg.connect(b); n.start(at); n.stop(at + 0.06);
},
beat: function () {
if (!on || !ctx) return;
var at = ctx.currentTime, o = ctx.createOscillator(), gg = ctx.createGain();
o.frequency.setValueAtTime(96, at); o.frequency.exponentialRampToValueAtTime(46, at + 0.16);
gg.gain.setValueAtTime(0.0001, at); gg.gain.exponentialRampToValueAtTime(0.22, at + 0.008); gg.gain.exponentialRampToValueAtTime(0.0001, at + 0.38);
o.connect(gg); gg.connect(ctx.cpm.master); o.start(at); o.stop(at + 0.4);
}
};
})();
go(0);
return { resize: resize, frame: frame, sound: sound, dprCap: 1.75, still: 2.6, ui: '#e8e9ef' };
});
