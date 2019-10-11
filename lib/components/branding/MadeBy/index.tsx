import Theme from '../../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../../styles';
import { Icon, Link } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles => ({
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

interface Partner {
  href: string;
  name: string;
}

interface MadeByProps {
  classes: Classes;
  color?: 'dark' | 'light';
  partner?: Partner | Partner [];
  size?: 'sm' | 'md' | 'lg';
}

const MadeBy: FunctionComponent<MadeByProps> = ({
  classes,
  color = 'dark',
  partner = [],
  size = 'sm'
}): ReactElement => {
  const componentClasses = classNames(classes.MadeBy, {
    [classes.ColorDark]: color === 'dark',
    [classes.ColorLight]: color === 'light',
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg'
  });

  const partners: Partner [] = Array.isArray(partner) ? partner : [ partner ];

  return (
    <div className={ componentClasses }>
      <span className={ classes.Intro }>
        Made with <Icon name='heart' color='highlight' type='inline' /> by
      </span>

      &nbsp;

      <Link href='https://www.thenativeweb.io' isExternal={ true }>the native web</Link>

      { partners.map((item, index): ReactElement => (
        <React.Fragment key={ item.name }>
          { index === partners.length - 1 ? ' and ' : ', ' }
          <Link href={ item.href } isExternal={ true }>{ item.name }</Link>
        </React.Fragment>
      )) }
    </div>
  );
};

export default withStyles(styles)(MadeBy);
