import { motion } from "framer-motion";

export function AdvisoryServices() {
  const services = [
    {
      title: "Family Governance",
      desc: "Design governance structures that strengthen decision-making, clarify roles, and preserve alignment across generations."
    },
    {
      title: "Board Effectiveness",
      desc: "Improve board composition, oversight, and strategic contribution with practical governance counsel for owners and directors."
    },
    {
      title: "Succession Planning",
      desc: "Prepare leadership transitions with a disciplined approach to continuity, readiness, and long-term stewardship."
    },
    {
      title: "Strategic Counsel",
      desc: "Advise family shareholders and senior leaders on sensitive business issues where trust, perspective, and experience matter most."
    }
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
            Advisory Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground max-w-4xl leading-tight">
            Guidance for Complex Leadership Decisions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light sticky top-32"
            >
              Support tailored to privately held and family-owned enterprises navigating governance, succession, ownership alignment, and board performance.
            </motion.p>
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
                  <h3 className="text-2xl font-serif text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
