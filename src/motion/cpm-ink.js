/*! Cover Page motion: ink (GPU particle swarm with sound). (c) Cover Page Agency. */
CPM.define('ink', function (el, cv, A) {
  'use strict';
  var g = A.gl2(cv);
  if (!g) return null;
  var cfg = A.cfg({
    paper: '#f4f3f0', ink: '#111111', count: A.LOW ? 10000 : (A.MOBILE ? 20000 : 36000),
    bpm: 64.5, flow: 1.6, swirl: 0.35, pull: 0.2, scale: 3.4, turb: 0.9, burst: 1.4, emitters: 3, trail: 0.010, focus: 3.2, blur: 1.6,
    fringe: 1, streak: 0.05, alpha: 0.1, drone: 43.65, glass: [1396.9, 1046.5, 1174.7]
  });
  var hex3 = function (h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16) / 255; }); };
  var PAPER = hex3(cfg.paper), INK = hex3(cfg.ink);
  var N = cfg.count | 0;

  var upVs = '#version 300 es\nprecision highp float;in vec4 aP;in vec4 aV;out vec4 oP;out vec4 oV;' +
    'uniform float uT,uDt,uE,uFlow,uSwirl,uPull,uScale,uTurb,uBurst,uEm;' +
    'float hs(float n){return fract(sin(n)*43758.5453);}' +
    'vec3 flow(vec3 p,float t){float A=1.+.3*sin(t*.11),B=.8+.25*cos(t*.07),C=.6+.2*sin(t*.05+1.);' +
    'vec3 q=p*(uScale+.5*sin(t*.03));' +
    'return vec3(A*sin(q.z+t*.2)+C*cos(q.y),B*sin(q.x)+A*cos(q.z-t*.13),C*sin(q.y+t*.17)+B*cos(q.x));}' +
    'void main(){vec3 p=aP.xyz;float life=aP.w;vec3 vel=aV.xyz;float sd=aV.w;' +
    'vec3 f=flow(p,uT)*(.55+.9*uE)*uFlow;vec3 sw=vec3(-p.z,0.,p.x)*uSwirl;float r=length(p);' +
    'vec3 f2=vec3(sin(p.y*6.1+uT*.9+sd*3.),sin(p.z*5.3-uT*.7),sin(p.x*7.2+uT*.5))*.6*uTurb;' +
    'vec3 bu=normalize(p+1e-4)*uE*uE*uBurst*(.4+sd);' +
    'vec3 pl=-p*(uPull+.6*smoothstep(1.2,2.5,r));' +
    'vel=mix(vel,f*.6+f2+sw+pl+bu,1.-exp(-uDt*3.));p+=vel*uDt;life-=uDt;' +
    'if(life<=0.){float s=sd*91.7+uT*13.1;vec3 d=normalize(vec3(hs(s)-.5,hs(s+1.3)-.5,hs(s+2.7)-.5)+1e-4);' +
    'float e=floor(sd*uEm);vec3 em=vec3(sin(uT*.13+e*2.1),cos(uT*.11+e*1.7)*.7,sin(uT*.09+1.+e*2.9))*(e>0.?.55:.2);' +
    'p=d*(.05+.3*hs(s+4.1))+em;vel=d*.4;life=1.5+4.5*hs(s+5.9);}' +
    'oP=vec4(p,life);oV=vec4(vel,sd);}';
  var upFs = '#version 300 es\nprecision lowp float;out vec4 o;void main(){o=vec4(0.);}';
  var drVs = '#version 300 es\nprecision highp float;in vec4 aP;in vec4 aV;uniform float uRot,uAsp,uZoom,uFocus,uBlur,uAl;out float vA;' +
    'uniform float uStreak;void main(){vec3 p=aP.xyz-(gl_VertexID==1?aV.xyz*uStreak:vec3(0.));float c=cos(uRot),s=sin(uRot);p=vec3(p.x*c-p.z*s,p.y,p.x*s+p.z*c);' +
    'float tl=.28;p=vec3(p.x,p.y*cos(tl)-p.z*sin(tl),p.y*sin(tl)+p.z*cos(tl));' +
    'float z=p.z+3.2;float k=uZoom/z;gl_Position=vec4(p.x*k/uAsp,p.y*k,0.,1.);' +
    'float bl=abs(z-uFocus)*uBlur;' +
    'vA=uAl/(1.+bl*bl*14.)*smoothstep(0.,.5,aP.w)*min(1.,aP.w)*clamp(length(aV.xyz)*.9,.22,1.);}';
  var drFs = '#version 300 es\nprecision mediump float;in float vA;out vec4 o;void main(){o=vec4(0.,0.,0.,vA);}';
  var fadeFs = '#version 300 es\nprecision mediump float;uniform float uF;out vec4 o;void main(){o=vec4(uF);}';
  var outFs = '#version 300 es\nprecision mediump float;in vec2 v;uniform sampler2D T;uniform vec3 uPaper,uInk;uniform float uFr,uT;uniform vec2 uRes;out vec4 o;' +
    'float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}' +
    'void main(){vec2 d=(v-.5)*uFr*.006;float r=texture(T,v+d).r,gg=texture(T,v).r,b=texture(T,v-d).r;' +
    'vec3 a=1.-vec3(r,gg,b);vec3 c=mix(uPaper,uInk,a);c+=(h(v*uRes+fract(uT)*61.)-.5)*.018;o=vec4(c,1.);}';

  var PU = A.prog(g, upVs, upFs, ['oP', 'oV']), PD = A.prog(g, drVs, drFs), PF = A.prog(g, A.FULL_VS, fadeFs), PO = A.prog(g, A.FULL_VS, outFs);
  if (!PU || !PD || !PF || !PO) return null;

  /* particle state lives on the GPU, ping pong with transform feedback */
  var init = new Float32Array(N * 4), initV = new Float32Array(N * 4);
  for (var i = 0; i < N; i++) {
    var a = Math.random() * 6.283, b = Math.acos(Math.random() * 2 - 1), r = Math.pow(Math.random(), 0.5) * 0.9;
    init[i * 4] = r * Math.sin(b) * Math.cos(a); init[i * 4 + 1] = r * Math.sin(b) * Math.sin(a); init[i * 4 + 2] = r * Math.cos(b); init[i * 4 + 3] = Math.random() * 5;
    initV[i * 4 + 3] = Math.random();
  }
  function buf(d) { var b = g.createBuffer(); g.bindBuffer(g.ARRAY_BUFFER, b); g.bufferData(g.ARRAY_BUFFER, d, g.DYNAMIC_COPY); return b; }
  var S = [{ p: buf(init), v: buf(initV) }, { p: buf(init), v: buf(initV) }];
  var lP = g.getAttribLocation(PU, 'aP'), lV = g.getAttribLocation(PU, 'aV'), dP = g.getAttribLocation(PD, 'aP'), dV = g.getAttribLocation(PD, 'aV');
  S.forEach(function (s) {
    s.up = g.createVertexArray(); g.bindVertexArray(s.up);
    g.bindBuffer(g.ARRAY_BUFFER, s.p); g.enableVertexAttribArray(lP); g.vertexAttribPointer(lP, 4, g.FLOAT, false, 0, 0);
    g.bindBuffer(g.ARRAY_BUFFER, s.v); g.enableVertexAttribArray(lV); g.vertexAttribPointer(lV, 4, g.FLOAT, false, 0, 0);
    s.dr = g.createVertexArray(); g.bindVertexArray(s.dr);
    g.bindBuffer(g.ARRAY_BUFFER, s.p); g.enableVertexAttribArray(dP); g.vertexAttribPointer(dP, 4, g.FLOAT, false, 0, 0); g.vertexAttribDivisor(dP, 1);
    g.bindBuffer(g.ARRAY_BUFFER, s.v); g.enableVertexAttribArray(dV); g.vertexAttribPointer(dV, 4, g.FLOAT, false, 0, 0); g.vertexAttribDivisor(dV, 1);
    s.tf = g.createTransformFeedback(); g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, s.tf);
    g.bindBufferBase(g.TRANSFORM_FEEDBACK_BUFFER, 0, s.p); g.bindBufferBase(g.TRANSFORM_FEEDBACK_BUFFER, 1, s.v);
  });
  g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, null);
  g.bindBuffer(g.TRANSFORM_FEEDBACK_BUFFER, null);
  g.bindBuffer(g.ARRAY_BUFFER, null);
  g.bindVertexArray(null);
  var cur = 0;
  var empty = g.createVertexArray();

  /* accumulation target: ink darkens it, a tiny additive lift brings it back to paper */
  var fbo = g.createFramebuffer(), tex = g.createTexture(), cw = 2, ch = 2, dpr = 1;
  function resize(w, h, cssw) {
    cw = w; ch = h; dpr = w / cssw;
    g.bindTexture(g.TEXTURE_2D, tex);
    g.texImage2D(g.TEXTURE_2D, 0, g.RGBA8, w, h, 0, g.RGBA, g.UNSIGNED_BYTE, null);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
    g.bindFramebuffer(g.FRAMEBUFFER, fbo); g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, tex, 0);
    g.clearColor(1, 1, 1, 1); g.clear(g.COLOR_BUFFER_BIT);
    g.bindFramebuffer(g.FRAMEBUFFER, null);
  }

  var period = 60 / cfg.bpm, lastPulse = -1, env = 0, sound = null;
  function frame(t, dt) {
    var pn = Math.floor(t / period);
    if (pn !== lastPulse) { lastPulse = pn; env = (pn % 4 === 0) ? 1 : 0.55; if (sound) sound.pulse(pn); }
    env *= Math.exp(-dt * 2.2);
    var swell = 0.5 - 0.5 * Math.cos(t / (period * 16) * 6.283);
    var E = Math.min(1.2, env * 0.7 + swell * 0.5);
    if (sound) sound.energy(E);

    var s0 = S[cur], s1 = S[1 - cur];
    g.useProgram(PU);
    g.uniform1f(PU.u.uT, t); g.uniform1f(PU.u.uDt, Math.max(0.004, dt)); g.uniform1f(PU.u.uE, E);
    g.uniform1f(PU.u.uFlow, cfg.flow); g.uniform1f(PU.u.uSwirl, cfg.swirl); g.uniform1f(PU.u.uPull, cfg.pull); g.uniform1f(PU.u.uScale, cfg.scale); g.uniform1f(PU.u.uTurb, cfg.turb); g.uniform1f(PU.u.uBurst, cfg.burst); g.uniform1f(PU.u.uEm, cfg.emitters);
    g.bindVertexArray(s0.up);
    g.enable(g.RASTERIZER_DISCARD);
    g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, s1.tf);
    g.beginTransformFeedback(g.POINTS); g.drawArrays(g.POINTS, 0, N); g.endTransformFeedback();
    g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, null);
    g.disable(g.RASTERIZER_DISCARD);
    cur = 1 - cur;

    g.bindFramebuffer(g.FRAMEBUFFER, fbo); g.viewport(0, 0, cw, ch);
    g.enable(g.BLEND);
    g.blendFunc(g.ONE, g.ONE); g.useProgram(PF); g.uniform1f(PF.u.uF, cfg.trail * Math.min(3, dt * 60)); g.bindVertexArray(empty); g.drawArrays(g.TRIANGLES, 0, 3);
    g.blendFunc(g.ZERO, g.ONE_MINUS_SRC_ALPHA);
    g.useProgram(PD);
    g.uniform1f(PD.u.uRot, t * 0.06 + Math.sin(t * 0.05) * 0.8); g.uniform1f(PD.u.uAsp, cw / ch);
    g.uniform1f(PD.u.uZoom, (cw < ch ? 2.1 : 2.6) * (cw < ch ? cw / ch * 1.6 : 1)); g.uniform1f(PD.u.uFocus, cfg.focus + Math.sin(t * 0.09) * 0.35);
    g.uniform1f(PD.u.uBlur, cfg.blur); g.uniform1f(PD.u.uStreak, cfg.streak); g.uniform1f(PD.u.uAl, cfg.alpha);
    g.bindVertexArray(S[cur].dr); g.drawArraysInstanced(g.LINES, 0, 2, N);
    g.disable(g.BLEND);
    g.bindFramebuffer(g.FRAMEBUFFER, null); g.viewport(0, 0, cw, ch);
    g.useProgram(PO); g.activeTexture(g.TEXTURE0); g.bindTexture(g.TEXTURE_2D, tex);
    g.uniform1i(PO.u.T, 0); g.uniform3f(PO.u.uPaper, PAPER[0], PAPER[1], PAPER[2]); g.uniform3f(PO.u.uInk, INK[0], INK[1], INK[2]);
    g.uniform1f(PO.u.uFr, cfg.fringe * (0.6 + E)); g.uniform1f(PO.u.uT, t); g.uniform2f(PO.u.uRes, cw, ch);
    g.bindVertexArray(empty); g.drawArrays(g.TRIANGLES, 0, 3);
  }

  /* sound: drone, breath that follows the swarm, a soft deep pulse, glass on every fourth beat */
  sound = (function () {
    var ctx, b, breath, bf, on = false, lastE = -1;
    return {
      init: function (c) {
        if (ctx) return; ctx = c; b = A.bus(ctx, 0.55);
        var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 320;
        var dg = ctx.createGain(); dg.gain.value = 0.16;
        [1, 2, 3.01].forEach(function (m, i) { var o = ctx.createOscillator(); o.frequency.value = cfg.drone * m; var gg = ctx.createGain(); gg.gain.value = [1, .4, .12][i]; o.connect(gg); gg.connect(lp); o.start(); });
        lp.connect(dg); dg.connect(b);
        var n = A.noiseSrc(ctx); bf = ctx.createBiquadFilter(); bf.type = 'bandpass'; bf.frequency.value = 600; bf.Q.value = 0.8;
        breath = ctx.createGain(); breath.gain.value = 0;
        n.connect(bf); bf.connect(breath); breath.connect(b); n.start();
      },
      on: function (v) { on = v; if (ctx) b.gain.setTargetAtTime(v ? 0.85 : 0, ctx.currentTime, v ? 0.6 : 0.3); },
      energy: function (E) {
        if (!on || !ctx || Math.abs(E - lastE) < 0.04) return; lastE = E;
        breath.gain.setTargetAtTime(0.05 + E * 0.16, ctx.currentTime, 0.12);
        bf.frequency.setTargetAtTime(380 + E * 1400, ctx.currentTime, 0.2);
      },
      pulse: function (pn) {
        if (!on || !ctx) return;
        var at = ctx.currentTime + 0.01, o = ctx.createOscillator(), gg = ctx.createGain();
        o.frequency.setValueAtTime(112, at); o.frequency.exponentialRampToValueAtTime(41, at + 0.2);
        gg.gain.setValueAtTime(0.0001, at); gg.gain.exponentialRampToValueAtTime(pn % 4 === 0 ? 0.42 : 0.22, at + 0.01); gg.gain.exponentialRampToValueAtTime(0.0001, at + 0.5);
        o.connect(gg); gg.connect(ctx.cpm.master); o.start(at); o.stop(at + 0.55);
        if (pn % 4 === 0) {
          var f = cfg.glass[(pn / 4) % cfg.glass.length | 0], q = ctx.createOscillator(), qg = ctx.createGain();
          q.frequency.value = f; qg.gain.setValueAtTime(0, at); qg.gain.linearRampToValueAtTime(0.035, at + 0.02); qg.gain.exponentialRampToValueAtTime(0.0001, at + 2.4);
          q.connect(qg); qg.connect(b); q.start(at); q.stop(at + 2.5);
        }
      }
    };
  })();

  return { resize: resize, frame: frame, sound: sound, dprCap: 1.5, still: 9, ui: cfg.ink };
});
