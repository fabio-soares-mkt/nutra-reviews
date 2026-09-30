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
- `src/data/products.ts`: central registry of six verified ClickBank products, HopLinks, images, offers, and seller terms.
- `src/data/reviews/`: original buyer-focused review content and the review card index.
- `src/components/`: navigation, footer, breadcrumbs, and reusable cards.
- `src/components/AffiliateCTA.astro`: tracked affiliate links resolved from the product registry.
- `src/components/ProductReview.astro`: shared renderer for product reviews, package cards, and disclosures.
- `src/layouts/BaseLayout.astro`: shared HTML shell and SEO metadata.
- `src/layouts/ArticleLayout.astro`: editorial articles with optional contents, image, references, and related reading.
- `src/layouts/ReviewLayout.astro`: semantic sections used by the six product reviews.
- `src/pages/`: static routes and `sitemap.xml`.
- `src/styles/global.css`: visual system and responsive styles.

The current site has two introductory guides and six product reviews at `/{product-slug}-review/`. Prices and policies were checked on September 30, 2026; recheck them before future edits. Keep `allRoutes` in `src/data/content.ts` current when adding pages so the sitemap stays complete.

GTM `GTM-N39R22HN` is installed globally. Review CTAs emit `affiliate_click` through `dataLayer`; GA4 is not called directly in site code. No account system or contact form is published. See `docs/tracking-affiliates.md` before changing commercial links or GTM tags.
