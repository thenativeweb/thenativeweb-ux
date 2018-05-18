'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _exenv = require('exenv');

var _exenv2 = _interopRequireDefault(_exenv);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _services = require('../../services');

var _services2 = _interopRequireDefault(_services);

var _Transition = require('../Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(Notifications, _React$PureComponent);

  function Notifications() {
    (0, _classCallCheck3.default)(this, Notifications);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notifications.__proto__ || (0, _getPrototypeOf2.default)(Notifications)).call(this));

    _this.handleServiceChanged = _this.handleServiceChanged.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Notifications, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _services2.default.notifications.on('changed', this.handleServiceChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _services2.default.notifications.removeListener('changed', this.handleServiceChanged);
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


      if (!_exenv2.default.canUseDOM) {
        return null;
      }

      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: classes.Notifications },
        _react2.default.createElement(
          _Transition2.default.Group,
          { type: 'FadeInLeft', component: 'span' },
          _services2.default.notifications.state.items.map(function (notification) {
            return _react2.default.createElement(_Notification2.default, { key: notification.id, type: notification.type, text: notification.text });
          })
        )
      ), _services2.default.getPortalRootNode());
    }
  }]);
  return Notifications;
}(_react2.default.PureComponent);

exports.default = (0, _reactJss2.default)(styles)(Notifications);