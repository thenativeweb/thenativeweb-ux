import { createUseStyles } from '../../../../styles';
import { isDomNode } from '../../../../utils/isDomNode';
import { Page } from '../Page';
import { useRouteChange } from '../../useRouteChange';
import { useRouter } from 'next/router';
import { ChapterClassNames, styles } from './styles';
import {
  classNames, Icon, Link, Theme
} from '../../../..';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode, useCallback, useState } from 'react';

const useStyles = createUseStyles<Theme, ChapterClassNames>(styles);

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
