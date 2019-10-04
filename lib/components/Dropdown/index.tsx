import { Classes } from 'jss';
import Icon from '../Icon';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { CSSProperties, FormEvent, ReactNode } from 'react';

interface Option {
  label: string;
  value: string;
}

type DropDownSize = 'sm' | 'md';

interface DropdownProps {
  classes: Classes;
  options: Option [];
  value: string;
  emptyLabel?: string;
  id?: string;
  size?: DropDownSize;
  style?: CSSProperties;
  onChange?: (value: string) => void;
}

interface DropdownState {
  isFocused: boolean;
}

class Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
  public static defaultProps = {
    size: 'md' as DropDownSize,
    emptyLabel: 'Choose an option…'
  };

  public constructor (props: DropdownProps) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  public handleChange = (event: FormEvent<HTMLSelectElement>): void => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };

  public handleFocus = (): void => {
    this.setState({
      isFocused: true
    });
  };

  public handleBlur = (): void => {
    this.setState({
      isFocused: false
    });
  };

  public render (): ReactNode {
    const { classes, emptyLabel, id, options, size, style, value } = this.props;
    const { isFocused } = this.state;

    const dropdownClassNames = classNames(classes.Dropdown, {
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md',
      [classes.IsFocused]: isFocused
    });

    return (
      <div id={ id } className={ dropdownClassNames } style={ style }>
        <select key='commands' value={ value } onChange={ this.handleChange } onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
          { emptyLabel ? <option value='' key='empty-value'>{ emptyLabel }</option> : null }
          {
            options.map((option): ReactNode => (
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

export default withStyles(styles)(Dropdown);
