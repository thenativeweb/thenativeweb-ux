import { Theme } from '../../../themes';
import { useAutoFocus } from '../../useAutoFocus';
import { classNames, createUseStyles } from '../../../styles';
import React, { ChangeEvent, CSSProperties, FocusEvent, FunctionComponent, KeyboardEvent, ReactElement, useCallback } from 'react';
import { styles, TextBoxClassNames } from './styles';

interface TextBoxProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  focusDelay?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  style?: CSSProperties;
  type?: 'default' | 'date' | 'port' | 'time' | 'search';
  value?: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const useStyles = createUseStyles<Theme, TextBoxClassNames>(styles);

const TextBox: FunctionComponent<TextBoxProps> = ({
  autoFocus = false,
  className,
  id,
  name,
  value,
  placeholder,
  style,
  type = 'default',
  disabled = false,
  required = false,
  focusDelay = 0,
  onBlur = (): void => {
    // Intentionally left blank.
  },
  onChange = (): void => {
    // Intentionally left blank.
  },
  onEnter = (): void => {
    // Intentionally left blank.
  },
  onFocus = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const classes = useStyles();
  const elementRef = useAutoFocus<HTMLInputElement>({ isEnabled: autoFocus, delay: focusDelay });

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>): void => {
    switch (event.key) {
      case 'Enter':
        onEnter(event);
        break;
      default:
        break;
    }
  }, []);

  const componentClasses = classNames(
    classes.TextBox,
    {
      [classes.IsDisabled]: disabled,
      [classes.TypePort]: type === 'port',
      [classes.TypeTime]: type === 'time',
      [classes.TypeSearch]: type === 'search'
    },
    className
  );

  let inputType;

  switch (type) {
    case 'port':
      inputType = 'number';
      break;
    default:
      inputType = type;
  }

  return (
    <input
      id={ id }
      ref={ elementRef }
      className={ componentClasses }
      name={ name }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus }
      onKeyDown={ handleKeyDown }
      placeholder={ placeholder }
      required={ required }
      style={ style }
      type={ inputType }
      disabled={ disabled }
    />
  );
};

export { TextBox };
