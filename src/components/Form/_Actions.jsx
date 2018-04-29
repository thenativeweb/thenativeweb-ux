import injectSheet from 'react-jss';
import React from 'react';

const styles = theme => ({
  Actions: {
    display: 'flex',
    'justify-content': 'flex-end',
    'border-top': `1px solid ${theme.color.content.border}`,
    'padding-top': theme.grid.stepSize,
    'margin-top': theme.grid.stepSize * 2
  }
});

const Actions = function ({ children, classes }) {
  return (
    <div className={ classes.Actions }>{ children }</div>
  );
};

export default injectSheet(styles)(Actions);
