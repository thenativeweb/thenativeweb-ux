import { Button } from '../../..';
import { Classes } from 'jss';
import React, { ReactElement } from 'react';

export interface RenderToggleOptions {
  value: string;
  isSelected: boolean;
  changeValue: (newValue: string) => void;
  classes: Classes;
}

const renderDefaultToggle = ({ value, isSelected, changeValue, classes }: RenderToggleOptions): ReactElement => (
  <Button
    className={ isSelected ? classes.ActiveButton : classes.Button }
    onClick={ (): void => changeValue(value) }
    key={ value }
  >{ value }
  </Button>
);

export { renderDefaultToggle };
