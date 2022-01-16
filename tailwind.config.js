module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#a557a3',
        lightBlue: '#a5b0ff',
        backgroundPrimary: '#0b121a',
        backgroundSecondary: '#202e3e',
      },
      fontFamily: {
        ubuntu: ['ubuntu'],
      },
    },
  },
  plugins: [],
};
