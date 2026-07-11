# 01 — Fix header section nav links off-homepage

**What to build:** The top navigation section links — About, Experience, Projects, Contact — must navigate to the corresponding section on the homepage from *any* page, not only when already on the homepage. Today they use fragment-only hrefs (`#about`, etc.), which resolve relative to the current path (e.g. `/blog#about`) and silently fail on non-home pages. Only the Blog link works because it points at a real route.

**Blocked by:** None — can start immediately

**Status:** resolved

- [ ] Section links use absolute homepage fragments (`/#about`, `/#experience`, `/#projects`, `/#contact`)
- [ ] From `/blog` (and any other page), clicking each section link navigates to the homepage and scrolls to that section
- [ ] `npm run check` passes with no new errors
