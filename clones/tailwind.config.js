module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8': '12.5%',
        '1/16': '4.1666667%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
