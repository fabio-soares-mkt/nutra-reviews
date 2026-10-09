# Nutra Lens

Nutra Lens is a static Astro editorial site for clear, measured coverage of supplements and wellness products. The production URL is `https://nutralens.shop`.

## Work locally

Use Node 22 or newer (at least 22.12). In `site/`:

```sh
npm ci
npm run build
```

`npm run dev` is optional for troubleshooting. A local browser review is not a commit, push, or SUCCESS notification gate. The required local technical gate is `npm run build` plus the project's specific validations. Visual review happens at the production URL after the user's manual VPS deployment.

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

## SEO notifications through Make

The Make scenario has SUCCESS and FAILED email routes. The workflow is implementation, project validations, `npm run build`, commit, `git push`, confirmation that `HEAD` reached `origin/main`, then SUCCESS notification. The user deploys manually to the VPS and reviews the live URL. Only after deployment and approved live review may the page be marked `PUBLISHED` or submitted for indexing in Google Search Console.

Codex may push `main` to `origin/main` only after the build and commit pass, the branch and committed files are confirmed, the working tree has no unexpected changes, and the real commit hash is captured. Check `git status` and `git log -1 --oneline` before pushing. After pushing, compare `git rev-parse HEAD` with `git rev-parse origin/main`; if they differ, mark the push `FAILED_OR_UNCONFIRMED` and do not send SUCCESS. `npm run dev` and local visual review are optional.

For a confirmed push or a definitive build, commit, or push failure, prepare a JSON payload and run from `site/`:

```sh
node scripts/seo-notify-make.mjs <payload-file.json>
```

Set `NUTRALENS_MAKE_WEBHOOK_URL=<configure-localmente>` in the local environment before sending. Never commit the actual webhook URL or a local `.env` file. The script requires valid JSON and an HTTPS webhook, then exits with a nonzero code for a configuration, payload, network, or HTTP error. An unavailable webhook means notification is pending; do not claim an email was sent.

The payload contains `event`, `status`, `product`, `cluster`, `page_type`, `page_title`, `build_status`, `commit_status`, `commit_hash`, `commit_message`, `branch`, `push_status`, `push_required`, `publication_status`, `deployment_status`, `live_qa_status`, and `pages[]`. Each page contains `type`, `title`, `slug`, `expected_url`, `source_file`, `build_status`, `commit_status`, `push_status`, `publication_status`, and `deployment_status`. `pages[]` can contain multiple pages or be empty when a failure occurs before any page is created. The script also sends `page_type` and `page_title` aliases for each page. On pre-commit failures, set `commit_hash` and `commit_message` to `null`; include an error summary when available. The sender must verify the workflow gates; the script validates JSON and sends it but does not inspect Git or run a build.

`status: success` requires build, commit, and push statuses of `OK` plus `HEAD == origin/main`. Use `publication_status: AWAITING_VPS_DEPLOY`, `deployment_status: AWAITING_MANUAL_VPS_DEPLOY`, `push_required: false`, and `live_qa_status: PENDING_DEPLOY`. This means the user should deploy manually; an expected URL is not yet a live URL.

Before a push, use `publication_status: AWAITING_GIT_PUSH`, `push_status: NOT_EXECUTED`, `push_required: true`, and `deployment_status: NOT_READY`. Do not send a SUCCESS notification at this point.

For failures, use `status: failed`. If the build fails, set `build_status: FAILED`, commit and push to `NOT_EXECUTED`, `push_required: false`, and publication and deployment to `NOT_READY`. If the commit fails, set build to `OK`, commit to `FAILED`, push to `NOT_EXECUTED`, `push_required: false`, and publication and deployment to `NOT_READY`. If the push fails, preserve the local commit, set build and commit to `OK`, `push_status: FAILED`, `push_required: true`, `publication_status: AWAITING_GIT_PUSH`, and `deployment_status: NOT_READY`. Do not deploy or request indexing in any of these failure states.

After deployment, use `publication_status: AWAITING_LIVE_QA`, `deployment_status: DEPLOYED`, and `live_qa_status: PENDING_HUMAN_REVIEW`. Only the user's approval of the live page permits `publication_status: PUBLISHED` and `live_qa_status: APPROVED`; only then may indexing be requested.
