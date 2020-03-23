import { buntstift } from 'buntstift';
import { Command } from 'command-line-interface';
import { optimizeImages } from './optimizeImages';
import { OptimizeImagesOptions } from './OptimizeImagesOptions';

const optimizeImagesCommand = function (): Command<OptimizeImagesOptions> {
  return {
    name: 'optimize-images',
    description: 'Optimizes the size of .jpg, .png, and .svg images.',

    optionDefinitions: [
      {
        name: 'source',
        alias: 's',
        description: 'set the source directory',
        parameterName: 'path',
        type: 'string',
        isRequired: true
      },
      {
        name: 'destination',
        alias: 'd',
        description: 'set the destination directory',
        parameterName: 'path',
        type: 'string',
        isRequired: true
      }
    ],

    async handle ({ options: { verbose, source, destination }}): Promise<void> {
      buntstift.configure(
        buntstift.getConfiguration().
          withVerboseMode(verbose)
      );

      const stopWaiting = buntstift.wait();

      try {
        await optimizeImages({ source, destination, verbose });
      } finally {
        stopWaiting();
      }
    }
  };
};

export { optimizeImagesCommand };
