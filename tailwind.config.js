/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./app/**/*.{html,js,jsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#030637",
        primary: "#3C0753",
        secondary: "#A855F7",
        text: "#720455",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
    sscreens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },
  },

  plugins: [],
};
