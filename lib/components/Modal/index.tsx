import Button from '../Button';
import ExecutionEnvironment from 'exenv';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import services from '../../services';
import styles from './styles';
import Transition from '../Transition';
import { classNames, withStyles } from '../../styles';

const KEY = {
  ENTER: 13,
  ESCAPE: 27
};

class Modal extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleBackDropClicked = this.handleBackDropClicked.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount () {
    const { isVisible } = this.props;

    this.handleVisibility(isVisible);
  }

  componentDidUpdate () {
    const { isVisible } = this.props;

    this.handleVisibility(isVisible);
  }

  componentWillUnmount () {
    this.handleVisibility(false);
  }

  handleVisibility (isVisible) {
    if (isVisible) {
      document.addEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.add('thenativeweb-modal--visible');
    } else {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.remove('thenativeweb-modal--visible');
    }
  }

  handleKeyDown (event) {
    const { onCancel, onKeyDown } = this.props;

    switch (event.keyCode) {
      case KEY.ESCAPE:
        if (onCancel) {
          onCancel();
        }
        break;
      case KEY.ENTER:
        break;
      default:
        break;
    }

    onKeyDown(event.keyCode, event);
  }

  handleBackDropClicked () {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel();
    }
  }

  render () {
    const { attach, classes, className, children, header, isVisible, showHeader, size, padding } = this.props;

    const backdropClasses = classNames(classes.Backdrop, {
      [classes.IsVisible]: isVisible
    });

    const chromeClasses = classNames(classes.Chrome, {
      [classes.ChromeSizeSm]: size === 'sm',
      [classes.ChromeSizeMd]: size === 'md',
      [classes.ChromeSizeLg]: size === 'lg',
      [classes.ChromeSizeFullscreen]: size === 'fullscreen',
      [classes.ChromeAttachedSidebar]: attach === 'sidebar',
      [classes.ChromeAttachedLeft]: attach === 'left',
      [classes.ChromeAttachedRight]: attach === 'right',
      [classes.ChromeAttachedCenter]: attach === 'center',
      [classes.ChromePaddingNone]: padding === 'none'
    }, className);

    let transitionType;

    switch (attach) {
      case 'left':
      case 'sidebar':
        transitionType = 'FadeInRight';
        break;
      case 'right':
        transitionType = 'FadeInLeft';
        break;
      default:
        transitionType = 'Zoom';
    }

    if (!ExecutionEnvironment.canUseDOM) {
      return null;
    }

    return ReactDOM.createPortal(
      (
        <div className={ classes.Modal }>
          <div className={ backdropClasses } onClick={ this.handleBackDropClicked } />
          <Transition type={ transitionType } in={ isVisible }>
            <div className={ chromeClasses } role='dialog'>
              {
                showHeader ? (
                  <div className={ classes.Header }>
                    <div className={ classes.HeaderText }>{ header }</div>
                    <Button
                      className={ classes.HeaderCloseButton }
                      isSubtle={ true }
                      icon='close'
                      onClick={ this.handleBackDropClicked }
                    />
                  </div>
                ) : null
              }
              <div className={ classes.Content }>
                { children }
              </div>
            </div>
          </Transition>
        </div>
      ),
      services.getPortalRootNode()
    );
  }
}

Modal.Row = Row;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  attach: PropTypes.oneOf([ 'left', 'right', 'sidebar', 'center' ]),
  header: PropTypes.node,
  showHeader: PropTypes.bool,
  size: PropTypes.oneOf([ 'sm', 'md', 'lg', 'fullscreen' ]),
  onKeyDown: PropTypes.func
};

Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  showHeader: true,
  size: 'sm',
  onCancel () {
    // Intentionally left blank.
  },
  onKeyDown () {
    // Intentionally left blank.
  }
};

export default withStyles(styles)(Modal);
