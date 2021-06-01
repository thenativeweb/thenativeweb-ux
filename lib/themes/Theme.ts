import { BrandColors } from './BrandColors';
import { Breakpoints } from './Breakpoints';
import { DivisionColors } from './DivisionColors';
import { FontSizes } from './FontSizes';
import { InteractionColors } from './InteractionColors';
import { Pattern } from './Pattern';

abstract class Theme {
  public readonly breakpoints: Breakpoints;

  public readonly color: {
    brand: BrandColors;
    division: DivisionColors;
    interaction: InteractionColors;
    content: { background: string; border: string };
    copytext: string;
    backdrop: string;
    state: { error: string; success: string };
  };

  public readonly components: {
    borderRadius: { default: string };
    HorizontalBar: { minHeight: string };
    Sidebar: { width: string };
    Pattern: Pattern;
    Paragraph: {
      maxWidth: string;
    };
  };

  public readonly devices: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  public readonly font: {
    import?: string;
    size: FontSizes;
    family: { default: string; headline: string; code: string };
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

  public readonly space: (factor: number) => number;

  public readonly ease: {
    outCirc: string;
    outExpo: string;
  };

  public constructor ({
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
  }) {
    this.breakpoints = new Breakpoints();

    this.color = {
      brand: brandColors,

      interaction: {
        focus: interactionColors.focus,
        error: interactionColors.error
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
        'summer-school': '#00eeff',
        technologies: '#66aa22',
        wolkenkit: '#00aaff'
      }
    };

    this.components = {
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
    };

    this.devices = {
      small: '@media (max-width: 544px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 992px)',
      xlarge: '@media (max-width: 1200px)'
    };

    this.font = {
      import: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700|Ubuntu:300,400,500|Ubuntu+Mono&display=swap',

      size: fontSizes,

      family: {
        default: `'Source Sans Pro', Arial, Helvetica, sans-serif`,
        headline: `'Ubuntu', sans-serif`,
        code: `'Ubuntu Mono', monospace !important`
      }
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

    this.name = name;

    this.shadow = {
      overlay: '1px 1px 10px rgba(0, 0, 0, 0.25)'
    };

    this.spaceUnit = spaceUnit;

    this.zIndices = {
      content: 100,
      contentOverlay: 200,
      navigation: 1000,
      menu: 2000,
      modal: 3000,
      overlay: 4000,
      transfer: 5000
    };

    this.space = (factor: number): number => factor * spaceUnit;

    this.ease = {
      outCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
      outExpo: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)'
    };
  }
}

export { Theme };
