/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    boxShadow: {
      outerShadow: '6px 6px 10px -1px #00000030, -6px -6px 10px -1px #FFFFFF70',
      innerShadow:
        'inset 4px 4px 6px -1px #00000020, inset -4px -4px 6px -1px #FFFFFF70,-0.5px -0.5px 0px #FFFFFF, 0.5px 0.5px 0px #00000030, 0px 12px 10px -10px #00000010',
    },
  },
  plugins: [],
};
