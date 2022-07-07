module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js, ts, tsx, jsx}'
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins']
    },
    fontSize: {
      preTitle: '0.625rem',
      sm: '0.83rem',
      base: '1rem',
      md: '1.5rem',
      lg: '1.8rem',
      xl: '2rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#eeeeee',
      light: {
        100: '#FFFFFF',
        200: '#F6F8FA',
        300: '#E4E4E4',
        400: '#C9C9C9'
      },
      lowContrast: '#A3A2A6',
      layer: {
        100: '#17141C',
        200: '#201D25',
        300: '#252229',
        400: '#2C2930',
        500: '#38353C',
        600: '#413E45'
      },
      primary: {
        100: '#6D0DAA',
        200: '#8510D0',
        300: '#9C1BEE',
        400: '#AC41F0'
      },
      secondary: {
        100: '#276BD1',
        200: '#598FE0',
        300: '#75A2E5',
        400: '#91B5EA'
      },
      green: {
        100: '#116639',
        200: '#1F9254',
        300: '#4BD089',
        400: '#83EFB6'
      },
      yellow: {
        100: '#B18E0F',
        200: '#DBB428',
        300: '#FAD44D',
        400: '#F3D362'
      },
      red: {
        100: '#900509',
        200: '#B72A2E',
        300: '#E34A4E',
        400: '#EF7477'
      }
    },
    extend: {
      height: {
        input: '4.5vh'
      }
    }
  },
  plugins: []
};
