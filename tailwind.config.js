/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          400: "#FF6B6B",
          500: "#FF5252",
        },
        indigo: {
          400: "#7E5BEF",
          500: "#6B46C1",
        },
      },

      fontFamily: {
        neue: ['"Bebas Neue"', "sans-serif"],
        inter: ['"Inter", "sans-serif"'],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
