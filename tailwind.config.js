/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",

        /* Light */
        lightbg: "#F7F9FB",

        /* Dark Layering System */
        darkbg: "#0E1116",        // app background
        surface: "#161B22",       // cards
        surface2: "#1F2630",      // hover / elevated
        borderDark: "#2A3441",    // borders
        mutedDark: "#8B949E",     // secondary text
      },
    },
  },
  plugins: [],
}