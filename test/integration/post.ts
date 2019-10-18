import nginx from '../shared/containers/nginx';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async function (): Promise<void> {
  await nginx.stop();
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
