import { motion } from "framer-motion";
import drHalukPhoto from "@assets/image_1784788641739.png";
import { useLanguage } from "@/i18n/LanguageContext";

export function StatsAboutStrip() {
  const { t } = useLanguage();

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
              {t.statsStrip.eyebrow}
            </span>
            <p className="text-[20px] text-foreground/80 leading-relaxed font-light mb-8">
              {t.statsStrip.p1}
            </p>
            <p className="text-[18px] text-foreground/70 leading-relaxed font-light mb-10">
              {t.statsStrip.p2}
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground font-sans text-base font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
            >
              {t.statsStrip.cta}
            </button>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {t.statsStrip.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-serif text-primary mb-2">{stat.value}</div>
                  <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{stat.label}</div>
                </div>
              ))}
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
              alt={t.statsStrip.imgAlt}
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
