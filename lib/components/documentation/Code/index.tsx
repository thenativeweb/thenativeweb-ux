// In order to create smaller bundles one can use Light versions of
// ReactSyntaxHighlighter…
//
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
//
// SyntaxHighlighter.registerLanguage('jsx', jsx);

import { prismStyles } from './prismStyles';
import { stripIndent } from 'common-tags';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import { CodeClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface CodeProps {
  children: string | undefined | null;
  language?: 'javascript' | 'jsx' | 'typescript' | 'tsx';
  className?: string;
  type?: 'inline' | 'block';
}

const useStyles = createUseStyles<Theme, CodeClassNames>(styles);

const Code: FunctionComponent<CodeProps> = ({ children, className, language = 'javascript', type = 'block' }): ReactElement | null => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

  if (type === 'inline') {
    return <code>{ children }</code>;
  }

  return (
    <pre className={ classNames(classes.Code, className) }>
      <SyntaxHighlighter style={ prismStyles } language={ language }>{ stripIndent(children) }</SyntaxHighlighter>
    </pre>
  );
};

Code.defaultProps = {
  type: 'block'
};

export { Code };
