import { motion } from "framer-motion";

export function AdvisoryServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      number: "01",
      title: "Family Protocols & Constitutions",
      desc: "Create practical family protocols and constitutions that clarify expectations, guide shareholder conduct, and support responsible stewardship.",
    },
    {
      number: "02",
      title: "Leadership Succession",
      desc: "Prepare and implement a practical leadership succession plan so the business can thrive beyond the current generation.",
    },
    {
      number: "03",
      title: "Next-Generation Development",
      desc: "Educate and coach next-generation family members to become informed, engaged, and responsible shareholders.",
    },
    {
      number: "04",
      title: "Family Business Board & Governance",
      desc: "Build an effective family business board and governance system that turns shareholder vision into clear priorities, sound decisions, and accountable action.",
    },
    {
      number: "05",
      title: "Governance Guidelines",
      desc: "Establish governance guidelines tailored to the organisation and practical enough to be used in everyday decision-making.",
    },
  ];

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
            How I Help
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground max-w-4xl leading-tight">
            How I Help Family Businesses Create Clarity, Continuity, and Confident Decisions
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
                Every family business is different. My advisory support is tailored to your ownership structure,
                family relationships, and long-term priorities — not to a standard programme.
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              >
                Discuss Your Family Business Priorities
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {services.map((service, idx) => (
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
