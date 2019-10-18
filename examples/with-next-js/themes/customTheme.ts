import createTheme from '../../../build/lib/themes/createTheme';

const customTheme = createTheme({
  name: 'custom',
  spaceUnit: 8,

  brandColors: {
    dark: '#2f333b',
    highlight: '#48BB78',
    darkGrey: '#363d45',
    midGrey: '#595c62',
    lightGrey: '#eeeeee',
    white: '#ffffff'
  },

  interactionColors: {
    focus: '#363d45'
  },

  pattern: {
    opacity: 0.05,
    backgroundImage: 'none'
  }
}, {
  components: {
    CustomComponent: {
      width: '42px'
    }
  }
});

export default customTheme;
