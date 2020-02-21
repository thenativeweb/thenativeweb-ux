import { Chapter } from '../Chapter';
import { createUseStyles } from '../../../../styles';
import { isDomNode } from '../../../../utils/isDomNode';
import { Page } from '../Page';
import { classNames, Icon, Link, Theme } from '../../../..';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { SectionClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, SectionClassNames>(styles);

interface SectionProps {
  activePath: string;
  path: string;
  isActive?: boolean;
  title: string;
}

const Section: FunctionComponent<SectionProps> = ({
  activePath,
  children,
  path,
  title
}): ReactElement => {
  const classes = useStyles();
  const isActive = activePath.startsWith(path);

  const [ isExpanded, setIsExpanded ] = useState(isActive);

  let hasChapters = false,
      hasPages = false;

  const handleClick = useCallback((event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsExpanded(!isExpanded);
  }, [ isExpanded ]);

  useEffect((): void => {
    setIsExpanded(isActive);
  }, [ activePath ]);

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
                path,
                activePath
              });
            }

            if (
              (child as ReactElement).type === Page
            ) {
              return React.cloneElement(child as any, {
                path,
                level: 2,
                activePath
              });
            }
          })
        }
      </div>
    </div>
  );
};

export { Section };
