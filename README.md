# Solutioneer

A bilingual (French/English) editorial site for the presales profession — sales engineers, solutions
engineers, solutions consultants — built as a static Astro site with SEO as a first-class concern.

French is the priority market at launch (deeper content, root-level URLs); the technical structure is
fully bilingual so English can be built out in parallel without any rework. See
`cahier-des-charges-site-presales.pdf`, `cahier-des-charges-contenu-seo-solutioneer.pdf`, and
`design-brief-solutioneer.md` (in the parent folder) for the full product, content, and design briefs this
project was built from.

## Stack

- **Astro** (static output) — content collections, minimal shipped JS, excellent SEO defaults.
- **Tailwind CSS v4** — design tokens defined via `@theme` in `src/styles/global.css`.
- **Markdown + front-matter** for all articles — adding an article is adding a file, no code changes.
- **@astrojs/sitemap** for automatic `sitemap-index.xml` generation.

## Design system

Built to the design brief's explicit constraint: not a generic SaaS theme, not any of the three current
AI-design defaults (warm cream + serif + terracotta; near-black + neon; newspaper/broadsheet). Instead, a
"technical instrument panel" register — precise, cool-neutral, quiet except for one deliberate signature.

- **Color** — cool paper-gray page (`--color-canvas-soft`) with white "panel" surfaces
  (`--color-canvas`) for cards and the header; ink-navy text (`--color-ink`, not pure black); one
  saturated signal-blue accent (`--color-accent-500`, `#1E4FD8`) used sparingly for links, buttons, and
  active states. All defined in `src/styles/global.css`.
- **Type** — the IBM Plex superfamily, three deliberate roles (see brief §5), a considered alternative to
  the "Inter everywhere" SaaS default: **Plex Sans** for display/UI (headings, nav, buttons, card titles),
  **Plex Serif** for long-form article body copy only (`.prose-article`), **Plex Mono** for metadata/labels
  (dates, reading time, category tags, the ToC). IBM Plex was designed by IBM for technical/engineering
  communication — the pedigree matches the site's "tool a sales engineer would trust" positioning.
- **Layout** — three distinct page archetypes per brief §4, not one universal template:
  - *Articles* (`ArticleLayout.astro`, non-`pillar-guide` formats): centered `.reading-column` (70ch max),
    no sidebar.
  - *Pillar guides* (`format: pillar-guide`): same reading column **plus** the sticky ToC rail (see below).
  - *Discovery pages* (blog hub, pillar listings, homepage "latest"): responsive card grid
    (`ArticleCard.astro`), category filter as pill chips, never a dropdown.
- **Signature element** (brief §6 — exactly one, everything else stays quiet): the sticky **ToC rail** on
  pillar-guide articles (`TableOfContents.astro`), treated as a precision instrument panel — a thin
  indicator bar tracks the active section via `IntersectionObserver` and CSS `transform`, mono type,
  hairline rule. Desktop-only; collapses to an in-flow `<details>` on mobile. The pillar-label monogram
  chip (`CategoryTag.astro`) is a secondary, deliberately restrained motif — not a second signature.

## URL structure

- `/` → static redirect to `/fr/` (French is the default/priority locale).
- `/fr/...` and `/en/...` — fully separate, language-native URLs (e.g. `/fr/debuter/` vs `/en/start/`,
  not a mechanical translation of the same slug). Configured in `astro.config.mjs` (`i18n`) and
  `src/i18n/paths.ts`.
- `/{lang}/blog/{slug}/` — article pages, one Markdown file per article.
- Every page emits a full hreflang cluster (self + alternate + `x-default`) when a same-page counterpart
  exists in the other language. Individual articles only get hreflang alternates if a real translated
  counterpart exists — French and English content are written as separate editorial pieces, not 1:1
  translations, per the content brief.

## Adding an article

Add a Markdown file under `src/content/articles/fr/` or `src/content/articles/en/`. Required front-matter
is validated by the schema in `src/content.config.ts`:

```md
---
title: "..."
description: "..."           # hand-written meta description, never auto-derived from the title
lang: fr                     # or en
pillar: start                # start | excel | opportunities
format: tactical              # pillar-guide | tactical | comparison | data | experience | glossary | resource | market-analysis
pubDate: 2026-01-01
author: Solutioneer
relatedSlugs: [other-article-slug, ...]   # 2-4 curated internal links, never 0
faq:
  - question: "..."
    answer: "..."
---

Article body in Markdown. Link to at least the article's own pillar page and 2-4 related articles
somewhere in the body text (in addition to the curated relatedSlugs block at the end).
```

The pillar and blog-hub pages update automatically — no template changes needed to publish new content.

## Analytics

Traffic is tracked with **Cloudflare Web Analytics** — free (no paid tier), cookieless/anonymous, so it
doesn't require a GDPR cookie-consent banner (unlike Google Analytics, which was the alternative
considered and rejected specifically to avoid that UX friction on a French/EU-priority site).

Already configured and live — the real beacon token is committed as a default in `BaseLayout.astro` (it's
not a secret; it's visible in every page's HTML source once deployed, same as any Cloudflare Web Analytics
snippet). Traffic shows up automatically at [dash.cloudflare.com](https://dash.cloudflare.com) → **Analytics
& Logs → Web Analytics**. No further setup needed.

To point a different environment (e.g. a staging build) at a different Cloudflare property, set the
`PUBLIC_CF_BEACON_TOKEN` env var to override the committed default — copy `.env.example` to `.env` locally,
or add it in Render's service → Environment tab.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
```

## Deployment (Render, free tier)

`render.yaml` is set up for a one-click Blueprint deploy: **New → Blueprint**, point it at this repo, and
Render picks up the build command and publish directory automatically. No custom rewrite rules are
needed — Astro emits real static HTML per route (including a real `404.html`), unlike a client-side-routed
SPA.

**Before going live**, update in `astro.config.mjs`:

```js
site: 'https://solutioneer.onrender.com', // → your real production domain
```

This value drives every canonical URL, the sitemap, and OG/Twitter tags — getting it right matters for
SEO correctness. Also update the `Sitemap:` line in `public/robots.txt` to match.

## Content status at launch

- **French**: 11 articles across all 3 pillars (Débuter/Exceller/Opportunités), covering the format
  variety the content brief calls for (pillar guides, glossary, comparison, tactical, salary data,
  personal experience, market analysis).
- **English**: 3 seed articles (one per pillar), written natively rather than translated, to prove out the
  bilingual structure. English is intentionally lighter at launch per the content strategy — French is
  the priority market.

## Known placeholders to personalize before a real launch

- **`src/pages/{fr,en}/about/` bio** — written honestly but generically (no fabricated name, employer, or
  years of experience, since that would misrepresent credentials on a public page). Real specifics here
  meaningfully strengthen E-E-A-T/SEO credibility — worth personalizing before driving real traffic.
- **`hello@solutioneer.io`** — placeholder contact address in the About pages and Organization schema;
  point it at a real inbox.
- **`site` domain** in `astro.config.mjs` and `public/robots.txt` — currently the Render default subdomain.
- **OG image** (`public/og-default.svg`) — a clean static placeholder; a real branded 1200×630 image (or
  per-article dynamic OG images) would improve social-share click-through.

## Roadmap (explicitly out of scope for this iteration)

Interactive tools (salary simulator, demo-prep checklist), newsletter capture, on-site search, and
finer sub-topic filtering — see the content brief's roadmap section. The `/outils` / `/tools` pages are
already live as a placeholder ready to receive the first tool without a page rebuild.
