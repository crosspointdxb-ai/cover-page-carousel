/*! Cover Page motion (cpm) loader. (c) Cover Page Agency. */
(function () {
'use strict';
if (window.CPM) return;
var S = document.currentScript;
var BASE = (S && S.src) ? S.src.replace(/[^\/]*$/, '') : '';
var SRI = {"constellation": "sha384-pzfp1NmPmxybL1LGy6HberwXl03P1C0t0VAQed0Qo0LTK7aQfaN7e1UV5y1QwmBs", "ink": "sha384-INZv5xdOEq87uSEQg2q1C+kJUybKJNNQ0qIF88ZJELAsZFxhDXRUoJ70da7ACVah", "spacetime": "sha384-xhnVTmYrprJi1IPtqqMTCvPNMNLl3w+elinE8gzX5lR6Av+8cn5+jv0a6iS0VCs1"};
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
var nav = navigator;
var LOW = (nav.deviceMemory && nav.deviceMemory <= 2) || (nav.connection && nav.connection.saveData) || (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2);
var MOBILE = matchMedia('(max-width: 767px)').matches;
var mods = {}, waiting = {};
function load(name, cb) {
if (mods[name]) return cb(mods[name]);
var q = waiting[name] || (waiting[name] = []);
q.push(cb);
if (q.length > 1) return;
var s = document.createElement('script');
s.src = BASE + 'cpm-' + name + '.js';
s.async = true;
s.crossOrigin = 'anonymous';
if (SRI[name]) s.integrity = SRI[name];
document.head.appendChild(s);
}
function define(name, f) {
mods[name] = f;
(waiting[name] || []).forEach(function (cb) { cb(f); });
waiting[name] = [];
}
var AC = null;
function impulse(ctx, sec, decay) {
var r = ctx.sampleRate, n = (r * sec) | 0, b = ctx.createBuffer(2, n, r);
for (var c = 0; c < 2; c++) {
var d = b.getChannelData(c);
for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay);
}
return b;
}
function audio() {
if (AC) return AC;
var C = window.AudioContext || window.webkitAudioContext;
if (!C) return null;
var ctx = new C();
var comp = ctx.createDynamicsCompressor();
comp.threshold.value = -16; comp.knee.value = 12; comp.ratio.value = 4;
var master = ctx.createGain(); master.gain.value = 0.9;
master.connect(comp); comp.connect(ctx.destination);
var verb = ctx.createConvolver(); verb.buffer = impulse(ctx, 3.2, 2.4);
var vg = ctx.createGain(); vg.gain.value = 0.42;
verb.connect(vg); vg.connect(master);
var noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), nd = noise.getChannelData(0);
for (var i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
ctx.cpm = { master: master, verb: verb, noise: noise };
AC = ctx;
document.addEventListener('visibilitychange', function () {
if (document.hidden) ctx.suspend(); else if (anyOn()) ctx.resume();
});
return ctx;
}
function bus(ctx, send) {
var g = ctx.createGain(); g.gain.value = 0;
g.connect(ctx.cpm.master);
var s = ctx.createGain(); s.gain.value = send == null ? 0.5 : send;
g.connect(s); s.connect(ctx.cpm.verb);
return g;
}
function noiseSrc(ctx) {
var n = ctx.createBufferSource(); n.buffer = ctx.cpm.noise; n.loop = true; return n;
}
function gl2(cv, extra) {
var o = { antialias: false, alpha: false, depth: false, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
for (var k in extra) o[k] = extra[k];
try { return cv.getContext('webgl2', o); } catch (e) { return null; }
}
function sh(g, type, src) {
var s = g.createShader(type); g.shaderSource(s, src); g.compileShader(s);
if (!g.getShaderParameter(s, g.COMPILE_STATUS)) { console.warn('cpm shader', g.getShaderInfoLog(s)); return null; }
return s;
}
function prog(g, vs, fs, tf) {
var p = g.createProgram();
g.attachShader(p, sh(g, g.VERTEX_SHADER, vs));
g.attachShader(p, sh(g, g.FRAGMENT_SHADER, fs));
if (tf) g.transformFeedbackVaryings(p, tf, g.SEPARATE_ATTRIBS);
g.linkProgram(p);
if (!g.getProgramParameter(p, g.LINK_STATUS)) { console.warn('cpm link', g.getProgramInfoLog(p)); return null; }
var u = {}, n = g.getProgramParameter(p, g.ACTIVE_UNIFORMS);
for (var i = 0; i < n; i++) { var a = g.getActiveUniform(p, i), nm = a.name.replace(/\[0\]$/, ''); u[nm] = g.getUniformLocation(p, a.name); }
p.u = u;
return p;
}
var FULL_VS = '#version 300 es\nout vec2 v;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));v=p;gl_Position=vec4(p*2.-1.,0.,1.);}';
var NOISE = 'float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}' +
'float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+1.),f.x),f.y);}' +
'float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*vn(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}';
var css = '.cpm{position:relative;overflow:hidden;contain:layout paint;isolation:isolate;-webkit-tap-highlight-color:transparent}' +
'.cpm>canvas{position:absolute;inset:0;width:100%;height:100%;display:block}' +
'.cpm-poster{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .8s}' +
'.cpm-snd{position:absolute;right:14px;bottom:14px;z-index:5;display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px 0 11px;border-radius:999px;border:1px solid currentColor;background:rgba(127,127,127,.12);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);font:600 10px/1 Inter,system-ui,sans-serif;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;opacity:.82;transition:opacity .3s}' +
'.cpm-snd:hover,.cpm-snd:focus-visible{opacity:1}.cpm-snd svg{width:15px;height:15px}.cpm-snd .w{transition:opacity .3s;opacity:0}.cpm-snd[aria-pressed=true] .w{opacity:1}.cpm-snd[aria-pressed=true] .x{opacity:0}' +
'@media (max-width:600px){.cpm-snd{right:10px;bottom:10px;height:30px;padding:0 12px 0 9px}}';
function injectCss() {
if (document.getElementById('cpm-css')) return;
var st = document.createElement('style'); st.id = 'cpm-css'; st.textContent = css; document.head.appendChild(st);
}
var SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="w" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/><path class="x" d="M17 9.5l5 5M22 9.5l-5 5"/></svg>';
var presets = {};
function preset(name, obj) { presets[name] = obj; }
function config(el, def) {
var out = {}, k, j = {}, p = presets[el.getAttribute('data-preset')] || {};
try { j = JSON.parse(el.getAttribute('data-cfg') || '{}'); } catch (e) { console.warn('cpm data-cfg is not valid JSON'); }
for (k in def) out[k] = def[k];
for (k in p) out[k] = p[k];
for (k in j) out[k] = j[k];
for (k in out) {
var a = el.getAttribute('data-' + k);
if (a != null && typeof out[k] !== 'object') out[k] = typeof out[k] === 'number' ? +a : a;
}
return out;
}
var instances = [];
function anyOn() { for (var i = 0; i < instances.length; i++) if (instances[i].soundOn) return true; return false; }
function mount(el) {
if (el.__cpm) return;
el.__cpm = 1;
el.classList.add('cpm');
var name = el.getAttribute('data-cpm');
var lang = (el.getAttribute('data-lang') || document.documentElement.lang || 'en').slice(0, 2);
var inst = { el: el, name: name, lang: lang, soundOn: false, visible: false, fx: null, raf: 0, t0: 0, t: 0, last: 0 };
instances.push(inst);
var io = new IntersectionObserver(function (es) {
es.forEach(function (e) {
if (e.isIntersecting && !inst.loading) {
inst.loading = 1;
load(name, function (factory) { start(inst, factory); });
}
});
}, { rootMargin: '400px 0px' });
io.observe(el);
var vo = new IntersectionObserver(function (es) {
inst.visible = es[es.length - 1].isIntersecting;
inst.visible ? play(inst) : pause(inst);
}, { threshold: 0.01 });
vo.observe(el);
inst.vo = vo;
}
function start(inst, factory) {
var el = inst.el;
var cv = document.createElement('canvas');
cv.setAttribute('aria-hidden', 'true');
el.insertBefore(cv, el.firstChild);
var api = { gl2: gl2, prog: prog, FULL_VS: FULL_VS, NOISE: NOISE, LOW: LOW, MOBILE: MOBILE, RM: RM, audio: audio, bus: bus, noiseSrc: noiseSrc, lang: inst.lang, base: BASE,
cfg: function (def) { return config(el, def); } };
var fx = null;
try { fx = factory(el, cv, api); } catch (e) { console.warn('cpm', e); }
if (!fx) { cv.remove(); el.classList.add('cpm-fallback'); return; }
inst.fx = fx; inst.cv = cv;
var ro = new ResizeObserver(function () { size(inst); });
ro.observe(el);
size(inst);
if (fx.sound && el.getAttribute('data-sound') !== 'off') addSoundButton(inst);
if (RM) { fx.frame(fx.still || 3, 0); return; }
if (inst.visible) play(inst);
}
function size(inst) {
var r = inst.el.getBoundingClientRect();
var cap = inst.fx.dprCap || 1.5;
var dpr = Math.min(window.devicePixelRatio || 1, cap) * (inst.fx.scale || 1);
var w = Math.max(2, Math.round(r.width * dpr)), h = Math.max(2, Math.round(r.height * dpr));
if (inst.cv.width !== w || inst.cv.height !== h) {
inst.cv.width = w; inst.cv.height = h;
inst.fx.resize(w, h, r.width, r.height);
if (RM) inst.fx.frame(inst.fx.still || 3, 0);
}
}
function play(inst) {
if (!inst.fx || RM || inst.raf || document.hidden) return;
if (inst.fx.wake) inst.fx.wake();
inst.last = performance.now();
var loop = function (now) {
var dt = window.CPM_DT || Math.min(0.05, (now - inst.last) / 1000);
inst.last = now;
inst.t += dt;
inst.fx.frame(inst.t, dt);
inst.raf = requestAnimationFrame(loop);
};
inst.raf = requestAnimationFrame(loop);
if (inst.soundOn && AC) { AC.resume(); inst.fx.sound.on(true); }
}
function pause(inst) {
if (inst.raf) cancelAnimationFrame(inst.raf);
inst.raf = 0;
if (inst.fx && inst.fx.sleep) inst.fx.sleep();
if (inst.soundOn && inst.fx) inst.fx.sound.on(false);
}
document.addEventListener('visibilitychange', function () {
instances.forEach(function (i) { document.hidden ? pause(i) : (i.visible && play(i)); });
});
function addSoundButton(inst) {
var it = inst.lang === 'it';
var b = document.createElement('button');
b.type = 'button'; b.className = 'cpm-snd';
b.setAttribute('aria-pressed', 'false');
b.innerHTML = SVG + '<span>' + (it ? 'Suono' : 'Sound') + '</span>';
b.style.color = inst.fx.ui || '#141414';
b.addEventListener('click', function () {
var ctx = audio();
if (!ctx) return;
inst.soundOn = !inst.soundOn;
b.setAttribute('aria-pressed', String(inst.soundOn));
if (inst.soundOn) { ctx.resume(); inst.fx.sound.init(ctx, inst.t); inst.fx.sound.on(true); }
else inst.fx.sound.on(false);
});
inst.el.appendChild(b);
}
function scan(root) {
injectCss();
(root || document).querySelectorAll('[data-cpm]').forEach(mount);
}
window.CPM = { define: define, preset: preset, scan: scan, v: '1.0.0' };
(window.CPMQ || []).forEach(function (q) { preset(q[0], q[1]); });
window.CPMQ = { push: function (q) { preset(q[0], q[1]); } };
if (!('IntersectionObserver' in window) || !('ResizeObserver' in window)) return;
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { scan(); });
else scan();
})();
