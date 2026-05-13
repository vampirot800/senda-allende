"use client";
import { useState } from "react";
import { UNITS, PAYMENT_CONDITIONS, CONTACT } from "@/data/properties";

const FLOOR_LABELS: Record<string, string> = { "Planta Baja": "Nivel 1", "Planta Media": "Nivel 2", "Planta Alta": "Nivel 3 · Penthouse" };
const STATUS_STYLES: Record<string, string> = { available: "bg-emerald-50 text-emerald-700 border-emerald-200", reserved: "bg-amber-50 text-amber-700 border-amber-200", sold: "bg-red-50 text-red-700 border-red-200" };
const STATUS_LABELS: Record<string, string> = { available: "Disponible", reserved: "Reservado", sold: "Vendido" };

function formatMXN(n: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

export default function Prices() {
  const [selectedPayment, setSelectedPayment] = useState(0);
  const floors = Array.from(new Set(UNITS.map((u) => u.floor)));
  const whatsappUrl = (unit: number) =>
    `https://wa.me/${CONTACT.agents[0].whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hola, me interesa el departamento ${unit} de Senda Allende Residences. ¿Podrían darme más información?`)}`;

  return (
    <section id="prices" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracotta mb-4">Precios y Disponibilidad</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brown leading-tight mb-6">Inversión desde <em className="text-terracotta">pre-venta</em></h2>
          <p className="font-sans text-brown/60 text-sm leading-relaxed">Precios en pesos mexicanos (MXN) según lista de salida de abril 2026. Sujeto a disponibilidad.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PAYMENT_CONDITIONS.map((cond, i) => (
            <button key={cond.id} onClick={() => setSelectedPayment(i)} className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase border transition-all ${selectedPayment === i ? "bg-terracotta text-white border-terracotta shadow-md" : "bg-white text-brown/60 border-stone-200 hover:border-terracotta/50"}`}>{cond.title}</button>
          ))}
        </div>
        <div className="bg-terracotta/5 border border-terracotta/20 rounded-2xl p-5 mb-10 max-w-lg mx-auto text-center">
          <p className="font-serif text-lg text-brown font-light mb-2">{PAYMENT_CONDITIONS[selectedPayment].title}</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {PAYMENT_CONDITIONS[selectedPayment].terms.map((t) => <li key={t} className="font-sans text-xs text-brown/60">· {t}</li>)}
          </ul>
        </div>
        <div className="space-y-12">
          {floors.map((floor) => (
            <div key={floor}>
              <h3 className="font-serif text-2xl font-light text-brown mb-6 flex items-center gap-3">{FLOOR_LABELS[floor] ?? floor}<span className="h-px flex-1 bg-stone-200" /></h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {UNITS.filter((u) => u.floor === floor).map((unit) => (
                  <div key={unit.id} className={`bg-white rounded-2xl p-6 border shadow-sm flex flex-col gap-4 transition-all ${unit.status === "available" ? "border-stone-100 hover:border-terracotta/30 hover:shadow-md" : "border-stone-100 opacity-60"}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-2xl font-light text-brown">Depto. {unit.id}</p>
                        <p className="font-sans text-xs text-brown/50 mt-0.5">{unit.description}</p>
                      </div>
                      <span className={`font-sans text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border ${STATUS_STYLES[unit.status]}`}>{STATUS_LABELS[unit.status]}</span>
                    </div>
                    <div className="flex gap-4 text-brown/50 font-sans text-xs border-t border-stone-50 pt-3">
                      <span>{unit.bedrooms} rec.</span><span>{unit.bathrooms} baños</span><span>{unit.totalSqm} m² total</span>
                      {unit.hasRooftop && <span className="text-terracotta font-medium">+ Rooftop</span>}
                    </div>
                    <div className="bg-cream rounded-xl p-4">
                      <p className="font-sans text-[10px] tracking-widest uppercase text-brown/40 mb-1">{PAYMENT_CONDITIONS[selectedPayment].title}</p>
                      <p className="font-serif text-2xl font-light text-brown">{formatMXN(unit.prices[selectedPayment].price)}</p>
                      <p className="font-sans text-[10px] text-brown/40 mt-1">{unit.prices[selectedPayment].sublabel}</p>
                    </div>
                    {unit.status === "available" && (
                      <a href={whatsappUrl(unit.id)} target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-2.5 rounded-full border border-terracotta text-terracotta font-sans text-xs tracking-widest uppercase hover:bg-terracotta hover:text-white transition-colors">Más Información</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-sans text-[11px] text-brown/40 max-w-2xl mx-auto leading-relaxed">Precios en pesos mexicanos, sujetos a disponibilidad y cambios sin previo aviso. El inmueble se encuentra en etapa de construcción.</p>
      </div>
    </section>
  );
}
