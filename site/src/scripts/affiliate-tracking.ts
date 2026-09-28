type AffiliateClickEvent = {
  event: 'affiliate_click';
  product_id: string;
  product_name: string;
  link_area: string;
  destination_url: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __nutraAffiliateTrackingInstalled?: boolean;
  }
}

if (!window.__nutraAffiliateTrackingInstalled) {
  window.__nutraAffiliateTrackingInstalled = true;

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest<HTMLAnchorElement>('a[data-affiliate-click]');
    if (!link) return;

    const { productId, productName, linkArea } = link.dataset;
    if (!productId || !productName || !linkArea) return;

    const payload: AffiliateClickEvent = {
      event: 'affiliate_click',
      product_id: productId,
      product_name: productName,
      link_area: linkArea,
      destination_url: link.href,
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  });
}
