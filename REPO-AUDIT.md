# REPO-AUDIT.md — Schoolhousebot

**Audit Date:** 2026-03-14

---

## Repo Overview

- **Git Remote URL:** `https://github.com/tweakyourgeek/Schoolhousebot`
- **GitHub Account:** tweakyourgeek
- **Repo Name:** Schoolhousebot
- **Full URL:** https://github.com/tweakyourgeek/Schoolhousebot
- **Distinct apps / deployable units:** 1 — a single-page React app at the repo root
- **Tech stack:** React 18, Vite 6, TypeScript, Tailwind CSS v4, Radix UI primitives, shadcn/ui components, Framer Motion (motion), React Router v7, Recharts, Lucide icons
- **Connected to Vercel?** No — no `vercel.json`, `.vercel` directory, or Vercel-specific configuration found
- **Multiple Vercel projects?** No

---

## Repo Classification

- 🚀 **APP REPO**: Contains one deployable web app — the SchoolhouseBot homepage
- 🧪 **EXPERIMENT**: This appears to be a Figma Make export that has been customized into a working prototype. The project was generated from Figma's code export tool ("Figma Make"), as evidenced by the `@figma/my-make-file` package name, `figma:asset/` import paths, and the `ImageWithFallback` Figma helper component. It has been significantly customized with real content, routing, and interactive features, but many navigation links point to `#` or `/` (placeholder destinations), and entry point descriptions contain `[COPY]` placeholder text.

---

## Non-App Content Inventory

- **`guidelines/Guidelines.md`** — A template file for providing AI (Figma Make) with design system guidelines. Contains only the default template comments with no actual custom guidelines filled in.
- **`ATTRIBUTIONS.md`** — Credits shadcn/ui (MIT license) and Unsplash photos used in the Figma Make export.
- **`src/assets/`** — Contains 2 PNG image assets (mascot image and a wanted poster image) referenced by the app components via Figma asset paths.

**Purpose:** The guidelines file is a leftover from the Figma Make export process. ATTRIBUTIONS.md is standard attribution documentation.

**Recommendation:** The `guidelines/Guidelines.md` file is a boilerplate template with no custom content — could be deleted or populated with actual project guidelines. The attributions file should be kept.

---

## Documentation Suite Check

- ✅ **README.md** — Exists but is a minimal placeholder. Only contains the project title ("Design SchoolhouseBot Homepage"), a link to the Figma source file, and two lines on how to run `npm i` and `npm run dev`. Not substantive.
- ❌ **CLAUDE.md** — missing
- ❌ **.claudeignore** — missing
- ❌ **.gitignore** — missing (no .gitignore file exists in the repo at all)
- ❌ **LICENSE** — missing
- ❌ **CHANGELOG.md** — missing
- ❌ **CONTRIBUTING.md** — missing
- ✅ **package.json** — Exists.
  - `"name"`: `"@figma/my-make-file"` (default Figma Make name, not customized)
  - `"description"`: not present
  - `"scripts"`: `"build": "vite build"`, `"dev": "vite"`
