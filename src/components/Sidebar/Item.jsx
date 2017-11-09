import classNames from 'classnames';
import Icon from '../Icon';
import React from 'react';
import styles from './Item.css';

const Item = ({ className, icon, children, onClick }) => {
  const componentClasses = classNames(styles.Item, className);

  return (
    <div className={ componentClasses }>
      <div className={ styles.Icon } onClick={ onClick }>
        <Icon name={ icon } size='m' color='white' />
      </div>
      <div className={ styles.Items }>
        {
          React.Children.map(children, (child, i) => {
            return child
          })
        }
      </div>
    </div>
  );
};

export default Item;
