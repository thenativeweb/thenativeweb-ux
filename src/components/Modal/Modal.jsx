import classNames from 'classnames';
import FadeInLeft from '../transitions/FadeInLeft.jsx';
import FadeInRight from '../transitions/FadeInRight.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const ESCAPE_KEY = 27;

const Row = function ({ children }) {
  return (
    <div className={ styles.Row }>{ children }</div>
  );
};

const Title = ({ children, className }) => {
  const componentClasses = classNames(styles.Title, className);

  return (
    <h2 className={ componentClasses }>
      { children }
    </h2>
  );
};

class Modal extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleBackDropClicked = this.handleBackDropClicked.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount () {
    this.handleVisibility(this.props.isVisible);
  }

  componentDidUpdate () {
    this.handleVisibility(this.props.isVisible);
  }

  componentWillUnmount () {
    this.handleVisibility(false);
  }

  handleVisibility (isVisible) {
    if (isVisible) {
      window.addEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.add('tnw-modal--visible');
    } else {
      window.removeEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.remove('tnw-modal--visible');
    }
  }

  handleKeyDown (event) {
    switch (event.keyCode) {
      case ESCAPE_KEY:
        if (this.props.onCancel) {
          this.props.onCancel();
        }
        break;
      default:
        break;
    }
  }

  handleBackDropClicked () {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render () {
    const { attach, children, isVisible, size } = this.props;

    const backdropClasses = classNames(styles.Backdrop, {
      [styles.BackdropIsVisible]: isVisible
    });

    const contentClasses = classNames(styles.Content, {
      [styles.ContentSizeS]: size === 's',
      [styles.ContentSizeM]: size === 'm',
      [styles.ContentAttachedSidebar]: attach === 'sidebar',
      [styles.ContentAttachedLeft]: attach === 'left',
      [styles.ContentAttachedRight]: attach === 'right',
      [styles.ContentAttachedCenter]: attach === 'center'
    });

    const Transition = (attach === 'left' || attach === 'sidebar') ? FadeInRight : FadeInLeft;

    return (
      <div className={ styles.Modal }>
        <div className={ backdropClasses } onClick={ this.handleBackDropClicked } />
        <Transition in={ isVisible }>
          <div className={ contentClasses }>{ children }</div>
        </Transition>
      </div>
    );
  }
}

Modal.Title = Title;
Modal.Row = Row;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  attach: PropTypes.oneOf([ 'left', 'right', 'sidebar', 'center' ]),
  size: PropTypes.oneOf([ 's', 'm' ])
};

Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  size: 's',
  onCancel () {}
};

export default Modal;
