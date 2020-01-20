import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, MobileToggle, Paragraph } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ isVisible, setIsVisible ] = useState(true);

  return (
    <React.Fragment>
      <Headline>MobileToggle</Headline>

      <Paragraph>
        A <code>MobileToggle</code> can be used show and hide mobile navigation
        elements. It floats above the content layer in the upper right of the
        application. By default it is only visible on mobile devices.
        Set the <code>isResponsive</code> property to <code>true</code> in order
        to show it on all screen sizes.
      </Paragraph>

      <ComponentPreview>
        <MobileToggle
          position='absolute'
          isResponsive={ false }
          isVisible={ isVisible }
          onClick={ (): void => setIsVisible(!isVisible) }
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
