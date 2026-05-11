// ============================================================
// SENDA ALLENDE RESIDENCES — Data File
// Edit this file to update models, units, prices, and features.
// All pricing in MXN. Source: Lista Precios Salida Abr 2026 Rev 2.
// ============================================================

// TODO: Replace with real contact info
export const CONTACT = {
  whatsapp: "+52 833 343 1512",
  whatsappMessage: "Hola, me interesa recibir información sobre Senda Allende Residences.",
  email: "belinda@remaxglobal.net",
  formspree: "https://formspree.io/f/XXXXXXXX", // ← sign up at formspree.io
};

export const FEATURES = [
  { label: "Acabados de alta calidad" },
  { label: "Cocina totalmente equipada" },
  { label: "Centro de lavado" },
  { label: "Aire acondicionado" },
  { label: "Elevador de servicio / carga" },
  { label: "Bodega por departamento" },
  { label: "Rooftops privados" },
  { label: "Ubicación privilegiada" },
];

// Gallery — 8 slots. Set placeholder: false once images are in /public/images/
export const GALLERY_IMAGES = [
  { src: "/images/fachada-dia.jpg",       alt: "Fachada exterior de día",         label: "Fachada Exterior",   placeholder: false },
  { src: "/images/sala-loft.jpg",         alt: "Sala y comedor",                  label: "Sala Principal",     placeholder: false },
  { src: "/images/room1.jpg",             alt: "Recámara principal",               label: "Recámara",           placeholder: false },
  { src: "/images/pasillo-escalera.jpg",  alt: "Pasillo y escaleras",             label: "Acceso y Pasillo",   placeholder: false },
  { src: "/images/escalera-acceso.png",   alt: "Escalera y acceso al edificio",   label: "Áreas Comunes",      placeholder: false },
  { src: "/images/roof1.jpg",             alt: "Rooftop privado vista panorámica", label: "Rooftop Privado",   placeholder: false },
  { src: "/images/fachada-noche.png",     alt: "Fachada nocturna del edificio",   label: "Fachada Nocturna",   placeholder: false },
  { src: "/images/room2.jpg",             alt: "Segunda recámara",                 label: "Recámara 2",         placeholder: false },
];

// Models — render images + floor plan images per model folder.
// To add more floor plans later: just add more paths to the floorPlans array.
export const MODELS = [
  {
    id: "modelo-1", name: "Modelo 1", tag: "1 Recámara",
    bedrooms: 1, bathrooms: 1,
    image: "/images/modelo-1.jpg", placeholder: false,
    description: "Departamento ideal para vivir o invertir. Planta baja con terraza privada y bodega exterior.",
    floorPlans: [
      { src: "/images/model1/Modelo1SA.png", alt: "Plano arquitectónico Modelo 1" },
    ],
    areas: [
      { label: "Área primer nivel",  value: "39.81 m²" },
      { label: "Terraza",            value: "11.10 m²" },
      { label: "Bodega exterior",    value: "2.61 m²"  },
      { label: "Total",              value: "53.52 m²", highlight: true },
    ],
    amenities: ["Cocina equipada", "Zona de lavado", "Aire acondicionado", "Bodega exterior", "Terraza privada"],
  },
  {
    id: "modelo-2", name: "Modelo 2", tag: "2 Recámaras · Nivel Medio",
    bedrooms: 2, bathrooms: 2,
    image: "/images/modelo-2.jpg", placeholder: false,
    description: "Departamento amplio en planta media con bodega exterior. Distribución eficiente y gran iluminación natural.",
    floorPlans: [
      { src: "/images/model2/Modelo2SA.png", alt: "Plano arquitectónico Modelo 2" },
    ],
    areas: [
      { label: "Área primer nivel", value: "71.34 m²" },
      { label: "Terraza",           value: "8.62 m²"  },
      { label: "Bodega exterior",   value: "2.61 m²"  },
      { label: "Total aprox.",      value: "82.57 m²", highlight: true },
    ],
    amenities: ["Cocina equipada", "Zona de lavado", "Aire acondicionado", "Bodega exterior", "Terraza privada"],
  },
  {
    id: "modelo-3", name: "Modelo 3", tag: "2 Recámaras · Fondo",
    bedrooms: 2, bathrooms: 2,
    image: "/images/modelo-3.jpg", placeholder: false,
    description: "El más amplio en niveles bajos. Excelente privacidad y terraza al fondo del conjunto.",
    floorPlans: [
      { src: "/images/model3/Modelo3SA.png", alt: "Plano arquitectónico Modelo 3" },
    ],
    areas: [
      { label: "Área primer nivel", value: "73.71 m²" },
      { label: "Terraza",           value: "5.21 m²"  },
      { label: "Bodega exterior",   value: "2.61 m²"  },
      { label: "Total aprox.",      value: "81.53 m²", highlight: true },
    ],
    amenities: ["Cocina equipada", "Zona de lavado", "Aire acondicionado", "Bodega exterior", "Terraza privada"],
  },
  {
    id: "modelo-4", name: "Modelo 4", tag: "2 Recámaras · Penthouse",
    bedrooms: 2, bathrooms: 2,
    image: "/images/roof2.jpg", placeholder: false,
    description: "Penthouse con rooftop privado, baño en azotea y bodega. Las mejores vistas del conjunto.",
    floorPlans: [
      { src: "/images/model4/Modelo4SA.png", alt: "Plano arquitectónico Modelo 4 — Penthouse" },
    ],
    areas: [
      { label: "Área de planta",    value: "67.44 m²"      },
      { label: "Bodega exterior",   value: "2.52–5.21 m²"  },
      { label: "Baño roof",         value: "2.52–2.74 m²"  },
      { label: "Rooftop privado",   value: "34.87–55.04 m²"},
      { label: "Total aprox.",      value: "hasta 110 m²", highlight: true },
    ],
    amenities: ["Cocina equipada", "Zona de lavado", "Aire acondicionado", "Bodega exterior", "Rooftop privado", "Baño en azotea"],
  },
];

