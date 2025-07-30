/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/javascript/**/*.js",
     "./public/css/**/*.css",
     './public/img/**/*.{jpg,jpeg,png,webp,svg}',
     "./src/input.css"
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'salloo': "url('/img/MyImages/salloo4.jpg')",
      }
    },
  },
  plugins: [],
}

