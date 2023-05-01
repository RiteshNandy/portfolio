/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: { 
    fontFamily: {
      'Montserrat': ['Montserrat'],
    },
    boxShadow:{
        'custom-light': " 0 0 10px #313131",
        'custom-dark': "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom_gray': {
          DEFAULT: '#36454f',
        },
        'light_gray': {
          DEFAULT: '#D3D3D3',
        },
        beige: '#F5F5DC',
        dark:{
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        }
      },
    },
  },
  plugins: [],
  variants: {
    extend:{
      boxShadow:["dark"]
    },
  }
}
