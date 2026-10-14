// ============================================================
// SENDA ALLENDE RESIDENCES — Data File
// Edit this file to update models, units, prices, and features.
// All pricing in MXN. Source: Lista Precios Salida Abr 2026 Rev 2.
// ============================================================

// Bilingual text: every visitor-facing string has a Spanish and an English version.
// The ES/EN switch in the header picks which one is shown.
export type L = { es: string; en: string };

export const CONTACT = {
  email: "info@sendaallende.com.mx",
  // Web3Forms access key — set this in Vercel: Settings → Environment Variables
  // Key name: NEXT_PUBLIC_WEB3FORMS_KEY
  // Get your free key at: https://web3forms.com (enter info@sendaallende.com.mx)
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  address: "Del Refugio 15, San Antonio, 37750 San Miguel de Allende, Gto.",
  whatsappMessage: { es: "Hola, me interesa recibir información sobre Senda Allende Residences.", en: "Hello, I'm interested in receiving information about Senda Allende Residences." },
  agents: [
    { name: "Broker Belinda Villarreal", whatsapp: "+52 833 343 1512" },
    { name: "Broker Ana Baumgarten", whatsapp: "+52 442 219 9333" },
  ],
};

// `icon` picks the icon in components/Features.tsx — keep it when editing the text.
export const FEATURES: { icon: string; label: L }[] = [
  { icon: "finishes", label: { es: "Acabados de alta calidad",     en: "High-quality finishes" } },
  { icon: "kitchen",  label: { es: "Cocina totalmente equipada",   en: "Fully equipped kitchen" } },
  { icon: "laundry",  label: { es: "Centro de lavado",             en: "Laundry center" } },
  { icon: "ac",       label: { es: "Aire acondicionado",           en: "Air conditioning" } },
  { icon: "elevator", label: { es: "Elevador de servicio / carga", en: "Service / freight elevator" } },
  { icon: "storage",  label: { es: "Bodega por departamento",      en: "Storage unit per apartment" } },
  { icon: "rooftop",  label: { es: "Rooftops privados",            en: "Private rooftops" } },
  { icon: "water",    label: { es: "Filtros de agua",              en: "Water filters" } },
];

// Gallery — 10 slots. Wide layout at index 0 and 5 (fills 2 columns each).
export const GALLERY_IMAGES = [
  { src: "/images/fachada-dia.jpg",    alt: { es: "Fachada exterior de día", en: "Exterior façade by day" },          label: { es: "Fachada Exterior", en: "Exterior Façade" },  placeholder: false },
  { src: "/images/sala-loft.jpg",      alt: { es: "Sala y comedor tipo loft", en: "Loft-style living and dining room" },         label: { es: "Sala Principal", en: "Main Living Room" },    placeholder: false },
  { src: "/images/room1.jpg",          alt: { es: "Recámara principal", en: "Primary bedroom" },               label: { es: "Recámara", en: "Bedroom" },          placeholder: false },
  { src: "/images/rooftop-1.png",      alt: { es: "Rooftop privado con terraza", en: "Private rooftop with terrace" },      label: { es: "Rooftop Privado", en: "Private Rooftop" },   placeholder: false },
  { src: "/images/room3.jpg",          alt: { es: "Recámara con acabados premium", en: "Bedroom with premium finishes" },    label: { es: "Recámara Premium", en: "Premium Bedroom" },  placeholder: false },
  { src: "/images/fachada-noche.png",  alt: { es: "Fachada nocturna del edificio", en: "Building façade at night" },    label: { es: "Fachada Nocturna", en: "Façade at Night" },  placeholder: false },
  { src: "/images/sala-1.png",         alt: { es: "Sala de estar con luz natural", en: "Living room with natural light" },    label: { es: "Sala de Estar", en: "Living Room" },     placeholder: false },
  { src: "/images/room2.jpg",          alt: { es: "Segunda recámara", en: "Second bedroom" },                 label: { es: "Recámara 2", en: "Bedroom 2" },        placeholder: false },
  { src: "/images/rooftop-3.png",      alt: { es: "Vista panorámica desde el rooftop", en: "Panoramic view from the rooftop" },label: { es: "Vista Rooftop", en: "Rooftop View" },     placeholder: false },
  { src: "/images/rooftop-2.png",      alt: { es: "Rooftop privado al atardecer", en: "Private rooftop at sunset" },     label: { es: "Terraza Privada", en: "Private Terrace" },   placeholder: false },
];

