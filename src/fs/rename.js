import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const OLD_FILE_NAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';
const ERROR_MESSAGE = 'FS operation failed';

const rename = async () => {
  const oldFilePath = path.resolve(__dirname, CONTENT_DIR_NAME, OLD_FILE_NAME);
  const newFilePath = path.resolve(__dirname, CONTENT_DIR_NAME, NEW_FILE_NAME);
  const handleError = () => {
    throw new Error(ERROR_MESSAGE);
  };
  const isFileExists = async (filePath) =>
    await fsPromises.access(filePath).then(() => true).catch(() => false);

  const isOldFileExists = await isFileExists(oldFilePath);
  const isNewFileExists = await isFileExists(newFilePath);

  if (!isOldFileExists || isNewFileExists) {
    throw new Error(ERROR_MESSAGE);
  }

  await fsPromises.rename(oldFilePath, newFilePath).catch(handleError);
};

await rename();
