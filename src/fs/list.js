import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
  const dirPath = path.resolve(__dirname, CONTENT_DIR_NAME);
  const handleError = () => {
    throw new Error(ERROR_MESSAGE);
  };

  await fsPromises.access(dirPath).catch(handleError);
  const files = await fsPromises.readdir(dirPath, { encoding: 'utf8' }).catch(handleError);
  console.table(files.map((file) => ({ name: file })));
};

await list();
