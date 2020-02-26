import { Button } from '../../..';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement, ReactNode, useState } from 'react';
import { SplitViewClassNames, styles } from './styles';

const useStyles = createUseStyles<Theme, SplitViewClassNames>(styles);

interface ComponentPreviewProps {
  className?: string;
  children: [ ReactNode, ReactNode ];
  previewPadding?: boolean;
}

const SplitView: FunctionComponent<ComponentPreviewProps> = ({
  children,
  className,
  previewPadding = true
}): ReactElement | null => {
  const classes = useStyles();
  const [ isCodeVisible, setIsCodeVisible ] = useState(true);
  const componentClasses = classNames(classes.SplitView, {
    [classes.SplitViewWithCodeVisible]: isCodeVisible,
    [classes.WithPreviewPadding]: previewPadding
  }, className);

  if (!Array.isArray(children)) {
    return null;
  }

  return (
    <div
      className={ componentClasses }
    >
      <div className={ classes.TogglePanel }>
        <Button
          isSubtle={ true }
          className={ classes.ToggleButtonCode }
          icon='expand'
          onClick={ (): void => setIsCodeVisible(!isCodeVisible) }
        />
      </div>

      <div className={ classes.CodePanel }>
        { children[0] }
      </div>

      <div className={ classes.PreviewPanel }>
        { children[1] }
      </div>
    </div>
  );
};

SplitView.displayName = 'SplitView';

export { SplitView };
