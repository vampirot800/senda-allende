import Image from "next/image";
import { Church, Landmark, Trees, Hotel, Palette, ShoppingBag } from "lucide-react";

const NEARBY = [
  { Icon: Church,      name: "Parroquia de San Miguel Arcángel", distance: "A unos minutos a pie" },
  { Icon: Landmark,    name: "Centro Histórico",                  distance: "Caminando" },
  { Icon: Trees,       name: "Parque Benito Juárez",              distance: "Muy cerca" },
  { Icon: Hotel,       name: "Rosewood San Miguel",               distance: "Zona inmediata" },
  { Icon: Palette,     name: "Galerías y Cafés",                  distance: "En el entorno" },
  { Icon: ShoppingBag, name: "Plazas y comercios",                distance: "A pasos" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">Ubicación Privilegiada</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-6">En el corazón de <em className="text-terracotta">San Miguel</em></h2>
          <p className="font-sans text-brown/70 leading-relaxed">Senda Allende tiene una ubicación privilegiada en el corazón de San Miguel de Allende, a pocas cuadras de la Parroquia de San Miguel Arcángel, cerca del Centro Histórico, galerías, cafés, plazas y los principales referentes del destino.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
              <Image
                src="/images/mapa-ubicacion.jpg"
                alt="Mapa de ubicación Senda Allende — San Miguel de Allende"
                width={1484}
                height={966}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-light text-brown mb-2">Cerca de todo</h3>
            <ul className="space-y-3">
              {NEARBY.map(({ Icon, name, distance }) => (
                <li key={name} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-terracotta" />
                  <div>
                    <p className="font-sans text-sm font-medium text-brown">{name}</p>
                    <p className="font-sans text-xs text-brown/50 mt-0.5">{distance}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
