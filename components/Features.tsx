import { Gem, UtensilsCrossed, WashingMachine, Wind, ArrowUpDown, Package, Sunset, MapPin } from "lucide-react";
import { FEATURES } from "@/data/properties";

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  "Acabados de alta calidad":     (p) => <Gem {...p} />,
  "Cocina totalmente equipada":   (p) => <UtensilsCrossed {...p} />,
  "Centro de lavado":             (p) => <WashingMachine {...p} />,
  "Aire acondicionado":           (p) => <Wind {...p} />,
  "Elevador de servicio / carga": (p) => <ArrowUpDown {...p} />,
  "Bodega por departamento":      (p) => <Package {...p} />,
  "Rooftops privados":            (p) => <Sunset {...p} />,
  "Ubicación privilegiada":       (p) => <MapPin {...p} />,
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-brown text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Amenidades Premium</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">Cada detalle, <em className="text-gold">pensado para ti</em></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.label];
            return (
              <div key={feature.label} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-6 text-center transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {Icon ? <Icon className="w-6 h-6 text-gold/70 group-hover:text-gold transition-colors" /> : <div className="w-6 h-6 rounded-full border border-gold/40" />}
                </div>
                <p className="font-sans text-sm text-white/80 group-hover:text-white leading-tight transition-colors">{feature.label}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="font-serif text-xl md:text-2xl font-light text-white/70 italic max-w-2xl mx-auto leading-relaxed">&ldquo;Diseñado para quienes valoran la calidad de vida, la privacidad y la experiencia de vivir en San Miguel de Allende.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
