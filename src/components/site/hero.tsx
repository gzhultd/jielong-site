import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";
import { cn } from "@/lib/utils";

export function Hero() {
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

      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <Badge variant="secondary" className="mb-6">
            Built for the NZ group-buy community
          </Badge>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:mx-0">
            Open a window. Collect demand.
            <br className="hidden sm:block" /> Batch-produce with confidence.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 lg:mx-0">
            Jielong (接龙) is a batch commerce platform for New Zealand
            merchants — publish a limited-time ordering window, let shoppers
            commit and pay by bank transfer, then produce and fulfil every order
            together.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base")}
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6 text-base",
              )}
            >
              View pricing
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Free to start &middot; No card required &middot; Bank transfer or Online EFTPOS
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <ScreenshotFrame
            src="/screenshots/campaign-view.jpg"
            alt="A live 接龙 campaign as shoppers see it — title, deadline, and menu"
            width={720}
            height={757}
            className="rotate-1 shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
