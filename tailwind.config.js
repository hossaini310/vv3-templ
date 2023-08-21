const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html', './src/**/*.{index.html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      emerald: colors.emerald,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
  },
  plugins: [],
};
