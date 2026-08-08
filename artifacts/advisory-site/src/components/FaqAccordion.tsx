import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

export function FaqAccordion() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.faq.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
              {t.faq.heading}
            </h2>
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-10">
              {t.faq.intro}
            </p>
            <Button
              size="lg"
              className="rounded-none font-serif tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => scrollTo("contact")}
            >
              {t.faq.cta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light text-base leading-relaxed pb-6 pr-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
