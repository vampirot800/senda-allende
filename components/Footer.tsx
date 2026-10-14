"use client";
import { DISCLAIMER, CONTACT } from "@/data/properties";
import { useLang } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "#about", label: { es: "El Destino", en: "The Destination" } }, { href: "#location", label: { es: "Ubicación", en: "Location" } },
  { href: "#gallery", label: { es: "Galería", en: "Gallery" } }, { href: "#features", label: { es: "Amenidades", en: "Amenities" } },
  { href: "#models", label: { es: "Modelos", en: "Models" } }, { href: "#prices", label: { es: "Precios", en: "Prices" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

export default function Footer() {
  const { t } = useLang();
  const country = t({ es: "Guanajuato, México", en: "Guanajuato, Mexico" });
  return (
    <footer className="bg-brown text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-xl font-light tracking-wide text-white mb-1">SENDA ALLENDE</p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Residences · San Miguel de Allende</p>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs">{t({
              es: "Residencias boutique en el corazón de San Miguel de Allende, Guanajuato, México.",
              en: "Boutique residences in the heart of San Miguel de Allende, Guanajuato, Mexico.",
            })}</p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">{t({ es: "Navegación", en: "Navigation" })}</p>
            <ul className="space-y-2.5">{NAV_LINKS.map((link) => (<li key={link.href}><a href={link.href} className="font-sans text-xs text-white/50 hover:text-white transition-colors">{t(link.label)}</a></li>))}</ul>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">{t({ es: "Contacto", en: "Contact" })}</p>
            <div className="space-y-3">
              {CONTACT.agents.map((agent) => (
                <a key={agent.whatsapp} href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(t(CONTACT.whatsappMessage))}`} target="_blank" rel="noopener noreferrer" className="block font-sans text-xs text-white/50 hover:text-white transition-colors">
                  WhatsApp · {agent.name}
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="block font-sans text-xs text-white/50 hover:text-white transition-colors">{CONTACT.email}</a>
              <p className="font-sans text-xs text-white/50">Prolongación Del Refugio NO. 15, COL. SAN ANTONIO, San Miguel De Allende, {country}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">{t({ es: "Aviso Legal", en: "Legal Notice" })}</p>
          <p className="font-sans text-xs text-white/40 leading-relaxed max-w-4xl">{t(DISCLAIMER)}</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] text-white/25">© {new Date().getFullYear()} Senda Allende Residences. {t({ es: "Todos los derechos reservados.", en: "All rights reserved." })}</p>
          <p className="font-sans text-[10px] text-white/20">San Miguel de Allende, {country}</p>
        </div>
      </div>
    </footer>
  );
}
