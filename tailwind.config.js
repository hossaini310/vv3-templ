import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
