import { Check, QrCode, Share2, Smartphone } from "lucide-react";

import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const points = [
  "Publish a campaign and Jielong generates a link and a QR code for it automatically.",
  "Post either one straight into your WeChat group — no separate app or channel to manage.",
  "Shoppers tap the link or scan the code and land directly on the ordering page.",
  "It opens right inside WeChat's built-in browser — nothing to install, nothing to switch apps for.",
  "Shoppers browse without logging in, then sign in with their WeChat account in one tap at checkout — no passwords, no sign-up forms. Their WeChat name and avatar appear in the order list.",
];

export function ShareHighlight() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Share2 className="size-5" />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Share a link and a QR code, straight to WeChat
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most 接龙 campaigns already live and die in a WeChat group. Jielong
            is built around that, not against it.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <QrCode className="size-4" />
              Auto-generated QR code
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="size-4" />
              No app install
            </div>
          </div>
        </div>

        <ScreenshotFrame
          src="/screenshots/share-qr.jpg"
          alt="Jielong's share screen — a generated QR code and WeChat-ready share text for a campaign"
          width={780}
          height={1720}
          className="mx-auto w-full max-w-[240px]"
        />
      </div>
    </section>
  );
}
