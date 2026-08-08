import { motion } from "framer-motion";
import drHalukPhoto from "@assets/image_1784788641739.png";

export function AboutDrHaluk() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const timeline = [
    {
      period: "1979",
      role: "BA — Boğaziçi University",
      org: "Education",
      type: "edu",
    },
    {
      period: "1983",
      role: "MBA with Honors — Harvard Business School",
      org: "Education",
      type: "edu",
    },
    {
      period: "1980s",
      role: "International Executive",
      org: "Procter & Gamble · Philip Morris International",
      detail: "Management roles across the USA, Europe, and the Middle East.",
      type: "career",
    },
    {
      period: "1989–2000",
      role: "Managing Partner",
      org: "Egon Zehnder International",
      detail: "Opened offices in Eastern Europe and the Middle East. Advised hundreds of companies on senior leadership assessment.",
      type: "career",
    },
    {
      period: "2000–Present",
      role: "Founder",
      org: "FGB — Family Business Governance, LLP · Surrey, UK",
      detail: "Advisory practice specialising in family governance, succession, ownership, and board effectiveness.",
      type: "career",
    },
    {
      period: "2003",
      role: "Founding Chairman",
      org: "Corporate Governance Association (COGAT)",
      type: "career",
    },
    {
      period: "2007",
      role: "PhD — American University of London",
      org: 'Dissertation: "Governance of Family Enterprises"',
      type: "edu",
    },
    {
      period: "2017",
      role: "Founding Chairman",
      org: "Board Directors Association (BDA)",
      type: "career",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[hsl(33,31%,93%)]">
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
              About
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Dr. Haluk Alacaklıoğlu, PhD
            </h2>
            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-8">
              Family Business Governance Advisor
            </p>
            <p className="text-lg text-foreground/75 font-light leading-relaxed mb-5">
              Dr. Haluk Alacaklıoğlu is a pioneer in cross-cultural family business governance.
              Since 2000, he has advised hundreds of family businesses across five continents
              on family governance, succession, ownership, and board effectiveness.
            </p>
            <p className="text-base text-foreground/65 font-light leading-relaxed mb-12">
              He brings a rare combination of senior international executive experience,
              rigorous academic grounding, and more than two decades of dedicated advisory
              work with business-owning families worldwide.
            </p>

            {/* Timeline */}
            <div className="relative border-l border-primary/30 pl-8 flex flex-col gap-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.07 * idx }}
                  className="relative"
                >
                  {/* Dot */}
                  <span
                    className={`absolute -left-[37px] top-1 w-3 h-3 rounded-full border-2 ${
                      item.type === "edu"
                        ? "bg-background border-primary/50"
                        : "bg-primary border-primary"
                    }`}
                  />
                  <span className="text-xs font-medium text-primary/70 tracking-widest uppercase block mb-1">
                    {item.period}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-foreground">{item.role}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{item.org}</p>
                  {item.detail && (
                    <p className="text-sm text-muted-foreground font-light mt-1 leading-relaxed">{item.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              >
                Discuss Your Family Business Priorities
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
                alt="Dr. Haluk Alacaklıoğlu — Family Business Governance Advisor"
                className="w-full h-auto block"
                style={{ boxShadow: "8px 8px 0 rgba(139,90,90,0.18)" }}
              />
              {/* Credential badge */}
              <div className="mt-8 p-6 bg-card border border-border">
                <p className="font-serif italic text-base text-foreground/80 leading-relaxed">
                  "A successful transition is not simply about transferring ownership.
                  It is about preparing people, clarifying responsibilities, and creating
                  the governance structures that allow the enterprise to thrive."
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
