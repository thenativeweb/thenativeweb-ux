import { Router } from 'next/router';
import { useEffect } from 'react';

const useRouteChange = (onChange: (url: string) => void, dependencies?: any []): void => {
  const handleRouteChange = (url: string): void => {
    onChange(url);
  };

  useEffect((): () => void => {
    Router.events.on('routeChangeComplete', handleRouteChange);

    return (): void => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, dependencies);
};

export { useRouteChange };
