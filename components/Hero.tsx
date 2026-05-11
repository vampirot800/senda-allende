import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/fachada-dia.jpg"
        alt="Senda Allende Residences — Fachada exterior"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-brown/55" aria-hidden="true" />
      {/* Subtle bottom shadow — keeps edge clean without a white band */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-white/70 mb-6">
          San Miguel de Allende · Guanajuato · México
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6">
          Senda Allende<br />
          <span className="italic text-gold">Residences</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-white/30" />
          <span className="text-white/50 text-xs tracking-widest">✦</span>
          <div className="h-px w-16 bg-white/30" />
        </div>
        <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Residencias boutique en el corazón de San Miguel de Allende.
          Vida, inversión y experiencia en el destino más valorado de México.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#models" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-terracotta text-white font-sans text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-all duration-300 shadow-lg shadow-terracotta/30">
            Ver Modelos
          </a>
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/40 text-white font-sans text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Contáctanos
          </a>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
