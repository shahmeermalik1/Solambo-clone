/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: '#cebeff',
        secondary: '#afb1ff',
        accent: "#c04cfd",
        background: "#230c33"

      },
      fontFamily: {
        font1:['DM Sans', "sans-serif"],
        font2: ['Montserrat', "sans-serif"]

        
      }
      
    },
  },
  plugins: [],
}