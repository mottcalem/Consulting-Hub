import { motion } from "framer-motion";
import drHalukPhoto from "@assets/image_1784788641739.png";

export function StatsAboutStrip() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">
              About Dr. Haluk Alacaklıoğlu
            </span>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
              Dr. Haluk Alacaklıoğlu, PhD, is a pioneer in cross-cultural family business governance.
              Since 2000, he has advised hundreds of family businesses across five continents on family
              governance, succession, ownership, and board effectiveness.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed font-light mb-10">
              His work draws on a rare combination of senior international executive experience,
              deep academic grounding, and more than two decades of hands-on advisory practice
              with business-owning families.
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
            >
              Request a Confidential Discussion
            </button>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">2000</div>
                <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Practice Founded</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">5</div>
                <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Continents</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">100s</div>
                <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Families Advised</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 aspect-[4/3] relative overflow-hidden"
          >
            <img
              src={drHalukPhoto}
              alt="Dr. Haluk Alacaklıoğlu — Family Business Governance Advisor"
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
