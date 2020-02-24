import { FunctionComponent } from 'react';

export interface LayoutComponent<TProps = {}> extends FunctionComponent<TProps> {
  isLayout: true;
}
