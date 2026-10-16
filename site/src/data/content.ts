import type { ImageMetadata } from 'astro';
import { reviewItems } from './reviews';
import supplementsImage from '../assets/editorial/supplements.jpg';
import weightMetabolismImage from '../assets/editorial/weight-metabolism.jpg';
import sleepRecoveryImage from '../assets/editorial/sleep-recovery.jpg';
import brainFocusImage from '../assets/editorial/brain-focus.jpg';
import gutHealthImage from '../assets/editorial/gut-health.jpg';
import wellnessImage from '../assets/editorial/wellness.jpg';
import supplementLabelImage from '../assets/editorial/guide-supplement-label.jpg';
import usefulReviewImage from '../assets/editorial/guide-useful-review.jpg';

export type EditorialItem = {
  title: string;
  description: string;
  href: string;
  label: string;
  category: string;
  image?: { src: ImageMetadata | string; alt: string };
};

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  focus: string[];
  accent: string;
  image?: { src: ImageMetadata; alt: string };
};

export const categories: Category[] = [
  {
    slug: 'supplements',
    title: 'Supplements',
    eyebrow: 'The essentials',
    description: 'A clearer way to explore supplement labels, ingredients, evidence, and the questions worth asking before you buy.',
    focus: ['Ingredients', 'Labels', 'Evidence'],
    accent: 'sage',
    image: { src: supplementsImage, alt: 'Supplement bottles and capsules beside a comparison chart' },
  },
  {
    slug: 'weight-metabolism',
    title: 'Weight & Metabolism',
    eyebrow: 'The wider picture',
    description: 'Context for a category often crowded with bold promises. We look at claims, trade-offs, and what product information can actually tell you.',
    focus: ['Claims', 'Formulas', 'Context'],
    accent: 'clay',
    image: { src: weightMetabolismImage, alt: 'Breakfast bowl, fruit, water and a measuring tape on a table' },
  },
  {
    slug: 'sleep-recovery',
    title: 'Sleep & Recovery',
    eyebrow: 'Rest, examined',
    description: 'An editorial home for sleep and recovery products, with attention to ingredients, practical use, and the limits of available evidence.',
    focus: ['Sleep', 'Recovery', 'Routines'],
    accent: 'blue',
    image: { src: sleepRecoveryImage, alt: 'Bedside table and a softly lit bedroom at night' },
  },
  {
    slug: 'brain-focus',
    title: 'Brain & Focus',
    eyebrow: 'Think clearly',
    description: 'A measured look at products marketed for focus and cognition, starting with transparent labels and well-framed evidence.',
    focus: ['Focus', 'Cognition', 'Evidence'],
    accent: 'lavender',
    image: { src: brainFocusImage, alt: 'Notebook, laptop and supplement bottle on a study desk' },
  },
  {
    slug: 'gut-health',
    title: 'Gut Health',
    eyebrow: 'Beyond the buzzwords',
    description: 'Guides to understanding gut health products, their ingredients, and the details that make comparisons useful.',
    focus: ['Probiotics', 'Fiber', 'Labels'],
    accent: 'peach',
    image: { src: gutHealthImage, alt: 'Supplement bottle, yogurt, berries and oats on a kitchen counter' },
  },
  {
    slug: 'wellness',
    title: 'Wellness',
    eyebrow: 'Everyday decisions',
    description: 'A broad editorial space for wellness products and habits, approached with curiosity, context, and a healthy respect for uncertainty.',
    focus: ['Daily life', 'Products', 'Perspective'],
    accent: 'mint',
    image: { src: wellnessImage, alt: 'Supplement bottle, glass of water and notebook on a sunlit table' },
  },
];

