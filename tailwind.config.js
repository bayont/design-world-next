module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            body: ['Inter', 'sans-serif'],
         },
         colors: {
            'neutral-10': '#ffffff',
            'neutral-20': '#F5F5F5',
            'neutral-30': '#EDEDED',
            'neutral-40': '#E0E0E0',
            'neutral-50': '#C2C2C2',
            'neutral-60': '#9E9E9E',
            'neutral-70': '#757575',
            'neutral-80': '#616161',
            'neutral-90': '#404040',
            'neutral-99': '#0A0A0A',
            'primary-border': '#DFE0F3',
            'primary-focus': 'rgba(76, 77, 220, 0.2)',
            'primary-hover': '#3234CC',
            'primary-main': '#4C4DDC',
            'primary-pressed': '#21217A',
            'primary-surface': '#F5F5FF',
            'secondary-border': '#F3DFDF',
            'secondary-focus': 'rgba(220, 76, 76, 0.2)',
            'secondary-hover': '#CC3232',
            'secondary-main': '#DC4C4C',
            'secondary-pressed': '#7A2121',
            'secondary-surface': '#FFF5F5',
         },
      },
   },
   plugins: [],
};
