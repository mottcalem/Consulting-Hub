import { motion } from "framer-motion";
import successionImg from "@images/4.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export function SuccessionSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="succession" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/3] relative overflow-hidden lg:sticky lg:top-32"
          >
            <img
              src={successionImg}
              alt={t.succession.imgAlt}
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
            <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.succession.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight">
              {t.succession.heading}
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-4">
              {t.succession.p1}
            </p>
            <p className="text-base text-foreground/65 font-light leading-relaxed mb-10">
              {t.succession.p2}
            </p>

            <div className="flex flex-col gap-6">
              {t.succession.topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * idx }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-primary/40 flex-shrink-0 rounded-full mt-1" />
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-1">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{topic.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              >
                {t.succession.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
