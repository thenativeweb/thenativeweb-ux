import { Navigation } from '../../components/Navigation';
import NextLink from 'next/link';
import {
  classNames,
  createUseStyles,
  Link,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  Theme,
  Website
} from '../../../lib';
import React, { FunctionComponent, ReactElement, useState } from 'react';
import { StyleguideClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, StyleguideClassNames>(styles);

const Styleguide: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();
  const [ isNavigationVisible, setIsNavigationVisible ] = useState(true);
  const componentClasses = classNames(classes.Styleguide, {
    [classes.WithNavigationVisible]: isNavigationVisible
  });

  return (
    <Website
      className={ componentClasses }
      useNotifications={ true }
      useDialogs={ true }
    >
      <div className={ classes.NavigationDesktop }>
        <Sidebar>
          <NextLink href='/'>
            <Link href='/'>
              <SidebarBrand><Product name='ux' /></SidebarBrand>
            </Link>
          </NextLink>
          <SidebarItem
            iconName='menu'
            onClick={ (): void => setIsNavigationVisible(!isNavigationVisible) }
            isActive={ isNavigationVisible }
          />
        </Sidebar>
      </div>
      <div className={ classes.NavigationPanel }>
        <Navigation />
      </div>
      <div className={ classes.Content }>
        { children }
      </div>
    </Website>
  );
};

export { Styleguide };
