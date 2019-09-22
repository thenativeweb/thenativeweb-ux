import Product from '../Product';
import PropTypes from 'prop-types';
import React from 'react';
import Theme from '../../themes/Theme';
import { classNames, withStyles } from '../../styles';

const styles = (theme: Theme): any => ({
  PoweredBy: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.sm,
    textAlign: 'center',
    paddingTop: theme.space(0.5),
    paddingBottom: theme.space(0.5)
  },

  Intro: {
    marginTop: theme.space(1),
    marginBottom: theme.space(1),
    color: theme.colors.brand.lightGrey
  },

  SizeLg: {},
  SizeMd: {}
});

const PoweredBy = ({ classes, product, size }) => {
  const componentClasses = classNames(classes.PoweredBy, {
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg'
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
  size: PropTypes.oneOf([ 'md', 'lg' ])
};

PoweredBy.defaultProps = {
  size: 'md',
  name: undefined
};

export default withStyles(styles)(PoweredBy);
