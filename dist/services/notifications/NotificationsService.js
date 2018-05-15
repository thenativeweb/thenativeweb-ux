import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import EventEmitter from 'events';
import uuid from 'uuidv4';

var NotificationsService = function (_EventEmitter) {
  _inherits(NotificationsService, _EventEmitter);

  function NotificationsService() {
    _classCallCheck(this, NotificationsService);

    var _this = _possibleConstructorReturn(this, (NotificationsService.__proto__ || _Object$getPrototypeOf(NotificationsService)).call(this));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(NotificationsService, [{
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

      notification.id = uuid();

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
}(EventEmitter);

export default NotificationsService;