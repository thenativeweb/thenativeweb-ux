import {
  Grid,
  GridItem
} from '../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div>
    <Grid id='grid'>
      <GridItem columnSpan='6' id='grid-item-span6-first'>First column</GridItem>
      <GridItem columnSpan='6' id='grid-item-span6-second'>Second column</GridItem>
      <GridItem columnSpan={{ xs: 12, md: 6 }} id='grid-item-span6-responsive-third'>Third column</GridItem>
      <GridItem columnSpan={{ xs: 12, md: 6 }} id='grid-item-span6-responsive-fourth'>Fourth column</GridItem>
    </Grid>
  </div>
);
