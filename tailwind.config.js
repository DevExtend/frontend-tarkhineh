/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        estedad: 'estedad',
      },
      spacing: {
        'space-xs': '0.5rem',
        'space-sm': '1rem',
        'space-md': '1.5rem',
        'space-lg': '2rem',
        'space-xl': '2.5rem',
        'space-2xl': '3rem',
        'space-3xl': '3.5rem',
        'space-4xl': '4rem',
        'space-5xl': '5rem',
        'space-6xl': '7.5rem',
        'space-7xl': '10rem',
      },
      borderRadius: {
        'rounded-xs': '0.25rem',
        'rounded-sm': '0.5rem',
        'rounded-md': '1rem',
        'rounded-lg': '2.5rem',
        'rounded-xl': '2rem',
        'rounded-2xl': '4rem',
      },
      boxShadow: {
        'shadow-2': '0px 2px 2px 0px #00000040',
        'shadow-4': ' 0px 4px 4px 0px #00000040',
        'shadow-4': ' 0px 6px 6px 0px #00000040',
        'shadow-8': ' 0px 8px 8px 0px #00000040',
        'shadow-12': ' 0px 12px 12px 0px #00000040',
        'shadow-16': ' 0px 16px 16px 0px #00000040',
        'shadow-card':
          ' 0px 0px 0px 0px #0000001A , 0px 1px 2px 0px #0000001A ,0px 4px 4px 0px #00000017, 0px 9px 5px 0px #0000000D ,0px 16px 6px 0px #00000003 ,0px 25px 7px 0px #00000000',
        'shadow-contactCard':
          ' 0px 0px 0px 0px #0000001A,0px 3px 6px 0px #0000001A,0px 11px 11px 0px #00000017, 0px 24px 14px 0px #0000000D, 0px 42px 17px 0px #00000003, 0px 66px 18px 0px #00000000',
      },
      padding: {
        'p-xs': '0.5rem',
        'p-sm': '1rem',
        'p-lg': '2.5rem',
        'p-xl': '2rem',
      },
      colors: {
        'tint-100': '#E5F2E9',
        'tint-200': '#CAE4D3',
        'tint-300': '#B0D7BD',
        'tint-400': '#96C9A7',
        'tint-500': '#7CBC91',
        'tint-600': '#61AE7B',
        'tint-700': '#4E9968',
        'primary-color': '#417F56',
        'shade-100': '#396F4B',
        'shade-200': '#315F41',
        'shade-300': '#294F36',
        'shade-400': '#21402B',
        'shade-500': '#183020',
        'shade-600': '#102016',
        'shade-700': '#08100B',
        'gray-100': '#F9F9F9',
        'gray-200': '#E1E1E1',
        'gray-300': '#EDEDED',
        'gray-400': '#CBCBCB',
        'gray-500': '#ADADAD',
        'gray-600': '#757575',
        'gray-700': '#717171',
        'gray-800': '#353535',
        'dark-color': '#0C0C0C',
        'error-color': '#C30000',
        'error-light': '#ED2E2E',
        'error-extraLight': '#FFF2F2',
        'success-color': '#00966D',
        'success-light': '#00BA88',
        'success-extraLight': '#F3FDFA',
        'warning-color': '#A9791C',
        'warning-light': '#F4B740',
        'warning-extraLight': '#FFF8E1',
      },

      fontSize: {
        'display-100': [
          '4rem',
          {
            lineHeight: '5.6rem',
            fontWeight: '700',
          },
        ],
        'display-200': [
          '3.5rem',
          {
            lineHeight: '4.2rem',
            fontWeight: '700',
          },
        ],
        'header-100': [
          '2.75rem',
          {
            lineHeight: '3.85rem',
            fontWeight: '700',
          },
        ],
        'header-200': [
          '2.5rem',
          {
            lineHeight: '3.5rem',
            fontWeight: '700',
          },
        ],
        'header-300': [
          '2rem',
          {
            lineHeight: '2.8rem',
            fontWeight: '700',
          },
        ],
        'header-400': [
          '1.5rem',
          {
            lineHeight: '2.1rem',
            fontWeight: '700',
          },
        ],
        'header-500': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
        ],
        'header-600': [
          '1rem',
          {
            lineHeight: '1.4rem',
            fontWeight: '700',
          },
        ],
        'header-700': [
          '1.25rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '600',
          },
        ],
        'body-xl': [
          '1.25rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '400',
          },
        ],
        'body-lg': [
          '1.125rem',
          {
            lineHeight: '2.025rem',
            fontWeight: '400',
          },
        ],
        'body-md': [
          '1rem',
          {
            lineHeight: '1.8rem',
            fontWeight: '400',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            lineHeight: '1.575rem',
            fontWeight: '400',
          },
        ],
        'caption-md': [
          '0.75rem',
          {
            lineHeight: '1.35rem',
            fontWeight: '400',
          },
        ],
        'caption-lg': [
          '0.875rem',
          {
            lineHeight: '1.575rem',
            fontWeight: '500',
          },
        ],
        'caption-sm': [
          '0.625rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '400',
          },
        ],
        'button-lg': [
          '1rem',
          {
            lineHeight: '1.8rem',
            fontWeight: '500',
          },
        ],
        'button-sm': [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '500',
          },
        ],
        'overline-lg': [
          '1rem',
          {
            lineHeight: '1.8rem',
            fontWeight: '400',
          },
        ],
        'overline-sm': [
          '0.75rem',
          {
            lineHeight: '1.318125rem',
            fontWeight: '700',
            letterSpacing: '0.05rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
