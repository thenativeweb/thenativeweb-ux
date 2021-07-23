import mozjpeg from 'mozjpeg';
import shell from 'shelljs';

const optimizeJpg = async function ({
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
    shell.exec(`${mozjpeg} -progressive -quality 70 -outfile '${destination}'  '${source}'`, { cwd, silent: !verbose }, (code): void => {
      if (code !== 0) {
        return reject(new Error(`Failed to optimize '${source}'.`));
      }

      resolve();
    });
  });
};

export { optimizeJpg };
