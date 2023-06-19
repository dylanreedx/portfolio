/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-100': '#737591',
        'dark-200': '#4B4E79',
        'dark-300': '#212235',
        'dark-400': '#191A29',
        'dark-500': '#070707',
        'light-100': '#D9DBE9',
        'light-200': '#BEBFD6',
        'light-300': '#A4A3C3',
        'light-400': '#AAACCA',
        'light-500': '#fff',
      },
    },
  },
  plugins: [],
};
