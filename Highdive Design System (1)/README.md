# Highdive Design System

A working design system for **Highdive** — a Chicago + New York advertising and new media agency, est. 2016. Tagline: **"Fearless creative for the brave."**

This system was built from the **Highdive Brand Evolution 2.0** brand book and the official logo asset pack. It's a reference toolkit for prototyping decks, mocks, microsites and pitch materials in Highdive's visual voice.

---

## Sources

- **Brand book** — `uploads/Highdive Brand Evolution 2.0 .pdf` (32 pages: typography, color, logo, the Diver, visual language "Wavey" + "Divey" + "Graphic Dive", business cards, merch, social headers, email signatures).
- **Logo pack** — `uploads/PNG-20260514T012354Z-3-001.zip` containing PNGs for the Primary wordmark, Vertical logo, Diver silhouette, HD Monogram, Stamp, and HD Script — each in Green / Orange / Black / White / Gray.
- No production codebase, Figma file, or live website was provided. Web/product UI in this system is **inferred** from the brand book and is flagged as such where used.

---

## Index

| File | What it is |
|---|---|
| `README.md` | This document — full brand orientation. |
| `colors_and_type.css` | Base CSS variables (colors, type, spacing, motion) + semantic styles. Include this in any artifact. |
| `SKILL.md` | Skill metadata — also doubles as an Agent Skill manifest for Claude Code use. |
| `assets/logos/` | All official logo PNGs, organised by mark family. |
| `preview/` | Small HTML "spec cards" for each design-system concept (colors, type, components). These populate the Design System tab. |
| `ui_kits/highdive-web/` | A reference recreation of Highdive's marketing surface (homepage, work, about). Inferred from brand DNA — see kit README for caveats. |

---

## Content fundamentals — voice & tone

Highdive is an **advertising agency talking to brave brands**. The copy voice across the brand book and the public agency surface is:

- **Confident, declarative, short.** "Jump in." "Fearless creative for the brave." "Highdive." Sentences are clipped, often single-word.
- **Imperative + invitational.** The brand asks you to *do* something — jump, dive, leap. Verbs lead.
- **Plain English, no jargon.** No "synergies," no "ideation." Where ad-industry words appear, they're stripped to the bone ("Work," "Studio," "Crew").
- **First person plural ("we"), second person ("you").** The agency speaks as a collective and addresses the reader directly. Never third person about themselves.
- **No exclamation marks.** Confidence doesn't shout. A period after "Jump in" lands harder.
- **Title Case for headlines, Sentence case for body.** Eyebrows and labels are `UPPERCASE` with wide tracking.
- **Numerals as numerals.** "EST 2016," not "Est. two-thousand-sixteen."
- **Place-coded.** CHI / NYC. The agency is rooted in two cities and says so often.
- **Emoji: none.** The brand book contains zero emoji. Don't introduce them.

Sample lines that fit the voice:
> "Jump in."
> "Fearless creative for the brave."
> "We make work that moves."
> "Brave brands. Bold work. CHI / NYC."

---

## Visual foundations

### Color
Three inks doing all the work — Orange, Cream, Black. **No gradients.** Color is used in big, flat, full-bleed blocks.

- **Highdive Orange** `#FF3014` — high-energy red-orange. The Diver silhouette, full-bleed brand fields, hover states.
- **Cream** `#F4EFE5` — the default page surface. Warmer than `#FFF` and softens the green/orange contrast.
- Plus **Black**, **White**, and a small **Gray scale** (`#1F1F1D` → `#EDEAE2`) for utility.

Usage rule of thumb: **one ink per surface.** An orange page, a black page, or a cream page — rarely all three competing in the same composition.

### Typography
- **Display** is **ABC Gravity Compressed** — an ultra-condensed ultra-heavy sans (the "HIGHDIVE" wordmark style). All-caps, tight tracking, leading clipped to 0.82. Used at huge sizes for billboards and section markers — almost never below 56px. **The Trial OTF is in `fonts/`**; if you ship to production, swap for the licensed file.
- **Body** is **SAA Series W01 Bold** for all headings and bold UI labels. The file ships **bold-only** (`-BD`), so non-bold body copy and small text fall through to **DM Sans 400/500** as a Google Fonts fallback. If you have the full SAA Series family (Regular + Medium), drop it in `fonts/` and we'll wire it up.
- **Script** is a casual handwritten cursive used only for the secondary "Highdive" signature mark and the occasional human aside. **Pacifico** remains our free Google Fonts substitute — flagged. If you have the source script font, send it.

### Spacing & layout
- **8px grid.** All spacing tokens snap to 8s (with a 4px half-step).
- **Generous outer margins, tight inner stacks.** Pages breathe; content blocks don't.
- **Asymmetric placement.** The Diver is rarely centered; it's tucked in a corner, peeking off-edge, or rising from a baseline.
- **Section markers anchor at the bottom** of cards in the brand book ("Wavey", "Divey", "Graphic Dive" sit in the lower-third). Use this rhythm.

### Backgrounds, motifs & "the visual language"
The brand book documents three named visual systems:
1. **Wavey** — flat horizontal bars on a saturated red field; rows alternate with arched peaks (a stylised wave / diving-board / pool-ladder). Hidden H letterforms appear when rotated 90°.
2. **Divey** — repeating silhouettes of divers in different mid-air poses, scattered like a pattern, on a red field with a single white H or HD monogram floating in.
3. **Graphic Dive** — black canvas with red horizontal slats receding into perspective, a halftoned/duotone photograph of a diver mid-leap composited in. Cinematic, dramatic.

Use these as **full-bleed hero treatments**, not as repeating page wallpapers.

