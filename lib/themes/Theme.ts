import { Breakpoints } from './Breakpoints';

export interface Theme {
  name: string;
  color: {
    brand: {
      dark: string;
      highlight: string;
      darkGrey: string;
      midGrey: string;
      lightGrey: string;
      white: string;
    };
    interaction: {
      focus: string;
    };
    content: {
      background: string;
      border: string;
    };
    copytext: string;
    backdrop: string;
    state: {
      error: string;
      success: string;
    };
  };
  font: {
    import: string;
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    family: {
      default: string;
      headline: string;
      code: string;
    };
  };
  grid: {
    stepSize: number;
  };
  space: (factor: number) => number;
  icon: {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  shadow: {
    overlay: string;
  };
  components: {
    borderRadius: {
      default: string;
    };
    Sidebar: {
      width: string;
    };
    Pattern: {
      opacity: number;
      backgroundImage: string;
    };
  };
  device: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  zIndices: {
    content: number;
    contentOverlay: number;
    navigation: number;
    menu: number;
    modal: number;
    overlay: number;
    transfer: number;
  };
  breakpoints: Breakpoints;
}
