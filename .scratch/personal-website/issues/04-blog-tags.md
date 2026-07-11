# 04 — Blog tags

**What to build:** Readers can browse posts by topic. A tag index page lists all tags, and each tag has a filtered page showing only the posts carrying that tag.

**Blocked by:** 03 — Blog: MDX collection + listing + post render

**Status:** resolved

- [x] Tag index page lists every tag with post counts
- [x] Each tag has a filtered page listing only its posts
- [x] Tag links are present on post pages and the blog index

## Answer

Added `/blog/tags/index.astro` (all tags with counts, sorted) and `/blog/tags/[tag].astro` (filtered posts per tag, newest first) via `getStaticPaths`. Tag chips on `/blog` and post pages now link to `/blog/tags/[tag]/`. Build emits 6 pages; `astro check` clean.
