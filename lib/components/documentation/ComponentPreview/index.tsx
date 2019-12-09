import { Code } from '../Code';
import { formatAsPrettyString } from '../formatAsPrettyString';
import { SplitView } from '../SplitView';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import { ComponentPreviewClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider, themes } from '../../..';

interface ComponentPreviewProps {
  className?: string;
  useAllThemes?: boolean;
  background?: 'light' | 'dark';
}

const useStyles = createUseStyles<Theme, ComponentPreviewClassNames>(styles);

const ComponentPreview: FunctionComponent<ComponentPreviewProps> = ({ background = 'light', children, useAllThemes = false }): ReactElement => {
  const classes = useStyles();

  const componentClasses = classNames(classes.ComponentPreview, {
    [classes.BackgroundDark]: background === 'dark'
  });

  return (
    <SplitView className={ componentClasses }>
      <Code language='jsx' className={ classes.Code }>
        { formatAsPrettyString(children) }
      </Code>

      {
        useAllThemes ?
          (
            <div>
              { children }

              <hr />

              <ThemeProvider theme={ themes.wolkenkit }>
                <div>
                  { children }
                </div>
              </ThemeProvider>
            </div>
          ) :
          children
      }
    </SplitView>
  );
};

export { ComponentPreview };
