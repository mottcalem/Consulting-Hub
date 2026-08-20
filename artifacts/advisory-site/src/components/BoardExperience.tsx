import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import nextGenPhoto from "@/assets/next-gen-2.jpg";

export function BoardExperience() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="governance" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary-foreground/50 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.boardExperience.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif max-w-3xl leading-tight">
            {t.boardExperience.heading}
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/75 font-light leading-relaxed max-w-2xl">
            {t.boardExperience.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/20 border border-primary-foreground/20">
          {t.boardExperience.topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-primary p-10 lg:p-12"
            >
              <h3 className="text-xl font-serif mb-6 text-primary-foreground">{topic.heading}</h3>
              <ul className="flex flex-col gap-3">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-foreground/75 font-light text-sm leading-relaxed">
                    <span className="text-primary-foreground/40 mt-[3px] flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {(
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="min-h-72 md:min-h-full overflow-hidden bg-primary"
            >
              <img
                src={nextGenPhoto}
                alt="Gelecek nesil aile üyeleri birlikte çalışırken"
                className="h-full min-h-72 w-full object-cover object-center"
              />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-10 py-4 bg-primary-foreground text-primary font-serif text-sm tracking-widest uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            {t.boardExperience.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
