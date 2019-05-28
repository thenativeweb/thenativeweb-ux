"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _Divider = _interopRequireDefault(require("./Divider"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Item = _interopRequireDefault(require("./Item"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  ControlGroup: {
    display: 'flex',
    marginBottom: '18px'
  }
};

var ControlGroup = function ControlGroup(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      children = _ref.children,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === void 0 ? true : _ref$isVisible;
  var componentClasses = (0, _classnames["default"])(classes.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: componentClasses
  }, children);
};

ControlGroup.Divider = _Divider["default"];
ControlGroup.Item = _Item["default"];
ControlGroup.propTypes = {
  isVisible: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(styles)(ControlGroup);

exports["default"] = _default;