/** @type {import('tailwindcss').Config} */
const { Block } = require('@mui/icons-material');
const { cursorTo } = require('readline');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
       '600': '600px',
       '762': '762px',
      },
      height: {
        '400': '400px',
        '600': '600px',
       },
   }
 },
 plugins: [
  plugin(function({ addComponents, addUtilities, theme }) {
    addComponents({
      '.content-conteiner': {
        position: 'relative',
        display: 'flex',
        margin: '0 auto',
        color: '#919191',
        '&::before': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '25vh',
          position: 'absolute',
          left: '0',
          top: '0',
          backgroundColor: '#ffd2f3',
          zIndex: '-1',
        }
      },
      '.card-component': {
        padding: '20px 30px',
        margin:' 30px 0 0',
        backgroundColor: '#ffffff',
        boxShadow: '2px 2px 7px 1px rgba(125, 125, 125, .3)',
      },
      '.card-header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '20px',
      },
      '.btn': {
        padding: '.25rem 0',
        borderRadius: '.25rem',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 4,
      },
      '.btn-white': {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      },
      '.btn-blue': {
        backgroundColor: '#3490dc',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#2779bd'
        },
      },
      '.btn-red': {
        backgroundColor: '#e3342f',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#cc1f1a'
        },
      },
    })
    addUtilities({

    })
  })
]
}

