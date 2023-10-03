import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pr-dark': '#352F44',
        'pr-gray': '#5C5470',
        'pr-light_gray': '#B9B4C7',
        'pr-light': '#FAF0E6',
        'pr-green': '#03C988',
      },
      boxShadow: {
        'border-full': '0px 0px 20px 2px rgba(0,0,0,0.1)',
        'border-blur': '0px 0px 20px 2px rgba(0,0,0,0.14)',
        'border-light': '0px 0px 6px 0px rgba(0,0,0,0.1)',
        'border-inset': 'inset 0px 0px 40px 5px rgba(0,0,0,0.1)',
      },
      dropShadow: {
        'box-course': '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
});
