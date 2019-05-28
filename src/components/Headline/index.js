import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Headline: {
    fontFamily: theme.font.family.default,
    opacity: 0.95,
    padding: 0,
    margin: 0
  },

  Level1: {
    fontSize: theme.font.size.xl,
    fontWeight: 600,
    textAlign: 'center',
    borderBottom: `1px solid ${theme.color.content.border}`,
    paddingBottom: `${theme.space(2)}px`,
    marginBottom: `${theme.space(2)}px`
  },

  Level2: {
    fontSize: theme.font.size.xl,
    fontWeight: 500,
    textAlign: 'left',
    borderBottom: `1px solid ${theme.color.content.border}`,
    padding: `${theme.space(2) * 2} 0 ${theme.space(2)} 0`,
    marginBottom: `${theme.space(2)}px`
  }
});

const Headline = ({ classes, children, id, level, style }) => {
  const componentClasses = classNames(classes.Headline, {
    [classes.Level1]: level === '1',
    [classes.Level2]: level === '2'
  });

  return (
    <div id={ id } className={ componentClasses } style={ style }>
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

export default withStyles(styles)(Headline);
