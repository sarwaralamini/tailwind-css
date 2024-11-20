/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //class <html class="dark"></html>
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: '"Playwrite GB S", cursive',
        nothing: '"Nothing You Could Do", cursive',
        dmmono: '"DM Mono", serif',
        "source": '"Source Sans Pro","ui-sans-serif","system-ui",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        "ubuntu-mono": '"Ubuntu Mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
      },
      fontSize: {
        body: '1.125rem',
        paragraph: ['1.5rem', '25px'], //font-size 1.5rem and line-height 25px
        custompx: ['20px', { //font-size 20px, line-height 25px, letter-spacing 2px, font-weight 200
          lineHeight: '25px',
          letterSpacing: '2px',
          fontWeight: '200'
        }]
      },
      fontWeight: {
        "custom-weight": '100'
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
      },
      listStyleImage: {
        checkmark: 'url("../output/img/checkmark.png")',
      },
      colors: {
        'primary': '#bc6c25',
        'custom-blue': '#88aad5',
      },
      textDecorationThickness: {
        5: '5px',
      },
      textUnderlineOffset: {
        10: '10px',
      }
    },
  },
  plugins: [],
}


