const { spawn } = require('child_process'),
      path = require('path');

module.exports = async function () {
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

      if (serverOutput.includes('webpack: Compiled successfully.')) {
        devServerProcess.stdout.removeListener('data', watchServerStart);

        return resolve();
      }
    };

    devServerProcess = spawn('webpack-dev-server', {
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
