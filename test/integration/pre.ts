import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { ChildProcess, spawn } from 'child_process';

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

    await new Promise((resolve): void => {
      let serverOutput: string;
      let devServerProcess: ChildProcess | undefined,
          logErrors: (err: Error) => void,
          watchServerStart: (data: any) => void;

      const cleanUpOnExit = function (): void {
        if (devServerProcess) {
          devServerProcess.stdout!.removeListener('data', watchServerStart);
          devServerProcess.stderr!.removeListener('data', logErrors);

          process.kill(-devServerProcess.pid);
          devServerProcess = undefined;
        }
      };

      logErrors = (err): void => {
        /* eslint-disable no-console */
        console.log(err.toString());
        /* eslint-enable no-console */
      };

      watchServerStart = (data): void => {
        serverOutput += data;

        /* eslint-disable no-console */
        console.log(data.toString('utf8'));
        /* eslint-enable no-console */

        if (serverOutput.includes('Compiled successfully.')) {
          if (devServerProcess) {
            devServerProcess.stdout!.removeListener('data', watchServerStart);
          }

          return resolve();
        }
      };

      devServerProcess = spawn('npm', [ 'run', 'serve' ], {
        detached: true,
        cwd: webpackExampleRoot
      });
      devServerProcess.stdout!.on('data', watchServerStart);
      devServerProcess.stderr!.on('data', logErrors);

      process.once('exit', cleanUpOnExit);
      process.once('SIGINT', cleanUpOnExit);
      process.once('SIGTERM', cleanUpOnExit);
    });
  } catch (ex) {
    /* eslint-disable no-console */
    console.log(ex);
    /* eslint-enable no-console */
  }
})();
/* eslint-enable @typescript-eslint/no-floating-promises */
