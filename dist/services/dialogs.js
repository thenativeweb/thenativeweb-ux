'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogsService = function (_EventEmitter) {
  (0, _inherits3.default)(DialogsService, _EventEmitter);

  function DialogsService() {
    (0, _classCallCheck3.default)(this, DialogsService);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogsService.__proto__ || (0, _getPrototypeOf2.default)(DialogsService)).call(this));

    _this.state = {
      confirm: {
        isVisible: false,
        title: '',
        actions: {
          cancel: '',
          confirm: ''
        },
        onCancel: function onCancel() {},
        onConfirm: function onConfirm() {}
      }
    };
    return _this;
  }

  (0, _createClass3.default)(DialogsService, [{
    key: 'hideConfirm',
    value: function hideConfirm() {
      this.state = (0, _merge2.default)({}, this.state, {
        confirm: {
          isVisible: false,
          onCancel: function onCancel() {},
          onConfirm: function onConfirm() {}
        }
      });
      this.emit('changed');
    }
  }, {
    key: 'confirm',
    value: function confirm(options) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        if (!options) {
          throw new Error('Options are missing.');
        }
        if (!options.title) {
          throw new Error('Title is missing.');
        }
        if (!options.actions) {
          throw new Error('Actions are missing.');
        }
        if (!options.actions.cancel) {
          throw new Error('Cancel is missing.');
        }
        if (!options.actions.confirm) {
          throw new Error('Confirm is missing.');
        }
        var title = options.title,
            actions = options.actions;


        _this2.state = {
          confirm: {
            isVisible: true,
            title: title,
            actions: actions,
            onConfirm: function onConfirm() {
              _this2.hideConfirm();
              resolve('confirm');
            },
            onCancel: function onCancel() {
              _this2.hideConfirm();
              resolve('cancel');
            }
          }
        };

        // Delay the rendering for keyboard events not to conflict.
        setTimeout(function () {
          _this2.emit('changed');
        }, 100);
      });
    }
  }]);
  return DialogsService;
}(_events2.default);

exports.default = new DialogsService();