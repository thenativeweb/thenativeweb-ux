import classNames from 'classnames';
import FadeInLeft from '../transitions/FadeInLeft.jsx';
import React from 'react';
import services from '../../services';
import styles from './styles.css';
import { TransitionGroup } from 'react-transition-group';

class Notifications extends React.PureComponent {
  constructor () {
    super();

    this.handleServiceChanged = this.handleServiceChanged.bind(this);
  }

  componentDidMount () {
    services.notifications.on('changed', this.handleServiceChanged);
  }

  componentWillUnount () {
    services.notifications.removeListener('changed', this.handleServiceChanged);
  }

  handleServiceChanged () {
    this.forceUpdate();
  }

  /* eslint-disable class-methods-use-this */
  render () {
    return (
      <div className={ styles.Notifications }>
        <TransitionGroup>
          { services.notifications.items.map(notification => (
            <FadeInLeft key={ notification.id }>
              <div className={ classNames(styles.Notification, { [styles.TypeError]: notification.type === 'error' }) }>
                <div className={ styles.Text }>{ notification.text }</div>
              </div>
            </FadeInLeft>
          ))}
        </TransitionGroup>
      </div>
    );
  }
  /* eslint-enable class-methods-use-this */
}

export default Notifications;
