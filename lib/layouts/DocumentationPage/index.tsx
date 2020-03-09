import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Breadcrumbs,
  Footer,
  getLanguageFromUrl,
  HorizontalBar,
  Link,
  MobileToggle,
  MultiLanguagePageTree,
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
} from '../..';
import { classNames, createUseStyles } from '../../styles';
import { DocumentationPageClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';

const useStyles = createUseStyles<Theme, DocumentationPageClassNames>(styles);

interface DocumentationPageProps {
  linkToImprint?: string;
  linkToPrivacyPolicy?: string;
  navigation: MultiLanguagePageTree;
  siteTitle: string;
  pageTitle?: string;
  productName: string;
  yearOfCreation: number;
}

const DocumentationPage: FunctionComponent<DocumentationPageProps> = ({
  linkToImprint,
  linkToPrivacyPolicy,
  children,
  navigation,
  pageTitle,
  productName,
  siteTitle,
  yearOfCreation
}): ReactElement | null => {
  const router = useRouter();
  const classes = useStyles();
  const device = useDevice();
  const isMobile = device === 'xs';

  const [ isNavigationVisible, setIsNavigationVisible ] = useState(true);
  const [ activePath, setActivePath ] = useState(router.pathname);

  const language = getLanguageFromUrl(router.pathname);
  const basePath = `/${language}`;
  const navigationItemsForLanguage = navigation[language];

  if (!Array.isArray(navigationItemsForLanguage)) {
    return null;
  }

  const pageTree = new PageTree({
    items: navigationItemsForLanguage,
    basePath
  });

  const currentPage = pageTree.getPageItemByPath(activePath);

  const componentClasses = classNames(classes.DocumentationPage, {
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
            <title>{ siteTitle } | { pageTitle }</title> :
            <title>{ siteTitle }{ currentPage ? ` | ${currentPage.title}` : '' }</title>
        }
        <link key='favicon' rel='icon' href='/favicon.png' type='image/png' />
        <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' />
      </Head>
      <div className={ classes.NavigationForDesktop }>
        <Sidebar>
          <NextLink href={ basePath }>
            <Link href={ basePath }>
              <SidebarBrand>
                <Product name={ productName } />
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
            <Product name={ productName } size='sm' />
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
        <article>
          {
            currentPage && (
              <HorizontalBar paddingHorizontal='none' className={ classes.ContentTopBar }>
                <Breadcrumbs items={ currentPage.breadcrumbs } size='md' color='light' />
              </HorizontalBar>
            )
          }

          { children }
        </article>

        <Footer
          linkToGithub={ currentPage && `https://github.com/thenativeweb/thenativeweb-ux/edit/master/styleguide/pages${currentPage.path}.tsx` }
          linkToImprint={ linkToImprint }
          linkToPrivacyPolicy={ linkToPrivacyPolicy }
          yearOfCreation={ yearOfCreation }
        />
      </div>

    </div>
  );
};

export { DocumentationPage };
