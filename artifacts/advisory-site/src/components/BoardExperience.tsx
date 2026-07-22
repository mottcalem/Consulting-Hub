import { motion } from "framer-motion";

export function BoardExperience() {
  const experiences = [
    {
      num: "01",
      title: "Global Governance Background",
      desc: "Dr. Haluk Alacaklioglu has advised boards of publicly traded and family-owned companies, with international experience across North America, Europe, the Middle East, India, and South Africa."
    },
    {
      num: "02",
      title: "Institution Building",
      desc: "He pioneered the establishment of Turkey's first independent Corporate Governance Association, later led the Board Members Association, and helped establish the regional chapter of the Family Business Network."
    },
    {
      num: "03",
      title: "Selected Work Examples",
      desc: "Representative engagements include board performance reviews, establishing stronger governance structures, advising on succession-sensitive board transitions, and supporting owners seeking independent board perspective."
    },
    {
      num: "04",
      title: "Boardroom Value",
      desc: "Clients benefit from objective counsel, stronger board discipline, practical governance design, and an experienced independent voice for high-stakes ownership and leadership decisions."
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
            Board Advisor and Member Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/20 border border-primary-foreground/20">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-primary p-12 lg:p-16 flex flex-col justify-center"
              >
                <div className="text-primary-foreground/40 font-serif text-5xl mb-6">{exp.num}</div>
                <h3 className="text-2xl font-serif mb-4">{exp.title}</h3>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-background text-foreground p-8 text-center shadow-2xl border border-border flex-col items-center justify-center z-10"
          >
            <p className="font-serif italic text-lg leading-relaxed text-foreground/90">
              "Acknowledged by the Harvard Business School Case Study System as an Educator, he brings boardroom judgment shaped by decades of governance work, executive assessment, and advisory leadership."
            </p>
          </motion.div>
        </div>

        {/* Mobile Quote Card */}
        <div className="lg:hidden mt-12 bg-background text-foreground p-8 text-center border border-border">
          <p className="font-serif italic text-lg leading-relaxed text-foreground/90">
            "Acknowledged by the Harvard Business School Case Study System as an Educator, he brings boardroom judgment shaped by decades of governance work, executive assessment, and advisory leadership."
          </p>
        </div>
      </div>
    </section>
  );
}
