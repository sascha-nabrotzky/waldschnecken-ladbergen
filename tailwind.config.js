/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Yeseva One", "serif"],
        sans: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        rose: "#e3a6a9",
        leaf: "#a9e3a6",
        olive: "#769f74",
        beige: "#e3c4a6",
        macchiato: "#9f8974",
        creme: "#fffbf1",
        coffee: "#553914",
        terracotta: "#d8935c",
        redorange: "#c84a22",
      },
    },
  },
  plugins: [],
};
