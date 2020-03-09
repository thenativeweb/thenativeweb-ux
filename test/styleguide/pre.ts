import { buntstift } from 'buntstift';
import path from 'path';
import shell from 'shelljs';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async (): Promise<void> => {
  const projectRoot = path.join(__dirname, '..', '..');
  const staticBuildDirectory = path.join(__dirname, '..', '..', 'styleguide', 'out');

  // Remove temporary build folder from previous tests.
  shell.rm('-rf', [
    staticBuildDirectory
  ]);

  // Build a static export of the styleguide that we can then serve using
  // nginx. If we would run the Next.js app as a server, Next.js compiles pages
  // lazily. This would result in higher and unpredicatable timeouts for the
  // tests.
  const childProcess = shell.exec('npm run build-styleguide', { cwd: projectRoot });

  if (childProcess.code !== 0) {
    buntstift.error('Failed to create static export from styleguide.');

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
})();

/* eslint-enable @typescript-eslint/no-floating-promises */
