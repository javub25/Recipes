/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '480px'},
      'tablets': {'max': '894px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
}