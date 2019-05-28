"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    TextArea: {
      padding: '9px 12px',
      fontSize: theme.font.size.md,
      fontFamily: theme.font.family["default"],
      width: '100%',
      'box-sizing': 'border-box',
      border: "1px solid",
      borderColor: theme.color.content.border,
      '&:focus': {
        outline: 'none',
        borderColor: theme.color.interaction.focus
      },
      '&::placeholder': {
        color: theme.color.brand.darkGrey,
        fontFamily: theme.font.family["default"],
        fontSize: 'inherit',
        fontWeight: 400,
        opacity: 0.5
      }
    },
    IsDisabled: {
      color: theme.color.brand.darkGrey,
      background: theme.color.brand.lightGrey
    },
    SizeSm: {
      height: "".concat(theme.space(10), "px")
    },
    SizeMd: {
      height: "".concat(theme.space(18), "px")
    }
  };
};

var TextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextArea).call(this, props));
    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_assertThisInitialized(_this));
    _this.handleRefChanged = _this.handleRefChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          focusDelay = _this$props.focusDelay;

      if (!autoFocus) {
        return;
      }

      if (this.element) {
        this.focusTimeout = setTimeout(this.handleFocusTimeout, focusDelay);
      } else {
        clearTimeout(this.focusTimeout);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeout);
    }
  }, {
    key: "handleFocusTimeout",
    value: function handleFocusTimeout() {
      if (this.element) {
        this.element.focus();
      }
    }
  }, {
    key: "handleRefChanged",
    value: function handleRefChanged(ref) {
      this.element = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          id = _this$props2.id,
          name = _this$props2.name,
          value = _this$props2.value,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onFocus = _this$props2.onFocus,
          placeholder = _this$props2.placeholder,
          required = _this$props2.required,
          style = _this$props2.style,
          size = _this$props2.size;
      var componentClasses = (0, _styles.classNames)(classes.TextArea, (_classNames = {}, _defineProperty(_classNames, classes.IsDisabled, disabled === true), _defineProperty(_classNames, classes.IsRequired, required === true), _defineProperty(_classNames, classes.SizeSm, size === 'sm'), _defineProperty(_classNames, classes.SizeMd, size === 'md'), _classNames), className);
      return _react["default"].createElement("textarea", {
        id: id,
        ref: this.handleRefChanged,
        className: componentClasses,
        disable: disabled ? 'disabled' : null,
        name: name,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        required: required,
        style: style
      });
    }
  }]);

  return TextArea;
}(_react["default"].Component);

TextArea.propTypes = {
  autoFocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['sm', 'md']),
  value: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
};
TextArea.defaultProps = {
  autoFocus: false,
  disabled: false,
  focusDelay: 0,
  required: false,
  size: 'sm',
  onBlur: function onBlur() {// Intentionally left blank
  },
  onChange: function onChange() {// Intentionally left blank
  },
  onFocus: function onFocus() {// Intentionally left blank
  }
};

var _default = (0, _styles.withStyles)(styles)(TextArea);

exports["default"] = _default;