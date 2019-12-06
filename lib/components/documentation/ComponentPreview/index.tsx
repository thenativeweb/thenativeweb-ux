import { Code } from '../Code';
import { formatAsPrettyString } from '../formatAsPrettyString';
import { SplitView } from '../SplitView';

import React, { FunctionComponent, ReactElement } from 'react';

interface ComponentPreviewProps {
  className?: string;
}

const ComponentPreview: FunctionComponent<ComponentPreviewProps> = ({ children }): ReactElement => (
  <SplitView>
    <Code language='jsx'>
      { formatAsPrettyString(children) }
    </Code>

    { children }
  </SplitView>
);

export { ComponentPreview };
