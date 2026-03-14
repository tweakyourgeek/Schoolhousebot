# REPO-AUDIT.md — Schoolhousebot

**Audit Date:** 2026-03-14

---BEGIN AUDIT DATA---
REPO: Schoolhousebot
GITHUB ACCOUNT: tweakyourgeek
GITHUB URL: https://github.com/tweakyourgeek/Schoolhousebot
REPO TYPE: 🚀 App Repo
REPO PURPOSE: A Figma Make-exported React SPA for "SchoolhouseBot," an AI literacy educational site targeting experienced business owners. Features a homepage with a quiz ("Question of the Day"), a mascot character ("Sarah Side-Eye"), entry point cards for content sections, and a "Naughty 9" pattern detail page styled as old-west wanted posters. Currently a static frontend prototype with placeholder copy and stub navigation links.
TOTAL APPS: 1
NON-APP CONTENT: guidelines/Guidelines.md (empty AI coding guidelines template), ATTRIBUTIONS.md (shadcn/ui + Unsplash attributions), REPO-AUDIT.md (this file)
NON-APP RECOMMENDATION: keep — guidelines template is useful for future development; attributions file is standard practice
DOC SUITE:
README: ❌ — placeholder, 10 lines, Figma Make boilerplate only ("Run npm i / npm run dev")
CLAUDE.md: ❌
.claudeignore: ❌
.gitignore: ❌ — NO .gitignore exists; node_modules, dist/, .env files, and OS artifacts are unprotected
LICENSE: ❌ — no LICENSE file exists; package.json does not claim a license either
CHANGELOG: ❌
package.json: ✅ — scripts: `build` (vite build), `dev` (vite)
tsconfig: ❌ — no tsconfig.json despite TypeScript (.tsx) files; relies on Vite/esbuild defaults with no type checking
.env.example: ❌ — N/A, no env vars used anywhere in codebase
Tests: ❌ — no test framework, 0 test files, 0 tests
CI/CD: ❌ — no .github/workflows or any CI configuration
Other docs: ATTRIBUTIONS.md (shadcn/ui MIT + Unsplash license notes), guidelines/Guidelines.md (empty template)
DOC SUITE SCORE: 1/12

APP 1: SchoolhouseBot Homepage
PATH: / (root)
STACK: React 18.3.1, Vite 6.3.5, Tailwind CSS 4.1.12 (@tailwindcss/vite), React Router 7.13.0, Framer Motion (motion 12.23.24), MUI 7.3.5, Radix UI (18+ packages), Recharts 2.15.2, shadcn/ui components, Lucide React 0.487.0, TypeScript (no tsconfig)
VERDICT: 🟢 STATIC
REASON: Pure client-side React SPA with no server dependencies, no API calls, no database, no auth — all content is hardcoded in component files.
AUTH: no
DATABASE: no
API ROUTES: no
SSR: no
PAYMENTS: no
EMAIL: no
HOSTS USER CONTENT: no
VERCEL PROJECT: no
ENV VARS: none
NOTES:
- **Missing .gitignore (CRITICAL)**: No .gitignore exists. Running `npm install` would risk committing node_modules/ to the repo. Build artifacts (dist/), .env files, and OS junk (.DS_Store) are also unprotected.
- **Broken Figma asset imports**: Three files use `figma:asset/...` import paths that depend on Figma Make's custom Vite resolver and will fail in a standard `vite build`:
  - `src/app/pages/HomePage.tsx:173` — author photo (inline src attribute)
  - `src/app/pages/PatternPage.tsx:5` — wanted poster image (ES import)
  - `src/app/components/SarahSideEye.tsx:3` — mascot image (ES import)
  The actual PNGs exist in `src/assets/` but are not properly referenced.
- **Placeholder copy**: `EntryPoints.tsx` has `[COPY]` as description text for all 6 entry point cards.
- **Stub navigation links**: Most nav items in `Navigation.tsx` point to `/` (home). Footer links (About, Contact, Privacy) are `href="#"` stubs. The "More about this project" CTA also links to `#`.
- **Unused import**: `PatternPage.tsx:5` imports `wantedPosterImage` but never uses it in JSX.
- **Package name mismatch**: `package.json` name is `@figma/my-make-file` — the Figma Make default, never renamed.
- **Massive unused dependency footprint**: Full Radix UI suite (18+ packages), MUI, Recharts, react-dnd, embla-carousel, react-slick, cmdk, vaul, react-resizable-panels, input-otp, react-hook-form, sonner, etc. are declared but mostly unused. The app actually uses only Lucide icons, motion, react-router, and Tailwind.
- **No tsconfig.json**: TypeScript files exist but no tsconfig is present; zero type checking occurs.
- **`next-themes` dependency**: A Next.js-specific theming package is included in a Vite/React project — it will not function correctly without Next.js.
- **Author photo likely broken**: `HomePage.tsx:173` references `figma:asset/808b8eb5f...` — this hash doesn't match either PNG in `src/assets/`, so the Lexi Roark photo will be missing even with Figma's resolver.
- **Buy Me a Coffee link**: Points to generic `https://buymeacoffee.com` rather than a specific creator page.
- **React Router caveat**: Uses `createBrowserRouter` (history-based), which requires hosting platform rewrite rules to serve `index.html` for all routes. Otherwise pattern pages will 404 on refresh.
- **No lockfile**: No `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock` — dependencies have never been installed.
---END AUDIT DATA---
