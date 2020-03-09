import { integrationTestContainer } from '../shared/environment';
import { nginx } from '../shared/containers/nginx';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async function (): Promise<void> {
  await nginx.stop({ name: integrationTestContainer });
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
