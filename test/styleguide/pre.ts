import { buntstift } from 'buntstift';
import { nginx } from '../shared/containers/nginx';
import path from 'path';
import shell from 'shelljs';
import { styleguideTestPort } from '../shared/environment';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  const projectRoot = path.join(__dirname, '..', '..');
  const staticBuildDirectory = path.join(__dirname, '..', '..', 'styleguide', 'out');

  // Remove temporary build folder from previous tests.
  shell.rm('-rf', [
    path.join(projectRoot, 'build'),
    staticBuildDirectory
  ]);

  // Create a build via roboter, so that the test application always uses the
  // latest version.
  let childProcess = shell.exec('npx roboter build', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    buntstift.error('Failed to create build.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  // Build a static export of the styleguide that we can then serve using
  // nginx. If we would run the Next.js app as a server, Next.js compiles pages
  // lazily. This would result in higher and unpredicatable timeouts for the
  // tests.
  childProcess = shell.exec('npm run build-styleguide', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    buntstift.error('Failed to create static export from styleguide.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  try {
    await nginx.start({
      rootDirectory: staticBuildDirectory,
      port: styleguideTestPort
    });
  } catch {
    buntstift.error('Failed to serve styleguide for tests.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
})();

/* eslint-enable @typescript-eslint/no-floating-promises */
