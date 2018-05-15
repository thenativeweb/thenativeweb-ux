import _Promise from 'babel-runtime/core-js/promise';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import EventEmitter from 'events';
import merge from 'lodash/merge';

var DialogsService = function (_EventEmitter) {
  _inherits(DialogsService, _EventEmitter);

  function DialogsService() {
    _classCallCheck(this, DialogsService);

    var _this = _possibleConstructorReturn(this, (DialogsService.__proto__ || _Object$getPrototypeOf(DialogsService)).call(this));

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

  _createClass(DialogsService, [{
    key: 'hideConfirm',
    value: function hideConfirm() {
      this.state = merge({}, this.state, {
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

      return new _Promise(function (resolve) {
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

        // Delay the rendering in order to for keyboard events not to conflict
        setTimeout(function () {
          _this2.emit('changed');
        }, 100);
      });
    }
  }]);

  return DialogsService;
}(EventEmitter);

export default DialogsService;