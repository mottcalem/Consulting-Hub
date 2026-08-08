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
      q: "Who do you typically advise?",
      a: "Family business owners, shareholders, next-generation family members, board members, and senior executives in privately held and family-controlled enterprises. Most of my clients come to me when they are facing questions around governance, succession, ownership structure, or a significant transition.",
    },
    {
      q: "Do you work with family businesses internationally?",
      a: "Yes. I have advised family businesses across five continents — in Europe, the Middle East, Asia, Africa, and the Americas. My work is inherently cross-cultural, and I am experienced in navigating the different governance traditions and family dynamics that come with that.",
    },
    {
      q: "What issues can an engagement typically address?",
      a: "Family governance and constitution development, succession planning, next-generation development, board structure and effectiveness, shareholder governance, ownership transition, family conflict management, and the professionalisation of the business.",
    },
    {
      q: "Is each engagement tailored to the family's situation?",
      a: "Yes. Every family business is different. I do not use standard templates or programmes. My approach always begins with understanding your family's specific ownership structure, relationships, culture, and long-term priorities.",
    },
    {
      q: "What does a first conversation look like?",
      a: "It is a confidential preliminary discussion — no commitment required. We explore where your family business currently stands, what challenges or decisions you are facing, and whether my advisory support could be useful. Use the contact form to request this conversation.",
    },
    {
      q: "How do you typically work with clients?",
      a: "Depending on the engagement, I work with the family as a whole, with individual shareholders, with the board, or with specific family members such as the next generation. Engagements can range from a focused advisory assignment to a longer-term advisory relationship.",
    },
  ];

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
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-10">
              Questions commonly asked by family business owners, shareholders, and board members
              considering an advisory engagement.
            </p>
            <Button
              size="lg"
              className="rounded-none font-serif tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => scrollTo("contact")}
            >
              Get in Touch
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
              {faqs.map((faq, idx) => (
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
