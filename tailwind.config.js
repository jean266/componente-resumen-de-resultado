/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red-light': '#ff5757',
      'orangey-yellow': '#ffb01f',
      'green-teal': '#00bd91',
      'cobalt-blue': '#1125d4',
      'blue-slate': '#7857ff',
      'blue-royal': '#2e2be9',
      'violet-blue': '#4e21ca',
      'persian-blue': '#2421ca',
      'pale-blue': '#ebf1ff',
      'lavender-light': '#c8c7ff',
      'gray-blue-dark': '#303b5a',
    },
    fontFamily : {
      sans : ['Hanken Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

