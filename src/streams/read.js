import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToRead.txt';

const read = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  readStream.pipe(process.stdout);
};

await read();
