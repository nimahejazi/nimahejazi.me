# 02 — Homepage resume (single-page) + dark mode

**What to build:** The single-page homepage (Hero → About → Experience → Education → Projects → Contact) rendered entirely from a typed content data module, so the owner can update bio/experience/projects without editing components. Includes an "available for work" signal with location, a placeholder portrait in the hero card, LinkedIn + GitHub links, an email mailto, and no CV download button. A light/dark toggle is system-aware on first paint, persists the choice via localStorage, and applies the `dark` class on `<html>` without a flash.

**Blocked by:** 01 — Scaffold Astro + Tailwind v4

**Status:** ready-for-agent

- [ ] Typed content data module holds identity, availability, experience, education, projects, contact, socials
- [ ] All six resume sections render from that data on the homepage
- [ ] Hero shows name, role, pitch, availability signal, and placeholder portrait
- [ ] Contact section shows email (mailto) and LinkedIn + GitHub only; no CV button
- [ ] Dark-mode toggle: system-aware first paint, persisted choice, no flash
- [ ] Visual style matches the template's cream/brand palette and card components
