import { createUseStyles } from '../../../styles';
import { Product } from '../../..';
import { PoweredByClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface PoweredByProps {
  product?: 'wolkenkit';
  size?: 'md' | 'lg';
}

const useStyles = createUseStyles<PoweredByClassNames>(styles);

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

PoweredBy.displayName = 'PoweredBy';

export { PoweredBy };
