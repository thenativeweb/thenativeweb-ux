import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { DropdownOption } from '../../input/Dropdown';
import { TransitionType } from './TransitionType';
import { types } from './types';
import { CheckBox, ControlGroup, ControlGroupItem, Dropdown, Form, Headline, Paragraph, Transition } from '../../..';
import React, { ReactElement, useState } from 'react';

const transitionTypes = Object.keys(types).map((type): DropdownOption => ({ label: type, value: type }));

const Documentation = (): ReactElement => {
  const [ isBoxVisible, setIsBoxVisible ] = useState(true);
  const [ type, setType ] = useState(transitionTypes[0].value);

  return (
    <React.Fragment>
      <Headline>Transition</Headline>

      <Paragraph>
        Transition is a component for animating a single element while it enters
        or leaves your application. There&apos;s a set of built-in types you can
        use: <code>Fade</code>, <code>FadeInLeft</code>, <code>FadeInRight</code>, <code>Grow</code> and <code>Zoom</code>.
        Wrap the component that should be animated and use the
        boolean <code>in</code> property to animate in and out. Please note that
        you might have to set explicit dimensions to the parent of the animated
        component in order to prevent a page jumps.
      </Paragraph>

      <ComponentPreview>
        <React.Fragment>
          <Form>
            <ControlGroup>
              <ControlGroupItem label='Transition type'>
                <Dropdown
                  value={ type }
                  options={ transitionTypes }
                  onChange={ (value: string): void => setType(value) }
                />
              </ControlGroupItem>
            </ControlGroup>
            <ControlGroup>
              <ControlGroupItem label='Show box'>
                <CheckBox onChange={ (): void => setIsBoxVisible(!isBoxVisible) } id='checkbox-is-box-visible' />
              </ControlGroupItem>
            </ControlGroup>
          </Form>

          <div style={{ width: 200, height: 200 }}>
            <Transition type={ type as TransitionType } in={ isBoxVisible }>
              <div
                style={{
                  width: 200,
                  height: 200,
                  background: 'deeppink'
                }}
              >
                This box will be animated using {type}.
              </div>
            </Transition>
          </div>
        </React.Fragment>
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
