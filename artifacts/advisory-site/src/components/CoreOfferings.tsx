import { motion } from "framer-motion";

export function CoreOfferings() {
  const offerings = [
    {
      title: "Board Performance Assessment",
      desc: "Assess board structure, dynamics, decision quality, and governance practices to identify strengths, gaps, and practical priorities for stronger oversight and long-term effectiveness."
    },
    {
      title: "Establishing Competent Boards",
      desc: "Help owners and leadership teams design competent boards with the right mandate, composition, governance architecture, and working practices for sustainable performance."
    },
    {
      title: "Independent Board Membership",
      desc: "Serve as an independent board member, bringing objective judgment, governance discipline, and seasoned international perspective to complex strategic and ownership matters."
    },
    {
      title: "Board Coaching",
      desc: "Coach board chairs, directors, and senior leaders to improve meeting quality, role clarity, boardroom dynamics, and the effectiveness of strategic dialogue."
    },
    {
      title: "Board Advisor Credentials",
      desc: "Harvard Business School graduate with honors, PhD in Corporate Governance and Family Business, former Managing Partner at Egon Zehnder International, founder of Family Business Governance, LLP, and founder of Board Advisor."
    },
    {
      title: "Selected Case Examples",
      desc: "Representative work includes advising publicly traded and family-owned companies on board effectiveness, succession planning, governance frameworks, independent oversight, and practical board development across multiple regions."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif max-w-4xl leading-tight">
            Core Advisory Offerings
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-background/5 border border-background/10 p-10 hover:bg-background/10 transition-colors"
            >
              <h3 className="text-xl font-serif mb-4 text-background">{offering.title}</h3>
              <p className="text-background/70 font-light leading-relaxed text-sm">
                {offering.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
