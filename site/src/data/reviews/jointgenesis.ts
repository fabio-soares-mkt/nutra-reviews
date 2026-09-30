import type { ReviewContent } from '../review-types';

export const review = {
  productId: 'jointgenesis',
  title: 'Joint Genesis Review: Formula, Offers, and Guarantee',
  description: 'A practical review of BioDynamix Joint Genesis, its Mobilee-based formula, listed bundles, and 180-day return policy.',
  lede: 'Joint Genesis is a daily capsule sold for joint comfort and mobility support. The important buying checks are ingredient disclosure, the delivered package price, and the exact return conditions.',
  snapshot: [
    'One capsule per day; each bottle supplies 30 days.',
    'The supplied sales page lists two, three, and six-bottle offers.',
    'The 180-day guarantee starts on the order date.'
  ],
  whatItIs: 'BioDynamix markets Joint Genesis as a doctor-formulated supplement centered on Mobilee hyaluronan. Its purpose is general joint support, not treatment for arthritis or cartilage disease.',
  verdict: 'The routine is simple and the refund window is long, but the finished-product ingredient doses and vegan status need clarification before a careful purchase.',
  claimedBenefits: [
    'The brand promotes joint comfort, flexibility, and mobility.',
    'Its explanation focuses on hyaluronan in synovial fluid.',
    'Testimonials and promised degrees of relief are seller claims, not predictable outcomes.'
  ],
  ingredientsIntro: 'The brand names five main ingredients. Accessible text does not establish their individual amounts in the finished capsule; an 80 mg study dose for Mobilee is not automatically this product’s dose.',
  ingredients: [
    { name: 'Mobilee®', detail: 'Branded hyaluronan matrix; maker Bioiberica says it comes from rooster comb.' },
    { name: 'Pycnogenol®', detail: 'French maritime pine bark extract named by BioDynamix.' },
    { name: 'Ginger root', detail: 'Named botanical; per-capsule quantity is unclear.' },
    { name: 'Boswellia serrata', detail: 'Named botanical; per-capsule quantity is unclear.' },
    { name: 'BioPerine®', detail: 'Black pepper extract promoted as an absorption aid.' }
  ],
  mechanism: 'The seller says Mobilee supports hyaluronan in synovial fluid, which helps cushion movement. Ingredient studies do not by themselves prove that this finished formula restores cartilage or provides reliable relief.',
  directions: 'Take one capsule with water daily, preferably in the morning, according to BioDynamix. A 30-capsule bottle lasts one month at that rate. Store in a cool, dry place.',
  audience: 'It may interest adults comparing simple joint-support routines. Buyers avoiding animal ingredients need direct seller confirmation: BioDynamix calls it vegan-friendly, while Mobilee’s manufacturer identifies a rooster-comb source.',
  pros: [
    'Simple daily serving.',
    'Named core ingredients and visible bundle totals.',
    'Written 180-day return window.'
  ],
  considerations: [
    'Finished-capsule ingredient amounts are not clear in accessible text.',
    'The vegan-friendly claim conflicts with Mobilee’s stated source.',
    'Unopened bottles must be returned at buyer expense.'
  ],
  pricingNote: 'The supplied page showed two bottles for $158, three for $207, and six for $294. Its shipping display was location-specific; confirm the charge at your checkout. The policy says U.S. orders of six or more bottles ship free, while international charges may apply.',
  guaranteeNote: 'The linked policy allows 180 days from the order date. Contact support and return remaining unopened, undamaged bottles with the packing slip at your own postage. Opened or empty bottles need not be sent back.',
  manufacturerNote: 'BioDynamix identifies itself as the brand and says the product is made in the United States under current GMP standards. ClickBank is the retailer. Facility claims do not mean FDA approval of the supplement.',
  buyingNote: 'Compare delivered totals rather than unit-price headlines. A larger bundle lowers the listed per-bottle cost but increases the amount paid upfront and any unopened stock to return.',
  safetyNote: 'Discuss use with a clinician if pregnant, nursing, taking medication, managing a condition, or concerned about ingredients. Persistent joint symptoms need appropriate assessment; this supplement is not medical treatment.',
  faq: [
    { question: 'How long does one bottle last?', answer: 'BioDynamix describes 30 capsules taken once daily, or about one month.' },
    { question: 'Is Joint Genesis vegan?', answer: 'The claim is unresolved: Mobilee’s maker identifies an animal source despite the seller’s vegan-friendly wording.' },
    { question: 'Must empty bottles be returned?', answer: 'No, according to the linked policy; return remaining unopened, undamaged bottles with the packing slip.' }
  ],
  conclusion: 'Joint Genesis has a convenient format and a published six-month guarantee. Before ordering, verify the current label, clarify the animal-source conflict if relevant, and check shipping and refund details for your location.',
  sources: [
    { label: 'Supplied Joint Genesis sales page', url: 'https://completejointcare.net/cb/' },
    { label: 'BioDynamix Joint Genesis product page', url: 'https://biodynamix.co/shop/jointgenesis/' },
    { label: 'Refund policy for supplied offer', url: 'https://completejointcare.net/refund-policy.php' },
    { label: 'Bioiberica Mobilee ingredient origin', url: 'https://www.bioiberica.com/en/products/human-health/mobilee' }
  ]
} satisfies ReviewContent;
