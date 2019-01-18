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
      document.addEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.add('thenativeweb-modal--visible');
    } else {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.querySelector('body').classList.remove('thenativeweb-modal--visible');
    }
  }

  handleKeyDown (event) {
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

  handleBackDropClicked () {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render () {
    const { attach, classes, className, children, isVisible, size } = this.props;

    const backdropClasses = classNames(classes.Backdrop, {
      [classes.IsVisible]: isVisible
    });

    const contentClasses = classNames(classes.Content, {
      [classes.ContentSizeS]: size === 's',
      [classes.ContentSizeM]: size === 'm',
      [classes.ContentSizeL]: size === 'l',
      [classes.ContentAttachedSidebar]: attach === 'sidebar',
      [classes.ContentAttachedLeft]: attach === 'left',
      [classes.ContentAttachedRight]: attach === 'right',
      [classes.ContentAttachedCenter]: attach === 'center'
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
            <div className={ contentClasses } role='dialog'>{ children }</div>
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
  size: PropTypes.oneOf([ 's', 'm', 'l' ]),
  onKeyDown: PropTypes.func
};

Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  size: 's',
  onCancel () {},
  onKeyDown () {}
};

export default withStyles(styles)(Modal);
