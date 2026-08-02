import type { Metadata } from "next";

import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { PricingCards } from "@/components/site/pricing-cards";
import { addOns } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing — 接龙 Jielong",
  description:
    "Simple, transparent pricing for Jielong batch commerce campaigns. Start free, upgrade as your group-buy grows.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white to-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Choose the plan that fits your campaigns
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Every plan includes bank-transfer payments via Akahu, the campaign
            builder, and the production summary. Upgrade as you run more
            campaigns.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PricingCards />
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Add-ons
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One-time or optional add-ons available on any plan.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {addOns.map((addOn) => (
              <div
                key={addOn.name}
                className="rounded-xl bg-white p-6 ring-1 ring-border"
              >
                <h3 className="text-base font-semibold text-slate-950">
                  {addOn.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {addOn.price}
                </p>
                <p className="mt-3 text-sm text-slate-600">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <CtaSection />
    </>
  );
}
