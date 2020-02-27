import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { prismStyles } from './prismStyles';
import { stripIndent } from 'common-tags';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Theme } from '../../../themes';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { classNames, createUseStyles } from '../../../styles';
import { CodeClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('shell', bash);
SyntaxHighlighter.registerLanguage('bash', bash);

interface CodeProps {
  id?: string;
  children: string | undefined | null;
  language?: 'javascript' | 'jsx' | 'typescript' | 'tsx' | 'shell';
  className?: string;
  type?: 'inline' | 'block';
  showLineNumbers?: boolean;
}

const useStyles = createUseStyles<Theme, CodeClassNames>(styles);

const Code: FunctionComponent<CodeProps> = ({
  children,
  className,
  id,
  language = 'javascript',
  type = 'block',
  showLineNumbers = false
}): ReactElement | null => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

  if (type === 'inline') {
    return <code id={ id }>{ children }</code>;
  }

  const componentClasses = classNames(
    classes.Code,
    {
      [classes.WithLineNumbers]: showLineNumbers
    },
    className
  );

  return (
    <div id={ id } className={ componentClasses }>
      <SyntaxHighlighter
        showLineNumbers={ showLineNumbers }
        style={ prismStyles }
        language={ language }
        customStyle={{ backgroundColor: 'none' }}
        wrapLines={ true }
        codeTagProps={{
          className: classes.CodeContainer
        }}
      >
        { stripIndent(children) }
      </SyntaxHighlighter>
    </div>
  );
};

Code.defaultProps = {
  type: 'block'
};

Code.displayName = 'Code';

export { Code };
