import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToRemove.txt';
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const handleError = () => {
    throw new Error(ERROR_MESSAGE);
  };

  await fsPromises.access(filePath).catch(handleError);
  await fsPromises.rm(filePath).catch(handleError);
};

await remove();
