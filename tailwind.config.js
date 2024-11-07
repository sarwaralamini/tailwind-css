/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //class <html class="dark"></html>
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: '"Playwrite GB S", cursive',
        nothing: '"Nothing You Could Do", cursive',
        dmmono: '"DM Mono", serif'
      }
    },
  },
  plugins: [],
}


