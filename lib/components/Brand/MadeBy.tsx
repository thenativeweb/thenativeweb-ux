import Icon from '../Icon';
import Link from '../Link';
import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  MadeBy: {
    overflow: 'hidden',
    fontFamily: theme.font.family.default,
    textAlign: 'center',
    paddingTop: theme.space(1),
    paddingBottom: theme.space(1)
  },

  ColorDark: {
    color: theme.color.brand.lightGrey
  },

  ColorLight: {
    color: theme.color.brand.dark
  },

  SizeSm: {
    fontSize: theme.font.size.sm
  },

  SizeMd: {
    fontSize: theme.font.size.md
  },

  SizeLg: {
    fontSize: theme.font.size.lg
  }
});

const MadeBy = ({ classes, color, partner = [], size }) => {
  const componentClasses = classNames(classes.MadeBy, {
    [classes.ColorDark]: color === 'dark',
    [classes.ColorLight]: color === 'light',
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg'
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
  size: PropTypes.oneOf([ 'sm', 'md', 'lg' ])
};

MadeBy.defaultProps = {
  color: 'dark',
  size: 'sm',
  name: undefined
};

export default withStyles(styles)(MadeBy);
