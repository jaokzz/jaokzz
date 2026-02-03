import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        surface: "#111827",
        primary: "#22C55E",
        accent: "#F97316",
        muted: "#94A3B8"
      }
    }
  },
  plugins: []
};

export default config;
