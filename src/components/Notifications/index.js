import ExecutionEnvironment from 'exenv';
import injectSheet from 'react-jss';
import Notification from './Notification';
import React from 'react';
import ReactDOM from 'react-dom';
import services from '../../services';
import Transition from '../Transition';

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
          <Transition.Group type='FadeInLeft'component='span'>
            { services.notifications.state.items.map(notification => (
              <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
            ))}
          </Transition.Group>
        </div>
      ),
      services.getPortalRootNode()
    );
  }
}

export default injectSheet(styles)(Notifications);
