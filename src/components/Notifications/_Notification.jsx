import classNames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Notification: {
    padding: '10px 15px',
    background: theme.color.brand.dark,
    'box-shadow': theme.shadow.overlay,
    'margin-bottom': theme.grid.stepSize,
    'font-family': theme.font.family.default
  },

  TypeError: {
    color: theme.color.brand.white,
    background: theme.color.state.error
  },

  TypeSuccess: {
    color: theme.color.brand.white,
    background: theme.color.state.success
  }
});

const Notification = ({ classes, type, text }) => {
  const componentClasses = classNames(classes.Notification, {
    [classes.TypeError]: type === 'error',
    [classes.TypeSuccess]: type === 'success'
  });

  return (
    <div className={ componentClasses }>
      { text }
    </div>
  );
};

export default injectSheet(styles)(Notification);
