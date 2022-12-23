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
        "nav-background": "#202020",
        "logo-text": "#e3dbd3",
        backgrund: "#fafafa",
        "dark-background": "#141414",
      },
      fontFamily: {
        title: ["Lato", "sans-serif"],
        chips: ["Roboto", "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
