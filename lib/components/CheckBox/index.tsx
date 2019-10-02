import Theme from '../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

const styles: Styles = (theme: Theme): Styles => ({
  CheckBox: {
    fontFamily: theme.font.family.default
  }
});

interface CheckBoxProps {
  classes: Classes;
  className?: string;
  checked?: boolean;
  name?: string;
  id: string;
  style?: Styles;
  onChange?: () => void;
}

const CheckBox: FunctionComponent<CheckBoxProps> = ({
  checked,
  classes,
  className,
  id,
  name,
  style,
  onChange
}): ReactElement => {
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

export default withStyles(styles)(CheckBox);
