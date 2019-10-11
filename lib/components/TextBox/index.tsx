import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { ChangeEvent, createRef, CSSProperties, FocusEvent, KeyboardEvent, ReactElement } from 'react';

interface TextBoxProps {
  autoFocus?: boolean;
  classes: Classes;
  className?: string;
  disabled?: boolean;
  focusDelay?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  style?: CSSProperties;
  type?: 'default' | 'date' | 'port' | 'time';
  value?: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

type TextBoxDefaultProps = Pick<TextBoxProps, 'autoFocus' | 'disabled' | 'type' | 'required' | 'focusDelay' | 'onFocus' | 'onChange' | 'onEnter' | 'onBlur'>;

class TextBox extends React.Component<TextBoxProps> {
  public static defaultProps: TextBoxDefaultProps = {
    autoFocus: false,
    type: 'default',
    disabled: false,
    required: false,
    focusDelay: 0,
    onBlur (): void {
      // Intentionally left blank.
    },
    onChange (): void {
      // Intentionally left blank.
    },
    onEnter (): void {
      // Intentionally left blank.
    },
    onFocus (): void {
      // Intentionally left blank.
    }
  };

  public componentDidMount (): void {
    const { autoFocus, focusDelay } = this.props;

    if (!autoFocus) {
      return;
    }

    this.focusTimeout = setTimeout(this.handleFocusTimeout, focusDelay);
  }

  public componentWillUnmount (): void {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
    }
  }

  private readonly elementRef = createRef<HTMLInputElement>();

  private focusTimeout: number | undefined;

  protected handleFocusTimeout = (): void => {
    if (this.elementRef.current) {
      this.elementRef.current.focus();
    }
  };

  protected handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const { onEnter } = this.props;

    switch (event.key) {
      case 'Enter':
        if (onEnter) {
          onEnter(event);
        }
        break;
      default:
        break;
    }
  };

  public render (): ReactElement {
    const {
      className,
      classes,
      disabled,
      id,
      name,
      value,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      style,
      type
    } = this.props;

    const componentClasses = classNames(
      classes.TextBox,
      {
        [classes.TypePort]: type === 'port',
        [classes.TypeTime]: type === 'time',
        [classes.IsDisabled]: disabled === true,
        [classes.IsRequired]: required === true
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
        ref={ this.elementRef }
        className={ componentClasses }
        name={ name }
        value={ value }
        onBlur={ onBlur }
        onChange={ onChange }
        onFocus={ onFocus }
        onKeyDown={ this.handleKeyDown }
        placeholder={ placeholder }
        required={ required }
        style={ style }
        type={ inputType }
        disabled={ disabled }
      />
    );
  }
}

export default withStyles(styles)(TextBox);
