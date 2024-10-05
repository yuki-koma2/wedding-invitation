import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-pink': '#E5C2CE',
                'custom-gray': '#7D696F',
            },
            fontFamily: {
                homemade: ['"Homemade Apple"', 'cursive'],
                shadows: ['"Shadows Into Light"', 'cursive'],
                petit: ['"Petit Formal Script"', 'cursive'],
                shippori: ['"Shippori Mincho"', 'serif'],
                klee: ['"Klee One"', 'cursive'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                growProgress: {
                    '0%': {transform: 'scaleY(0)'},
                    '100%': {transform: 'scaleY(1)'},
                },
                revealImage: {
                    '0%': {'clip-path': 'inset(30% round 20%)'},
                    '100%': {'clip-path': 'inset(0)'},
                },
                blurFadeOut: {
                    '0%': {filter: 'blur(10px)'},
                    '100%': {filter: 'blur(0px)'},
                },
                fadeOut: {
                    '0%': {opacity: '1'},
                    '100%': {opacity: '0'},
                },
            },
            animation: {
                growProgress: 'growProgress 1s linear forwards',
                revealImage: 'revealImage 1s ease-out forwards',
                blurFadeOut: 'blurFadeOut 1s ease-out forwards',
                fadeOut: 'fadeOut 1s ease-out forwards',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            light: {
                layout: {},
                colors: {
                    primary: "#E5C2CE",
                    secondary: "#7D696F",
                }
            },
        },
    })],
};
export default config;
