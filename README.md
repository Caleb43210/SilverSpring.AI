# Website.AI — Cinematic Dealership Template

A dealership-neutral React 18 + TypeScript + Vite demonstration. Default name: **Your Dealership**. Website.AI remains the platform name. No API keys, backend, dealership systems, or real customer submissions.

## Preview locally on a Mac

1. Get the **website-ai-dealership-template** branch from GitHub (Code → Download ZIP), extract it, and open the folder containing package.json in Codex desktop.
2. Install Node.js LTS from https://nodejs.org if needed.
3. Open Terminal, type `cd `, drag the extracted folder into Terminal, and press Return.
4. Run `npm install` once. For a clean locked install, use `npm ci` instead.
5. Run `npm run dev`.
6. Open the exact Local URL printed by Vite, normally http://localhost:5173, in Safari or Chrome. Keep Terminal open. Stop with Control+C.

If you already cloned this branch, commit/stash local edits first, then `git pull --ff-only origin website-ai-dealership-template`. If you previously downloaded a ZIP, download a fresh copy of this branch to get the redesign and its media. Opening index.html directly will not work.

## The new experience

- Full-height cinematic hero with local silent MP4, high-quality local fallback poster, pause/play, and autoplay failure handling.
- An original 10-second virtual-camera motion study rendered from concept imagery; **not moving-car footage**. Replace with licensed driving footage for a production campaign.
- GSAP 3.13.0 + ScrollTrigger: a desktop pinned editorial chapter, independent parallax layers, scrubbed text emphasis, and restrained reveals. Browser-native scrolling; no scroll hijacking or loading screen.
- Interactive Performance / Adventure / Everyday showcase, large imagery, crossfades, numbered controls, and direct links to the working vehicle detail dialog.
- Editorial typography and spacing, mobile-specific layouts, touch-sized controls, and light, practical shopping screens.
- Original locally bundled JPEGs and MP4; no remote stock-photo or font requests needed for default settings. System fonts avoid font-loading delays.

## Existing functionality retained

All eight fictional vehicles, filters (price, make, model, mileage, year, body style and condition), sorting, saved vehicles, gallery crop controls, specifications, pricing, adjustable payment estimates, test-drive requests, financing, trade-in, service and contact demos remain available. Forms never send or store customer details. Use fictional form data only. Photography is now explicitly labeled as concept illustration rather than actual stock photos.

Use **Customize dealership** in the footer for name, logo URL, accent color, typography, hero image, **hero MP4 URL**, address, phone, and homepage-section visibility. Empty the MP4 field for a still-image hero. Settings are browser-local; Reset template theme restores the defaults.

## Motion, accessibility, and performance

- Reduced-motion: no video request, no pinning/parallax/reveal or crossfade animation; complete static content and working controls.
- Save-Data: poster instead of video. Autoplay failures retain the poster and play control.
- Video pauses when outside the viewport, manually paused, or in a background tab.
- Desktop pinning only at 1000px and above; mobile retains natural document flow.
- Scoped GSAP context / matchMedia cleanup prevents duplicate triggers on navigation, resize, or React StrictMode remounts.
- Native dialog focus management, Escape close, keyboard operable navigation/showcase, labeled controls, and visible focus styles.
- Silent 1280×720 H.264 fast-start MP4 (~1.2 MB); local JPEGs ~340 KB each, lazy loading below the fold, and reserved media dimensions.

## Source map

- src/cinematic/CinematicHome.tsx — film hero, pinned editorial chapter, interactive showcase, finder and ownership experiences.
- src/cinematic/motion.ts — responsive motion preference and minimal typed GSAP browser interface.
- src/cinematic/cinematic.css — editorial layouts, mobile behavior, motion overrides.
- src/App.tsx — retained shopping tools, details, calculator, dialogs, forms, and customization.
- src/dealership/data.ts — fictional inventory, default configuration, filters, payment math.
- public/media — original replaceable demo media and provenance/readme.
- public/vendor — official unmodified GSAP and ScrollTrigger bundles and license/source notice. Vendored because the workspace proxy could not install the npm package. No CDN is required; don't add another GSAP copy without removing this one.

## Validation

`npm run build` and `npx tsc --noEmit -p tsconfig.app.json` pass. Additional checks covered inventory filtering, empty/combined results, payment edge cases, built media existence, GSAP/ScrollTrigger loading, and MP4 format/duration. Browser QA was unavailable in the cloud environment; inspect desktop/mobile locally before production use.

Media details: public/media/README.md. GSAP source/license references: public/vendor/README.md. Motion API reference: https://gsap.com/docs/v3/GSAP/gsap.matchMedia/ .
