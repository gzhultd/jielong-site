import type { Metadata } from "next";

import { PricingPage } from "@/components/site/pricing-page";
import { getDict } from "@/lib/i18n";

const dict = getDict("zh");

export const metadata: Metadata = {
  title: dict.meta.pricing.title,
  description: dict.meta.pricing.description,
  alternates: {
    canonical: "/zh/pricing",
    languages: { en: "/pricing", "zh-CN": "/zh/pricing" },
  },
};

export default function Pricing() {
  return <PricingPage lang="zh" />;
}
