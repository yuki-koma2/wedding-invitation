import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        growProgress: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        revealImage: {
          '0%': { 'clip-path': 'inset(30% round 20%)' },
          '100%': { 'clip-path': 'inset(0)' },
        },
      },
      animation: {
        growProgress: 'growProgress 1s linear forwards',
        revealImage: 'revealImage 1s ease-out forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
