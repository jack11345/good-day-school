# Good Day School — Design System

## Overview

**Good Day School** is a 25-year-old Pakistani primary school in Rawalpindi, serving children from KG through Grade 5 (ages 4–10), with daycare from 6 months. Founded in 2001 in a single rented room, the school now operates a farmhouse campus on the edge of Rawalpindi with mountain views, gardens, and open fields.

The school is **conservative, established, and deeply community-oriented** — not a startup, not a tech-first institution. It runs on trust built over 25 years. Parents have enrolled their own children because they themselves attended. It is small by design and will stay small.

### Products / Surfaces

| Surface | Audience | Notes |
|---|---|---|
| **Marketing Website** | Prospective parents | Multi-page SPA in HTML/CSS/JS; bilingual EN + UR |
| **LMS Web App** | Admin, Teachers, Accountant, Specialists | Desktop-first, full-featured |
| **Parent Mobile App** | Parents (360px mobile-first) | PWA, installable, offline capable |
| **Driver Mobile App** | Bus drivers | Single-screen, large tap targets |
| **AI Learning Companion** | Students Grade 1–5 | Sandboxed, curriculum-locked |

### Programs Offered
- **Daycare** (6 months – 3 years)
- **Kindergarten** (KG1 & KG2, ages 4–5)
- **Primary School** (Grades 1–5, ages 6–10)
- **Learning Rehabilitation** (all ages, individual support)
- **Mother Training** (8–12 week cohorts)
- **AI Learning Companion** (internal, Grades 1–5)

### Sources
- `uploads/good-day-school (1).html` — Full production marketing website (HTML/CSS/JS, 1634 lines)
- `uploads/ChatGPT Image Apr 27, 2026, 01_40_06 AM.png` — Brand asset sheet: circular logo (400×400) + LinkedIn banner (1584×396)
- Tech spec document (pasted inline) — Full LMS build spec, 29 sections

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Conservative, warm, earned authority.** 25-year-old institution — the writing does not hype, it states.
- **First-person plural ("we"), second-person to parents ("you," "your child").** Never third-person distant.
- **No marketing fluff.** Sentences are declarative and specific: "Seven of them have been with us a decade or more." Not "our passionate team of dedicated educators."
- **Short sentences.** Often fragments used for rhythm: "We are still small. We will stay small."
- **Bilingual in philosophy, not just translation.** Both English and Urdu are primary. The Urdu is literary Nastaliq-register, not colloquial.
- **No emoji anywhere.** The brand does not use emoji.
- **Academic casing.** Title case for headings sparingly; sentence case preferred.

### Specific examples from source
- Hero: *"Where small minds grow into great hearts."*
- About: *"A small school. A long story. Twenty-five years and counting."*
- Philosophy: *"Conventional and unconventional, in the same classroom."*
- CTA: *"Come walk the campus with us."* (invitation, not demand)
- Testimonial: *"They did not push her, they did not shame her — they slowed down with her."*

### Copy Rules
- Stats presented bare: "25 years", "12 teachers", "6 programs" — no adjectives
- Islamic context is present but never exclusionary; used naturally
- Urdu eyebrows/subheads mirror the English; they are not direct translations — they carry their own register
- Calls to action are invitations: "Schedule a campus visit →", "Book a campus visit →", "Read the full curriculum →"
- Arrow glyphs `→` (LTR) and `←` (RTL) used in CTAs

---

## VISUAL FOUNDATIONS

### Color System
| Token | Value | Usage |
|---|---|---|
| `--maroon` | `#6B1F1F` | Primary brand, CTA buttons, accents |
| `--maroon-deep` | `#4A1313` | Headers, dark sections, footer bg |
| `--maroon-soft` | `#8B3434` | Hover state on maroon |
| `--gold` | `#C9A961` | Accent, badges, decorative lines, active states |
| `--gold-soft` | `#E8D9B5` | Muted gold, text on dark bg, icon backgrounds |
| `--cream` | `#FAF6EE` | Primary background |
| `--cream-deep` | `#F2EBDB` | Alternate section background |
| `--ink` | `#2A1A1A` | Body text |
| `--ink-soft` | `#5A4A4A` | Secondary text, labels |
| `--line` | `#D9CDB5` | Dividers, borders |
| `--white` | `#FFFFFF` | Card backgrounds |
| `--sage` | `#3F5A4A` | Book in logo, accent green (rare) |

