/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    fontFamily: {
      'Montserrat': ['Montserrat'],
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
      },
    },
  },
  plugins: [],
}
