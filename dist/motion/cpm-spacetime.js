/*! Cover Page motion: spacetime (tunnel and echo). (c) Cover Page Agency. */
CPM.define('spacetime', function (el, cv, A) {
'use strict';
var echo0 = el.getAttribute('data-mode') === 'echo';
var cfg = A.cfg({
mode: echo0 ? 'echo' : 'tunnel', clip: '', key: echo0 ? 'edge' : 'none', motion: 0.8, ink: '#2b2a28', fade: echo0 ? 1.6 : 1, paper: echo0 ? '#e9e7e3' : '#000000',
lo: -1, hi: -1, rate: 0.035, step: echo0 ? 2 : 1, layers: A.LOW ? 16 : (A.MOBILE ? 24 : 32), slices: A.LOW ? 10 : 16,
speed: 1, tilt: 0.6, warp: 0.55, smear: 0.4, amp: 0.15, tone: echo0 ? 0.88 : 1, period: 4,
notes: echo0 ? [146.83, 220, 329.63, 369.99, 587.33] : [55, 82.41, 110.3],
grains: [440, 660, 880, 990, 1320, 1760], ui: echo0 ? '#141414' : '#f3efe6'
});
var mode = cfg.mode === 'echo' ? 'echo' : 'tunnel';
var clip = cfg.clip;
if (!clip) return null;
var r0 = el.getBoundingClientRect();
var shape = (r0.width / Math.max(1, r0.height)) < 0.9 ? 'tall' : 'wide';
var poster = document.createElement('img');
poster.className = 'cpm-poster'; poster.alt = ''; poster.decoding = 'async';
poster.src = clip + '-' + shape + '.webp';
el.insertBefore(poster, cv.nextSibling);
if (A.RM) { cv.style.display = 'none'; return { resize: function () {}, frame: function () {}, still: 0, ui: cfg.ui, poster: true }; }
var g = A.gl2(cv);
if (!g) return null;
var probe = document.createElement('video');
var ext = probe.canPlayType('video/mp4; codecs="avc1.4d401e"') ? 'mp4' : 'webm';
var src = clip + '-' + shape + '.' + ext;
var echo = mode === 'echo';
var key = cfg.key;
var paperHex = cfg.paper;
var paper = [1, 3, 5].map(function (i) { return parseInt(paperHex.substr(i, 2), 16) / 255; });
var D = cfg.layers | 0;
var STEP = Math.max(1, cfg.step | 0);
var N = Math.max(4, cfg.slices | 0);
var video = document.createElement('video');
video.muted = true; video.loop = true; video.playsInline = true;
video.setAttribute('playsinline', ''); video.setAttribute('muted', '');
video.crossOrigin = 'anonymous'; video.preload = 'auto';
video.src = src;
var REV = +cfg.reveal || 0, FX = +cfg.fxhold || 7, FD = 1.6;
if (REV) { video.className = 'cpm-real'; video.setAttribute('aria-hidden', 'true'); el.insertBefore(video, cv); cv.style.opacity = '0'; }
var common = '#version 300 es\nprecision highp float;precision highp sampler2DArray;' +
'uniform sampler2DArray T;uniform float uHead,uD,uFill,uTime,uAspC,uAspV,uE,uTilt,uWarp,uAmp,uSmear,uTone;uniform vec2 uRes;in vec2 v;out vec4 o;' + A.NOISE +
'vec2 cover(vec2 uv){vec2 s=uAspC>uAspV?vec2(1.,uAspV/uAspC):vec2(uAspC/uAspV,1.);return (uv-.5)*s+.5;}' +
'vec4 layA(vec2 uv,float age){float f=clamp(age,0.,1.)*max(uFill-1.,0.);float i0=floor(f);float fr=f-i0;' +
'float l0=mod(uHead-i0+uD*4.,uD),l1=mod(uHead-i0-1.+uD*4.,uD);' +
'return mix(texture(T,vec3(uv,l0)),texture(T,vec3(uv,l1)),fr);}vec3 lay(vec2 uv,float a){return layA(uv,a).rgb;}';
var tunnelFs = common +
'void main(){vec2 p=v-.5;p.x*=uAspC;float t=uTime;' +
'float a=t*.07+sin(t*.11)*.6;mat2 R=mat2(cos(a),sin(a),-sin(a),cos(a));vec2 q=R*p;' +
'float n1=fbm(p*1.8+vec2(t*.05,-t*.035));float n2=fbm(p*4.2-vec2(t*.09,t*.06));' +
'float tilt=uTilt+.35*sin(t*.19);' +
'float age=.45+q.x*tilt+q.y*.35*sin(t*.13)+(n1-.5)*uWarp+uE*.08;' +
'vec2 d=vec2(n2,fbm(p*4.2+5.1+t*.07))-.5;' +
'float z=1.+.10*sin(t*.21)+.05*uE;' +
'vec2 uv=cover((v-.5)/z+.5+d*uSmear*(.02+.04*age));' +
'vec3 c=vec3(0.);for(int k=-1;k<=1;k++){float fk=float(k);c+=lay(uv+d*.006*fk*uSmear,age+fk*.02*uSmear);}c*=.3333;' +
'float m=smoothstep(-.04,.12,age)*smoothstep(1.04,.86,age);' +
'm*=.55+.45*smoothstep(.15,.6,n1+n2*.4);' +
'vec2 vp=p/vec2(max(uAspC,1.),max(1./uAspC,1.));float vig=smoothstep(.95,.2,length(vp));' +
'c*=m*vig;c=pow(c,vec3(1.08))*1.06;' +
'c+=(h1(v*uRes+fract(t)*91.)-.5)*.04;o=vec4(c,1.);}';
var echoFs = common +
'uniform vec3 uPaper,uInk;uniform float uEdge,uFade;' +
'void main(){vec2 base=cover(v);float t=uTime,sw=uE;' +
'vec2 dir=normalize(vec2(.55+.25*sin(t*.23),-.85+.2*cos(t*.17)));' +
'float amp=.06+uAmp*sw;float best=0.;vec3 col=uPaper;' +
'for(int k=0;k<' + N + ';k++){float fk=float(k)/' + (N - 1) + '.;' +
'vec2 off=dir*amp*fk;off.x+=sin(fk*9.4+t*1.3+base.y*6.)*.012*fk*(1.+2.*sw);' +
'vec2 uv=base+off;vec4 s=layA(uv,fk);float l=dot(s.rgb,vec3(.299,.587,.114));' +
'float w=pow(1.-fk,uFade)*(k==0?1.:.8);float a=s.a*w;' +
'if(a>best){best=a;col=uEdge>.5?mix(uInk,s.rgb*.8,k==0?.45:.1):mix(vec3(l),s.rgb,k==0?.95:.35)*(k==0?min(1.,uTone+.2):uTone);}}' +
'vec3 c=mix(uPaper,col,clamp(best*1.2,0.,1.));' +
'c+=(h1(v*uRes+fract(t)*77.)-.5)*.022;o=vec4(c,1.);}';
var P = A.prog(g, A.FULL_VS, echo ? echoFs : tunnelFs);
if (!P) return null;
var keyId = { none: 0, dark: 1, bright: 2, motion: 3, edge: 4 }[key] || 0;
var LO = cfg.lo >= 0 ? cfg.lo : [0, .25, .5, .05, .28][keyId], HI = cfg.hi >= 0 ? cfg.hi : [1, .65, .78, .18, .6][keyId];
var INKC = [1, 3, 5].map(function (i) { return parseInt(cfg.ink.substr(i, 2), 16) / 255; });
var capFs = '#version 300 es\nprecision highp float;uniform sampler2D V,B;uniform float uK,uLo,uHi,uMot;uniform vec2 uPx;in vec2 v;out vec4 o;' +
'float L(vec2 p){return dot(texture(V,p).rgb,vec3(.299,.587,.114));}' +
'vec3 at(sampler2D s,vec2 p){return (texture(s,p).rgb*2.+texture(s,p+vec2(uPx.x,0.)).rgb+texture(s,p-vec2(uPx.x,0.)).rgb+texture(s,p+vec2(0.,uPx.y)).rgb+texture(s,p-vec2(0.,uPx.y)).rgb)/6.;}' +
'void main(){vec3 c=texture(V,v).rgb;float l=dot(c,vec3(.299,.587,.114));float a=1.;' +
'if(uK>3.5){vec2 e=uPx;float gx=L(v+vec2(e.x,0.))-L(v-vec2(e.x,0.)),gy=L(v+vec2(0.,e.y))-L(v-vec2(0.,e.y));' +
'float m=uMot>0.?smoothstep(.03,.12,length(at(V,v)-at(B,v))):1.;a=smoothstep(uLo,uHi,length(vec2(gx,gy))*2.)*mix(1.,m,uMot);}' +
'else if(uK>2.5){a=smoothstep(uLo,uHi,length(at(V,v)-at(B,v)));}else if(uK>1.5){a=smoothstep(uLo,uHi,l);}else if(uK>.5){a=1.-smoothstep(uLo,uHi,l);}' +
'a*=smoothstep(0.,.025,v.x)*smoothstep(1.,.975,v.x)*smoothstep(0.,.035,v.y)*smoothstep(1.,.965,v.y);o=vec4(c,a);}';
var bgFs = '#version 300 es\nprecision highp float;uniform sampler2D V,B;uniform float uR;in vec2 v;out vec4 o;void main(){o=mix(texture(B,v),texture(V,v),uR);}';
var PC = A.prog(g, A.FULL_VS, capFs), PB = (keyId === 3 || (keyId === 4 && cfg.motion > 0)) ? A.prog(g, A.FULL_VS, bgFs) : null;
if (!PC) return null;
var vao = g.createVertexArray();
var tex = g.createTexture(), vtex = g.createTexture(), fb = g.createFramebuffer();
var bg = [], bgi = 0, firstBg = true;
var W = 0, H = 0, head = -1, fill = 0, ready = false, lastT = -1, frameCount = 0, rvfc = 'requestVideoFrameCallback' in video;
var cw = 2, ch = 2, aspC = 1;
function t2(t, w, h) {
g.bindTexture(g.TEXTURE_2D, t);
if (w) g.texImage2D(g.TEXTURE_2D, 0, g.RGBA8, w, h, 0, g.RGBA, g.UNSIGNED_BYTE, null);
g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
}
function alloc() {
var vw = video.videoWidth, vh = video.videoHeight, sc = Math.min(1, 512 / Math.max(vw, vh));
W = Math.round(vw * sc); H = Math.round(vh * sc);
g.bindTexture(g.TEXTURE_2D_ARRAY, tex);
g.texStorage3D(g.TEXTURE_2D_ARRAY, 1, g.RGBA8, W, H, D);
g.texParameteri(g.TEXTURE_2D_ARRAY, g.TEXTURE_MIN_FILTER, g.LINEAR);
g.texParameteri(g.TEXTURE_2D_ARRAY, g.TEXTURE_MAG_FILTER, g.LINEAR);
g.texParameteri(g.TEXTURE_2D_ARRAY, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
g.texParameteri(g.TEXTURE_2D_ARRAY, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
t2(vtex);
if (PB) { bg = [g.createTexture(), g.createTexture()]; t2(bg[0], W, H); t2(bg[1], W, H); }
ready = true;
}
function grab() {
if (!ready || video.readyState < 2) return;
g.bindTexture(g.TEXTURE_2D, vtex);
g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, true);
try { g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, video); } catch (e) { g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, false); return; }
g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, false);
g.disable(g.BLEND);
g.bindVertexArray(vao);
g.bindFramebuffer(g.FRAMEBUFFER, fb);
g.viewport(0, 0, W, H);
if ((frameCount++ % STEP) === 0) {
head = (head + 1) % D;
g.framebufferTextureLayer(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, tex, 0, head);
g.useProgram(PC);
g.activeTexture(g.TEXTURE0); g.bindTexture(g.TEXTURE_2D, vtex); g.uniform1i(PC.u.V, 0);
g.activeTexture(g.TEXTURE1); g.bindTexture(g.TEXTURE_2D, PB ? bg[bgi] : vtex); g.uniform1i(PC.u.B, 1);
g.uniform1f(PC.u.uK, keyId); g.uniform1f(PC.u.uMot, PB ? cfg.motion : 0); g.uniform1f(PC.u.uLo, LO); g.uniform1f(PC.u.uHi, HI); g.uniform2f(PC.u.uPx, 1.5 / W, 1.5 / H);
g.drawArrays(g.TRIANGLES, 0, 3);
fill = Math.min(D, fill + 1);
if (fill === 4) poster.style.opacity = '0';
}
if (PB) {
g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, bg[1 - bgi], 0);
g.useProgram(PB);
g.activeTexture(g.TEXTURE0); g.bindTexture(g.TEXTURE_2D, vtex); g.uniform1i(PB.u.V, 0);
g.activeTexture(g.TEXTURE1); g.bindTexture(g.TEXTURE_2D, bg[bgi]); g.uniform1i(PB.u.B, 1);
g.uniform1f(PB.u.uR, firstBg ? 1 : cfg.rate); firstBg = false;
g.drawArrays(g.TRIANGLES, 0, 3);
bgi = 1 - bgi;
}
g.bindFramebuffer(g.FRAMEBUFFER, null);
g.viewport(0, 0, cw, ch);
g.activeTexture(g.TEXTURE0);
}
function onFrame() { grab(); if (running) video.requestVideoFrameCallback(onFrame); }
video.addEventListener('loadedmetadata', alloc);
var running = false;
function tryPlay() {
var pr = video.play();
if (pr && pr.catch) pr.catch(function () {
document.addEventListener('pointerdown', function once() { document.removeEventListener('pointerdown', once); video.play(); }, { once: true });
});
}
var pulse = 0, sound = null;
function resize(w, h) { cw = w; ch = h; aspC = w / h; g.viewport(0, 0, w, h); }
function frame(t, dt) {
if (REV && fill >= 2) { var cyc = REV + FX + 2 * FD, k = t % cyc, o = k < REV ? 0 : k < REV + FD ? (k - REV) / FD : k < REV + FD + FX ? 1 : 1 - (k - REV - FD - FX) / FD; o = o * o * (3 - 2 * o); cv.style.opacity = o.toFixed(3); }
if (!rvfc && video.currentTime !== lastT) { lastT = video.currentTime; grab(); }
pulse = Math.max(0, pulse - dt * 0.9);
var e = echo ? (0.5 - 0.5 * Math.cos(t / cfg.period * 6.2832)) : Math.min(1, pulse);
t *= cfg.speed;
if (fill < 2) { g.clearColor(paper[0], paper[1], paper[2], 1); g.clear(g.COLOR_BUFFER_BIT); return; }
g.useProgram(P);
g.bindVertexArray(vao);
g.activeTexture(g.TEXTURE0);
g.bindTexture(g.TEXTURE_2D_ARRAY, tex);
var u = P.u;
g.uniform1i(u.T, 0);
g.uniform1f(u.uHead, head); g.uniform1f(u.uD, D); g.uniform1f(u.uFill, fill);
g.uniform1f(u.uTime, t); g.uniform1f(u.uAspC, aspC); g.uniform1f(u.uAspV, W / H);
g.uniform1f(u.uE, e); g.uniform2f(u.uRes, cw, ch);
g.uniform1f(u.uTilt, cfg.tilt); g.uniform1f(u.uWarp, cfg.warp); g.uniform1f(u.uAmp, cfg.amp); g.uniform1f(u.uSmear, cfg.smear); g.uniform1f(u.uTone, cfg.tone);
if (echo) { g.uniform3f(u.uPaper, paper[0], paper[1], paper[2]); g.uniform3f(u.uInk, INKC[0], INKC[1], INKC[2]); g.uniform1f(u.uEdge, keyId === 4 ? 1 : 0); g.uniform1f(u.uFade, cfg.fade); }
g.drawArrays(g.TRIANGLES, 0, 3);
}
function tunnelSound() {
var ctx, b, nodes = [], timer = 0;
function grain() {
var now = ctx.currentTime, f = cfg.grains[(Math.random() * cfg.grains.length) | 0];
var o = ctx.createOscillator(), gg = ctx.createGain();
o.type = 'sine'; o.frequency.value = f * (Math.random() < .5 ? 1 : 0.5);
gg.gain.setValueAtTime(0, now); gg.gain.linearRampToValueAtTime(0.05, now + 0.03); gg.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
o.connect(gg); gg.connect(b); o.start(now); o.stop(now + 1.7);
pulse = 1;
timer = setTimeout(grain, 1400 + Math.random() * 2600);
}
return {
init: function (c) {
if (ctx) return; ctx = c; b = A.bus(ctx, 0.7);
var n1 = A.noiseSrc(ctx), bp = ctx.createBiquadFilter(), g1 = ctx.createGain();
bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.6; g1.gain.value = 0.22;
var lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.07; lg.gain.value = 520;
lfo.connect(lg); lg.connect(bp.frequency);
n1.connect(bp); bp.connect(g1); g1.connect(b);
var n2 = A.noiseSrc(ctx), lp = ctx.createBiquadFilter(), g2 = ctx.createGain();
lp.type = 'lowpass'; lp.frequency.value = 170; g2.gain.value = 0.5;
n2.connect(lp); lp.connect(g2); g2.connect(b);
var dl = ctx.createBiquadFilter(), g3 = ctx.createGain(); dl.type = 'lowpass'; dl.frequency.value = 650; g3.gain.value = 0.11;
cfg.notes.forEach(function (f, i) { var o = ctx.createOscillator(); o.type = i ? 'triangle' : 'sine'; o.frequency.value = f; o.detune.value = i * 4; o.connect(dl); o.start(); nodes.push(o); });
dl.connect(g3); g3.connect(b);
n1.start(); n2.start(); lfo.start(); nodes.push(n1, n2, lfo);
},
on: function (v) {
if (!ctx) return;
b.gain.setTargetAtTime(v ? 0.75 : 0, ctx.currentTime, v ? 0.7 : 0.35);
clearTimeout(timer); if (v) timer = setTimeout(grain, 600);
}
};
}
function echoSound() {
var ctx, b, timer = 0, offset = 0, next = 0, P4 = cfg.period;
var notes = cfg.notes;
function cycle(at) {
var peak = at + P4 / 2, end = at + P4;
notes.forEach(function (f, i) {
var o = ctx.createOscillator(), gg = ctx.createGain();
o.type = i < 2 ? 'triangle' : 'sine'; o.frequency.value = f; o.detune.value = (Math.random() - .5) * 10;
var lv = [0.06, 0.05, 0.035, 0.03, 0.012][i] || 0.01;
gg.gain.setValueAtTime(0.0001, at); gg.gain.exponentialRampToValueAtTime(lv, peak); gg.gain.exponentialRampToValueAtTime(0.0001, end);
o.connect(gg); gg.connect(b); o.start(at); o.stop(end + 0.05);
});
var n = A.noiseSrc(ctx), hp = ctx.createBiquadFilter(), ng = ctx.createGain();
hp.type = 'highpass'; hp.frequency.value = 3600;
ng.gain.setValueAtTime(0.0001, at); ng.gain.exponentialRampToValueAtTime(0.08, peak); ng.gain.exponentialRampToValueAtTime(0.0001, end);
n.connect(hp); hp.connect(ng); ng.connect(b); n.start(at); n.stop(end);
var tk = A.noiseSrc(ctx), bp = ctx.createBiquadFilter(), tg = ctx.createGain();
bp.type = 'bandpass'; bp.frequency.value = 4200; bp.Q.value = 3;
tg.gain.setValueAtTime(0, peak); tg.gain.linearRampToValueAtTime(0.12, peak + 0.004); tg.gain.exponentialRampToValueAtTime(0.0001, peak + 0.06);
tk.connect(bp); bp.connect(tg); tg.connect(b); tk.start(peak); tk.stop(peak + 0.08);
}
function sched() {
while (next < ctx.currentTime + 1.5) { cycle(next); next += P4; }
timer = setTimeout(sched, 500);
}
return {
init: function (c, t) {
if (!ctx) { ctx = c; b = A.bus(ctx, 0.6); }
offset = ctx.currentTime - (t % P4);
},
on: function (v) {
if (!ctx) return;
b.gain.setTargetAtTime(v ? 0.9 : 0, ctx.currentTime, v ? 0.5 : 0.3);
clearTimeout(timer);
if (v) { var k = Math.ceil((ctx.currentTime - offset) / P4); next = offset + k * P4; sched(); }
}
};
}
sound = echo ? echoSound() : tunnelSound();
return {
resize: resize, frame: frame, sound: sound,
scale: echo ? 0.7 : 0.75, dprCap: 1.5, still: 6,
ui: cfg.ui,
wake: function () { running = true; tryPlay(); if (rvfc) video.requestVideoFrameCallback(onFrame); },
sleep: function () { running = false; video.pause(); }
};
});
