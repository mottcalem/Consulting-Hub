import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  const faqs = [
    {
      q: "Who do you advise?",
      a: "Family-owned businesses, business families, boards of privately held and publicly listed companies, and senior leaders navigating complex ownership and governance decisions."
    },
    {
      q: "Do you work internationally?",
      a: "Yes. Advisory engagements span North America, Europe, the Middle East, India, South Africa, and beyond — with active work across 30+ countries since 1989."
    },
    {
      q: "What issues can an engagement address?",
      a: "Governance structure, succession planning, board composition and performance, ownership transitions, family constitutions, strategic alignment among shareholders, and independent board participation."
    },
    {
      q: "Are engagements tailored?",
      a: "Every engagement is structured around the specific context, ownership structure, and goals of the family or board. There are no standard packages."
    },
    {
      q: "How do we begin?",
      a: "Begin with an initial consultation to assess fit, context, and advisory scope. Use the contact form or WhatsApp link to request an introductory conversation."
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Advisory Questions
            </h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed mb-10">
              Answers to questions often asked by family enterprises, boards, and senior leaders considering an advisory engagement.
            </p>
            <Button 
              size="lg" 
              className="rounded-none font-serif text-lg tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => scrollTo("contact")}
            >
              Book Now
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-xl py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light text-lg leading-relaxed pb-6 pr-8">
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
