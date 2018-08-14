import classNames from 'classnames';
import flatten from 'lodash/flatten';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  MadeBy: {
    overflow: 'hidden',
    'font-family': theme.font.family.default,
    'text-align': 'center',
    'padding-top': theme.grid.stepSize / 2,
    'padding-bottom': theme.grid.stepSize / 2
  },

  ColorDark: {
    color: theme.color.brand.lightGrey
  },

  ColorLight: {
    color: theme.color.brand.dark
  },

  SizeS: {
    'font-size': theme.font.size.small
  },

  SizeM: {
    'font-size': theme.font.size.default
  },

  SizeL: {
    'font-size': theme.font.size.large
  }
});

const MadeBy = ({ classes, color, partner = [], size }) => {
  const componentClasses = classNames(classes.MadeBy, {
    [classes.ColorDark]: color === 'dark',
    [classes.ColorLight]: color === 'light',
    [classes.SizeS]: size === 's',
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l'
  });

  partner = flatten([ partner ]);

  return (
    <div className={ componentClasses }>
      <span className={ classes.Intro }>
        Made with <Icon name='heart' color='highlight' type='inline' /> by
      </span>

      { ' ' }

      <Link href='https://www.thenativeweb.io' isExternal={ true }>the native web</Link>

      { partner.length > 0 ? ' and ' : null }

      { partner.map(item => (
        <Link key={ item.name } href={ item.href } isExternal={ true }>{ item.name }</Link>
      )) }
    </div>
  );
};

MadeBy.propTypes = {
  color: PropTypes.oneOf([ 'dark', 'light' ]),
  partner: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  size: PropTypes.oneOf([ 's', 'm', 'l' ])
};

MadeBy.defaultProps = {
  color: 'dark',
  size: 's',
  name: undefined
};

export default injectSheet(styles)(MadeBy);
