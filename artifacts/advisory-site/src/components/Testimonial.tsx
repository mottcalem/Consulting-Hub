import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function Testimonial() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`grid grid-cols-1 gap-16 items-center ${t.testimonial.items.length ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.testimonial.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
              {t.testimonial.heading}
            </h2>
            <p className="text-[20px] text-foreground/75 font-light leading-relaxed mb-6">
              {t.testimonial.p1}
            </p>
            <p className="text-[18px] text-foreground/65 font-light leading-relaxed mb-10">
              {t.testimonial.p2}
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground font-sans text-base font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
            >
              {t.testimonial.cta}
            </button>
          </div>

          {t.testimonial.items.length > 0 && <div className="flex flex-col gap-6">
            {t.testimonial.items.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 border border-border bg-background">
                <div className="w-1 bg-primary flex-shrink-0 rounded-full" />
                <div>
                  <h4 className="font-serif text-base font-medium text-foreground mb-1">{item.label}</h4>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>}
        </motion.div>
      </div>
    </section>
  );
}
