import classNames from 'classnames';
import FadeInLeft from '../transitions/FadeInLeft.jsx';
import React from 'react';
import styles from './styles.css';
import { TransitionGroup } from 'react-transition-group';

const Notifications = ({ notifications = []}) => (
  <div className={ styles.Notifications }>
    <TransitionGroup>
      { notifications.map(notification => (
        <FadeInLeft key={ notification.id }>
          <div className={ classNames(styles.Notification, { [styles.TypeError]: notification.type === 'error' }) }>
            <div className={ styles.Text }>{ notification.text }</div>
          </div>
        </FadeInLeft>
      ))}
    </TransitionGroup>
  </div>
);

export default Notifications;
