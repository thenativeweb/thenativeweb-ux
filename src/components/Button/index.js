import Icon from '../Icon';
import Label from '../Label';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.js';
import { classNames, withStyles } from '../../styles';

const Hint = ({ children, classes }) => (
  <span className={ classes.Hint }>
    { children }
  </span>
);

const Button = ({
  autoFocus,
  adjust,
  children,
  classes,
  className,
  id,
  icon,
  iconSize,
  onClick,
  isPrimary,
  isSubtle,
  size,
  style,
  type
}) => {
  const componentClasses = classNames(classes.Button, {
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.SizeS]: size === 's',
    [classes.SizeM]: size === 'm',
    [classes.TypeSubtle]: isSubtle === true,
    [classes.TypePrimary]: isPrimary === true,
    [classes.TypeIcon]: icon,
    [classes.TypeIconOnly]: icon && !children
  }, className);

  const buttonType = type || (isPrimary ? 'submit' : 'button');

  /* eslint-disable react/button-has-type */
  return (
    <button
      autoFocus={ autoFocus }
      id={ id }
      type={ buttonType }
      className={ componentClasses }
      style={ style }
      onClick={ onClick }
    >
      { icon ? <Icon className={ classes.Icon } name={ icon } size={ iconSize } /> : null }
      { children ? <Label className={ classes.Label }>{ children }</Label> : null }
    </button>
  );
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  autoFocus: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf([ 'default', 'xs', 's', 'm', 'l' ]),
  isPrimary: PropTypes.bool,
  isSubtle: PropTypes.bool,
  size: PropTypes.oneOf([ 's', 'm' ]),
  type: PropTypes.oneOf([ 'button', 'submit', 'reset' ]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'm',
  type: undefined,
  onClick () {
    // Intentionally left bla
  }
};

Button.Hint = withStyles({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

export default withStyles(styles)(Button);
