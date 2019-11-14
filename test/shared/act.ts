import { act as actInternal } from 'react-dom/test-utils';

const act = (callback: () => void | undefined): void => {
  /* eslint-disable @typescript-eslint/no-floating-promises */
  actInternal(callback);
  /* eslint-enable @typescript-eslint/no-floating-promises */
};

export { act };
