/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const { spawn } = require('child_process');

module.exports = function (done) {
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

  logErrors = function (err) {
    /* eslint-disable no-console */
    console.log(err.toString('utf8'));
    /* eslint-enable no-console */
  };

  watchServerStart = function (data) {
    serverOutput += data;

    /* eslint-disable no-console */
    console.log(data.toString('utf8'));
    /* eslint-enable no-console */

    if (serverOutput.includes('webpack: Compiled successfully')) {
      devServerProcess.stdout.removeListener('data', watchServerStart);

      return done();
    }
  };

  devServerProcess = spawn('bot', [ 'serve' ], { detached: true });
  devServerProcess.stdout.on('data', watchServerStart);
  devServerProcess.stderr.on('data', logErrors);

  process.once('exit', cleanUpOnExit);
  process.once('SIGINT', cleanUpOnExit);
  process.once('SIGTERM', cleanUpOnExit);
};
