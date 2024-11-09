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
      },
      fontSize: {
        body: '1.125rem',
        paragraph: '1.5rem',
        custompx: '20px'
      }
    },
  },
  plugins: [],
}