- ❌ **tsconfig.json** — missing (TypeScript is used via Vite's built-in support but no tsconfig exists)
- ❌ **.env.example** — missing
- ❌ **Tests** — No test files, test directories, or testing frameworks (no Jest, Vitest, Playwright, or Cypress)
- ❌ **CI/CD** — No GitHub Actions workflows, no Vercel config, no Netlify config, no deployment automation
- ✅ **Other docs:**
  - `ATTRIBUTIONS.md` — Credits for shadcn/ui and Unsplash assets
  - `guidelines/Guidelines.md` — Empty AI guidelines template from Figma Make

**Doc Suite Score: 3 out of 12** (README, package.json, other docs)

---

## Per-App Deep Dive

### App 1: SchoolhouseBot Homepage

**Path:** `/` (repo root)

**Description:** An AI literacy educational website called "SchoolhouseBot" with the tagline "AI literacy for people who saw the movie and know how this ends." It features a homepage with a "Question of the Day" interactive quiz, a mascot character called "Sarah Side-Eye," entry point cards linking to various sections, and individual "Wanted Poster" pattern pages (called "The Naughty 9") that describe common AI usage anti-patterns in a fun western-themed format.

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS v4, React Router v7, Framer Motion (motion), Radix UI, shadcn/ui, Lucide React icons

#### Authentication
- **No** — No user login, authentication, or auth provider of any kind
- No auth-related environment variables

#### Database
- **No** — No database connection of any kind
- No ORM, no database environment variables, no connection strings
- All content is hardcoded in component files (pattern data in PatternPage.tsx, quiz data in QuestionOfTheDay.tsx)

#### API Routes / Server-Side Logic
- **No** — No API routes, no server endpoints
- Pure client-side SPA (Single Page Application) built with Vite
- No SSR — entirely static site generation capable
- No serverless functions
- No calls to any APIs (first-party or third-party)

#### Payments
- **No** — No Stripe, PayPal, LemonSqueezy, or any payment processor
- No webhook endpoints
- There is a "Buy Me a Coffee" link in the footer pointing to `https://buymeacoffee.com` but it's just an external link, not an integration

#### Email / Notifications
- **No** — No email sending capability (no Resend, SendGrid, Mailgun, or nodemailer)
- No notification systems

#### Hosting Other People's Content
- **No** — Does not store or serve user-generated content
- No file upload features
- All content is static and author-created

#### Environment Variables
- **None** — Zero environment variables referenced anywhere in the codebase. No `process.env`, no `import.meta.env`, no `.env` files.

#### Verdict

🟢 **STATIC**: No server needed. This is a purely static React SPA with no backend dependencies, no API calls, no database, no auth, and no environment variables. Can be built with `vite build` and served from any static hosting platform including GitHub Pages. The only caveat is that React Router uses `createBrowserRouter` (history-based routing), which requires either a redirect/rewrite rule on the hosting platform to serve `index.html` for all routes, or switching to hash-based routing for GitHub Pages.

---

## Additional Notes

1. **Figma Make Origin:** This project was exported from Figma Make (Figma's code generation tool). The package name is still the default `@figma/my-make-file`, and there are Figma-specific import paths (`figma:asset/...`) used for images in `SarahSideEye.tsx` and `PatternPage.tsx`. These `figma:asset/` imports would likely break in a standard Vite build — they appear to rely on a Figma Make-specific Vite plugin or asset resolution that may not be configured.

2. **Placeholder Content:** Several pieces of content are still placeholder:
   - All 6 entry point card descriptions say `[COPY]` (in `EntryPoints.tsx`)
   - Most navigation links point to `/` or `#` (in `Navigation.tsx`)
   - The "More about this project" CTA links to `#`
   - The author photo uses a `figma:asset/` path that may not resolve

3. **No node_modules / No lockfile:** There is no `node_modules` directory and no lockfile (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`), suggesting dependencies have never been installed in this repo.

4. **Missing .gitignore:** Without a `.gitignore`, running `npm install` would risk committing `node_modules` to the repo.

5. **Large UI Component Library:** The repo includes ~40 shadcn/ui component files in `src/app/components/ui/`, most of which appear unused by the actual app pages. Only `button` and possibly a few others are actively used. This is typical of Figma Make exports which include the full component library.

6. **3 Commits Total:** The repo has only 3 commits — an initial commit followed by two Figma Make file additions/updates. This is very early stage.

---

## Structured Audit Block

The following is the standardized structured audit output with additional detail discovered during a second-pass review.

```
---BEGIN AUDIT DATA---
REPO: Schoolhousebot
GITHUB ACCOUNT: tweakyourgeek
GITHUB URL: https://github.com/tweakyourgeek/Schoolhousebot
REPO TYPE: 🚀 App Repo
REPO PURPOSE: A Figma Make-exported React SPA for "SchoolhouseBot," an AI literacy educational site targeting experienced business owners. Features a homepage with an interactive quiz ("Question of the Day"), a mascot character ("Sarah Side-Eye"), six entry point cards for content sections, and a "Naughty 9" pattern detail page (9 AI anti-patterns) styled as old-west wanted posters. Currently a static frontend prototype with placeholder copy and stub navigation links throughout.
TOTAL APPS: 1
NON-APP CONTENT: guidelines/Guidelines.md (empty AI coding guidelines template from Figma Make), ATTRIBUTIONS.md (shadcn/ui MIT + Unsplash license attributions), src/assets/ (2 PNG image files for mascot and wanted poster)
NON-APP RECOMMENDATION: keep — guidelines template is useful for future development; attributions file is standard practice; image assets are used by the app
DOC SUITE:
README: ❌ — placeholder, 10 lines, Figma Make boilerplate only ("Run npm i / npm run dev"), no project description or setup docs
CLAUDE.md: ❌
.claudeignore: ❌
.gitignore: ❌ — NO .gitignore exists; node_modules, dist/, .env files, and OS artifacts (.DS_Store) are completely unprotected
LICENSE: ❌ — no LICENSE file; package.json does not declare a license field either
CHANGELOG: ❌
package.json: ✅ — scripts: `build` (vite build), `dev` (vite); name is still default `@figma/my-make-file`; no description field
tsconfig: ❌ — no tsconfig.json despite .tsx files throughout; relies entirely on Vite/esbuild defaults with zero type checking
.env.example: ❌ — N/A, zero env vars used anywhere in codebase (no process.env, no import.meta.env)
Tests: ❌ — no test framework, 0 test files, 0 tests
CI/CD: ❌ — no .github/workflows, no Vercel config, no Netlify config, no deployment automation of any kind
Other docs: ATTRIBUTIONS.md (shadcn/ui MIT + Unsplash license notes), guidelines/Guidelines.md (empty Figma Make template with commented-out examples)
DOC SUITE SCORE: 1/12

APP 1: SchoolhouseBot Homepage
PATH: / (root)
STACK: React 18.3.1 (peer dep), Vite 6.3.5, Tailwind CSS 4.1.12 (@tailwindcss/vite plugin), React Router 7.13.0 (createBrowserRouter), Framer Motion (motion 12.23.24), MUI 7.3.5 (@mui/material + @mui/icons-material), Radix UI (18+ packages: accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, slot, switch, tabs, toggle, toggle-group, tooltip), Recharts 2.15.2, shadcn/ui (class-variance-authority 0.7.1, clsx 2.1.1, tailwind-merge 3.2.0, cmdk 1.1.1), Lucide React 0.487.0, embla-carousel-react 8.6.0, react-slick 0.31.0, react-dnd 16.0.1, react-hook-form 7.55.0, react-resizable-panels 2.1.7, react-responsive-masonry 2.7.1, react-day-picker 8.10.1, input-otp 1.4.2, sonner 2.0.3, vaul 1.1.2, next-themes 0.4.6, date-fns 3.6.0, tw-animate-css 1.3.8, TypeScript (no tsconfig)
VERDICT: 🟢 STATIC
REASON: Pure client-side React SPA with zero server dependencies — no API calls, no database, no auth, no env vars; all content (quiz questions, pattern data, navigation) is hardcoded in component files.
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
- CRITICAL — Missing .gitignore: No .gitignore exists anywhere in the repo. Running `npm install` will add node_modules/ to git tracking. Build output (dist/), environment files (.env), and OS artifacts (.DS_Store, Thumbs.db) are also unprotected. Must be added before any dependency installation.
- Broken Figma asset imports (3 files): Three files use `figma:asset/...` import paths that depend on Figma Make's custom Vite resolver and will fail in a standard `vite build`:
  - src/app/pages/HomePage.tsx:173 — Lexi Roark author photo (inline img src attribute, hash 808b8eb5f5c9... does NOT match either PNG in src/assets/, so this image is missing even with Figma's resolver)
  - src/app/pages/PatternPage.tsx:5 — wanted poster image (ES import, hash 16a57b19... matches src/assets/16a57b1969a781377ec4c8b8faeee150c9eae60d.png)
  - src/app/components/SarahSideEye.tsx:3 — mascot image (ES import, hash 96d683e8... matches src/assets/96d683e8c8339a3a8510df07e7b28181d6348d93.png)
- Unused import: PatternPage.tsx:5 imports `wantedPosterImage` but never references it in JSX — the variable is dead code.
- Placeholder copy throughout: EntryPoints.tsx has literal `[COPY]` as description text for all 6 entry point cards (Explore the Roadmap, Read the Research, Take the Assessment, The Naughty 9, The Glossary, The Frameworks).
- Stub navigation links: Navigation.tsx — 16 of 18 nav items point to `/` (home) rather than actual pages. Only "Welcome" (/) and "The Shiny Chaser" (/pattern/the-shiny-chaser) have real destinations. Footer links (About, Contact, Privacy) and "More about this project" CTA in HomePage.tsx are all `href="#"` stubs.
- Package name mismatch: package.json name is `@figma/my-make-file` — the Figma Make default, never renamed to match the project.
- Massive unused dependency footprint: ~30+ packages declared in dependencies are not imported anywhere in the app source. The app actually uses only: react, react-dom, react-router, motion (framer-motion), lucide-react, and tailwindcss. Unused deps include: all 18+ Radix UI packages, @mui/material, @mui/icons-material, @emotion/react, @emotion/styled, recharts, react-dnd, react-dnd-html5-backend, embla-carousel-react, react-slick, react-hook-form, react-resizable-panels, react-responsive-masonry, react-day-picker, react-popper, @popperjs/core, input-otp, cmdk, vaul, sonner, date-fns, class-variance-authority, clsx, tailwind-merge, next-themes.
- next-themes dependency: A Next.js-specific theming package (next-themes 0.4.6) is included in a Vite/React project — it requires Next.js context providers and will not function.
- No lockfile: No package-lock.json, pnpm-lock.yaml, or yarn.lock — dependencies have never been installed in this repo.
- React Router hosting caveat: Uses `createBrowserRouter` (history-based routing) in src/app/routes.ts. Pattern pages like `/pattern/the-shiny-chaser` will 404 on page refresh unless the hosting platform has a rewrite/redirect rule to serve index.html for all routes.
- Buy Me a Coffee link: Footer in HomePage.tsx:245 points to generic `https://buymeacoffee.com` rather than a specific creator profile page.
- Google Fonts external dependency: fonts.css loads Open Sans and Caveat from Google Fonts CDN via @import url() — this is a runtime external dependency and will fail offline.
- No favicon or meta tags: index.html has no favicon, no og:tags, no description meta tag — bare minimum HTML shell.
---END AUDIT DATA---
```
