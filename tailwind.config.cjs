/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#f7f8fc',
        'compose': '#c4e6ff',
        'selected': '#d4e3ff',
        'read': '#f4f4fe',
        'search': '#e9f0fa',
        'link': '#d4e3ff'
      }
    },
    plugins: [],
  },
}
