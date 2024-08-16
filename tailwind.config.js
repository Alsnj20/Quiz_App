/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{tsx, ts, html}"],
  theme: {
    extend: {
      colors: {
        btnCorrect: {
          DEFAULT: "#89E88C",
          hover: "#6AB66C",
        },
        btnIncorrect: {
          DEFAULT: "#fb7185",
          hover: "#f43f5e",
        },
        btnQuiz: {
          DEFAULT: "#9164da",
          hover: "#9333ea",
          variant: "#bb9fe8",
        },
        card: {
          DEFAULT: "#e6f2f6",
        },
        text: {
          primary: "#ffffff",
          secondary: "#372a69",
          tertiary: "#AFBCBE",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", ...fontFamily.sans],
      },
    },
  },
};
