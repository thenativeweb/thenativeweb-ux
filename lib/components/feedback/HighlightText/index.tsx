import { createUseStyles } from '../../../styles';
import Highlighter from 'react-highlight-words';
import { Theme } from '../../../themes';
import { HighlightTextClassNames, styles } from './styles';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, HighlightTextClassNames>(styles);

interface HighlightTextProps {
  searchWords?: string [];
  children: string;
}

const HighlightText: FunctionComponent<HighlightTextProps> = ({ children, searchWords }): ReactElement | null => {
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
      className={ classes.HighlightText }
      highlightClassName={ classes.Highlight }
      searchWords={ patterns }
      textToHighlight={ children }
    />
  );
};

export { HighlightText };
