import { Check, QrCode, Share2, Smartphone } from "lucide-react";

import { ScreenshotFrame } from "@/components/site/screenshot-frame";
import { getDict, type Locale } from "@/lib/i18n";

export function ShareHighlight({ lang }: { lang: Locale }) {
  const { share } = getDict(lang);
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Share2 className="size-5" />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {share.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {share.body}
          </p>

          {share.flow && (
            <p className="mt-6 text-sm font-medium text-primary">{share.flow}</p>
          )}

          <ul className="mt-8 space-y-4">
            {share.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <QrCode className="size-4" />
              {share.badgeQr}
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="size-4" />
              {share.badgeNoInstall}
            </div>
          </div>
        </div>

        <ScreenshotFrame
          src="/screenshots/share-qr.jpg"
          alt={share.alt}
          width={780}
          height={1720}
          className="mx-auto w-full max-w-[240px]"
        />
      </div>
    </section>
  );
}
