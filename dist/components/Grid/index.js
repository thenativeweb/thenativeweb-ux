"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Item = _interopRequireDefault(require("./Item"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    Grid: {
      width: '100%',
      display: 'grid'
    },
    Columns2: {
      'grid-template-columns': 'repeat(2, [col] 1fr)'
    },
    Columns3: {
      'grid-template-columns': 'repeat(3, [col] 1fr)'
    },
    Columns12: {
      'grid-template-columns': 'repeat(12, [col] 1fr)'
    },
    Columns15: {
      'grid-template-columns': 'repeat(15, [col] 1fr)'
    },
    ColumnGap1: {
      'grid-column-gap': theme.space(1)
    },
    ColumnGap2: {
      'grid-column-gap': theme.space(2)
    },
    ColumnGap3: {
      'grid-column-gap': theme.space(3)
    },
    ColumnGap4: {
      'grid-column-gap': theme.space(4)
    },
    ColumnGap5: {
      'grid-column-gap': theme.space(5)
    },
    ColumnGap6: {
      'grid-column-gap': theme.space(8)
    }
  }, theme.breakpoints.down('xs'), {
    Grid: {
      display: 'block'
    }
  });
};

var Grid = _react["default"].memo(function () {
  var _classNames;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? 'div' : _ref2$component,
      classes = _ref2.classes,
      columns = _ref2.columns,
      columnGap = _ref2.columnGap,
      children = _ref2.children,
      id = _ref2.id;

  var componentClasses = (0, _styles.classNames)(classes.Grid, (_classNames = {}, _defineProperty(_classNames, classes["Columns".concat(columns)], columns), _defineProperty(_classNames, classes["ColumnGap".concat(columnGap)], columnGap), _classNames));
  return _react["default"].createElement(component, {
    className: componentClasses,
    id: id
  }, children);
});

Grid.defaultProps = {
  columns: '12',
  columnGap: 2
};
Grid.propTypes = {
  columnGap: _propTypes["default"].number,
  columns: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Grid.Item = _Item["default"];

var _default = (0, _styles.withStyles)(styles)(Grid);

exports["default"] = _default;