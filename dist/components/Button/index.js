import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import Label from '../Label';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.js';

var Hint = function Hint(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return React.createElement(
    'span',
    { className: classes.Hint },
    children
  );
};

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || _Object$getPrototypeOf(Button)).call(this, props));

    _this.handlePointerDown = _this.handlePointerDown.bind(_this);
    _this.handlePointerUp = _this.handlePointerUp.bind(_this);

    _this.state = {
      isPressed: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'handlePointerDown',
    value: function handlePointerDown() {
      this.setState({
        isPressed: true
      });
    }
  }, {
    key: 'handlePointerUp',
    value: function handlePointerUp() {
      this.setState({
        isPressed: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          autoFocus = _props.autoFocus,
          adjust = _props.adjust,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          id = _props.id,
          icon = _props.icon,
          iconSize = _props.iconSize,
          onClick = _props.onClick,
          isPrimary = _props.isPrimary,
          isSubtle = _props.isSubtle,
          size = _props.size,
          type = _props.type;
      var isPressed = this.state.isPressed;


      var buttonClassNames = classNames(classes.Button, (_classNames = {}, _defineProperty(_classNames, classes.AdjustFlex, adjust === 'flex'), _defineProperty(_classNames, classes.AdjustAuto, adjust === 'auto'), _defineProperty(_classNames, classes.SizeDefault, size === 'default'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _defineProperty(_classNames, classes.TypeSubtle, isSubtle === true), _defineProperty(_classNames, classes.TypePrimary, isPrimary === true), _defineProperty(_classNames, classes.TypeIcon, icon), _defineProperty(_classNames, classes.TypeIconOnly, icon && !children), _defineProperty(_classNames, classes.IsPressed, isPressed === true), _classNames), className);

      var buttonType = type || (isPrimary ? 'submit' : 'button');

      return React.createElement(
        'button',
        {
          autoFocus: autoFocus,
          id: id,
          type: buttonType,
          className: buttonClassNames,
          onClick: onClick,
          onMouseDown: this.handlePointerDown,
          onMouseUp: this.handlePointerUp
        },
        icon ? React.createElement(Icon, { className: classes.Icon, name: icon, size: iconSize }) : null,
        children ? React.createElement(
          Label,
          { className: classes.Label },
          children
        ) : null
      );
    }
  }]);

  return Button;
}(React.PureComponent);

Button.propTypes = {
  adjust: PropTypes.oneOf(['flex', 'auto']),
  autoFocus: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['default', 'xs', 's', 'm', 'l']),
  isPrimary: PropTypes.bool,
  isSubtle: PropTypes.bool,
  size: PropTypes.oneOf(['default', 's', 'm', 'l']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'default',
  type: undefined,
  onClick: function onClick() {}
};

Button.Hint = injectSheet({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

export default injectSheet(styles)(Button);