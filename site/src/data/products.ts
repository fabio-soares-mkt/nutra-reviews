import type { ImageMetadata } from 'astro';
import prodentimImage from '../assets/products/prodentim/prodentim-logo.png';
import prodentim2 from '../assets/products/prodentim/prod_2_bottle.png';
import prodentim3 from '../assets/products/prodentim/prodentim3-bottle.png';
import prodentim6 from '../assets/products/prodentim/fe_6_bottle.png';
import phytomemoneImage from '../assets/products/phytomemone/phytomemone-logo.png';
import phytomemone2 from '../assets/products/phytomemone/phytomemone-2-Bottles.png';
import phytomemone3 from '../assets/products/phytomemone/phytomemone-3-bottles.png';
import phytomemone6 from '../assets/products/phytomemone/phytomemone-6-bottles.png';
import audifortImage from '../assets/products/audifort/bottle-label.webp';
import audifort2 from '../assets/products/audifort/PRODx2-500px.webp';
import audifort3 from '../assets/products/audifort/PRODx3-500px.webp';
import audifort6 from '../assets/products/audifort/PRODx6-500px.webp';
import prostaviveImage from '../assets/products/prostavive/bottles.png';
import prostavive1 from '../assets/products/prostavive/1-bottle.jpg';
import prostavive3 from '../assets/products/prostavive/3-bottles.jpg';
import prostavive6 from '../assets/products/prostavive/6-bottles.jpg';
import jointgenesisImage from '../assets/products/jointgenesis/bottle-ing.png';
import jointgenesis2 from '../assets/products/jointgenesis/2-pack.png';
import jointgenesis3 from '../assets/products/jointgenesis/3-pack.png';
import jointgenesis6 from '../assets/products/jointgenesis/6-pack.png';
import gluco6Image from '../assets/products/gluco6/690ae57520deee2abad2f7f7_g6bottle-ing-p-800.webp';
import gluco62 from '../assets/products/gluco6/690afe9437856b0f2ebfe1fd_2-pack.webp';
import gluco63 from '../assets/products/gluco6/690afe94507d009ee19f9f31_3-pack.webp';
import gluco66 from '../assets/products/gluco6/690afa152d64b64c03dc95ef_g6-6pack-p-500.webp';
import gluco6Label from '../assets/products/gluco6/label.jpg';

export type ProductStatus = 'draft' | 'published' | 'archived';
export type ProductOffer = Readonly<{ bottles: number; totalPrice: number; currency: 'USD'; image: ImageMetadata }>;
export type Product = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: string;
  officialUrl: string;
  originalHopLink: string;
  affiliateUrl: string;
  affiliateNetwork: 'clickbank';
  manufacturer?: string;
  image: { src: ImageMetadata; alt: string };
  labelImage?: ImageMetadata;
  price?: { amount: number; currency: string; unit?: string };
  offers: readonly ProductOffer[];
  guarantee: string;
  status: ProductStatus;
}>;

/** Preserve the supplied HopLink and its unrelated query parameters. */
export function buildClickBankHopLink(original: string, productId: string): string {
  const url = new URL(original);
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.hop.clickbank.net')) throw new Error(`Invalid ClickBank HopLink for ${productId}`);
  if (url.searchParams.has('extclid')) throw new Error(`Unexpected extclid on organic HopLink for ${productId}`);
  for (const [key, value] of [['aff_sub1', productId], ['aff_sub2', 'nutralens']]) {
    const existing = url.searchParams.getAll(key);
    if (existing.some((item) => item !== value)) throw new Error(`Conflicting ${key} on HopLink for ${productId}`);
    url.searchParams.set(key, value);
  }
  return url.href;
}

