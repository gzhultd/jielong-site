"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { plans } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function PricingCards() {
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
          Monthly
        </span>
        <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly pricing" />
        <span
          className={cn(
            "text-sm font-medium",
            yearly ? "text-slate-950" : "text-muted-foreground",
          )}
        >
          Yearly
        </span>
        <Badge variant="secondary">Save 20%</Badge>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
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
                {plan.highlighted && (
                  <Badge className="mb-2 w-fit">Most popular</Badge>
                )}
                <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-950">
                    ${price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    NZD{price > 0 ? " / month" : ""}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: plan.highlighted ? "default" : "outline",
                    }),
                    "w-full",
                  )}
                >
                  {plan.cta}
                </Link>

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
