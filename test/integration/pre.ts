import { buntstift } from 'buntstift';
import { nginx } from '../shared/containers/nginx';
import path from 'path';
import shell from 'shelljs';
import { integrationTestContainer, integrationTestPort } from '../shared/environment';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  const projectRoot = path.join(__dirname, '..', '..');

  // Remove temporary build folder from previous tests.
  shell.rm('-rf', [
    path.join(projectRoot, 'build')
  ]);

  // Create a build via roboter, so that the test application always uses the
  // latest version.
  let childProcess = shell.exec('npx roboter build', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    buntstift.error('Failed to create build.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  // Build a static export of the Next.js example that we can then serve using
  // nginx. If we would run the Next.js app as a server, Next.js compiles pages
  // lazily. This would result in higher and unpredicatable timeouts for the
  // tests.
  childProcess = shell.exec('npm run export-sample-application', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    buntstift.error('Failed to create static export from Next.js sample application.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  try {
    const staticBuildDirectory = path.join(__dirname, '..', 'shared', 'sampleApplication', 'out');

    await nginx.start({
      name: integrationTestContainer,
      rootDirectory: staticBuildDirectory,
      port: integrationTestPort
    });
  } catch {
    buntstift.error('Failed to serve sample application for integration tests.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
})();

/* eslint-enable @typescript-eslint/no-floating-promises */
