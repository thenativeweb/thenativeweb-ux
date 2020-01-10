import { getStyles } from './getStyles';
import { classNames, createUseStyles } from '../../../styles';
import { HighlightText, Icon, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface BreadcrumbsProps {
  className?: string;
  color?: 'light' | 'dark';
  items?: string [];
  searchWords?: string [];
  size?: 'sm' | 'md';
}

const useStyles = createUseStyles<Theme, keyof ReturnType<typeof getStyles>>(getStyles);

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  className,
  items,
  searchWords,
  color = 'dark',
  size = 'md'
}): ReactElement | null => {
  const classes = useStyles();

  if (!items) {
    return null;
  }

  const componentClasses = classNames(
    classes.Breadcrumbs,
    {
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md',
      [classes.ColorDark]: color === 'dark',
      [classes.ColorLight]: color === 'light'
    },
    className
  );

  return (
    <div className={ componentClasses }>
      {
        items.map((breadcrumb, index): ReactElement => (
          <React.Fragment key={ breadcrumb }>
            {
              index > 0 ?
                (
                  <div className={ classes.PathSeparator }>
                    <Icon name='chevron' size='sm' color='current' />
                  </div>
                ) : null
            }
            <div className={ classes.PathLabel }>
              <HighlightText searchWords={ searchWords }>{ breadcrumb }</HighlightText>
            </div>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export { Breadcrumbs };
