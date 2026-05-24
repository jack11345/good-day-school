---
name: goodday-design
description: Use this skill to generate well-branded interfaces and assets for Good Day School — a 25-year-old Pakistani primary school in Rawalpindi. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the LMS web portal, parent mobile app, and marketing website.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** Conservative, established, 25-year Pakistani institution. Not a startup.

**Colors:** Maroon `#6B1F1F`, Deep maroon `#4A1313`, Gold `#C9A961`, Cream `#FAF6EE`, Ink `#2A1A1A`

**Fonts:** Cormorant Garamond (display/headings) · Lora (body) · DM Sans (UI/labels/tables) · Noto Nastaliq Urdu (all Urdu text)

**Bilingual:** Every UI string exists in English and Urdu. RTL when Urdu active. Urdu line-height 2.2.

**Products:**
- Marketing website (multi-page SPA)
- LMS web portal (Admin / Teacher / Accountant — desktop-first, 1280px)
- Parent mobile app (PWA, 360px, mobile-first)
- Driver app (mobile-only, single screen, large targets)
- AI Learning Companion (sandboxed, students Grade 1–5)

**Key files:**
- `colors_and_type.css` — all CSS custom properties and semantic classes
- `assets/logo-emblem.svg` — full circular emblem
- `assets/logo-wordmark.svg` — emblem + wordmark
- `assets/logo-g-mark.svg` — G-mark (below 24px only)
- `ui_kits/lms_web/index.html` — LMS Teacher/Admin portal prototype
- `ui_kits/parent_app/index.html` — Parent mobile app prototype

**Do not:**
- Use emoji anywhere
- Use gradient backgrounds
- Invent new colors outside the palette
- Use fonts other than the four defined families
- Use any icon font (inline SVG only, stroke-width 1.5–2, fill: none)
- Add cross-school analytics or multi-tenant features
- Let any child data leave the school's servers
