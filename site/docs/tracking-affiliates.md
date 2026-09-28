# GTM and affiliate click tracking

## Current state

- GTM container: `GTM-N39R22HN`.
- The official loader is placed once at the start of `<head>` in `src/layouts/BaseLayout.astro`; its `noscript` iframe is the first child of `<body>`. Every published Astro page uses this layout.
- `AffiliateCTA.astro` loads `src/scripts/affiliate-tracking.ts` only on pages that render the CTA. The script installs one delegated click listener and does not fire an affiliate event on page load.
- No GA4 measurement ID, GA4 tag, affiliate link, or product review is configured in the site code. Installing the container does not mean GA4 tags have been created or published inside GTM.

## Product registry

`src/data/products.ts` owns the `Product` type and the central `products` list. It is deliberately empty. A record can include `id`, `slug`, `name`, `category`, `officialUrl`, `affiliateUrl`, `manufacturer`, `image`, `price`, `guarantee`, and `status` (`draft`, `published`, or `archived`). IDs and slugs must be unique.

To add a verified product, create one record in that list. Confirm its destination, seller terms, disclosure, image rights, and commercial details before setting `status: 'published'`. Keep URLs and prices in this registry rather than scattering them across pages. Never add a placeholder affiliate URL to a published page.

## AffiliateCTA

`src/components/AffiliateCTA.astro` accepts `productId`, `linkArea`, and `label`, plus optional `productName`, `href`, `variant`, `class`, and `id`. It resolves the product from the central registry and requires a published product with an HTTP(S) `affiliateUrl`. Optional `productName` and `href` are checked against the registry; they cannot silently override it. Because the registry is empty, no CTA is rendered on the current site.

For a future verified record, use a CTA such as:

```astro
<AffiliateCTA productId="verified-product-id" linkArea="review_hero" label="Visit the official site" />
```

This example is documentation only. The ID above is not a registered product and should not be used on a live page until a verified record exists.

The rendered link opens in a new tab and uses `rel="sponsored nofollow noopener noreferrer"`. It carries only `data-affiliate-click`, `data-product-id`, `data-product-name`, and `data-link-area`. The destination comes from its `href`.

## Event contract

The listener finds the closest affiliate CTA when its link is clicked and pushes one object to `window.dataLayer`:

```js
{
  event: 'affiliate_click',
  product_id: 'verified-product-id',
  product_name: 'Verified Product Name',
  link_area: 'review_hero',
  destination_url: '<actual affiliateUrl from products.ts>'
}
```

The object above illustrates the schema only; it is not a live URL or product. No personal data should be placed in product fields or destination URLs. The code does not call GA4 directly. A global installation guard prevents a second listener if the client module is evaluated again.

Supported `link_area` values: `review_hero`, `review_summary`, `review_pricing`, `review_kits`, `review_conclusion`, `article_inline`, `category_featured`, `home_featured`. Extend the central list in `AffiliateCTA.astro` and this document when a new placement is introduced. Do not use generic names such as `button1` or `cta2`.

The default HTML ID is `aff-{product-slug}-{link-area-with-hyphens}`, for example `aff-example-product-review-hero`. If the same product appears twice in one area on a page, pass distinct explicit IDs and inspect the rendered HTML to avoid duplicates. Existing published IDs should stay stable.

## Future GTM and GA4 setup

1. Confirm the GTM container and its published version in Tag Assistant.
2. In GTM, create Data Layer Variables (Version 2) for `product_id`, `product_name`, `link_area`, and `destination_url`.
3. Create a Custom Event trigger named `affiliate_click`.
4. After a GA4 property and measurement ID are available, configure a Google tag and a GA4 event tag inside GTM using that trigger and the four parameters. Do not also create a competing native click trigger for the same CTA.
5. Use GTM Preview/Tag Assistant to verify one data layer event and one GA4 event per click, then publish the container separately.

Review consent and privacy configuration before activating measurement tags. This repository does not publish GTM tags or configure GA4.
