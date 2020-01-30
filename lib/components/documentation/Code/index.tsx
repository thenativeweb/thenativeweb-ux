import { prismStyles } from './prismStyles';
import { stripIndent } from 'common-tags';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import { CodeClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface CodeProps {
  id?: string;
  children: string | undefined | null;
  language?: 'javascript' | 'jsx' | 'typescript' | 'tsx' | 'shell';
  className?: string;
  type?: 'inline' | 'block';
}

const useStyles = createUseStyles<Theme, CodeClassNames>(styles);

const Code: FunctionComponent<CodeProps> = ({
  children,
  className,
  id,
  language = 'javascript',
  type = 'block'
}): ReactElement | null => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

  if (type === 'inline') {
    return <code id={ id }>{ children }</code>;
  }

  return (
    <pre id={ id } className={ classNames(classes.Code, className) }>
      <SyntaxHighlighter style={ prismStyles } language={ language }>{ stripIndent(children) }</SyntaxHighlighter>
    </pre>
  );
};

Code.defaultProps = {
  type: 'block'
};

export { Code };
