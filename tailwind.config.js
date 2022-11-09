/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F2EAE2',
        'brand-gray': '#6C7289',
        'brand-green': '#3D8168',
        'brand-dark-green': '#1A4032',
        'brand-dark-blue': '#1C232B',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
};
