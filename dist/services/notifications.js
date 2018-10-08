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

var _events = _interopRequireDefault(require("events"));

var _uuidv = _interopRequireDefault(require("uuidv4"));

var NotificationsService =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2.default)(NotificationsService, _EventEmitter);

  function NotificationsService() {
    var _this;

    (0, _classCallCheck2.default)(this, NotificationsService);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NotificationsService).call(this));
    _this.state = {
      items: []
    };
    return _this;
  }

  (0, _createClass2.default)(NotificationsService, [{
    key: "show",
    value: function show(notification) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        duration: 3000
      };

      if (!notification) {
        throw new Error('Notfication is missing.');
      }

      if (!notification.type) {
        throw new Error('Type is missing.');
      }

      if (!notification.text) {
        throw new Error('Text is missing.');
      }

      if (!options.duration) {
        throw new Error('Duration is missing.');
      }

      notification.id = (0, _uuidv.default)();
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
}(_events.default);

var _default = new NotificationsService();

exports.default = _default;