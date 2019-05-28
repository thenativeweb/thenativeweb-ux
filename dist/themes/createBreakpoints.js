"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sizeKeys = ['xs', 'sm', 'md', 'lg', 'xl']; //               |0px      |600px    |960px    |1280px   |1920px
// Step          |xs       |sm       |md       |lg       |xl
//               |---------|---------|---------|---------|---------
// Device        |   xs    |   sm    |   md    |   lg    |    xl

var defaultSteps = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

var createMinWidthRule = function createMinWidthRule() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      minWidth = _ref.minWidth,
      unit = _ref.unit;

  if (minWidth === undefined) {
    throw new Error('Min width is missing.');
  }

  if (!unit) {
    throw new Error('Unit is missing.');
  }

  return "@media (min-width:".concat(minWidth).concat(unit, ")");
};

var createMaxWidthRule = function createMaxWidthRule() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      maxWidth = _ref2.maxWidth,
      unit = _ref2.unit;

  if (maxWidth === undefined) {
    throw new Error('Max width is missing.');
  }

  if (!unit) {
    throw new Error('Unit is missing.');
  } // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap.
  // We remove 0.2 pixels from the maxWidth so that viewports with this
  // actual maxWidth won't be affect by this rule.
  // Kudos to https://getbootstrap.com/docs/4.3/layout/overview/


  return "@media (max-width:".concat(maxWidth - 0.02).concat(unit, ")");
};

var createMinMaxWidthRule = function createMinMaxWidthRule() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      minWidth = _ref3.minWidth,
      maxWidth = _ref3.maxWidth,
      unit = _ref3.unit;

  if (minWidth === undefined) {
    throw new Error('Min width is missing.');
  }

  if (maxWidth === undefined) {
    throw new Error('Min width is missing.');
  }

  if (!unit) {
    throw new Error('Unit is missing.');
  } // In order to create media queries with proper ranges, which is not possible
  // out of the box with min- and max-width queries, we use a common hack
  // popularized by frameworks like Bootstrap.
  // We remove 0.2 pixels from the maxWidth so that viewports with this
  // actual maxWidth won't be affect by this rule.
  // Kudos to https://getbootstrap.com/docs/4.3/layout/overview/


  return "@media (min-width:".concat(minWidth).concat(unit, ") and (max-width:").concat(maxWidth - 0.02).concat(unit, ")");
};

var createBreakpoints = function createBreakpoints() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$steps = _ref4.steps,
      steps = _ref4$steps === void 0 ? defaultSteps : _ref4$steps,
      _ref4$unit = _ref4.unit,
      unit = _ref4$unit === void 0 ? 'px' : _ref4$unit;

  var up = function up(size) {
    var typeOfSize = _typeof(size);

    if (typeOfSize === 'number') {
      return createMinWidthRule({
        minWidth: size,
        unit: unit
      });
    }

    var minWidth = steps[size];
    return createMinWidthRule({
      minWidth: minWidth,
      unit: unit
    });
  };

  var down = function down(size) {
    if (size === 'xl') {
      // Calling down('xs') means we want to target all devices including xl
      // and all above which is not possible to achieve with a maxWidth query
      // so we're using up('xs') here.
      return up('xs');
    }

    var typeOfSize = _typeof(size);

    if (typeOfSize === 'number') {
      return createMaxWidthRule({
        maxWidth: size,
        unit: unit
      });
    }

    var indexOfKeyNextInSize = sizeKeys.indexOf(size) + 1;
    var maxWidth = steps[sizeKeys[indexOfKeyNextInSize]];
    return createMaxWidthRule({
      maxWidth: maxWidth,
      unit: unit
    });
  };

  var between = function between(lowerSize, upperSize) {
    if (upperSize === 'xl') {
      return up(lowerSize);
    }

    if (typeof lowerSize === 'number' && typeof upperSize === 'number') {
      return createMinMaxWidthRule({
        minWidth: lowerSize,
        maxWidth: upperSize,
        unit: unit
      });
    }

    var indexOfKeyNextInSize = sizeKeys.indexOf(upperSize) + 1;
    var minWidth = steps[lowerSize];
    var maxWidth = steps[sizeKeys[indexOfKeyNextInSize]];
    return createMinMaxWidthRule({
      minWidth: minWidth,
      maxWidth: maxWidth,
      unit: unit
    });
  };

  var only = function only(size) {
    return between(size, size);
  };

  return {
    steps: steps,
    up: up,
    down: down,
    between: between,
    only: only
  };
};

var _default = createBreakpoints;
exports["default"] = _default;