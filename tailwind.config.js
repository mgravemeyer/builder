/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/*.tsx',
    './app/**/*.tsx',
    './app/**/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    extend: {},
    colors: {
      'bDark': '#17161D',
      'bLight': '#1A1820',
      'bBright': '#FFFFFF',
      'bPurple': '#474658',
      'bLightPurple': '#A3A2B2',
      'bButtonDark': '#1F2029',
    },
    fontFamily: {
      oSExtraBold: ['openSansExtraBold'],
      oSBold: ['openSansBold'],
      oSSemiBold: ['openSansSemiBold'],
      oSMedium: ['openSansMedium'],
      oSRegular: ['openSansRegular'],
      oSLight: ['openSansLight'],
    }
  },
  plugins: [],
}
