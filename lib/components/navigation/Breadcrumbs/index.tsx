import { getStyles } from './getStyles';
import { classNames, createUseStyles } from '../../../styles';
import { HighlightText, Icon, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface BreadcrumbsProps {
  className?: string;
  color?: 'light' | 'dark';
  id?: string;
  items?: string [];
  searchWords?: string [];
  size?: 'sm' | 'md';
}

const useStyles = createUseStyles<Theme, keyof ReturnType<typeof getStyles>>(getStyles);

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  className,
  color = 'dark',
  id,
  items,
  searchWords,
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
    <div id={ id } className={ componentClasses }>
      {
        items.map((breadcrumb, index): ReactElement => (
          <React.Fragment key={ breadcrumb }>
            {
              index > 0 ?
                (
                  <div className={ classes.Separator }>
                    <Icon name='chevron' size='sm' color='current' />
                  </div>
                ) : null
            }
            <div className={ classes.Breadcrumb }>
              <HighlightText searchWords={ searchWords }>{ breadcrumb }</HighlightText>
            </div>
          </React.Fragment>
        ))
      }
    </div>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
