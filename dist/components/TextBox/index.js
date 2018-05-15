import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

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
  _inherits(TextBox, _React$Component);

  function TextBox(props) {
    _classCallCheck(this, TextBox);

    var _this = _possibleConstructorReturn(this, (TextBox.__proto__ || _Object$getPrototypeOf(TextBox)).call(this, props));

    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_this);
    _this.handleRefChanged = _this.handleRefChanged.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(TextBox, [{
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


      var componentClasses = classNames(classes.TextBox, (_classNames = {}, _defineProperty(_classNames, classes.TypePort, type === 'port'), _defineProperty(_classNames, classes.TypeTime, type === 'time'), _defineProperty(_classNames, classes.IsDisabled, disabled === true), _defineProperty(_classNames, classes.IsRequired, required === true), _classNames), className);

      var inputType = void 0;

      switch (type) {
        case 'port':
          inputType = 'number';
          break;
        default:
          inputType = type;
      }

      return React.createElement('input', {
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
}(React.Component);

TextBox.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'date', 'port', 'time']),
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func
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

export default injectSheet(styles)(TextBox);