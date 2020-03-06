import { assert } from 'assertthat';
import { getStyleguideUrl } from '../shared/environment';
import path from 'path';
import shell from 'shelljs';

suite('styleguide', (): void => {
  test('contains no broken urls.', async function (): Promise<void> {
    this.timeout(10_000);

    const projectRoot = path.join(__dirname, '..', '..');
    const styleguideUrl = getStyleguideUrl();
    const cliPath = path.join(__dirname, '..', '..', 'build', 'lib', 'bin', 'verifyLinks.js');

    const childProcess = shell.exec(`node ${cliPath} ${styleguideUrl} -v`, { cwd: projectRoot });

    assert.that(childProcess.code).is.equalTo(0);
  });
});
