const path = require('path');

const shell = require('shelljs');

const projectRoot = path.join(__dirname, '..');
const webpackExampleRoot = path.join(projectRoot, 'examples', 'with-webpack');

if (shell.test('-d', webpackExampleRoot)) {
  const childProcess = shell.exec(`npm install`, { cwd: webpackExampleRoot });

  if (childProcess.code !== 0) {
    /* eslint-disable no-console */
    console.log('Failed to install example dependencies.');
    /* eslint-enable no-console */

    /* eslint-disable no-process-exit */
    process.exit(1);
    /* eslint-disable no-process-exit */
  }
}
