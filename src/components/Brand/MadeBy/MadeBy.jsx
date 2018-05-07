import classNames from 'classnames';
import flatten from 'lodash/flatten';
import Icon from '../../Icon';
import injectSheet from 'react-jss';
import Link from '../../Link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  MadeBy: {
    overflow: 'hidden',
    'font-family': theme.font.family.default,
    'font-size': theme.font.size.small,
    'text-align': 'center',
    'padding-top': theme.grid.stepSize / 2,
    'padding-bottom': theme.grid.stepSize / 2,
    color: theme.color.brand.midGrey,
    background: theme.color.brand.dark
  },

  SizeL: {},
  SizeM: {}
});

const MadeBy = ({ classes, partner = [], size }) => {
  const componentClasses = classNames(classes.MadeBy, {
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

      { partner.length > 0 ? ' & ' : null }

      { partner.map(item => (
        <Link key={ item.name } href={ item.href } isExternal={ true }>{ item.name }</Link>
      )) }
    </div>
  );
};

MadeBy.propTypes = {
  partner: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  size: PropTypes.oneOf([ 'm', 'l' ])
};

MadeBy.defaultProps = {
  size: 'm',
  name: undefined
};

export default injectSheet(styles)(MadeBy);
