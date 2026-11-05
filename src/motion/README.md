# Cover Page motion (cpm)

Moving pieces with their own sound for coverpageagency.com. No libraries. One small loader; each effect loads only when it scrolls near the screen.

| File | gzip | What |
|---|---|---|
| dist/motion/cpm.js | about 4.5 KB | loader, shared audio graph, WebGL helpers, sound button |
| dist/motion/cpm-spacetime.js | about 5.2 KB | `tunnel` (video sliced through time) and `echo` (video drawn in ink with time trails) |
| dist/motion/cpm-constellation.js | about 7.7 KB | how an event takes shape: eight nodes, labels, HUD |
| dist/motion/cpm-ink.js | about 3.9 KB | GPU particle swarm (transform feedback) on paper |
| dist/motion/clips/*.mp4, *.webm, *.webp | 0.2 to 0.5 MB each | Cover Page film clips, loaded only by spacetime |

## Use on a page

```html
<div data-cpm="spacetime" data-mode="tunnel" data-clip="https://cdn.jsdelivr.net/gh/crosspointdxb-ai/cover-page-carousel@06b50c7f48b0807c8a02300e28d739bd1bfcc0f7/dist/motion/clips/cloister" style="height:78vh"></div>
<div data-cpm="spacetime" data-mode="echo" data-clip=".../clips/petals" style="height:78vh"></div>
<div data-cpm="constellation" data-lang="it" style="height:78vh"></div>
<div data-cpm="ink" style="height:78vh"></div>
<script src="https://cdn.jsdelivr.net/gh/crosspointdxb-ai/cover-page-carousel@06b50c7f48b0807c8a02300e28d739bd1bfcc0f7/dist/motion/cpm.js" defer crossorigin="anonymous" integrity="(see dist/motion/sri.json, key loader)"></script>
```

The container must have a size (height or aspect-ratio): no layout shift.
On Webflow the loader is a registered hosted script (Site settings or page level), and each block is an Embed with the div.

## Speed rules built in

1. Loader only on load; the effect file is fetched 400 px before the block enters the screen.
2. Rendering stops when the block leaves the screen or the tab is hidden.
3. Pixel ratio capped (1.5 to 1.75) and render scale under 1 for the heavy video shaders.
4. Fewer particles, slices and layers on phones and on low memory or Save Data devices.
5. prefers-reduced-motion: one still frame, no loop.
6. Sound is synthesized with Web Audio (nothing downloaded) and starts only after a tap on the Sound button. Muted by default.
7. Video: H.264 mp4 for Safari and Chrome, VP9 webm fallback, poster webp first, autoplay muted, play on first touch if Low Power Mode blocks it.
8. Module files carry SRI hashes baked into the loader.

## Make your own variant (no code)

Settings merge in this order: module defaults, then a named preset, then `data-cfg` JSON, then single `data-*` attributes.

```html
<script>(window.CPMQ=window.CPMQ||[]).push(['ink-gold',{paper:'#f6f1e7',ink:'#6b5320',bpm:72,flow:2.2,emitters:4}])</script>
<div data-cpm="ink" data-preset="ink-gold"></div>
<div data-cpm="spacetime" data-mode="echo" data-clip=".../clips/cloister" data-cfg='{"motion":0,"amp":0.3,"fade":0.7}'></div>
```

Start from a reference video: `python3 tools/analyse_reference.py ref.mp4` gives palette, tempo, swell period and peak pitches as a suggested preset.

## Make a new effect (code)

1. Copy a module to `src/motion/cpm-NAME.js` with `CPM.define('NAME', function (el, canvas, A) { ... return { resize, frame, sound, dprCap, still, ui }; })`.
2. Use `A.cfg(defaults)` for every number you may want to change later, `A.gl2`, `A.prog`, `A.bus`, `A.noiseSrc`.
3. `python3 tools/build_motion.py` (minify, SRI, sizes), test with `dist/motion/demo.html`, tag a new version.
4. On the page: `<div data-cpm="NAME"></div>`. The loader finds `cpm-NAME.js` next to itself.

## Parameters

spacetime: mode (tunnel, echo), clip, key (none, dark, bright, motion, edge), lo, hi, motion, rate, step, layers, slices, speed, tilt, warp, smear, amp, fade, tone, period, paper, ink, notes, grains, ui.
constellation: chapters [[name, line, [5 tags]] x up to 8], colors, bg, accent, brand, engine, place, step, bpm, seed, scale, pad.
ink: paper, ink, count, bpm, flow, swirl, pull, scale, turb, burst, emitters, trail, focus, blur, fringe, streak, alpha, drone, glass.

Footage is Cover Page's own wedding film; all sound is synthesized in the browser. The reference posts inspired the techniques only; no footage, music or names from them are used.
