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

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _uuidv = require('uuidv4');

var _uuidv2 = _interopRequireDefault(_uuidv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationsService = function (_EventEmitter) {
  (0, _inherits3.default)(NotificationsService, _EventEmitter);

  function NotificationsService() {
    (0, _classCallCheck3.default)(this, NotificationsService);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NotificationsService.__proto__ || (0, _getPrototypeOf2.default)(NotificationsService)).call(this));

    _this.state = {
      items: []
    };
    return _this;
  }

  (0, _createClass3.default)(NotificationsService, [{
    key: 'show',
    value: function show(notification) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { duration: 3000 };

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

      notification.id = (0, _uuidv2.default)();

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
}(_events2.default);

exports.default = new NotificationsService();