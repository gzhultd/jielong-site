import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";
import { getDict, localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero({ lang }: { lang: Locale }) {
  const { hero } = getDict(lang);
  const pricingHref = localePath(lang, "/pricing");
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-32 size-96 rounded-full bg-amber-300/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <Badge variant="secondary" className="mb-6">
            {hero.badge}
          </Badge>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:mx-0">
            {hero.titleLine1}
            <br className="hidden sm:block" /> {hero.titleLine2}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 lg:mx-0">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href={pricingHref}
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base")}
            >
              {hero.startFree}
            </Link>
            <Link
              href={pricingHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6 text-base",
              )}
            >
              {hero.viewPricing}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {hero.note}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[240px] lg:max-w-[260px]">
          <ScreenshotFrame
            src="/screenshots/home-view.jpg"
            alt={hero.alt}
            width={780}
            height={1688}
            className="rotate-1 shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
