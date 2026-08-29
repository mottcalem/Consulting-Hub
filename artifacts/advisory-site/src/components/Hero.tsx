import { motion } from "framer-motion";
import heroImg from "@images/aaa.jpg";
import heroImgMobile from "@images/bbb.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

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
        aria-label={t.hero.eyebrow}
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${heroImgMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden relative z-10 flex flex-col justify-end h-full px-5 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-[10px] font-sans uppercase tracking-[0.22em] text-white/55 mb-3">
            {t.hero.eyebrow}
          </p>
          <h1 className={`font-serif leading-[1.15] font-semibold text-white mb-5 ${lang === "tr" ? "text-[1.55rem]" : "text-[1.75rem]"}`}>
            {t.hero.headline}
          </h1>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-3.5 bg-primary text-primary-foreground font-sans text-sm font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
          >
            <span dangerouslySetInnerHTML={{ __html: t.hero.ctaPrimary }} />
          </button>
        </motion.div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex relative z-10 flex-col justify-center h-full w-full px-16 xl:px-24 py-16">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-white/60 mb-5">
            {t.hero.eyebrow}
          </p>
          <h1 className={`font-serif leading-[1.12] font-semibold text-white mb-6 ${lang === "tr" ? "text-4xl lg:text-[2.75rem]" : "text-4xl lg:text-[3.2rem]"}`}>
            {t.hero.headline}
          </h1>
          <div
            className="font-sans text-[18px] md:text-[20px] text-white/75 leading-relaxed mb-10 space-y-3"
            dangerouslySetInnerHTML={{ __html: t.hero.subheadline }}
          />
          <div className="flex flex-row gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground text-left font-sans text-base font-semibold tracking-wide uppercase leading-snug hover:bg-primary/90 transition-colors"
            >
              <span dangerouslySetInnerHTML={{ __html: t.hero.ctaPrimary }} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
