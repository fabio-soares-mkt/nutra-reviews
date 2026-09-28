export type ProductStatus = 'draft' | 'published' | 'archived';

export type Product = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: string;
  officialUrl?: string;
  affiliateUrl?: string;
  manufacturer?: string;
  image?: { src: string; alt: string };
  price?: { amount: number; currency: string; unit?: string };
  guarantee?: string;
  status: ProductStatus;
}>;

// Add only verified products. There are no product reviews or affiliate URLs yet.
export const products: readonly Product[] = [];

const productsById = new Map<string, Product>();
const slugs = new Set<string>();

for (const product of products) {
  if (productsById.has(product.id) || slugs.has(product.slug)) {
    throw new Error(`Duplicate product id or slug: ${product.id}`);
  }
  productsById.set(product.id, product);
  slugs.add(product.slug);
}

export function getProduct(productId: string): Product | undefined {
  return productsById.get(productId);
}
