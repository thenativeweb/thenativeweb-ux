import { Theme } from '../../themes';
import { classNames, createUseStyles } from '../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement, useCallback } from 'react';
import { renderDefaultToggle, RenderToggleOptions } from './renderDefaultToggle';
import { styles, ToggleClassNames } from './styles';

interface ToggleProps {
  values: string [];
  selectedValue: string;
  children?: ({ value, isSelected, changeValue, classes }: RenderToggleOptions) => ReactElement;
  className?: string;
  id?: string;
  onChange?: (newValue: string) => void;
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, ToggleClassNames>(styles);

const Toggle: FunctionComponent<ToggleProps> = ({
  id,
  className,
  children = renderDefaultToggle,
  selectedValue,
  values,
  style,
  onChange
}): ReactElement => {
  const classes = useStyles();
  const handleValueChange = useCallback((newValue: string): void => {
    if (onChange) {
      onChange(newValue);
    }
  }, []);

  const componentClasses = classNames(classes.Toggle, className);

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      {values.map((value): ReactElement => children({
        value,
        isSelected: selectedValue === value,
        changeValue: handleValueChange,
        classes
      }))}
    </div>
  );
};

export { Toggle };
