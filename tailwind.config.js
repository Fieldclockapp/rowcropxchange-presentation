/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rcx-dark-green': '#0F3D1F',
        'rcx-gold': '#D4A017',
        'rcx-cream': '#F8F5F0',
      },
    },
  },
  plugins: [],
}
