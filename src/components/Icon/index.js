import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { classNames, withStyles } from '../../styles';

const Icon = ({ classes, className, color, name, size, style, type }) => {
  const iconClassNames = classNames(classes.Icon, {
    [classes.ColorDefault]: color === 'default',
    [classes.ColorCurrent]: color === 'current',
    [classes.ColorHighlight]: color === 'highlight',
    [classes.ColorWhite]: color === 'white',
    [classes.TypeInline]: type === 'inline',
    [classes.TypeFlexAuto]: type === 'flex-auto',
    [classes.SizeXs]: size === 'xs',
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl',
    [classes.SizeXxl]: size === 'xxl'
  }, className);

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={ iconClassNames } role='presentational' style={ style }>
      <use xlinkHref={ `#icon-${name}` } />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf([ 'default', 'current', 'highlight', 'white' ]),
  size: PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ]),
  style: PropTypes.object,
  type: PropTypes.oneOf([ 'default', 'inline', 'flex-auto' ])
};

Icon.defaultProps = {
  size: 'sm',
  color: 'default',
  type: 'default'
};

export default withStyles(styles)(Icon);