export const guides: EditorialItem[] = [
  {
    title: 'How to read a supplement label',
    description: 'A practical starting point for serving sizes, ingredient lists, amounts, and the claims around them.',
    href: '/guides/how-to-read-a-supplement-label/',
    label: 'Guide',
    category: 'Supplements',
    image: { src: supplementLabelImage, alt: 'Person reading the label on a supplement bottle' },
  },
  {
    title: 'What makes a useful supplement review?',
    description: 'The questions we think a review should answer before it reaches a verdict.',
    href: '/guides/what-makes-a-useful-review/',
    label: 'Editorial guide',
    category: 'Research',
    image: { src: usefulReviewImage, alt: 'Person comparing a supplement bottle with notes and a laptop' },
  },
];

export const mentalClarityArticles: EditorialItem[] = [
  {
    title: 'Mental Clarity: What It Means and What Can Affect It',
    description: 'What the phrase means, how it differs from focus and brain fog, and when a change deserves professional attention.',
    href: '/mental-clarity/',
    label: 'Pillar guide',
    category: 'Brain & Focus',
    image: { src: '/images/articles/mental-clarity/mental-clarity-card.jpg', alt: 'Open notebook, pen, and water on a sunlit desk' },
  },
  {
    title: 'How to Improve Mental Clarity: Practical Habits for Clearer Thinking',
    description: 'A practical guide to sleep, movement, attention and daily routines without promising a quick fix.',
    href: '/how-to-improve-mental-clarity/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
    image: { src: '/images/articles/how-to-improve-mental-clarity/how-to-improve-mental-clarity-card.jpg', alt: 'Person writing a checklist beside a laptop and tea' },
  },
  {
    title: 'How to Improve Mental Clarity Without Coffee: Practical Options',
    description: 'Coffee-free ways to approach a difficult task, with clear limits on caffeine and health claims.',
    href: '/how-to-improve-mental-clarity-without-coffee/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
    image: { src: '/images/articles/how-to-improve-mental-clarity-without-coffee/how-to-improve-mental-clarity-without-coffee-card.jpg', alt: 'Herbal tea and lemon water beside a notebook' },
  },
  {
    title: 'Why Do I Lose Focus in the Afternoon? Possible Reasons to Consider',
    description: 'An evidence-aware explanation of an afternoon focus dip, what to observe and when to seek care.',
    href: '/why-do-i-lose-focus-in-the-afternoon/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
    image: { src: '/images/articles/why-do-i-lose-focus-in-the-afternoon/why-do-i-lose-focus-in-the-afternoon-card.jpg', alt: 'Person resting their head at a desk in afternoon light' },
  },
];

export const oralProbioticsArticles: EditorialItem[] = [
  {
    title: 'Oral Probiotics: What They Are and What the Evidence Says',
    description: 'A clear introduction to oral probiotics, the oral microbiome, and the limits of research on breath and gum health.',
    href: '/oral-probiotics/',
    label: 'Pillar guide',
    category: 'Supplements',
    image: { src: '/images/articles/oral-probiotics/oral-probiotics-card.jpg', alt: 'Capsule jar, toothbrush, and water by a bathroom sink' },
  },
  {
    title: 'What Is the Oral Microbiome?',
    description: 'How microbes live in the mouth, what can affect them, and which daily dental habits have established value.',
    href: '/oral-microbiome/',
    label: 'Supporting guide',
    category: 'Supplements',
    image: { src: '/images/articles/oral-microbiome/oral-microbiome-card.jpg', alt: 'Toothbrushes, floss, and water by a bathroom sink' },
  },
  {
    title: 'Oral Probiotics for Bad Breath: What Does the Evidence Say?',
    description: 'A careful look at the mixed clinical evidence for probiotics and persistent bad breath.',
    href: '/oral-probiotics-for-bad-breath/',
    label: 'Supporting guide',
    category: 'Supplements',
    image: { src: '/images/articles/oral-probiotics-for-bad-breath/oral-probiotics-for-bad-breath-card.jpg', alt: 'Mouthwash, toothbrushes, mint, and capsules by a sink' },
  },
  {
    title: 'Oral Probiotics for Gum Health: Evidence and Limits',
    description: 'What studies of probiotics and gum health can and cannot tell us, alongside established dental care.',
    href: '/oral-probiotics-for-gum-health/',
    label: 'Supporting guide',
    category: 'Supplements',
    image: { src: '/images/articles/oral-probiotics-for-gum-health/oral-probiotics-for-gum-health-card.jpg', alt: 'Toothbrushes, floss, capsules, and water by a sink' },
  },
];

