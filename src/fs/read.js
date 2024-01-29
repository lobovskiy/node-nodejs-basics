import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToRead.txt';
const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const handleError = () => {
    throw new Error(ERROR_MESSAGE);
  };

  await fsPromises.access(filePath).catch(handleError);
  const fileData = await fsPromises.readFile(filePath, { encoding: 'utf8' });
  console.log(fileData);
};

await read();
