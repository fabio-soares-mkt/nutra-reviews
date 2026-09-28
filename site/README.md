# Nutra Lens

Nutra Lens is a static Astro editorial site for clear, measured coverage of supplements and wellness products. The production URL is `https://nutralens.shop`.

## Work locally

Use Node 22 or newer (at least 22.12). In `site/`:

```sh
npm ci
npm run dev
npm run build
```

The production build writes to `dist/`. The existing Dockerfile copies that output into Nginx; its build context is `site/`.

## Structure

- `src/data/content.ts`: category navigation, introductory guides, and sitemap routes.
- `src/data/institutional.ts`: initial institutional page copy.
- `src/components/`: navigation, footer, breadcrumbs, and reusable cards.
- `src/layouts/BaseLayout.astro`: shared HTML shell and SEO metadata.
- `src/layouts/ArticleLayout.astro`: editorial articles with optional contents, image, references, and related reading.
- `src/layouts/ReviewLayout.astro`: future review sections. No product review is published yet.
- `src/pages/`: static routes and `sitemap.xml`.
- `src/styles/global.css`: visual system and responsive styles.

The current site intentionally has only two introductory guides. Add product reviews only after the product information, evidence, disclosures, and review facts can be verified. Keep `allRoutes` in `src/data/content.ts` current when adding pages so the sitemap stays complete.

There is no analytics, tag manager, affiliate tracking, account system, or contact form in this version.
