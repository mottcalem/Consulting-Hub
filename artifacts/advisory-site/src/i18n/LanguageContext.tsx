import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en } from "./en";
import { tr } from "./tr";
import type { Translations } from "./types";

export type Language = "en" | "tr";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const translations: Record<Language, Translations> = { en, tr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "tr" || stored === "en") return stored;
    } catch {}
    return "en";
  });

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  // Update html[lang] for SEO / accessibility
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
