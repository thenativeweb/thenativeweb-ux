import { Theme } from '../../../themes';
import { useAutoFocus } from '../../useAutoFocus';
import { classNames, createUseStyles } from '../../../styles';
import React, { ChangeEvent, CSSProperties, FocusEvent, FunctionComponent, ReactElement } from 'react';
import { styles, TextAreaClassNames } from './styles';

interface TextAreaProps {
  autoFocus?: boolean;
  focusDelay?: number;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  ref?: any;
  required?: boolean;
  size?: 'sm' | 'md';
  style?: CSSProperties;
  value?: string;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

const useStyles = createUseStyles<Theme, TextAreaClassNames>(styles);

const TextArea: FunctionComponent<TextAreaProps> = ({
  autoFocus = false,
  className,
  disabled = false,
  focusDelay = 0,
  id,
  name,
  value,
  placeholder,
  required = false,
  style,
  size = 'md',
  onBlur = (): void => {
    // Intentionally left blank.
  },
  onChange = (): void => {
    // Intentionally left blank.
  },
  onFocus = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const classes = useStyles();
  const elementRef = useAutoFocus<HTMLTextAreaElement>({ isEnabled: autoFocus, delay: focusDelay });

  const componentClasses = classNames(
    classes.TextArea,
    {
      [classes.IsDisabled]: disabled,
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md'
    },
    className
  );

  return (
    <textarea
      id={ id }
      ref={ elementRef }
      className={ componentClasses }
      disabled={ disabled }
      name={ name }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus }
      placeholder={ placeholder }
      required={ required }
      style={ style }
    />
  );
};

TextArea.displayName = 'TextArea';

export { TextArea };
