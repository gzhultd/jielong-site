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
      "Share one link. Shoppers order within the window, choose pickup or delivery, and pay upfront — no guesswork on quantities.",
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
      "Set multiple pickup points and time slots, or deliver — shoppers see exactly where and when to collect their order.",
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
    title: "Multi pickup points",
    description:
      "Set several pickup locations, each with its own time slots — shoppers pick the one that works for them.",
    icon: "MapPin",
  },
  {
    title: "Production summary",
    description:
      "Orders automatically roll up into a per-product total, so you know exactly how much to cook or pack — no manual tallying.",
    icon: "ClipboardList",
  },
  {
    title: "Bank-transfer payments",
    description:
      "One-off payments via Akahu open banking — shoppers approve straight from their own banking app, no card fees to absorb.",
    icon: "Landmark",
  },
  {
    title: "Built for sharing",
    description:
      "Every campaign gets a link and a QR code — post it in your WeChat group and shoppers tap or scan straight through to ordering, no app install.",
    icon: "Share2",
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
      "Bank-transfer payments via Akahu",
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
      "Delivery orders",
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
      "Shoppers pay upfront through Akahu, NZ's open-banking network. They approve a one-off bank-transfer payment request from their own banking app — no card details stored, and typically lower fees than card processing.",
  },
  {
    question: "Can I run more than one campaign at a time?",
    answer:
      "Yes. Each campaign has its own window, products, and pickup points, so you can run several in parallel — for example a weekly staple alongside a one-off seasonal batch.",
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
