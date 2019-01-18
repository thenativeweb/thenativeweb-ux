import Icon from '../Icon';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.js';
import { classNames, withStyles } from '../../styles';

class Dropdown extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      isFocused: false
    };
  }

  handleChange (event) {
    this.props.onChange(event.target.value);
  }

  handleFocus () {
    this.setState({
      isFocused: true
    });
  }

  handleBlur () {
    this.setState({
      isFocused: false
    });
  }

  render () {
    const { classes, emptyLabel, id, options, size, style, value } = this.props;

    const dropdownClassNames = classNames(classes.Dropdown, {
      [classes.SizeDefault]: size === 'default',
      [classes.SizeS]: size === 's',
      [classes.IsFocused]: this.state.isFocused
    });

    return (
      <div id={ id } className={ dropdownClassNames } style={ style }>
        <select key='commands' value={ value } onChange={ this.handleChange } onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
          { emptyLabel ? <option value='' key='empty-value'>{ emptyLabel }</option> : null }
          {
            options.map(option => (
              <option
                key={ option.value }
                value={ option.value }
              >
                {option.label}
              </option>
            ))
          }
        </select>
        <Icon key='icon' color='white' className={ classes.CollapseIcon } name='expand' />
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf([ 'default', 's' ])
};

Dropdown.defaultProps = {
  size: 'default'
};

export default withStyles(styles)(Dropdown);
