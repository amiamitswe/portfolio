/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-dark': "#191919",
        'body-light': "#f1f1f1",
        'light-blue': "#42446E",
        gray1: '#666',
        gray2: '#A7A7A7',
        gray3: "#CCC",
        gray4: "#D9D9D9",
        gray5: "#363636"
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "dm-sans": ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};