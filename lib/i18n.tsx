"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L } from "@/data/properties";

// Language switch (ES / EN).
// The page is pre-rendered in Spanish; the visitor's choice is applied in the browser
// and remembered in localStorage. First-time visitors whose browser is in English get English.

export type Lang = "es" | "en";
const STORAGE_KEY = "senda-allende-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: L) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    if (saved === "es" || saved === "en") setLangState(saved);
    else if (navigator.language.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  }, []);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
