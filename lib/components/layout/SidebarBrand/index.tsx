import { createUseStyles } from '../../../styles';
import { Theme } from '../../../themes';
import React, { FunctionComponent, ReactElement } from 'react';
import { SidebarBrandClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, SidebarBrandClassNames>(styles);

const SidebarBrand: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.SidebarBrand }>
      { children }
    </div>
  );
};

SidebarBrand.displayName = 'SidebarBrand';

export { SidebarBrand };
