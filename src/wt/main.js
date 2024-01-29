import path from 'path';
import { isMainThread, Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKER_MODULE_NAME = 'worker.js';
const WORKER_STATUSES = {
  Resolved: 'resolved',
  Error: 'error',
};

const performCalculations = async () => {
  const workerModulePath = path.resolve(__dirname, WORKER_MODULE_NAME);

  if (isMainThread) {
    const results = [];

    const isAllWorkersCompleted = () => results.filter(r => r).length === numberOfWorkers;
    const checkResults = () => {
      if (isAllWorkersCompleted()) {
        console.log(results);
      }
    }

    const createWorker = (workerData, workerIndex) => {
      const worker = new Worker(workerModulePath, { workerData });
      const addResult = (status, data) => {
        results[workerIndex] = { status, data };
        checkResults();
      };

      worker.on('message', (value) => {
        addResult(WORKER_STATUSES.Resolved, value);
      });
      worker.on('error', () => {
        addResult(WORKER_STATUSES.Error, null);
      });
    }

    const numberOfWorkers = cpus().length;
    const dataArr = [...Array(numberOfWorkers).keys()].map((i) => 10 + i);

    dataArr.forEach((value, index) => {
      createWorker(value, index);
    });
  }
};

await performCalculations();
