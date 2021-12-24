module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        home: "url('/images/background.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