// Models — render images + floor plan images per model folder.
// To add more floor plans: add more paths to the floorPlans array — no component changes needed.
// Floor plan `src` has a Spanish (es) and English (en) image; the language switch picks one.
export const MODELS = [
  {
    id: "modelo-1",
    name: { es: "Modelo 1 — Loft", en: "Model 1 — Loft" },
    tag: { es: "Loft · Planta Baja", en: "Loft · Ground Floor" },
    floorNote: { es: "Exclusivo Nivel 1", en: "Level 1 only" },
    bedrooms: 1, bathrooms: 1,
    image: "/images/modelo-1.jpg", placeholder: false,
    description: { es: "Loft de una recámara, único en planta baja. Incluye terraza privada y bodega exterior.", en: "One-bedroom loft, the only one on the ground floor. Includes a private terrace and an outdoor storage unit." },
    floorPlans: [
      { src: { es: "/images/model1/Modelo1SA.png", en: "/images/model1/Modelo1SA-EN.webp" }, alt: { es: "Plano arquitectónico Modelo 1 — Loft", en: "Floor plan Model 1 — Loft" } },
    ],
    areas: [
      { label: { es: "Área interior", en: "Interior area" },    value: "39.81 m²" },
      { label: { es: "Terraza privada", en: "Private terrace" },  value: "11.10 m²" },
      { label: { es: "Bodega exterior", en: "Outdoor storage" },  value: "2.61 m²"  },
      { label: { es: "Total", en: "Total" },            value: "53.52 m²", highlight: true },
    ],
    amenities: [{ es: "Cocina equipada", en: "Equipped kitchen" }, { es: "Zona de lavado", en: "Laundry area" }, { es: "Aire acondicionado", en: "Air conditioning" }, { es: "Bodega exterior", en: "Outdoor storage" }, { es: "Terraza privada", en: "Private terrace" }],
  },
  {
    id: "modelo-2",
    name: { es: "Modelo 2", en: "Model 2" },
    tag: { es: "2 Recámaras", en: "2 Bedrooms" },
    floorNote: { es: "Disponible Niveles 1, 2 y 3 · Nivel 3 incluye Rooftop Privado", en: "Available on Levels 1, 2 & 3 · Level 3 includes Private Rooftop" },
    bedrooms: 2, bathrooms: 2,
    image: "/images/modelo-2.jpg", placeholder: false,
    description: { es: "Departamento de dos recámaras con terraza en nivel 1. Los pisos superiores incluyen bodega exterior y el nivel 3 cuenta con rooftop privado.", en: "Two-bedroom apartment with a terrace on Level 1. Upper floors include an outdoor storage unit, and Level 3 features a private rooftop." },
    floorPlans: [
      { src: { es: "/images/model2/Modelo2SA.png", en: "/images/model2/Modelo2SA-EN.webp" }, alt: { es: "Plano arquitectónico Modelo 2", en: "Floor plan Model 2" } },
    ],
    areas: [
      { label: { es: "Área interior (Nivel 1)", en: "Interior area (Level 1)" },  value: "71.24 m²" },
      { label: { es: "Terraza (Nivel 1)", en: "Terrace (Level 1)" },        value: "8.62 m²"  },
      { label: { es: "Bodega exterior", en: "Outdoor storage" },          value: "2.61 m²"  },
      { label: { es: "Total Nivel 1", en: "Total Level 1" },            value: "82.47 m²", highlight: true },
      { label: { es: "Total Nivel 2", en: "Total Level 2" },            value: "75.83 m²", highlight: false },
      { label: { es: "Total Nivel 3 con Rooftop", en: "Total Level 3 with Rooftop" },  value: "130.77 m²", highlight: true },
    ],
    amenities: [{ es: "Cocina equipada", en: "Equipped kitchen" }, { es: "Zona de lavado", en: "Laundry area" }, { es: "Aire acondicionado", en: "Air conditioning" }, { es: "Bodega exterior", en: "Outdoor storage" }, { es: "Terraza (N1)", en: "Terrace (L1)" }, { es: "Rooftop Privado (N3)", en: "Private Rooftop (L3)" }],
  },
  {
    id: "modelo-3",
    name: { es: "Modelo 3", en: "Model 3" },
    tag: { es: "2 Recámaras", en: "2 Bedrooms" },
    floorNote: { es: "Disponible Niveles 1, 2 y 3 · Nivel 3 incluye Rooftop Privado", en: "Available on Levels 1, 2 & 3 · Level 3 includes Private Rooftop" },
    bedrooms: 2, bathrooms: 2,
    image: "/images/modelo-3.jpg", placeholder: false,
    description: { es: "El más amplio del conjunto. Ubicado al fondo con excelente privacidad. Nivel 3 incluye rooftop privado con medio baño.", en: "The most spacious in the development. Located at the back for excellent privacy. Level 3 includes a private rooftop with a half bath." },
    floorPlans: [
      { src: { es: "/images/model3/Modelo3SA.png", en: "/images/model3/Modelo3SA-EN.webp" }, alt: { es: "Plano arquitectónico Modelo 3", en: "Floor plan Model 3" } },
    ],
    areas: [
      { label: { es: "Área interior (Nivel 1)", en: "Interior area (Level 1)" },  value: "73.71 m²" },
      { label: { es: "Terraza (Nivel 1)", en: "Terrace (Level 1)" },        value: "5.21 m²"  },
      { label: { es: "Bodega exterior", en: "Outdoor storage" },          value: "2.61 m²"  },
      { label: { es: "Total Nivel 1", en: "Total Level 1" },            value: "81.53 m²", highlight: true },
      { label: { es: "Total Nivel 2", en: "Total Level 2" },            value: "76.32 m²", highlight: false },
      { label: { es: "Total Nivel 3 con Rooftop", en: "Total Level 3 with Rooftop" },  value: "120.60 m²", highlight: true },
    ],
    amenities: [{ es: "Cocina equipada", en: "Equipped kitchen" }, { es: "Zona de lavado", en: "Laundry area" }, { es: "Aire acondicionado", en: "Air conditioning" }, { es: "Bodega exterior", en: "Outdoor storage" }, { es: "Terraza (N1)", en: "Terrace (L1)" }, { es: "Rooftop Privado (N3)", en: "Private Rooftop (L3)" }],
  },
  {
    id: "modelo-4",
    name: { es: "Modelo 4", en: "Model 4" },
    tag: { es: "2 Recámaras", en: "2 Bedrooms" },
    floorNote: { es: "Disponible Niveles 2 y 3 · Nivel 3 incluye Rooftop Privado", en: "Available on Levels 2 & 3 · Level 3 includes Private Rooftop" },
    bedrooms: 2, bathrooms: 2,
    image: "/images/roof2.jpg", placeholder: false,
    description: { es: "Departamento de dos recámaras disponible en niveles 2 y 3. El nivel 3 incluye rooftop privado con medio baño y bodega en azotea.", en: "Two-bedroom apartment available on Levels 2 and 3. Level 3 includes a private rooftop with a half bath and rooftop storage." },
    floorPlans: [
      { src: { es: "/images/model4/Modelo4SA.png", en: "/images/model4/Modelo4SA-EN.webp" }, alt: { es: "Plano arquitectónico Modelo 4", en: "Floor plan Model 4" } },
    ],
    areas: [
      { label: { es: "Área interior", en: "Interior area" },            value: "67.44 m²" },
      { label: { es: "Bodega exterior (Nivel 2)", en: "Outdoor storage (Level 2)" }, value: "2.52 m²"  },
      { label: { es: "Bodega exterior (Nivel 3)", en: "Outdoor storage (Level 3)" }, value: "5.21 m²"  },
      { label: { es: "Rooftop + ½ baño (Nivel 3)", en: "Rooftop + ½ bath (Level 3)" },value: "37.39 m²" },
      { label: { es: "Total Nivel 2", en: "Total Level 2" },            value: "69.96 m²", highlight: true },
      { label: { es: "Total Nivel 3 con Rooftop", en: "Total Level 3 with Rooftop" },  value: "110.04 m²", highlight: true },
    ],
    amenities: [{ es: "Cocina equipada", en: "Equipped kitchen" }, { es: "Zona de lavado", en: "Laundry area" }, { es: "Aire acondicionado", en: "Air conditioning" }, { es: "Bodega exterior", en: "Outdoor storage" }, { es: "Rooftop Privado (N3)", en: "Private Rooftop (L3)" }, { es: "½ baño en azotea", en: "½ bath on rooftop" }],
  },
];

