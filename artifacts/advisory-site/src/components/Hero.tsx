import { motion } from "framer-motion";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[88vh] min-h-[560px] flex flex-col">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Executive boardroom"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: dark left, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-white/60 mb-5">
            Trusted Advisory
          </p>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] font-semibold text-white mb-6">
            Family Business and Board Governance Expert Advisor
          </h1>

          {/* Sub */}
          <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
            Globally acclaimed advisory support for business-owning families, boards, and
            multi-generational enterprises. Since 1989, serving clients across 4 continents
            and more than 30 countries with strategic counsel grounded in governance,
            succession, and leadership continuity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              data-testid="hero-book-now"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-8 py-4 border border-white/50 text-white font-serif text-sm tracking-widest uppercase hover:bg-white/10 transition-colors backdrop-blur-sm"
              data-testid="hero-explore-services"
            >
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* Bottom stat pills */}
        <motion.div
          className="absolute bottom-10 left-6 lg:left-10 flex flex-wrap gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {[
            { value: "$2B+", label: "Assets Advised" },
            { value: "500+", label: "Clients Served" },
            { value: "30+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <span className="font-serif text-2xl font-semibold block">{stat.value}</span>
              <span className="font-sans text-xs uppercase tracking-widest text-white/55">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
