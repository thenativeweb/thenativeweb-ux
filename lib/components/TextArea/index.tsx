import styles from './styles';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../styles';
import React, { ChangeEvent, createRef, FocusEvent, ReactElement } from 'react';

interface TextAreaProps {
  autoFocus?: boolean;
  focusDelay?: number;
  classes: Classes;
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  ref?: any;
  required?: boolean;
  size?: 'sm' | 'md';
  style?: Styles;
  value?: string;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

type TextAreaDefaultProps = Pick<TextAreaProps, 'autoFocus' | 'required' | 'size' | 'onFocus' | 'onChange' | 'onBlur'>;

class TextArea extends React.Component<TextAreaProps> {
  public static defaultProps: TextAreaDefaultProps = {
    autoFocus: false,
    required: false,
    size: 'md',
    onBlur (): void {
      // Intentionally left blank.
    },
    onChange (): void {
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

  private readonly elementRef = createRef<HTMLTextAreaElement>();

  private focusTimeout: number | undefined;

  protected handleFocusTimeout = (): void => {
    if (this.elementRef.current) {
      this.elementRef.current.focus();
    }
  };

  public render (): ReactElement {
    const {
      classes,
      className,
      id,
      name,
      value,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      style,
      size
    } = this.props;

    const componentClasses = classNames(
      classes.TextArea,
      {
        [classes.IsRequired]: required === true,
        [classes.SizeSm]: size === 'sm',
        [classes.SizeMd]: size === 'md'
      },
      className
    );

    return (
      <textarea
        id={ id }
        ref={ this.elementRef }
        className={ componentClasses }
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
  }
}

export default withStyles(styles)(TextArea);
