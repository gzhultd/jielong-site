import {
  ClipboardList,
  FileEdit,
  Gift,
  Landmark,
  LineChart,
  MapPin,
  Package,
  Share2,
  ShoppingBasket,
  type LucideIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/lib/site-content";

const icons: Record<string, LucideIcon> = {
  FileEdit,
  Package,
  MapPin,
  ClipboardList,
  Landmark,
  Share2,
  Gift,
  LineChart,
  ShoppingBasket,
};

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Everything a batch campaign needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From the campaign builder to the production sheet, built around how
            group-buy actually runs.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <Card key={feature.title} className="border-border/70 bg-white">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="mt-3 text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
