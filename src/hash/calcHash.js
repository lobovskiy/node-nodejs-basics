import path from 'node:path';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const updateHashWithData = (hash, data) => {
    typeof data === "string"
      ? hash.update(data, 'utf8')
      : hash.update(data);
  }

  const hash = createHash('sha256');
  const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

  stream.on('data', (chunk) => {
    updateHashWithData(hash, chunk);
  });

  stream.on('end', () => {
    console.log(hash.digest('hex'));
  })
};

await calculateHash();
