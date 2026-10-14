"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const HIGHLIGHTS = [
  { value: "2008", label: { es: "Patrimonio de la Humanidad UNESCO", en: "UNESCO World Heritage Site" } },
  { value: "#1",   label: { es: "Ciudad más bella del mundo (Travel + Leisure)", en: "Most beautiful city in the world (Travel + Leisure)" } },
  { value: "∞",    label: { es: "Plusvalía constante y creciente", en: "Steady, growing appreciation" } },
];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">{t({ es: "El Destino", en: "The Destination" })}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
              San Miguel de Allende,<br /><em className="text-terracotta">{t({ es: "un lugar único", en: "a one-of-a-kind place" })}</em>
            </h2>
            <div className="space-y-4 font-sans text-brown/70 leading-relaxed">
              <p>{t({
                es: "San Miguel de Allende es uno de los destinos más valorados de México y del mundo. Reconocido por su belleza, cultura, calidad de vida, arquitectura, comunidad y apreciación constante.",
                en: "San Miguel de Allende is one of the most highly regarded destinations in Mexico and the world, renowned for its beauty, culture, quality of life, architecture, community and steady appreciation.",
              })}</p>
              <p>{t({
                es: "Es el lugar ideal para vivir, invertir y disfrutar cada día como una experiencia. Su centro histórico, declarado Patrimonio de la Humanidad por la UNESCO, combina el encanto colonial con una oferta gastronómica, artística y cultural de primer nivel.",
                en: "It is the ideal place to live, invest and enjoy every day as an experience. Its historic center, a UNESCO World Heritage Site, combines colonial charm with world-class dining, art and culture.",
              })}</p>
              <p>{t({
                es: "La demanda por vivienda premium en San Miguel crece cada año, consolidándolo como uno de los mercados inmobiliarios con mayor plusvalía en Latinoamérica.",
                en: "Demand for premium housing in San Miguel grows every year, making it one of the fastest-appreciating real estate markets in Latin America.",
              })}</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-10">
              {HIGHLIGHTS.map((h) => (
                <div key={h.value} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-light text-terracotta mb-1">{h.value}</div>
                  <div className="font-sans text-[10px] tracking-wide text-brown/50 leading-tight">{t(h.label)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="/images/san-miguel.jpeg"
                alt={t({ es: "Calle típica de San Miguel de Allende con la Parroquia de fondo", en: "Typical San Miguel de Allende street with the Parroquia in the background" })}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-brown/10 max-w-[180px]">
              <p className="font-serif text-xl font-light text-terracotta mb-1">{t({ es: "+20 años", en: "20+ years" })}</p>
              <p className="font-sans text-xs text-brown/60 leading-tight">{t({ es: "de plusvalía sostenida en el mercado inmobiliario", en: "of sustained real estate appreciation" })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
