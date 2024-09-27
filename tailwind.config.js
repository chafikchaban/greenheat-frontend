/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#635DFF"
      },
      backgroundImage: {
        'logo': "url('./src/assets/images//logo.svg')",
      },
      boxShadow: {
        'default': '0 3px 10px rgba(0, 0, 0, .15)',
      }
    },
  },
  plugins: [],
}

