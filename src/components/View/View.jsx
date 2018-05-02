import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const View = ({ adjust, alignItems, children, classes, className, justifyContent, scrollable, style, orientation }) => {
  const viewClassNames = classNames(classes.View, {
    [classes.OrientationCentered]: orientation === 'centered',
    [classes.OrientationHorizontal]: orientation === 'horizontal',
    [classes.OrientationVertical]: orientation === 'vertical',
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.AlignItemsCenter]: alignItems === 'center',
    [classes.JustifyContentCenter]: justifyContent === 'center',
    [classes.ScrollableAuto]: scrollable === 'auto'
  }, className);

  return (
    <div className={ viewClassNames } style={ style }>
      { children }
    </div>
  );
};

View.propTypes = {
  adjust: PropTypes.oneOf([ 'auto', 'flex' ]),
  alignItems: PropTypes.oneOf([ 'center' ]),
  justifyContent: PropTypes.oneOf([ 'center' ]),
  orientation: PropTypes.oneOf([ 'horizontal', 'vertical', 'centered' ]),
  scrollable: PropTypes.oneOf([ false, 'auto' ])
};

export default injectSheet(styles)(View);
