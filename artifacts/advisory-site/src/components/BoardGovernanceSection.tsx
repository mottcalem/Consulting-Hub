import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import familyAdvisorLogo from "@images/family-advisor-logo.png";

export function BoardGovernanceSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="board" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_340px]"
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.boardGovernance.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground max-w-3xl leading-tight mb-4">
              {t.boardGovernance.heading}
            </h2>
            <p className="text-[20px] text-foreground/70 font-light max-w-2xl leading-relaxed">
              {t.boardGovernance.intro}
            </p>
          </div>

          <img
            src={familyAdvisorLogo}
            alt="Family Business Advisors"
            className="mx-auto h-auto w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.boardGovernance.topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * idx }}
              className="bg-background border border-border p-8 md:p-9"
            >
              {topic.heading && (
                <h3 className="text-xl font-serif text-foreground mb-3">{topic.heading}</h3>
              )}
              <p className="text-lg text-foreground/75 font-light italic leading-8 mb-7 border-l-2 border-primary/30 pl-4">
                {topic.question}
              </p>
              <ul className="flex flex-col gap-3">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/75 font-light leading-6">
                    <span className="text-primary mt-[2px] flex-shrink-0 text-base">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => scrollTo("contact")}
            className="px-10 py-4 bg-primary text-primary-foreground font-sans text-base font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
          >
            {t.boardGovernance.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
