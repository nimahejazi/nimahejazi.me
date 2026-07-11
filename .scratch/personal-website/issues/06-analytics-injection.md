# 06 — Analytics injection

**What to build:** The owner can see visitor counts without cookie-based tracking. A privacy-friendly, cookie-free analytics provider (Plausible or Umami) is injected site-wide via a configurable environment variable, so no hard-coded endpoint sits in the source.

**Blocked by:** 01 — Scaffold Astro + Tailwind v4

**Status:** ready-for-agent

- [ ] Analytics script injected on all pages
- [ ] Provider endpoint/key sourced from an environment variable (no secret in source)
- [ ] Absent/invalid env value degrades gracefully (no broken script)
