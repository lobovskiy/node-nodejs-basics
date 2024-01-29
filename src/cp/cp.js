import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const FILE_NAME = 'script.js';

const spawnChildProcess = async (args) => {
  const filePath = path.resolve(__dirname, CONTENT_DIR_NAME, FILE_NAME);

  spawn('node', [filePath, ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( [1, 'thisIsArg2', false]);