// Roof Garden — shared rooftop plan, shown via the button below the model cards.
// Only Nivel 3 units of Modelos 2, 3 y 4 (Deptos. 301, 302, 303) have a private roof.
export const ROOF_GARDEN = {
  name: { es: "Roof Garden", en: "Roof Garden" },
  tag: { es: "Modelos 2, 3 y 4 · Nivel 3", en: "Models 2, 3 & 4 · Level 3" },
  buttonLabel: { es: "Ver Roof Garden", en: "View Roof Garden" },
  note: { es: "Exclusivo Modelos 2, 3 y 4 en Nivel 3 · Deptos. 301, 302 y 303", en: "Exclusive to Models 2, 3 & 4 on Level 3 · Units 301, 302 & 303" },
  floorPlans: [
    { src: { es: "/images/roof-garden/PlantaRoofTop.png", en: "/images/roof-garden/PlantaRoofTop.png" }, alt: { es: "Plano Roof Garden — Deptos. 301, 302 y 303", en: "Roof Garden floor plan — Units 301, 302 & 303" } },
  ],
};

export type PaymentOption = { label: L; sublabel: L; price: number };
export type Unit = {
  id: number; modelId: string; floor: string; description: L;
  sqm: number; terrace: number; storage: number;
  bathroomRoof: number; roof: number; totalSqm: number;
  bedrooms: number; bathrooms: number; hasRooftop: boolean;
  status: "available" | "reserved" | "sold";
  prices: PaymentOption[];
};