export const jointHealthArticles: EditorialItem[] = [
  {
    title: 'Joint Health: Everyday Habits, Mobility, and Evidence',
    description: 'An evidence-aware overview of joint function, sustainable habits, symptoms that need assessment, and supplement claims.',
    href: '/joint-health/',
    label: 'Pillar guide',
    category: 'Wellness',
    image: { src: '/images/articles/joint-health/joint-health-card.jpg', alt: 'Person holding a knee while seated on an exercise mat' },
  },
  {
    title: 'Joint Mobility Exercises: Movement Basics for Everyday Life',
    description: 'How range of motion, strength and low-impact activity differ, with safe starting points and limits.',
    href: '/joint-mobility-exercises/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/joint-mobility-exercises/joint-mobility-exercises-card.jpg', alt: 'Woman doing a side lunge on an exercise mat' },
  },
  {
    title: 'Joint Stiffness After Rest: What to Notice and When to Seek Care',
    description: 'A careful guide to stiffness after rest, symptom context and when a clinician should assess a change.',
    href: '/joint-stiffness-after-rest/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/joint-stiffness-after-rest/joint-stiffness-after-rest-card.jpg', alt: 'Woman stretching a leg while sitting on a bed' },
  },
  {
    title: 'Joint Health Supplements: Evidence and Label Questions',
    description: 'How to assess ingredient studies, product labels and the limits of joint-support claims.',
    href: '/joint-health-supplements/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/joint-health-supplements/joint-health-supplements-card.jpg', alt: 'Supplement bottles beside a knee model and water' },
  },
];

export const bloodSugarBalanceArticles: EditorialItem[] = [
  {
    title: 'Blood Sugar Balance: What It Means and What Affects It',
    description: 'An evidence-aware overview of everyday glucose changes, meals, movement, and supplement-claim limits.',
    href: '/blood-sugar-balance/',
    label: 'Pillar guide',
    category: 'Weight & Metabolism',
    image: { src: '/images/articles/blood-sugar-balance/blood-sugar-balance-card.jpg', alt: 'Yogurt with berries, nuts, and fruit on a table' },
  },
  {
    title: 'How Food Affects Blood Sugar',
    description: 'A practical look at carbohydrates, meal composition, and why individual context matters.',
    href: '/how-food-affects-blood-sugar/',
    label: 'Supporting guide',
    category: 'Weight & Metabolism',
    image: { src: '/images/articles/how-food-affects-blood-sugar/how-food-affects-blood-sugar-card.jpg', alt: 'Salmon, vegetables, and grains served on a plate' },
  },
  {
    title: 'Walking After Eating and Blood Sugar',
    description: 'What post-meal movement may do, how to begin, and when medication safety changes the plan.',
    href: '/walking-after-eating-blood-sugar/',
    label: 'Supporting guide',
    category: 'Weight & Metabolism',
    image: { src: '/images/articles/walking-after-eating-blood-sugar/walking-after-eating-blood-sugar-card.jpg', alt: 'Woman walking along a tree-lined sidewalk' },
  },
  {
    title: 'Blood Sugar Supplements: Evidence, Labels, and Safety',
    description: 'How to assess supplement claims without mistaking ingredient studies for product proof.',
    href: '/blood-sugar-supplements/',
    label: 'Supporting guide',
    category: 'Weight & Metabolism',
    image: { src: '/images/articles/blood-sugar-supplements/blood-sugar-supplements-card.jpg', alt: 'Supplement bottles and capsules beside a meal' },
  },
];

