/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        accent: "#8e44ad",
        secondary: "#2c3e50",
        text: "#f1f1f1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%": { textShadow: "0 0 5px #fff" },
          "100%": { textShadow: "0 0 20px #8e44ad" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};  