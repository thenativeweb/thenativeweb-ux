import pngquant from 'pngquant-bin';
import shell from 'shelljs';

const optimizePng = async function ({
  source,
  destination,
  verbose
}: {
  source: string;
  destination: string;
  verbose: boolean;
}): Promise<void> {
  const cwd = process.cwd();

  await new Promise<void>((resolve, reject): void => {
    shell.exec(`${pngquant} --force --quality=80-90 --output '${destination}'  '${source}'`, { cwd, silent: !verbose }, (code): void => {
      if (code !== 0) {
        return reject(new Error(`Failed to optimize '${source}'.`));
      }

      resolve();
    });
  });
};

export { optimizePng };
