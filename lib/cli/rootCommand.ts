import { Command } from 'command-line-interface';
import { optimizeImagesCommand } from './optimizeImages/optimizeImagesCommand';
import { RootOptions } from './RootOptions';
import { verifyLinksCommand } from './verifyLinks/verifyLinksCommand';

const rootCommand = function (): Command<RootOptions> {
  return {
    name: 'ux',
    description: 'Provides UX management.',

    optionDefinitions: [
      {
        name: 'verbose',
        alias: 'v',
        description: 'enable verbose mode',
        type: 'boolean',
        isRequired: false,
        defaultValue: false
      }
    ],

    handle ({ getUsage }): void {
      // eslint-disable-next-line no-console
      console.log(getUsage({ commandPath: [ 'ux' ]}));
    },

    subcommands: {
      'optimize-images': optimizeImagesCommand(),
      'verify-links': verifyLinksCommand()
    }
  };
};

export { rootCommand };
