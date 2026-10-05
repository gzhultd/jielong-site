import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { getDict, localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CtaSection({ lang }: { lang: Locale }) {
  const { cta } = getDict(lang);
  const pricingHref = localePath(lang, "/pricing");
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90">
          {cta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={pricingHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "h-11 px-6 text-base",
            )}
          >
            {cta.startFree}
          </Link>
          <Link
            href={pricingHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
            )}
          >
            {cta.viewPricing}
          </Link>
        </div>
      </div>
    </section>
  );
}
