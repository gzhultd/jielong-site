import type { Dict } from "./types";

export const en: Dict = {
  htmlLang: "en",
  meta: {
    home: {
      title: "接龙 Jielong — Batch Group-Buy Ordering for NZ Merchants",
      description:
        "新西兰社群，就用新接龙. Publish a 接龙 campaign, collect orders from your WeChat group, batch-produce, then deliver or hand out at pickup — built for New Zealand merchants.",
    },
    pricing: {
      title: "Pricing — 接龙 Jielong",
      description:
        "Simple, transparent pricing for Jielong batch commerce campaigns. Start free, upgrade as your group-buy grows.",
    },
  },
  logo: { edition: "NZ Edition" },
  nav: {
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
    merchantLogin: "Merchant login",
    startFree: "Start free",
    openMenu: "Open menu",
    menuTitle: "Jielong — NZ Edition",
    switchLabel: "中文",
    switchAria: "切换到中文",
  },
  hero: {
    badge: "Built for the NZ group-buy community",
    titleLine1: "Publish a campaign. Collect orders.",
    titleLine2: "Batch-produce with confidence.",
    body: "Jielong (接龙) is a batch commerce platform for New Zealand merchants — publish a limited-time ordering window, let shoppers commit and pay by bank transfer or Online EFTPOS, then produce and fulfil every order together.",
    startFree: "Start free",
    viewPricing: "View pricing",
    note: "Free to start · No card required · Bank transfer or Online EFTPOS",
    alt: "The Jielong homepage on a phone — live campaigns, deadlines, and past campaigns",
  },
  howItWorks: {
    title: "How a 接龙 campaign works",
    subtitle: "Four steps from opening a window to handing over the last order.",
    stepLabel: "Step {n}",
    steps: [
      {
        title: "Publish a campaign",
        description:
          "Set up everything in one place: details and photos, products, promotions, pickup points and delivery zones — then set an order deadline.",
        icon: "CalendarClock",
      },
      {
        title: "Collect orders",
        description:
          "Share one link or QR code. Shoppers order within the window, choose pickup or delivery, and pay by bank transfer or Online EFTPOS — no guesswork on quantities.",
        icon: "Users",
      },
      {
        title: "Batch-produce",
        description:
          "When the window closes, see every order rolled up into one production sheet: totals per product, ready for the kitchen.",
        icon: "ClipboardList",
      },
      {
        title: "Pick up or deliver",
        description:
          "Set multiple pickup points and delivery zones with their own time windows. Shoppers see exactly where and when, and get an SMS when their order is ready.",
        icon: "Truck",
      },
    ],
  },
  showcase: {
    title: "See it in action",
    body: "The actual shopper view — real campaigns, real products, running on Jielong today.",
    altCampaign:
      "Shopper view of a 接龙 campaign, showing the title, deadline, and menu",
    altProducts:
      "Product listing with photos, pricing, discounts, and a quantity stepper",
    altGuide:
      "The Jielong participation guide, explaining how to order inside WeChat",
  },
  share: {
    title: "Share a link and a QR code, straight to WeChat",
    body: "Most 接龙 campaigns already live and die in a WeChat group. Jielong is built around that, not against it.",
    points: [
      "Publish a campaign and Jielong generates a link and a QR code for it automatically.",
      "Post either one straight into your WeChat group — no separate app or channel to manage.",
      "Shoppers tap the link or scan the code and land directly on the ordering page.",
      "It opens right inside WeChat's built-in browser — nothing to install, nothing to switch apps for.",
      "Shoppers log in with their current WeChat account and place orders right away — no sign-up needed.",
    ],
    badgeQr: "Auto-generated QR code",
    badgeNoInstall: "No app install",
    alt: "Jielong's share screen — a generated QR code and WeChat-ready share text for a campaign",
  },
  features: {
    title: "Everything a batch campaign needs",
    body: "From the campaign builder to the production sheet, built around how group-buy actually runs.",
    items: [
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
          "Shoppers pay by direct bank transfer with a screenshot as proof, or — on the Pro plan — approve an Online EFTPOS payment in their own banking app and have it confirmed automatically. No card fees either way.",
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
    ],
  },
  comparison: {
    heading: "Batching, not just pre-ordering",
    body: "Generic pre-order and pickup tools take orders as they come and expect you to prepare on demand. Jielong is built around a different model: everyone orders inside one time-boxed window, and only once it closes do you know the full picture — so you produce once, for everyone, instead of one order at a time.",
    colGeneric: "Generic preorder tools",
    colJielong: "Jielong",
    rows: [
      {
        label: "Ordering model",
        generic: "Order anytime, fulfilled as it comes in",
        jielong: "Time-boxed window, fulfilled as one batch",
      },
      {
        label: "Production planning",
        generic: "You track quantities yourself",
        jielong: "Automatic per-product production summary",
      },
      {
        label: "Pickup locations",
        generic: "Usually one storefront",
        jielong:
          "Multiple pickup points and delivery zones, each with own time windows",
      },
      {
        label: "Payments",
        generic: "Card processing, ~2–3% fees",
        jielong: "Bank transfer or Online EFTPOS (Pro) — no card fees",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What happens if a campaign doesn't hit my minimum quantity?",
        answer:
          "You're always in control — nothing produces automatically. Review the order summary when the window closes, and either fulfil, extend the window, or cancel and refund affected orders.",
      },
      {
        question: "How does payment work?",
        answer:
          "By default shoppers pay by direct bank transfer to your account — the payment page shows your details with copy buttons — and upload a screenshot as proof, which you confirm in the order list. Online EFTPOS is available on the Pro plan: shoppers approve the payment in their own banking app and the order is marked paid automatically. Either way no card details are stored and there are no card-processing fees.",
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
    ],
  },
  cta: {
    title: "Run your first 接龙 for free",
    body: "Publish a campaign in minutes. No card required to start.",
    startFree: "Start free",
    viewPricing: "View pricing",
  },
  pricing: {
    title: "Choose the plan that fits your campaigns",
    body: "Every plan includes bank-transfer payments, the campaign builder, and the production summary. Upgrade as you run more campaigns.",
    monthly: "Monthly",
    yearly: "Yearly",
    save: "Save 20%",
    toggleAria: "Toggle yearly pricing",
    mostPopular: "Most popular",
    perMonth: " / month",
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "For your first few campaigns",
        monthlyPrice: 0,
        yearlyPrice: 0,
        cta: "Start free",
        features: [
          "Up to 3 campaigns / month",
          "Up to 10 orders per campaign",
          "1 pickup point",
          "Product catalog & rich-text editor",
          "Bank-transfer payments with proof upload",
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
          "SMS notifications for pickup & delivery arrival",
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
          "Online EFTPOS payments with automatic confirmation",
          "Multiple staff accounts & roles",
          "Custom branded ordering link",
          "Advanced sales & production reports",
          "Dedicated onboarding",
          "Phone support",
        ],
      },
    ],
    contact: {
      message: "I'm interested in the Jielong {plan} plan ({detail}).",
      free: "free",
      paid: "NZ${price}/month, billed {billing}",
      billedMonthly: "monthly",
      billedYearly: "yearly",
    },
    addOns: {
      title: "Add-ons",
      body: "One-time or optional add-ons available on any plan.",
      items: [
        {
          name: "Custom domain",
          price: "$249 one-time",
          description:
            "Point your own domain (e.g. order.yourbrand.co.nz) at your Jielong campaigns.",
        },
        {
          name: "Branded share cards",
          price: "$149 one-time",
          description:
            "Your logo and colours on the link preview shoppers see in WeChat and WhatsApp.",
        },
        {
          name: "Extra staff seats",
          price: "$15 / seat / month",
          description: "Add more merchant logins beyond your plan's included seats.",
        },
      ],
    },
  },
  footer: {
    tagline:
      "Batch commerce for New Zealand merchants — publish a campaign, collect orders, produce once, deliver together.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "How it works", href: "/#how-it-works" },
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/pricing" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About GZhu Limited", href: "https://www.gzhu.co.nz" },
          { label: "Contact", href: "mailto:info@gzhu.co.nz" },
          { label: "Support", href: "mailto:info@gzhu.co.nz" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy policy", href: "#" },
          { label: "Merchant terms", href: "#" },
          { label: "Consumer terms", href: "#" },
        ],
      },
    ],
    copyrightBefore: "© {year} Jielong, a product of ",
    company: "GZhu Limited",
    copyrightAfter: ". Made for Aotearoa New Zealand.",
    pricingNote: "NZD pricing · Pacific/Auckland",
  },
};
