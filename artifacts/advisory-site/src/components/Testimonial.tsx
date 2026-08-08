import { motion } from "framer-motion";

export function Testimonial() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
              Experience matters, but no two family businesses are alike.
            </h2>
            <p className="text-lg text-foreground/75 font-light leading-relaxed mb-6">
              Lasting governance begins with understanding each family's culture, relationships,
              ownership structure, and business dynamics.
            </p>
            <p className="text-base text-foreground/65 font-light leading-relaxed mb-10">
              That is where an advisor with many years of hands-on experience helping families
              like yours can make a real difference. My work is always grounded in your specific
              situation — not in standard templates.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
            >
              Request a Confidential Discussion
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                label: "Cross-Cultural Experience",
                text: "Advising family businesses across five continents with a deep understanding of diverse ownership cultures and governance contexts.",
              },
              {
                label: "Academic Rigour",
                text: "PhD in Family Business Governance; Harvard Business School MBA with Honors. Theory grounded in practice.",
              },
              {
                label: "Senior Executive Background",
                text: "10+ years in international executive roles at P&G and Philip Morris. Former Managing Partner, Egon Zehnder International.",
              },
              {
                label: "Institution Builder",
                text: "Founding Chairman of Turkey's Corporate Governance Association (COGAT) and the Board Directors Association (BDA).",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 border border-border bg-background">
                <div className="w-1 bg-primary flex-shrink-0 rounded-full" />
                <div>
                  <h4 className="font-serif text-base font-medium text-foreground mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
