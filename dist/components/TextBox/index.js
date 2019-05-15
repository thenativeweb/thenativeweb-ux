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

var KEY = {
  ENTER: 13
};

var styles = function styles(theme) {
  return {
    TextBox: {
      padding: '9px 12px',
      'font-size': theme.font.size["default"],
      'font-family': theme.font.family["default"],
      width: '100%',
      'box-sizing': 'border-box',
      border: "1px solid",
      'border-color': theme.color.content.border,
      '&:focus': {
        outline: 'none',
        'border-color': theme.color.interaction.focus
      },
      '&::placeholder': {
        color: theme.color.brand.darkGrey,
        'font-family': theme.font.family["default"],
        'font-size': 'inherit',
        'font-weight': 400,
        opacity: 0.5
      }
    },
    IsDisabled: {
      color: theme.color.brand.darkGrey,
      background: theme.color.brand.lightGrey
    },
    TypePort: {
      width: '5em'
    },
    TypeTime: {
      width: '7em'
    }
  };
};

var TextBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextBox, _React$Component);

  function TextBox(props) {
    var _this;

    _classCallCheck(this, TextBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextBox).call(this, props));
    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_assertThisInitialized(_this));
    _this.handleRefChanged = _this.handleRefChanged.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextBox, [{
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
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var onEnter = this.props.onEnter;

      switch (event.keyCode) {
        case KEY.ENTER:
          onEnter(event);
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
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
          type = _this$props2.type;
      var componentClasses = (0, _styles.classNames)(classes.TextBox, (_classNames = {}, _defineProperty(_classNames, classes.TypePort, type === 'port'), _defineProperty(_classNames, classes.TypeTime, type === 'time'), _defineProperty(_classNames, classes.IsDisabled, disabled === true), _defineProperty(_classNames, classes.IsRequired, required === true), _classNames), className);
      var inputType;

      switch (type) {
        case 'port':
          inputType = 'number';
          break;

        default:
          inputType = type;
      }

      return _react["default"].createElement("input", {
        id: id,
        ref: this.handleRefChanged,
        className: componentClasses,
        name: name,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onKeyDown: this.handleKeyDown,
        placeholder: placeholder,
        required: required,
        style: style,
        type: inputType,
        disable: disabled ? 'disabled' : null
      });
    }
  }]);

  return TextBox;
}(_react["default"].Component);

TextBox.propTypes = {
  autoFocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['default', 'date', 'port', 'time']),
  value: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onEnter: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
};
TextBox.defaultProps = {
  autoFocus: false,
  disabled: false,
  required: false,
  focusDelay: 0,
  type: 'default',
  onBlur: function onBlur() {// Intentionally left blank
  },
  onChange: function onChange() {// Intentionally left blank
  },
  onEnter: function onEnter() {// Intentionally left blank
  },
  onFocus: function onFocus() {// Intentionally left blank
  }
};

var _default = (0, _styles.withStyles)(styles)(TextBox);

exports["default"] = _default;