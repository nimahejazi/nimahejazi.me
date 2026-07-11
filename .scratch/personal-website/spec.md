Status: ready-for-agent

# Spec: Personal website (hiring + personal branding) with MDX blog

## Problem Statement

I need a personal website that promotes my hiring and personal branding. It must present me as a candidate (resume/portfolio) and host a blog where I can write technical posts that include math notation and code. Today there is no site — only a folder with a static Tailwind resume template. I want a maintainable, fast, professional presence at my own domain that recruiters and readers can find and share.

## Solution

Build a static site with **Astro** + **Tailwind CSS v4** (via the Astro integration, build-time — not the template's CDN script), deployed to **Vercel** on the custom domain **nimahejazi.me**. The homepage is a single-page resume/portfolio adapted from the provided template's visual style (cream/brand palette, component look). Blog posts live at `/blog` as **MDX** files, rendered with **KaTeX** for math and **Shiki** for code. Content (bio, experience, projects, contact) is driven by a typed data file so it is easy to update. The site supports light/dark mode, basic SEO (sitemap + per-post Open Graph/Twitter cards), tag-based blog listing, and privacy-friendly analytics. No RSS, no search, no comments, no downloadable CV PDF.

## User Stories

1. As a visitor, I want a fast-loading homepage, so that I form a good first impression without waiting.
2. As a recruiter, I want to see an "available for work" signal and location, so that I know the candidate is open and where.
3. As a recruiter, I want a clear hero with name, role, and a short pitch, so that I quickly understand who this person is.
4. As a recruiter, I want a "Get in touch" CTA, so that I can contact the candidate immediately.
5. As a recruiter, I want an About section summarizing skills and focus, so that I can gauge fit.
6. As a recruiter, I want an Experience timeline, so that I can assess career history.
7. As a recruiter, I want an Education section, so that I can verify qualifications.
8. As a recruiter, I want a Projects section with links, so that I can evaluate real work.
9. As a recruiter, I want a Contact section with email and social links, so that I can reach out through my preferred channel.
10. As a recruiter, I want LinkedIn and GitHub links, so that I can review the professional and technical profile.
11. As a reader, I want a blog index at `/blog`, so that I can browse all posts.
12. As a reader, I want posts listed with title, date, and excerpt, so that I can decide what to read.
13. As a reader, I want to filter posts by tag, so that I can find posts on a topic.
14. As a reader, I want to read math notation rendered correctly, so that technical content is understandable.
15. As a reader, I want syntax-highlighted code blocks, so that code is readable.
16. As a reader, I want MDX so future interactive components can be embedded, so that the blog can grow.
17. As a reader, I want per-post social share cards (OG/Twitter), so that shared links look good.
18. As a visitor, I want to toggle light/dark mode, so that I can read in my preferred theme.
19. As a visitor, I want the site to respect my system theme preference on first load, so that it matches my OS setting.
20. As a visitor, I want my theme choice remembered, so that it persists across visits.
21. As the site owner, I want content stored in a typed data file, so that I can update bio/experience/projects without touching components.
22. As the site owner, I want a placeholder portrait wired into the hero, so that I can swap in a real photo later.
23. As the site owner, I want the homepage itself to serve as the resume, so that there is no separate CV PDF to maintain.
24. As the site owner, I want privacy-friendly analytics, so that I can see visitor counts without tracking cookies.
25. As the site owner, I want a sitemap auto-generated, so that search engines can index the site.
26. As the site owner, I want the site deployed automatically on push via Vercel, so that updates are effortless.
27. As the site owner, I want the site served at nimahejazi.me, so that it uses my own domain.
28. As the site owner, I want the visual style to match the provided template (cream/brand palette, card components), so that branding is consistent.
29. As a visitor, I want Inter for body text and JetBrains Mono for code/labels, so that the typography is clean and technical.
30. As the site owner, I want fonts loaded via a GDPR-friendly CDN (bunny.net), so that I avoid privacy/compliance issues.

## Implementation Decisions

- **Framework**: Astro (static output). No SSR needed; everything prerenders.
- **Styling**: Tailwind CSS v4 through the official Astro integration (Vite plugin), build-time compilation. Do NOT use the Tailwind Play CDN script from the template. Reimplement the template's `@theme` tokens (cream, brand, timeline pastels) in the Tailwind v4 config so the cream/brand palette is preserved.
- **Template adaptation**: The provided `resources/2026-05-29-tailwindcss-template-resume-modern/index.html` is a single-page resume using Tailwind v4 + Alpine.js. It is a visual reference only. Alpine.js is removed; the dark-mode toggle is reimplemented with a small Astro `<script>` + `localStorage` (system-aware on first load).
- **Site structure**: Single-page homepage (Hero → About → Experience → Education → Projects → Contact) plus a separate `/blog` route with MDX content. No multi-page nav for resume sections (anchor scrolling within the home page instead).
- **Blog authoring**: MDX (`*.mdx`) in the Astro content layer. Math via `remark-math` + `rehype-katex` (KaTeX). Code highlighting via Shiki (Astro built-in). Frontmatter carries `title`, `date`, `excerpt`, `tags`.
- **Blog features**: post listing with title/date/excerpt; tag index and per-tag filtered pages; no RSS, no search, no comments.
- **Content model**: A single typed data module (e.g. a typed profile object) holds identity, availability, experience, education, projects, contact, and social links. Homepage components render from this data. Placeholders used where real values are not yet known (e.g. portrait image path, "available for work · <location>").
- **Dark mode**: class-based (`dark` on `<html>`), system preference detection, persisted choice, no flash (inline script in `<head>`).
- **SEO**: Astro `sitemap` integration; per-page and per-post meta including Open Graph and Twitter card tags; a share-card image strategy (static or generated) for posts.
- **Analytics**: privacy-friendly, cookie-free provider (Plausible or Umami) injected as a lightweight script; configurable via an env var.
- **Fonts**: Inter + JetBrains Mono loaded from bunny.net.
- **Social links**: LinkedIn and GitHub only (no X/Facebook). Email via `mailto`.
- **CV**: no downloadable PDF; the homepage is the resume. Remove the template's "Download CV" button.
- **Hosting/deploy**: Vercel with the `nimahejazi.me` domain (DNS/verification configured later). Requires a GitHub repository for CI — initialize git and create the repo as part of setup.
- **Domain docs**: single-context (`CONTEXT.md` + `docs/adr/`) per the repo's domain layout.

## Testing Decisions

- Tests should assert external behavior (rendered HTML, routes, content correctness), not implementation internals.
- Prefer the highest/outermost seam: end-to-end checks that the built site contains expected sections, blog routes resolve, math/code render, dark-mode class toggles, and SEO tags are present.
- Modules/seams to test (prefer existing Astro seams — page routes and content collection queries; introduce new test seams only at the page/integration level, ideally a single one):
  - Homepage renders all resume sections from the typed data (name, availability, experience, education, projects, contact, socials).
  - `/blog` lists posts with title/date/excerpt; per-tag pages filter correctly.
  - A sample MDX post renders KaTeX math and Shiki-highlighted code.
  - Dark-mode toggle sets/persists the `dark` class; system preference is honored on first paint.
  - Sitemap and OG/Twitter meta tags are emitted for home and posts.
- Prior art: none yet in this empty repo; establish a minimal test setup (Astro's build + a lightweight HTML assertion step) and add the first examples.

## Out of Scope

- RSS feed.
- On-site search and reader comments (e.g. Giscus).
- Downloadable CV PDF.
- Headless CMS or any backend/dynamic data.
- Multi-page resume navigation (sections stay on the single homepage).
- X/Twitter and Facebook links.
- Real content/personal data entry beyond placeholders (provided later by the owner).
- Actual DNS configuration at the registrar (done manually later).

## Further Notes

- The template references a portrait image (`assets/...jpg`); use a placeholder and keep the hero card layout.
- The `resources/` folder is a reference asset, not part of the built site; keep it out of the deploy.
- This spec was synthesized from a `/grilling` session; all listed decisions were confirmed with the owner during that session.
