import styles from './styles';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../styles';
import React, { ReactElement } from 'react';

interface TextAreaProps {
  classes: Classes;
  className: string;
  disabled: boolean;
  id: string;
  name: string;
  placeholder: string;
  ref: any;
  required: boolean;
  size: 'sm' | 'md';
  style: Styles;
  value: string;
  onBlur: () => void;
  onChange: () => void;
  onFocus: () => void;
}

class TextArea extends React.Component<TextAreaProps> {
  public componentDidMount (): void {
    const { autoFocus, focusDelay } = this.props;

    if (!autoFocus) {
      return;
    }

    if (this.element) {
      this.focusTimeout = setTimeout(this.handleFocusTimeout, focusDelay);
    } else {
      clearTimeout(this.focusTimeout);
    }
  }

  public componentWillUnmount (): void {
    clearTimeout(this.focusTimeout);
  }

  protected handleFocusTimeout = (): void => {
    if (this.element) {
      this.element.focus();
    }
  };

  protected handleRefChanged = (ref: any): void => {
    this.element = ref;
  };

  public render (): ReactElement {
    const {
      classes,
      className,
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
      size
    } = this.props;

    const componentClasses = classNames(
      classes.TextArea,
      {
        [classes.IsDisabled]: disabled === true,
        [classes.IsRequired]: required === true,
        [classes.SizeSm]: size === 'sm',
        [classes.SizeMd]: size === 'md'
      },
      className
    );

    return (
      <textarea
        id={ id }
        ref={ this.handleRefChanged }
        className={ componentClasses }
        disable={ disabled ? 'disabled' : null }
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
