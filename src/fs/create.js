import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const NEW_FILE_NAME = 'fresh.txt';
const NEW_FILE_DATA = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
  const newFilePath = path.resolve(__dirname, CONTENT_DIR_NAME, NEW_FILE_NAME);
  const handleError = () => {
    throw new Error(ERROR_MESSAGE);
  };

  await fsPromises.writeFile(newFilePath, NEW_FILE_DATA, { encoding: 'utf8', flag: 'wx' })
    .catch(handleError);
};

await create();
