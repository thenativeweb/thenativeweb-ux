import { BrandColors } from './BrandColors';
import { Breakpoints } from './Breakpoints';
import { DivisionColors } from './DivisionColors';
import { FontSizes } from './FontSizes';
import { InteractionColors } from './InteractionColors';
import { Pattern } from './Pattern';

export interface Theme {
  readonly breakpoints: Breakpoints;

  readonly color: {
    brand: BrandColors;
    division: DivisionColors;
    interaction: InteractionColors;
    content: { background: string; border: string };
    copytext: string;
    backdrop: string;
    state: { error: string; success: string };
  };

  readonly components: {
    borderRadius: { default: string };
    Sidebar: { width: string };
    Pattern: Pattern;
    Paragraph: {
      maxWidth: string;
    };
  };

  readonly devices: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  readonly font: {
    import: string;
    size: FontSizes;
    family: { default: string; headline: string; code: string };
  };

  readonly icon: {
    size: { xs: string; sm: string; md: string; lg: string; xl: string; xxl: string };
  };

  readonly name: string;

  readonly shadow: {
    overlay: string;
  };

  readonly spaceUnit: number;

  readonly zIndices: {
    content: number;
    contentOverlay: number;
    navigation: number;
    menu: number;
    modal: number;
    overlay: number;
    transfer: number;
  };

  space: (factor: number) => number;

  readonly ease: {
    outCirc: string;
    outExpo: string;
  };

  readonly custom: any;
}
