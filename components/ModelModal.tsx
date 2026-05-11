"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type FloorPlan = { src: string; alt: string };

type Props = {
  modelName: string;
  modelTag: string;
  images: FloorPlan[];
  activeIndex: number;
  onChangeIndex: (i: number) => void;
  onClose: () => void;
};

export default function ModelModal({
  modelName, modelTag, images, activeIndex, onChangeIndex, onClose,
}: Props) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  const prev = useCallback(() => { if (hasPrev) onChangeIndex(activeIndex - 1); }, [hasPrev, activeIndex, onChangeIndex]);
  const next = useCallback(() => { if (hasNext) onChangeIndex(activeIndex + 1); }, [hasNext, activeIndex, onChangeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Plano arquitectónico ${modelName}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl bg-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 flex-shrink-0">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta">{modelTag}</p>
            <h3 className="font-serif text-xl font-light text-brown">{modelName} — Plano Arquitectónico</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 transition-colors text-brown/60 hover:text-brown"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image area */}
        <div className="relative flex-1 min-h-0 bg-white flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[420px]">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Prev arrow */}
          {hasPrev && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-md text-brown transition-all hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next arrow */}
          {hasNext && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-md text-brown transition-all hover:scale-110"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Dots — only shown when multiple images */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 py-4 border-t border-stone-100 flex-shrink-0">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => onChangeIndex(i)}
                aria-label={`Ver plano ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-terracotta scale-125"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Footer counter — only shown when multiple images */}
        {images.length > 1 && (
          <div className="text-center pb-3 flex-shrink-0">
            <p className="font-sans text-[10px] text-brown/40 tracking-widest">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
