import {
  createUseStyles,
  Link,
  Product,
  Sidebar,
  SidebarBrand,
  Theme,
  Website
} from '../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';
import { StyleguideClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, StyleguideClassNames>(styles);

const Styleguide: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();

  return (
    <Website className={ classes.Styleguide }>
      <div className={ classes.NavigationDesktop }>
        <Sidebar>
          <Link href='/'><SidebarBrand><Product name='ux' /></SidebarBrand></Link>
        </Sidebar>
      </div>
      <div className={ classes.Content }>
        { children }
      </div>
    </Website>
  );
};

export { Styleguide };
