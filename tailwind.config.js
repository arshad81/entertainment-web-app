/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'navy-blue':'#161D2F',
        'emerald':'#5A698F',
        'dark-blue':'#10141E'
      },
      minWidth:{
        '470p':'470px'
      }
    },
  },
  plugins: [],
}