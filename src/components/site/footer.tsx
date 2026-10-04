import Link from "next/link";

import { Logo } from "@/components/site/logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About GZhu Limited", href: "https://www.gzhu.co.nz" },
      { label: "Contact", href: "mailto:info@gzhu.co.nz" },
      { label: "Support", href: "mailto:info@gzhu.co.nz" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Merchant terms", href: "#" },
      { label: "Consumer terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Batch commerce for New Zealand merchants — publish a campaign,
              collect orders, produce once, deliver together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold text-foreground">
                  {column.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
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
            &copy; {new Date().getFullYear()} Jielong, a product of{" "}
            <a
              href="https://www.gzhu.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              GZhu Limited
            </a>
            . Made for Aotearoa New Zealand.
          </p>
          <p>NZD pricing &middot; Pacific/Auckland</p>
        </div>
      </div>
    </footer>
  );
}
