# 01 — Scaffold Astro + Tailwind v4

**What to build:** A runnable Astro project with Tailwind CSS v4 wired in through the official Astro integration (build-time compilation, not the template's CDN script). Inter + JetBrains Mono are loaded from the bunny.net GDPR-friendly CDN. The template's cream/brand/timeline-pastel theme tokens are ported into the Tailwind v4 config. `astro dev` and `astro build` both succeed.

**Blocked by:** None — can start immediately.

**Status:** resolved

- [x] Astro project initialized with a base layout component
- [x] Tailwind v4 active via the Astro integration; build-time, no CDN script
- [x] Cream/brand/pastel theme tokens available as Tailwind colors
- [x] Inter + JetBrains Mono loaded from bunny.net and applied as default/mono fonts
- [x] `astro dev` and `astro build` complete without errors

## Answer

Scaffolded with `astro@5.18`, `@tailwindcss/vite@4.1` (build-time, no CDN), `@astrojs/check`, `vitest`. Theme tokens (cream/brand/pastel) ported into `src/styles/global.css` via `@theme`; class-based dark variant defined. `BaseLayout.astro` loads Inter + JetBrains Mono from bunny.net and includes a no-flash theme script. Vite pinned to 6.4.3 via npm `overrides` to dedupe against Astro's bundled Vite and keep `astro check` clean. Build + typecheck pass.
