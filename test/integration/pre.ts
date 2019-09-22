import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { spawn } from 'child_process';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  try {
    const projectRoot = path.join(__dirname, '..', '..'),
          webpackExampleRoot = path.join(projectRoot, 'examples', 'with-webpack');

    await fs.promises.rmdir(path.join(projectRoot, 'dist'), { recursive: true });

    let childProcess = shell.exec('npx roboter build', { cwd: projectRoot });

    if (childProcess.code !== 0) {
      throw new Error('Failed to create dist.');
    }

    // We install the depencencies of the webpack example.
    if (!shell.test('-d', path.join(webpackExampleRoot, 'node_modules'))) {
      childProcess = shell.exec('npm install', { cwd: webpackExampleRoot });

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

        if (serverOutput.includes('Compiled successfully.')) {
          devServerProcess.stdout.removeListener('data', watchServerStart);

          return resolve();
        }
      };

      devServerProcess = spawn('npm', [ 'run', 'serve' ], {
        detached: true,
        cwd: webpackExampleRoot
      });
      devServerProcess.stdout.on('data', watchServerStart);
      devServerProcess.stderr.on('data', logErrors);

      process.once('exit', cleanUpOnExit);
      process.once('SIGINT', cleanUpOnExit);
      process.once('SIGTERM', cleanUpOnExit);
    });
  } catch (ex) {
    console.log('bla');
  }
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
