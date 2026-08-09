export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;


export const partnersList = [
]  as const;

export const partners = [
  { name: "Shopify Partner", logo: "/partners/1.png" },
  { name: "Amazon Ads Advanced Partner", logo: "/partners/2.png" },
  { name: "Google Ads Certified Partner", logo: "/partners/3.png" },
  { name: "Meta Business Partners", logo: "/partners/4.png" },
  { name: "jio hotstar", logo: "/partners/5.png" },
] as const;

// Hardcoded portfolio projects. Field names mirror what ProjectTemplate
// (the /work/[id] detail page) expects directly, so the detail route can
// pass these objects through with no remapping. Card-grid views (WorkClient,
// FeaturedWork) project just the fields they need.
export const projects = [
  {
    id: "luxe-living",
    brand: "Luxe Living Co.",
    category: "Retail",
    desc: "3.2× ROAS in 90 days with full-funnel performance creative.",
    date: "2026-03-01",
    coverImage: "",
    cardMetrics: [
      { value: "3.2×", label: "ROAS in 90 Days" },
      { value: "40%", label: "Lower CAC" },
    ],
    services: ["Performance Marketing", "Creative Direction", "CRO"],
    heroPreTitle: "How We Helped ",
    heroHighlight: "Luxe Living Co.",
    heroPostTitle: " Scale With Full-Funnel Creative.",
    description:
      "Luxe Living Co. needed a performance engine that didn't sacrifice brand feel. We rebuilt their funnel end to end — from ad creative through to checkout — and turned it into a predictable growth channel.",
    bannerImage: "",
    stats: [
      { stat: "3.2×", label: "ROAS in 90 Days" },
      { stat: "40%", label: "Lower CAC" },
      { stat: "₹10L+", label: "Monthly Ad Revenue" },
    ],
    challenges: [
      { title: "Rising Ad Costs", desc: "Acquisition costs on paid social had crept up quarter over quarter with no clear lever to pull." },
      { title: "Generic Creative", desc: "Ad creative wasn't differentiated from category competitors, so campaigns leaned entirely on discounting." },
    ],
    strategies: [
      { title: "Full-Funnel Creative System", desc: "Built a testing pipeline that paired UGC-style hooks with brand-led landing experiences." },
      { title: "Always-On Testing", desc: "Ran structured weekly creative tests to keep cost-per-result trending down instead of plateauing." },
    ],
    images: [],
    videoUrl: "",
    outcomes: [
      { title: "Revenue Growth", desc: "3.2× ROAS sustained across a 90-day scaling window." },
      { title: "Efficiency", desc: "Customer acquisition cost dropped 40% versus the prior quarter." },
    ],
    learnings: [
      { title: "Creative Is the Lever", desc: "Once targeting was optimized, creative freshness was the biggest driver of performance." },
    ],
    quote: "The team didn't just run ads — they understood the brand well enough to know which creative would actually convert.",
  },
  {
    id: "nova-hospitality",
    brand: "Nova Hospitality",
    category: "Hospitality & Food",
    desc: "68% increase in direct bookings through brand refresh & CRO.",
    date: "2026-02-10",
    coverImage: "",
    cardMetrics: [
      { value: "68%", label: "More Direct Bookings" },
      { value: "2.1×", label: "Site Conversion" },
    ],
    services: ["Brand Strategy", "Website & CRO", "Paid Search"],
    heroPreTitle: "How We Helped ",
    heroHighlight: "Nova Hospitality",
    heroPostTitle: " Win Back Direct Bookings.",
    description:
      "Nova Hospitality was losing margin to OTA commissions. We refreshed the brand, rebuilt the booking flow, and shifted demand back to their own site.",
    bannerImage: "",
    stats: [
      { stat: "68%", label: "Increase in Direct Bookings" },
      { stat: "2.1×", label: "Website Conversion Rate" },
      { stat: "22%", label: "Lower Cost per Booking" },
    ],
    challenges: [
      { title: "OTA Dependence", desc: "Over 70% of bookings came through third-party platforms, eating into margin on every stay." },
      { title: "Dated Booking Flow", desc: "The direct booking experience was slow and lost most visitors before checkout." },
    ],
    strategies: [
      { title: "Brand Refresh", desc: "Repositioned the property around a clearer story and consistent visual identity across channels." },
      { title: "Conversion-Led Rebuild", desc: "Rebuilt the booking flow around speed and clarity, cutting steps to reservation in half." },
    ],
    images: [],
    videoUrl: "",
    outcomes: [
      { title: "Direct Revenue", desc: "68% more bookings came directly through the property's own site." },
      { title: "Margin Recovered", desc: "Reduced OTA dependence, recovering commission previously lost to third parties." },
    ],
    learnings: [
      { title: "Speed Wins Bookings", desc: "Shaving steps off the booking flow had a bigger impact than any single campaign change." },
    ],
    quote: "Guests started booking directly again — the site finally felt as good as the property does.",
  },
  {
    id: "aura-jewels",
    brand: "Aura Jewels",
    category: "Fashion & Lifestyle",
    desc: "2.5M impressions & 40% lift in brand recall across India.",
    date: "2026-01-18",
    coverImage: "",
    cardMetrics: [
      { value: "2.5M", label: "Impressions" },
      { value: "40%", label: "Brand Recall Lift" },
    ],
    services: ["Brand Campaign", "Social Content", "Influencer"],
    heroPreTitle: "How We Helped ",
    heroHighlight: "Aura Jewels",
    heroPostTitle: " Build National Brand Recall.",
    description:
      "Aura Jewels wanted to move beyond performance ads and build a brand people actually remembered. We built a campaign system around storytelling, not just discounts.",
    bannerImage: "",
    stats: [
      { stat: "2.5M", label: "Campaign Impressions" },
      { stat: "40%", label: "Lift in Brand Recall" },
      { stat: "3.4×", label: "Engagement Rate" },
    ],
    challenges: [
      { title: "Low Recall", desc: "Despite steady sales, unaided brand recall was low compared to category leaders." },
      { title: "Discount Dependence", desc: "Most marketing spend was tied to promotions rather than brand building." },
    ],
    strategies: [
      { title: "Story-Led Campaign", desc: "Built a content series around craftsmanship and heritage instead of price." },
      { title: "Creator Partnerships", desc: "Partnered with a curated set of creators to extend reach into new, relevant audiences." },
    ],
    images: [],
    videoUrl: "",
    outcomes: [
      { title: "Reach", desc: "2.5M+ impressions delivered across the campaign window." },
      { title: "Recall", desc: "Unaided brand recall lifted 40% in post-campaign surveys." },
    ],
    learnings: [
      { title: "Story Beats Discount", desc: "Brand-led content outperformed discount-led ads on both recall and engagement." },
    ],
    quote: "For the first time, our marketing felt like it was building something, not just chasing a sale.",
  },
  {
    id: "nimbus-activewear",
    brand: "Nimbus Activewear",
    category: "E-commerce",
    desc: "3× online revenue in one year through Shopify migration & performance media.",
    date: "2025-12-05",
    coverImage: "",
    cardMetrics: [
      { value: "3×", label: "Online Revenue" },
      { value: "55%", label: "Faster Site Speed" },
    ],
    services: ["Shopify Development", "Performance Marketing", "SEO"],
    heroPreTitle: "How We Helped ",
    heroHighlight: "Nimbus Activewear",
    heroPostTitle: " Triple Online Revenue.",
    description:
      "Nimbus Activewear was outgrowing their storefront and their ad spend wasn't keeping pace with growth. We migrated them to Shopify and rebuilt acquisition from the ground up.",
    bannerImage: "",
    stats: [
      { stat: "3×", label: "Online Revenue in 12 Months" },
      { stat: "55%", label: "Faster Page Load" },
      { stat: "1.8×", label: "Repeat Purchase Rate" },
    ],
    challenges: [
      { title: "Slow, Dated Storefront", desc: "The old platform couldn't handle traffic spikes and was losing sales to load times alone." },
      { title: "Flat Ad Performance", desc: "Paid media had plateaued and blended ROAS was trending down." },
    ],
    strategies: [
      { title: "Shopify Migration", desc: "Rebuilt the storefront on Shopify with a performance-first theme and streamlined checkout." },
      { title: "Full-Funnel Media Rebuild", desc: "Rebuilt campaign structure across Meta and Google around new, faster-loading landing pages." },
    ],
    images: [],
    videoUrl: "",
    outcomes: [
      { title: "Revenue Growth", desc: "Online revenue tripled within 12 months of launch." },
      { title: "Retention", desc: "Repeat purchase rate climbed 1.8× as the faster site improved the post-purchase experience." },
    ],
    learnings: [
      { title: "Platform Is Infrastructure", desc: "Fixing the storefront foundation made every downstream marketing dollar work harder." },
    ],
    quote: "Migrating our store felt risky, but revenue tripled and we finally have a site that can keep up with demand.",
  },
];

