/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: "#2967FF",
        secondary: "#58CF18",
        mainAccent: "#FFA601",
        mainAccentLight: "#FF7CB4",
        textSecondary: "#727280",
        backgroundSecondary: "#F0F4FB",
        backgroundPrimary: "#AEC2EA",
      },
      screens: {
        'max-1250': {'max': '1250px'},
        'max-1080': {'max': '1080px'},
        'max-780': {'max': '780px'},
        'max-700': {'max': '700px'},
        'max-640': {'max': '640px'},
        'max-540': {'max': '540px'},
      }
    },
  },
  plugins: [],
}

