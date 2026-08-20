import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/LanguageContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t.nav.about, action: () => scrollTo("about") },
    { label: t.nav.services, action: () => scrollTo("services") },
    { label: t.nav.governance, action: () => scrollTo("governance") },
    { label: t.nav.board, action: () => scrollTo("board") },
    { label: t.nav.contact, action: () => scrollTo("contact") },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
  ];

  return (
    <>
      {/* ── Top credential strip ── */}
      <div className="bg-[hsl(0,20%,40%)] text-white text-xs tracking-widest uppercase text-center py-2 px-4 font-sans hidden md:block">
        {t.nav.strip}
      </div>

      {/* ── Main banner ── */}
      <header
        className={`sticky top-0 z-50 bg-[hsl(33,31%,96%)] border-b transition-shadow duration-300 ${
          scrolled ? "shadow-md border-[hsl(30,18%,80%)]" : "border-[hsl(30,18%,88%)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-lg md:text-xl font-semibold text-[hsl(0,0%,17%)] tracking-tight whitespace-nowrap hover:text-[hsl(0,20%,40%)] transition-colors"
            data-testid="navbar-logo"
          >
            Dr. Haluk Alacaklıoğlu
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[hsl(0,0%,30%)] tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="relative group py-1 hover:text-[hsl(0,20%,40%)] transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[hsl(0,20%,47%)] group-hover:w-full transition-all duration-200" />
              </button>
            ))}

            {/* Language switcher — desktop */}
            <div
              className="flex items-center gap-0.5 border border-[hsl(30,18%,78%)] overflow-hidden"
              role="group"
              aria-label="Language selector"
            >
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`px-2.5 py-1 text-xs font-medium tracking-widest transition-colors ${
                    lang === code
                      ? "bg-[hsl(0,20%,40%)] text-white"
                      : "text-[hsl(0,0%,40%)] hover:bg-[hsl(33,31%,90%)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 px-5 py-2 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors"
              data-testid="nav-contact-cta"
            >
              {t.nav.cta}
            </button>
          </nav>

          {/* Mobile: language + toggle */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language switcher — mobile */}
            <div
              className="flex items-center gap-0.5 border border-[hsl(30,18%,78%)] overflow-hidden"
              role="group"
              aria-label="Language selector"
            >
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`px-2 py-1 text-xs font-medium tracking-widest transition-colors ${
                    lang === code
                      ? "bg-[hsl(0,20%,40%)] text-white"
                      : "text-[hsl(0,0%,40%)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              className="p-2 text-[hsl(0,0%,17%)]"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[hsl(33,31%,96%)] border-t border-[hsl(30,18%,85%)] px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-left py-3 text-sm font-medium text-[hsl(0,0%,25%)] border-b border-[hsl(30,18%,90%)] last:border-0 hover:text-[hsl(0,20%,40%)] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 py-3 bg-[hsl(0,20%,40%)] text-white font-serif text-sm tracking-widest uppercase text-center hover:bg-[hsl(0,20%,33%)] transition-colors"
            >
              {t.nav.cta}
            </button>
          </div>
        )}
      </header>
    </>
  );
}
