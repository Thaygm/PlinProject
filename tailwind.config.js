const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        white: '#fff',
        navy: '#002B5B',
        teal: '#57C5B6',
        darkTeal: '#159895',
        darkgreen: '#1A5F7A',
        winter: '#E3FDFD',
        mediumWinter: '#CBF1F5',
        darkWinter: '#A6E3E9',
        waterGreen: '#71C9CE',
        black: '#000'
      },
      minWidth: {
        100: '100vw',
        60: '60vw',
        80: '80vw'
      },
      minHeight: {
        90: '90vh',
        80: '80vh'
      }
    }
  },
  plugins: []
};
