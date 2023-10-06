/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        chirp:['Chirp', 'sans-serif']
      },
      margin:{
        '464': '464px',
      },
      width:{
        '455': '455px',
        '367': '367px',
        '334': '334px',
        '442': '442px'
      },
      borderradius:{
        '65': '65px',
      },
      backdropBlur:{
        '23':'23.668209075927734px'
      },
      borderColor:{
        'stroke':'rgba(29, 155, 240, 0.24)'
      },
      height:{
        '199': '199px'
      },
      padding:{
        '236.5':- '236.5px',
        '162': '162px',
        '10':'10px',
        '3.5':'15px',
      },
      colors: {
        neutral: {
          '50': '#F9F9F9',
          '100': '#F4F4F4',
          '200': '#E4E4E4',
          '300': '#D3D3D3',
          '400': '#A2A2A2',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
          '950': '#0A0A0A',
          '1000': '#000000',
        },
        'twitterblue': '#1D9BF0',
        'twitterblue_for_hover': '#1871CA',
        'bluewash' : 'rgba(117, 190, 239, 0.2)',
        'buttonstroke':'#546A7A',
        'searchbarfill': '#212327',
        'cardfill': '#16181C',
        'success': '#00BE74',
        'error': '#8B141A',
        'posthover': '#1871CA',
        'twitterwhite': '#fff',
        'secondary':'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}

