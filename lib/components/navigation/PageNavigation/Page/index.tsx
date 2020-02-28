import { createUseStyles } from '../../../../styles';
import { classNames, Link, Theme } from '../../../..';
import { PageClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, PageClassNames>(styles);

interface PageProps {
  activePath: string;
  level?: number;
  title: string;
  path?: string;
}

const Page: FunctionComponent<PageProps> = ({
  activePath,
  title,
  level = 2,
  path
}): ReactElement => {
  const pagePathWithTrailingSlash = `${path}${activePath.endsWith('/') ? '/' : ''}`;
  const isActive = activePath === pagePathWithTrailingSlash;

  // We need to create a path without an ending slash for the NextLinks.
  // Next.js will poll for urls under the hood and gets confused if urls
  // end with a slash.
  const pagePathWithoutTrailingSlash = pagePathWithTrailingSlash.replace(/\/$/ug, '');

  const classes = useStyles();

  const componentClasses = classNames(classes.Page, {
    [classes.IsActive]: isActive
  }, `Level${level}`);

  return (
    <Link href={ pagePathWithoutTrailingSlash } className={ componentClasses }>{ title }</Link>
  );
};

Page.displayName = 'Page';

export { Page };
