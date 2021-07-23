import { isReactElement } from '../../utils/isReactElement';
import prettyFormat, { plugins as availablePlugins } from 'pretty-format';

const { ReactElement: ReactElementPlugin } = availablePlugins;

const formatAsPrettyString = (source?: any): string | undefined => {
  const plugins = [];

  if (isReactElement(source)) {
    plugins.push(ReactElementPlugin);
  }

  const prettifiedSourceAsString = prettyFormat(source, { plugins });

  return prettifiedSourceAsString;
};

export { formatAsPrettyString };
