# Website.AI — Customizable Dealership Template

The default dealer name is **Your Dealership**. Website.AI remains the platform name.
React 18 + TypeScript + Vite. No backend, API keys, real customer submissions, or dealership connections required.

## Preview on a Mac
1. Download this branch as ZIP from GitHub: Code → Download ZIP. Double-click the ZIP in Finder and move the extracted folder to Documents.
2. Install the macOS LTS installer from https://nodejs.org/ (this includes npm).
3. Open Codex desktop, add/open a project, and choose the extracted folder containing package.json. UI wording may vary.
4. Open Terminal from Applications → Utilities. Type `cd ` with a trailing space, drag the project folder from Finder into Terminal, and press Return.
5. Run `npm install`. Wait for the command prompt to return.
6. Run `npm run dev` and leave Terminal open.
7. Open the Local URL printed by Vite in Safari or Chrome (normally http://localhost:5173).
8. Stop with Control+C in Terminal. Later, run `npm run dev` again from the same folder.

Do not double-click the source index.html; it requires Vite. Internet is needed for images and Google Fonts. If port 5173 is occupied, use the different Local URL Vite prints.

## Customize and inspect
Use Customize dealership in the footer to set name, logo URL, accent color, typography, hero URL, contact information, and homepage section visibility. Settings stay in this browser. Reset template theme restores defaults.

Try Inventory filters, saved vehicles, vehicle details, payment estimates, and test-drive, service, trade-in and contact demo forms. Use fictional details only. All prices and stock are fictional; vehicle photos are representative, and gallery views are crops of one photo. Estimates exclude taxes and fees.

## Source
- src/dealership/data.ts: default configuration, fictional inventory, filtering, payment math.
- src/App.tsx: reusable vehicle cards, detail views, calculator, dialogs and forms.
- src/index.css: theme, layouts, responsive rules, reduced-motion support.

Validation: npm run build and npx tsc --noEmit -p tsconfig.app.json pass. Browser QA was unavailable in the cloud environment.
