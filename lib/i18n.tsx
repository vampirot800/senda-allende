"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L } from "@/data/properties";

// Language switch (ES / EN).
// The site always loads in Spanish; the ES/EN toggle in the header switches it to English
// for the current visit.

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: L) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
