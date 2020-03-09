import { DocumentationPage } from '../../../lib';
import { navigation } from '../../configuration/navigation';
import React, { FunctionComponent, ReactElement } from 'react';

const Styleguide: FunctionComponent = ({
  children
}): ReactElement => (
  <DocumentationPage
    siteTitle='the native web UX'
    productName='ux'
    navigation={ navigation }
    linkToImprint='/en-us/imprint'
    linkToPrivacyPolicy='/en-us/privacy-policy'
    yearOfCreation={ 2017 }
  >
    {
      children
    }
  </DocumentationPage>
);

export { Styleguide };
