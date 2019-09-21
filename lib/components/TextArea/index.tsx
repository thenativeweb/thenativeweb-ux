import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  TextArea: {
    padding: '9px 12px',
    fontSize: theme.font.size.md,
    fontFamily: theme.font.family.default,
    width: '100%',
    'box-sizing': 'border-box',
    border: `1px solid`,
    borderColor: theme.color.content.border,

    '&:focus': {
      outline: 'none',
      borderColor: theme.color.interaction.focus
    },

    '&::placeholder': {
      color: theme.color.brand.darkGrey,
      fontFamily: theme.font.family.default,
      fontSize: 'inherit',
      fontWeight: 400,
      opacity: 0.5
    }
  },

  IsDisabled: {
    color: theme.color.brand.darkGrey,
    background: theme.color.brand.lightGrey
  },

  SizeSm: {
    height: `${theme.space(10)}px`
  },

  SizeMd: {
    height: `${theme.space(18)}px`
  }
});

class TextArea extends React.Component {
  constructor (props) {
    super(props);

    this.handleFocusTimeout = this.handleFocusTimeout.bind(this);
    this.handleRefChanged = this.handleRefChanged.bind(this);
  }

  componentDidMount () {
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

  componentWillUnmount () {
    clearTimeout(this.focusTimeout);
  }

  handleFocusTimeout () {
    if (this.element) {
      this.element.focus();
    }
  }

  handleRefChanged (ref) {
    this.element = ref;
  }

  render () {
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

    const componentClasses = classNames(classes.TextArea, {
      [classes.IsDisabled]: disabled === true,
      [classes.IsRequired]: required === true,
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md'
    }, className);

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

TextArea.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf([ 'sm', 'md' ]),
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

TextArea.defaultProps = {
  autoFocus: false,
  disabled: false,
  focusDelay: 0,
  required: false,
  size: 'sm',
  onBlur () {
    // Intentionally left blank
  },
  onChange () {
    // Intentionally left blank
  },
  onFocus () {
    // Intentionally left blank
  }
};

export default withStyles(styles)(TextArea);
