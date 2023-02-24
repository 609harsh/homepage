/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./src/**/*.{jsx,jsx,tsx,ts}',
            './src/**/*.{jsx,js,tsx,ts}'
  ],

  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/bg.svg')"
      }
    },
    colors: {
      
      purple:'#a026ff',
      green:'#7ee687',
      grey:'#aaa',
      white:'#fff',
      blue:'#0d99ff',
      aquaBlue:'#01a99d',
      black:'#000'

    },
    fontFamily:{
      mons:'Montserrat,sans-serif',
    },
    
  },
  plugins: [],
}
