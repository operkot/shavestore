/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      zIndex: {
        2: '2',
      },
      gridTemplateColumns: {
        products: 'repeat(auto-fill, minmax(160px, 1fr))',
      },
      minWidth: {
        4.5: '18px',
      },
      height: {
        4.5: '18px',
      },
      spacing: {
        full: '100%',
        1.5: '0.375rem',
        2.5: '0.625rem',
      },
      boxShadow: {
        panel: '5px 5px 35px -14px rgba(0, 0, 0, 0.17)',
      },
      colors: {
        'base-0': '#2e3538',
        'base-10': '#aeaeae',
        'base-20': '#fbfbfb',
        'base-30': '#f7f7f7',
        'primary-0': '#40a7e3',
        'primary-10': '#f1f8fc',
        'primary-20': '#0d3567',
      },
    },
  },
  plugins: [],
}
