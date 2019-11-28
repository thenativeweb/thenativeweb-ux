import { Button } from '../../..';
import { Code } from '../Code';
import { formatAsPrettyString } from '../formatAsPrettyString';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import { ComponentPreviewClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement, useState } from 'react';

const useStyles = createUseStyles<Theme, ComponentPreviewClassNames>(styles);

interface ComponentPreviewProps {
  className?: string;
}

const ComponentPreview: FunctionComponent<ComponentPreviewProps> = ({ children }): ReactElement => {
  const classes = useStyles();
  const [ isCodeVisible, setIsCodeVisible ] = useState(true);
  const codePanelClassNames = classNames(classes.CodePanel, {
    [classes.CodePanelIsExpanded]: isCodeVisible
  });

  return (
    <div
      className={ classes.ComponentPreview }
    >
      <div className={ classes.Content }>
        <div className={ codePanelClassNames }>
          <Button
            isSubtle={ true }
            className={ classes.CodePanelToggleButton }
            icon='expand'
            onClick={ (): void => setIsCodeVisible(!isCodeVisible) }
          />

          <Code className={ classes.Code } language='jsx'>
            { formatAsPrettyString(children) }
          </Code>
        </div>

        <div className={ classes.PreviewPanel }>
          { children }
        </div>
      </div>
    </div>
  );
};

export { ComponentPreview };
