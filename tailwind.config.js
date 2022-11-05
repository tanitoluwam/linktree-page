
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        "primary": "#EAECF0",
        "secondary": "#475467",
        "tertiary": "#101828",
        "complimentary": "#1570EF",
      }
    },
  },
  plugins: [],
}