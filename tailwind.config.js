/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0E8BFF',
        Dark_Indigo : '#26395C',
        Dodger_Blue :'#0E8BFF',
        Light_Periwinkle : '#D6EBFD'
      },
      fontFamily:{
        Red_Hat : '"Red Hat Display", sans-serif'
      },
      boxShadow:{
        inner_shadow:'0px -1px 0px 0px #9A9FBF1A inset'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

