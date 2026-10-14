"use client";
import { useState } from "react";
import Image from "next/image";
import { BedDouble, Bath, LayoutPanelLeft, Sunset } from "lucide-react";
import { MODELS, ROOF_GARDEN } from "@/data/properties";
import { useLang } from "@/lib/i18n";
import ModelModal from "./ModelModal";

export default function Models() {
  const { t } = useLang();
  const [activeModel, setActiveModel] = useState<number | "roof" | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlan = activeModel === "roof" ? ROOF_GARDEN : activeModel !== null ? MODELS[activeModel] : null;

  const openModal = (modelIdx: number | "roof") => {
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
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">{t({ es: "Modelos de Departamento", en: "Apartment Models" })}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-6">
            {t({ es: "Encuentra el espacio ", en: "Find the space " })}<em className="text-terracotta">{t({ es: "ideal para ti", en: "that's right for you" })}</em>
          </h2>
          <p className="font-sans text-brown/60 leading-relaxed">
            {t({
              es: "Cuatro tipologías diseñadas para distintos estilos de vida, desde residencias compactas hasta penthouses con rooftop privado.",
              en: "Four layouts designed for different lifestyles, from compact residences to penthouses with a private rooftop.",
            })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {MODELS.map((model, idx) => (
            <article key={model.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-300 flex flex-col">
              {/* Model image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={model.image}
                  alt={`${t(model.name)} — Senda Allende Residences`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-terracotta text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1 rounded-full z-10">
                  {t(model.tag)}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-5 flex-1">
                <div>
                  <h3 className="font-serif text-xl font-light text-brown mb-1">{t(model.name)}</h3>
                  {model.floorNote && (
                    <p className="font-sans text-[10px] tracking-wide uppercase text-terracotta/80 mb-1.5">{t(model.floorNote)}</p>
                  )}
                  <p className="font-sans text-xs text-brown/50 leading-relaxed">{t(model.description)}</p>
                </div>

                <div className="flex gap-4 text-brown/60">
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <BedDouble className="w-4 h-4" />
                    {model.bedrooms} {model.bedrooms === 1 ? t({ es: "Recámara", en: "Bedroom" }) : t({ es: "Recámaras", en: "Bedrooms" })}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-xs">
                    <Bath className="w-4 h-4" />
                    {model.bathrooms} {model.bathrooms === 1 ? t({ es: "Baño", en: "Bath" }) : t({ es: "Baños", en: "Baths" })}
                  </span>
                </div>

                <div className="space-y-1.5 border-t border-stone-100 pt-4">
                  {model.areas.map((area) => (
                    <div key={area.label.es} className={`flex justify-between font-sans text-xs ${area.highlight ? "font-semibold text-brown border-t border-stone-200 pt-2 mt-2" : "text-brown/60"}`}>
                      <span>{t(area.label)}</span>
                      <span>{area.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {model.amenities.map((a) => (
                    <span key={a.es} className="font-sans text-[10px] bg-cream px-2.5 py-1 rounded-full text-brown/60 border border-stone-100">{t(a)}</span>
                  ))}
                </div>

                <button
                  onClick={() => openModal(idx)}
                  className="mt-auto w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-terracotta text-terracotta font-sans text-xs tracking-widest uppercase hover:bg-terracotta hover:text-white transition-colors duration-200"
                >
                  <LayoutPanelLeft className="w-3.5 h-3.5" />
                  {t({ es: "Ver Modelo", en: "View Model" })}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Roof Garden — Nivel 3 of Modelos 2, 3 y 4 only */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <button
            onClick={() => openModal("roof")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta text-white font-sans text-xs tracking-widest uppercase hover:bg-terracotta-dark transition-colors duration-200 shadow-lg shadow-terracotta/20"
          >
            <Sunset className="w-4 h-4" />
            {t(ROOF_GARDEN.buttonLabel)}
          </button>
          <p className="font-sans text-[10px] tracking-wide uppercase text-terracotta/80">{t(ROOF_GARDEN.note)}</p>
        </div>
      </div>

      {/* Modal */}
      {activePlan && (
        <ModelModal
          modelName={t(activePlan.name)}
          modelTag={t(activePlan.tag)}
          images={activePlan.floorPlans.map((p) => ({ src: t(p.src), alt: t(p.alt) }))}
          activeIndex={activeIndex}
          onChangeIndex={setActiveIndex}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
