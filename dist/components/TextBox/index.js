'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = {
  ENTER: 13
};

var styles = function styles(theme) {
  return {
    TextBox: {
      padding: '9px 12px',
      'font-size': theme.font.size.default,
      'font-family': theme.font.family.default,
      width: '100%',
      'box-sizing': 'border-box',
      border: '1px solid',
      'border-color': theme.color.content.border,

      '&:focus': {
        outline: 'none',
        'border-color': theme.color.interaction.focus
      },

      '&::placeholder': {
        color: theme.color.brand.darkGrey,
        'font-family': theme.font.family.default,
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

var TextBox = function (_React$Component) {
  (0, _inherits3.default)(TextBox, _React$Component);

  function TextBox(props) {
    (0, _classCallCheck3.default)(this, TextBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextBox.__proto__ || (0, _getPrototypeOf2.default)(TextBox)).call(this, props));

    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_this);
    _this.handleRefChanged = _this.handleRefChanged.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TextBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          focusDelay = _props.focusDelay;


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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeout);
    }
  }, {
    key: 'handleFocusTimeout',
    value: function handleFocusTimeout() {
      if (this.element) {
        this.element.focus();
      }
    }
  }, {
    key: 'handleRefChanged',
    value: function handleRefChanged(ref) {
      this.element = ref;
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      switch (event.keyCode) {
        case KEY.ENTER:
          this.props.onEnter(event);
          break;
        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          className = _props2.className,
          classes = _props2.classes,
          disabled = _props2.disabled,
          id = _props2.id,
          name = _props2.name,
          value = _props2.value,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          placeholder = _props2.placeholder,
          required = _props2.required,
          type = _props2.type;


      var componentClasses = (0, _classnames2.default)(classes.TextBox, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.TypePort, type === 'port'), (0, _defineProperty3.default)(_classNames, classes.TypeTime, type === 'time'), (0, _defineProperty3.default)(_classNames, classes.IsDisabled, disabled === true), (0, _defineProperty3.default)(_classNames, classes.IsRequired, required === true), _classNames), className);

      var inputType = void 0;

      switch (type) {
        case 'port':
          inputType = 'number';
          break;
        default:
          inputType = type;
      }

      return _react2.default.createElement('input', {
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
        type: inputType,
        disable: disabled ? 'disabled' : null
      });
    }
  }]);
  return TextBox;
}(_react2.default.Component);

TextBox.propTypes = {
  autoFocus: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['default', 'date', 'port', 'time']),
  value: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onFocus: _propTypes2.default.func
};

TextBox.defaultProps = {
  autoFocus: false,
  disabled: false,
  required: false,
  focusDelay: 0,
  type: 'default',
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onEnter: function onEnter() {},
  onFocus: function onFocus() {}
};

exports.default = (0, _reactJss2.default)(styles)(TextBox);