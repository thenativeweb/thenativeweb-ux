import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { CheckBox, ControlGroup, ControlGroupDivider, ControlGroupItem, Headline, Paragraph, TextBox } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <Fragment>
    <Headline>ControlGroup</Headline>

    <Paragraph>
      A <code>ControlGroup</code> is a group of input elements inside
      a <code>Form</code>.
      It consistst of one or more <code>ControlGroupItem</code> and can
      visually be separated using a <code>ControlGroupDivider</code>.
    </Paragraph>

    <ComponentPreview>
      <ControlGroup>
        <ControlGroupItem label='First name'>
          <TextBox
            placeholder='Enter your first name…'
          />
        </ControlGroupItem>
      </ControlGroup>
    </ComponentPreview>

    <Headline level='2'>Grouping items horizontally</Headline>

    <Paragraph>
      Some input elements work best when they&apos;re groupd together in one
      line, e.g. the city and the zip code of an address.
      In such cases you can add two items into a <code>ControlGroupItem</code>.
    </Paragraph>

    <ComponentPreview>
      <ControlGroup>
        <ControlGroupItem label='First name'>
          <TextBox
            placeholder='Your first name'
          />
        </ControlGroupItem>

        <ControlGroupItem label='Your name'>
          <TextBox
            placeholder='Your last name'
          />
        </ControlGroupItem>
      </ControlGroup>
    </ComponentPreview>

    <Headline level='2'>Adjusting the size of items</Headline>

    <Paragraph>
      By default items will be sized equally. But input components work best
      when their size reflects the expected input data. Use
      the <code>adjust</code> property of the <code>ControlGroupItem</code> to
      define wether an item should be flexible or automatically use its own
      size.
    </Paragraph>

    <ComponentPreview>
      <ControlGroup>
        <ControlGroupItem label='City' adjust='flex'>
          <TextBox
            placeholder='The city you live in…'
          />
        </ControlGroupItem>
        <ControlGroupItem label='Zip' adjust='auto'>
          <TextBox
            placeholder='Your ZIP code'
          />
        </ControlGroupItem>
      </ControlGroup>
    </ComponentPreview>

    <Headline level='2'>Grouping sections vertically</Headline>

    <Paragraph>
      By adding a <code>ControlGroupDivider</code> between groups it is possible
      to better separate different sections inside a <code>Form</code>.
    </Paragraph>

    <ComponentPreview>
      <Fragment>
        <ControlGroup>
          <ControlGroupItem label='Subject'>
            <TextBox
              placeholder='Enter a subject…'
            />
          </ControlGroupItem>
        </ControlGroup>
        <ControlGroup>
          <ControlGroupItem label='Tags'>
            <TextBox
              placeholder='Enter comma sepeared tags…'
            />
          </ControlGroupItem>
        </ControlGroup>

        <ControlGroupDivider />

        <ControlGroup>
          <ControlGroupItem label='Publish at specific date'>
            <CheckBox />
          </ControlGroupItem>
        </ControlGroup>
      </Fragment>
    </ComponentPreview>
  </Fragment>
);

export { Documentation };
