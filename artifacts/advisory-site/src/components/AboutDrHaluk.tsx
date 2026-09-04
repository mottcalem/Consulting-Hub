import { motion } from "framer-motion";
import drHalukPhoto from "@images/haluk-bey-kapi.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutDrHaluk() {
  const { t, lang } = useLanguage();
  const highlightedFirmName = "Family Business Governance, LLP, UK an";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — text + timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.about.eyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {t.about.heading}
            </h2>
            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-8">
              {t.about.title}
            </p>
            <div className="max-w-3xl mb-14 space-y-6">
              {t.about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`font-light leading-[1.85] ${
                    idx === 0
                      ? "text-[20px] text-foreground/80 border-l-2 border-primary/35 pl-5"
                      : "text-[18px] text-foreground/65"
                  }`}
                >
                  {lang === "en" && paragraph.includes(highlightedFirmName) ? (
                    <>
                      {paragraph.split(highlightedFirmName)[0]}
                      <strong className="font-bold text-primary">{highlightedFirmName}</strong>
                      {paragraph.split(highlightedFirmName)[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>


            <div className="mt-12">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-primary text-primary-foreground font-sans text-base font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
              >
                {t.about.cta}
              </button>
            </div>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative">
              <img
                src={drHalukPhoto}
                alt={t.about.imgAlt}
                className="w-full aspect-[4/5] object-cover object-center block"
                style={{ boxShadow: "8px 8px 0 rgba(139,90,90,0.18)" }}
              />
              {/* Quote badge */}
              <div className="mt-8 p-6 bg-card border border-border">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
                  {lang === "en" ? "My Mission" : "Benim misyonum"}
                </p>
                <p className="font-serif italic text-[18px] text-foreground/80 leading-relaxed">
                  "{t.about.quote}"
                </p>
                <p className="mt-4 text-xs font-medium text-primary uppercase tracking-widest">
                  — Dr. Haluk Alacaklıoğlu
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
