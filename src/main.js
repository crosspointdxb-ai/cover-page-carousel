// Cover Page wedding carousel, WebGL version (piece montee).
// Reads the chapters from the page (.cpw-card) and builds a tiered wedding cake:
// the 20 cards flip up around the first tier, the couple rises on the top tier
// and gets dressed for the wedding as the 33 s loop runs.
// Time follows the page's CSS quote overlay, so quotes and motion stay paired.
import * as THREE from 'three';
import { RoomEnvironment } from '../../t/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from '../../t/examples/jsm/utils/BufferGeometryUtils.js';

const SCRIPT = document.currentScript;
const BASE = (SCRIPT && SCRIPT.src ? SCRIPT.src.replace(/[^/]*$/, '') : './');
const LOOP = 33;

function speed(t) {
  if (t < 11) return 60 + 260 * (t / 11) ** 2;
  if (t < 14) return 110 - 90 * ((t - 11) / 3);
  if (t < 22) return 20 + 320 * ((t - 14) / 8) ** 2;
  const x = (t - 22) / 11; return 340 - 280 * (1 - (1 - x) ** 2);
}
const DT = 1 / 120, N = Math.round(LOOP / DT);
const ANG = new Float32Array(N + 1);
(() => {
  const b = 0.7;
  const vs = t => {
    if (t > 11 - b && t < 11 + b) { const a = speed(11 - b), c = speed(11 + b), k = (t - (11 - b)) / (2 * b); return a + (c - a) * k * k * (3 - 2 * k); }
    return speed(t);
  };
  for (let i = 1; i <= N; i++) ANG[i] = ANG[i - 1] + 0.252 * (vs((i - 1) * DT) + vs(i * DT)) / 2 * DT;
  const k = (Math.round(ANG[N] / 360) * 360) / ANG[N];
  for (let i = 0; i <= N; i++) ANG[i] *= k;
})();
const angleAt = t => { const f = t / DT, i = Math.floor(f), r = f - i; return (ANG[i] + (ANG[Math.min(i + 1, N)] - ANG[i]) * r) * Math.PI / 180; };
const sstep = (a, b, x) => { const k = Math.min(1, Math.max(0, (x - a) / (b - a))); return k * k * (3 - 2 * k); };

function ready(fn) { document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }

