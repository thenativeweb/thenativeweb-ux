//
// import SyntaxHighlighter from 'react-syntax-highlighter';

// import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

// SyntaxHighlighter.registerLanguage('jsx', jsx);

import { createUseStyles } from '../../../styles';
import { prismStyles } from './prismStyles';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Theme } from '../../../themes';
import { CodeClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface CodeProps {
  children: string;
  language?: 'javascript' | 'jsx';
  className?: string;
  type?: 'inline' | 'block';
}

const useStyles = createUseStyles<Theme, CodeClassNames>(styles);

const Code: FunctionComponent<CodeProps> = ({ children, language = 'javascript', type = 'block' }): ReactElement => {
  const classes = useStyles();

  if (type === 'inline') {
    return <code>{ children }</code>;
  }

  return (
    <pre className={ classes.Code }>
      <SyntaxHighlighter style={ prismStyles } language={ language }>{ children }</SyntaxHighlighter>
    </pre>
  );
};

Code.defaultProps = {
  type: 'block'
};

export { Code };
