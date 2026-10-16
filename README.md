# Cover Page wedding cake carousel

WebGL hero for coverpageagency.com/wedding-planner-milano: a three tier piece montee.
The 20 chapter cards (read from the page, .cpw-card) flip up around the middle tier and spin,
the couple rises on the top tier and is dressed for the wedding during the 33 s loop.
Time follows the page's CSS quote overlay, so quotes and motion stay paired.
Without WebGL, or with reduced motion, the page keeps its CSS version.

Build: esbuild src/main.js --bundle --minify --format=iife --alias:three=<three r186>/build/three.module.js --outfile=dist/carousel.js
Load: https://cdn.jsdelivr.net/gh/crosspointdxb-ai/cover-page-carousel@<tag>/dist/carousel.js
Uses three.js r186 (MIT).
