import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Button, CheckBox, ControlGroup, ControlGroupItem, Form, FormActions, Headline, notifications, Paragraph, TextBox } from '../../..';
import React, { ChangeEvent, FormEvent, Fragment, ReactElement, useState } from 'react';

const handleSubmit = (event: FormEvent): void => {
  event.preventDefault();

  notifications.show({ type: 'success', text: 'onSubmit(event)' });
};

const Documentation = (): ReactElement => {
  const [ firstValue, setFirstValue ] = useState<string>();
  const [ secondValue, setSecondValue ] = useState<boolean>();

  return (
    <Fragment>
      <Headline>Form</Headline>

      <Paragraph>
        A <code>Form</code> groups several input components to gather information
        from the user. The <code>FormActions</code> are placed right beneath
        the input components and display at least two actions to either complete
        or cancel the current task.
      </Paragraph>

      <Paragraph>
        A <code>Form</code> can be submitted by hitting <code>Enter</code> while
        entering text inside an input component or by pressing the
        primary <code>Button</code> of the form.
      </Paragraph>

      <Headline level='2'>Sample form</Headline>

      <ComponentPreview>
        <Form onSubmit={ handleSubmit }>
          <ControlGroup>
            <ControlGroupItem label='First value' adjust='flex'>
              <TextBox
                value={ firstValue }
                onChange={ (event: ChangeEvent<HTMLInputElement>): void => setFirstValue(event.target.value) }
                placeholder='Enter some data…'
              />
            </ControlGroupItem>
          </ControlGroup>
          <ControlGroup>
            <ControlGroupItem label='This is a second value'>
              <CheckBox
                checked={ secondValue }
                onChange={ (): void => setSecondValue(!secondValue) }
              />
            </ControlGroupItem>
          </ControlGroup>
          <FormActions>
            <Button isPrimary={ true }>Submit</Button>
            <Button>Cancel</Button>
          </FormActions>
        </Form>
      </ComponentPreview>

      <Headline level='2'>Stacked actions</Headline>

      <Paragraph>
        If there is limited space available horizontally, it is possible to
        stack <code>FormActions</code> by setting the <code>type</code> property
        of <code>FormActions</code> component to <code>&quot;stacked&quot;</code>
      </Paragraph>

      <ComponentPreview>
        <Form onSubmit={ handleSubmit }>
          <ControlGroup>
            <ControlGroupItem label='First value' adjust='flex'>
              <TextBox
                value={ firstValue }
                onChange={ (event: ChangeEvent<HTMLInputElement>): void => setFirstValue(event.target.value) }
                placeholder='Enter some data…'
              />
            </ControlGroupItem>
          </ControlGroup>
          <ControlGroup>
            <ControlGroupItem label='This is a second value'>
              <CheckBox
                checked={ secondValue }
                onChange={ (): void => setSecondValue(!secondValue) }
              />
            </ControlGroupItem>
          </ControlGroup>
          <FormActions type='stacked'>
            <Button isPrimary={ true }>Submit</Button>
            <Button>Cancel</Button>
          </FormActions>
        </Form>
      </ComponentPreview>
    </Fragment>
  );
};

export { Documentation };
