import { createUseStyles } from '../../../styles';
import { Styles } from 'jss';
import { Theme } from '../../../themes';
import { classNames, HighlightText } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

type KeywordsClassNames =
  'Keywords' |
  'Keyword';

const styles = (theme: Theme): Styles => ({
  Keywords: {
    'padding-top': 10,
    fontSize: 12
  },

  Keyword: {
    display: 'inline-block',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: '0px 7px 1px 7px',
    marginRight: 8,
    color: theme.color.brand.grayDark,
    marginBottom: 8
  }
});

const useStyles = createUseStyles<Theme, KeywordsClassNames>(styles);

interface KeywordsProps {
  className?: string;
  keywords?: string [];
  searchWords: string [];
}

const Keywords: FunctionComponent<KeywordsProps> = ({ className, keywords, searchWords }): ReactElement | null => {
  const classes = useStyles();

  if (!keywords) {
    return null;
  }

  return (
    <div className={ classNames(classes.Keywords, className) }>
      { keywords.sort((left, right): number => left.localeCompare(right)).map((keyword): ReactElement => (
        <span key={ keyword } className={ classes.Keyword }>
          <HighlightText searchWords={ searchWords }>{ keyword }</HighlightText>
        </span>
      ))}
    </div>
  );
};

export { Keywords };
