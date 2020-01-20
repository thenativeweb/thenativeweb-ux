import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { CheckBox, Headline } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <React.Fragment>
      <Headline>CheckBox</Headline>

      <ComponentPreview>
        <div>
          <CheckBox
            checked={ isChecked }
            onChange={
              (): void => {
                setIsChecked(!isChecked);
              }
            }
          />
        </div>
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
