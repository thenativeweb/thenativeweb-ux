import { Background } from '../../Background';
import { Code } from '../Code';
import { formatAsPrettyString } from '../formatAsPrettyString';
import { SplitView } from '../SplitView';
import { classNames, createUseStyles } from '../../../styles';
import { ComponentPreviewClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider, themes } from '../../..';

interface ComponentPreviewProps {
  className?: string;
  useAllThemes?: boolean;
  background?: Background;
  previewPadding?: boolean;
}

const useStyles = createUseStyles<ComponentPreviewClassNames>(styles);

const ComponentPreview: FunctionComponent<ComponentPreviewProps> = ({
  background = 'light',
  children,
  previewPadding,
  useAllThemes = false
}): ReactElement => {
  const classes = useStyles();

  const componentClasses = classNames(classes.ComponentPreview, {
    [classes.BackgroundDark]: background === 'dark'
  });

  return (
    <SplitView className={ componentClasses } previewPadding={ previewPadding }>
      <Code language='jsx' className={ classes.Code }>
        { formatAsPrettyString(children) }
      </Code>

      {
        useAllThemes ?
          (
            <div>
              { children }

              <hr />

              <ThemeProvider theme={ new themes.Wolkenkit() }>
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

ComponentPreview.displayName = 'ComponentPreview';

export { ComponentPreview };