// Hardcoded insights (blog) posts. `body` is a list of plain paragraphs —
// no rich-text renderer needed since there's no CMS behind this anymore.
export const insightPosts = [
  {
    id: "2026-performance-creative-playbook",
    slug: "2026-performance-creative-playbook",
    title: "The 2026 Performance Creative Playbook",
    categories: ["Growth Strategy"],
    excerpt: "How top D2C brands pair data with storytelling to scale profitably.",
    publishedAt: "2026-03-12",
    author: "TenLabs Team",
    readTime: "6 min read",
    image: "",
    body: [
      "The brands scaling fastest in 2026 aren't the ones with the biggest budgets — they're the ones treating creative as a testing system rather than a one-off asset.",
      "That means shipping variants weekly, reading performance data honestly, and being willing to retire a 'winning' ad the moment its returns start to decay.",
      "Pairing that testing discipline with real storytelling — not just discount messaging — is what separates campaigns that scale sustainably from ones that burn out after a strong first week.",
    ],
  },
  {
    id: "shopify-2-conversion-patterns",
    slug: "shopify-2-conversion-patterns",
    title: "Shopify 2.0: Conversion Patterns That Work",
    categories: ["E-commerce"],
    excerpt: "Seven UX patterns we use to lift add-to-cart rates across categories.",
    publishedAt: "2026-02-28",
    author: "TenLabs Team",
    readTime: "5 min read",
    image: "",
    body: [
      "Most Shopify storefronts lose conversion long before checkout — in the product grid and product page, where small friction compounds fast.",
      "The patterns that consistently move add-to-cart rates: sticky add-to-cart on mobile, honest stock and shipping messaging above the fold, and product imagery that shows scale and context, not just the item on white.",
      "None of these require a redesign. They're incremental changes that compound when tested and shipped consistently.",
    ],
  },
  {
    id: "building-brand-recall",
    slug: "building-brand-recall",
    title: "Building Brand Recall in Crowded Markets",
    categories: ["Branding"],
    excerpt: "Why consistency beats virality when you're playing the long game.",
    publishedAt: "2026-02-10",
    author: "TenLabs Team",
    readTime: "4 min read",
    image: "",
    body: [
      "A single viral moment rarely builds a brand people remember — it builds a spike in a graph that flattens out within weeks.",
      "Recall comes from consistency: the same visual language, tone, and promise showing up in the same way across every touchpoint for long enough that it becomes recognizable without a logo attached.",
      "That's a slower path than chasing virality, but it's the one that compounds instead of resetting to zero after every campaign.",
    ],
  },
];

