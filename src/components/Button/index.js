import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import Label from '../Label';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.js';

const Hint = ({ children, classes }) => (
  <span className={ classes.Hint }>
    { children }
  </span>
);

const Button = ({ autoFocus, adjust, children, classes, className, id, icon, iconSize, onClick, isPrimary, isSubtle, size, type }) => {
  const buttonClassNames = classNames(classes.Button, {
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.SizeDefault]: size === 'default',
    [classes.SizeS]: size === 's',
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l',
    [classes.TypeSubtle]: isSubtle === true,
    [classes.TypePrimary]: isPrimary === true,
    [classes.TypeIcon]: icon,
    [classes.TypeIconOnly]: icon && !children
  }, className);

  const buttonType = type || (isPrimary ? 'submit' : 'button');

  return (
    <button
      autoFocus={ autoFocus }
      id={ id }
      type={ buttonType }
      className={ buttonClassNames }
      onClick={ onClick }
    >
      { icon ? <Icon className={ classes.Icon } name={ icon } size={ iconSize } /> : null }
      { children ? <Label className={ classes.Label }>{ children }</Label> : null }
    </button>
  );
};

Button.propTypes = {
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  autoFocus: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf([ 'default', 'xs', 's', 'm', 'l' ]),
  isPrimary: PropTypes.bool,
  isSubtle: PropTypes.bool,
  size: PropTypes.oneOf([ 'default', 's', 'm', 'l' ]),
  type: PropTypes.oneOf([ 'button', 'submit', 'reset' ]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'default',
  type: undefined,
  onClick () {}
};

Button.Hint = injectSheet({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

export default injectSheet(styles)(Button);
