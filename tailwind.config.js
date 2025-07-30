/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/javascript/**/*.js",
     "./public/css/**/*.css",
     './public/img/**/*.{jpg,jpeg,png,webp}',
     "./src/input.css"
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'salloo': "url('/public/img/MyImages/salloo4.jpg')",
      }
    },
  },
  plugins: [],
}

