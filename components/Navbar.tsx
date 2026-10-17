"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "#about",    label: { es: "El Destino", en: "The Destination" } },
  { href: "#location", label: { es: "Ubicación",  en: "Location" } },
  { href: "#features", label: { es: "Amenidades", en: "Amenities" } },
  { href: "#models",   label: { es: "Modelos",    en: "Models" } },
  { href: "#prices",   label: { es: "Precios",    en: "Prices" } },
  { href: "#contact",  label: { es: "Contacto",   en: "Contact" } },
];

const LANG_LABELS: Record<Lang, string> = { es: "Español", en: "English" };

// One switch: clicking anywhere on it flips between Spanish and English.
function LanguageToggle({ light }: { light: boolean }) {
  const { lang, setLang, t } = useLang();
  const isEn = lang === "en";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={t({ es: "Cambiar a inglés", en: "Switch to Spanish" })}
      onClick={() => setLang(isEn ? "es" : "en")}
      className={`relative grid grid-cols-2 items-center rounded-full border p-0.5 font-sans text-[10px] tracking-wider uppercase cursor-pointer transition-colors ${light ? "border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20" : "border-stone-200 bg-white hover:border-terracotta/40"}`}
    >
      {/* Sliding thumb behind the active label */}
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full transition-transform duration-300 ease-out ${isEn ? "translate-x-full" : "translate-x-0"} ${light ? "bg-white" : "bg-terracotta"}`}
      />
      {(["es", "en"] as Lang[]).map((code) => (
        <span
          key={code}
          className={`relative z-10 px-2.5 py-1 text-center transition-colors duration-300 ${
            lang === code ? (light ? "text-brown" : "text-white") : (light ? "text-white/80" : "text-brown/60")
          }`}
        >
          {LANG_LABELS[code]}
        </span>
      ))}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6 py-4">
        <a href="#hero" className="flex flex-col leading-none flex-shrink-0">
          <span className={`font-serif text-base font-semibold tracking-wide transition-colors ${scrolled ? "text-brown" : "text-white"}`}>SENDA ALLENDE</span>
          <span className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors ${scrolled ? "text-gold" : "text-white/80"}`}>Residences · San Miguel</span>
        </a>
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`whitespace-nowrap font-sans text-xs tracking-widest uppercase transition-colors hover:text-terracotta ${scrolled ? "text-brown/70" : "text-white/90"}`}>{t(link.label)}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><LanguageToggle light={!scrolled} /></div>
          <a href="#contact" className={`hidden xl:inline-flex items-center whitespace-nowrap px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-sans transition-all duration-300 ${scrolled ? "bg-terracotta text-white hover:bg-terracotta-dark" : "bg-white/20 text-white border border-white/40 hover:bg-white/30 backdrop-blur-sm"}`}>{t({ es: "Solicitar Info", en: "Request Info" })}</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden p-1 ${scrolled ? "text-brown" : "text-white"}`} aria-label={t({ es: "Abrir menú", en: "Open menu" })}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {/* On phones the full-word switch doesn't fit beside the logo, so it gets its own row */}
      <div className="sm:hidden flex justify-end px-6 -mt-2 pb-3">
        <LanguageToggle light={!scrolled} />
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-sm border-t border-stone-100 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="font-sans text-sm tracking-widest uppercase text-brown/70 hover:text-terracotta transition-colors">{t(link.label)}</a></li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex w-full justify-center px-5 py-3 rounded-full bg-terracotta text-white text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-colors">{t({ es: "Solicitar Información", en: "Request Information" })}</a>
        </div>
      )}
    </header>
  );
}
