import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "cream-dark": "#F0EAE0",
        stone: { 50: "#F8F4EE", 100: "#EDE4D8", 200: "#D9C9B2", 300: "#C4AE8C" },
        terracotta: { DEFAULT: "#C1692F", light: "#D4895A", dark: "#9A4E1F" },
        brown: { DEFAULT: "#2C1810", medium: "#6B3A2A", light: "#8B6355" },
        gold: "#B5906A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
