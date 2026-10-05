export type Locale = "en" | "zh";

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

type Titled = { title: string; description: string };

export type Dict = {
  htmlLang: string;
  meta: {
    home: { title: string; description: string };
    pricing: { title: string; description: string };
  };
  logo: { edition: string };
  nav: {
    // href is a locale-neutral path (e.g. "/#faq"); components localise it.
    links: { href: string; label: string }[];
    merchantLogin: string;
    startFree: string;
    openMenu: string;
    menuTitle: string;
    switchLabel: string;
    switchAria: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    startFree: string;
    viewPricing: string;
    note: string;
    alt: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    stepLabel: string; // "{n}" is replaced with the step number
    steps: (Titled & { icon: string })[];
  };
  showcase: { title: string; body: string; altCampaign: string; altProducts: string };
  share: {
    title: string;
    body: string;
    points: string[];
    // Optional one-line flow shown under the bullets (e.g. "A → B → C").
    flow?: string;
    badgeQr: string;
    badgeNoInstall: string;
    alt: string;
  };
  features: {
    title: string;
    body: string;
    items: (Titled & { icon: string })[];
  };
  comparison: {
    heading: string;
    body: string;
    colGeneric: string;
    colJielong: string;
    rows: { label: string; generic: string; jielong: string }[];
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  cta: { title: string; body: string; startFree: string; viewPricing: string };
  pricing: {
    title: string;
    body: string;
    monthly: string;
    yearly: string;
    save: string;
    toggleAria: string;
    mostPopular: string;
    perMonth: string;
    plans: Plan[];
    // Prefilled into the contact form. "{plan}", "{detail}", "{price}" and
    // "{billing}" are replaced in the client.
    contact: {
      message: string;
      free: string;
      paid: string;
      billedMonthly: string;
      billedYearly: string;
    };
    addOns: {
      title: string;
      body: string;
      items: { name: string; price: string; description: string }[];
    };
  };
  footer: {
    tagline: string;
    columns: {
      heading: string;
      links: { label: string; href: string }[];
    }[];
    copyrightBefore: string; // "{year}" is replaced with the current year
    company: string;
    copyrightAfter: string;
    pricingNote: string;
  };
};