export const UNITS: Unit[] = [
  {
    id: 101, modelId: "modelo-1", floor: "Planta Baja", description: { es: "Fachada · Terraza + Bodega", en: "Front · Terrace + Storage" },
    sqm: 39.81, terrace: 11.10, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 53.52,
    bedrooms: 1, bathrooms: 1, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },    sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 2852040 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" },   sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 2912722 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" },   sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 2943063 },
    ],
  },
  {
    id: 102, modelId: "modelo-2", floor: "Planta Baja", description: { es: "En Medio · Terraza + Bodega", en: "Middle · Terrace + Storage" },
    sqm: 71.24, terrace: 8.62, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 82.47,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 4751100 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 4852187 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 4902731 },
    ],
  },
  {
    id: 103, modelId: "modelo-3", floor: "Planta Baja", description: { es: "Fondo · Terraza + Bodega", en: "Back · Terrace + Storage" },
    sqm: 73.71, terrace: 5.21, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 81.53,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 4836040 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 4938934 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 4990382 },
    ],
  },
  {
    id: 201, modelId: "modelo-4", floor: "Planta Media", description: { es: "Fachada · Bodega", en: "Front · Storage" },
    sqm: 67.44, terrace: 0, storage: 2.52, bathroomRoof: 0, roof: 0, totalSqm: 69.96,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 4337520 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 4429808 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 4475951 },
    ],
  },
  {
    id: 202, modelId: "modelo-2", floor: "Planta Media", description: { es: "En Medio · Bodega", en: "Middle · Storage" },
    sqm: 73.21, terrace: 0, storage: 2.62, bathroomRoof: 0, roof: 0, totalSqm: 75.83,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 4701460 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 4801491 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 4851507 },
    ],
  },
  {
    id: 203, modelId: "modelo-3", floor: "Planta Media", description: { es: "Fondo · Bodega", en: "Back · Storage" },
    sqm: 73.71, terrace: 0, storage: 2.61, bathroomRoof: 0, roof: 0, totalSqm: 76.32,
    bedrooms: 2, bathrooms: 2, hasRooftop: false, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 4731840 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 4832517 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 4882856 },
    ],
  },
  {
    id: 301, modelId: "modelo-4", floor: "Planta Alta", description: { es: "Fachada · Roof + Bodega + Baño Roof", en: "Front · Roof + Storage + Roof Bath" },
    sqm: 67.44, terrace: 0, storage: 5.21, bathroomRoof: 2.52, roof: 34.87, totalSqm: 110.04,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 5880990 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 6006117 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 6068681 },
    ],
  },
  {
    id: 302, modelId: "modelo-2", floor: "Planta Alta", description: { es: "En Medio · Roof + Bodega + Baño Roof", en: "Middle · Roof + Storage + Roof Bath" },
    sqm: 73.21, terrace: 0, storage: 2.52, bathroomRoof: 2.62, roof: 52.42, totalSqm: 130.77,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 6692400 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 6834791 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 6905987 },
    ],
  },
  {
    id: 303, modelId: "modelo-3", floor: "Planta Alta", description: { es: "Fondo · Roof + Bodega + Baño Roof", en: "Back · Roof + Storage + Roof Bath" },
    sqm: 73.71, terrace: 0, storage: 3.22, bathroomRoof: 2.74, roof: 40.93, totalSqm: 120.60,
    bedrooms: 2, bathrooms: 2, hasRooftop: true, status: "available",
    prices: [
      { label: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  sublabel: { es: "Enganche 50% · 3 mens. · 10% escritura", en: "50% down · 3 monthly pmts. · 10% at closing" }, price: 6372090 },
      { label: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, sublabel: { es: "Enganche 40% · 6 mens. · 10% escritura", en: "40% down · 6 monthly pmts. · 10% at closing" }, price: 6507666 },
      { label: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, sublabel: { es: "Enganche 30% · 8 mens. · 10% escritura", en: "30% down · 8 monthly pmts. · 10% at closing" }, price: 6575455 },
    ],
  },
];

