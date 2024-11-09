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
        paragraph: ['1.5rem', '25px'], //font-size 1.5rem and line-height 25px
        custompx: ['20px', { //font-size 20px, line-height 25px, letter-spacing 2px, font-weight 200
          lineHeight: '25px',
          letterSpacing: '2px',
          fontWeight: '200'
        }]
      }
    },
  },
  plugins: [],
}


