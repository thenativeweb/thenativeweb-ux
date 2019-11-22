import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Styleguide } from '../../../layouts/Styleguide';
import { Button, ButtonHint, Headline } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <Styleguide>
    <Headline>Button</Headline>

    <ComponentPreview>
      <div>
        <Button onClick={ (): void => alert('clicked') }>Click me!</Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Adjusting to flex container</Headline>

    <ComponentPreview>
      <div style={{ display: 'flex' }}>
        <Button adjust='flex'>flex</Button>
        <Button adjust='auto'>auto</Button>
        <Button adjust='auto'>auto</Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Sizes</Headline>

    <ComponentPreview>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button size='sm'>Small Button</Button>
        <Button>Default Button</Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Primary and subtle</Headline>

    <ComponentPreview>
      <div style={{ display: 'flex' }}>
        <Button isSubtle={ true } isPrimary={ true } icon='heart'>Subtle button</Button>
        <Button isPrimary={ false }>Cancel</Button>
        <Button isPrimary={ true }>Primary button</Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Hints</Headline>
    <p>Hints can be used for displaying keyboard shortcuts.</p>

    <ComponentPreview>
      <div>
        <Button>Small Button <ButtonHint>[Ctrl+Enter]</ButtonHint></Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Setting button types explicitly</Headline>

    <p>
      If you use the button inside a form you may want to control the type of your button. By default the type `button` will be used. If you create a primary button the type will be set to `submit` automatically.
    </p>

    <ComponentPreview>
      <div>
        <Button isPrimary={ true } type='button'>Primary button that wont submit</Button>
        <Button type='submit'>Submit</Button>
        <Button type='reset'>Reset</Button>
      </div>
    </ComponentPreview>

    <Headline level='2'>Icons</Headline>

    <p>Hints can be used for displaying keyboard shortcuts.</p>

    <ComponentPreview>
      <div>
        <Button icon='heart'>Button with icon</Button>
        <Button icon='heart' />
      </div>
    </ComponentPreview>
  </Styleguide>
);

export { Documentation };
