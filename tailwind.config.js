/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000002',
        light: '#FBF9FC',
        'light-40': 'rgb(251, 249, 252, .4)',
        green: {
          dark: '#206A5D',
          'dark-40': 'rgb(32, 106, 93, .4)',
          'dark-20': 'rgb(32, 106, 93, .2)',
          light: '#C2E662',
          normal: '#80B214',
        },
        yellow: '#FFCC29',
        orange: '#F58634',
      },
    },
  },
  plugins: [],
}
