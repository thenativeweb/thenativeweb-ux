import classNames from 'classnames';
import injectSheet from 'react-jss';
import Product from '../Product';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  PoweredBy: {
    display: 'flex',
    'flex-direction': 'column',
    overflow: 'hidden',
    'align-items': 'center',
    'justify-content': 'center',
    'font-family': theme.font.family.default,
    'font-size': theme.font.size.small,
    background: theme.color.brand.dark,
    'text-align': 'center',
    'padding-top': theme.grid.stepSize / 2,
    'padding-bottom': theme.grid.stepSize / 2
  },

  Intro: {
    'margin-top': theme.grid.stepSize / 2,
    'margin-bottom': theme.grid.stepSize / 2,
    color: theme.color.brand.midGrey
  },

  SizeL: {},
  SizeM: {}
});

const PoweredBy = ({ classes, product, size }) => {
  const componentClasses = classNames(classes.PoweredBy, {
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l'
  });

  return (
    <div className={ componentClasses }>
      <div className={ classes.Intro }>Powered by</div>
      <Product name={ product } size={ size } />
    </div>
  );
};

PoweredBy.propTypes = {
  product: PropTypes.string,
  size: PropTypes.oneOf([ 'm', 'l' ])
};

PoweredBy.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(PoweredBy);
