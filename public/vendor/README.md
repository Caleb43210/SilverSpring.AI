# GSAP 3.13.0 + ScrollTrigger

Vendored unmodified from the official greensock/GSAP repository's 3.13.0 tag:
https://github.com/greensock/GSAP/blob/3.13.0/dist/gsap.min.js
https://github.com/greensock/GSAP/blob/3.13.0/dist/ScrollTrigger.min.js

Original copyright/license headers are retained in each file. GSAP is distributed under its Standard License: https://gsap.com/standard-license . Review those terms for production distribution.

Bundled locally to avoid a CDN dependency and allow the demo to run without external asset requests. The workspace proxy could not install the npm package; a future migration may use npm gsap@3.13.0 in place of these files. Do not load both copies.

The small TypeScript interface in src/cinematic/motion.ts covers only the methods this demo uses. Animation behavior follows official matchMedia / context / ScrollTrigger APIs. The native scroll position is never intercepted.
