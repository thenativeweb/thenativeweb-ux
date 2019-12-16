import { Chapter } from './Chapter';
import { isDomNode } from '../../../lib/utils/isDomNode';
import { Page } from './Page';
import { Styles } from 'jss';
import { useRouter } from 'next/router';
import {
  classNames, createUseStyles, Icon, Link, Theme
} from '../../../lib';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode, useCallback, useState } from 'react';

type SectionClassNames =
  'Section' |
  'Title' |
  'ExpandIcon' |
  'IsActive' |
  'IsExpanded' |
  'HasChapters' |
  'HasPages' |
  'Chapters';

const useStyles = createUseStyles<Theme, SectionClassNames>((theme: Theme): Styles => ({
  Section: {
    '&:first-child': {
      marginTop: theme.space(1.5)
    }
  },

  Title: {
    display: 'flex',
    padding: [ theme.space(1), theme.space(2), theme.space(1), theme.space(2) ],
    margin: 0,
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.color.brand.grayDark,
    fontWeight: 600,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  ExpandIcon: {
    width: 14,
    height: 14,
    transform: 'rotate(0)',
    transition: 'transform 150ms ease-in-out',
    marginTop: 2,
    marginRight: 3
  },

  IsExpanded: {
    '& $Title': {
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
    '& $Title': {
      fontWeight: 800,
      opacity: 1
    }
  },

  HasChapters: {
    '& $Chapters': {
    }
  },

  HasPages: {
    '& $Chapters': {}
  },

  Chapters: {
    display: 'none',

    '& ul': {
      listStyle: 'none'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Title: {
      fontSize: theme.font.size.md
    }
  },

  [theme.breakpoints.up('md')]: {
    Title: {
      fontSize: theme.font.size.lg
    }
  }
}));

interface SectionProps {
  isActive?: boolean;
  title: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, title }): ReactElement => {
  const router = useRouter();
  const path = `/${title.toLocaleLowerCase()}`;
  const isActive = router.asPath.startsWith(path);

  let hasChapters = false,
      hasPages = false;

  const classes = useStyles();
  const [ isExpanded, setIsExpanded ] = useState(isActive);

  const handleClick = useCallback((event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsExpanded(!isExpanded);
  }, [ isExpanded ]);

  React.Children.forEach(children, (child: ReactNode): void => {
    if (isDomNode(child)) {
      return;
    }

    if ((child as ReactElement).type === Page) {
      hasPages = true;
    }

    if ((child as ReactElement).type === Chapter) {
      hasChapters = true;
    }
  });

  const componentClasses = classNames(classes.Section, {
    [classes.IsActive]: isActive,
    [classes.IsExpanded]: isExpanded,
    [classes.HasChapters]: hasChapters,
    [classes.HasPages]: hasPages
  });

  return (
    <div className={ componentClasses }>
      <Link href='#' className={ classes.Title } onClick={ handleClick }>
        <Icon className={ classes.ExpandIcon } name='expand' color='current' />
        <span>{ title }</span>
      </Link>
      <div className={ classes.Chapters }>
        {
          React.Children.map(children, (child: ReactNode): ReactNode => {
            if (isDomNode(child)) {
              return child;
            }

            if (
              (child as ReactElement).type === Chapter ||
              (child as ReactElement).type === Page
            ) {
              return React.cloneElement(child as any, {
                path
              });
            }
          })
        }
      </div>
    </div>
  );
};

export { Section };
