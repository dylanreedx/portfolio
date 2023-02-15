/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-200': '#4B4E79',
        'dark-300': '#212235',
        'dark-400': '#191A29',
        'dark-500': '#141521',
        'light-400': '#AAACCA',
        'light-500': '#fff',
      },
    },
  },
  plugins: [],
};
