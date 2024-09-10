/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        "d-space": "calc(50% + 0.5rem)" /* Adjust the 50px to fit your needs */
      }
    },
  },
  plugins: [],
}

