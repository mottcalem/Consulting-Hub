import { motion } from "framer-motion";

export function BoardGovernanceSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const topics = [
    {
      heading: "Professionalising the Business",
      question: "How can we professionalise the firm without losing our family values and entrepreneurial spirit?",
      items: [
        "Governance structures that preserve agility",
        "Accountability without bureaucracy",
        "Family values embedded in business systems",
        "Recruiting and retaining non-family professionals",
      ],
    },
    {
      heading: "Board Effectiveness",
      question: "How can we make the board genuinely effective, performance-focused, and aligned with global best practices?",
      items: [
        "Board structure and composition",
        "Board independence",
        "Board agendas and committees",
        "Board performance evaluation",
        "Accountability and decision-making",
      ],
    },
    {
      heading: "Family, Shareholders & Board",
      question: "How should the family council, shareholders, and board of directors work and communicate together?",
      items: [
        "Family council / shareholder / board relationships",
        "Clear mandates and communication protocols",
        "Governance alignment at each level",
        "Managing differences of view constructively",
      ],
    },
  ];

  return (
    <section id="board" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Business & Board Governance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground max-w-3xl leading-tight mb-4">
            Professional Governance for Stronger Decisions and Long-Term Performance
          </h2>
          <p className="text-lg text-foreground/70 font-light max-w-2xl leading-relaxed">
            Building governance structures that professionalise the business while preserving the
            family's values, entrepreneurial spirit, and long-term vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * idx }}
              className="bg-background border border-border p-8"
            >
              <h3 className="text-xl font-serif text-foreground mb-3">{topic.heading}</h3>
              <p className="text-sm text-muted-foreground font-light italic leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
                {topic.question}
              </p>
              <ul className="flex flex-col gap-2">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70 font-light">
                    <span className="text-primary mt-[3px] flex-shrink-0 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Board governance pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-foreground text-background p-10 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Board Governance Model</h3>
              <p className="text-background/70 font-light leading-relaxed text-sm">
                Effective board governance for family businesses requires balancing the board's
                independence with an understanding of family ownership dynamics. The right model
                depends on the business's stage of development and the family's governance maturity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Board structure",
                "Board composition",
                "Board independence",
                "Board agenda",
                "Board committees",
                "Performance evaluation",
                "Accountability",
                "Decision-making clarity",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-background/70 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <button
            onClick={() => scrollTo("contact")}
            className="px-10 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
          >
            Discuss Your Board Governance Priorities
          </button>
        </div>
      </div>
    </section>
  );
}
