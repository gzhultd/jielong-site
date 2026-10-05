import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { inter, notoSansSC } from "@/lib/fonts";
import { getDict, type Locale } from "@/lib/i18n";

// One root layout per language (see app/(en) and app/zh), each rendering this
// shell so <html lang> is correct in the static HTML for every locale.
export function SiteShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const dict = getDict(lang);

  return (
    <html
      lang={dict.htmlLang}
      className={`${inter.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar lang={lang} nav={dict.nav} edition={dict.logo.edition} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
