import { CalendarClock, ClipboardList, Truck, Users, type LucideIcon } from "lucide-react";

import { getDict, type Locale } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  CalendarClock,
  Users,
  ClipboardList,
  Truck,
};

export function HowItWorks({ lang }: { lang: Locale }) {
  const { howItWorks } = getDict(lang);
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {howItWorks.subtitle}
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.title} className="relative">
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-6" />
                </div>
                <div className="mt-4 text-xs font-semibold text-primary">
                  {howItWorks.stepLabel.replace("{n}", String(index + 1))}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
