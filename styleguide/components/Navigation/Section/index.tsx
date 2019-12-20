import { Chapter } from '../Chapter';
import { isDomNode } from '../../../../lib/utils/isDomNode';
import { Page } from '../Page';
import { useRouteChange } from '../useRouteChange';
import { useRouter } from 'next/router';
import {
  classNames, createUseStyles, Icon, Link, Theme
} from '../../../../lib';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode, useCallback, useState } from 'react';
import { SectionClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, SectionClassNames>(styles);

interface SectionProps {
  isActive?: boolean;
  title: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, title }): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const path = `/${title.toLocaleLowerCase()}`;
  let isActive = router.asPath.startsWith(path);

  const [ isExpanded, setIsExpanded ] = useState(isActive);

  let hasChapters = false,
      hasPages = false;

  useRouteChange((url): void => {
    isActive = url.startsWith(path);
    setIsExpanded(isActive);
  });

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
              (child as ReactElement).type === Chapter
            ) {
              return React.cloneElement(child as any, {
                path
              });
            }

            if (
              (child as ReactElement).type === Page
            ) {
              return React.cloneElement(child as any, {
                path,
                level: 2
              });
            }
          })
        }
      </div>
    </div>
  );
};

export { Section };
