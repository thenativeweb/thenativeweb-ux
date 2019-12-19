import color from 'color';
import { isDomNode } from '../../../lib/utils/isDomNode';
import { Page } from './Page';
import { Styles } from 'jss';
import { useRouteChange } from './useRouteChange';
import { useRouter } from 'next/router';
import {
  classNames, createUseStyles, Icon, Link, Theme
} from '../../../lib';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode, useCallback, useState } from 'react';

type ChapterClassNames =
  'Chapter' |
  'Title' |
  'ExpandIcon' |
  'IsActive' |
  'IsExpanded' |
  'Chapters';

const useStyles = createUseStyles<Theme, ChapterClassNames>((theme: Theme): Styles => ({
  Chapter: {
    position: 'relative'
  },

  Title: {
    display: 'flex',
    padding: [ theme.space(1), theme.space(2), theme.space(1), theme.space(4) ],
    margin: 0,
    lineHeight: 1.1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.color.brand.gray,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  ExpandIcon: {
    width: 12,
    height: 12,
    transform: 'rotate(0deg)',
    transition: 'transform 150ms ease-in-out',
    marginTop: 3,
    marginRight: 3
  },

  IsExpanded: {
    '& $Title': {
      display: 'flex',
      alignItems: 'flex-start',
      paddingBottom: theme.space(1)
    },

    '& $ExpandIcon': {
      transform: 'rotate(90deg)'
    },

    '& $Chapters': {
      display: 'block'
    }
  },

  IsActive: {
    '&:after': {
      content: '""',
      position: 'absolute',
      top: theme.space(1),
      bottom: 0,
      left: theme.space(2) + 6,
      width: 2,
      background: color(theme.color.brand.grayDark).alpha(0.5).rgb().toString(),
      zIndex: theme.zIndices.contentOverlay + 1,
      opacity: 0.9
    },

    '& $Title': {
      color: theme.color.brand.grayDark,
      fontWeight: 600,

      '&:hover': {
        color: theme.color.brand.highlight
      }
    }
  },

  Chapters: {
    padding: 0,
    display: 'none',

    '& ul': {
      listStyle: 'none'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Title: {
      fontSize: theme.font.size.md
    }
  }
}));

interface ChapterProps {
  isActive?: boolean;
  title: string;
  path?: string;
}

const Chapter: FunctionComponent<ChapterProps> = ({ children, title, path }): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const chapterPath = `${path}/${title.toLocaleLowerCase()}`;
  let isActive = router.asPath.startsWith(chapterPath);

  const [ isExpanded, setIsExpanded ] = useState(isActive);

  useRouteChange((url): void => {
    isActive = url.startsWith(chapterPath);
    setIsExpanded(isActive);
  });

  const handleClick = useCallback((event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsExpanded(!isExpanded);
  }, [ isExpanded ]);

  const componentClasses = classNames(classes.Chapter, {
    [classes.IsActive]: isActive,
    [classes.IsExpanded]: isExpanded
  });

  return (
    <div className={ componentClasses }>
      <Link href='#' className={ classes.Title } onClick={ handleClick }>
        <Icon className={ classes.ExpandIcon } name='expand' color='current' />
        <span>{ title }</span>
      </Link>
      <div className={ classes.Chapters }>
        <ul>
          {
            React.Children.map(children, (child: ReactNode): ReactNode => {
              if (isDomNode(child)) {
                return child;
              }

              if ((child as ReactElement).type === Page) {
                return React.createElement('li', null, React.cloneElement(child as any, {
                  path: chapterPath
                }));
              }
            })
          }
        </ul>
      </div>
    </div>
  );
};

export { Chapter };
