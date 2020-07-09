import { createUseStyles } from '../../../styles';
import { classNames, HighlightText } from '../../..';
import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { styles, TagsClassNames } from './styles';

const useStyles = createUseStyles<TagsClassNames>(styles);

interface TagsProps {
  className?: string;
  items?: string [];
  searchWords?: string [];
}

const Tags: FunctionComponent<TagsProps> = ({ className, items, searchWords }): ReactElement | null => {
  const classes = useStyles();

  if (!items) {
    return null;
  }

  const sortedTags = useMemo((): string [] => items.sort((left, right): number => left.localeCompare(right)), [ Tags ]);

  return (
    <div className={ classNames(classes.Tags, className) }>
      { sortedTags.map((tag): ReactElement => (
        <span key={ tag } className={ classes.Tag }>
          <HighlightText searchWords={ searchWords }>{ tag }</HighlightText>
        </span>
      ))}
    </div>
  );
};

Tags.displayName = 'Tags';

export { Tags };
