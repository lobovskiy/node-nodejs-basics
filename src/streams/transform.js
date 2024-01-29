import { Transform } from 'stream';
import { EOL } from 'node:os';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().concat(EOL).join(''));
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
