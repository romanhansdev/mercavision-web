import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101820",
        steel: "#48606f",
        mist: "#f4f7f8",
        line: "#dbe4e7",
        brand: "#0b4c6f",
        accent: "#ffb703"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 24, 32, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
