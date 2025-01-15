/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "serif"], 
        lobster: ["Lobster", "serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true, 
  },
}