module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: [
        'Roboto Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        'courier new',
        'monospace',
      ],
    },
    extend: {
      colors: {
        primary: '#B53DF5',
        'primary-dark': '#5814a2',
        'page-dark-bg': '#190330',
        'footer-bg': '#110221',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line
  plugins: [require('@tailwindcss/typography')],
};
