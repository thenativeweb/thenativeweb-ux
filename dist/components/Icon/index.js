import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

var Icon = function Icon(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      style = _ref.style,
      type = _ref.type;

  var iconClassNames = classNames(classes.Icon, (_classNames = {}, _defineProperty(_classNames, classes.ColorDefault, color === 'default'), _defineProperty(_classNames, classes.ColorHighlight, color === 'highlight'), _defineProperty(_classNames, classes.ColorWhite, color === 'white'), _defineProperty(_classNames, classes.TypeInline, type === 'inline'), _defineProperty(_classNames, classes.TypeFlexAuto, type === 'flex-auto'), _defineProperty(_classNames, classes.SizeXS, size === 'xs'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _defineProperty(_classNames, classes.SizeL, size === 'l'), _defineProperty(_classNames, classes.SizeXL, size === 'xl'), _defineProperty(_classNames, classes.SizeXXL, size === 'xxl'), _classNames), className);

  return React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', className: iconClassNames, role: 'presentational', style: style },
    React.createElement('use', { xlinkHref: '#icon-' + name })
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'highlight', 'white']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  style: PropTypes.object,
  type: PropTypes.oneOf(['default', 'inline', 'flex-auto'])
};

Icon.defaultProps = {
  size: 's',
  color: 'default',
  type: 'default'
};

export default injectSheet(styles)(Icon);