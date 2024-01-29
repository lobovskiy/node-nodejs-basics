import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR_NAME = 'files';
const DEST_DIR_NAME = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
  const sourceDirPath = path.resolve(__dirname, SOURCE_DIR_NAME);
  const destDirPath = path.resolve(__dirname, DEST_DIR_NAME);
  const handleCopyError = () => {
    throw new Error(ERROR_MESSAGE);
  };

  await fsPromises.mkdir(destDirPath).catch(handleCopyError);
  await fsPromises.cp(sourceDirPath, destDirPath, { recursive: true }).catch(handleCopyError);
};

await copy();
