"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("events"));

var _uuidv = _interopRequireDefault(require("uuidv4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotificationsService =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(NotificationsService, _EventEmitter);

  function NotificationsService() {
    var _this;

    _classCallCheck(this, NotificationsService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotificationsService).call(this));
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(NotificationsService, [{
    key: "show",
    value: function show() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          type = _ref.type,
          text = _ref.text,
          duration = _ref.duration;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        duration: 3000
      };

      if (!type) {
        throw new Error('Type is missing.');
      }

      if (!text) {
        throw new Error('Text is missing.');
      }

      if (!duration) {
        throw new Error('Duration is missing.');
      }

      var notification = {
        id: (0, _uuidv["default"])(),
        type: type,
        text: text,
        duration: duration
      };
      this.state.items.unshift(notification);
      this.emit('changed');
      setTimeout(function () {
        var notificationIndex = _this2.state.items.indexOf(notification);

        _this2.state.items.splice(notificationIndex, 1);

        _this2.emit('changed');
      }, options.duration);
    }
  }]);

  return NotificationsService;
}(_events["default"]);

var _default = new NotificationsService();

exports["default"] = _default;