/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      teal: colors.teal,
    },
  },
  plugins: [],
};
