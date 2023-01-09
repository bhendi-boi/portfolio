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
        "nav-background": "#141414",
        "logo-text": "#e3dbd3",
        backgrund: "#fafafa",
        "dark-background": "#252525",
      },
      fontFamily: {
        name: ["Fredoka One", "cursive"],
        title: ["Lato", "sans-serif"],
        chips: ["Roboto", "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
