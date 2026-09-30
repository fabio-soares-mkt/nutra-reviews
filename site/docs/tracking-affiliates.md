# GTM and affiliate click tracking

## Current state

- GTM container: `GTM-N39R22HN`.
- The official loader is placed once at the start of `<head>` in `src/layouts/BaseLayout.astro`; its `noscript` iframe is the first child of `<body>`. Every published Astro page uses this layout.
- `AffiliateCTA.astro` loads `src/scripts/affiliate-tracking.ts` only on pages that render the CTA. The script installs one delegated click listener and does not fire an affiliate event on page load.
- Six ClickBank product reviews and affiliate links are now published in the site code. No GA4 measurement ID or GA4 tag is configured directly in the code. Installing the container does not establish whether event tags have been created or published inside GTM.

## Product registry

`src/data/products.ts` owns the `Product` type and six published records. Each record has `id`, `slug`, `name`, `category`, `officialUrl`, `originalHopLink`, `affiliateUrl`, `affiliateNetwork`, an imported product image, verified `offers`, `guarantee`, and `status` (`draft`, `published`, or `archived`); `manufacturer` and label image are optional. IDs and slugs must be unique. The six records are ProDentim, Phytomem One, Audifort, ProstaVive, Joint Genesis, and Gluco6.

To add a verified product, create one record in that list. Confirm its destination, seller terms, disclosure, image rights, and commercial details before setting `status: 'published'`. Keep URLs and package totals in this registry rather than scattering them across pages. `buildClickBankHopLink()` preserves existing unrelated query parameters, rejects conflicting affiliate parameters and `extclid`, and sets `aff_sub1` to the product ID and `aff_sub2` to `nutralens`. Published records validate that `id === slug === aff_sub1` and that `aff_sub2` is correct. Never add a placeholder affiliate URL to a published page.

## AffiliateCTA

`src/components/AffiliateCTA.astro` accepts `productId`, `linkArea`, and `label`, plus optional `productName`, `href`, `variant`, `class`, and `id`. It resolves the product from the central registry and requires a published product with an HTTP(S) `affiliateUrl`. Optional `productName` and `href` are checked against the registry; they cannot silently override it. Each current review renders a hero, pricing, and conclusion CTA.

For a registered product, use a CTA such as:

```astro
<AffiliateCTA productId="prodentim" linkArea="review_hero" id="aff-prodentim-hero" label="Check the current official offer" />
```

The example follows the pattern used in the live review. Use a unique ID per CTA placement.

The rendered link opens in a new tab and uses `rel="sponsored nofollow noopener noreferrer"`. It carries `data-affiliate-click`, `data-product-id`, `data-product-name`, `data-link-area`, and `data-affiliate-network`. The destination comes from its `href`.

## Event contract

The listener finds the closest affiliate CTA when its link is clicked and pushes one object to `window.dataLayer`:

```js
{
  event: 'affiliate_click',
  product_id: 'prodentim',
  product_name: 'ProDentim',
  link_area: 'review_hero',
  destination_url: '<actual affiliateUrl from products.ts>',
  affiliate_network: 'clickbank',
  source_site: 'nutralens'
}
```

The URL above illustrates the schema; the actual URL is taken from the rendered `href`. No personal data should be placed in product fields or destination URLs. The code does not call GA4 directly. A global installation guard prevents a second listener if the client module is evaluated again. The ClickBank sale path (`affiliate_sale` via Make and GA4 Measurement Protocol) is external and unchanged.

Supported `link_area` values: `review_hero`, `review_summary`, `review_pricing`, `review_kits`, `review_conclusion`, `article_inline`, `category_featured`, `home_featured`. Extend the central list in `AffiliateCTA.astro` and this document when a new placement is introduced. Do not use generic names such as `button1` or `cta2`.

The default HTML ID is `aff-{product-slug}-{link-area-with-hyphens}`. Current reviews set shorter explicit IDs such as `aff-prodentim-hero`, `aff-prodentim-pricing`, and `aff-prodentim-conclusion`. If the same product appears twice in one area on a page, pass distinct explicit IDs and inspect the rendered HTML to avoid duplicates. Existing published IDs should stay stable.

## Future GTM and GA4 setup

1. Confirm the GTM container and its published version in Tag Assistant.
2. In GTM, create Data Layer Variables (Version 2) for `product_id`, `product_name`, `link_area`, `destination_url`, `affiliate_network`, and `source_site`.
3. Create a Custom Event trigger named `affiliate_click`.
4. After a GA4 property and measurement ID are available, configure a Google tag and a GA4 event tag inside GTM using that trigger and the six parameters. Do not also create a competing native click trigger for the same CTA.
5. Use GTM Preview/Tag Assistant to verify one data layer event and one GA4 event per click, then publish the container separately.

Review consent and privacy configuration before activating measurement tags. This repository does not publish GTM tags or configure GA4.
