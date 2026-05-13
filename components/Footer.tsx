import { DISCLAIMER, CONTACT } from "@/data/properties";

const NAV_LINKS = [
  { href: "#about", label: "El Destino" }, { href: "#location", label: "Ubicación" },
  { href: "#gallery", label: "Galería" }, { href: "#features", label: "Amenidades" },
  { href: "#models", label: "Modelos" }, { href: "#prices", label: "Precios" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-xl font-light tracking-wide text-white mb-1">SENDA ALLENDE</p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Residences · San Miguel de Allende</p>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs">Residencias boutique en el corazón de San Miguel de Allende, Guanajuato, México.</p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Navegación</p>
            <ul className="space-y-2.5">{NAV_LINKS.map((link) => (<li key={link.href}><a href={link.href} className="font-sans text-xs text-white/50 hover:text-white transition-colors">{link.label}</a></li>))}</ul>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Contacto</p>
            <div className="space-y-3">
              {CONTACT.agents.map((agent) => (
                <a key={agent.whatsapp} href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="block font-sans text-xs text-white/50 hover:text-white transition-colors">
                  WhatsApp · {agent.name}
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="block font-sans text-xs text-white/50 hover:text-white transition-colors">{CONTACT.email}</a>
              <p className="font-sans text-xs text-white/50">San Miguel de Allende, Guanajuato, México</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">Aviso Legal</p>
          <p className="font-sans text-xs text-white/40 leading-relaxed max-w-4xl">{DISCLAIMER}</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] text-white/25">© {new Date().getFullYear()} Senda Allende Residences. Todos los derechos reservados.</p>
          <p className="font-sans text-[10px] text-white/20">San Miguel de Allende, Guanajuato, México</p>
        </div>
      </div>
    </footer>
  );
}
