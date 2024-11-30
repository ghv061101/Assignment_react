/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad-mini': '768px',   // Portrait iPad Mini
        'ipad-air': '820px',    // Portrait iPad Air
        'ipad-mini-landscape': '1024px',  // Landscape iPad Mini
        'ipad-air-landscape': '1180px',   // Landscape iPad Air
      },
    },
  },
  plugins: [],
}