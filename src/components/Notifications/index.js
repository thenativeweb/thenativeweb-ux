import ExecutionEnvironment from 'exenv';
import FadeInLeft from '../transitions/FadeInLeft';
import injectSheet from 'react-jss';
import Notification from './Notification';
import React from 'react';
import ReactDOM from 'react-dom';
import services from '../../services';
import { TransitionGroup } from 'react-transition-group';

const styles = theme => ({
  Notifications: {
    position: 'fixed',
    top: theme.grid.stepSize * 2,
    right: theme.grid.stepSize * 2,
    width: '300px',
    'z-index': theme.zIndex.overlay,
    'pointer-events': 'none'
  }
});

class Notifications extends React.PureComponent {
  constructor () {
    super();

    this.handleServiceChanged = this.handleServiceChanged.bind(this);
  }

  componentDidMount () {
    services.notifications.on('changed', this.handleServiceChanged);
  }

  componentWillUnmount () {
    services.notifications.removeListener('changed', this.handleServiceChanged);
  }

  handleServiceChanged () {
    this.forceUpdate();
  }

  render () {
    const { classes } = this.props;

    if (!ExecutionEnvironment.canUseDOM) {
      return null;
    }

    return ReactDOM.createPortal(
      (
        <div className={ classes.Notifications }>
          <TransitionGroup component='span'>
            { services.notifications.state.items.map(notification => (
              <FadeInLeft key={ notification.id }>
                <Notification type={ notification.type } text={ notification.text } />
              </FadeInLeft>
            ))}
          </TransitionGroup>
        </div>
      ),
      services.getPortalRootNode()
    );
  }
}

export default injectSheet(styles)(Notifications);
