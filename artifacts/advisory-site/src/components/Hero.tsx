import { motion } from "framer-motion";
import heroImg from "@images/aaa.jpg";
import heroImgMobile from "@images/bbb.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col" style={{ height: "calc(100svh - 40px)", minHeight: 480 }}>
      {/* Full-bleed background photo */}
      <div
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Dr. Haluk Alacaklıoğlu — Family Business Governance Advisor"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Mobile: override with portrait photo via pseudo-approach using a child div */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${heroImgMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Mobile gradient: bottom-up so face is clear, text area at bottom is readable */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
        {/* Desktop gradient: left-to-right */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      </div>

      {/* ── MOBILE layout — text pinned to bottom ── */}
      <div className="md:hidden relative z-10 flex flex-col justify-end h-full px-5 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-[10px] font-sans uppercase tracking-[0.22em] text-white/55 mb-3">
            Family Business Governance Advisor
          </p>
          <h1 className="font-serif text-[1.75rem] leading-[1.15] font-semibold text-white mb-5">
            Build a Family Enterprise That Stays United and Successful Across Generations.
          </h1>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-3.5 bg-[hsl(0,20%,40%)] text-white font-serif text-xs tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
          >
            Discuss Your Priorities
          </button>
        </motion.div>
      </div>

      {/* ── DESKTOP layout — text pinned to left-center ── */}
      <div className="hidden md:flex relative z-10 flex-col justify-center h-full w-full px-16 xl:px-24 py-16">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-white/60 mb-5">
            Family Business Governance Advisor
          </p>
          <h1 className="font-serif text-4xl lg:text-[3.2rem] leading-[1.12] font-semibold text-white mb-6">
            Build a Family Enterprise That Stays United, Well Governed, and Successful Across Generations.
          </h1>
          <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10">
            Helping family businesses create clarity, continuity, and confident decisions.
          </p>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
            >
              Discuss Your Priorities
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-8 py-4 border border-white/50 text-white font-serif text-sm tracking-widest uppercase hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              How I Can Help
            </button>
          </div>
        </motion.div>

        {/* Stats — desktop only */}
        <motion.div
          className="absolute bottom-10 left-16 xl:left-24 flex flex-wrap gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          {[
            { value: "Since 2000", label: "Advisory Practice" },
            { value: "5 Continents", label: "Global Reach" },
            { value: "100s", label: "Family Businesses Advised" },
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
