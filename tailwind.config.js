/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('./src/assets/image 11.png')",
        'about': "url('./src/assets/image 1.png')",
        'contact': "url('./src/assets/image 2.png')",
        'grimuar': "url('./src/assets/image 7.png')",
        'dragon': "url('./src/assets/image 4.png')",
        'card1': "url('./src/assets/one.jpg')",
    },
    spacing: {
      'auto': '0 auto',
    },
    opacity: {
      '30': '.40',
      '50': '.50',
    },
    backgroundColor:{
      'grays': '#D9D9D9',
    },
    keyframes: {
      appear: {
       'from': { transform: 'translateX(-500px)' },
       'to': { transform: 'translateX(0px)' },
      },
      left: {
        'from': { transform: 'translateX(+500px)' },
        'to': { transform: 'translateX(0px)' },
       },
    },
    animation: { appear: 'appear linear', left: 'left linear' },
  },
  plugins: [],
},
}
