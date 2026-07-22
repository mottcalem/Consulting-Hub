import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import drHalukPhoto from "@assets/image_1784746982546.png";

export function AboutDrHaluk() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
              About Dr. Haluk Alacaklioglu
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed mb-12">
              <p>
                Haluk graduated with honors from Harvard Business School and later earned his PhD, with a thesis in Corporate Governance and Family Business, at AUL, London.
              </p>
              <p>
                He started his career in multinational companies around the world, including P&G and Philip Morris International, and has worked as a manager in the USA, Europe and the Middle East.
              </p>
            </div>

            <div className="pt-12 border-t border-border">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Career
              </span>
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Global executive and advisory experience
              </h3>
              <p className="text-lg text-foreground/80 font-light leading-relaxed mb-8">
                He opened offices in Eastern Europe and the Middle East as the Managing Partner of Egon Zehnder International and supported hundreds of companies in identifying and evaluating senior managers for over a decade.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "P&G and Philip Morris International",
                  "Management roles across the USA, Europe and the Middle East",
                  "Senior leadership assessment for hundreds of companies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-foreground/80 font-light">
                    <Check className="text-primary mt-1 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                size="lg" 
                className="rounded-none font-serif text-lg tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                onClick={() => scrollTo("contact")}
              >
                Contact
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply translate-x-4 translate-y-4" />
              <img 
                src={drHalukPhoto} 
                alt="Dr. Haluk Alacaklioglu" 
                className="w-full h-full object-cover shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
