"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { localePath, switchLocalePath, type Dict, type Locale } from "@/lib/i18n";

export function Navbar({
  lang,
  nav,
  edition,
}: {
  lang: Locale;
  nav: Dict["nav"];
  edition: string;
}) {
  const pathname = usePathname();
  const other = switchLocalePath(pathname);
  const pricingHref = localePath(lang, "/pricing");

  const languageSwitch = (className: string) => (
    <Link
      href={other.path}
      hrefLang={other.lang === "zh" ? "zh-CN" : "en"}
      aria-label={nav.switchAria}
      className={className}
    >
      <Languages className="size-4" />
      {nav.switchLabel}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo href={localePath(lang, "/")} edition={edition} />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={localePath(lang, link.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {languageSwitch(buttonVariants({ variant: "ghost", size: "lg" }))}
          <Link
            href="https://jielong.co.nz/merchant/login"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            {nav.merchantLogin}
          </Link>
          <Link href={pricingHref} className={buttonVariants({ size: "lg" })}>
            {nav.startFree}
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label={nav.openMenu}
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{nav.menuTitle}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={localePath(lang, link.href)} />}
                  className="rounded-lg px-2 py-3 text-base font-medium text-slate-700 hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              {languageSwitch(buttonVariants({ variant: "ghost", size: "lg" }))}
              <Link
                href="https://jielong.co.nz/merchant/login"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {nav.merchantLogin}
              </Link>
              <Link href={pricingHref} className={buttonVariants({ size: "lg" })}>
                {nav.startFree}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
