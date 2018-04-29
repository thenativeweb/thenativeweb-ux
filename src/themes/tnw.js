const brandColors = {
  dark: '#23232c',
  highlight: '#f09',
  darkGrey: '#363d45',
  midGrey: '#eee',
  lightGrey: '#595c62',
  white: '#fff'
};

const theme = {
  color: {
    brand: brandColors,

    interaction: {
      focus: '#363d45'
    },

    content: {
      background: brandColors.white,
      panelLight: brandColors.lightGrey,
      pandelDark: brandColors.darkGrey,
      border: brandColors.midGrey
    },

    copyText: brandColors.dark,
    backdrop: 'rgba(0, 0, 0, 0.5)',

    state: {
      error: '#e7415d',
      success: '#27ae60'
    }
  },

  font: {
    size: {
      medium: '14px',
      default: '16px',
      large: '18px',
      xlarge: '24px',
      code: '15px',
      copytext: '18px'
    },

    family: {
      default: `"Source Sans Pro", Arial, Helvetica, sans-serif`,
      headline: `"Ubuntu", sans-serif`,
      code: `"Ubuntu Mono", monospace !important`
    }
  },

  grid: {
    stepSize: 10
  },

  /* Components */
  components: {
    borderRadius: {
      default: '1px'
    }
  },

  zIndex: {
    content: 100,
    contentOverlay: 200,
    navigation: 1000,
    menu: 2000,
    modal: 3000,
    overlay: 4000,
    transfer: 5000
  }
};

export default theme;
