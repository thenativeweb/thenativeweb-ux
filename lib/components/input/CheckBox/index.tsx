import { Theme } from '../../..';
import { CheckBoxClassNames, styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface CheckBoxProps {
  className?: string;
  checked?: boolean;
  name?: string;
  id?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

const useStyles = createUseStyles<Theme, CheckBoxClassNames>(styles);

const CheckBox: FunctionComponent<CheckBoxProps> = ({
  checked,
  className,
  id,
  name,
  style,
  onChange
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.CheckBox, className);

  return (
    <input
      id={ id }
      className={ componentClasses }
      name={ name }
      style={ style }
      type='checkbox'
      checked={ checked }
      onChange={ onChange }
    />
  );
};

export { CheckBox };
