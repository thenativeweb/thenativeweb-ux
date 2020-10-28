import { FunctionComponent } from 'react';

export interface LayoutComponent<TProps = Record<string, unknown>> extends FunctionComponent<TProps> {
  isLayout: true;
}
