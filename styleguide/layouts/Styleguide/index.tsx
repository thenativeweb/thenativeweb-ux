import Head from 'next/head';
import { navigation } from '../../configuration/navigation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Breadcrumbs,
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

interface StyleguideProps {
  pageTitle?: string;
}

const Styleguide: FunctionComponent<StyleguideProps> = ({
  pageTitle,
  children
}): ReactElement | null => {
  const router = useRouter();
  const classes = useStyles();
  const device = useDevice();

  const language = getLanguageFromUrl(router.pathname);
  const basePath = `/${language}`;

  if (!Array.isArray(navigation[language])) {
    return null;
  }

  const pageTree = new PageTree({
    items: navigation[language],
    basePath
  });
  const isMobile = device === 'xs';

  const [ isNavigationVisible, setIsNavigationVisible ] = useState(true);
  const [ activePath, setActivePath ] = useState(router.pathname);

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
      <Head>
        {
          pageTitle ?
            <title>the native web ux | { pageTitle }</title> :
            <title>the native web ux</title>
        }
        <link key='favicon' rel='icon' href='/favicon.png' type='image/png' />
        <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' />
      </Head>
      <div className={ classes.NavigationForDesktop }>
        <Sidebar>
          <NextLink href={ basePath }>
            <Link href={ basePath }>
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
        <NextLink href={ basePath }>
          <Link href={ basePath }>
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
          nonIdealState={
            <NonIdealState cause='Sorry, no pages found.'>
              <p>
                Try searching for something else!
              </p>
            </NonIdealState>
          }
          pageTree={ pageTree }
          showSearchBar={ true }
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