export const prostateHealthArticles: EditorialItem[] = [
  {
    title: 'Prostate Health: What the Prostate Does and When to Seek Care',
    description: 'Prostate function, common conditions, symptom boundaries, screening decisions, and supplement-claim limits.',
    href: '/prostate-health/',
    label: 'Pillar guide',
    category: 'Wellness',
    image: { src: '/images/articles/prostate-health/prostate-health-card.jpg', alt: 'Middle-aged man seated at home beside a glass of water' },
  },
  {
    title: 'Signs of Prostate Problems: Symptoms and When to Seek Care',
    description: 'How to recognize a concerning change without treating a symptom list as a diagnosis.',
    href: '/signs-of-prostate-problems/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/signs-of-prostate-problems/signs-of-prostate-problems-card.jpg', alt: 'Middle-aged man seated on a bed holding a glass of water' },
  },
  {
    title: 'Foods for Prostate Health: What Diet Can and Cannot Do',
    description: 'A balanced look at eating patterns, individual foods, and disease-prevention claim limits.',
    href: '/foods-for-prostate-health/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/foods-for-prostate-health/foods-for-prostate-health-card.jpg', alt: 'Salmon, tomatoes, greens, berries, and nuts on a table' },
  },
  {
    title: 'Do Prostate Supplements Work? Evidence and Safety',
    description: 'How to assess ingredient research, finished-product evidence, labels and safety.',
    href: '/do-prostate-supplements-work/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/do-prostate-supplements-work/do-prostate-supplements-work-card.jpg', alt: 'Man examining a supplement bottle at a table' },
  },
];

export const hearingHealthArticles: EditorialItem[] = [
  {
    title: 'Hearing Health: How to Protect Your Ears and Recognize Changes',
    description: 'How hearing works, noise protection, changes to notice, professional care and the limits of supplement claims.',
    href: '/hearing-health/',
    label: 'Pillar guide',
    category: 'Wellness',
    image: { src: '/images/articles/hearing-health/hearing-health-card.jpg', alt: 'Headphones and earplugs arranged on a table' },
  },
  {
    title: 'Signs of Hearing Loss: What to Notice and When to Get Help',
    description: 'Common communication changes, hearing tests and symptoms that need prompt attention.',
    href: '/signs-of-hearing-loss/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/signs-of-hearing-loss/signs-of-hearing-loss-card.jpg', alt: 'Man cupping an ear while listening to another person' },
  },
  {
    title: 'How to Protect Your Hearing From Everyday Loud Noise',
    description: 'Volume, duration, distance and hearing protection at home, at work and at events.',
    href: '/how-to-protect-your-hearing/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/how-to-protect-your-hearing/how-to-protect-your-hearing-card.jpg', alt: 'Headphones and earplugs on a desk' },
  },
  {
    title: 'Do Hearing Supplements Work? Evidence, Claims and Safety',
    description: 'How to assess hearing and tinnitus claims, finished-product evidence, labels and safety.',
    href: '/do-hearing-supplements-work/',
    label: 'Supporting guide',
    category: 'Wellness',
    image: { src: '/images/articles/do-hearing-supplements-work/do-hearing-supplements-work-card.jpg', alt: 'Supplement bottles, capsules, and a notebook on a desk' },
  },
];

export { reviewItems };

export const primaryNav = [
  ...categories.map(({ slug, title }) => ({ label: title, href: `/categories/${slug}/` })),
  { label: 'Research', href: '/research/' },
];

export const allRoutes = [
  '/',
  ...categories.map(({ slug }) => `/categories/${slug}/`),
  '/research/',
  ...guides.map(({ href }) => href),
  ...mentalClarityArticles.map(({ href }) => href),
  ...oralProbioticsArticles.map(({ href }) => href),
  ...jointHealthArticles.map(({ href }) => href),
  ...bloodSugarBalanceArticles.map(({ href }) => href),
  ...prostateHealthArticles.map(({ href }) => href),
  ...hearingHealthArticles.map(({ href }) => href),
  ...reviewItems.map(({ href }) => href),
  '/about/',
  '/how-we-review/',
  '/editorial-policy/',
  '/affiliate-disclosure/',
  '/privacy-policy/',
  '/terms/',
  '/contact/',
];
