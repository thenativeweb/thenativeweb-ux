import classNames from 'classnames';
import Icon from '../Icon/Icon.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Divider = () => (
  <hr
    className={ styles.Divider }
  />
);

const Item = ({ className, adjust = 'flex', children, helpLink, label, isVisible = true, type = 'text' }) => {
  const componentClasses = classNames(styles.Item, {
    [styles.ItemAdjustFlex]: adjust === 'flex',
    [styles.ItemAdjustAuto]: adjust === 'auto',
    [styles.ItemHidden]: isVisible === false,
    [styles.ItemLabeled]: label,
    [styles.ItemTypeCheckbox]: type === 'checkbox'
  }, className);

  if (type === 'checkbox') {
    const controlId = children || children.props.id ? children.props.id : undefined;

    return (
      <div
        className={ componentClasses }
      >
        <div className={ styles.Label }>
          <div className={ styles.Control }>{ children }</div>
          { label ? <label htmlFor={ controlId }>{ label }</label> : null }
          { helpLink ? <a className={ styles.Help } title='Get more detailed information…' rel='noopener noreferrer' target='_blank' href={ helpLink }><Icon name='help' className={ styles.IconHelp } /></a> : null }
        </div>
      </div>
    );
  }

  return (
    <div
      className={ componentClasses }
    >
      <div className={ styles.Label }>
        { label ? <label>{ label }</label> : null }
        { helpLink ? <a className={ styles.Help } rel='noopener noreferrer' target='_blank' href={ helpLink }><Icon name='help' className={ styles.IconHelp } /></a> : null }
      </div>
      <div className={ styles.Control }>{ children }</div>
    </div>
  );
};

const ControlGroup = ({ className, children, isVisible = true }) => {
  const componentClasses = classNames(styles.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={ componentClasses }
      children={ children }
    />
  );
};

ControlGroup.Divider = Divider;
ControlGroup.Item = Item;

ControlGroup.propTypes = {
  isVisible: PropTypes.bool
};

export default ControlGroup;
