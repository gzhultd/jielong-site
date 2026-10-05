import { ScreenshotFrame } from "@/components/site/screenshot-frame";
import { getDict, type Locale } from "@/lib/i18n";

export function ProductShowcase({ lang }: { lang: Locale }) {
  const { showcase } = getDict(lang);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lime-100 via-amber-50 to-emerald-100 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {showcase.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            {showcase.body}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-xl gap-8 sm:grid-cols-2 sm:items-start">
          <ScreenshotFrame
            src="/screenshots/campaign-view.jpg"
            alt={showcase.altCampaign}
            width={780}
            height={1688}
            className="mx-auto w-full max-w-[220px] -rotate-1"
          />
          <ScreenshotFrame
            src="/screenshots/product-list.jpg"
            alt={showcase.altProducts}
            width={780}
            height={1688}
            className="mx-auto w-full max-w-[220px] rotate-1 sm:mt-10"
          />
        </div>
      </div>
    </section>
  );
}
