import Icon from '../Icon';
import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

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

  const partners = Array.isArray(partner) ? partner : [ partner ];

  return (
    <div className={ componentClasses }>
      <span className={ classes.Intro }>
        Made with <Icon name='heart' color='highlight' type='inline' /> by
      </span>

      { ' ' }

      <Link href='https://www.thenativeweb.io' isExternal={ true }>the native web</Link>

      { partners.map((item, index) => (
        <React.Fragment key={ item.name }>
          { index === partner.length - 1 ? ' and ' : ', ' }
          <Link href={ item.href } isExternal={ true }>{ item.name }</Link>
        </React.Fragment>
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

export default withStyles(styles)(MadeBy);
