import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { getDict, localePath, type Locale } from "@/lib/i18n";

export function Footer({ lang }: { lang: Locale }) {
  const { footer, logo } = getDict(lang);
  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Logo href={localePath(lang, "/")} edition={logo.edition} />
            <p className="mt-3 text-sm text-muted-foreground">
              {footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold text-foreground">
                  {column.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={localePath(lang, link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {footer.copyrightBefore.replace("{year}", String(new Date().getFullYear()))}
            <a
              href="https://www.gzhu.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {footer.company}
            </a>
            {footer.copyrightAfter}
          </p>
          <p>{footer.pricingNote}</p>
        </div>
      </div>
    </footer>
  );
}
