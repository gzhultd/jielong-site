import { Check, X } from "lucide-react";

import { comparison } from "@/lib/site-content";

const rows = [
  {
    label: "Ordering model",
    generic: "Order anytime, fulfilled as it comes in",
    jielong: "Time-boxed window, fulfilled as one batch",
  },
  {
    label: "Production planning",
    generic: "You track quantities yourself",
    jielong: "Automatic per-product production summary",
  },
  {
    label: "Pickup locations",
    generic: "Usually one storefront",
    jielong: "Multiple pickup points, each with own time slots",
  },
  {
    label: "Payments",
    generic: "Card processing, ~2–3% fees",
    jielong: "Bank transfer via Akahu open banking",
  },
];

export function Comparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {comparison.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{comparison.body}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl ring-1 ring-border">
          <div className="grid grid-cols-3 bg-slate-50 text-sm font-semibold text-slate-950">
            <div className="px-5 py-4"></div>
            <div className="px-5 py-4">Generic preorder tools</div>
            <div className="px-5 py-4 text-primary">Jielong</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-white" : "bg-slate-50/50"}`}
            >
              <div className="px-5 py-4 font-medium text-slate-950">{row.label}</div>
              <div className="flex items-start gap-2 px-5 py-4 text-slate-500">
                <X className="mt-0.5 size-4 shrink-0 text-slate-400" />
                {row.generic}
              </div>
              <div className="flex items-start gap-2 px-5 py-4 text-slate-700">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {row.jielong}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
