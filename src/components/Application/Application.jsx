import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import View from '../View/View.jsx';

const styles = {
  Application: {
    position: 'absolute !important',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
};

const Application = ({ children, classes, style, orientation }) => (
  <View className={ classes.Application } orientation={ orientation } style={ style }>
    { children }
  </View>
);

Application.propTypes = {
  orientation: PropTypes.oneOf([ 'horizontal', 'vertical', 'centered' ])
};

Application.defaultProps = {
  orientation: 'horizontal'
};

export default injectSheet(styles)(Application);