ready(async () => {
  const stage = document.querySelector('.cpw-stage');
  if (!stage) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const test = document.createElement('canvas');
  if (!(test.getContext('webgl2') || test.getContext('webgl'))) return;

  const cards = [...stage.querySelectorAll('.cpw-card')].map((li, i) => ({
    i,
    n: (li.querySelector('.cpw-n') || {}).textContent || '',
    t: (li.querySelector('.cpw-ct') || {}).textContent || '',
    l: (li.querySelector('.cpw-cl') || {}).textContent || '',
    tasks: [...li.querySelectorAll('.cpw-bub li')].map(x => x.textContent.trim()).filter(Boolean),
  }));
  if (!cards.length) return;

  try { await Promise.race([Promise.all([document.fonts.load('60px "Classy Vogue"'), document.fonts.load('24px Inter'), document.fonts.load('80px Hurricane')]), new Promise(r => setTimeout(r, 1500))]); } catch (e) {}
  const SERIF = '"Classy Vogue", Georgia, serif', SANS = 'Inter, Helvetica, Arial, sans-serif';

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.localClippingEnabled = true;
  const cv = renderer.domElement;
  cv.className = 'cpw-gl-canvas';
  cv.setAttribute('aria-hidden', 'true');
  const EXT = 1.34;
  Object.assign(cv.style, { position: 'absolute', left: '0', right: '0', bottom: '0', top: (1 - EXT) * 100 + '%', width: '100%', height: EXT * 100 + '%', zIndex: '1', pointerEvents: 'none', opacity: '0', transition: 'opacity 1.2s ease' });

  // blurred reception backdrop: warm chandelier bokeh, flower arrangements, a mirrored table
  (() => {
    const W = 800, H = 450, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    let sd = 11; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    const bg = g.createRadialGradient(W / 2, H * 0.45, 40, W / 2, H * 0.5, W * 0.65);
    bg.addColorStop(0, '#4a2e18'); bg.addColorStop(0.55, '#24170f'); bg.addColorStop(1, '#0b0e1a');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    for (let k = 0; k < 700; k++) { // crystal strands
      const x = W * (0.08 + 0.84 * rnd()), y = H * 0.62 * Math.pow(rnd(), 0.8), r = 1 + rnd() * 3.5;
      g.fillStyle = `rgba(255,${200 + rnd() * 40 | 0},${140 + rnd() * 60 | 0},${0.12 + rnd() * 0.45})`; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
    }
    const fl = ['rgba(214,92,96,.75)', 'rgba(236,170,160,.7)', 'rgba(250,236,226,.7)', 'rgba(178,58,52,.7)', 'rgba(240,150,90,.6)'];
    [[0.1, 0.58], [0.26, 0.66], [0.78, 0.6], [0.92, 0.66], [0.6, 0.72], [0.4, 0.74]].forEach(([cx, cy]) => {
      for (let k = 0; k < 40; k++) { g.fillStyle = fl[k % fl.length]; g.beginPath(); g.arc(W * cx + (rnd() - 0.5) * 95, H * cy + (rnd() - 0.5) * 60, 7 + rnd() * 13, 0, 7); g.fill(); }
      g.fillStyle = 'rgba(60,80,40,.5)'; for (let k = 0; k < 12; k++) { g.beginPath(); g.arc(W * cx + (rnd() - 0.5) * 110, H * cy + (rnd() - 0.2) * 65, 5 + rnd() * 9, 0, 7); g.fill(); }
    });
    const tb = g.createLinearGradient(0, H * 0.78, 0, H); tb.addColorStop(0, 'rgba(70,45,25,.9)'); tb.addColorStop(0.08, 'rgba(255,214,160,.35)'); tb.addColorStop(0.14, 'rgba(30,20,12,.95)'); tb.addColorStop(1, 'rgba(12,10,12,1)');
    g.fillStyle = tb; g.fillRect(0, H * 0.78, W, H * 0.22);
    for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(255,220,170,${0.15 + rnd() * 0.3})`; g.beginPath(); g.arc(W * rnd(), H * (0.82 + rnd() * 0.15), 2 + rnd() * 4.5, 0, 7); g.fill(); }
    { const b = document.createElement('canvas'); b.width = W; b.height = H; const bg2 = b.getContext('2d'); bg2.filter = 'blur(9px)'; bg2.drawImage(c, 0, 0); g.clearRect(0, 0, W, H); g.drawImage(b, 0, 0); }
    // fade the edges into the page background
    g.globalCompositeOperation = 'destination-in';
    const m = g.createRadialGradient(W / 2, H * 0.55, H * 0.3, W / 2, H * 0.55, W * 0.56); m.addColorStop(0, 'rgba(0,0,0,1)'); m.addColorStop(0.7, 'rgba(0,0,0,.85)'); m.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = m; g.fillRect(0, 0, W, H);
    const v = g.createLinearGradient(0, 0, 0, H); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(0.42, 'rgba(0,0,0,1)'); v.addColorStop(0.9, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,1)');
    g.fillStyle = v; g.fillRect(0, 0, W, H);
    cv.style.backgroundImage = `url(${c.toDataURL('image/png')})`;
    cv.style.backgroundSize = 'cover'; cv.style.backgroundPosition = 'center';
  })();
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x1e140d, 3.2, 6.4);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(28, 2, 0.1, 30);

  const R = 1, CW = 2 * Math.PI * R / cards.length * 0.86, CH = CW * 1.6, top = CH / 2;
  const loader = new THREE.ImageBitmapLoader(); loader.setOptions({ imageOrientation: 'none' });

  // sugar paste / marble surface
  function paste(size, seed, veins) {
    const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
    g.fillStyle = '#fbfaf7'; g.fillRect(0, 0, size, size);
    let s = seed; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let v = 0; v < veins; v++) {
      let x = rnd() * size, y = rnd() * size, a = rnd() * Math.PI * 2;
      g.strokeStyle = `rgba(150,145,138,${0.03 + rnd() * 0.07})`; g.lineWidth = 0.6 + rnd() * 2; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 50; k++) { a += (rnd() - 0.5) * 0.7; x += Math.cos(a) * size * 0.012; y += Math.sin(a) * size * 0.012; g.lineTo(x, y); }
      g.stroke();
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  }
  const icing = new THREE.MeshPhysicalMaterial({ map: paste(512, 7, 10), color: 0xfdfbf7, roughness: 0.62, sheen: 0.6, sheenColor: new THREE.Color(0xffffff), clearcoat: 0.15 });
  const pearlMat = new THREE.MeshPhysicalMaterial({ color: 0xfffcf6, roughness: 0.18, metalness: 0.0, clearcoat: 1, sheen: 1, sheenColor: new THREE.Color(0xfff2e0), iridescence: 0.35 });
  function pearls(radius, y, size, count, parent) {
    const m = new THREE.InstancedMesh(new THREE.SphereGeometry(size, 14, 10), pearlMat, count);
    const o = new THREE.Object3D();
    for (let k = 0; k < count; k++) { const a = k / count * Math.PI * 2; o.position.set(Math.sin(a) * radius, y, Math.cos(a) * radius); o.updateMatrix(); m.setMatrixAt(k, o.matrix); }
    m.castShadow = true; parent.add(m); return m;
  }
  // piped chantilly: a star tip swirl with twisted ridges, used for rosettes and shell borders
  const cream = new THREE.MeshPhysicalMaterial({ color: 0xfffaf3, roughness: 0.78, sheen: 0.7, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.6 });
  const swirlGeo = (() => {
    const pts = []; for (let k = 0; k <= 16; k++) { const f = k / 16; pts.push(new THREE.Vector2(Math.max(0.0001, (1 - f) ** 0.8 * (1 + 0.12 * Math.sin(f * Math.PI * 3))), f * 1.15)); }
    const g = new THREE.LatheGeometry(pts, 48), p = g.attributes.position;
    for (let v = 0; v < p.count; v++) {
      const x = p.getX(v), y = p.getY(v), z = p.getZ(v), ph = Math.atan2(z, x);
      const k = 1 + 0.16 * Math.cos(8 * (ph + y * 2.6)); p.setXYZ(v, x * k, y, z * k);
    }
    g.computeVertexNormals(); return g;
  })();
  function piping(radius, y, size, count, parent, sy = 1, skip) {
    const m = new THREE.InstancedMesh(swirlGeo, cream, count), o = new THREE.Object3D(); let n = 0;
    for (let k = 0; k < count; k++) {
      const a = k / count * Math.PI * 2; if (skip && skip(a)) continue;
      o.position.set(Math.sin(a) * radius, y, Math.cos(a) * radius); o.rotation.set(0, a * 3.7, 0); o.scale.set(size, size * sy, size); o.updateMatrix(); m.setMatrixAt(n++, o.matrix);
    }
    m.count = n; m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
  }
  // Lambeth style shell piping in blush chantilly: ridged teardrops chained into borders, swags and columns
  const blush = new THREE.MeshPhysicalMaterial({ color: 0xf3bcaa, roughness: 0.7, sheen: 0.8, sheenColor: new THREE.Color(0xfff0ea), sheenRoughness: 0.5 });
  const shellGeo = (() => {
    const g = new THREE.PlaneGeometry(1, 1, 28, 32), p = g.attributes.position, uv = g.attributes.uv;
    for (let v = 0; v < p.count; v++) {
      const u = uv.getX(v), th = uv.getY(v) * Math.PI * 2;
      const head = u < 0.32 ? Math.sin((u / 0.32) * Math.PI / 2) : Math.pow(1 - (u - 0.32) / 0.68, 1.3);
      const r = 0.34 * head * (1 + (0.2 * (1 - u)) * Math.cos(9 * th)), sy = Math.sin(th), sz = Math.cos(th);
      p.setXYZ(v, u - 0.32, r * (sy < 0 ? sy * 0.25 : sy), r * sz);
    }
    g.computeVertexNormals(); return g;
  })();
  const _m = new THREE.Matrix4(), _x = new THREE.Vector3(), _y = new THREE.Vector3(), _z = new THREE.Vector3(), _s = new THREE.Vector3(), _q = new THREE.Quaternion();
  // items: [px,py,pz, dx,dy,dz (direction of the chain), nx,ny,nz (side the ridges face), size]
  function shells(items, parent) {
    const m = new THREE.InstancedMesh(shellGeo, blush, items.length);
    items.forEach((it, i) => {
      _x.set(it[3], it[4], it[5]).normalize(); _y.set(it[6], it[7], it[8]); _y.addScaledVector(_x, -_y.dot(_x)).normalize(); _z.crossVectors(_x, _y);
      _m.makeBasis(_x, _y, _z); _q.setFromRotationMatrix(_m); _s.setScalar(it[9]); _m.compose(_x.set(it[0], it[1], it[2]), _q, _s); m.setMatrixAt(i, _m);
    });
    m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
  }
  // a ring border; up = how much the ridges face up (1) or outward (0)
  function border(radius, y, size, parent, up = 1) {
    const n = Math.round(2 * Math.PI * radius / (size * 0.62)), it = [];
    for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2, sa = Math.sin(a), ca = Math.cos(a); it.push([sa * radius, y, ca * radius, ca, 0, -sa, sa * (1 - up), up, ca * (1 - up), size]); }
    return shells(it, parent);
  }
  // choux puffs glazed in caramel, stacked into small croquembouche towers
  const chouxMat = new THREE.MeshPhysicalMaterial({ color: 0xb87838, roughness: 0.5, clearcoat: 0.9, clearcoatRoughness: 0.25 });
  const chouxGeo = (() => {
    const g = new THREE.SphereGeometry(1, 18, 12), p = g.attributes.position;
    for (let v = 0; v < p.count; v++) { const x = p.getX(v), y = p.getY(v), z = p.getZ(v); const n = 1 + 0.06 * Math.sin(x * 9 + z * 7) * Math.cos(y * 8 + x * 5); p.setXYZ(v, x * n, y * n * 0.82, z * n); }
    g.computeVertexNormals(); return g;
  })();
  function croquembouche(x, y, z, baseR, h, parent) {
    const pr = baseR * 0.26, levels = Math.round(h / (pr * 1.45)), list = [];
    for (let l = 0; l < levels; l++) {
      const f = l / levels, rr = Math.max(0, (baseR - pr) * (1 - f)), cnt = Math.max(1, Math.round(2 * Math.PI * rr / (pr * 1.9)));
      for (let k = 0; k < cnt; k++) { const a = k / cnt * Math.PI * 2 + l * 0.6; list.push([x + Math.sin(a) * rr, y + pr * 0.8 + l * pr * 1.45, z + Math.cos(a) * rr, pr * (1 - 0.25 * f)]); }
    }
    const m = new THREE.InstancedMesh(chouxGeo, chouxMat, list.length), o = new THREE.Object3D();
    list.forEach(([a, b, c, s], i) => { o.position.set(a, b, c); o.rotation.set(i, i * 2.3, 0); o.scale.setScalar(s); o.updateMatrix(); m.setMatrixAt(i, o.matrix); });
    m.castShadow = true; parent.add(m);
    // a chantilly crown and a few sugar pearls on the tower
    const top = new THREE.Mesh(swirlGeo, cream); top.scale.setScalar(pr * 1.1); top.position.set(x, y + pr * 0.8 + levels * pr * 1.45 - pr * 0.3, z); parent.add(top);
    const dm = new THREE.InstancedMesh(new THREE.SphereGeometry(pr * 0.22, 10, 8), pearlMat, 14);
    for (let k = 0; k < 14; k++) { const l = (k * 5) % levels, f = l / levels, rr = (baseR - pr) * (1 - f) + pr * 0.85, a = k * 2.1; o.position.set(x + Math.sin(a) * rr, y + pr * 1.2 + l * pr * 1.45, z + Math.cos(a) * rr); o.scale.setScalar(1); o.rotation.set(0, 0, 0); o.updateMatrix(); dm.setMatrixAt(k, o.matrix); }
    parent.add(dm);
  }

  // cake
  const ring = new THREE.Group(); scene.add(ring);
  const cake = new THREE.Group(); scene.add(cake);
  const tier1 = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.035, R - 0.035, CH, 128, 1, true), icing); cake.add(tier1);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.03, R + 0.03, 0.05, 128), icing);
  lid.position.y = top + 0.025; lid.castShadow = true; lid.receiveShadow = true; cake.add(lid);
  border(R + 0.02, top + 0.056, 0.12, cake, 0.4);
  pearls(R + 0.035, top + 0.002, 0.012, 170, cake);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.07, R + 0.09, 0.06, 128), icing);
  base.position.y = -top - 0.03; base.receiveShadow = true; cake.add(base);
  border(R + 0.07, -top + 0.006, 0.13, cake, 0.75);
  // bigger tier under the card tier
  const R0 = R * 1.34, H0 = CH * 0.74;
  const tier0 = new THREE.Mesh(new THREE.CylinderGeometry(R0, R0, H0, 160), icing);
  tier0.position.y = -top - 0.06 - H0 / 2; tier0.receiveShadow = true; cake.add(tier0);
  // chantilly crown on the bottom tier edge (left open where the front roses sit), shell border at its foot
  border(R0 - 0.01, -top - 0.06 + 0.008, 0.14, cake, 0.55);
  pearls(R0 + 0.004, -top - 0.06 - 0.012, 0.012, 220, cake);
  border(R0 + 0.03, -top - 0.06 - H0 + 0.012, 0.15, cake, 0.7);
  // (croquembouche towers removed on request)
  // the couple's own wedding photos printed around the bottom tier, framed like sugar plaques
  const wedBand = new THREE.Group(); scene.add(wedBand);
  (() => {
    const PH = H0 * 0.6, PW = PH * 0.75, n = 18, yC = -top - 0.06 - H0 * 0.6, rr = R0 + 0.004;
    const frameMat = new THREE.MeshPhysicalMaterial({ color: 0xfffdf9, roughness: 0.4, sheen: 1, sheenColor: new THREE.Color(0xffffff) });
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2, dt = PW / rr;
      const fr = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, PH + 0.02, 12, 1, true, a - dt / 2 - 0.008, dt + 0.016), frameMat); fr.position.y = yC; wedBand.add(fr);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 });
      const ph = new THREE.Mesh(new THREE.CylinderGeometry(rr + 0.002, rr + 0.002, PH, 12, 1, true, a - dt / 2, dt), mat); ph.position.y = yC; wedBand.add(ph);
      loader.load(BASE + 'wed/' + (i % 12 + 1) + '.webp', bmp => {
        const c = document.createElement('canvas'); c.width = 360; c.height = 480; const g = c.getContext('2d');
        g.drawImage(bmp, 0, 0, 360, 480); g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 6; g.strokeRect(10, 10, 340, 460);
        const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; mat.map = t; mat.needsUpdate = true;
      }, undefined, () => {});
      // a small sugar rosette between photos
    }
    // vertical shell columns between the photos and draped swags above them, like a vintage Lambeth cake
    const it = [], yT = -top - 0.075, yB = -top - 0.06 - H0 + 0.05, sz = 0.075;
    for (let i = 0; i < n; i++) {
      const b = (i + 0.5) / n * Math.PI * 2, sb = Math.sin(b), cb = Math.cos(b), r = rr + 0.012;
      for (let y = yT; y > yB; y -= sz * 0.6) it.push([sb * r, y, cb * r, 0, -1, 0, sb, 0, cb, sz]);
      const b2 = b + Math.PI * 2 / n, steps = 11;
      for (let k = 0; k < steps; k++) {
        const f = (k + 0.5) / steps, a = b + (b2 - b) * f, dip = H0 * 0.17 * Math.sin(Math.PI * f), y = yT - 0.01 - dip;
        const slope = -H0 * 0.17 * Math.PI * Math.cos(Math.PI * f) / ((b2 - b) * r);
        it.push([Math.sin(a) * r, y, Math.cos(a) * r, Math.cos(a), slope, -Math.sin(a), Math.sin(a), 0, Math.cos(a), sz * 0.8]);
      }
    }
    shells(it, wedBand);
  })();
  // top tier and its "Viva gli sposi" removed on request: the couple now stands on the card tier lid
  const R2 = R * 0.6;
  const topY = top + 0.05;

  // sugar roses and leaves
  const petalMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.55, sheen: 1, sheenColor: new THREE.Color(0xfff3ee), sheenRoughness: 0.4, side: THREE.DoubleSide });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x4d6a3c, roughness: 0.6, side: THREE.DoubleSide });
  function roseGeo() {
    const parts = []; const n = 18;
    for (let k = 0; k < n; k++) {
      const f = k / (n - 1), r = 0.008 + 0.03 * Math.pow(f, 0.7);
      // one petal: a narrow curved cup, opening outward more for the outer rows
      const g = new THREE.SphereGeometry(r, 12, 8, -0.45 - 0.25 * f, 0.9 + 0.5 * f, 0.55 - 0.2 * f, 1.0);
      g.translate(0, -r * 0.35, 0);
      g.rotateX(-0.12 - 0.7 * f * f);
      g.translate(0, 0, r * 0.35 * f);
      g.rotateY(k * 2.399);
      const col = new THREE.Color().setHSL(0.975, 0.55 + 0.2 * (1 - f), 0.8 - 0.2 * (1 - f));
      const ca = new Float32Array(g.attributes.position.count * 3); for (let v = 0; v < ca.length; v += 3) { ca[v] = col.r; ca[v + 1] = col.g; ca[v + 2] = col.b; }
      g.setAttribute('color', new THREE.BufferAttribute(ca, 3)); g.deleteAttribute('uv'); parts.push(g);
    }
    return mergeGeometries(parts);
  }
  function leafGeo() {
    const g = new THREE.PlaneGeometry(0.03, 0.075, 4, 8); const pos = g.attributes.position;
    for (let v = 0; v < pos.count; v++) { const x = pos.getX(v), y = pos.getY(v); const w = Math.cos((y / 0.075) * Math.PI) * 0.5 + 0.5; pos.setX(v, x * (0.25 + w)); pos.setZ(v, -Math.abs(x) * 0.6 + y * y * 2.2); }
    g.translate(0, 0.0375, 0); g.computeVertexNormals(); return g;
  }
  const RG = roseGeo(), LG = leafGeo();
  const spots = [];
  // cascade from the top tier edge over the card tier lid
  // two cascades on the sides: a crown on the top tier rim, then down onto the card tier lid (never over the script band)
  for (const side of [Math.PI / 2, -Math.PI / 2]) for (let k = 0; k < 11; k++) { const s = k / 10; const a = side + 0.3 - s * 0.6; const onTop = s < 0.4; const rr = onTop ? R - 0.12 : R + 0.02; const y = top + 0.06; spots.push([Math.sin(a) * rr, y, Math.cos(a) * rr, (onTop ? 0.55 : 0.75) + 0.4 * Math.sin(k * 1.7) ** 2]); }
  // cluster on the bottom tier
  for (let k = 0; k < 9; k++) { const a = -0.55 + k * 0.13; const rr = R0 - 0.06 - (k % 2) * 0.05; spots.push([Math.sin(a) * rr, -top - 0.04, Math.cos(a) * rr, 0.7 + 0.45 * ((k * 7) % 5) / 5]); }
  // a few behind the couple
  for (let k = 0; k < 5; k++) { const a = Math.PI * 0.75 + k * 0.32; spots.push([Math.sin(a) * R2 * 0.55, topY + 0.01, Math.cos(a) * R2 * 0.55, 0.55 + 0.1 * k % 0.3]); }
  const roses = new THREE.InstancedMesh(RG, petalMat, spots.length), leaves = new THREE.InstancedMesh(LG, leafMat, spots.length * 3);
  const o = new THREE.Object3D(); let li = 0;
  spots.forEach(([x, y, z, sc], i) => {
    o.position.set(x, y, z); o.rotation.set((Math.sin(i) * 0.3), i * 1.3, Math.cos(i * 2) * 0.3); o.scale.setScalar(sc * 2.1); o.updateMatrix(); roses.setMatrixAt(i, o.matrix);
    for (let k = 0; k < 3; k++) { o.rotation.set(1.1 + Math.sin(i + k) * 0.3, i * 1.3 + k * 2.1, 0); o.scale.setScalar(sc * 1.8); o.position.set(x, y - 0.015, z); o.updateMatrix(); leaves.setMatrixAt(li++, o.matrix); }
  });
   cake.add(roses, leaves);

  // card textures
  function wrap(g, text, x, y, maxW, lh) {
    const words = text.split(/\s+/); let line = '';
    for (const w of words) { const t = line ? line + ' ' + w : w; if (g.measureText(t).width > maxW && line) { g.fillText(line, x, y); y += lh; line = w; } else line = t; }
    if (line) g.fillText(line, x, y); return y;
  }
  function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function cardTexture(card, bmp) {
    const W = 640, H = Math.round(W * 1.6); const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    roundRect(g, 0, 0, W, H, 22); g.clip(); g.fillStyle = '#1b1c22'; g.fillRect(0, 0, W, H);
    if (bmp) { const s = Math.max(W / bmp.width, H / bmp.height), w = bmp.width * s, h = bmp.height * s; g.drawImage(bmp, (W - w) / 2, (H - h) / 2, w, h); }
    const gr = g.createLinearGradient(0, H * 0.45, 0, H); gr.addColorStop(0, 'rgba(8,8,12,0)'); gr.addColorStop(0.45, 'rgba(8,8,12,.86)'); gr.addColorStop(1, 'rgba(8,8,12,.94)');
    g.fillStyle = gr; g.fillRect(0, H * 0.45, W, H * 0.55);
    const pad = 38; let y = H * 0.72;
    g.fillStyle = 'rgba(255,255,255,.75)'; g.font = `500 22px ${SANS}`; g.fillText(card.n.trim(), pad, y);
    g.font = `400 58px ${SERIF}`; g.fillStyle = '#ffffff'; y = wrap(g, card.t.toUpperCase(), pad, y + 64, W - pad * 2, 60);
    g.fillStyle = '#e25b1e'; g.fillRect(pad, y + 22, 54, 3);
    g.font = `400 27px ${SANS}`; g.fillStyle = 'rgba(255,255,255,.86)'; wrap(g, card.l, pad, y + 74, W - pad * 2, 38);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t;
  }
  function backTexture() {
    const W = 320, H = 512; const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    roundRect(g, 0, 0, W, H, 11); g.clip(); g.fillStyle = '#f4f1ec'; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(17,17,17,.16)'; g.lineWidth = 2; roundRect(g, 18, 18, W - 36, H - 36, 8); g.stroke();
    g.fillStyle = 'rgba(17,17,17,.5)'; g.font = `400 30px ${SERIF}`; g.textAlign = 'center'; g.fillText('COVER PAGE', W / 2, H / 2);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  const backMat = new THREE.MeshStandardMaterial({ map: backTexture(), roughness: 0.7, transparent: true, alphaTest: 0.5 });

  const bubTex = new Map();
  function bubble(text, accent) {
    const key = text + accent; if (bubTex.has(key)) return bubTex.get(key);
    const c = document.createElement('canvas'), g = c.getContext('2d'); const f = `400 34px ${SANS}`; g.font = f;
    const w = Math.ceil(g.measureText(text).width) + 56, h = 70; c.width = w; c.height = h + 22; g.font = f;
    g.fillStyle = accent ? 'rgba(226,91,30,.94)' : 'rgba(255,253,249,.95)';
    roundRect(g, 2, 2, w - 4, h - 4, (h - 4) / 2); g.fill();
    g.beginPath(); g.arc(26, h + 4, 7, 0, 7); g.fill(); g.beginPath(); g.arc(16, h + 15, 4, 0, 7); g.fill();
    g.fillStyle = accent ? '#ffffff' : '#141311'; g.textBaseline = 'middle'; g.fillText(text, 28, h / 2 + 1);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const v = { t, a: c.width / c.height }; bubTex.set(key, v); return v;
  }

  // cards, hinged at the bottom so they can flip up onto the cake
  const bubbles = [], hinges = [];
  const geoCard = new THREE.PlaneGeometry(CW, CH); geoCard.translate(0, CH / 2, 0);
  const geoBub = new THREE.PlaneGeometry(1, 1);
  const cardMats = [];
  cards.forEach((card, i) => {
    const phi = i / cards.length * Math.PI * 2;
    const g = new THREE.Group(); g.position.set(Math.sin(phi) * R, -top, Math.cos(phi) * R); g.rotation.y = phi; ring.add(g);
    const hinge = new THREE.Group(); g.add(hinge); hinges.push(hinge);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, transparent: true, alphaTest: 0.5, map: cardTexture(card, null) });
    const m = new THREE.Mesh(geoCard, mat); m.castShadow = true; hinge.add(m); cardMats.push({ card, mat });
    const b = new THREE.Mesh(geoCard, backMat); b.rotation.y = Math.PI; b.position.z = -0.002; hinge.add(b);
    const mult = 0.85 + ((i * 37) % 45) / 100;
    for (let k = 0; k < 3; k++) {
      const mesh = new THREE.Mesh(geoBub, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0, fog: true }));
      mesh.position.z = 0.012; mesh.renderOrder = 2; hinge.add(mesh);
      bubbles.push({ mesh, card, k, i, start: -k * 1.25 * mult, dur: (2.8 + ((i + k * 7) % 5) * 0.35) * mult, idx: (k * 3 + i) % Math.max(1, card.tasks.length), x: 0 });
    }
  });
  cardMats.forEach(({ card, mat }) => {
    loader.load(BASE + 'img/' + (card.i + 1) + '.webp', bmp => { const old = mat.map; mat.map = cardTexture(card, bmp); mat.needsUpdate = true; old && old.dispose(); }, undefined, () => {});
  });

  // the couple: porcelain cake toppers that rise through the top tier and get dressed
  const clip = new THREE.Plane(new THREE.Vector3(0, 1, 0), -topY + 0.001);
  const pm = (c, extra) => new THREE.MeshPhysicalMaterial(Object.assign({ color: c, roughness: 0.45, sheen: 0.8, sheenColor: new THREE.Color(0xffffff), clearcoat: 0.35, clippingPlanes: [clip], clipShadows: true }, extra || {}));
  const S = CH * 1.0;
  const V = (pts, sc) => pts.map(([r, y]) => new THREE.Vector2(r * S * sc, y * S));
  const couple = new THREE.Group(); scene.add(couple);

  // bride
  const bride = new THREE.Group(); bride.position.x = 0.085 * S; couple.add(bride);
  const brideSkin = pm(0xf3e6dc);
  const dressMat = pm(0xd9c3ad);
  const skirt = new THREE.Mesh(new THREE.LatheGeometry(V([[0, 0], [0.3, 0], [0.32, 0.03], [0.28, 0.12], [0.21, 0.28], [0.13, 0.45], [0.08, 0.58], [0.07, 0.62]], 0.62), 80), dressMat);
  skirt.castShadow = true; bride.add(skirt);
  const bodice = new THREE.Mesh(new THREE.LatheGeometry(V([[0.07, 0.62], [0.085, 0.7], [0.095, 0.76], [0.07, 0.8], [0.035, 0.82], [0.03, 0.85]], 0.62), 48), dressMat); bodice.castShadow = true; bride.add(bodice);
  const bHead = new THREE.Mesh(new THREE.SphereGeometry(0.045 * S, 40, 28), brideSkin); bHead.position.y = 0.9 * S; bHead.scale.set(0.9, 1.08, 0.95); bHead.castShadow = true; bride.add(bHead);
  const hairMat = pm(0x6b5443);
  const bun = new THREE.Mesh(new THREE.SphereGeometry(0.024 * S, 20, 14), hairMat); bun.position.set(0, 0.935 * S, -0.033 * S); bride.add(bun);
  const veilMat = pm(0xffffff, { transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, roughness: 0.6 });
  const veil = new THREE.Mesh(new THREE.LatheGeometry(V([[0.02, 0.95], [0.06, 0.86], [0.11, 0.6], [0.16, 0.3], [0.22, 0.04]], 0.62), 48, Math.PI * 0.55, Math.PI * 0.9), veilMat); bride.add(veil);
  const bouquet = new THREE.Group();
  const flowerMat = pm(0xffffff);
  for (let k = 0; k < 9; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.016 * S, 14, 10), flowerMat); s.position.set(Math.cos(k * 2.4) * 0.02 * S, Math.sin(k * 1.7) * 0.012 * S, Math.sin(k * 2.4) * 0.02 * S); bouquet.add(s); }
  bouquet.position.set(-0.02 * S, 0.64 * S, 0.07 * S); bride.add(bouquet);

  // groom
  const groom = new THREE.Group(); groom.position.x = -0.085 * S; couple.add(groom);
  const trouserMat = pm(0x3f4f6e), shirtMat = pm(0xbcc8d6), skin = pm(0xeedccd), shoeMat = pm(0x2a221c);
  const legGeo = new THREE.CylinderGeometry(0.026 * S, 0.022 * S, 0.5 * S, 20); legGeo.translate(0, 0.25 * S, 0);
  const legL = new THREE.Mesh(legGeo, trouserMat); legL.position.x = -0.03 * S; groom.add(legL);
  const legR = new THREE.Mesh(legGeo, trouserMat); legR.position.x = 0.03 * S; groom.add(legR);
  [-0.03, 0.03].forEach(x => { const sh = new THREE.Mesh(new THREE.BoxGeometry(0.05 * S, 0.025 * S, 0.08 * S), shoeMat); sh.position.set(x * S, 0.012 * S, 0.012 * S); groom.add(sh); });
  const torso = new THREE.Mesh(new THREE.LatheGeometry(V([[0.06, 0.48], [0.085, 0.52], [0.09, 0.6], [0.1, 0.72], [0.105, 0.78], [0.05, 0.82], [0.03, 0.84]], 0.95), 40), shirtMat);
  torso.castShadow = true; groom.add(torso);
  const armGeo = new THREE.CylinderGeometry(0.02 * S, 0.018 * S, 0.3 * S, 14); armGeo.translate(0, -0.15 * S, 0);
  const armL = new THREE.Mesh(armGeo, shirtMat); armL.position.set(-0.105 * S, 0.78 * S, 0); armL.rotation.z = -0.12; groom.add(armL);
  const armR = new THREE.Mesh(armGeo, shirtMat); armR.position.set(0.105 * S, 0.78 * S, 0); armR.rotation.z = 0.35; armR.rotation.x = -0.2; groom.add(armR);
  const gHead = new THREE.Mesh(new THREE.SphereGeometry(0.047 * S, 40, 28), skin); gHead.position.y = 0.9 * S; gHead.scale.set(0.92, 1.08, 0.96); gHead.castShadow = true; groom.add(gHead);
  const gHair = new THREE.Mesh(new THREE.SphereGeometry(0.049 * S, 30, 20, 0, Math.PI * 2, 0, Math.PI * 0.5), hairMat); gHair.position.y = 0.915 * S; groom.add(gHair);
  // tuxedo parts that appear while dressing
  const jacketMat = pm(0x15171d, { transparent: true, opacity: 0, roughness: 0.38 });
  const jacket = new THREE.Mesh(new THREE.LatheGeometry(V([[0.07, 0.42], [0.095, 0.5], [0.098, 0.6], [0.106, 0.72], [0.11, 0.785], [0.055, 0.82]], 0.97), 40, Math.PI * 0.12, Math.PI * 1.76), jacketMat); groom.add(jacket);
  const tie = new THREE.Mesh(new THREE.BoxGeometry(0.05 * S, 0.018 * S, 0.012 * S), pm(0x0d0e12, { transparent: true, opacity: 0 })); tie.position.set(0, 0.812 * S, 0.068 * S); groom.add(tie);
  const flower = new THREE.Mesh(new THREE.SphereGeometry(0.013 * S, 12, 10), pm(0xffffff, { transparent: true, opacity: 0 })); flower.position.set(0.055 * S, 0.74 * S, 0.085 * S); groom.add(flower);

  couple.position.y = topY; couple.scale.setScalar(0.75);
  const halo = new THREE.PointLight(0xfff8f0, 0.7, 1.4, 2); halo.position.set(0, topY + 0.38 * S, 0.3); scene.add(halo);

  // colours for the dressing transition
  const C = (h) => new THREE.Color(h);
  const DRESS = [
    [dressMat, C(0xd9c3ad), C(0xffffff)],
    [trouserMat, C(0x3f4f6e), C(0x15171d)],
    [shirtMat, C(0xbcc8d6), C(0xffffff)],
    [shoeMat, C(0x6b4a33), C(0x0d0d10)],
  ];

  // light
  scene.add(new THREE.HemisphereLight(0xffffff, 0x20243a, 0.55));
  const key = new THREE.SpotLight(0xfff6ea, 26, 12, Math.PI / 6.5, 0.6, 1.6);
  key.position.set(1.6, 3.6, 3.2); key.target.position.set(0, top, 0); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xcfd8ff, 0.9); rim.position.set(-2.5, 1.6, -3); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35); fill.position.set(-2, 0.6, 2.5); scene.add(fill);

  // framing: the first tier with its cards, the top tier and the couple
  const yMin = -top - 0.06 - H0 - 0.16, yMax = topY + S * 0.78;
  const target = new THREE.Vector3(0, top * 0.75, 0);
  const dir = new THREE.Vector3(0, 0.15, 1).normalize();
  const camBase = { d: 4 };
  function frame() {
    const w = stage.clientWidth, h = stage.clientHeight * EXT; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    const vf = THREE.MathUtils.degToRad(camera.fov), hf = 2 * Math.atan(Math.tan(vf / 2) * camera.aspect);
    const needW = (R0 + 0.06) * 2, needH = (yMax - yMin) * 1.04;
    const d = Math.max((needW / 2) / Math.tan(hf / 2), (needH / 2) / Math.tan(vf / 2)) + R * 1.1;
    camBase.d = d; camera.zoom = 1.62; camera.position.copy(target).addScaledVector(dir, d); camera.lookAt(target);
    // desktop: the cake sits 20% to the right and 20% higher, clear of the title, so the cards read better
    if (w >= 992) camera.setViewOffset(w, h, -0.2 * w, 0.2 * h, w, h); else camera.clearViewOffset();
    camera.updateProjectionMatrix();
    scene.fog.near = d - R * 0.2; scene.fog.far = d + R * 2.6;
  }
  frame();
  new ResizeObserver(frame).observe(stage);
  stage.appendChild(cv);
  // fine film grain on top of the render, so it reads like a photograph rather than CGI
  (() => {
    const c = document.createElement('canvas'); c.width = c.height = 160; const g = c.getContext('2d'); const im = g.createImageData(160, 160);
    for (let k = 0; k < im.data.length; k += 4) { const v = 110 + Math.random() * 145 | 0; im.data[k] = im.data[k + 1] = im.data[k + 2] = v; im.data[k + 3] = 255; }
    g.putImageData(im, 0, 0);
    const gr = document.createElement('div'); gr.setAttribute('aria-hidden', 'true');
    Object.assign(gr.style, { position: 'absolute', left: '0', right: '0', bottom: '0', top: cv.style.top, zIndex: '1', pointerEvents: 'none', backgroundImage: `url(${c.toDataURL()})`, opacity: '0.07', mixBlendMode: 'overlay' });
    stage.appendChild(gr);
    let f = 0; setInterval(() => { f = (f + 1) % 4; gr.style.backgroundPosition = `${f * 37}px ${f * 59}px`; }, 90);
  })();

  const shade = stage.querySelector('.cpw-shade');
  if (shade) shade.style.top = (1 - EXT) * 100 + '%';
  // soft top and bottom edges on everything that extends past the stage, so no hard band shows on any screen
  const FADE = 'linear-gradient(to bottom, transparent 0%, #000 14%)';
  for (const el of [cv, stage.lastElementChild]) if (el) { el.style.webkitMaskImage = FADE; el.style.maskImage = FADE; }
  // the quote overlay darkens the whole hero, not only the stage: it runs from the canvas top to past the hero's bottom edge
  // no dark veil during the quotes: the cake stays fully visible (the overlay keeps only its timing role)
  if (shade) shade.style.background = 'none';
  const anim = shade && shade.getAnimations ? shade.getAnimations()[0] : null;
  const t0 = performance.now();
  const now = () => { const ms = anim && anim.currentTime != null ? Number(anim.currentTime) : performance.now() - t0; return ((ms / 1000) % LOOP + LOOP) % LOOP; };

  let visible = true, raf = 0, shown = false, last = 0;
  new IntersectionObserver(e => { visible = e[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(loop); }, { rootMargin: '100px' }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible && !raf) raf = requestAnimationFrame(loop); });

  function loop(ms) {
    raf = 0; if (!visible || document.hidden) return;
    const t = now();
    ring.rotation.y = -angleAt(t);
    { const k = ms / 1000, ox = Math.sin(k * 0.21) * 0.035 + Math.sin(k * 0.53) * 0.008, oy = Math.sin(k * 0.17 + 1) * 0.02; camera.position.set(target.x + Math.sin(ox) * camBase.d * dir.z, target.y + dir.y * camBase.d + oy, target.z + Math.cos(ox) * camBase.d * dir.z); camera.lookAt(target.x, target.y + oy * 0.4, target.z); }
    const cakeA = ms / 1000 * 0.07; cake.rotation.y = cakeA; wedBand.rotation.y = cakeA;

    // cards flip up at the start, fold down at the very end so the loop closes
    hinges.forEach((h, i) => {
      const up = sstep(0.4 + i * 0.11, 1.4 + i * 0.11, t) * (1 - sstep(30.4 + i * 0.1, 31.2 + i * 0.1, t));
      h.rotation.x = (1 - up) * Math.PI * 0.5;
    });

    // the couple rises through the top tier, then sinks before the loop restarts
    const rise = sstep(0.2, 3.4, t) * (1 - sstep(31.0, 32.8, t));
    couple.position.y = topY - (1 - rise) * S * 1.05;
    couple.rotation.y = cakeA + Math.sin(ms / 1000 * 0.6) * 0.2;

    // dressing: casual clothes turn into the wedding outfits
    const d = sstep(4, 20, t);
    for (const [m, a, b] of DRESS) m.color.copy(a).lerp(b, d);
    const full = 0.55 + 0.45 * sstep(6, 18, t);
    skirt.scale.set(full, 1, full);
    veilMat.opacity = 0.34 * sstep(12, 20, t);
    bouquet.scale.setScalar(Math.max(0.001, sstep(14, 21, t)));
    jacketMat.opacity = sstep(8, 16, t); tie.material.opacity = sstep(12, 17, t); flower.material.opacity = sstep(15, 20, t);
    jacket.visible = jacketMat.opacity > 0.01; tie.visible = tie.material.opacity > 0.01; flower.visible = flower.material.opacity > 0.01;

    const dt = Math.min(0.05, last ? (ms - last) / 1000 : 0.016); last = ms;
    for (const b of bubbles) {
      b.start += dt; let p = b.start / b.dur;
      if (p < 0) { b.mesh.material.opacity = 0; continue; }
      if (p >= 1) { b.start = 0; p = 0; b.idx = (b.idx + 3) % Math.max(1, b.card.tasks.length); }
      const task = b.card.tasks[b.idx]; if (!task) continue;
      const bt = bubble(task, (b.idx % 3) === 2);
      if (b.mesh.material.map !== bt.t) { b.mesh.material.map = bt.t; b.mesh.material.needsUpdate = true; b.x = (((b.idx * 53) % 40) / 100 - 0.2) * CW; }
      const hgt = CW * 0.17; b.mesh.scale.set(hgt * bt.a, hgt, 1);
      b.mesh.position.x = b.x + Math.sin(p * 3.1 + b.k) * CW * 0.04;
      b.mesh.position.y = CH * 0.44 + p * CH * 0.3;
      const upNow = 1 - hinges[b.i].rotation.x / (Math.PI * 0.5);
      b.mesh.material.opacity = (p < 0.18 ? p / 0.18 : p > 0.7 ? Math.max(0, (1 - p) / 0.3) : 1) * upNow;
    }
    renderer.render(scene, camera);
    if (!shown) { shown = true; requestAnimationFrame(() => { cv.style.opacity = '1'; stage.classList.add('cpw-gl'); stage.style.overflow = 'visible'; stage.style.contain = 'none'; }); }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);
});
