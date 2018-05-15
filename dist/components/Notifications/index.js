import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import FadeInLeft from '../transitions/FadeInLeft';
import injectSheet from 'react-jss';
import Notification from './Notification';
import React from 'react';
import ReactDOM from 'react-dom';
import services from '../../services';
import { TransitionGroup } from 'react-transition-group';

var styles = function styles(theme) {
  return {
    Notifications: {
      position: 'fixed',
      top: theme.grid.stepSize * 2,
      right: theme.grid.stepSize * 2,
      width: '300px',
      'z-index': theme.zIndex.overlay,
      'pointer-events': 'none'
    }
  };
};

var Notifications = function (_React$PureComponent) {
  _inherits(Notifications, _React$PureComponent);

  function Notifications() {
    _classCallCheck(this, Notifications);

    var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || _Object$getPrototypeOf(Notifications)).call(this));

    _this.handleServiceChanged = _this.handleServiceChanged.bind(_this);
    return _this;
  }

  _createClass(Notifications, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      services.notifications.on('changed', this.handleServiceChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      services.notifications.removeListener('changed', this.handleServiceChanged);
    }
  }, {
    key: 'handleServiceChanged',
    value: function handleServiceChanged() {
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return ReactDOM.createPortal(React.createElement(
        'div',
        { className: classes.Notifications },
        React.createElement(
          TransitionGroup,
          { component: 'span' },
          services.notifications.state.items.map(function (notification) {
            return React.createElement(
              FadeInLeft,
              { key: notification.id },
              React.createElement(Notification, { type: notification.type, text: notification.text })
            );
          })
        )
      ), services.createPortalRootNode());
    }
  }]);

  return Notifications;
}(React.PureComponent);

export default injectSheet(styles)(Notifications);