/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rick&morty-citron': '#91A126',
        'rick&morty-june-bud': '#BFDE42',
        'rick&morty-pacific-blue': '#42B4CA',
        'rick&morty-outer-space-crayola': '#193840',
        'rick&morty-blue-sapphire': '#035E7B'
      }
    },
  },
  plugins: [],
}
