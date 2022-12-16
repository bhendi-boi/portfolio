/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "nav-background": "#000",
        "logo-text": "#d3d3d3",
        backgrund: "eee",
        "dark-background": "#141414",
        "input-text": "#e3dbd3",
        // "input-border": "#3333de",
      },
      fontFamily: {
        logo: ["Poppins", "sans-serif"],
        chips: ["Roboto", "sans-serif"],
        name: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
