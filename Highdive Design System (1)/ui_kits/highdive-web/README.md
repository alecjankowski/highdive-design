# Highdive Web — UI Kit

A reference recreation of Highdive's marketing surface in the brand's voice. Use this as a starting point for landing pages, microsites, pitch leave-behinds, and campaign sites.

> **Caveat — inferred kit.** No production codebase, Figma file, or live site was provided. This kit is extrapolated from the **Highdive Brand Evolution 2.0** book. The components are pixel-tight to the brand foundations (color, type, motifs) but layouts are best-judgement, not 1:1 from a real source.

## Files

| File | What it is |
|---|---|
| `index.html` | Interactive demo — single page that strings the components together: nav, hero, work grid, studio strip, contact, footer. Click a work tile to open the case study panel. |
| `Nav.jsx` | Top bar — wordmark left, nav links right. Cream surface. |
| `Hero.jsx` | Full-bleed Black hero with the Diver silhouette tucked under the H of a massive display headline. Primary CTA. |
| `WorkGrid.jsx` | 6-tile case-study grid. Each tile = eyebrow + title + tag row. Hover swaps title to Orange. |
| `StudioStrip.jsx` | A wide ORANGE band between sections. Stamp seal + tagline. |
| `AboutBlock.jsx` | Editorial two-column "about the agency" block with script signature. |
| `ContactForm.jsx` | Reused form pattern on the dark canvas. |
| `Footer.jsx` | Full-bleed black footer with HD Monogram, columns, fine print. |
| `CaseStudyPanel.jsx` | Slide-over panel that opens when a work tile is clicked. |

## How it loads

`index.html` includes React 18.3 + Babel via CDN with pinned versions, then loads each `.jsx` via `<script type="text/babel" src>`. The components export themselves to `window` at the bottom of each file so the entry script can compose them.

## To extend

- Add a new case study to the `WORK` array in `WorkGrid.jsx`.
- Drop a different visual motif into `Hero.jsx` by switching the `<DiveDeck/>` element for `<WaveyBg/>` or `<DiveyBg/>` (the latter two are placeholders — wire them up if you need them).
