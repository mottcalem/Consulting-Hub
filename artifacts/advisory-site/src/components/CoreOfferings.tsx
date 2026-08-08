import { motion } from "framer-motion";

export function CoreOfferings() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const areas = [
    {
      id: "governance",
      label: "Family & Shareholder Governance",
      heading: "Family & Shareholder Governance",
      description:
        "Creating clarity around family relationships, ownership, expectations, responsibilities, and long-term stewardship.",
      topics: [
        "Family governance structures",
        "Shareholder expectations and responsibilities",
        "Family constitutions and protocols",
        "Ownership transition",
        "Employment policies for family members",
        "Wealth and reward principles",
        "Shareholders' agreements",
        "Next-generation preparation",
        "Family communication and trust",
        "Conflict management",
        "Fair shareholder exit arrangements",
        "In-law involvement and boundaries",
      ],
      cta: "Explore Family Governance",
      anchor: "governance",
    },
    {
      id: "succession",
      label: "Succession & Next-Generation",
      heading: "Succession & Next-Generation Development",
      description:
        "Preparing the next generation to become capable owners, responsible shareholders, and effective future leaders.",
      topics: [
        "Leadership succession planning",
        "Ownership succession",
        "Next-generation education and coaching",
        "Leadership selection and development",
        "Ownership mindset and responsibility",
        "Career planning for family members",
        "Transition between generations",
        "Continuity of family values",
      ],
      cta: "Explore Succession",
      anchor: "succession",
    },
    {
      id: "board",
      label: "Business & Board Governance",
      heading: "Business & Board Governance",
      description:
        "Building governance structures that professionalise the business while preserving the family's values, entrepreneurial spirit, and long-term vision.",
      topics: [
        "Board effectiveness",
        "Board structure and composition",
        "Board independence",
        "Board committees and agendas",
        "Board performance evaluation",
        "Family council / shareholder / board relationships",
        "Recruitment of non-family executives",
        "Professionalisation of the business",
        "Global governance practices",
      ],
      cta: "Explore Board Governance",
      anchor: "board",
    },
  ];

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
            Core Advisory Areas
          </span>
          <h2 className="text-3xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight">
            Three Areas Where I Can Help Your Family Business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 border border-background/10">
          {areas.map((area, idx) => (
            <motion.div
              key={area.id}
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
