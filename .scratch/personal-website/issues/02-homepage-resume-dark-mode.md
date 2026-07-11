# 02 — Homepage resume (single-page) + dark mode

**What to build:** The single-page homepage (Hero → About → Experience → Education → Projects → Contact) rendered entirely from a typed content data module, so the owner can update bio/experience/projects without editing components. Includes an "available for work" signal with location, a placeholder portrait in the hero card, LinkedIn + GitHub links, an email mailto, and no CV download button. A light/dark toggle is system-aware on first paint, persists the choice via localStorage, and applies the `dark` class on `<html>` without a flash.

**Blocked by:** 01 — Scaffold Astro + Tailwind v4

**Status:** resolved

- [x] Typed content data module holds identity, availability, experience, education, projects, contact, socials
- [x] All six resume sections render from that data on the homepage
- [x] Hero shows name, role, pitch, availability signal, and placeholder portrait
- [x] Contact section shows email (mailto) and LinkedIn + GitHub only; no CV button
- [x] Dark-mode toggle: system-aware first paint, persisted choice, no flash
- [x] Visual style matches the template's cream/brand palette and card components

## Answer

Built `src/data/profile.ts` (typed `Profile` + sub-interfaces) as the single content source. Added section components (Header, Hero, About, Experience, Education, Projects, Contact, Footer) + `DarkModeToggle.astro` (toggles `dark` on `<html>`, persists to localStorage; no-flash script already in BaseLayout). LinkedIn + GitHub only, mailto email, no CV button. Placeholder portrait at `/portrait-placeholder.svg`. Dynamic Tailwind classes in skill pills replaced with a static tint map so v4's scanner picks them up. Build + `astro check` pass; all six sections present in `dist/index.html`.
