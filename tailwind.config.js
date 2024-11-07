/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c80000',
        secondary: '#212427',
        stroke: '#F4F4F4',
        grey: '#F7F7F7',
      },
      fontFamily: {
        halenoir: ['var(--font-halenoir)'],
      }
    },
  },
  plugins: [],
};
