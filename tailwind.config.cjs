/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
        'crimson': ['Crimson Pro', 'serif']
      },
      borderRadius:{
        'nineNine': '999px'
      },
      width:{
        '112': '112rem',
        '37': '37rem'
      }
    },
  },
  plugins: [],
}
