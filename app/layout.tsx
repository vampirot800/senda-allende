import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400", "500", "600"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sendaallende.mx"),
  title: "Senda Allende Residences | San Miguel de Allende",
  description: "Residencias boutique en el corazón de San Miguel de Allende. Departamentos premium con acabados de alta calidad, rooftops privados y ubicación privilegiada.",
  keywords: ["Senda Allende", "departamentos San Miguel de Allende", "residencias boutique", "bienes raíces San Miguel", "inversión inmobiliaria Guanajuato", "penthouse San Miguel de Allende"],
  openGraph: {
    title: "Senda Allende Residences | San Miguel de Allende",
    description: "Residencias boutique en el corazón de San Miguel de Allende.",
    type: "website", locale: "es_MX",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Senda Allende Residences" }],
  },
  twitter: { card: "summary_large_image", title: "Senda Allende Residences | San Miguel de Allende", description: "Residencias boutique en el corazón de San Miguel de Allende." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
