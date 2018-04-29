import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  Headline: {
    'font-family': theme.font.family.default,
    opacity: 0.95,
    padding: 0,
    margin: 0
  },

  Level1: {
    'font-size': theme.font.size.xlarge,
    'font-weight': 600,
    'text-align': 'center',
    'border-bottom': `1px solid ${theme.color.content.border}`,
    'padding-bottom': theme.grid.stepSize * 2,
    'margin-bottom': theme.grid.stepSize * 2
  },

  Level2: {
    'font-size': theme.font.size.xlarge,
    'font-weight': 500,
    'text-align': 'left',
    'border-bottom': `1px solid ${theme.color.content.border}`,
    padding: `${theme.grid.stepSize * 2} 0 ${theme.grid.stepSize} 0`,
    'margin-bottom': (theme.grid.stepSize * 2)
  }
});

const Headline = ({ classes, level, children }) => {
  const componentClasses = classNames(classes.Headline, {
    [classes.Level1]: level === '1',
    [classes.Level2]: level === '2'
  });

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
};

Headline.propTypes = {
  level: PropTypes.oneOf([ '1', '2' ])
};

Headline.defaultProps = {
  level: '1'
};

export default injectSheet(styles)(Headline);
