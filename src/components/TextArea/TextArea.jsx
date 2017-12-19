import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

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
    const { className, disabled, id, name, value, onBlur, onChange, onFocus, placeholder, required, size } = this.props;

    const componentClasses = classNames(styles.TextArea, {
      [styles.IsDisabled]: disabled === true,
      [styles.IsRequired]: required === true,
      [styles.SizeS]: size === 's',
      [styles.SizeM]: size === 'm'
    }, className);

    return (
      <textarea
        id={ id }
        ref={ this.handleRefChanged }
        className={ componentClasses }
        name={ name }
        value={ value }
        onBlur={ onBlur }
        onChange={ onChange }
        onFocus={ onFocus }
        placeholder={ placeholder }
        required={ required }
        disable={ disabled ? 'disabled' : null }
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
  size: PropTypes.oneOf([ 's', 'm' ]),
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
  size: 's',
  onBlur () {},
  onChange () {},
  onFocus () {}
};

export default TextArea;
