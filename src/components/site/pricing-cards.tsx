"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { Dict, Plan } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CONTACT_URL = "https://www.gzhu.co.nz/contact.html";

function contactHref(
  contact: Dict["pricing"]["contact"],
  plan: Plan,
  price: number,
  yearly: boolean,
) {
  const detail =
    price === 0
      ? contact.free
      : contact.paid
          .replace("{price}", String(price))
          .replace(
            "{billing}",
            yearly ? contact.billedYearly : contact.billedMonthly,
          );
  const message = contact.message
    .replace("{plan}", plan.name)
    .replace("{detail}", detail);
  return `${CONTACT_URL}?message=${encodeURIComponent(message)}`;
}

export function PricingCards({ pricing }: { pricing: Dict["pricing"] }) {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium",
            !yearly ? "text-slate-950" : "text-muted-foreground",
          )}
        >
          {pricing.monthly}
        </span>
        <Switch checked={yearly} onCheckedChange={setYearly} aria-label={pricing.toggleAria} />
        <span
          className={cn(
            "text-sm font-medium",
            yearly ? "text-slate-950" : "text-muted-foreground",
          )}
        >
          {pricing.yearly}
        </span>
        <Badge variant="secondary">{pricing.save}</Badge>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricing.plans.map((plan) => {
          const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
          return (
            <Card
              key={plan.id}
              className={cn(
                "relative flex flex-col border-border/70 bg-white",
                plan.highlighted && "ring-2 ring-primary",
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
                  {plan.highlighted && <Badge>{pricing.mostPopular}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-950">
                    ${price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    NZD{price > 0 ? pricing.perMonth : ""}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <a
                  href={contactHref(pricing.contact, plan, price, yearly)}
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: plan.highlighted ? "default" : "outline",
                    }),
                    "w-full",
                  )}
                >
                  {plan.cta}
                </a>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
