import { BrandColors } from './BrandColors';
import Breakpoints from './Breakpoints';
import { InteractionColors } from './InteractionColors';
import { Pattern } from './Pattern';

class Theme {
  public readonly breakpoints: Breakpoints;

  public readonly colors: {
    brand: BrandColors;
    interaction: InteractionColors;
    content: { background: string; border: string };
    copytext: string;
    backdrop: string;
    state: { error: string; success: string };
  };

  public readonly components: {
    borderRadius: { default: string };
    Sidebar: { width: string };
    Pattern: Pattern;
  };

  public readonly devices: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  public readonly font: {
    import: string;
    size: { xs: string; sm: string; md: string; lg: string; xl: string };
    family: { default: string; headline: string; code: string };
  };

  public readonly grid: {
    stepSize: number;
  };

  public readonly icon: {
    size: { xs: string; sm: string; md: string; lg: string; xl: string; xxl: string };
  };

  public readonly name: string;

  public readonly shadow: {
    overlay: string;
  };

  public readonly spaceUnit: number;

  public readonly zIndices: {
    content: number;
    contentOverlay: number;
    navigation: number;
    menu: number;
    modal: number;
    overlay: number;
    transfer: number;
  };

  public constructor ({ name, spaceUnit, brandColors, interactionColors, pattern }: {
    name: string;
    spaceUnit: number;
    brandColors: BrandColors;
    interactionColors: InteractionColors;
    pattern: Pattern;
  }) {
    this.name = name;
    this.spaceUnit = spaceUnit;

    this.breakpoints = new Breakpoints();

    this.colors = {
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
    };

    this.components = {
      borderRadius: {
        default: '1px'
      },

      Sidebar: {
        width: '80px'
      },

      Pattern: pattern
    };

    this.devices = {
      small: '@media (max-width: 544px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 992px)',
      xlarge: '@media (max-width: 1200px)'
    };

    this.font = {
      import: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Ubuntu:300,400,500|Ubuntu+Mono',

      size: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px'
      },

      family: {
        default: `'Source Sans Pro', Arial, Helvetica, sans-serif`,
        headline: `'Ubuntu', sans-serif`,
        code: `'Ubuntu Mono', monospace !important`
      }
    };

    this.grid = {
      stepSize: 10
    };

    this.icon = {
      size: {
        xs: '14px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        xxl: '64px'
      }
    };

    this.shadow = {
      overlay: '1px 1px 10px rgba(0, 0, 0, 0.25)'
    };

    this.zIndices = {
      content: 100,
      contentOverlay: 200,
      navigation: 1000,
      menu: 2000,
      modal: 3000,
      overlay: 4000,
      transfer: 5000
    };
  }

  public space (factor: number): number {
    return factor * this.spaceUnit;
  }
}

export default Theme;
