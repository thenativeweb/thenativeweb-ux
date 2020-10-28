import internalPath from 'path';
import untildify from 'untildify';

const getAbsolutePath = function ({ path, cwd }: {
  path: string;
  cwd: string;
}): string {
  const untilfiedPath = untildify(path);

  if (internalPath.isAbsolute(untilfiedPath)) {
    return untilfiedPath;
  }

  const absolutePath = internalPath.join(cwd, path);

  return absolutePath;
};

export { getAbsolutePath };
