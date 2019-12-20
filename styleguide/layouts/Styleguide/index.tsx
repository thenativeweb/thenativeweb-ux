import { Footer } from '../../components/Footer';
import MobileToggle from '../../components/Navigation/MobileToggle';
import { navigation } from '../../configuration/navigation';
import NextLink from 'next/link';
import { PageNavigation } from '../../components/Navigation/PageNavigation';
import { useRouteChange } from '../../components/Navigation/useRouteChange';
import {
  classNames,
  createUseStyles,
  Link,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  Theme,
  useDevice,
  Website
} from '../../../lib';
import React, { FunctionComponent, ReactElement, useCallback, useState } from 'react';
import { StyleguideClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, StyleguideClassNames>(styles);

const Styleguide: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();
  const device = useDevice();
  const [ isNavigationVisible, setIsNavigationVisible ] = useState(false);
  const componentClasses = classNames(classes.Styleguide, {
    [classes.WithNavigationVisible]: isNavigationVisible
  });

  const toggleNavigation = useCallback((): void => {
    setIsNavigationVisible(!isNavigationVisible);
  }, [ isNavigationVisible ]);

  useRouteChange((): void => {
    if (device === 'xs') {
      setIsNavigationVisible(false);
    }
  }, [ device ]);

  return (
    <Website
      className={ componentClasses }
      useNotifications={ true }
      useDialogs={ true }
    >
      <div className={ classes.SidebarDesktop }>
        <Sidebar>
          <NextLink href='/'>
            <Link href='/'>
              <SidebarBrand>
                <Product name='ux' />
              </SidebarBrand>
            </Link>
          </NextLink>
          <SidebarItem
            iconName='menu'
            onClick={ toggleNavigation }
            isActive={ isNavigationVisible }
          />
        </Sidebar>
      </div>

      <div className={ classes.TopbarMobile }>
        <NextLink href='/'>
          <Link href='/'>
            <Product name='ux' size='sm' />
          </Link>
        </NextLink>
      </div>

      <MobileToggle
        isVisible={ isNavigationVisible }
        onClick={ toggleNavigation }
      />

      <div className={ classes.NavigationPanel }>
        <PageNavigation pageTree={ navigation } />
      </div>

      <div className={ classes.Content }>
        { children }

        <Footer />
      </div>
    </Website>
  );
};

export { Styleguide };
