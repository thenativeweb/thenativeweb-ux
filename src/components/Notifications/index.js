import ExecutionEnvironment from 'exenv';
import Notification from './Notification';
import React from 'react';
import ReactDOM from 'react-dom';
import services from '../../services';
import Transition from '../Transition';
import { withStyles } from '../../styles';

const styles = theme => ({
  Notifications: {
    position: 'fixed',
    top: `${theme.space(3)}px`,
    right: `${theme.space(3)}px`,
    width: '300px',
    zIndex: theme.zIndices.overlay,
    pointerEvents: 'none'
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
          <Transition.Group type='FadeInLeft' component='span'>
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

export default withStyles(styles)(Notifications);
