import path from 'path';
import shell from 'shelljs';
import { spawn } from 'child_process';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  const projectRoot = path.join(__dirname, '..', '..');
  const nextJsExampleRoot = path.join(projectRoot, 'examples', 'with-next-js');

  // Remove temporary dist folder from previous tests.
  shell.rm('-rf', [
    path.join(projectRoot, 'dist')
  ]);

  // Create a distribution via roboter, so
  // that the test will always bundle the latest version.
  let childProcess = shell.exec('npx roboter precompile', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    throw new Error('Failed to create dist.');
  }

  // We install the depencencies of the Next.js example.
  if (!shell.test('-d', path.join(nextJsExampleRoot, 'node_modules'))) {
    childProcess = shell.exec('npm install', { cwd: nextJsExampleRoot });

    if (childProcess.code !== 0) {
      throw new Error('Failed to install example dependencies.');
    }
  }

  await new Promise(resolve => {
    let serverOutput;
    let devServerProcess,
        logErrors,
        watchServerStart;

    const cleanUpOnExit = function () {
      devServerProcess.stdout.removeListener('data', watchServerStart);
      devServerProcess.stderr.removeListener('data', logErrors);

      if (devServerProcess) {
        process.kill(-devServerProcess.pid);
        devServerProcess = undefined;
      }
    };

    logErrors = err => {
      /* eslint-disable no-console */
      console.log(err.toString('utf8'));
      /* eslint-enable no-console */
    };

    watchServerStart = data => {
      serverOutput += data;

      /* eslint-disable no-console */
      console.log(data.toString('utf8'));
      /* eslint-enable no-console */

      if (serverOutput.includes('[ info ]  waiting on http://localhost:3000')) {
        devServerProcess.stdout.removeListener('data', watchServerStart);

        return resolve();
      }
    };

    devServerProcess = spawn('npm', [ 'run', 'serve' ], {
      detached: true,
      cwd: nextJsExampleRoot
    });
    devServerProcess.stdout.on('data', watchServerStart);
    devServerProcess.stderr.on('data', logErrors);

    process.once('exit', cleanUpOnExit);
    process.once('SIGINT', cleanUpOnExit);
    process.once('SIGTERM', cleanUpOnExit);
  });
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
