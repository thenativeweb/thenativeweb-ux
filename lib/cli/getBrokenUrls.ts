import { BrokenUrl } from './BrokenUrl';
import { cloneDeep } from 'lodash';
import { getExternalUrlsFromPage } from './getExternalUrlsFromPage';
import { getPage } from './getPage';
import { noop } from './noop';

const getBrokenUrls = async function ({
  urls,
  baseUrl,
  ignore = [],
  onVerifying = noop,
  onBrokenUrl = noop
}: {
  urls: string[];
  baseUrl: string;
  ignore?: RegExp[];
  onVerifying?: ({ url }: { url: string }) => void;
  onBrokenUrl?: ({ url, referrers }: { url: string; referrers?: string[] }) => void;
}): Promise<BrokenUrl[]> {
  const brokenUrls: BrokenUrl[] = [];

  const urlsToVerify = cloneDeep(urls);
  const verifiedUrls: string[] = [];
  const referrers: Record<string, string[] | undefined> = {};

  // eslint-disable-next-line no-constant-condition, @typescript-eslint/no-unnecessary-condition
  while (true) {
    const currentUrl = urlsToVerify.pop();

    if (!currentUrl) {
      break;
    }

    onVerifying({ url: currentUrl });

    verifiedUrls.push(currentUrl);

    let page;

    try {
      page = await getPage({ url: currentUrl });
    } catch {
      brokenUrls.push({ url: currentUrl, referrers: referrers[currentUrl] });
      onBrokenUrl({ url: currentUrl, referrers: referrers[currentUrl] });
      continue;
    }

    if (!currentUrl.startsWith(baseUrl)) {
      continue;
    }

    const externalUrls = getExternalUrlsFromPage({ page, baseUrl });

    for (const externalUrl of externalUrls) {
      if (!referrers[externalUrl]) {
        referrers[externalUrl] = [];
      }

      if (!referrers[externalUrl]!.includes(currentUrl)) {
        referrers[externalUrl]!.push(currentUrl);
      }

      if (verifiedUrls.includes(externalUrl)) {
        continue;
      }
      if (ignore.some((ignorePattern): boolean => ignorePattern.test(externalUrl))) {
        continue;
      }

      if (!urlsToVerify.includes(externalUrl)) {
        urlsToVerify.push(externalUrl);
      }
    }
  }

  return brokenUrls;
};

export { getBrokenUrls };
