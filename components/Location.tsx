"use client";
import Image from "next/image";
import { Church, Landmark, Trees, Hotel, Palette, ShoppingBag, MapPin } from "lucide-react";
import { CONTACT } from "@/data/properties";
import { useLang } from "@/lib/i18n";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;

const NEARBY = [
  { Icon: Church,      name: { es: "Parroquia de San Miguel Arcángel", en: "Parroquia de San Miguel Arcángel" }, distance: { es: "900 metros / 12 minutos caminando", en: "900 m / 12-minute walk" } },
  { Icon: Landmark,    name: { es: "Centro Histórico",     en: "Historic Center" },      distance: { es: "500 metros / 5 minutos caminando", en: "500 m / 5-minute walk" } },
  { Icon: Trees,       name: { es: "Parque Benito Juárez", en: "Benito Juárez Park" },   distance: { es: "1.3 km / 15 minutos caminando", en: "1.3 km / 15-minute walk" } },
  { Icon: Hotel,       name: { es: "Rosewood San Miguel",  en: "Rosewood San Miguel" },  distance: { es: "1 km / 14 minutos caminando", en: "1 km / 14-minute walk" } },
  { Icon: Palette,     name: { es: "Galerías y Cafés",     en: "Galleries & Cafés" },    distance: { es: "En el entorno", en: "In the neighborhood" } },
  { Icon: ShoppingBag, name: { es: "Plazas y comercios",   en: "Plazas & Shops" },       distance: { es: "A pasos", en: "Steps away" } },
];

export default function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">{t({ es: "Ubicación Privilegiada", en: "Prime Location" })}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-6">{t({ es: "En el corazón de ", en: "In the heart of " })}<em className="text-terracotta">San Miguel</em></h2>
          <p className="font-sans text-brown/70 leading-relaxed">{t({
            es: "Senda Allende tiene una ubicación privilegiada en el corazón de San Miguel de Allende, a pocas cuadras de la Parroquia de San Miguel Arcángel, cerca del Centro Histórico, galerías, cafés, plazas y los principales referentes del destino.",
            en: "Senda Allende enjoys a prime location in the heart of San Miguel de Allende, just a few blocks from the Parroquia de San Miguel Arcángel and close to the Historic Center, galleries, cafés, plazas and the city's main landmarks.",
          })}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
              <Image
                src="/images/mapa-ubicacion.jpg"
                alt={t({ es: "Mapa de ubicación Senda Allende — San Miguel de Allende", en: "Senda Allende location map — San Miguel de Allende" })}
                width={1484}
                height={966}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-light text-brown mb-2">{t({ es: "Cerca de todo", en: "Close to everything" })}</h3>
            <ul className="space-y-3">
              {NEARBY.map(({ Icon, name, distance }) => (
                <li key={name.es} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-terracotta" />
                  <div>
                    <p className="font-sans text-sm font-medium text-brown">{t(name)}</p>
                    <p className="font-sans text-xs text-brown/50 mt-0.5">{t(distance)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL} target="_blank" rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terracotta text-white font-sans text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-colors duration-200 shadow-lg shadow-terracotta/20"
            >
              <MapPin className="w-4 h-4" />
              {t({ es: "Ver en Google Maps", en: "View on Google Maps" })}
            </a>
            <p className="font-sans text-xs text-brown/50 text-center leading-relaxed">{CONTACT.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
