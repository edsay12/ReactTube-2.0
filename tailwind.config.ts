import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cian: {
          500: "#0085FF",
          800: "#61DAFB",
          300: "#9BE1F8",
        },
        gray: {
          200: "#C4C4CC",
          300: "#2D2D2D",
          500: "#7C7C8A",

          800: "#202024",
          900: "#121214",
        },

        googleColor: "#DC4B38",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'defaultChannelBg': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
       }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("autoprefixer"),require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;

