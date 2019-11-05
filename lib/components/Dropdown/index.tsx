import { classNames, createUseStyles } from '../../styles';
import { Icon, Theme } from '../..';
import React, { CSSProperties, FormEvent, FunctionComponent, ReactElement, useCallback, useState } from 'react';
import styles, { DropdownClassNames } from './styles';

export interface DropdownOption {
  label: string;
  value: string;
}

type DropDownSize = 'sm' | 'md';

interface DropdownProps {
  options: DropdownOption [];
  value: string;
  emptyLabel?: string;
  id?: string;
  size?: DropDownSize;
  style?: CSSProperties;
  onChange?: (value: string) => void;
}

const useStyles = createUseStyles<Theme, DropdownClassNames>(styles);

const Dropdown: FunctionComponent<DropdownProps> = ({
  emptyLabel,
  id,
  options,
  size = 'md',
  style,
  value,
  onChange
}): ReactElement => {
  const classes = useStyles();

  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>): void => {
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  }, [ onChange ]);

  const [ isFocused, setIsFocused ] = useState(false);

  const dropdownClassNames = classNames(classes.Dropdown, {
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.IsFocused]: isFocused
  });

  return (
    <div id={ id } className={ dropdownClassNames } style={ style }>
      <select
        value={ value }
        onChange={ handleChange }
        onFocus={ (): void => setIsFocused(true) }
        onBlur={ (): void => setIsFocused(false) }
      >
        { emptyLabel ? <option value='' key='empty-value'>{ emptyLabel }</option> : null }
        {
          options.map((option): ReactElement => (
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
};

export default Dropdown;
