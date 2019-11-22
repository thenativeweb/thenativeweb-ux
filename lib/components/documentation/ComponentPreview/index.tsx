import { Button } from '../../..';
import { Code } from '../Code';
import { createUseStyles } from '../../../styles';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { styles } from './styles';
import React, { FunctionComponent, ReactElement, useState } from 'react';

const useStyles = createUseStyles(styles);

interface ComponentPreviewProps {
  className?: string;
}

const ComponentPreview: FunctionComponent<ComponentPreviewProps> = ({ children }): ReactElement => {
  const classes = useStyles();
  const [ isCodeVisible, setIsCodeVisible ] = useState(false);

  //
  // const previewAsString = ReactDOMServer.renderToStaticMarkup(<ThemeProvider>{ children }</ThemeProvider>);

  return (
    <div
      className={ classes.ComponentPreview }
    >
      <div className={ classes.Preview }>
        { children }
      </div>

      <Button
        isSubtle={ true }
        icon={ isCodeVisible ? 'expand' : 'chevron' }
        onClick={ (): void => setIsCodeVisible(!isCodeVisible) }
      >
        Source Code
      </Button>

      {
        isCodeVisible ?
          (
            <Code language='jsx'>
              { reactElementToJSXString(children, { showFunctions: false }) }
            </Code>
          ) :
          null
      }
    </div>
  );
};

export { ComponentPreview };
