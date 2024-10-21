/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-only': '0px 4px 10px rgba(0, 0, 0, 0.1)', // Custom bottom-only shadow
      }
    },
  },
  plugins: [],
}