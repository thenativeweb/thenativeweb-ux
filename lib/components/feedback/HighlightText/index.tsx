import Highlighter from 'react-highlight-words';
import { classNames, createUseStyles } from '../../../styles';
import { HighlightTextClassNames, styles } from './styles';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<HighlightTextClassNames>(styles);

interface HighlightTextProps {
  className?: string;
  searchWords?: string [];
  children: string;
}

const HighlightText: FunctionComponent<HighlightTextProps> = ({
  className,
  children,
  searchWords
}): ReactElement | null => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

  /* eslint-disable react/jsx-no-useless-fragment */
  if (!searchWords) {
    return <Fragment>{ children }</Fragment>;
  }
  /* eslint-enable react/jsx-no-useless-fragment */

  const patterns = searchWords.map((word): string => {
    const lookupWordPattern = `(\\b${word})`;

    return lookupWordPattern;
  });

  return (
    <Highlighter
      className={ classNames(classes.HighlightText, className) }
      highlightClassName={ classes.Highlight }
      searchWords={ patterns }
      textToHighlight={ children }
    />
  );
};

HighlightText.displayName = 'HighlightText';

export { HighlightText };
