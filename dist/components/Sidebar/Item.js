"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    Item: {
      position: 'relative',
      flex: '0 0 auto',
      overflow: 'visible',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      '&$IsTopLevel:hover, &$IsClickable:hover, &$IsActive': {
        cursor: 'pointer',
        background: theme.color.brand.highlight,
        color: theme.color.brand.white,
        '& $Items': {
          opacity: 1,
          pointerEvents: 'all',
          transform: 'translate(0, 0)'
        }
      },
      '& $Label': {},
      '& $Icon': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "".concat(theme.space(3), "px"),
        paddingBottom: "".concat(theme.space(3), "px"),
        color: theme.color.brand.white,
        '& img': {
          width: '48px',
          height: '48px',
          borderRadius: '50%'
        }
      }
    },
    IsActive: {},
    IsClickable: {},
    IsTopLevel: {},
    IsNested: {
      flex: '1 1 100%',
      cursor: 'default',
      whiteSpace: 'nowrap',
      '& $Label': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: "".concat(theme.space(2), "px ").concat(theme.space(3), "px")
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
      left: theme.components.Sidebar.width,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: "".concat(theme.space(50), "px"),
      background: theme.color.brand.dark,
      zIndex: theme.zIndices.overlay,
      color: '#848484',
      boxShadow: theme.shadow.overlay,
      opacity: 0,
      pointerEvents: 'none',
      transform: 'translate(-20px, 0)',
      transition: 'opacity 200ms, transform 300ms cubic-bezier(0.19, 1, 0.22, 1)',
      willChange: 'opacity, transform'
    }
  };
};

var Item = _react["default"].forwardRef(function (_ref, ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      iconName = _ref.iconName,
      iconUrl = _ref.iconUrl,
      id = _ref.id,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      _ref$isNested = _ref.isNested,
      isNested = _ref$isNested === void 0 ? false : _ref$isNested,
      children = _ref.children,
      onClick = _ref.onClick;
  var componentClasses = (0, _styles.classNames)(classes.Item, (_classNames = {}, _defineProperty(_classNames, classes.IsActive, isActive), _defineProperty(_classNames, classes.IsNested, isNested), _defineProperty(_classNames, classes.IsTopLevel, !isNested), _defineProperty(_classNames, classes.IsClickable, onClick !== undefined), _classNames), className);

  if (isNested) {
    return _react["default"].createElement("div", {
      id: id,
      className: componentClasses,
      onClick: onClick
    }, _react["default"].createElement("div", {
      className: classes.Label
    }, children));
  }

  return _react["default"].createElement("div", {
    ref: ref,
    id: id,
    className: componentClasses
  }, _react["default"].createElement("div", {
    className: classes.Icon,
    onClick: onClick
  }, iconUrl ? _react["default"].createElement("img", {
    src: iconUrl
  }) : _react["default"].createElement(_Icon["default"], {
    name: iconName,
    size: "lg",
    color: "white"
  })), _react["default"].createElement("div", {
    className: classes.Items
  }, _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      isNested: true
    });
  })));
});

var _default = (0, _styles.withStyles)(styles)(Item);

exports["default"] = _default;