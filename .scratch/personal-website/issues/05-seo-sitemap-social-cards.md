# 05 — SEO: sitemap + social cards

**What to build:** The site is discoverable and shares well. An XML sitemap is auto-generated, and every page (homepage + posts) emits Open Graph and Twitter card meta tags, including a share-card image strategy for posts.

**Blocked by:** 02 — Homepage resume (single-page) + dark mode, 03 — Blog: MDX collection + listing + post render

**Status:** resolved

- [x] Sitemap generated and including home + all blog routes
- [x] Homepage emits OG + Twitter card tags
- [x] Each blog post emits OG + Twitter card tags with title/excerpt/image
- [x] Share-card image handling works for posts

## Answer

Added `@astrojs/sitemap` (emits `sitemap-index.xml` + `sitemap-0.xml` with all 6 absolute URLs). `BaseLayout` now emits canonical, Open Graph (og:type/title/description/url/image/site_name) and Twitter (summary_large_image + title/description/image) meta, with `og:image` defaulting to `/og-image.svg` (added to `public/`). Post pages pass `ogType="article"`. `astro check` clean.
