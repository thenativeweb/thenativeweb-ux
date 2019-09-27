import Theme from '../../../themes/Theme';
import { withStyles } from '../../../styles';
import { Classes, Styles } from 'jss';
import { LogoFull, LogoMinimal } from '../logos';
import React, { FunctionComponent, ReactElement } from 'react';

const styles: Styles = (theme: Theme): Styles => ({
  Brand: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.brand.dark
  }
});

interface BrandProps {
  classes: Classes;
  color?: 'default' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  type?: 'full' | 'minimal';
  isInteractive?: boolean;
}

const Brand: FunctionComponent<BrandProps> = ({
  color = 'default',
  classes,
  size = 'md',
  type,
  isInteractive = false
}): ReactElement => {
  const Logo = type === 'full' ? LogoFull : LogoMinimal;

  return (
    <div className={ classes.Brand }>
      <Logo color={ color } size={ size } isInteractive={ isInteractive } />
    </div>
  );
};

export default withStyles(styles)(Brand);
