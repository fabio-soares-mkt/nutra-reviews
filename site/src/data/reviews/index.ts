import type { EditorialItem } from '../content';
import { getProduct } from '../products';
import { review as prodentim } from './prodentim';
import { review as phytomemone } from './phytomemone';
import { review as audifort } from './audifort';
import { review as prostavive } from './prostavive';
import { review as jointgenesis } from './jointgenesis';
import { review as gluco6 } from './gluco6';

export const reviews = [prodentim, phytomemone, audifort, prostavive, jointgenesis, gluco6] as const;
export const reviewItems: EditorialItem[] = reviews.map((review) => {
  const product = getProduct(review.productId);
  if (!product || product.status !== 'published') throw new Error(`Review product not published: ${review.productId}`);
  return {
    title: review.title,
    description: review.description,
    href: `/${product.slug}-review/`,
    label: 'Review',
    category: product.category,
    image: product.image,
  };
});
