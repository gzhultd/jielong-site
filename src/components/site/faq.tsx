import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDict, type Locale } from "@/lib/i18n";

export function Faq({ lang }: { lang: Locale }) {
  const { faq } = getDict(lang);
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {faq.title}
          </h2>
        </div>

        <Accordion className="mt-10 rounded-xl bg-white px-6 ring-1 ring-border">
          {faq.items.map((faq) => (
            <AccordionItem key={faq.question} className="not-last:border-b border-border">
              <AccordionTrigger className="py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
