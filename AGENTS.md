# AGENTS.md

Astro personal website (static, deployed to Vercel). Stack: Astro 5, MDX, Tailwind CSS v4 (CSS-first via `@tailwindcss/vite`), KaTeX for math, sitemap.

## Commands

- `npm run dev` — local dev server (astro dev)
- `npm run build` — production build to `dist/` (also the Vercel build command)
- `npm run preview` — preview the built site
- `npm run check` — **typecheck/lint** via `astro check` (uses `@astrojs/check`). This is the only type/lint gate; there is no separate `tsc`, ESLint, Prettier, or Biome config.
- `npm test` — runs `vitest run`, but the repo currently has **zero test files**. Don't expect tests to exercise changes; add tests under a `vitest` config if needed.

## Content (blog & projects)

- Posts are **MDX files** in `src/content/blog/` and `src/content/projects/`, not `.astro` pages. New posts = new files there.
- Each file is validated by a Zod schema in `src/content/config.ts` (`blog` and `projects` collections, glob loader). Required frontmatter: blog needs `title`/`date`/`excerpt`; projects needs `title`. Keep schema and files in sync.
- Math in MDX works via `remark-math` + `rehype-katex` (configured in `astro.config.mjs`); KaTeX assets load automatically. Code blocks use Shiki with `github-light`/`github-dark` themes and line wrapping.
- Pages under `src/pages/` (index, archive, blog, projects) render the collections; route params like `[...slug].astro` pull entries via the content loader.

## Conventions & gotchas

- **Tailwind v4 is CSS-first**: no `tailwind.config.js`. Theme tokens live in `src/styles/global.css` via `@import "tailwindcss"` and `@theme`/`@custom-variant`. Dark mode is the `.dark` class on `<html>`.
- `package.json` pins `vite` to `6.4.3` via `overrides` (Astro's bundled Vite + Tailwind v4 types lag). Keep this pin unless upgrading Astro/Tailwind together.
- `astro.config.mjs` sets `site: "https://nimahejazi.me"` — used by sitemap; update if the domain changes.
- `npm run check` generates `.astro/types.d.ts` (included in `tsconfig.json`). Don't hand-edit; it rebuilds on `check`/`build`.
- Analytics are off unless `PUBLIC_ANALYTICS_SRC` is set. Copy `.env.example` to `.env` and fill in Plausible/Umami values to enable; leave blank to disable. `.env` is gitignored.

## Deploy

- Vercel, build `npm run build` → `dist/`. Only the **`main`** branch auto-deploys (`vercel.json` `deploymentEnabled.main`). Other branches do not deploy automatically.

## Agent skills

This repo is wired for the mattpocock-style engineering skills (issue tracker, triage, domain docs).

- **Issues/specs** live as markdown under `.scratch/<feature>/` (one file per ticket). See `docs/agents/issue-tracker.md`.
- **Triage roles**: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.
- **Domain docs**: single-context layout — root `CONTEXT.md` + `docs/adr/`. Both are currently absent; that is expected (created lazily). See `docs/agents/domain.md`.
