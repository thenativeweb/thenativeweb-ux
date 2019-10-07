import { Classes } from 'jss';
import ExecutionEnvironment from 'exenv';
import Notification from './Notification';
import ReactDOM from 'react-dom';
import services from '../../services';
import styles from './styles';
import { TransitionGroup } from '../Transition';
import { withStyles } from '../../styles';
import React, { ReactElement } from 'react';

interface NotificationsProps {
  classes: Classes;
}

class Notifications extends React.PureComponent<NotificationsProps> {
  public componentDidMount (): void {
    services.notifications.on('changed', this.handleServiceChanged);
  }

  public componentWillUnmount (): void {
    services.notifications.removeListener('changed', this.handleServiceChanged);
  }

  protected handleServiceChanged (): void {
    this.forceUpdate();
  }

  public render (): ReactElement | null {
    const { classes } = this.props;

    if (!ExecutionEnvironment.canUseDOM) {
      return null;
    }

    return ReactDOM.createPortal(
      (
        <div className={ classes.Notifications }>
          <TransitionGroup type='FadeInLeft' component='span'>
            { services.notifications.state.items.map((notification): ReactElement => (
              <Notification key={ notification.id } type={ notification.type } text={ notification.text } />
            ))}
          </TransitionGroup>
        </div>
      ),
      services.getPortalRootNode()
    );
  }
}

export default withStyles(styles)(Notifications);
