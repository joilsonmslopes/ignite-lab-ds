/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'black': '#000000',

      'white': '#ffffff',

      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },

      violet: {
        900: '#28203e',
        800: '#6833e4',
        700: '#8257e5',
        500: '#734bd1',
        300: '#996dff'
      },

      cyan: {
        500: '#81D8F7',
        400: '#9BE1FB',
      }


    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
    
  },
  plugins: [],
}
