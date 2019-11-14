import { useState } from 'react';

const useForceUpdate = (): () => void => {
  const [ , set ] = useState(true);

  return (): void => {
    set((value): boolean => !value);
  };
};

export { useForceUpdate };
