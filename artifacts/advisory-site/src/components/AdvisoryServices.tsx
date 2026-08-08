import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function AdvisoryServices() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.services.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground max-w-4xl leading-tight">
            {t.services.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="sticky top-32"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-10">
                {t.services.intro}
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              >
                {t.services.cta}
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {t.services.items.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="py-10 border-t border-border first:border-t-0 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-3xl text-primary/30 font-light leading-none mt-1 select-none">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
