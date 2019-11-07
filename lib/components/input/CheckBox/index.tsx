import { Styles } from 'jss';
import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { CheckBoxClassNames } from './styles';

interface CheckBoxProps {
  className?: string;
  checked?: boolean;
  name?: string;
  id: string;
  style?: Styles;
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

export default CheckBox;
