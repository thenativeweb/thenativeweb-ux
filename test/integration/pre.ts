import nginx from '../shared/containers/nginx';
import path from 'path';
import shell from 'shelljs';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  const projectRoot = path.join(__dirname, '..', '..');
  const nextJsExampleRoot = path.join(projectRoot, 'examples', 'with-next-js');

  // Remove temporary build folder from previous tests.
  shell.rm('-rf', [
    path.join(projectRoot, 'build')
  ]);

  // Create a build via roboter, so
  // that the test application always uses the the latest version.
  let childProcess = shell.exec('npx roboter build', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    throw new Error('Failed to create build.');
  }

  // Install the depencencies of the Next.js example.
  if (!shell.test('-d', path.join(nextJsExampleRoot, 'node_modules'))) {
    childProcess = shell.exec('npm install', { cwd: nextJsExampleRoot });

    if (childProcess.code !== 0) {
      throw new Error('Failed to install example dependencies.');
    }
  }

  // Build a static export of the Next.js example that we can then serve
  // using nginx. If we would run the Next.js app as a server,
  // Next.js compiles pages lazily. This would result in higher and unpredicatable
  // timeouts for the tests.
  childProcess = shell.exec('npm run export', { cwd: nextJsExampleRoot });

  if (childProcess.code !== 0) {
    throw new Error('Failed to create static export from Next.js example.');
  }

  await nginx.start();
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
