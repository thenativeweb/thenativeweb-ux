import { createTheme } from '../../../../lib/themes/createTheme';

const customTheme = createTheme({
  name: 'custom',
  spaceUnit: 8,

  brandColors: {
    grayDark: '#2f333b',
    highlight: '#48BB78',
    gray: '#363d45',
    grayLight: '#eeeeee',
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

export { customTheme };
