import { SearchResults } from './SearchResults';
import { createUseStyles, PageTree, PageTreeItem, Theme } from '../../../../lib';
import { PageSearchClassNames, styles } from './styles';
import React, { ChangeEvent, FunctionComponent, ReactElement, useCallback, useState } from 'react';

const useStyles = createUseStyles<Theme, PageSearchClassNames>(styles);

interface PageSearchProps {
  pageTree: PageTree;
}

const PageSearch: FunctionComponent<PageSearchProps> = ({ pageTree }): ReactElement => {
  const classes = useStyles();
  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState<PageTreeItem []>([]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);

    const newResults = pageTree.search(query);

    setResults(newResults);
  }, [ query ]);

  return (
    <React.Fragment>
      <div className={ classes.SearchPanel }>
        <input
          className={ classes.SearchField }
          value={ query }
          type='search'
          autoFocus={ true }
          placeholder='Search…'
          onChange={ handleChange }
        />
      </div>
      {
        query.length > 0 ?
          (
            <div className={ classes.ResultsPanel }>
              <SearchResults query={ query } results={ results } />
            </div>
          ) : null
      }
    </React.Fragment>
  );
};

export { PageSearch };
