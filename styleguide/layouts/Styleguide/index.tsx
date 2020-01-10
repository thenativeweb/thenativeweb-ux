import { Footer } from '../../components/Footer';
import { navigation } from '../../configuration/navigation';
import NextLink from 'next/link';
import {
  Button,
  classNames,
  createUseStyles,
  HorizontalBar,
  Link,
  MobileToggle,
  NonIdealState,
  PageNavigation,
  PageTree,
  Product,
  Sidebar,
  SidebarBrand,
  SidebarItem,
  Theme,
  useDevice,
  useRouteChange,
  Website
} from '../../../lib';
import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { StyleguideClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, StyleguideClassNames>(styles);

const Styleguide: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();
  const device = useDevice();
  const isMobile = device === 'xs';

  const [ isNavigationVisible, setIsNavigationVisible ] = useState(true);
  const [ isSearchVisible, setIsSearchVisible ] = useState(false);

  const componentClasses = classNames(classes.Styleguide, {
    [classes.WithNavigationVisible]: isNavigationVisible
  });

  const pageTree = new PageTree({ items: navigation });

  const hideNavigationOnMobile = useCallback((): void => {
    if (isMobile) {
      setIsNavigationVisible(false);
    }
  }, []);

  const toggleNavigation = useCallback((): void => {
    setIsNavigationVisible(!isNavigationVisible);
  }, [ isNavigationVisible ]);

  useRouteChange(hideNavigationOnMobile, [ device ]);
  useEffect(hideNavigationOnMobile, []);

  return (
    <Website
      className={ componentClasses }
      useNotifications={ true }
      useDialogs={ true }
    >
      <div className={ classes.NavigationForDesktop }>
        <Sidebar>
          <NextLink href='/'>
            <Link href='/'>
              <SidebarBrand>
                <Product name='ux' />
              </SidebarBrand>
            </Link>
          </NextLink>
          <SidebarItem
            iconName='toggle-left-panel'
            onClick={ toggleNavigation }
            isActive={ isNavigationVisible }
          />
        </Sidebar>
      </div>

      <HorizontalBar
        background='dark'
        paddingHorizontal='sm'
        borderBottom={ false }
        className={ classes.NavigationForMobile }
      >
        <NextLink href='/'>
          <Link href='/'>
            <Product name='ux' size='sm' />
          </Link>
        </NextLink>
      </HorizontalBar>

      <MobileToggle
        isVisible={ isNavigationVisible }
        onClick={ toggleNavigation }
      />

      <div className={ classes.NavigationUniversal }>
        <PageNavigation
          header={
            <HorizontalBar align='space-between' paddingHorizontal='none'>
              <Button icon='search' onClick={ (): void => setIsSearchVisible(!isSearchVisible) } iconSize='sm' style={{ padding: 16 }} />
            </HorizontalBar>
          }
          nonIdealState={
            <NonIdealState cause='Sorry, no pages found.'>
              <p>
                Try searching for something else!
              </p>
            </NonIdealState>
          }
          pageTree={ pageTree }
          showSearchBar={ isSearchVisible }
        />
      </div>

      <div className={ classes.Content }>
        { children }

        <Footer />
      </div>
    </Website>
  );
};

export { Styleguide };
