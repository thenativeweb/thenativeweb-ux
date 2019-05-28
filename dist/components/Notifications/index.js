"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _exenv = _interopRequireDefault(require("exenv"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _services = _interopRequireDefault(require("../../services"));

var _Transition = _interopRequireDefault(require("../Transition"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    Notifications: {
      position: 'fixed',
      top: "".concat(theme.space(3), "px"),
      right: "".concat(theme.space(3), "px"),
      width: '300px',
      zIndex: theme.zIndices.overlay,
      pointerEvents: 'none'
    }
  };
};

var Notifications =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Notifications, _React$PureComponent);

  function Notifications() {
    var _this;

    _classCallCheck(this, Notifications);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notifications).call(this));
    _this.handleServiceChanged = _this.handleServiceChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notifications, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _services["default"].notifications.on('changed', this.handleServiceChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _services["default"].notifications.removeListener('changed', this.handleServiceChanged);
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

      if (!_exenv["default"].canUseDOM) {
        return null;
      }

      return _reactDom["default"].createPortal(_react["default"].createElement("div", {
        className: classes.Notifications
      }, _react["default"].createElement(_Transition["default"].Group, {
        type: "FadeInLeft",
        component: "span"
      }, _services["default"].notifications.state.items.map(function (notification) {
        return _react["default"].createElement(_Notification["default"], {
          key: notification.id,
          type: notification.type,
          text: notification.text
        });
      }))), _services["default"].getPortalRootNode());
    }
  }]);

  return Notifications;
}(_react["default"].PureComponent);

var _default = (0, _styles.withStyles)(styles)(Notifications);

exports["default"] = _default;