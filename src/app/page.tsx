import { Comparison } from "@/components/site/comparison";
import { CtaSection } from "@/components/site/cta-section";
import { Faq } from "@/components/site/faq";
import { Features } from "@/components/site/features";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { ProductShowcase } from "@/components/site/product-showcase";
import { ShareHighlight } from "@/components/site/share-highlight";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ProductShowcase />
      <ShareHighlight />
      <Features />
      <Comparison />
      <Faq />
      <CtaSection />
    </>
  );
}
