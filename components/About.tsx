import Image from "next/image";

const HIGHLIGHTS = [
  { value: "2008", label: "Patrimonio de la Humanidad UNESCO" },
  { value: "#1",   label: "Ciudad más bella del mundo (Travel + Leisure)" },
  { value: "∞",    label: "Plusvalía constante y creciente" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">El Destino</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-8">
              San Miguel de Allende,<br /><em className="text-terracotta">un lugar único</em>
            </h2>
            <div className="space-y-4 font-sans text-brown/70 leading-relaxed">
              <p>San Miguel de Allende es uno de los destinos más valorados de México y del mundo. Reconocido por su belleza, cultura, calidad de vida, arquitectura, comunidad y apreciación constante.</p>
              <p>Es el lugar ideal para vivir, invertir y disfrutar cada día como una experiencia. Su centro histórico, declarado Patrimonio de la Humanidad por la UNESCO, combina el encanto colonial con una oferta gastronómica, artística y cultural de primer nivel.</p>
              <p>La demanda por vivienda premium en San Miguel crece cada año, consolidándolo como uno de los mercados inmobiliarios con mayor plusvalía en Latinoamérica.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-10">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-light text-terracotta mb-1">{h.value}</div>
                  <div className="font-sans text-[10px] tracking-wide text-brown/50 leading-tight">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="/images/san-miguel.jpeg"
                alt="Calle típica de San Miguel de Allende con la Parroquia de fondo"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-brown/10 max-w-[180px]">
              <p className="font-serif text-xl font-light text-terracotta mb-1">+20 años</p>
              <p className="font-sans text-xs text-brown/60 leading-tight">de plusvalía sostenida en el mercado inmobiliario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
