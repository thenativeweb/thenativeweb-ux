import { createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { SidebarBrandClassNames, styles } from './styles';

const useStyles = createUseStyles<SidebarBrandClassNames>(styles);

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
