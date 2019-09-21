const sizeKeys = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

//               |0px      |600px    |960px    |1280px   |1920px
// Step          |xs       |sm       |md       |lg       |xl
//               |---------|---------|---------|---------|---------
// Device        |   xs    |   sm    |   md    |   lg    |    xl

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

const createBreakpoints = function ({ steps = defaultSteps, unit = 'px' } = {}) {
  const up = size => {
    const typeOfSize = typeof size;

    if (typeOfSize === 'number') {
      return createMinWidthRule({ minWidth: size, unit });
    }

    const minWidth = steps[size];

    return createMinWidthRule({ minWidth, unit });
  };

  const down = size => {
    if (size === 'xl') {
      // Calling down('xs') means we want to target all devices including xl
      // and all above which is not possible to achieve with a maxWidth query
      // so we're using up('xs') here.
      return up('xs');
    }

    const typeOfSize = typeof size;

    if (typeOfSize === 'number') {
      return createMaxWidthRule({ maxWidth: size, unit });
    }

    const indexOfKeyNextInSize = sizeKeys.indexOf(size) + 1;
    const maxWidth = steps[sizeKeys[indexOfKeyNextInSize]];

    return createMaxWidthRule({ maxWidth, unit });
  };

  const between = (lowerSize, upperSize) => {
    if (upperSize === 'xl') {
      return up(lowerSize);
    }

    if (typeof lowerSize === 'number' && typeof upperSize === 'number') {
      return createMinMaxWidthRule({ minWidth: lowerSize, maxWidth: upperSize, unit });
    }

    const indexOfKeyNextInSize = sizeKeys.indexOf(upperSize) + 1;
    const minWidth = steps[lowerSize];
    const maxWidth = steps[sizeKeys[indexOfKeyNextInSize]];

    return createMinMaxWidthRule({ minWidth, maxWidth, unit });
  };

  const only = size => between(size, size);

  return {
    steps,
    up,
    down,
    between,
    only
  };
};

export default createBreakpoints;
