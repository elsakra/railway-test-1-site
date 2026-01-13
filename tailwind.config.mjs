/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1e3a5f',
        'light-blue': '#e8f1f5',
        'teal': '#4fd1c7',
        'teal-dark': '#3db5ac'
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}