import path from 'node:path';
import fs from 'node:fs';
import { createInterface } from 'node:readline';
import { EOL } from 'node:os';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'fileToWrite.txt';
const WRITING_PROMPT = `Type something below to write in the "fileToWrite.txt". Press Ctrl + C to exit.${EOL}`;

const write = async () => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);
  const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8', flags: 'a' });
  const ioInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: WRITING_PROMPT,
  });

  ioInterface.on('line', (input) => {
    writeStream.write(input);
    writeStream.write(EOL);
  })
  ioInterface.on('close', () => {
    writeStream.close();
  })
  ioInterface.prompt();
};

await write();