export const solutions = [
  {
    question: "Need More Sales?",
    title: "Performance Marketing",
    description: "Paid media, funnel optimization, and conversion-led campaigns.",
  },
  {
    question: "Need Better Brand Recall?",
    title: "Creative & Branding",
    description: "Identity systems, storytelling, and scroll-stopping creative.",
  },
  {
    question: "Need Better Conversion?",
    title: "Website & Shopify",
    description: "High-performance storefronts, UX, and Shopify growth.",
  },
] as const;

export const industries = [
  { name: "Home Decor", icon: "Sofa" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Healthcare", icon: "Stethoscope" },
  { name: "Fashion", icon: "Shirt" },
  { name: "Jewellery", icon: "Gem" },
  { name: "Food & Beverage", icon: "UtensilsCrossed" },
  { name: "Spiritual Stays", icon: "Landmark" },
  { name: "Automobile", icon: "Car" },
] as const;

export const whyUs = [
  {
    title: "Performance + Creative under one roof",
    description: "Strategy, design, and media aligned from day one — no silos.",
  },
  {
    title: "Multi-industry experience",
    description: "350+ brands across decor, fashion, F&B, healthcare, and more.",
  },
  {
    title: "Fast execution",
    description: "Agile pods ship campaigns in weeks, not quarters.",
  },
  {
    title: "Data-driven decisions",
    description: "Every creative and dollar tied to measurable business outcomes.",
  },
] as const;

export const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Performance Marketing", href: "/solutions" },
      { label: "Creative & Branding", href: "/solutions" },
      { label: "Website & Shopify", href: "/solutions" },
      { label: "SEO & Content", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/work" },
      { label: "Industries", href: "/#industries" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  },
] as const;
