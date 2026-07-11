# 03 — Blog: MDX collection + listing + post render

**What to build:** A blog where technical posts are authored as MDX and listed at `/blog` with title, date, and excerpt, and read on individual post pages. Math notation renders via KaTeX and code blocks are syntax-highlighted via Shiki. Frontmatter carries `title`, `date`, `excerpt`, and `tags`.

**Blocked by:** 01 — Scaffold Astro + Tailwind v4

**Status:** resolved

- [x] Blog posts authored as MDX in the content collection
- [x] `/blog` index lists posts with title, date, excerpt
- [x] Individual post pages render MDX content
- [x] KaTeX renders inline and block math correctly
- [x] Shiki highlights code blocks with a readable theme
- [x] Frontmatter (title/date/excerpt/tags) drives listing and post pages

## Answer

Integrated `@astrojs/mdx`, `remark-math` + `rehype-katex`, and Shiki (github-light/github-dark dual theme) in `astro.config.mjs`. Blog posts are MDX in `src/content/blog`, typed via `src/content/config.ts` (glob loader; frontmatter title/date/excerpt/tags). `/blog` index lists posts (title/date/excerpt/tags, newest first); `/blog/[...slug]` renders each post and imports `katex/dist/katex.min.css`. Added a Blog nav link to the header. Verified in `dist`: KaTeX classes + inline/block math present, Shiki `astro-code` + `language-ts` present. Build + `astro check` pass.
