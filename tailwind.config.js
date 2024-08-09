/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{tsx, ts, html}'],
  theme: {
    extend: {
      colors: {
        btnCorrect: {
          DEFAULT: '#89E88C',
          hover: '#6AB66C',
        },
        btnIncorrect: {
          DEFAULT: '#fb7185',
          hover: '#f43f5e',
        },
        btnQuiz: {
          DEFAULT: '#a855f7',
          hover: '#9333ea',
        },
        card: {
          DEFAULT: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', ...fontFamily.sans],
      },
    },
  },
}

