import { Size } from './Size';

const defaultSteps = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

class Breakpoints {
  public readonly steps: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };

  private readonly unit: string;

  public constructor (steps = defaultSteps, unit = 'px') {
    this.steps = steps;
    this.unit = unit;
  }

  public static getNextSize (size: Size): Size | undefined {
    if (size === 'xs') {
      return 'sm';
    }
    if (size === 'sm') {
      return 'md';
    }
    if (size === 'md') {
      return 'lg';
    }
    if (size === 'lg') {
      return 'xl';
    }
  }

  public static getMinWidthRule (minWidth: number, unit: string): string {
    return `@media (min-width:${minWidth}${unit})`;
  }

  // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap: We remove 0.2 pixels from the
  // maxWidth so that viewports with this actual maxWidth won't be affected by
  // this rule. Kudos to https://getbootstrap.com/docs/4.3/layout/overview/
  public static getMaxWidthRule (maxWidth: number, unit: string): string {
    return `@media (max-width:${maxWidth - 0.02}${unit})`;
  }

  // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap: We remove 0.2 pixels from the
  // maxWidth so that viewports with this actual maxWidth won't be affected by
  // this rule. Kudos to https://getbootstrap.com/docs/4.3/layout/overview/
  public static getMinMaxWidthRule (minWidth: number, maxWidth: number, unit: string): string {
    return `@media (min-width:${minWidth}${unit}) and (max-width:${maxWidth - 0.02}${unit})`;
  }

  public up (size: Size | number): string {
    if (typeof size === 'number') {
      return Breakpoints.getMinWidthRule(size, this.unit);
    }

    const minWidth = this.steps[size];

    return Breakpoints.getMinWidthRule(minWidth, this.unit);
  }

  public down (size: Size | number): string {
    if (typeof size === 'number') {
      return Breakpoints.getMaxWidthRule(size, this.unit);
    }

    const nextSize = Breakpoints.getNextSize(size);

    if (!nextSize) {
      // Calling down('xl') means we want to target all devices including xl
      // and all above which is not possible to achieve with a maxWidth query
      // so we're using up('xs') here.
      return this.up('xs');
    }

    const maxWidth = this.steps[nextSize];

    return Breakpoints.getMaxWidthRule(maxWidth, this.unit);
  }

  public only (size: Size): string {
    return this.between(size, size);
  }

  public between (lowerSize: Size | number, upperSize: Size | number): string {
    if (typeof lowerSize === 'number' && typeof upperSize === 'number') {
      return Breakpoints.getMinMaxWidthRule(lowerSize, upperSize, this.unit);
    }
    if (typeof lowerSize === 'number' || typeof upperSize === 'number') {
      throw new Error('Lower size and upper size must either both be sizes or numbers.');
    }

    const nextUpperSize = Breakpoints.getNextSize(upperSize);

    if (!nextUpperSize) {
      return this.up(lowerSize);
    }

    const minWidth = this.steps[lowerSize];
    const maxWidth = this.steps[nextUpperSize];

    return Breakpoints.getMinMaxWidthRule(minWidth, maxWidth, this.unit);
  }
}

export { Breakpoints };
