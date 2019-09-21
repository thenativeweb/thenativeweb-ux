import { Breakpoints } from './Breakpoints';

const defaultSteps = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const createMinWidthRule = function (minWidth: number, unit: string): string {
  return `@media (min-width:${minWidth}${unit})`;
};

const createMaxWidthRule = function (maxWidth: number, unit: string): string {
  // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap: We remove 0.2 pixels from the
  // maxWidth so that viewports with this actual maxWidth won't be affected by
  // this rule. Kudos to https://getbootstrap.com/docs/4.3/layout/overview/
  return `@media (max-width:${maxWidth - 0.02}${unit})`;
};

const createMinMaxWidthRule = function (minWidth: number, maxWidth: number, unit: string): string {
  // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap: We remove 0.2 pixels from the
  // maxWidth so that viewports with this actual maxWidth won't be affected by
  // this rule. Kudos to https://getbootstrap.com/docs/4.3/layout/overview/
  return `@media (min-width:${minWidth}${unit}) and (max-width:${maxWidth - 0.02}${unit})`;
};

const getNextSize = function (size: Size): Size | undefined {
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

  return undefined;
};

const createBreakpoints = function (steps = defaultSteps, unit = 'px'): Breakpoints {
  const up = function (size: Size | number): string {
    if (typeof size === 'number') {
      return createMinWidthRule(size, unit);
    }

    const minWidth = steps[size];

    return createMinWidthRule(minWidth, unit);
  };

  const down = function (size: Size | number): string {
    if (typeof size === 'number') {
      return createMaxWidthRule(size, unit);
    }

    const nextSize = getNextSize(size);

    if (!nextSize) {
      // Calling down('xl') means we want to target all devices including xl
      // and all above which is not possible to achieve with a maxWidth query
      // so we're using up('xs') here.
      return up('xs');
    }

    const maxWidth = steps[nextSize];

    return createMaxWidthRule(maxWidth, unit);
  };

  const between = (lowerSize: Size | number, upperSize: Size | number): string => {
    if (typeof lowerSize === 'number' && typeof upperSize === 'number') {
      return createMinMaxWidthRule(lowerSize, upperSize, unit);
    }
    if (typeof lowerSize === 'number' || typeof upperSize === 'number') {
      throw new Error('Lower size and upper size must either both be sizes or numbers.');
    }

    const nextUpperSize = getNextSize(upperSize);

    if (!nextUpperSize) {
      return up(lowerSize);
    }

    const minWidth = steps[lowerSize];
    const maxWidth = steps[nextUpperSize];

    return createMinMaxWidthRule(minWidth, maxWidth, unit);
  };

  const only = function (size: Size): string {
    return between(size, size);
  };

  return {
    steps,
    up,
    down,
    between,
    only
  };
};

export default createBreakpoints;
