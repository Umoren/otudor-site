/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"]
      },
      colors: {
        "layout": '#151515',
        "letter": '#E6E2C3'
      },
      padding: {
        '40': '25px'
      }
    },
  },
  plugins: [],
}