import { BrandColors } from './BrandColors';
import { Breakpoints } from './Breakpoints';
import { FontSizes } from './FontSizes';
import { InteractionColors } from './InteractionColors';
import { Pattern } from './Pattern';
import { Theme } from './Theme';

const createTheme = ({
  name,
  spaceUnit,
  brandColors,
  interactionColors,
  pattern,
  fontSizes = {
    xxs: '11px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '36px'
  }
}: {
  name: string;
  spaceUnit: number;
  brandColors: BrandColors;
  interactionColors: InteractionColors;
  pattern: Pattern;
  fontSizes?: FontSizes;
}, custom?: any): Theme => {
  const theme: Theme = {
    name,

    spaceUnit,

    breakpoints: new Breakpoints(),

    color: {
      brand: brandColors,

      interaction: {
        focus: interactionColors.focus
      },

      content: {
        background: brandColors.white,
        border: brandColors.grayLight
      },

      copytext: brandColors.grayDark,

      backdrop: 'rgba(0, 0, 0, 0.5)',

      state: {
        error: '#e7415d',
        success: '#27ae60'
      },

      division: {
        company: '#dd0099',
        concepts: '#ffcc00',
        learning: '#880088',
        services: '#ff7700',
        technologies: '#66aa22',
        wolkenkit: '#00aaff'
      }
    },

    components: {
      borderRadius: {
        default: '1px'
      },

      HorizontalBar: {
        minHeight: '54px'
      },

      Sidebar: {
        width: '80px'
      },

      Pattern: pattern,

      Paragraph: {
        maxWidth: '800px'
      }
    },

    devices: {
      small: '@media (max-width: 544px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 992px)',
      xlarge: '@media (max-width: 1200px)'
    },

    font: {
      import: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Ubuntu:300,400,500|Ubuntu+Mono',

      size: fontSizes,

      family: {
        default: `'Source Sans Pro', Arial, Helvetica, sans-serif`,
        headline: `'Ubuntu', sans-serif`,
        code: `'Ubuntu Mono', monospace !important`
      }
    },

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

    zIndices: {
      content: 100,
      contentOverlay: 200,
      navigation: 1000,
      menu: 2000,
      modal: 3000,
      overlay: 4000,
      transfer: 5000
    },

    space: (factor: number): number => factor * spaceUnit,

    ease: {
      outCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
      outExpo: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)'
    },

    custom
  };

  return theme;
};

export { createTheme };
