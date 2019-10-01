import Product from '../Product';
import Theme from '../../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles => ({
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
    color: theme.color.brand.lightGrey
  },

  SizeLg: {},
  SizeMd: {}
});

interface PoweredByProps {
  classes: Classes;
  product?: 'wolkenkit';
  size?: 'md' | 'lg';
}

const PoweredBy: FunctionComponent<PoweredByProps> = ({
  classes,
  product,
  size = 'md'
}): ReactElement => {
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

export default withStyles(styles)(PoweredBy);
