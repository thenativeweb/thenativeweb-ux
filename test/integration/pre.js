const { spawn } = require('child_process'),
      path = require('path');

const shell = require('shelljs');

module.exports = async function () {
  const projectRoot = path.join(__dirname, '..', '..');

  // Remove temporary dist and build folders from previous tests
  shell.rm('-rf', [
    path.join(projectRoot, 'dist'),
    path.join(projectRoot, 'build')
  ]);

  // Create a distribution via roboter, so
  // that the test will always bundle the latest version.
  const childProcess = shell.exec(`npx roboter dist`, { cwd: projectRoot });

  if (childProcess.code !== 0) {
    throw new Error('Failed to create dist.');
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
      cwd: path.join(__dirname, '..', '..', 'examples', 'with-webpack')
    });
    devServerProcess.stdout.on('data', watchServerStart);
    devServerProcess.stderr.on('data', logErrors);

    process.once('exit', cleanUpOnExit);
    process.once('SIGINT', cleanUpOnExit);
    process.once('SIGTERM', cleanUpOnExit);
  });
};
