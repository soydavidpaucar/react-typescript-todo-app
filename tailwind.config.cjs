/** @type {import('tailwindcss')} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