**Color vibe:** Warm, aged parchment. Maroon + gold is the institutional palette — regal, traditional, Pakistani. Never cool blues or purples.

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / headings | Cormorant Garamond | 400/500/600 | Serif, literary, `clamp()` sizes |
| Body copy | Lora | 400/500/600 | Readable serif |
| UI labels / tables / data | DM Sans | 400/500/700 | Clean, neutral |
| Urdu (all Urdu text) | Noto Nastaliq Urdu | 400/500/700 | RTL, line-height 2.2 |

**Type scale:** `clamp()` responsive — hero h1: `clamp(40px, 5.5vw, 68px)`, section h2: `clamp(32px, 4vw, 48px)`, h1 on pages: `clamp(36px, 5vw, 56px)`

### Spacing & Grid
- **4px base grid** throughout
- `max-width: 1240px` container, `padding: 0 28px`
- Section padding: `90px 0`
- Card gap: `24px`
- Input border-radius: `6px`
- Card border-radius: `10px`
- Pill border-radius: `999px`
- Button border-radius: `6px`

### Backgrounds & Texture
- **No gradients on backgrounds** (exception: a single subtle radial gradient `gold-soft → transparent` behind hero, very low opacity `.4`)
- Sections alternate: `cream` → `cream-deep` → `maroon-deep` (dark)
- The `day-strip` dark section has a `3px` gold–maroon–gold linear gradient line at the top as a decorative accent
- **No background images or textures** — clean, flat, warm-toned

### Cards
- White background (`#FFFFFF`), `border-radius: 10px`, `border: 1px solid var(--line)`, no box-shadow by default
- **Hover:** `translateY(-6px)`, `box-shadow: 0 30px 50px -25px rgba(74,19,19,.3)`, `border-color: var(--maroon-soft)`
- Images within cards: `border-radius` on container, `object-fit: cover`, `transform: scale(1.06)` on hover
- No colored left-border accent cards in the main grid (only philosophy cards use a `border-left: 4px solid var(--maroon)` — a deliberate exception)

### Animations
- **Subtle, purposeful.** No splash animations or decorative motion.
- `fadeUp` on page transitions: `opacity 0→1, translateY(14px→0), .55s cubic-bezier(.2,.7,.3,1)`
- `floaty` badge animation: `translateY(0→-8px)`, `4s ease-in-out infinite`
- `pulse` on topbar dot: `opacity + scale`, `2.4s ease-in-out infinite`
- `spin` on feature icon ring: `30s linear infinite` (very slow, subtle)
- `wa-pulse` WhatsApp button glow: `2s ease-in-out infinite`
- Hover transitions: `.2s–.35s` cubic-bezier

### Hover & Press States
- Buttons: `translateY(-1px)`, background darkens (maroon → maroon-deep)
- Nav items: `color: var(--maroon)`, `background: var(--cream-deep)`
- Cards: `translateY(-6px)` with shadow
- Images inside cards: `scale(1.06)` with `.8s` transition
- Links: `color` transition only

### Borders & Shadows
- Dividers: `1px solid var(--line)` (warm beige)
- Dark section internal dividers: `1px solid rgba(201,169,97,.2)` (gold at 20%)
- Photo borders: `6px–8px solid var(--cream)` (framing effect)
- Gold-bordered photos: `6px solid var(--gold)` (key feature photos)
- Decorative ring on brand mark: `1px solid var(--gold)`, inset `-5px`, `opacity .5`
- Dashed feature icon ring: `1px dashed var(--gold)`, spinning slowly

### Imagery
- **Warm, Pakistani, realistic** — natural school/family photography
- Unsplash sourced for mockup (real photos to replace)
- Scenes: children reading, classrooms, gardens, mothers with children, mountain campus
- **Color vibe:** warm-toned, golden hour, natural light — no cold or blue-tinted photos
- Photo collage technique: overlapping `position:absolute` cards with `border` framing + slight rotation on floating card

