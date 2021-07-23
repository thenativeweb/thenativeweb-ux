import { FunctionComponent } from 'react';

export interface LayoutComponent<TProps = object> extends FunctionComponent<TProps> {
  isLayout: true;
}
