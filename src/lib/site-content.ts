export const nav = {
  links: [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ],
};

export const steps = [
  {
    title: "Open a window",
    description:
      "Publish a 接龙 campaign with a title, rich-text details, photos, and the products on offer. Set an order deadline.",
    icon: "CalendarClock",
  },
  {
    title: "Collect demand",
    description:
      "Share one link or QR code. Shoppers order within the window, choose pickup or delivery, and pay by bank transfer — no guesswork on quantities.",
    icon: "Users",
  },
  {
    title: "Batch-produce",
    description:
      "When the window closes, see every order rolled up into one production sheet: totals per product, ready for the kitchen.",
    icon: "ClipboardList",
  },
  {
    title: "Hand out or deliver",
    description:
      "Set multiple pickup points and delivery zones with their own time windows. Shoppers see exactly where and when, and get an SMS when their order is ready.",
    icon: "Truck",
  },
] as const;

export const features = [
  {
    title: "Campaign builder",
    description:
      "Rich-text editor for campaign details with inline images, save-as-draft, and a true shopper preview before you publish.",
    icon: "FileEdit",
  },
  {
    title: "Product catalog",
    description:
      "Keep a reusable catalog with pricing, stock, and categories, or add one-off products straight on the campaign page.",
    icon: "Package",
  },
  {
    title: "Pickup points & delivery zones",
    description:
      "Several pickup points with map previews and daily time windows, plus delivery zones with minimum-order rules and optional under-minimum fees. Print per-pickup-point order lists for your helpers.",
    icon: "MapPin",
  },
  {
    title: "Production summary",
    description:
      "Orders automatically roll up into a per-product total, so you know exactly how much to cook or pack — no manual tallying.",
    icon: "ClipboardList",
  },
  {
    title: "Bank transfer & Online EFTPOS",
    description:
      "Shoppers pay by direct bank transfer with a screenshot as proof, or — once enabled for your account — approve an Online EFTPOS payment in their own banking app and have it confirmed automatically. No card fees either way.",
    icon: "Landmark",
  },
  {
    title: "Built for sharing",
    description:
      "Every campaign gets a link and QR code, with an editable WeChat-ready share text and a custom share card. Shoppers tap straight through to ordering inside WeChat, no app install.",
    icon: "Share2",
  },
  {
    title: "Bundles & promotions",
    description:
      "Sell gift boxes with per-box flavour choice or blind boxes, stack multi-buy discounts, pin hero items to the top, and run Xiaohongshu promos with a shopper screenshot.",
    icon: "Gift",
  },
  {
    title: "Merchant dashboard",
    description:
      "Income trend charts, per-pickup-point stats, popular products, and order filters with CSV export — plus a public merchant homepage showing your recent 接龙.",
    icon: "LineChart",
  },
  {
    title: "Shopper-friendly ordering",
    description:
      "Live countdown, remaining-stock counts, a cart preview, a numbered 接龙 order list for social proof, and a personal 我的接龙 page with frequently bought items.",
    icon: "ShoppingBasket",
  },
] as const;

export const comparison = {
  heading: "Batching, not just pre-ordering",
  body:
    "Generic pre-order and pickup tools take orders as they come and expect you to prepare on demand. Jielong is built around a different model: everyone orders inside one time-boxed window, and only once it closes do you know the full picture — so you produce once, for everyone, instead of one order at a time.",
} as const;

export type PlanFeature = { label: string; included: boolean };

export type Plan = {
  id: "starter" | "growth" | "pro";
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  highlighted?: boolean;
  cta: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For your first few campaigns",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Start free",
    features: [
      "Up to 4 campaigns / month",
      "Up to 40 orders per campaign",
      "1 pickup point",
      "Product catalog & rich-text editor",
      "Bank transfer with proof upload; Online EFTPOS on application",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For merchants running weekly campaigns",
    monthlyPrice: 79,
    yearlyPrice: 63,
    highlighted: true,
    cta: "Choose Growth",
    features: [
      "Unlimited campaigns & orders",
      "Unlimited pickup points & time slots",
      "Delivery zones with minimum-order rules",
      "Draft, preview & duplicate campaigns",
      "Order & production summary exports",
      "Priority email & chat support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For multi-staff and multi-site operations",
    monthlyPrice: 149,
    yearlyPrice: 119,
    cta: "Choose Pro",
    features: [
      "Everything in Growth",
      "Multiple staff accounts & roles",
      "Custom branded ordering link",
      "Advanced sales & production reports",
      "Dedicated onboarding",
      "Phone support",
    ],
  },
];

export const addOns = [
  {
    name: "Custom domain",
    price: "$249 one-time",
    description: "Point your own domain (e.g. order.yourbrand.co.nz) at your Jielong campaigns.",
  },
  {
    name: "Branded share cards",
    price: "$149 one-time",
    description: "Your logo and colours on the link preview shoppers see in WeChat and WhatsApp.",
  },
  {
    name: "Extra staff seats",
    price: "$15 / seat / month",
    description: "Add more merchant logins beyond your plan's included seats.",
  },
] as const;

export const faqs = [
  {
    question: "What happens if a campaign doesn't hit my minimum quantity?",
    answer:
      "You're always in control — nothing produces automatically. Review the order summary when the window closes, and either fulfil, extend the window, or cancel and refund affected orders.",
  },
  {
    question: "How does payment work?",
    answer:
      "By default shoppers pay by direct bank transfer to your account — the payment page shows your details with copy buttons — and upload a screenshot as proof, which you confirm in the order list. Online EFTPOS is also available on application: shoppers approve the payment in their own banking app and the order is marked paid automatically. Either way no card details are stored and there are no card-processing fees.",
  },
  {
    question: "Can I run more than one campaign at a time?",
    answer:
      "Yes. Each campaign has its own window, products, and pickup points, so you can run several in parallel — for example a weekly staple alongside a one-off seasonal batch.",
  },
  {
    question: "What if a shopper misses the deadline?",
    answer:
      "You can reopen an ended 接龙 for late orders within 2 days, or end an ongoing one early whenever you like. Shoppers who reopen the link are reminded of any unpaid orders.",
  },
  {
    question: "Can shoppers order more than once on the same campaign?",
    answer:
      "Yes — a shopper can place multiple orders on one campaign, and your production summary aggregates across all of them per product.",
  },
  {
    question: "Do I need a website or app of my own?",
    answer:
      "No. You publish a campaign and share one link — it opens directly in a browser, including inside WeChat and WhatsApp webviews, with no app install required for shoppers.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, upgrade or downgrade at any time from your merchant console. Changes apply from your next billing cycle.",
  },
  {
    question: "Is there a contract or lock-in?",
    answer:
      "No lock-in on any plan. Starter is free indefinitely; Growth and Pro are billed monthly or yearly and can be cancelled anytime.",
  },
] as const;
