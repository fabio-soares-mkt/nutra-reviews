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
  image?: { src: ImageMetadata; alt: string };
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
  },
  {
    title: 'How to Improve Mental Clarity: Practical Habits for Clearer Thinking',
    description: 'A practical guide to sleep, movement, attention and daily routines without promising a quick fix.',
    href: '/how-to-improve-mental-clarity/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
  },
  {
    title: 'How to Improve Mental Clarity Without Coffee: Practical Options',
    description: 'Coffee-free ways to approach a difficult task, with clear limits on caffeine and health claims.',
    href: '/how-to-improve-mental-clarity-without-coffee/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
  },
  {
    title: 'Why Do I Lose Focus in the Afternoon? Possible Reasons to Consider',
    description: 'An evidence-aware explanation of an afternoon focus dip, what to observe and when to seek care.',
    href: '/why-do-i-lose-focus-in-the-afternoon/',
    label: 'Supporting guide',
    category: 'Brain & Focus',
  },
];

export const oralProbioticsArticles: EditorialItem[] = [
  {
    title: 'Oral Probiotics: What They Are and What the Evidence Says',
    description: 'A clear introduction to oral probiotics, the oral microbiome, and the limits of research on breath and gum health.',
    href: '/oral-probiotics/',
    label: 'Pillar guide',
    category: 'Supplements',
  },
  {
    title: 'What Is the Oral Microbiome?',
    description: 'How microbes live in the mouth, what can affect them, and which daily dental habits have established value.',
    href: '/oral-microbiome/',
    label: 'Supporting guide',
    category: 'Supplements',
  },
  {
    title: 'Oral Probiotics for Bad Breath: What Does the Evidence Say?',
    description: 'A careful look at the mixed clinical evidence for probiotics and persistent bad breath.',
    href: '/oral-probiotics-for-bad-breath/',
    label: 'Supporting guide',
    category: 'Supplements',
  },
  {
    title: 'Oral Probiotics for Gum Health: Evidence and Limits',
    description: 'What studies of probiotics and gum health can and cannot tell us, alongside established dental care.',
    href: '/oral-probiotics-for-gum-health/',
    label: 'Supporting guide',
    category: 'Supplements',
  },
];

export const jointHealthArticles: EditorialItem[] = [
  {
    title: 'Joint Health: Everyday Habits, Mobility, and Evidence',
    description: 'An evidence-aware overview of joint function, sustainable habits, symptoms that need assessment, and supplement claims.',
    href: '/joint-health/',
    label: 'Pillar guide',
    category: 'Wellness',
  },
  {
    title: 'Joint Mobility Exercises: Movement Basics for Everyday Life',
    description: 'How range of motion, strength and low-impact activity differ, with safe starting points and limits.',
    href: '/joint-mobility-exercises/',
    label: 'Supporting guide',
    category: 'Wellness',
  },
  {
    title: 'Joint Stiffness After Rest: What to Notice and When to Seek Care',
    description: 'A careful guide to stiffness after rest, symptom context and when a clinician should assess a change.',
    href: '/joint-stiffness-after-rest/',
    label: 'Supporting guide',
    category: 'Wellness',
  },
  {
    title: 'Joint Health Supplements: Evidence and Label Questions',
    description: 'How to assess ingredient studies, product labels and the limits of joint-support claims.',
    href: '/joint-health-supplements/',
    label: 'Supporting guide',
    category: 'Wellness',
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
  ...reviewItems.map(({ href }) => href),
  '/about/',
  '/how-we-review/',
  '/editorial-policy/',
  '/affiliate-disclosure/',
  '/privacy-policy/',
  '/terms/',
  '/contact/',
];
