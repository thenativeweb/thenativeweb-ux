import color from 'color';
import NextLink from 'next/link';
import { Styles } from 'jss';
import { useRouter } from 'next/router';
import {
  classNames, createUseStyles, Link, Theme
} from '../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';

type PageClassNames =
  'Page' |
  'Level2' |
  'Level3' |
  'IsActive';

const useStyles = createUseStyles<Theme, PageClassNames>((theme: Theme): Styles => ({
  Page: {
    display: 'block',
    color: theme.color.brand.gray,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  Level2: {
    padding: [ theme.space(0.5), theme.space(2), theme.space(0.5), theme.space(4.5) ]
  },

  Level3: {
    padding: [ theme.space(0.5), theme.space(2), theme.space(0.5), theme.space(6) ]
  },

  IsActive: {
    borderLeft: '1px solid',
    borderLeftColor: color(theme.color.brand.highlight).
      darken(0.2).
      rgb().
      string(),
    background: theme.color.brand.highlight,
    color: theme.color.brand.white,
    fontWeight: 600,

    '&:hover': {
      color: theme.color.brand.white
    }
  },

  [theme.breakpoints.up('xs')]: {
    Page: {
      fontSize: theme.font.size.md
    }
  }

  // [theme.breakpoints.up('xs')]: {
  //   Page: {
  //     fontSize: theme.font.size.sm
  //   }
  // },

  // [theme.breakpoints.up('md')]: {
  //   Page: {
  //     fontSize: theme.font.size.md
  //   }
  // }
}));

interface PageProps {
  level?: number;
  title: string;
  path?: string;
}

const Page: FunctionComponent<PageProps> = ({ title, level = 3, path }): ReactElement => {
  const router = useRouter();
  const pagePath = `${path}/${title.toLocaleLowerCase().replace(/ /ug, '')}${router.asPath.endsWith('/') ? '/' : ''}`;
  const isActive = router.asPath === pagePath;

  const classes = useStyles();

  const componentClasses = classNames(classes.Page, {
    [classes.IsActive]: isActive,
    [classes.Level2]: level === 2,
    [classes.Level3]: level === 3
  });

  return (
    <NextLink href={ pagePath }><Link href={ pagePath } className={ componentClasses }>{ title }</Link></NextLink>
  );
};

export { Page };
