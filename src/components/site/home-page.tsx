import { Comparison } from "@/components/site/comparison";
import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { Features } from "@/components/site/features";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { ProductShowcase } from "@/components/site/product-showcase";
import { ShareHighlight } from "@/components/site/share-highlight";
import type { Locale } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      <Hero lang={lang} />
      <HowItWorks lang={lang} />
      <ProductShowcase lang={lang} />
      <ShareHighlight lang={lang} />
      <Features lang={lang} />
      <Comparison lang={lang} />
      <Faq lang={lang} />
      <CtaSection lang={lang} />
    </>
  );
}
