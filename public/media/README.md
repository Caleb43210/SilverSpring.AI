# Authentic automotive media

The generated coupe/SUV pictures and virtual-camera MP4 have been removed. No AI vehicle or scenery substitutes are used.

## Verified source records

`manifest.json` contains 12 real vehicle photographs (eight exteriors and four interiors), a real driving clip and its poster. Every record includes its source page, original and delivery URLs, photographer, license URL, commercial-use flag, model/year/trim caveat, modifications, local delivery path and acquisition status.

The eight exteriors match the make/model and generally the generation/approximate year of the fictional inventory. They do not depict stock for sale. Regional trim differences are disclosed in gallery captions. The X5 source identifies G05 and a 2024 capture date, but does NOT confirm model year or facelift; a confirmed 2024 image is still needed.

Interiors available: Defender (2023), F-150 Lariat (2022), Outback Limited (2023), Camry Hybrid (2021, right-hand drive). Interiors not obtained: 2024 X5, 2023 911, 2025 RAV4, 2022 3 Series. No unrelated or ambiguous cabin is shown in those slots. See the manifest's pending array.

## Delivery limitation — not hidden

The cloud workspace could read source/license pages through Firecrawl, but its binary-download proxy was unreachable. None of the 14 binaries were downloaded or playback-tested here. Defaults use the exact source-backed remote URLs. A clear nonphotographic placeholder appears on load failure; it never substitutes another car or synthetic scenery.

Run `npm run media:sync` on a network-connected Mac to import local media. Run `npm run media:audit` for the current state. The importer downloads source-provided 1280px Wikimedia JPEGs and a compressed Pexels poster, validates JPEG magic bytes, writes atomically, and records SHA-256/byte counts in the manifest. Successful local media automatically becomes the preferred source after Vite rebuild/reload.

The real film by Sergei Skrynnik is Pexels asset 11661703. Its exact published source is a 2560×1440 MP4. It is on-demand (Play button) until a local optimized loop exists, avoiding an unsolicited UHD download. `media:sync` requires ffmpeg for the film and creates a silent max-12-second, 1280px-wide, 24fps H.264 fast-start MP4. Without ffmpeg, photos are imported and the film remains remote/on-demand; no unoptimized original is silently enabled for autoplay. For ffmpeg installation see https://ffmpeg.org/download.html .

Mobile starts paused. Reduced-motion and Save-Data omit the video entirely. Offscreen/background-tab playback pauses. Below-fold photographs are lazy loaded. Vehicle transitions wait for image decoding.

## Rights and attribution

Pexels license: https://www.pexels.com/license/ explicitly allows website, advertising and template use. No endorsement, standalone resale, stock-library redistribution, or trademark use is implied/permitted by this integration. The film is ordinary independent travel/driving footage, not manufacturer advertising.

Wikimedia files are individually CC BY 2.0/4.0, CC BY-SA 3.0/4.0, or CC0 as recorded. They are photographer-owned works or a credited Flickr photograph with the published reusable license. Credit and license links appear in the footer's Media credits and detail captions. CSS cropping/resizing is disclosed. Share-alike media derivatives stay under their source license; source/derivative links are retained. Those media licenses do not claim ownership or endorsement of the vehicle trademarks.

Custom uploads/URLs added through the dealership customizer need their own permission and attribution records; the included manifest covers only these defaults.
