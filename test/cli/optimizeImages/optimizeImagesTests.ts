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
  test('copies images from source to destination folder and optimizes their file size.', async (): Promise<void> => {
    const sourceDirectory = await isolated({
      files: path.join(__dirname, 'flat-images')
    });
    const destinationDirectory = await isolated();

    const originalSizes = {
      jpg: await getFileSize(path.join(sourceDirectory, 'flat-images', 'image.jpg')),
      png: await getFileSize(path.join(sourceDirectory, 'flat-images', 'image.png')),
      svg: await getFileSize(path.join(sourceDirectory, 'flat-images', 'image.svg'))
    };

    await optimizeImages({
      source: sourceDirectory,
      destination: destinationDirectory,
      verbose: true
    });

    const optimizedSizes = {
      jpg: await getFileSize(path.join(destinationDirectory, 'flat-images', 'image.jpg')),
      png: await getFileSize(path.join(destinationDirectory, 'flat-images', 'image.png')),
      svg: await getFileSize(path.join(destinationDirectory, 'flat-images', 'image.svg'))
    };

    assert.that(optimizedSizes.jpg < originalSizes.jpg).is.true();
    assert.that(optimizedSizes.png < originalSizes.png).is.true();
    assert.that(optimizedSizes.svg < originalSizes.svg).is.true();
  });

  test('supports nested directories.', async (): Promise<void> => {
    const sourceDirectory = await isolated({
      files: path.join(__dirname, 'nested-images')
    });
    const destinationDirectory = await isolated();

    const originalSizes = {
      jpg: await getFileSize(path.join(sourceDirectory, 'nested-images', 'jpg', 'image.jpg')),
      png: await getFileSize(path.join(sourceDirectory, 'nested-images', 'png', 'image.png')),
      svg: await getFileSize(path.join(sourceDirectory, 'nested-images', 'svg', 'image.svg'))
    };

    await optimizeImages({
      source: sourceDirectory,
      destination: destinationDirectory,
      verbose: true
    });

    const optimizedSizes = {
      jpg: await getFileSize(path.join(destinationDirectory, 'nested-images', 'jpg', 'image.jpg')),
      png: await getFileSize(path.join(destinationDirectory, 'nested-images', 'png', 'image.png')),
      svg: await getFileSize(path.join(destinationDirectory, 'nested-images', 'svg', 'image.svg'))
    };

    assert.that(optimizedSizes.jpg < originalSizes.jpg).is.true();
    assert.that(optimizedSizes.png < originalSizes.png).is.true();
    assert.that(optimizedSizes.svg < originalSizes.svg).is.true();
  });
});
