import createBreakpoints from './createBreakpoints';

const defaultBrandColors = {
  dark: '#23232c',
  highlight: '#f09',
  darkGrey: '#363d45',
  midGrey: '#595c62',
  lightGrey: '#eee',
  white: '#fff'
};

const defaultInteractionColors = {
  focus: '#363d45'
};

const create = function ({
  id,
  brandColors = defaultBrandColors,
  interactionColors = defaultInteractionColors,
  spaceUnit = 8,
  ...additionalOptions
} = {}) {
  if (!id) {
    throw new Error('Id is missing.');
  }

  const space = function (factor) {
    return factor * spaceUnit;
  };

  const theme = {
    id,
    color: {
      brand: brandColors,

      interaction: {
        focus: interactionColors.focus
      },

      content: {
        background: brandColors.white,
        border: brandColors.lightGrey
      },

      copytext: brandColors.dark,
      backdrop: 'rgba(0, 0, 0, 0.5)',

      state: {
        error: '#e7415d',
        success: '#27ae60'
      }
    },

    font: {
      import: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Ubuntu:300,400,500|Ubuntu+Mono',

      size: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px'
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

    space,

    icon: {
      size: {
        xs: '14px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        xxl: '64px'
      }
    },

    shadow: {
      overlay: '1px 1px 10px rgba(0, 0, 0, 0.25)'
    },

    /* Components */
    components: {
      borderRadius: {
        default: '1px'
      },

      Sidebar: {
        width: '80px'
      },

      Pattern: {
        opacity: 0.1,
        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAADAFBMVEUAAAD/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJn/AJl1s5cWAAAA/3RSTlMAAQMCizDg8P5A+/0E+fQJ+gb8BxIP9ggFNgrx90gWtuX42umRsRjIEAzmCw4VT+zu6PLK1mh638XVLqSQkuogYBmG7+JaoIDzsusjRBE4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')`
      }
    },

    device: {
      small: '@media (max-width: 544px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 992px)',
      xlarge: '@media (max-width: 1200px)'
    },

    zIndices: {
      content: 100,
      contentOverlay: 200,
      navigation: 1000,
      menu: 2000,
      modal: 3000,
      overlay: 4000,
      transfer: 5000
    },

    breakpoints: {
      ...createBreakpoints()
    },

    ...additionalOptions
  };

  return theme;
};

export default create;
