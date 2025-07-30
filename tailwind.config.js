/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/javascript/**/*.js",
     "./public/css/**/*.css",
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

