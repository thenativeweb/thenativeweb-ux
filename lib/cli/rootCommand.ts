import { buntstift } from 'buntstift';
import { Command } from 'command-line-interface';
import { getBrokenUrls } from './getBrokenUrls';
import { RootOptions } from './RootOptions';

const rootCommand = function (): Command<RootOptions> {
  return {
    name: 'verify-links',
    description: 'Verifies links.',

    optionDefinitions: [
      {
        name: 'verbose',
        alias: 'v',
        description: 'enable verbose mode',
        type: 'boolean',
        isRequired: false,
        defaultValue: false
      },
      {
        name: 'url',
        alias: 'u',
        description: 'set the url to verify',
        parameterName: 'url',
        type: 'string',
        isRequired: true,
        defaultOption: true
      },
      {
        name: 'ignore',
        alias: 'i',
        description: 'set the ignore filter',
        parameterName: 'regex',
        type: 'string',
        isRequired: false
      }
    ],

    async handle ({ options: { verbose, url, ignore }}): Promise<void> {
      buntstift.configure(
        buntstift.getConfiguration().
          withVerboseMode(verbose)
      );

      const stopWaiting = buntstift.wait();

      let ignoreRegex;

      if (ignore) {
        ignoreRegex = [ new RegExp(ignore, 'u') ];
      }

      try {
        const brokenLinks = await getBrokenUrls({
          urls: [ url ],
          baseUrl: url,
          ignore: ignoreRegex,
          onVerifying ({ url: verifiedUrl }): void {
            buntstift.verbose(`Verifying '${verifiedUrl}'...`);
          },
          onBrokenUrl ({ url: brokenUrl, referrers }): void {
            buntstift.error(`Link to '${brokenUrl}' from '${referrers ?? '<unknown>'}' is broken.`);
          }
        });

        if (brokenLinks.length > 0) {
          stopWaiting();

          // eslint-disable-next-line unicorn/no-process-exit
          process.exit(1);
        }
      } finally {
        stopWaiting();
      }
    }
  };
};

export { rootCommand };
