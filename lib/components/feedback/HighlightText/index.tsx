import color from 'color';
import { createUseStyles } from '../../../styles';
import Highlighter from 'react-highlight-words';
import { Styles } from 'jss';
import { Theme } from '../../../themes';
import React, { FunctionComponent, ReactElement } from 'react';

type HighlightTextClassNames =
  'HighlightText' |
  'Highlight';

const styles = (theme: Theme): Styles => ({
  HighlightText: {},

  Highlight: {
    background: color(theme.color.brand.highlight).
      whiten(0.9).
      fade(0.2).
      rgb().
      string(),
    padding: '0px 0 1px 0'
  }
});

const useStyles = createUseStyles<Theme, HighlightTextClassNames>(styles);

interface HighlightTextProps {
  searchWords: string [];
  children: string;
}

const HighlightText: FunctionComponent<HighlightTextProps> = ({ children, searchWords }): ReactElement | null => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

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
