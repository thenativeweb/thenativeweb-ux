import classNames from 'classnames';
import injectSheet from 'react-jss';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  Brand: {
    display: 'flex',
    'flex-direction': 'column',
    overflow: 'hidden',
    'align-items': 'center',
    'justify-content': 'center',
    'font-family': theme.font.family.headline,
    background: theme.color.brand.dark
  },

  IsCollapsed: {
    '& *': {
      animation: 'none'
    }
  },

  Suffix: {
    'text-align': 'center',
    'margin-top': '3px',
    color: theme.color.brand.white
  },

  SizeL: {
    '& $Suffix': {
      'font-size': theme.font.size.xlarge
    }
  },

  SizeS: {
    '& $Suffix': {
      'font-size': theme.font.size.medium
    }
  },

  [theme.device.medium]: {
    Suffix: {},

    SizeL: {
      '& $Suffix': {
        'font-size': theme.font.size.large
      }
    }
  }
});

const Brand = ({ classes, suffix, size }) => {
  const brandClassNames = classNames(classes.Brand, {
    [classes.SizeS]: size === 's',
    [classes.SizeL]: size === 'l'
  });

  return (
    <div className={ brandClassNames } role='presentational'>
      <Logo size={ size } />
      <div className={ classes.Suffix }>{ suffix }</div>
    </div>
  );
};

Brand.propTypes = {
  size: PropTypes.oneOf([ 's', 'l' ]),
  /** A suffix that will be added below the logo. */
  suffix: PropTypes.string
};

Brand.defaultProps = {
  size: 's',
  suffix: undefined
};

export default injectSheet(styles)(Brand);
