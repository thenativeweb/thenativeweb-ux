import { buntstift } from 'buntstift';
import { ensureFile } from 'fs-extra';
import globby from 'globby';
import { optimizeJpg } from './optimizeJpg';
import { optimizePng } from './optimizePng';
import { optimizeSvg } from './optimizeSvg';
import os from 'os';
import path from 'path';
import PQueue from 'p-queue';

const optimizerForExtension = {
  jpg: optimizeJpg,
  jpeg: optimizeJpg,
  png: optimizePng,
  svg: optimizeSvg
};

type SupportedExtensionNames = keyof typeof optimizerForExtension;
const supportedExtensions = Object.keys(optimizerForExtension);

const optimizeImages = async function ({
  source,
  destination,
  verbose
}: {
  source: string;
  destination: string;
  verbose: boolean;
}): Promise<void> {
  const queue = new PQueue({ concurrency: os.cpus().length });

  const imagePaths = await globby(source, {
    expandDirectories: {
      extensions: supportedExtensions
    }
  });

  for (const sourcePath of imagePaths) {
    const relativeSourcePath = path.relative(source, sourcePath);
    const extensionName = path.extname(sourcePath).toLowerCase().replace('.', '') as SupportedExtensionNames;
    const destinationPath = path.join(destination, relativeSourcePath);
    const optimizeImage = optimizerForExtension[extensionName];

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    queue.add(async (): Promise<void> => {
      buntstift.verbose(`Optimizing ${sourcePath}...`);

      await ensureFile(destinationPath);
      await optimizeImage({ source: sourcePath, destination: destinationPath, verbose });

      buntstift.verbose(`Optimized ${sourcePath}.`);
    });
  }

  await queue.onIdle();
};

export { optimizeImages };
