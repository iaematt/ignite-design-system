/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#000000',
      white: '#ffffff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#81d8f7',
        300: '#9be1fb',
      },

      sky: {
        300: '#7dd3fc',
        400: '#38bdf8',
        800: '#075985',
      },

      emerald: {
        300: '#6ee7b7',
        400: '#34d399',
        800: '#065f46',
      },

      red: {
        300: '#fca5a5',
        400: '#f87171',
        800: '#991b1b',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Barlow, sans-serif',
      },
    },
  },
  plugins: [],
};