export type PaymentOption = { label: string; sublabel: string; price: number };
export type Unit = {
  id: number; floor: string; description: string;
  sqm: number; terrace: number; storage: number;
  bathroomRoof: number; roof: number; totalSqm: number;
  bedrooms: number; bathrooms: number; hasRooftop: boolean;
  status: "available" | "reserved" | "sold";
  prices: PaymentOption[];
};

export const UNITS: Unit[] = [
  {
    id: 101, floor: "Planta Baja", description: "Adelante · Terraza + Bodega",
    sqm: 39.81, terrace: 11.10, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 53.52,
    bedrooms: 1, bathrooms: 1, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",    sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 2852040 },
      { label: "Pre-venta 4% Dcto.",   sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 2912722 },
      { label: "Pre-venta 3% Dcto.",   sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 2943063 },
      { label: "Precio Full",          sublabel: "Precio base de salida",                  price: 3034085 },
    ],
  },
  {
    id: 102, floor: "Planta Baja", description: "En Medio · Terraza + Bodega",
    sqm: 71.24, terrace: 8.62, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 82.47,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 4751100 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 4852187 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 4902731 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 5054362 },
    ],
  },
  {
    id: 103, floor: "Planta Baja", description: "Fondo · Terraza + Bodega",
    sqm: 73.71, terrace: 5.21, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 81.53,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 4836040 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 4938934 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 4990382 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 5144723 },
    ],
  },
  {
    id: 201, floor: "Planta Media", description: "Adelante · Bodega",
    sqm: 67.44, terrace: 0, storage: 2.52, bathroomRoof: 0, roof: 0, totalSqm: 69.96,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 4337520 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 4429808 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 4475951 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 4614383 },
    ],
  },
  {
    id: 202, floor: "Planta Media", description: "En Medio · Bodega",
    sqm: 73.21, terrace: 0, storage: 2.62, bathroomRoof: 0, roof: 0, totalSqm: 75.83,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 4701460 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 4801491 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 4851507 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 5001553 },
    ],
  },
  {
    id: 203, floor: "Planta Media", description: "Fondo · Bodega",
    sqm: 73.71, terrace: 0, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 76.32,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 4731840 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 4832517 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 4882856 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 5033872 },
    ],
  },
  {
    id: 301, floor: "Planta Alta", description: "Adelante · Roof + Bodega + Baño Roof",
    sqm: 67.44, terrace: 0, storage: 5.21, bathroomRoof: 2.52, roof: 34.87, totalSqm: 110.04,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 5880990 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 6006117 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 6068681 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 6256372 },
    ],
  },
  {
    id: 302, floor: "Planta Alta", description: "En Medio · Roof + Bodega + Baño Roof",
    sqm: 73.21, terrace: 0, storage: 2.52, bathroomRoof: 2.62, roof: 52.42, totalSqm: 130.77,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 6692400 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 6834791 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 6905987 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 7119574 },
    ],
  },
  {
    id: 303, floor: "Planta Alta", description: "Fondo · Roof + Bodega + Baño Roof",
    sqm: 73.71, terrace: 0, storage: 3.22, bathroomRoof: 2.74, roof: 40.93, totalSqm: 120.60,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: "Pre-venta Contado",  sublabel: "Enganche 50% · 3 mens. · 10% escritura", price: 6372090 },
      { label: "Pre-venta 4% Dcto.", sublabel: "Enganche 40% · 6 mens. · 10% escritura", price: 6507666 },
      { label: "Pre-venta 3% Dcto.", sublabel: "Enganche 30% · 8 mens. · 10% escritura", price: 6575455 },
      { label: "Precio Full",        sublabel: "Precio base de salida",                  price: 6778819 },
    ],
  },
];

export const PAYMENT_CONDITIONS = [
  { id: 1, title: "Pre-venta Contado",  highlight: true,  terms: ["50% de enganche", "40% en 3 mensualidades", "10% al momento de escrituración"] },
  { id: 2, title: "Pre-venta 4% Dcto.", highlight: false, terms: ["40% de enganche", "50% en 6 mensualidades", "10% al momento de escrituración"] },
  { id: 3, title: "Pre-venta 3% Dcto.", highlight: false, terms: ["30% de enganche", "60% en 8 mensualidades", "10% al momento de escrituración"] },
  { id: 4, title: "Precio Full",        highlight: false, terms: ["Precio base de salida"] },
];

export const DISCLAIMER =
  "Las imágenes, renders y elementos mostrados son ilustrativos y tienen como propósito representar el ambiente y la propuesta arquitectónica del proyecto. El mobiliario, decoración y accesorios no son parte de la entrega del departamento y se incluyen únicamente con fines de representación visual. La entrega final incluye únicamente lo especificado en la memoria descriptiva del proyecto.";
