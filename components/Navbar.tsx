"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about",    label: "El Destino" },
  { href: "#location", label: "Ubicación" },
  { href: "#features", label: "Amenidades" },
  { href: "#models",   label: "Modelos" },
  { href: "#prices",   label: "Precios" },
  { href: "#contact",  label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <a href="#hero" className="flex flex-col leading-none">
          <span className={`font-serif text-base font-semibold tracking-wide transition-colors ${scrolled ? "text-brown" : "text-white"}`}>SENDA ALLENDE</span>
          <span className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors ${scrolled ? "text-gold" : "text-white/80"}`}>Residences · San Miguel</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`font-sans text-xs tracking-widest uppercase transition-colors hover:text-terracotta ${scrolled ? "text-brown/70" : "text-white/90"}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-sans transition-all duration-300 ${scrolled ? "bg-terracotta text-white hover:bg-terracotta-dark" : "bg-white/20 text-white border border-white/40 hover:bg-white/30 backdrop-blur-sm"}`}>Solicitar Info</a>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden p-1 ${scrolled ? "text-brown" : "text-white"}`} aria-label="Abrir menú">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-sm border-t border-stone-100 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="font-sans text-sm tracking-widest uppercase text-brown/70 hover:text-terracotta transition-colors">{link.label}</a></li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex w-full justify-center px-5 py-3 rounded-full bg-terracotta text-white text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-colors">Solicitar Información</a>
        </div>
      )}
    </header>
  );
}
