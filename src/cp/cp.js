import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR_NAME = 'files';
const SCRIPT_MODULE_NAME = 'script.js';

const spawnChildProcess = async (args) => {
  const scriptModulePath = path.resolve(__dirname, CONTENT_DIR_NAME, SCRIPT_MODULE_NAME);

  spawn('node', [scriptModulePath, ...args], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( [1, 'thisIsArg2', false]);
