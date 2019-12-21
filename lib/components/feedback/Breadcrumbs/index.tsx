import { HighlightText } from '../HighlightText';
import { BreadcrumbsClassNames, styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import { Icon, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface BreadcrumbsProps {
  className?: string;
  items?: string [];
  searchWords?: string [];
}

const useStyles = createUseStyles<Theme, BreadcrumbsClassNames>(styles);

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  className,
  items,
  searchWords
}): ReactElement | null => {
  const classes = useStyles();

  if (!items) {
    return null;
  }

  return (
    <div className={ classNames(classes.Breadcrumbs, className) }>
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