### RTL (Urdu Mode)
- `dir="rtl"` on `body` when `lang-ur` class active
- All fonts switch to `Noto Nastaliq Urdu`; arrows flip direction
- `line-height: 2.2` in Urdu mode (Nastaliq requires extra vertical space)
- Numbers formatted as Eastern Arabic-Indic in parent-facing views

### Layout Rules
- Header is `position: sticky, top: 0, z-index: 100` with `backdrop-filter: blur(8px)`
- WhatsApp float button: `position: fixed, bottom: 24px, right: 24px, z-index: 200`
- Grids collapse to 2-col at 920px, 1-col at 560px
- Images always have `alt` text

---

## VISUAL FOUNDATIONS (LMS / App)

For the LMS portals (not the public website), the same token system applies with these additions:
- Sidebar width: fixed, `maroon-deep` background, `gold` active indicators
- Data tables: `DM Sans`, `11px` all-caps labels with `letter-spacing: .14em`
- Status badges: pill shape (`999px`), various semantic colors (see colors_and_type.css)
- Forms: `cream` background inputs, `6px` radius, `maroon` focus border

---

## ICONOGRAPHY

### Approach
- **No icon font used** in the public website — icons are **inline SVG** only
- Stroke-based icons: `stroke-width: 1.5–2`, `fill: none`, `stroke: var(--maroon-deep)` or `var(--cream)`
- Icon sizes: `18px` (contact info), `22px` (menu toggle), `28px` (feature icons)
- Icons sit inside circular containers: gold-soft bg, maroon-deep stroke
- **No emoji used anywhere**

### Icon Containers
- Feature icons: `64px` circle, `background: var(--gold-soft)`, with spinning dashed gold ring
- Contact icons: `40px` circle, `background: var(--gold)`, `color: var(--maroon-deep)`
- Navigation: text-only, no icons

### Logo Usage
See `assets/logo.svg` and `assets/logo-badge.svg`

- **Full emblem:** Circular badge — three children figures (gold–maroon–gold holding hands), five-pointed gold star above, two crescent arcs of olive leaves, open green book at feet, thin maroon ring on cream interior. Used in navigation, login, sidebars, reports, PDFs, emails.
- **Wordmark:** Emblem + "GOOD DAY" in Cormorant Garamond 600 + "SCHOOL" in spaced caps with thin gold underline. Used on letterheads, invoices, printed report cards.
- **G-mark:** Capital G in Cormorant Garamond inside circular badge with leaves + star. Used ONLY below 24px (favicon, mobile icon).
- Brand mark in header: `54×54px` maroon circle with gold "G", decorative gold ring

---

## FILE INDEX

```
/
├── README.md                          ← This file
├── SKILL.md                           ← Agent skill descriptor
├── colors_and_type.css                ← All CSS custom properties
├── assets/
│   ├── logo-emblem.svg                ← Full circular emblem
│   ├── logo-wordmark.svg              ← Emblem + wordmark
│   ├── logo-g-mark.svg                ← G-mark (small sizes only)
│   └── brand-banner.png               ← LinkedIn banner reference
├── preview/
│   ├── colors-brand.html              ← Brand color swatches
│   ├── colors-semantic.html           ← Semantic color tokens
│   ├── type-display.html              ← Display type specimens
│   ├── type-body.html                 ← Body & UI type specimens
│   ├── type-urdu.html                 ← Urdu typography
│   ├── spacing-tokens.html            ← Spacing, radius, shadow
│   ├── components-buttons.html        ← Button variants
│   ├── components-cards.html          ← Card components
│   ├── components-forms.html          ← Form inputs
│   ├── components-badges.html         ← Badges, pills, status
│   ├── components-nav.html            ← Navigation components
│   └── brand-logo.html                ← Logo variants
└── ui_kits/
    ├── lms_web/
    │   ├── README.md
    │   ├── index.html                 ← Teacher/Admin portal
    │   └── *.jsx                      ← Component files
    └── parent_app/
        ├── README.md
        ├── index.html                 ← Parent mobile app
        └── *.jsx                      ← Component files
```
