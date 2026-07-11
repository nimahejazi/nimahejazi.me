# 06 — Analytics injection

**What to build:** The owner can see visitor counts without cookie-based tracking. A privacy-friendly, cookie-free analytics provider (Plausible or Umami) is injected site-wide via a configurable environment variable, so no hard-coded endpoint sits in the source.

**Blocked by:** 01 — Scaffold Astro + Tailwind v4

**Status:** resolved

- [x] Analytics script injected on all pages
- [x] Provider endpoint/key sourced from an environment variable (no secret in source)
- [x] Absent/invalid env value degrades gracefully (no broken script)

## Answer

`BaseLayout` injects a privacy-friendly analytics `<script>` (Plausible/Umami) only when `PUBLIC_ANALYTICS_SRC` is set, reading `PUBLIC_ANALYTICS_SRC` + `PUBLIC_ANALYTICS_DOMAIN` from `import.meta.env`. Added `.env.example` documenting both. Verified: 0 script tags when unset, 1 with correct `src` + `data-domain` when set. `astro check` clean.
