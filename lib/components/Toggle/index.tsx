import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement, useCallback } from 'react';
import renderDefaultToggle, { RenderToggleOptions } from './renderDefaultToggle';

interface ToggleProps {
  classes: Classes;
  values: string [];
  selectedValue: string;
  children: ({ value, isSelected, changeValue, classes }: RenderToggleOptions) => ReactElement;
  className?: string;
  id?: string;
  onChange?: (newValue: string) => void;
  style?: CSSProperties;
}

const Toggle: FunctionComponent<ToggleProps> = ({
  id,
  classes,
  className,
  children = renderDefaultToggle,
  selectedValue,
  values,
  style,
  onChange
}): ReactElement => {
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

export default withStyles(styles)(Toggle);
