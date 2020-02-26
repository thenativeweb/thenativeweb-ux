import { navigation } from '../../configuration/navigation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Breadcrumbs,
  Button,
  classNames,
  createUseStyles,
  Footer,
  getLanguageFromUrl,
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
  useRouteChange
} from '../../../lib';
import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { StyleguideClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, StyleguideClassNames>(styles);

const Styleguide: FunctionComponent = ({ children }): ReactElement | null => {
  const router = useRouter();
  const classes = useStyles();
  const device = useDevice();

  const language = getLanguageFromUrl(router.pathname);

  if (!Array.isArray(navigation[language])) {
    return null;
  }

  const pageTree = new PageTree({
    items: navigation[language],
    basePath: `/${language}`
  });
  const isMobile = device === 'xs';

  const [ isNavigationVisible, setIsNavigationVisible ] = useState(true);
  const [ isSearchVisible, setIsSearchVisible ] = useState(false);
  const [ activePath, setActivePath ] = useState(router.asPath);

  const currentPage = pageTree.getPageItemByPath(activePath);

  const componentClasses = classNames(classes.Styleguide, {
    [classes.WithNavigationVisible]: isNavigationVisible
  });

  const hideNavigationOnMobile = useCallback((): void => {
    if (isMobile) {
      setIsNavigationVisible(false);
    }
  }, []);

  const toggleNavigation = useCallback((): void => {
    setIsNavigationVisible(!isNavigationVisible);
  }, [ isNavigationVisible ]);

  useRouteChange((newPath): void => {
    setActivePath(newPath);
    hideNavigationOnMobile();
  }, [ device ]);

  useEffect(hideNavigationOnMobile, []);

  return (
    <div className={ componentClasses }>
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
          activePath={ activePath }
        />
      </div>

      <div className={ classes.Content }>
        {
          currentPage && (
            <HorizontalBar paddingHorizontal='none' className={ classes.ContentTopBar }>
              <Breadcrumbs items={ currentPage.breadcrumbs } size='md' color='light' />
            </HorizontalBar>
          )
        }

        { children }

        <Footer yearOfCreation={ 2017 } />
      </div>
    </div>
  );
};

export { Styleguide };
