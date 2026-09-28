export type InstitutionalPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const institutionalPages: InstitutionalPage[] = [
  {
    slug: 'about', title: 'About Nutra Lens', eyebrow: 'Why we are here',
    description: 'Learn what Nutra Lens is building and the principles behind its supplement and wellness coverage.',
    intro: 'Nutra Lens is an emerging editorial resource for people who want to understand supplements and wellness products more clearly.',
    sections: [
      { heading: 'A closer look', paragraphs: ['Product pages are built to persuade. Our aim is to slow the conversation down and examine the details: what a product contains, what it claims, what is known, and what remains uncertain.', 'We are beginning with a small library of practical guides and a transparent review framework. Category coverage and product reviews will expand only as we can support them with useful, clearly sourced work.'] },
      { heading: 'What guides the site', paragraphs: ['We value clarity over certainty, useful context over sweeping promises, and a clear line between editorial judgment and commercial activity. Our editorial policy and review process explain these commitments in more detail.'] },
      { heading: 'Where we are now', paragraphs: ['This is the first version of Nutra Lens. We have not published product reviews or claimed laboratory testing, medical oversight, or a history of coverage that does not yet exist. We will identify contributors and methods as coverage develops.'] },
    ],
  },
  {
    slug: 'how-we-review', title: 'How We Review', eyebrow: 'Our framework',
    description: 'See the criteria Nutra Lens intends to apply when reviewing supplements and wellness products.',
    intro: 'Our review framework is designed to make product information easier to inspect and compare. Product reviews are planned; this page describes the standards we intend to use.',
    sections: [
      { heading: '1. Identify the product and its claims', paragraphs: ['We will name the specific product and formulation under review, record the information available at review time, and distinguish a manufacturer’s claim from an independently supported conclusion.'] },
      { heading: '2. Examine the label and composition', paragraphs: ['We will check disclosed ingredients, amounts, serving sizes, directions, and warnings. If a blend or missing quantity limits comparison, we will say so.'] },
      { heading: '3. Consider the evidence', paragraphs: ['We will look for relevant, reliable sources and describe how closely they apply to the product, ingredient, amount, and question at hand. Evidence about an ingredient should not automatically be treated as evidence about a finished product.'] },
      { heading: '4. Weigh practical terms', paragraphs: ['Price, recurring charges, return policies, availability, and manufacturer information can matter to a purchasing decision. These details can change, so readers should confirm them with the seller.'] },
      { heading: '5. Explain the verdict and its limits', paragraphs: ['A conclusion should make its reasoning visible, acknowledge uncertainty, and identify safety considerations without giving personal medical advice. Reviews should be revisited when material facts change.'] },
      { heading: 'Commercial transparency', paragraphs: ['Future pages may include affiliate links. Any such relationship will be disclosed, and it will not determine the editorial conclusion. No affiliate links are published yet. Technical support for future click events is in place, but no product CTA is live.'] },
    ],
  },
  {
    slug: 'editorial-policy', title: 'Editorial Policy', eyebrow: 'Our standards',
    description: 'Read the editorial principles, sourcing approach, and correction standards for Nutra Lens.',
    intro: 'Nutra Lens aims to publish useful, careful information about supplements and wellness products. These standards guide how coverage will be developed and maintained.',
    sections: [
      { heading: 'Accuracy and sourcing', paragraphs: ['We distinguish product information, third-party research, expert interpretation, and our own analysis. Claims should be supported by sources relevant to the point being made. Where the evidence is mixed or limited, we will describe that limitation.'] },
      { heading: 'Editorial independence', paragraphs: ['Commercial relationships must be disclosed and should not dictate recommendations or conclusions. We do not present paid placement as independent editorial work.'] },
      { heading: 'Health content', paragraphs: ['Our material is general information, not diagnosis, treatment, or individualized advice. We avoid promises of outcomes and encourage readers to discuss personal health decisions with a qualified professional.'] },
      { heading: 'Updates and corrections', paragraphs: ['Product formulations, prices, and policies can change. We intend to review pages when material information changes and correct substantive errors promptly. A monitored contact channel will be added as the editorial operation grows.'] },
      { heading: 'Attribution', paragraphs: ['As coverage expands, articles and reviews should identify who prepared them, when they were published, and when they were materially updated. We will not assign credentials or experience that a contributor does not hold.'] },
    ],
  },
  {
    slug: 'affiliate-disclosure', title: 'Affiliate Disclosure', eyebrow: 'Commercial transparency',
    description: 'Understand how affiliate relationships may be handled by Nutra Lens.',
    intro: 'Nutra Lens may use affiliate links in future product coverage. No affiliate links are currently published. The site includes technical support for future click events, which requires a published affiliate CTA to fire.',
    sections: [
      { heading: 'How affiliate links may work', paragraphs: ['If we add affiliate links, we may receive a commission when a reader purchases through one. The reader’s price may or may not be affected, depending on the seller’s terms. We will label these links where they appear and update this page when the program is active.'] },
      { heading: 'Editorial separation', paragraphs: ['A potential commission should not decide which products are covered or what an editorial conclusion says. We intend to evaluate product information using the framework described in How We Review.'] },
      { heading: 'Check current terms', paragraphs: ['Prices, discounts, stock, guarantees, and return policies are set by sellers and can change. Confirm current terms before purchasing.'] },
    ],
  },
  {
    slug: 'privacy-policy', title: 'Privacy Policy', eyebrow: 'Your information',
    description: 'Read the initial privacy information for Nutra Lens.',
    intro: 'This policy describes Nutra Lens as updated September 28, 2026. It will be revised as accounts, forms, newsletters, measurement, or other data practices change.',
    sections: [
      { heading: 'Information you provide', paragraphs: ['This version of the site has no account registration, newsletter form, or contact form. It does not ask you to submit personal information through the website.'] },
      { heading: 'Technical information', paragraphs: ['Our hosting and network providers may process technical data needed to deliver the site, such as an IP address, browser information, requested pages, and security logs. Their retention and handling are governed by their own systems and applicable terms.'] },
      { heading: 'Cookies and measurement', paragraphs: ['Nutra Lens loads Google Tag Manager to manage site tags. Tags activated inside that container may process technical usage data; the container configuration is managed separately from this site code. The site code does not install Google Analytics directly, and no affiliate links are currently published. Third-party services linked from this site have their own privacy practices.'] },
      { heading: 'Changes and questions', paragraphs: ['We will update this policy when site features change. A monitored privacy contact channel is being established and will be published on the Contact page.'] },
    ],
  },
  {
    slug: 'terms', title: 'Terms of Use', eyebrow: 'Using the site',
    description: 'Read the initial terms for using Nutra Lens content.',
    intro: 'These terms apply to the first version of Nutra Lens, published September 28, 2026. By using the site, you agree to use its content responsibly.',
    sections: [
      { heading: 'General information', paragraphs: ['Content on Nutra Lens is provided for general educational purposes. It is not medical, legal, or financial advice and does not establish a professional relationship. Seek qualified advice for questions about your own health or circumstances.'] },
      { heading: 'Product information', paragraphs: ['We aim for accuracy, but product details and external terms can change. Verify labels, prices, warnings, availability, and seller policies with the current source before acting on them.'] },
      { heading: 'External links', paragraphs: ['Links to other sites are provided for context or convenience. We do not control their content, availability, or policies. Future commercial links will be disclosed.'] },
      { heading: 'Content use and updates', paragraphs: ['Nutra Lens content and original visual materials are provided for personal reading. Please do not republish them without permission. We may update the site and these terms as the publication develops.'] },
    ],
  },
  {
    slug: 'contact', title: 'Contact', eyebrow: 'Get in touch',
    description: 'Find the current contact status and future inquiry channels for Nutra Lens.',
    intro: 'We welcome thoughtful questions, corrections, and suggestions. A monitored public contact channel is being set up for Nutra Lens.',
    sections: [
      { heading: 'Corrections and editorial inquiries', paragraphs: ['Once the contact channel is available, this page will explain how to send a correction request, source suggestion, or editorial inquiry. We do not want to publish an unmonitored email address or a form that cannot deliver your message.'] },
      { heading: 'Medical questions', paragraphs: ['Nutra Lens cannot provide personal medical advice. Please bring questions about your health, medications, or treatment to a qualified health professional.'] },
    ],
  },
];
