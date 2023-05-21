/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
  },
  theme: {
    extend: {
      colors: {
        'base-0': '#2e3538',
        'base-10': '#aeaeae',
        'base-20': '#fbfbfb',
        'primary-0': '#40a7e3',
        'primary-10': '#f1f8fc',
        'primary-20': '#0d3567',
      },
      boxShadow: {
        panel: '5px 5px 35px 14px rgba(0, 0, 0, 0.17)',
      },
      zIndex: {
        2: '2',
      },
    },
  },
  plugins: [],
}
