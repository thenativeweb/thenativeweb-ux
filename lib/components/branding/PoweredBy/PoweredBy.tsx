import Product from '../Product';
import { createUseStyles, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { PoweredByClassNames } from './styles';

interface PoweredByProps {
  product?: 'wolkenkit';
  size?: 'md' | 'lg';
}

const useStyles = createUseStyles<Theme, PoweredByClassNames>(styles);

const PoweredBy: FunctionComponent<PoweredByProps> = ({
  product,
  size = 'md'
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.PoweredBy }>
      <div className={ classes.Intro }>Powered by</div>
      <Product name={ product } size={ size } />
    </div>
  );
};

export default PoweredBy;
