import { Icon } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { DropdownClassNames, styles } from './styles';
import React, { CSSProperties, FormEvent, FunctionComponent, ReactElement, useCallback, useState } from 'react';

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
  isSubtle?: boolean;
  size?: DropDownSize;
  style?: CSSProperties;
  onChange?: (value: string) => void;
}

const useStyles = createUseStyles<DropdownClassNames>(styles);

const Dropdown: FunctionComponent<DropdownProps> = ({
  emptyLabel,
  id,
  options,
  isSubtle = false,
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
    [classes.IsSubtle]: isSubtle,
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
              value={ option.label }
            >
              {option.label}
            </option>
          ))
        }
      </select>
      <Icon key='icon' color='current' className={ classes.CollapseIcon } name='expand' />
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export { Dropdown };
