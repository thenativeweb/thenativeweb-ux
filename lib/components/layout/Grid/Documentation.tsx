import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Grid, GridItem, Headline, Link, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Grid</Headline>
    <Paragraph>
      The <code>Grid</code> component uses the CSS grid layout to create
      flexible grids. By default it creates a 12-column layout. Please note
      that for <code>xs</code> screens a 1-column-layout will be applied. You
      can adjust this behaviour by using
      the <code><Link href='#columns'>columns</Link></code> property.
    </Paragraph>

    <Paragraph>
      Each child will automatically be placed inside the next column. Once all
      the 12 columns have been filled, the next item will be placed inside a
      new row but within the first column.
    </Paragraph>
    <ComponentPreview>
      <Grid>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
        <div>Column 4</div>
        <div>Column 5</div>
        <div>Column 6</div>
        <div>Column 7</div>
        <div>Column 8</div>
        <div>Column 9</div>
        <div>Column 10</div>
        <div>Column 11</div>
        <div>Column 12</div>
        <div>Column 1</div>
      </Grid>
    </ComponentPreview>

    <Headline level='2' id='columns'>Column count</Headline>
    <Paragraph>
      If you want to adjust the number of columns, use
      the <code>columns</code> property.
    </Paragraph>
    <ComponentPreview>
      <Grid columns='3'>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
        <div>Column 1</div>
      </Grid>
    </ComponentPreview>

    <Headline level='2'>Responsive column count</Headline>
    <Paragraph>
      It is possible to provide multiple <code>columns</code> values depending
      on the size of the viewport:
    </Paragraph>
    <ComponentPreview>
      <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        <GridItem>First Column</GridItem>
        <GridItem>Second Column</GridItem>
        <GridItem>Third Column</GridItem>
        <GridItem>Fourth Column</GridItem>
      </Grid>
    </ComponentPreview>

    <Headline level='2'>Colum and row gap</Headline>
    <Paragraph>
      The <code>columnGap</code> and the  <code>rowGap</code> property can
      be used to control horizontal and vertical gaps between items of the grid:
    </Paragraph>
    <ComponentPreview>
      <React.Fragment>
        <Grid columns='3' columnGap='1' rowGap='1'>
          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>
          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>
          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>

          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>
          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>
          <GridItem style={{ background: 'gray' }}>Small gaps</GridItem>
        </Grid>

        <Grid columns='3' columnGap='6' rowGap='6'>
          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>
          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>
          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>

          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>
          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>
          <GridItem style={{ background: 'deeppink' }}>Bigger gaps</GridItem>
        </Grid>
      </React.Fragment>
    </ComponentPreview>

    <Headline>GridItem</Headline>
    <Paragraph>
      If you need more control when positioning elements inside
      a <code>Grid</code> use the <code>GridItem</code> component.
    </Paragraph>

    <Headline level='2'>columnSpan</Headline>
    <Paragraph>
      To span an element across multiple columns, set
      the <code>columnSpan</code> property:
    </Paragraph>
    <ComponentPreview>
      <Grid>
        <GridItem columnSpan='6'>Column from gap 1-6</GridItem>
        <GridItem columnSpan='6'>Column from gap 7-12</GridItem>
        <GridItem columnSpan='12'>Column from gap 1-12</GridItem>
      </Grid>
    </ComponentPreview>

    <Headline level='2'>Responsive columnSpan</Headline>
    <Paragraph>
      It is possible to provide multiple <code>columSpan</code> values depending
      on the size of the viewport:
    </Paragraph>
    <ComponentPreview>
      <Grid>
        <GridItem columnSpan={{ sm: 12, md: 6, lg: 4 }}>
          Spans 12 columns on small, 6 on a medium and 4 columns on large
          devices…
        </GridItem>
        <GridItem columnSpan={{ sm: 12, md: 6, lg: 4 }}>
          Spans 12 columns on small, 6 on a medium and 4 columns on large
          devices…
        </GridItem>
        <GridItem columnSpan={{ sm: 12, md: 6, lg: 4 }}>
          Spans 12 columns on small, 6 on a medium and 4 columns on large
          devices…
        </GridItem>
      </Grid>
    </ComponentPreview>

    <Headline level='2'>columnStart and columnEnd</Headline>
    <Paragraph>
      Instead of using <code>columnSpan</code> you can set
      the <code>columnStart</code> property to specifiy in which column an
      element should be start in. Use the `columnEnd` property to set a
      specific column to end with.
    </Paragraph>
    <ComponentPreview>
      <Grid>
        <GridItem columnStart='1' columnEnd='6'>Column from gap 1-6</GridItem>
        <GridItem columnStart='7' columnEnd='12'>Column from gap 7-12</GridItem>
        <GridItem columnStart='1' columnEnd='12'>Column from gap 1-12</GridItem>
        <GridItem columnStart='10' columnEnd='12'>Fills only the last three columns</GridItem>
      </Grid>
    </ComponentPreview>

    <Paragraph>
      Again, it is possible to provide
      multiple <code>columnStart</code> and <code>columnEnd</code> values
      depending on the size of the viewport:
    </Paragraph>
    <ComponentPreview>
      <Grid>
        <GridItem
          columnStart={{ sm: 1, lg: 4 }}
          columnEnd={{ sm: 12, lg: 10 }}
        >
            Spans across all 12 columns on small devices and from colum 4-10
            on large devices.
        </GridItem>
      </Grid>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
