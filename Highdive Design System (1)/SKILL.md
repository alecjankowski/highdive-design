---
name: highdive-design
description: Use this skill to generate well-branded interfaces and assets for Highdive (a Chicago + NYC advertising agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Quick map:
- `README.md` — full brand orientation: voice, color, type, motifs, iconography, caveats.
- `colors_and_type.css` — drop-in CSS custom properties + semantic type styles. Import from any artifact.
- `assets/logos/` — official Highdive logo PNGs (Primary wordmark, Diver, HD Monogram, Stamp, HD Script) in Green / Orange / White / Black variants.
- `preview/` — small spec cards (colors, type, components, motifs) — handy as a visual reference.
- `ui_kits/highdive-web/` — reference recreation of the marketing surface (nav, hero, work grid, contact, footer, case-study panel).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always link `colors_and_type.css` so tokens stay in one place; **never** redraw the wordmark or Diver as inline SVG — use the PNG assets.

If working on production code, copy the tokens and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Things to keep front of mind
- The brand voice is short, declarative, no jargon, no emoji. "Jump in." "Brave brands. Bold work."
- Color is used in big flat fields. **No gradients.** Three inks (Green / Orange / Cream) do all the work.
- Corners are sharp by default; only CTAs use a full pill. No drop-shadow stacks.
- The Diver silhouette is a graphic device, not decoration — place it deliberately.
- The display face used here (Big Shoulders Display) is a **substitute** for the proprietary wordmark face. Flag this if the user cares about pixel-perfect identity and ask for the real font files.
