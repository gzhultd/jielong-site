import { ScreenshotFrame } from "@/components/site/screenshot-frame";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lime-100 via-amber-50 to-emerald-100 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            The actual shopper view — real campaigns, real products, running
            on Jielong today.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:items-start">
          <ScreenshotFrame
            src="/screenshots/campaign-view.jpg"
            alt="Shopper view of a 接龙 campaign, showing the title, deadline, and menu"
            width={720}
            height={960}
            className="-rotate-1"
          />
          <ScreenshotFrame
            src="/screenshots/product-list.jpg"
            alt="Product listing with photos, pricing, discounts, and a quantity stepper"
            width={720}
            height={960}
            className="rotate-1 sm:mt-10"
          />
        </div>
      </div>
    </section>
  );
}
