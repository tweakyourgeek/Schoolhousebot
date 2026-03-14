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
