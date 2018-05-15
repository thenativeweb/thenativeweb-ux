import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import services from '../../services';
import styles from './styles';
import transtions from '../transitions';

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var Modal = function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || _Object$getPrototypeOf(Modal)).call(this, props));

    _this.handleBackDropClicked = _this.handleBackDropClicked.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleVisibility(this.props.isVisible);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleVisibility(this.props.isVisible);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleVisibility(false);
    }
  }, {
    key: 'handleVisibility',
    value: function handleVisibility(isVisible) {
      if (isVisible) {
        document.addEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.add('thenativeweb-modal--visible');
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.remove('thenativeweb-modal--visible');
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      switch (event.keyCode) {
        case KEY.ESCAPE:
          if (this.props.onCancel) {
            this.props.onCancel();
          }
          break;
        case KEY.ENTER:
          break;
        default:
          break;
      }

      this.props.onKeyDown(event.keyCode, event);
    }
  }, {
    key: 'handleBackDropClicked',
    value: function handleBackDropClicked() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          attach = _props.attach,
          classes = _props.classes,
          className = _props.className,
          children = _props.children,
          isVisible = _props.isVisible,
          size = _props.size;


      var backdropClasses = classNames(classes.Backdrop, _defineProperty({}, classes.IsVisible, isVisible));

      var contentClasses = classNames(classes.Content, (_classNames2 = {}, _defineProperty(_classNames2, classes.ContentSizeS, size === 's'), _defineProperty(_classNames2, classes.ContentSizeM, size === 'm'), _defineProperty(_classNames2, classes.ContentSizeL, size === 'l'), _defineProperty(_classNames2, classes.ContentAttachedSidebar, attach === 'sidebar'), _defineProperty(_classNames2, classes.ContentAttachedLeft, attach === 'left'), _defineProperty(_classNames2, classes.ContentAttachedRight, attach === 'right'), _defineProperty(_classNames2, classes.ContentAttachedCenter, attach === 'center'), _classNames2), className);

      var Transition = void 0;

      switch (attach) {
        case 'left':
        case 'sidebar':
          Transition = transtions.FadeInRight;
          break;
        case 'right':
          Transition = transtions.FadeInLeft;
          break;
        default:
          Transition = transtions.Zoom;
      }

      return ReactDOM.createPortal(React.createElement(
        'div',
        { className: classes.Modal },
        React.createElement('div', { className: backdropClasses, onClick: this.handleBackDropClicked }),
        React.createElement(
          Transition,
          { 'in': isVisible },
          React.createElement(
            'div',
            { className: contentClasses, role: 'dialog' },
            children
          )
        )
      ), services.createPortalRootNode());
    }
  }]);

  return Modal;
}(React.PureComponent);

Modal.Row = Row;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  attach: PropTypes.oneOf(['left', 'right', 'sidebar', 'center']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onKeyDown: PropTypes.func
};

Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  size: 's',
  onCancel: function onCancel() {},
  onKeyDown: function onKeyDown() {}
};

export default injectSheet(styles)(Modal);