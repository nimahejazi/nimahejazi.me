# 02 — Fix blog card nested anchors (tags + stray link)

**What to build:** On the Blog list page, each post card is currently a single `<a>` that *wraps* nested `<a>` tag links — invalid HTML. The browser's recovery closes the outer anchor before the tags, producing a broken/empty link (the white "circle") and garbling the tag anchors so they no longer render as pills. After this fix, the whole card stays clickable (stretched-link overlay) while the tag pills render as proper pills and remain individually clickable above the overlay. No nesting remains.

**Blocked by:** None — can start immediately

**Status:** resolved

- [ ] Card root is a `<div>` carrying the border/hover styling (no anchor wraps the card body)
- [ ] Title link uses a stretched-link overlay (`after:absolute after:inset-0`) so the whole card is clickable
- [ ] Tag container sits above the overlay (`relative z-10`) so tag pills are individually clickable
- [ ] No nested `<a>` elements remain; tag pills render as rounded pills, not circles
- [ ] `npm run check` passes with no new errors
