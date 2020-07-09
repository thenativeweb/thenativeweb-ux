import { createUseStyles } from '../../../../styles';
import { classNames, Icon, Link } from '../../../..';
import { PageGroupClassNames, styles } from './styles';
import React, { FunctionComponent, MouseEvent, ReactElement, useCallback, useEffect, useState } from 'react';

const useStyles = createUseStyles<PageGroupClassNames>(styles);

interface PageGroupProps {
  activePath: string;
  path: string;
  isActive?: boolean;
  title: string;
  level: number;
}

const PageGroup: FunctionComponent<PageGroupProps> = ({
  activePath,
  children,
  path,
  title,
  level
}): ReactElement => {
  const classes = useStyles();
  const isActive = activePath.startsWith(path);

  const [ isExpanded, setIsExpanded ] = useState(isActive);

  const handleClick = useCallback((event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsExpanded(!isExpanded);
  }, [ isExpanded ]);

  useEffect((): void => {
    setIsExpanded(isActive);
  }, [ activePath ]);

  const componentClasses = classNames(classes.PageGroup, {
    [classes.IsActive]: isActive,
    [classes.IsExpanded]: isExpanded,
    [classes.IsCollapsed]: !isExpanded
  }, `Level${level}`);

  return (
    <div className={ componentClasses }>
      <Link href='#' className={ classes.Title } onClick={ handleClick }>
        <Icon className={ classes.ExpandIcon } name='expand' color='current' />
        <span>{ title }</span>
      </Link>
      <div className={ classes.Children }>
        { children }
      </div>
    </div>
  );
};

PageGroup.displayName = 'PageGroup';

export { PageGroup };