Other background rules:
- **No gradients.** Ever.
- **No drop-shadow stacks on cards.** Editorial inset stroke (`shadow-inset-stroke`) is preferred over elevation.
- **No glass/blur.** This is a print-rooted brand.

### Imagery
- High-contrast. Warm cast where colour, frequent **duotone** (orange + black, or green + cream).
- Halftone treatment recurs (Graphic Dive uses a clear halftoned diver figure). Slight grain is on-brand; gloss/HDR is off-brand.
- Human bodies in motion are the canonical subject — divers, leapers, mid-air.

### Borders, corners & elevation
- **Sharp corners by default** (`radius: 0`). Buttons may use a full **pill** for CTAs only. Form inputs get a hairline 2px radius.
- **Hairline strokes** in `--hd-black` are the primary divider; never a faded gray rule.
- Shadows exist (`--shadow-md`, `--shadow-lg`) but are reserved for floating UI — menus, toasts, modals. Static cards use the inset stroke.

### Hover & press
- **Links** → text color shifts to `--hd-orange` (no underline change).
- **Buttons (primary, black)** → background darkens to `#000`, no opacity tricks.
- **Buttons (orange)** → background to `--hd-orange-ink`.
- **Press** → `transform: translateY(1px)` and the same darkened color. **No scale.**
- **Icons / image tiles** → `transform: scale(1.02)` over 220ms ease-out. Subtle.

### Transparency / blur
- **Avoid.** This brand does not use frosted glass, color overlays at <80% opacity, or backdrop-blur. The only acceptable transparency is the lower opacity (~40–60%) tints used to layer the Divey pattern silhouettes on red.

### Motion
- **Fast, confident, no bounce.** `cubic-bezier(0.2, 0.8, 0.2, 1)` is the default ease. Durations: 140ms (taps), 220ms (most state changes), 420ms (page transitions).
- **Hero text** can `clip-path` reveal vertically (curtain-up, 420ms). Other elements **fade + 8px upward translate**.
- The Diver silhouette can be used as a **page-entry motif** — drops from the top, rotates ~10° on settle. Use sparingly.

### Cards
- Cream surface (`--bg-2`), no shadow, **1.5px green inset stroke** as the border.
- Internal padding 24–32px depending on density.
- Title in body-sans 700; eyebrow in `t-eyebrow` style above.

### Layout rules (fixed elements)
- **Top bar** uses cream background, ~72px tall, wordmark left, nav links right (UPPERCASE eyebrow style, ~24px gap).
- **Footer** is full-bleed green with cream text. The Stamp seal often appears here.

---

## Iconography

The Highdive brand pack ships **no icon set** — neither an icon font, nor an SVG sprite, nor product UI icons. The brand book is identity / merch only. So:

- **For Highdive-branded illustrations** (the Diver silhouette, the HD Monogram, the Stamp, the HD Script wordmark), **always use the PNG assets** in `assets/logos/`. Do not redraw these as SVG approximations — the proportions of the wordmark and the diver figure are part of the brand and must come from the official files.
- **For UI / interface icons** (chevrons, close, menu, arrows, play, etc.), substitute **Lucide** (`https://unpkg.com/lucide-static@latest/icons/`) at **stroke-width: 1.75** and color `currentColor` — this matches the editorial, thin-stroke feeling of the rest of the brand. **FLAG**: Lucide is a substitution; if the user has a preferred icon set, swap in.
- **Emoji: never.** Not in headers, not in copy, not as UI affordances.
- **Unicode symbols** (•, →, —) are fine and on-brand for typographic detailing, used sparingly.
- The brand uses **the Diver figure itself as a sort of icon** — appearing as a pictogram between the H and the D of the wordmark, as a stamp on biz cards, etc. Treat the Diver as a graphic device, not just a photo.

Logo asset inventory (in `assets/logos/`):

| Mark | Files |
|---|---|
| **Primary Logo** — the HIGHDIVE wordmark with Diver tucked under the H crossbar | Green, Orange, White, Black |
| **HD Monogram** — bold "HD" square with Diver hanging from the H | Green, Orange |
| **Diver** — silhouette only, no type | Orange, Green, White |
| **Stamp** — circular seal: "FEARLESS CREATIVE FOR THE BRAVE / EST 2016 / CHI · NYC" | Green, Orange |
| **HD Script** — casual cursive "Highdive" signature mark | Green |

When the user needs the **Vertical Logo** or the **Black/Gray** colorways listed in the brand pack but not yet copied here, they are available in the source ZIP — flag this to them.

---

## UI kits

| Kit | Path | Notes |
|---|---|---|
| Highdive Web | `ui_kits/highdive-web/` | A reference homepage / work / about layout system. **Inferred** from the brand book — no codebase or live site was provided. |

---

## Caveats & open asks

- **Brand fonts are wired in.** ABC Gravity Compressed (display) and SAA Series W01 Bold (body bold) are loaded from `fonts/`. The ABC Gravity file is a **Trial** OTF — please replace it with the licensed version before production use. SAA Series ships bold-only here; non-bold weights fall back to DM Sans. Pacifico is still standing in for the "Highdive" script cursive — send the real script font and we'll swap it.
- **No product UI was provided.** Highdive's public marketing site, internal tools, and any client work samples were not in the upload. The web UI kit here is a reasonable extrapolation, not a recreation. Send a Figma file, a screenshot, or a codebase URL and we'll rebuild it for real.
- **Color values are eyeballed** from the PDF renders. The brand book did not include hex specs in machine-readable form. The orange and black here are within ~2 units of the renders but could be tightened against a brand spec sheet if one exists.
- **No vector logos.** The provided pack is PNG only. SVG/EPS originals would let us scale logos cleanly into very large hero compositions.
