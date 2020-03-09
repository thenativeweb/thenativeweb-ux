import {
  Space
} from '../../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div>
    <Space id='with-padding-as-string' padding='2'>
      Content
    </Space>
    <Space id='with-padding-as-number' padding={ 2 }>
      Content
    </Space>

    <Space id='with-paddingTop-as-string' paddingTop='2'>
      Content
    </Space>
    <Space id='with-paddingTop-as-number' paddingTop={ 2 }>
      Content
    </Space>

    <Space id='with-paddingBottom-as-string' paddingBottom='2'>
      Content
    </Space>
    <Space id='with-paddingBottom-as-number' paddingBottom={ 2 }>
      Content
    </Space>

    <Space id='with-paddingLeft-as-string' paddingLeft='2'>
      Content
    </Space>
    <Space id='with-paddingLeft-as-number' paddingLeft={ 2 }>
      Content
    </Space>

    <Space id='with-paddingRight-as-string' paddingRight='2'>
      Content
    </Space>
    <Space id='with-paddingRight-as-number' paddingRight={ 2 }>
      Content
    </Space>

    <Space id='with-paddingX-as-string' paddingX='2'>
      Content
    </Space>
    <Space id='with-paddingX-as-number' paddingX={ 2 }>
      Content
    </Space>

    <Space id='with-paddingY-as-string' paddingY='2'>
      Content
    </Space>
    <Space id='with-paddingY-as-number' paddingY={ 2 }>
      Content
    </Space>

    <Space id='with-responsive-padding' padding={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
      Content
    </Space>

    <Space id='with-between' between='2'>
      <div>First</div>
      <div>Second</div>
      <div>Last</div>
    </Space>
  </div>
);
