import { createUseStyles } from '../../../styles';
import { BrandClassNames, styles } from './styles';
import { LogoFull, LogoMinimal, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface BrandProps {
  color?: 'default' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  type?: 'full' | 'minimal';
  isInteractive?: boolean;
}

const useStyles = createUseStyles<Theme, BrandClassNames>(styles);

const Brand: FunctionComponent<BrandProps> = ({
  color = 'default',
  size = 'md',
  type = 'full',
  isInteractive = false
}): ReactElement => {
  const classes = useStyles();
  const Logo = type === 'full' ? LogoFull : LogoMinimal;

  return (
    <div className={ classes.Brand }>
      <Logo color={ color } size={ size } isInteractive={ isInteractive } />
    </div>
  );
};

export { Brand };
