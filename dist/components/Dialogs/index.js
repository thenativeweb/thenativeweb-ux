import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import Button from '../Button';
import Headline from '../Headline';
import injectSheet from 'react-jss';
import Modal from '../Modal';
import React from 'react';
import services from '../../services';

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var styles = {
  Dialogs: {},

  Actions: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',

    '& *': {
      'flex-grow': 0,
      'max-width': '200px'
    }
  }
};

var Dialogs = function (_React$PureComponent) {
  _inherits(Dialogs, _React$PureComponent);

  function Dialogs() {
    _classCallCheck(this, Dialogs);

    var _this = _possibleConstructorReturn(this, (Dialogs.__proto__ || _Object$getPrototypeOf(Dialogs)).call(this));

    _this.state = {
      isVisible: false
    };

    _this.handleServiceChanged = _this.handleServiceChanged.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(Dialogs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      services.dialogs.on('changed', this.handleServiceChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      services.dialogs.removeListener('changed', this.handleServiceChanged);
    }
  }, {
    key: 'handleServiceChanged',
    value: function handleServiceChanged() {
      this.forceUpdate();
    }

    /* eslint-disable class-methods-use-this */

  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      services.dialogs.state.confirm.onCancel();
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      services.dialogs.state.confirm.onConfirm();
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(key) {
      switch (key) {
        case KEY.ESCAPE:
          services.dialogs.state.confirm.onCancel();
          break;
        case KEY.ENTER:
          services.dialogs.state.confirm.onConfirm();
          break;
        default:
          break;
      }
    }
    /* eslint-enable class-methods-use-this */

  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return React.createElement(
        Modal,
        {
          attach: 'center',
          isVisible: services.dialogs.state.confirm.isVisible,
          className: classes.Dialogs,
          onKeyDown: this.handleKeyDown
        },
        React.createElement(
          Headline,
          null,
          services.dialogs.state.confirm.title
        ),
        React.createElement(
          'div',
          { className: classes.Actions },
          React.createElement(
            Button,
            { adjust: 'auto', onClick: this.handleCancel },
            services.dialogs.state.confirm.actions.cancel
          ),
          React.createElement(
            Button,
            { adjust: 'flex', onClick: this.handleConfirm, isPrimary: true, autoFocus: true },
            services.dialogs.state.confirm.actions.confirm
          )
        )
      );
    }
  }]);

  return Dialogs;
}(React.PureComponent);

export default injectSheet(styles)(Dialogs);