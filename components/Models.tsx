"use client";
import { useState } from "react";
import Image from "next/image";
import { BedDouble, Bath, LayoutPanelLeft } from "lucide-react";
import { MODELS } from "@/data/properties";
import ModelModal from "./ModelModal";

export default function Models() {
  const [activeModel, setActiveModel] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (modelIdx: number) => {
    setActiveModel(modelIdx);
    setActiveIndex(0);
  };

  const closeModal = () => {
    setActiveModel(null);
    setActiveIndex(0);
  };

  return (
    <section id="models" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">Modelos de Departamento</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-6">
            Encuentra el espacio <em className="text-terracotta">ideal para ti</em>
          </h2>
          <p className="font-sans text-brown/60 leading-relaxed">
            Cuatro tipologías diseñadas para distintos estilos de vida, desde residencias compactas hasta penthouses con rooftop privado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {MODELS.map((model, idx) => (
            <article key={model.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-300 flex flex-col">
              {/* Model image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={model.image}
                  alt={`${model.name} — Senda Allende Residences`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-terracotta text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1 rounded-full z-10">
                  {model.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-5 flex-1">
                <div>
                  <h3 className="font-serif text-xl font-light text-brown mb-1">{model.name}</h3>
                  {model.floorNote && (
                    <p className="font-sans text-[10px] tracking-wide uppercase text-terracotta/80 mb-1.5">{model.floorNote}</p>
                  )}
                  <p className="font-sans text-xs text-brown/50 leading-relaxed">{model.description}</p>
                </div>

                <div className="flex gap-4 text-brown/60">
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <BedDouble className="w-4 h-4" />
                    {model.bedrooms} {model.bedrooms === 1 ? "Recámara" : "Recámaras"}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <Bath className="w-4 h-4" />
                    {model.bathrooms} {model.bathrooms === 1 ? "Baño" : "Baños"}
                  </span>
                </div>

                <div className="space-y-1.5 border-t border-stone-100 pt-4">
                  {model.areas.map((area) => (
                    <div key={area.label} className={`flex justify-between font-sans text-xs ${area.highlight ? "font-semibold text-brown border-t border-stone-200 pt-2 mt-2" : "text-brown/60"}`}>
                      <span>{area.label}</span>
                      <span>{area.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {model.amenities.map((a) => (
                    <span key={a} className="font-sans text-[10px] bg-cream px-2.5 py-1 rounded-full text-brown/60 border border-stone-100">{a}</span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(idx)}
                  className="mt-auto w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-terracotta text-terracotta font-sans text-xs tracking-widest uppercase hover:bg-terracotta hover:text-white transition-colors duration-200"
                >
                  <LayoutPanelLeft className="w-3.5 h-3.5" />
                  Ver Modelo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModel !== null && (
        <ModelModal
          modelName={MODELS[activeModel].name}
          modelTag={MODELS[activeModel].tag}
          images={MODELS[activeModel].floorPlans}
          activeIndex={activeIndex}
          onChangeIndex={setActiveIndex}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
