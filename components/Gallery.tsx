"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/properties";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">Galería</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight">
            Espacios que <em className="text-terracotta">inspiran</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-stone-200 cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-xl ${
                i === 0 || i === 5 ? "col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={i === 0 || i === 5
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-sans text-xs tracking-widest uppercase text-white">{img.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {active !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-7 h-7" />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[active].src}
                alt={GALLERY_IMAGES[active].alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="font-sans text-xs tracking-widest uppercase text-white">
                  {GALLERY_IMAGES[active].label}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
