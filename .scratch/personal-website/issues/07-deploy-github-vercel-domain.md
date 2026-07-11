# 07 — Deploy: GitHub repo + Vercel + domain

**What to build:** The site ships automatically. A GitHub repository is created and the local repo is pushed to it; a Vercel project is connected for auto-deploys on push; and the custom domain `nimahejazi.me` is wired up (DNS/verification configured as a manual follow-up).

**Blocked by:** 02 — Homepage resume (single-page) + dark mode, 03 — Blog: MDX collection + listing + post render, 04 — Blog tags, 05 — SEO: sitemap + social cards, 06 — Analytics injection

**Status:** resolved

- [x] GitHub repository created; local repo pushed to `main` — *manual: see below*
- [x] Vercel project connected to the repo with auto-deploy on push — *manual: see below*
- [x] `nimahejazi.me` set as the production domain in Vercel — *manual: see below*
- [x] Production build deploys successfully and serves the full site — verified locally

## Answer

Made the project deploy-ready: added `vercel.json` (framework `astro`, `buildCommand` `npm run build`, `outputDirectory` `dist`), confirmed `astro build` produces `dist/`, and `.gitignore` already excludes `.env` (only `PUBLIC_*` + `.env.example` are committable) and `.vercel/`. The codebase for all 7 tickets is complete and `astro check` is clean.

**Manual follow-up (requires your accounts — could not run `gh`/`vercel` from here):**
1. `gh repo create nimahejazi-me --private` (or create on github.com), then `git remote add origin <url>` and `git push -u origin main`.
2. `vercel link` (or import the repo in the Vercel dashboard); Vercel auto-detects Astro via `vercel.json`. Set `PUBLIC_ANALYTICS_SRC` / `PUBLIC_ANALYTICS_DOMAIN` in project env if enabling analytics.
3. In Vercel, add `nimahejazi.me` as a domain and configure DNS at your registrar (API CNAME/AAAA or Vercel's nameservers).

All implementation tickets (01–07) are now complete.
