import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function CoreOfferings() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.coreOfferings.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight">
            {t.coreOfferings.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 border border-background/10">
          {t.coreOfferings.areas.map((area, idx) => (
            <motion.div
              key={area.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * idx }}
              className="bg-foreground p-10 lg:p-12 flex flex-col"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-5 block">
                0{idx + 1}
              </span>
              <h3 className="text-2xl font-serif mb-4 text-background">{area.heading}</h3>
              <p className="text-background/70 font-light leading-relaxed text-sm mb-8">
                {area.description}
              </p>

              <ul className="flex flex-col gap-2 mb-10 flex-1">
                {area.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-background/60 font-light">
                    <span className="text-primary mt-[3px] text-xs flex-shrink-0">—</span>
                    {topic}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo(area.anchor)}
                className="text-sm font-medium text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors tracking-wide uppercase font-serif mt-auto"
              >
                {area.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
