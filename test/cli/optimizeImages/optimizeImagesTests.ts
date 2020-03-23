import { assert } from 'assertthat';
import { promises as fs } from 'fs';
import { isolated } from 'isolated';
import { optimizeImages } from '../../../lib/cli/optimizeImages/optimizeImages';
import path from 'path';

const getFileSize = async function (filePath: string): Promise<number> {
  const { size } = await fs.stat(filePath);

  return size;
};

suite('optimizeImages', (): void => {
  test('copies images from the source to destination directory and optimizes their file sizes.', async (): Promise<void> => {
    const sourceDirectory = await isolated({
      files: path.join(__dirname, 'flatImages')
    });
    const destinationDirectory = await isolated();

    const originalSizes = {
      jpg: await getFileSize(path.join(sourceDirectory, 'flatImages', 'image.jpg')),
      png: await getFileSize(path.join(sourceDirectory, 'flatImages', 'image.png')),
      svg: await getFileSize(path.join(sourceDirectory, 'flatImages', 'image.svg'))
    };

    await optimizeImages({
      source: sourceDirectory,
      destination: destinationDirectory,
      verbose: true
    });

    const optimizedSizes = {
      jpg: await getFileSize(path.join(destinationDirectory, 'flatImages', 'image.jpg')),
      png: await getFileSize(path.join(destinationDirectory, 'flatImages', 'image.png')),
      svg: await getFileSize(path.join(destinationDirectory, 'flatImages', 'image.svg'))
    };

    assert.that(optimizedSizes.jpg).is.lessThan(originalSizes.jpg);
    assert.that(optimizedSizes.png).is.lessThan(originalSizes.png);
    assert.that(optimizedSizes.svg).is.lessThan(originalSizes.svg);
  });

  test('supports nested directories.', async (): Promise<void> => {
    const sourceDirectory = await isolated({
      files: path.join(__dirname, 'nestedImages')
    });
    const destinationDirectory = await isolated();

    const originalSizes = {
      jpg: await getFileSize(path.join(sourceDirectory, 'nestedImages', 'jpg', 'image.jpg')),
      png: await getFileSize(path.join(sourceDirectory, 'nestedImages', 'png', 'image.png')),
      svg: await getFileSize(path.join(sourceDirectory, 'nestedImages', 'svg', 'image.svg'))
    };

    await optimizeImages({
      source: sourceDirectory,
      destination: destinationDirectory,
      verbose: true
    });

    const optimizedSizes = {
      jpg: await getFileSize(path.join(destinationDirectory, 'nestedImages', 'jpg', 'image.jpg')),
      png: await getFileSize(path.join(destinationDirectory, 'nestedImages', 'png', 'image.png')),
      svg: await getFileSize(path.join(destinationDirectory, 'nestedImages', 'svg', 'image.svg'))
    };

    assert.that(optimizedSizes.jpg).is.lessThan(originalSizes.jpg);
    assert.that(optimizedSizes.png).is.lessThan(originalSizes.png);
    assert.that(optimizedSizes.svg).is.lessThan(originalSizes.svg);
  });
});
