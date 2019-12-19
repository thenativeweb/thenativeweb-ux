import { Size } from '../themes/Size';
import { useTheme } from './useCustomTheme';
import { useEffect, useState } from 'react';

const useDevice = (): Size | undefined => {
  const isClient = typeof window === 'object';
  const theme = useTheme();

  const getDevice = (): Size | undefined => {
    const width = isClient ? window.innerWidth : 0;
    let size: Size | undefined;

    if (width > 0 && width <= theme.breakpoints.steps.sm) {
      size = 'xs';
    } else if (width > theme.breakpoints.steps.sm && width < theme.breakpoints.steps.md) {
      size = 'sm';
    } else if (width > theme.breakpoints.steps.md && width < theme.breakpoints.steps.lg) {
      size = 'md';
    } else if (width > theme.breakpoints.steps.lg && width < theme.breakpoints.steps.xl) {
      size = 'lg';
    } else if (width > theme.breakpoints.steps.xl) {
      size = 'xl';
    }

    return size;
  };

  const [ device, setDevice ] = useState<Size | undefined>(getDevice);

  const handleResize = (): void => {
    setDevice(getDevice());
  };

  useEffect((): (() => void) | undefined => {
    if (!isClient) {
      return;
    }

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export { useDevice };
