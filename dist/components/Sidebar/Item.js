'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Item: {
      position: 'relative',
      flex: '0 0 auto',
      overflow: 'visible',
      'border-bottom': '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',

      '&$IsTopLevel:hover, &$IsClickable:hover, &$IsActive': {
        cursor: 'pointer',
        background: theme.color.brand.highlight,
        color: theme.color.brand.white,

        '& $Items': {
          opacity: 1,
          'pointer-events': 'all',
          transform: 'translate(0, 0)'
        }
      },

      '& $Label': {},

      '& $Icon': {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'padding-top': theme.grid.stepSize * 2.5,
        'padding-bottom': theme.grid.stepSize * 2.5,
        color: theme.color.brand.white,

        '& img': {
          width: '48px',
          height: '48px',
          'border-radius': '50%'
        }
      }
    },

    IsActive: {},
    IsClickable: {},
    IsTopLevel: {},

    IsNested: {
      flex: '1 1 100%',
      cursor: 'default',
      'white-space': 'nowrap',

      '& $Label': {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        margin: theme.grid.stepSize * 1.6 + 'px ' + theme.grid.stepSize * 2 + 'px'
      },

      '&$IsClickable': {
        color: theme.color.brand.white
      }
    },

    Icon: {},
    Label: {},

    Items: {
      position: 'absolute',
      top: 0,
      left: theme.components.sidebar.width,
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'max-width': theme.grid.stepSize * 40,
      background: theme.color.brand.dark,
      'z-index': theme.zIndex.overlay,
      color: '#848484',
      'box-shadow': theme.shadow.overlay,
      opacity: 0,
      'pointer-events': 'none',
      transform: 'translate(-20px, 0)',
      transition: 'opacity 200ms, transform 300ms cubic-bezier(0.19, 1, 0.22, 1)',
      'will-change': 'opacity, transform'
    }
  };
};

var Item = function Item(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      iconName = _ref.iconName,
      iconUrl = _ref.iconUrl,
      id = _ref.id,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === undefined ? false : _ref$isActive,
      _ref$isNested = _ref.isNested,
      isNested = _ref$isNested === undefined ? false : _ref$isNested,
      children = _ref.children,
      onClick = _ref.onClick;

  var componentClasses = (0, _classnames2.default)(classes.Item, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.IsActive, isActive), (0, _defineProperty3.default)(_classNames, classes.IsNested, isNested), (0, _defineProperty3.default)(_classNames, classes.IsTopLevel, !isNested), (0, _defineProperty3.default)(_classNames, classes.IsClickable, onClick !== undefined), _classNames), className);

  if (isNested) {
    return _react2.default.createElement(
      'div',
      { id: id, className: componentClasses, onClick: onClick },
      _react2.default.createElement(
        'div',
        { className: classes.Label },
        children
      )
    );
  }

  return _react2.default.createElement(
    'div',
    { id: id, className: componentClasses },
    _react2.default.createElement(
      'div',
      { className: classes.Icon, onClick: onClick },
      iconUrl ? _react2.default.createElement('img', { src: iconUrl }) : _react2.default.createElement(_Icon2.default, { name: iconName, size: 'l', color: 'white' })
    ),
    _react2.default.createElement(
      'div',
      { className: classes.Items },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { isNested: true });
      })
    )
  );
};

exports.default = (0, _reactJss2.default)(styles)(Item);