const hop = buildClickBankHopLink;
export const products: readonly Product[] = [
  {
    id: 'prodentim', slug: 'prodentim', name: 'ProDentim', category: 'Supplements',
    officialUrl: 'https://prodentim101.com/text.php', originalHopLink: 'https://ccf3903lrgvy6k4mzdqdums86o.hop.clickbank.net',
    affiliateUrl: hop('https://ccf3903lrgvy6k4mzdqdums86o.hop.clickbank.net', 'prodentim'), affiliateNetwork: 'clickbank',
    image: { src: prodentimImage, alt: 'ProDentim oral probiotic tablet bottle with strawberry and mint artwork' },
    offers: [{ bottles: 2, totalPrice: 158, currency: 'USD', image: prodentim2 }, { bottles: 3, totalPrice: 207, currency: 'USD', image: prodentim3 }, { bottles: 6, totalPrice: 294, currency: 'USD', image: prodentim6 }],
    guarantee: '60 days from delivery; request a refund and return every bottle, including opened or empty bottles, at your shipping expense.',
    status: 'published',
  },
  {
    id: 'phytomemone', slug: 'phytomemone', name: 'Phytomem One', category: 'Brain & Focus',
    officialUrl: 'https://getphytomemone.com/welcome/', originalHopLink: 'https://3f714dwkoeokdp5cnj6b00vw62.hop.clickbank.net',
    affiliateUrl: hop('https://3f714dwkoeokdp5cnj6b00vw62.hop.clickbank.net', 'phytomemone'), affiliateNetwork: 'clickbank',
    image: { src: phytomemoneImage, alt: 'Phytomem One dietary supplement bottle with botanical artwork' },
    offers: [{ bottles: 2, totalPrice: 158, currency: 'USD', image: phytomemone2 }, { bottles: 3, totalPrice: 177, currency: 'USD', image: phytomemone3 }, { bottles: 6, totalPrice: 294, currency: 'USD', image: phytomemone6 }],
    guarantee: '60 days from delivery; return all purchased items in good condition. Original and return shipping are excluded.',
    status: 'published',
  },
  {
    id: 'audifort', slug: 'audifort', name: 'Audifort', category: 'Wellness',
    officialUrl: 'https://audisoothe.com/c/order-now.php', originalHopLink: 'https://541bbd3dfinv5ra725n41i0k0x.hop.clickbank.net',
    affiliateUrl: hop('https://541bbd3dfinv5ra725n41i0k0x.hop.clickbank.net', 'audifort'), affiliateNetwork: 'clickbank',
    image: { src: audifortImage, alt: 'Audifort liquid hearing wellness supplement bottle' },
    offers: [{ bottles: 2, totalPrice: 158, currency: 'USD', image: audifort2 }, { bottles: 3, totalPrice: 207, currency: 'USD', image: audifort3 }, { bottles: 6, totalPrice: 294, currency: 'USD', image: audifort6 }],
    guarantee: 'The sales page advertises 90 days, but the linked return and shipping policies give conflicting eligibility and timing rules. Obtain written clarification before ordering.',
    status: 'published',
  },
  {
    id: 'prostavive', slug: 'prostavive', name: 'ProstaVive', category: 'Wellness',
    officialUrl: 'https://prostavive.org/', originalHopLink: 'https://0a3018xgqqmu3u7iwkx612bp89.hop.clickbank.net',
    affiliateUrl: hop('https://0a3018xgqqmu3u7iwkx612bp89.hop.clickbank.net', 'prostavive'), affiliateNetwork: 'clickbank',
    image: { src: prostaviveImage, alt: 'Three tubs of ProstaVive powdered supplement' },
    offers: [{ bottles: 1, totalPrice: 79, currency: 'USD', image: prostavive1 }, { bottles: 3, totalPrice: 177, currency: 'USD', image: prostavive3 }, { bottles: 6, totalPrice: 234, currency: 'USD', image: prostavive6 }],
    guarantee: '180 days from order; request authorization and return all bottles, including opened and empty ones, at your shipping expense.',
    status: 'published',
  },
  {
    id: 'jointgenesis', slug: 'jointgenesis', name: 'Joint Genesis', category: 'Wellness',
    officialUrl: 'https://completejointcare.net/cb/', originalHopLink: 'https://66d7432lspuoblec16rlk4vlc7.hop.clickbank.net',
    affiliateUrl: hop('https://66d7432lspuoblec16rlk4vlc7.hop.clickbank.net', 'jointgenesis'), affiliateNetwork: 'clickbank', manufacturer: 'BioDynamix',
    image: { src: jointgenesisImage, alt: 'BioDynamix Joint Genesis capsule bottle' },
    offers: [{ bottles: 2, totalPrice: 158, currency: 'USD', image: jointgenesis2 }, { bottles: 3, totalPrice: 207, currency: 'USD', image: jointgenesis3 }, { bottles: 6, totalPrice: 294, currency: 'USD', image: jointgenesis6 }],
    guarantee: '180 days from order; return remaining unopened, undamaged bottles with packing slip at your shipping expense. Opened or empty bottles need not be returned.',
    status: 'published',
  },
  {
    id: 'gluco6', slug: 'gluco6', name: 'Gluco6', category: 'Weight & Metabolism',
    officialUrl: 'https://gluco6.com/', originalHopLink: 'https://7ab8f02fhcmn1k7bphjkcm8x51.hop.clickbank.net',
    affiliateUrl: hop('https://7ab8f02fhcmn1k7bphjkcm8x51.hop.clickbank.net', 'gluco6'), affiliateNetwork: 'clickbank',
    image: { src: gluco6Image, alt: 'Gluco6 supplement bottle with botanical artwork' }, labelImage: gluco6Label,
    offers: [{ bottles: 2, totalPrice: 138, currency: 'USD', image: gluco62 }, { bottles: 3, totalPrice: 147, currency: 'USD', image: gluco63 }, { bottles: 6, totalPrice: 234, currency: 'USD', image: gluco66 }],
    guarantee: '60 days; contact support and return all bottles with labels, including opened bottles, at your shipping expense.',
    status: 'published',
  },
];

const productsById = new Map<string, Product>();
const slugs = new Set<string>();
for (const product of products) {
  if (product.id !== product.slug || !/^[a-z0-9-]+$/.test(product.id)) throw new Error(`Invalid product ID: ${product.id}`);
  if (productsById.has(product.id) || slugs.has(product.slug)) throw new Error(`Duplicate product ID or slug: ${product.id}`);
  if (product.status === 'published') {
    const url = new URL(product.affiliateUrl);
    if (url.searchParams.get('aff_sub1') !== product.id || url.searchParams.get('aff_sub2') !== 'nutralens' || url.searchParams.has('extclid')) throw new Error(`Invalid affiliate attribution for ${product.id}`);
  }
  for (const offer of product.offers) if (offer.bottles < 1 || offer.totalPrice <= 0) throw new Error(`Invalid offer for ${product.id}`);
  productsById.set(product.id, product);
  slugs.add(product.slug);
}

export function getProduct(productId: string): Product | undefined { return productsById.get(productId); }
