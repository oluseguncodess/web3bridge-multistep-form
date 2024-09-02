/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,css,js}"],
  theme: {
    screens: {
      'sm': {'max': '870px'},
      'md': '871px',
    },
    extend: {
      fontFamily: {
        'sans': "'Ubuntu', system-ui" 
      },
      backgroundSize: {
        '100-100': '100% 100%',
      },
      colors: {
        'marineBlue' :'hsl(213, 96%, 18%)',
        'purplishBlue' :'hsl(243, 100%, 62%)',
        'pastelBlue' :'hsl(228, 100%, 84%)',
        'strawRed' :'hsl(354, 84%, 57%)',
        'lightBlue' :'hsl(206, 94%, 87%)',
        'coolGray' :'hsl(231, 11%, 63%)',
        'lightGray' :'hsl(229, 24%, 87%)',
        'magnolia' :'hsl(217, 100%, 97%)',
        'alabaster' :'hsl(231, 100%, 99%)',
        'whitee' :'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'mobile-sidebar': "url('/public/images/bg-sidebar-mobile.svg')",
        'laptop-sidebar': "url('/public/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}

