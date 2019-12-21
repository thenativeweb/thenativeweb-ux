import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  classNames, createUseStyles, Link, Theme
} from '../../../../../lib';
import { PageClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, PageClassNames>(styles);

interface PageProps {
  level?: number;
  title: string;
  path?: string;
}

const Page: FunctionComponent<PageProps> = ({ title, level = 3, path }): ReactElement => {
  const router = useRouter();
  const pagePathWithTrailingSlash = `${path}/${title.toLocaleLowerCase().replace(/ /ug, '')}${router.asPath.endsWith('/') ? '/' : ''}`;
  const isActive = router.asPath === pagePathWithTrailingSlash;

  // We need to create a path without an ending slash for the NextLinks.
  // Next.js will poll for urls under the hood and gets confused if urls
  // end with a slash.
  const pagePathWithoutTrailingSlash = pagePathWithTrailingSlash.replace(/\/$/ug, '');

  const classes = useStyles();

  const componentClasses = classNames(classes.Page, {
    [classes.IsActive]: isActive,
    [classes.Level2]: level === 2,
    [classes.Level3]: level === 3
  });

  return (
    <NextLink href={ pagePathWithoutTrailingSlash }>
      <Link href={ pagePathWithoutTrailingSlash } className={ componentClasses }>{ title }</Link>
    </NextLink>
  );
};

export { Page };
