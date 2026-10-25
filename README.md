# Website.AI — Authentic Automotive Media Demo

Dealership-neutral React + TypeScript + Vite demonstration. Default dealer: **Your Dealership**. Website.AI remains the platform. Fictional stock, prices and request forms; no dealership connections or real submissions.

## Preview on your Mac

1. Download the `website-ai-dealership-template` branch (Code → Download ZIP), extract it, and open the folder containing package.json in Codex.
2. Install Node.js LTS if needed. Open Terminal in the project folder.
3. Run `npm install`, then `npm run dev`.
4. Open the exact Local URL Vite prints, normally http://localhost:5173. Keep Terminal open; stop with Control+C.

If you already cloned this branch, commit/stash local edits, then `git pull --ff-only origin website-ai-dealership-template`. ZIP downloads require a fresh ZIP to obtain updates.

## Authentic media and honest gaps

All AI-generated automotive images and the concept-image movie are removed. Real reference photos now cover all eight models. Actual exterior/interior photographs replace the old crop-only detail galleries wherever verified interiors were obtained. Photo credits, licenses and exact year/trim differences are visible in Media credits and gallery captions.

There are 12 verified vehicle-photo source records (8 exteriors, 4 interiors), plus a real driving clip and poster from Pexels. Four interiors remain unfilled: X5, 911, RAV4 and 3 Series. The X5 exterior's precise model year/facelift also remains unconfirmed. Other photos are same-generation/approximate-year references, not exact stock/trim photos. Those differences are disclosed instead of hidden or filled with synthetic substitutes.

**Binary-download limitation:** the cloud's proxy was unavailable. All 14 source URLs and their published licenses are recorded, but binaries could not be downloaded, visually inspected, or playback-tested here. Remote source-backed media is enabled; failures show a neutral “Photograph unavailable” panel. This is not a fully verified offline media pack.

The footage is Sergei Skrynnik's real mountain-road driving clip, Pexels #11661703, under the Pexels License. It starts on demand because the verified remote file is UHD. Click Play to view it. Mobile also starts paused; reduced-motion/Save-Data suppress video requests.

## Download and optimize media locally

```bash
npm run media:sync
npm run media:audit
```

The importer honors the system proxy/CA, validates media, prefers 1280px source thumbnails, and records local hashes and acquisition status. It creates a silent max-12-second, 1280px-wide, fast-start H.264 film with ffmpeg. Install ffmpeg from https://ffmpeg.org/download.html if you want the optimized autoplay loop. Without it, photos can still import and the film remains remote/on-demand. Rebuild/reload after import. Failed acquisition never marks a media file as present or creates a substitute.

See `public/media/manifest.json` and `public/media/README.md` for every source, author, license and outstanding slot. User-supplied custom media needs its own rights records.

## Preserved experience

Premium cinematic composition, GSAP/ScrollTrigger pinning, parallax, decoded-image crossfades, native scrolling, responsive navigation, all filters/sorting, saved vehicles, specifications, financing estimates, trade-in, service/contact and test-drive demos remain. Custom dealership identity, color, typography, logo, hero image/video and section visibility remain. Existing browser configuration is migrated away from retired generated defaults without discarding dealer information or custom URLs.

## Source map

- src/media/catalog.ts — typed manifest access, vehicle binding, legacy-media migration.
- src/media/Photo.tsx — local/remote delivery and honest failure state.
- src/media/MediaCredits.tsx — visible credit/license links and gaps.
- src/cinematic — retained premium homepage and GSAP behavior, now using authentic media.
- src/dealership/data.ts — fictional stock, filters and payment math.
- src/App.tsx — shopping UI, real-photo galleries, financing, demos and configuration.
- scripts/sync-media.mjs — acquisition and optional film optimization.
- scripts/test-demo.cjs — existing inventory/payment/GSAP checks plus media/license/gallery/migration checks.

## Validation

```bash
npm run typecheck
npm run build
npm test
```

All pass. Tests cover all previous filter/payment/GSAP assertions plus source/credit/license completeness, photo-to-vehicle binding, explicit missing interiors, generated-asset removal and configuration migration. External downloads, rendered browser layouts and playback remain unverified; `media:sync` failed in the cloud with an unreachable proxy, as reported above.
