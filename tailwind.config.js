/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/*.tsx', './app/**/*.tsx', './app/**/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      bDark: '#17161D',
      bLight: 'white',
      bBright: '#FFFFFF',

      bPurple: '#E1E1E3',
      // bPurple: '#113838',

      bLightPurple: '#A3A2B2',
      bButtonDark: '#1F2029',
    },
    fontFamily: {
      oSExtraBold: ['openSansExtraBold'],
      oSBold: ['openSansBold'],
      oSSemiBold: ['openSansSemiBold'],
      oSMedium: ['openSansMedium'],
      oSRegular: ['openSansRegular'],
      oSLight: ['openSansLight'],
    },
  },
  plugins: [],
};
