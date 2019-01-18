"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _exenv = _interopRequireDefault(require("exenv"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _services = _interopRequireDefault(require("../../services"));

var _Transition = _interopRequireDefault(require("../Transition"));

var _styles = require("../../styles");

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

var Notifications =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Notifications, _React$PureComponent);

  function Notifications() {
    var _this;

    (0, _classCallCheck2.default)(this, Notifications);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Notifications).call(this));
    _this.handleServiceChanged = _this.handleServiceChanged.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Notifications, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _services.default.notifications.on('changed', this.handleServiceChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _services.default.notifications.removeListener('changed', this.handleServiceChanged);
    }
  }, {
    key: "handleServiceChanged",
    value: function handleServiceChanged() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      if (!_exenv.default.canUseDOM) {
        return null;
      }

      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: classes.Notifications
      }, _react.default.createElement(_Transition.default.Group, {
        type: "FadeInLeft",
        component: "span"
      }, _services.default.notifications.state.items.map(function (notification) {
        return _react.default.createElement(_Notification.default, {
          key: notification.id,
          type: notification.type,
          text: notification.text
        });
      }))), _services.default.getPortalRootNode());
    }
  }]);
  return Notifications;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(Notifications);

exports.default = _default;