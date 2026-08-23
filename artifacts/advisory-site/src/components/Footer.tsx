import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-serif mb-3">Dr. Haluk Alacaklıoğlu</h2>
            <p className="text-background/50 font-light text-sm leading-relaxed mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-background/40 font-light text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-background/40 text-xs font-medium tracking-widest uppercase mb-4">
              {t.footer.navLabel}
            </p>
            <div className="flex flex-col gap-3">
              {t.footer.navLinks.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => scrollTo(item.anchor)}
                  className="text-background/65 hover:text-white transition-colors text-left text-sm font-light"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-background/40 text-xs font-medium tracking-widest uppercase mb-4">
              {t.footer.contactLabel}
            </p>
            <p className="text-background/60 font-light text-sm leading-relaxed mb-6">
              {t.footer.contactDesc}
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mb-4 w-full py-3 bg-primary text-primary-foreground font-serif text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors text-center"
            >
              {t.footer.ctaBtn}
            </button>
            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/60 hover:text-[#25D366] transition-colors text-sm"
            >
              <SiWhatsapp size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-xs font-light">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-background/25 text-xs font-light">
            {t.footer.firm}
          </p>
        </div>
      </div>
    </footer>
  );
}