export const PAYMENT_CONDITIONS = [
  { id: 1, title: { es: "Pre-venta Contado", en: "Pre-Sale Cash" },  highlight: true,  terms: [{ es: "50% de enganche", en: "50% down payment" }, { es: "40% en 3 mensualidades", en: "40% in 3 monthly payments" }, { es: "10% al momento de escrituración", en: "10% at closing (deed signing)" }] },
  { id: 2, title: { es: "Pre-venta 4% Dcto.", en: "Pre-Sale 4% Off" }, highlight: false, terms: [{ es: "40% de enganche", en: "40% down payment" }, { es: "50% en 6 mensualidades", en: "50% in 6 monthly payments" }, { es: "10% al momento de escrituración", en: "10% at closing (deed signing)" }] },
  { id: 3, title: { es: "Pre-venta 3% Dcto.", en: "Pre-Sale 3% Off" }, highlight: false, terms: [{ es: "30% de enganche", en: "30% down payment" }, { es: "60% en 8 mensualidades", en: "60% in 8 monthly payments" }, { es: "10% al momento de escrituración", en: "10% at closing (deed signing)" }] },
];

export const DISCLAIMER: L = {
  es: "Las imágenes, renders y elementos mostrados son ilustrativos y tienen como propósito representar el ambiente y la propuesta arquitectónica del proyecto. El mobiliario, decoración y accesorios no son parte de la entrega del departamento y se incluyen únicamente con fines de representación visual. La entrega final incluye únicamente lo especificado en la memoria descriptiva del proyecto.",
  en: "Images, renderings and elements shown are for illustrative purposes only and are intended to convey the atmosphere and architectural concept of the project. Furniture, decor and accessories are not included with the apartment and are shown solely for visual representation. The final delivery includes only what is specified in the project's descriptive specifications.",
};
