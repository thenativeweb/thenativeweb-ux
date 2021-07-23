import shell from 'shelljs';

const optimizeSvg = async function ({
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
    shell.exec(`npx svgo '${source}' -o '${destination}'`, { cwd, silent: !verbose }, (code): void => {
      if (code !== 0) {
        return reject(new Error(`Failed to optimize '${source}'.`));
      }

      resolve();
    });
  });
};

export { optimizeSvg };
