import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Button, Headline, Paragraph, TransitionGroup } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ items, setItems ] = useState([ 'Thing 1' ]);

  const addItem = (): void => {
    const newItems = [ ...items, `Thing ${items.length + 1}` ];

    setItems(newItems);
  };

  const removeItem = (): void => {
    const newItems = items.slice(0, -1);

    setItems(newItems);
  };

  return (
    <React.Fragment>
      <Headline>TransitionGroup</Headline>

      <Paragraph>
        To transition an array of elements, use
        the <code>TransitionGroup</code> component. Please note that you have to
        set a unique key for each item in order to let React know which element
        has been added or removed.
      </Paragraph>

      <ComponentPreview>
        <React.Fragment>
          <div style={{ display: 'flex' }}>
            <Button onClick={ addItem }>Add item</Button>
            <Button onClick={ removeItem }>Remove item</Button>
          </div>
          <TransitionGroup type='FadeInRight'>
            { items.map((item): ReactElement => (
              <div
                style={{
                  width: 100,
                  height: 100,
                  float: 'left',
                  background: 'deeppink',
                  marginRight: 20,
                  marginTop: 20
                }}
                key={ item }
              >
                {item}
              </div>
            )) }
          </TransitionGroup>
        </React.Fragment>
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
